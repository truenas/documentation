---
title: "Shares"
description: "Tutorials for configuring the various data sharing features in TrueNAS SCALE."
geekdocCollapseSection: true
aliases: /scale/scaletutorials/shares/
weight: 110
---

File sharing is one of the primary benefits of a NAS. TrueNAS helps foster collaboration between users through network shares.  
TrueNAS SCALE allows users to create and configure Windows SMB shares, Unix (NFS) shares, and block (iSCSI) shares targets.

{{< hint type=note >}}
When creating zvols for shares, avoid giving them names with capital letters or spaces since they can cause problems and failures with iSCSI and NFS shares.
{{< /hint >}}

## Contents

{{< children depth="2" description="true" >}}
