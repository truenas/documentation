---
title: "Configuring IDMap"
description: "This article provides instructions on configuring and managing ID mapping in SCALE."
weight: 35
aliases:
tags:
- scaleidmap
---

{{< toc >}}

{{< hint danger >}}
Only administrators experienced with configuring Id mapping should attempt to add new or edit existing idmaps. 
Misconfiguration can impact system operation.
{{< /hint >}}

The **IDdmap** directory service lets users configure and select a backend to map Windows security identifiers (SIDs) to UNIX UIDs and GIDs. Users must enable the **Active Directory** service to configure and use identity mapping (Idmap).

![IdmapSCALE](/images/SCALE/IdmapSCALE.png "Idmap Window")

Users can click **Add** in the **Idmap** window to configure backends or click on an already existing Idmap to edit it.

TrueNAS automatically generates an Idmap after you configure AD or LDAP.

## Adding an ID Map

From the **Directory Services** screen, click **Show** to the right of **Advanced Settings** and then click **Confirm** to close the warning dialog.

Click **Add** on the **Idmap** widget to open the **Idmap Settings** screen.

![AddIdmapDefalutScreen](/images/SCALE/22.12/AddIdmapDefalutScreen.png "Add Idmap Default Screen")

Select the type from the **Name** field dropdown. Screen settings change based on the selection.

Select the **Idmap Backend** type from the dropdown list. Screen settings change based on the backend selected.

Enter the required field values.

Click **Save**.

{{< taglist tag="scaleidmap" limit="10" >}}