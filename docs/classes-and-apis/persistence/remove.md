---
title: "RemoveFromDB — Pattern Removal"
sidebar_label: "RemoveFromDB — Pattern Removal"
---

# RemoveFromDB — Pattern Removal

**LogicNode:** `RemoveFromDB` (`Infrastructure.cs`, lines 2338–3052). Private `Remove(Data)` returns `bool`; `Execute(Data)` returns success/failure acknowledgement based on that result.

### Target resolution

The method searches Firestore for removal targets matching the DUP pattern. No matches cause failure. Multiple matches ordinarily fail as ambiguous; a **terminal collection value query** is a specific exception that can match multiple targets.

### Removal behavior

- If the resolved target is a document and the matched pattern has a value constraint, `RemoveValueSubset` performs selective value removal.
- Otherwise, a document target is deleted recursively through `DeleteDocumentTree`.
- A collection target is deleted recursively through `DeleteCollectionTree`.

`Execute` returns `Data.Ack("Failure", "Data Removal Failed!")` on false, and a success acknowledgement after successful removal.

### Backend selection caveat

Unlike the other persistence constructors, the private `Remove` method explicitly creates `FirestoreDb.Create(projectID)` for the removal operation. The code should not be documented as guaranteed to use the local emulator merely because the constructor configures one.

**Source:** `Infrastructure.cs` lines 2449–2560 and helper methods through line 3052.

**Source:** `Runtime/LogicPool/Infrastructure/Infrastructure.cs` (uploaded `src.zip`).
