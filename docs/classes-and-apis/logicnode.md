---
title: "LogicNode"
sidebar_label: "LogicNode"
---

# LogicNode

`LogicNode` exposes `id`, `parent`, and keyed `children`. Constructors support empty, `id`, and `id` plus parent. `Execute(Data)` is virtual; default returns input. `_sign(Data)` pushes the node ID onto `lastProcessorID`. `Route(Data, NodeID)` discovers a node and invokes its `Execute`. `DiscoverNode` searches from the tree root; `AskForDependency` sets `needsDependencies` and returns a dependency-request DUP.

**Source:** `Runtime/LogicPool/LogicNode.cs` (uploaded `src.zip`).
