---
title: "LogicPool"
sidebar_label: "LogicPool"
---

# LogicPool

`LogicPool` constructs root `MSUO`, `System/Persistence` with four operations, and `App` with an OptiSpec subtree in the inspected constructor. `LoadAppFromDLL()` uses configured `App.Path`, loads a subclass of `LogicSubTree`, and mounts it under `App`; it returns bool. Its constructor invocation is commented out in this snapshot.

**Source:** `Runtime/LogicPool/LogicPool.cs` (uploaded `src.zip`).
