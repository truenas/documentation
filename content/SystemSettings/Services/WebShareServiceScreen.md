---
title: "WebShare Service Screen"
description: "Provides information on the WebShare service screen and settings."
weight: 150
tags:
- services
- webShare
- shares
doctype: reference
---


The **WebShare** service screen displays settings to configure the WebShare service.

{{< trueimage src="/images/SCALE/SystemSettings/WebShareServiceScreen.png" alt="WebShare Service Settings" id="WebShare Service Settings" >}}

{{< truetable >}}
| Icon | Description |
|------|-------------|
| **Enable TrueSearch** | Enables TrueSearch file indexing and search functionality. When enabled, the active WebShares are indexed for fast file searching. Requires a system connected to TrueNAS Connect or a TrueNAS Enterprise license that includes TrueSearch. The number of indexed files depends on the system edition and TrueNAS Connect plan. |
| **Passkey** | Configures passkey authentication for WebShare. Options are: **Required** - Users must use passkeys. **Enabled** - Users see passkeys as an option. **Disabled** - Turns off passkey authentication. |
{{< /truetable >}}