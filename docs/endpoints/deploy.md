---
title: "/Deploy (Dynamically Assignable Endpoint)"
sidebar_label: "/Deploy (Dynamically Assignable Endpoint)"
---

# /Deploy (Dynamically Assignable Endpoint)

The deployment route is configured by `DeploymentEndpoint.Route`; `/Deploy` is the fallback. It is registered only when `DeploymentEndpoint.Enabled` is true in `Program.cs`.

`MSUODeploymet.MapEndpoints` registers a GET HTML deployment page, POST deployment initiation, job status/download routes, and a password reset route. Password verification uses the configured `PasswordHash`; if that value is empty, `VerifyPassword` returns true.

**Important:** This is a configurable deployment endpoint, not evidence that arbitrary new business endpoints are generated from Metadata.

**Source:** `Program.cs` lines 49–53; `DevTools/MSUOTools.cs` `MSUODeploymet` class, `MapEndpoints`, `GetDeploymentRoute`.
