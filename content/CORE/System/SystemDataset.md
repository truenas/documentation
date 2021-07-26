---
title: "System Dataset"
weight: 70
---

{{< toc >}}

The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

To view the current location of the system dataset, go to **System > System Dataset**.

![ConfigureSystemDataset](/images/CORE/12.0/ConfigureSystemDataset.png "Configure System Dataset")

## Change System Dataset

Users can change the system dataset by selecting an existing pool from the *System Dataset Pool* dropdown.

Users can also move the system dataset to unencrypted pools or encrypted pools that do not have passphrases.

Moving the system dataset to an encrypted pool disables that volume's passphrase cabability.

You cannot move the system dataset to an encrypted pool that has a passphrase set or a pool that is read-only.

{{< hint warning >}}
**Reboots Required**

* The SMB service must restart, which causes a brief outage for any active SMB connections.
* Highly Available TrueNAS systems must reboot the standby controller when the system dataset moves.

{{< /hint >}}

If a user changes the pool storing the system dataset at a later time, TrueNAS will migrate the existing data in the system dataset to the new location.

## Storing the System Log

Users can store the system log on the system dataset.
We recommend storing this information on the system dataset when the system is generating large amounts of data and has limited memory or a limited capacity operating system device.

Set *Syslog* to store the system log on the system dataset.
Leave unset to store the system log in <file>/var</file> on the operating system device.
