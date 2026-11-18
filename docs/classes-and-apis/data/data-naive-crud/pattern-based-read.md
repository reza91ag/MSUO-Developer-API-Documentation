---
title: "Pattern-Based Read"
sidebar_label: "Pattern-Based Read"
---

# Pattern-Based Read

`Data? Read(Data pattern)` resolves targets using the pattern with value constraints. It returns `null` for zero or multiple matches; for one match it returns a recursive clone of the resolved node.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
