---
title: "Recursive Removal"
sidebar_label: "Recursive Removal"
---

# Recursive Removal

`int Remove(Data pattern, bool valueCheck = true)` repeatedly finds matching terminal nodes, removes them from their parents, and prunes empty ancestor containers. The return value counts removed terminal nodes, not necessarily all pruned containers.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
