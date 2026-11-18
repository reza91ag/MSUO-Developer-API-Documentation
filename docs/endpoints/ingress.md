---
title: "/ingress (Static)"
sidebar_label: "/ingress (Static)"
---

# /ingress (Static)

**GET `/ingress`:** responds with HTTP 200 and `MSUO Ingress Endpoint is active.`

**POST `/ingress`:** extracts a payload and headers through `MSUOTools.ContextTools`, deserializes the payload to a DUP, resolves or constructs a `BaseEntity`, and calls `runtime.Ingest()`. A failed ingestion returns `Results.Problem`; successful ingestion returns `Results.Ok()`. An exception is logged and returned as a problem response.

The code reads an `Authorization` header as a runtime dictionary identifier. The request payload format and authorization security guarantees cannot be inferred solely from these route declarations.

**Source:** `Program.cs`, lines 55–119.
