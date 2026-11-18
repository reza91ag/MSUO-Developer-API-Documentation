---
title: "Persistence"
sidebar_label: "Persistence"
---

# Persistence

The inspected persistence backend uses **Google Cloud Firestore**. Persistence operations are registered as `System → Persistence → WriteToDB / OverwriteDB / ReadFromDB / RemoveFromDB` in `LogicPool.cs`. They are executable LogicNodes, not methods on `Data` itself.

| LogicPool ID | Implementation | Semantics |
|---|---|---|
| `WriteToDB` | `PersistToDB` | Recursive merge persistence |
| `OverwriteDB` | `HardPersistToDB` | Authoritative replacement and child reconciliation |
| `ReadFromDB` | `ReadFromDB` | Pattern-guided recursive retrieval |
| `RemoveFromDB` | `RemoveFromDB` | Pattern-guided deletion, including selective value removal |

See the four operation pages for precise behavior, access restrictions, ambiguity handling, and caveats.

**Source:** `Runtime/LogicPool/LogicPool.cs`, `Runtime/LogicPool/Infrastructure/Infrastructure.cs`.
