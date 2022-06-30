---
title: "S3 Screen"
description: "Use the S3 screen to configure Amazon Simple Storage Service (S3) and related service options on your TrueNAS"
weight: 100
tags:
- cores3
- cores3minio
---

{{< hint warning >}}
Having large numbers of files (>100K for instance) in a single bucket with no sub-directories can harm performance and cause stability issues.
{{< /hint >}}

Use the **S3** screen to configure your TrueNAS S3 service.

![ServicesS3Options](/images/CORE/12.0/ServicesS3Options.png "S3 Service Options")

The **SAVE** button activates after entering the required settings.

**CANCEL** closes the **S3** screen without saving changes and displays the **Services** screen.

{{< include file="/content/_includes/ServicesS3Fields.md" type="page" >}}

{{< hint warning >}}
MinIO deprecated Access key and Secret key replacing them respectively with the MINIO_ROOT USER and MINIO_ROOT_PASSWORD arguments and their values. For the ROOT_USER value, use a name up to 20 characters. For the ROOT_PASSWORD, use a string of 8 to 40 randomized characters. MinIO recommends using a long password string of unique random characters.
{{< /hint >}}

{{< taglist tag="cores3" limit="10" title="Related S3 Articles" >}}

