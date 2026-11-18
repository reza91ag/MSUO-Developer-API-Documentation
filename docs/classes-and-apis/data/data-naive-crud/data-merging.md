---
title: "Data Merging"
sidebar_label: "Data Merging"
---

# Data Merging

`bool Add(Data data)` performs structural add/patch. On a unique existing route it merges values and children. Incoming nonempty value pairs override matching keys and preserve unspecified keys; incoming `null` or `{}` clears existing value. New child identities are added; ambiguous structural matches return false. If the incoming root is not found, it is added beneath the receiver.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
