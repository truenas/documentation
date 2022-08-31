---
title: "Unlocking a Replication Encrypted Dataset or Zvol"
description: ""
weight: 70
aliases:
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}
