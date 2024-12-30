---
title: "Shares"
description: "Tutorials for configuring the various data sharing features in TrueNAS."
geekdocCollapseSection: true
aliases:
 - /scale/scaletutorials/shares/
 - /scale/shares/
weight: 7
tags:
- shares
related: false
---

File sharing is one of the primary benefits of a NAS. TrueNAS helps foster collaboration between users through network shares.  
TrueNAS allows users to create and configure Windows SMB shares, Unix (NFS) shares, and block (iSCSI) shares targets.

{{< hint type=note >}}
When creating zvols for shares, avoid giving them names with capital letters or spaces since they can cause problems and failures with iSCSI and NFS shares.
{{< /hint >}}

{{< enterprise >}}
iXsystems TrueNAS Enterprise customers should contact iXsystems Support to receive additional guidance on system configuration.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< include file="/static/includes/DisruptiveActionslist.md" >}}
{{< /enterprise >}}

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
