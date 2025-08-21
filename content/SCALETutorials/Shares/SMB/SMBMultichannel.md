---
title: "Setting Up SMB Multichannel"
description: "Provides information on setting up SMB multichannel."
weight: 60
aliases:
tags:
 - smb
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

SMB multichannel allows servers to use multiple network connections simultaneously by combining the bandwidth of several network interface cards (NICs) for better performance.

{{< hint type=important >}}
SMB multichannel does not function if you combine NICs into a LAGG.
{{< /hint >}}

## Configuring Multiple Network Interfaces

Do not configure multiple SMB multichannel interfaces on the same subnet. To ensure reliable multichannel performance, TrueNAS recommends placing each interface on a different subnet. 

If interfaces share a subnet, the system could fail to initialize multichannel, experience several connectivity issues, and accept inbound traffic inconsistently. To avoid these issues, assign each NIC a unique IP address on a different subnet and avoid bridging interfaces used for multichannel.

## Activating Multichannel in TrueNAS

{{< hint type=note >}}
If you already have clients connected to SMB shares, disconnect them before activating multichannel.
{{< /hint >}}

1. Go to **System > Services** and click the <span class="material-icons">edit</span> edit icon for the SMB service.
2. Click **Advanced Settings**, then enable **Multichannel**.
3. Save and restart the SMB service, then reconnect all clients to their SMB Shares.

## Validating Multichannel Activated In Windows

After you connect a client to their SMB share, open Powershell as an administrator on a client, then enter `Get-SmbMultichannelConnection`. The terminal should list multiple server IPs.

```powershell
# View active SMB multichannel connections
Get‑SmbMultichannelConnection

# Sample output:
#   Server Name    Selected Client IP       Server IP      Client Interface    Index    Server
#   -------------  ----------- ---------    ---------      -------------------------    ------
#   192.168.10.2   True    192.168.10.10    192.168.10.2   5                            2
#   192.168.20.2   True    192.168.20.10    192.168.20.2   16                           5
```

You can also enter `Get-SmbMultichannelConnection | ConvertTo-Json` and ensure `CurrentChannels` is more than 1.

# View details as JSON

```powershell
# View details as JSON
Get-SmbMultichannelConnection | ConvertTo-Json

# Sample output:
[
  {
    "CimClass": {
      "CimSuperClassName": null,
      "CimClass": null,
      "CimClassProperties": "...",
      "CimClassQualifiers": "...",
      "CimClassMethods": "...",
      "CimSystemProperties": "Microsoft.Management.Infrastructure.CimSystemProperties"
    },
    "CimInstanceProperties": [
      {
        "ClientInterfaceFriendlyName": "Ethernet 3",
        "ClientInterfaceIndex": 5,
        "ClientIpAddress": "10.230.46.64",
        "ClientLinkSpeed": 10000000000,
        "ClientRdmaCapable": false,
        "ClientRSSCapable": false,
        "CurrentChannels": 2
      }
    ]
  }
]
```

