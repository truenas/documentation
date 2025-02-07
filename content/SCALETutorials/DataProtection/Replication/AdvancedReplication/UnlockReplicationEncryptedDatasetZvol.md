---
title: "Unlocking a Replication Encrypted Dataset or Zvol"
description: "Provides information on three methods of unlocking replicated encrypted datasets or zvols without a passphrase."
weight: 30
tags:
 - replication
 - backup
---

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special JSON manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/static/includes/ReplicatedEncryptedUnlock.md" >}}
