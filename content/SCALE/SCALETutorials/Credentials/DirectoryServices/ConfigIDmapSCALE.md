---
title: "Configuring IDMap"
description: "This article provides instructions on configuring and managing IDMap in SCALE."
weight: 35
aliases:
tags:
- scaleidmap
- scaledirectoryservices
---

{{< toc >}}


The **IDdmap** directory service lets users configure and select a backend to map Windows security identifiers (SIDs) to UNIX UIDs and GIDs. Users must enable the **Active Directory** service to configure and use Identity Mapping (Idmap).

![IdmapSCALE](/images/SCALE/IdmapSCALE.png "Idmap Window")

Users can click **Add** in the **Idmap** window to configure backends or click on an already existing Idmap to edit it.

TrueNAS automatically generates an Idmap after you configure AD or LDAP.

{{< taglist tag="scaleidmap" limit="10" >}}
{{< taglist tag="scaledirectoryservices" limit="10" title="Related Directory Services Articles" >}}