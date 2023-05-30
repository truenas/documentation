---
title: "System Dataset"
description: "Describes the System Dataset screen on TrueNAS CORE."
weight: 60
tags:
- coresystemdataset
- coredataset
---

The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

![ConfigureSystemDataset](/images/CORE/12.0/ConfigureSystemDataset.png "Configure System Dataset")

{{< truetable >}}
| Name | Description |
|------|------|
| System Dataset Pool | Select the pool to contain the system dataset. |
| Syslog | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device. |
{{< /truetable >}}

{{< taglist tag="coredataset" limit="10" >}}
