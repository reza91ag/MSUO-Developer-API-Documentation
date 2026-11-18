---
title: "Offline-First Persistence"
sidebar_label: "Offline-First Persistence"
---

# Offline-First Persistence

`Program.Main` calls `MSUOTools.DbTools.MSUODbSync.Start()` before starting the web host. `MSUODbSync.Start()` checks whether the configured Firestore emulator is listening; if not, it launches Firebase Firestore Emulator with an import/export directory, then launches a separately configured DB synchronization executable (`DBSyncExePath`) if not already running.

The source establishes **local emulator startup, local data import/export, and external sync-process launch**. It does **not** include the implementation of the external synchronization executable in `src.zip`; therefore, its synchronization direction, conflict resolution, delivery guarantees, and complete offline-first behavior cannot be documented as verified from this archive.

**Source:** `Program.cs` lines 11–13; `DevTools/MSUOTools.cs`, `MSUODbSync` class.

**Source:** `DevTools/MSUOTools.cs` (uploaded `src.zip`).
