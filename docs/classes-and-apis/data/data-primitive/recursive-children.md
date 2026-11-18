---
title: "Recursive Children Structure"
sidebar_label: "Recursive Children Structure"
---

# Recursive Children Structure

`children` is `MsuoTable`, a keyed `Dictionary<string, Data>` subclass. `Data` recursively owns child DUPs. Key-based `Set` and `Get` are documented under **Table CRUD → MSUO-Table → Child Management**, not as leaf traversal.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
