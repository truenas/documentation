---
title: "Setting the System Dataset"
description: "Describes how to configure the system dataset on TrueNAS CORE."
weight: 70
tags:
- coresystemdataset
- coredataset
---

{{< toc >}}

The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

To view the current location of the system dataset, go to **System > System Dataset**.

![ConfigureSystemDataset](/images/CORE/12.0/ConfigureSystemDataset.png "Configure System Dataset")

## Store the System Log

Users can store the system log on the system dataset.
We recommend users store the log information on the system dataset when the system generates large amounts of data and has limited memory or a limited-capacity operating system device.

Set **Syslog** to store the system log on the system dataset.
Leave unset to store the system log in <file>/var</file> on the operating system device.

## Change System Dataset

Select an existing pool from the **System Dataset Pool** dropdown.

You can move the system dataset to unencrypted pools or encrypted pools that do not have passphrases.

Moving the system dataset to an encrypted pool disables that volume's passphrase capability.

You cannot move the system dataset to a passphrase-encrypted or read-only pool.

{{< hint type=important >}}
**Reboots Required**

* The SMB service must restart, which causes a brief outage for any active SMB connections.
* Highly Available TrueNAS systems must reboot the standby controller when the system dataset moves.

{{< /hint >}}

If a user changes the pool storing the system dataset later, TrueNAS migrates the existing data in the system dataset to the new location.

{{< taglist tag="coredataset" limit="10" >}}
