---
title: "OverwriteDB — Hard Persistence"
sidebar_label: "OverwriteDB — Hard Persistence"
---

# OverwriteDB — Hard Persistence

**LogicNode:** `HardPersistToDB` (`Infrastructure.cs`, lines 955–1899). Its private `Persist(Data)` follows the same unique-route / ambiguity / absolute-root / empty-ID rules as `PersistToDB`.

### Authoritative value replacement

`FlushFirebaseTree` writes the incoming `value` as authoritative JSON, including empty `{}`, with `SetAsync(payload)` (not `MergeAll`). A stored or incoming `AccessType` of `ReadOnly` or `Protected` blocks the value write for that node.

### Authoritative child reconciliation

Incoming children define the desired child set. The method recursively writes specified children, then calls `DeleteAbsentChildren` to reconcile stored children not represented by incoming `(type,id)` identities. An empty incoming child collection triggers reconciliation of all stored children. Protected/ReadOnly documents are preserved, **but unprotected descendants beneath them may still be deleted**. A protected parent does not prevent reconciliation of its descendants.

### Important implementation caveat

`Execute(Data)` calls `Persist(Data)` but does not check its boolean return value; it then returns `Data.Ack("Success", "Data Hard Persisted Successfully!")`. The acknowledgement alone does not establish success.

**Use with care:** this is an authoritative operation capable of removing stored descendants, not an alias for merge persistence.

**Source:** `Runtime/LogicPool/Infrastructure/Infrastructure.cs` (uploaded `src.zip`).
