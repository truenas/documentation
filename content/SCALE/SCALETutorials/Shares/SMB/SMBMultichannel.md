---
title: "Setting Up SMB Multichannel"
description: "Provides information on setting up SMB multichannel."
weight: 60
aliases:
tags:
 - scalesmb
---

{{< toc >}}

SMB multichannel allows servers to use multiple network connections simultaneously by combining the bandwidth of several network interface cards (NICs) for better performance.

{{< hint type=important >}}
SMB multichannel does not function if you combine NICs into a LAGG. 
{{< /hint >}}

## Activating Multichannel in TrueNAS Scale

{{< hint type=note >}}
If you already have clients connected to SMB shares, disconnect them before activating multichannel.
{{< /hint >}}

1. Go to **System Settings > Services** and click the <span class="material-icons">edit</span> edit icon for the SMB service.
2. Click **Advanced Settings**, then enable **Multichannel**.
3. Save and restart the SMB service, then reconnect all clients to their SMB Shares.

## Validating Multichannel Activated In Windows

After you connect a client to their SMB share, open Powershell as an administrator on a client, then enter `Get-SmbMultichannelConnection`. The terminal should list multiple server IPs.

![SMBMultichannelValidateWindows1](/images/SCALE/22.12/SMBMultichannelValidateWindows1.png "Validate Multichannel")

You can also enter `Get-SmbMultichannelConnection | ConvertTo-Json` and ensure `CurrentChannels` is more than 1.

![SMBMultichannelValidateWindows2](/images/SCALE/22.12/SMBMultichannelValidateWindows2.png "Validate Multichannel")
