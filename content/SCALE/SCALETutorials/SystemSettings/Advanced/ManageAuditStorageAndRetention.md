---
title: "Managing Audit Storage and Retention Policies"
description: "Provides information for updating Audit storage and retention policies in TrueNAS SCALE."
weight: 50
aliases:
tags:
 - audit
 - retention
 - storage
 - settings
---

The **Audit** widget on the **System > Advanced** screen allows management of Audit storage and retention policies in SCALE.

## Managing Audit Storage

To configure Audit storage and retention settings, go to **System Settings > Advanced**, then click **Configure** on the **Audit** widget.

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

**Example:** Change the percent usage **warning** threshold for the storage allocated to the Audit database.
1. Navigate to **System > Advanced** page.
2. Select the **Configure** button on the **Audit** widget.
3. In the Audit configuration popup, change the value in the **Quota Fill Warning** field to the desired percentage.
4. Select the **Save** button to effect the change.

