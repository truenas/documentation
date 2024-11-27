---
title: "System Dataset"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/system/systemdataset/"
description: "Describes the System Dataset screen on TrueNAS CORE."
weight: 60
tags:
- systemdataset
- datasets
---

The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

![ConfigureSystemDataset](/images/CORE/System/ConfigureSystemDataset.png "Configure System Dataset")

{{< truetable >}}
| Name | Description |
|------|------|
| System Dataset Pool | Select the pool to contain the system dataset. |
| Syslog | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device. |
{{< /truetable >}}
