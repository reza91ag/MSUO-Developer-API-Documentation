---
title: "WriteToDB — Merge Persistence"
sidebar_label: "WriteToDB — Merge Persistence"
---

# WriteToDB — Merge Persistence

**LogicNode:** `PersistToDB` (`Infrastructure.cs`, lines 60–954). `Execute(Data)` calls private `Persist(Data)`, signs the input and returns `Data.Ack("Success", "Data Persisted Successfully!")`.

### Route resolution

1. Search the Firestore hierarchy for the supplied DUP's structural level. `Data.type` identifies a collection level; `Data.id` identifies a document.
2. **One match:** write at the resolved document or collection location.
3. **Multiple matches:** abort as ambiguous.
4. **No match, nonempty ID:** fall back to absolute root `/{type}/{id}/...`.
5. **No match, empty ID:** fail; the implementation does not invent a document ID.

A collection-root DUP (empty `id`) writes its children as documents within a uniquely resolved collection.

### Value and child semantics

`FlushFirebaseTree` loads the existing document's `value` and merges JSON members: **incoming keys win; unspecified existing keys survive**. It writes `value` as a JSON string using Firestore `SetOptions.MergeAll`. It then recursively writes children under subcollections named by each child's `type`, with document IDs from `id`. The code also handles an existing native Firestore map in the `value` field.

### Important implementation caveat

`Persist(Data)` returns `bool`, but **`Execute(Data)` does not inspect that boolean** before returning a success acknowledgement. A failed internal persistence attempt may therefore still produce an acknowledgement whose `type` is `Success`. Do not treat the acknowledgement alone as proof of a successful write in this source snapshot.

The implementation is Firestore-specific, not database-vendor-agnostic.

**Source:** `Runtime/LogicPool/Infrastructure/Infrastructure.cs` (uploaded `src.zip`).
