---
title: "Aggregation — Sum"
sidebar_label: "Aggregation — Sum"
---

# Aggregation — Sum

`MsuoTable.Sum(IEnumerable<string>? filter = null, bool exclude = false)` aggregates direct children into a **new** DUP. It does not mutate the table. Zero children return null; a single child returns a filtered clone labeled `Sum`.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
