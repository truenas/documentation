---
title: "Migrating MinIO Data from Previous TrueNAS Versions (Deprecated)"
description: "Provides instructions for migrating S3 data from the FreeBSD-based TrueNAS MinIO plugin to the Linux-based TrueNAS MinIO app. Deprecated and no longer usable."
weight: 10
tags:
- gettingstarted
- migrate
- s3
- apps
---

{{< hint type="warning" title="Minio Plugin End of Life" >}}
Due to the interaction between the TrueNAS, Minio, and FreeBSD software lifecycles, the Minio plugin does not generally deploy in TrueNAS 13.0 nor is full data migration of MinIO data from end of life (EoL) deployments of MinIO possible.
Users are encouraged to pursue a manual backup and restore strategy before attempting to move to TrueNAS 24.04 or newer. These versions provide fully maintained, and updatable MinIO [applications](https://apps.truenas.com/catalog/minio_stable/).

Enterprise customers are encouraged to contact iX Support to discuss options for guided data migration from the EoL S3 service or Minio Plugin in TrueNAS 13.0 to the supported [MinIO Enterprise](https://apps.truenas.com/catalog/minio_enterprise/) applications available in TrueNAS 24.04 and newer releases.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /hint >}}
