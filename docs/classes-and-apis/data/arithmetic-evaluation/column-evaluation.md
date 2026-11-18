---
title: "Column Evaluation — EvalColumn"
sidebar_label: "Column Evaluation — EvalColumn"
---

# Column Evaluation — EvalColumn

`Data.EvalColumn(string column, string expression, string? where = null)` clones the DUP and evaluates a selected column across child rows. If no rows match `where`, it returns the unchanged clone.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
