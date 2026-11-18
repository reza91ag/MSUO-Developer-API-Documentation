---
title: "WatchDog & GitEngine"
sidebar_label: "WatchDog & GitEngine"
---

# WatchDog & GitEngine

`MSUOTools.Diagnostics.WatchDog` exposes activation controls, `Capture`, `success`, `fail`, diagnostic metadata, a log list, and a `GitEngine` member of type `Git`.

On `Activate()`, WatchDog activates Git and invokes a pre-debug Git cycle. That cycle calls `GitEngine.Commit()` and records line additions, deletions, total mutation volume, changed file paths, branch, and commit information when available. `Capture` records runtime diagnostics with source location information.

`Program.cs` and `BaseEntity.cs` conditionally activate diagnostics and may independently deactivate Git when `Git.Enabled` is false. The Git implementation lives in the same `MSUOTools.cs` source.

**Important:** these are observational diagnostics and Git mutation telemetry. They are not proof that every Git change corresponds to an independent architectural feature or that every logged runtime action succeeded.

**Source:** `DevTools/MSUOTools.cs` `Diagnostics.WatchDog` and `Git` classes; `Runtime/BaseEntity.cs`; `Program.cs`.

**Source:** `DevTools/MSUOTools.cs` (uploaded `src.zip`).
