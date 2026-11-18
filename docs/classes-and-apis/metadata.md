---
title: "Metadata"
sidebar_label: "Metadata"
---

# Metadata

`Metadata` has `string id` and `Queue<string> actions`; constructor `Metadata(string id, Queue<string> queue)` and `Clone()`, which duplicates the action queue. `OrchestrationEngine.Orchestrate` dequeues action identifiers to discover LogicNodes.

**Source:** `Runtime/Component/Metadata/Metadata.cs` (uploaded `src.zip`).
