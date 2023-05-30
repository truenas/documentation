---
title: "S3 Screen"
description: "This article describes the S3 screen in TrueNAS CORE."
weight: 100
tags:
- cores3
- cores3minio
---

S3 manages data using object storage architecture.

{{< hint type=important >}}
Having large numbers of files (>100K for instance) in a single bucket with no sub-directories is not recommended. It can harm performance and cause stability issues.
{{< /hint >}}

Use the **S3** screen to configure S3 on your TrueNAS.

![ServicesS3Options](/images/CORE/12.0/ServicesS3Options.png "S3 Service Options")

The **SAVE** button activates after entering the required settings.

**CANCEL** closes the **S3** screen without saving changes and displays the **Services** screen.

{{< include file="/content/_includes/ServicesS3Fields.md" type="page" >}}

{{< hint type=important >}}
MinIO deprecated Access key and Secret key. MINIO_ROOT USER arguments and their values replace Access key. MINIO_ROOT_PASSWORD arguments and their values replace Secret key. For the ROOT_USER value, use a name up to 20 characters. For the ROOT_PASSWORD, use a string of 8 to 40 randomized characters. MinIO recommends using a long password string of unique random characters.
{{< /hint >}}

{{< taglist tag="cores3" limit="10" >}}
