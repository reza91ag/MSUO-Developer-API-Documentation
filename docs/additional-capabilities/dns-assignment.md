---
title: "Out-of-the-Box DNS Assignment"
sidebar_label: "Out-of-the-Box DNS Assignment"
---

# Out-of-the-Box DNS Assignment

`Program.Main` reads `App.Network-to-Edge.Provider.Cloudflare.Token` and calls `MSUOTools.NetworkToEdge.BootCloudflareTunnel(token)`. The implementation launches `cloudflared tunnel ... run --token ...` and streams selected diagnostics to the console.

This source demonstrates **Cloudflare Tunnel bootstrapping**. It does not show a general-purpose DNS record creation API or automated assignment of arbitrary hostnames. The documentation should not promise automatic DNS assignment until the relevant DNS configuration/provisioning implementation is supplied.

**Source:** `Program.cs` lines 35–45; `DevTools/MSUOTools.cs`, `NetworkToEdge.BootCloudflareTunnel`.

**Source:** `DevTools/MSUOTools.cs` (uploaded `src.zip`).
