---
title: "Configuring a Windows SMB share"
linkTitle: "Configuring a Windows SMB share"
description: "A how-to guide on how to set up a general purpose Windows SMB share for TrueNAS"
---

# Process Summary

* **Sharing > Windows Shares (SMB)**
  * Requirements
    * A pool or dataset on the TrueNAS system to be shared
    * Ensure **Services > SMB** is enabled.
    * A separate system with Linux, Windows, or MacOS to connect to the share