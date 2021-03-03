---
title: "System Dataset"
weight: 70
---

{{< toc >}}

The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

To view the current location of the system dataset, go to **System > System Dataset**.

## Change System Dataset

The system dataset can be changed by selecting an existing pool from the *System Dataset Pool* dropdown.
The system dataset can be moved to unencrypted pools or encrypted pools that do not have passphrases.

If the system dataset is moved to an encrypted pool, that volume is no longer allowed to have a passphrase.
When the encrypted pool already has a passphrase set, the system dataset cannot be moved to the pool.

{{< hint warning >}}
**Reboots Required**

* The SMB service must restart, which causes a brief outage for any active SMB connections.
* Highly Available TrueNAS systems must reboot the standby controller when the system dataset moves.

{{< /hint >}}

If the pool storing the system dataset is changed at a later time, TrueNAS migrates the existing data in the system dataset to the new location.

## Storing the System Log

The system log can be stored on the system dataset.
Storing this information on the system dataset is recommended when large amounts of data is being generated and the system has limited memory or a limited capacity operating system device.

Set *Syslog* to store the system log on the system dataset.
Leave unset to store the system log in <file>/var</file> on the operating system device.
