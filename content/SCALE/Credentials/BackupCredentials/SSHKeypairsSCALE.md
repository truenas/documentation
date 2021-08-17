---
title: "SSH Keypairs"
weight: 30
---

{{< toc >}}

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs in **Credentials > Backup Credentials**.
These are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**.
TrueNAS does not support encrypted keypairs or keypairs with passphrases.

TrueNAS automatically generates keypairs as needed when creating new **SSH Connections** or **Replication** tasks.
To manually create a new keypair, go to **System > SSH Keypairs**, click *ADD*, and give the keypair a unique *Name*.

## Creating an SSH Keypair

![AccountsUsersRootSSHKeySCALE](/images/SCALE/AccountsUsersRootSSHKeySCALE.png "SSH Keypairs Form")

Clicking the *Generate Keypair* button adds values to the public and private key fields.
Copy these strings or download them into text files for later use.
