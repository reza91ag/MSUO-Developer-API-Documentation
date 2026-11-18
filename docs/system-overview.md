---
title: "System Overview"
sidebar_label: "System Overview"
slug: /
---

# System Overview

MSUO uses a recursive `Data` (DUP) representation and `Metadata` action queue. `BaseEntity` manages the request lifecycle and Components; `OrchestrationEngine` resolves action identifiers to executable `LogicNode`s in the `LogicPool`. The `LogicPool` registers system persistence operations and an application subtree.

The uploaded source includes `EntryFlow.cs` and `OptiSpec.cs` as application logic files. The LogicPool constructor mounts OptiSpec directly; it also contains `LoadAppFromDLL()` for configured DLL loading, but the constructor's invocation is commented out in this snapshot.

**Primary files:** `Runtime/BaseEntity.cs`, `Runtime/Component/Component.cs`, `Runtime/OrchestrationEngine/OrchestrationEngine.cs`, `Runtime/LogicPool/LogicPool.cs`, `Runtime/LogicPool/LogicNode.cs`.

This documentation describes the inspected source snapshot, not an independently tested release.

## MSUO Kernel System Overview

![MSUO Kernel System Overview](/img/msuo-kernel-system-overview.png)

## MSUO Kernel Request Lifecycle

![MSUO Kernel Request Lifecycle](/img/msuo-kernel-request-lifecycle.gif)
