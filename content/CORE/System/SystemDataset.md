---
title: "System Dataset"
weight: 70
---

The system dataset stores debugging core files, encryption keys for encrypted
pools, and Samba4 metadata such as the user/group cache and share level
permissions.

## Change System Dataset

To view the current location of the system dataset, go to
**System > System Dataset**. The system dataset can be changed by selecting an
existing pool from the *System Dataset Pool* dropdown. The system dataset can
be moved to unencrypted pools or encrypted pools which do not have
passphrases. If the system dataset is moved to an encrypted pool, that
volume is no longer allowed to have a passphrase set. If the encrypted pool
already has a passphrase set, the system dataset cannot be moved to the pool.

{{% alert title="TrueNAS Enterprise" %}}
Moving the system dataset also requires rebooting the standby TrueNAS
controller for High Availability TrueNAS systems.
{{% /alert %}}

The SMB service must also be restarted. A dialog warns that the SMB service
must be restarted, causing a temporary outage of any active SMB connections.

System logs can also be stored on the system dataset. Storing this information
on the system dataset is recommended when large amounts of data is being
generated and the system has limited memory or a limited capacity operating
system device.

Set *Syslog* to store system logs on the system dataset. Leave unset to store
system logs in `/var` on the operating system device.

If the pool storing the system dataset is changed at a later time, TrueNAS
migrates the existing data in the system dataset to the new location.
