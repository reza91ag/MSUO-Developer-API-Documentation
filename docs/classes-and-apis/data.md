---
title: "Data"
sidebar_label: "Data"
---

# Data

`Data` is the recursive DUP primitive. Its `children` collection is an `MsuoTable : Dictionary<string, Data>`. Data-Naive CRUD acts on the recursive DUP; Table CRUD acts on the keyed child table. These are separate API groups.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
