---
title: "MinIO Plugin (End of Life)"
description: "Describes how to configure the MinIO plugin on TrueNAS CORE and gives migration instructions from the deprecated S3 built-in service. This content is end of life."
weight: 20
tags:
- coreplugins
- corejailspluginsvm
- cores3
- minio
---

{{< hint type=note title="Unsupported Feature" >}}
{{< include file="/static/includes/COREFeatureSupport.md" >}}
{{< /hint >}}

{{< hint type="warning" title="Minio Plugin End of Life" >}}
Due to the interaction between the TrueNAS, Minio, and FreeBSD software lifecycles, the Minio plugin does not generally deploy in TrueNAS 13.0 nor is full data migration of MinIO data from end of life (EoL) deployments of MinIO possible.
Users are encouraged to pursue a manual backup and restore strategy before attempting to move to TrueNAS 24.04 or newer. These versions provide fully maintained, and updatable MinIO [applications](https://www.truenas.com/docs/truenasapps/).

Enterprise customers are encouraged to contact iX Support to discuss options for guided data migration from the EoL S3 service or Minio Plugin in TrueNAS 13.0 to the supported [MinIO Enterprise](https://www.truenas.com/docs/truenasapps/enterpriseapps/minio/) applications available in TrueNAS 24.04 and newer releases.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /hint >}}
