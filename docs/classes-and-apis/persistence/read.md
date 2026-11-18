---
title: "ReadFromDB — Pattern Retrieval"
sidebar_label: "ReadFromDB — Pattern Retrieval"
---

# ReadFromDB — Pattern Retrieval

**LogicNode:** `ReadFromDB` (`Infrastructure.cs`, lines 1900–2337). Public `Task<Data?> Read(Data rootData)` and overridden `Execute(Data)`.

### Resolution

The method searches for a **unique** matching starting collection in Firestore. Zero matches and multiple matches return `null` (with diagnostic captures). It clones the supplied pattern, then calls `WalkPattern` to build the retrieved result.

### Pattern behavior

- **Terminal type-only pattern** (`id` empty, no children): harvests the entire matching collection, recursively expanding documents.
- **Terminal type + ID:** retrieves that document and recursively harvests its descendants.
- **Nonterminal pattern:** requires a nonempty ID and recursively follows the child paths specified by the pattern.

`Read` returns `null` when a requested path is not found or a resolver error occurs. `Execute` returns that nullable result. Do not interpret an empty-ID pattern as permission to search all collections indiscriminately: the starting collection must resolve uniquely.

**Source:** `Runtime/LogicPool/Infrastructure/Infrastructure.cs` (uploaded `src.zip`).
