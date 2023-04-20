---
title: "Setting Up SMB Multichannel"
description: "This article provides information on setting up SMB multichannel."
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
If you already have clients connected to SMB shares, disconnect them all before activating multichannel.
{{< /hint >}}

1. Go to **System Settings > Services** and stop the SMB service.
2. Go to **System Settings > Shell** and enter `midclt call smb.update '{"multichannel": true}'`

![SMBMultichannelActivate](/images/SCALE/22.12/SMBMultichannelActivate.png "Activate Multichannel")

3. Go back to **System Settings > Services** and start the SMB service.
4. Connect clients to their SMB shares.

### Validating Multichannel Activated In TrueNAS

Go to **System Settings > Shell** and enter `midclt call smb.getparm 'server multi channel support' global`. If Multichannel is active, the shell returns `True`.

![SMBMultichannelValidateTrueNAS](/images/SCALE/22.12/SMBMultichannelValidateTrueNAS.png "Validate Multichannel")

### Validating Multichannel Activated In Windows

After you connect a client to their SMB share, open Powershell as an administrator on a client, then enter `Get-SmbMultichannelConnection`. The terminal should list multiple server IPs.

![SMBMultichannelValidateWindows1](/images/SCALE/22.12/SMBMultichannelValidateWindows1.png "Validate Multichannel")

You can also enter `Get-SmbMultichannelConnection | ConvertTo-Json` and make sure `CurrentChannels` is greater than 1.

![SMBMultichannelValidateWindows2](/images/SCALE/22.12/SMBMultichannelValidateWindows2.png "Validate Multichannel")
