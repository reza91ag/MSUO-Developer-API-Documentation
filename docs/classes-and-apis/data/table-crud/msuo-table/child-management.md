---
title: "Child Management"
sidebar_label: "Child Management"
---

# Child Management

`Data.Set(string key, Data data)` and `Data.Get(string key)` access the keyed child table. `MsuoTable.AddChild` accepts one or multiple children; `RemoveChild` has overloads for Data, IDs and collections; `RemoveChildByType` removes children by type. `Data` exposes corresponding forwarding methods. `AddChild` uses `data.id` as the dictionary key.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
