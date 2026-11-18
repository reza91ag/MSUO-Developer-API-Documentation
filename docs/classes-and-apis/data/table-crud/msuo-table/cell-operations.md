---
title: "Cell Operations"
sidebar_label: "Cell Operations"
---

# Cell Operations

`ReplaceCell(string row, string column, object? newValue, string? where = null)` requires an existing row and existing column key. `RemoveCell` calls `ReplaceCell(..., null, ...)`, leaving the column key in place.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
