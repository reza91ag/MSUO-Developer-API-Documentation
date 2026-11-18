---
title: "Constructors & Typed Values"
sidebar_label: "Constructors & Typed Values"
---

# Constructors & Typed Values

`Data()` initializes empty `id`/`type`, empty `JsonObject value`, `MsuoTable(this)` children, a processor stack, and false authentication/dependency flags. Overloads accept `id`, `type`, and values of `JsonObject`, `int`, `long`, `float`, `double`, `string`, or `bool`. In the `(id,type)` and `(id,type,JsonObject)` overloads, types `Page`, `User`, and `App` set `AccessType` to `Protected` in the value.

**Source:** `Runtime/Component/DUP/Data.cs` (uploaded `src.zip`).
