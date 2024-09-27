---
title: "MinIO Plugin (End of Life)"
description: "Describes how to configure the MinIO plugin on TrueNAS CORE and gives migration instructions from the deprecated S3 built-in service. This content is end of life."
weight: 20
tags:
- plugins
- s3
---

{{< hint type=note title="Unsupported Feature" >}}
{{< include file="/static/includes/COREFeatureSupport.md" >}}
{{< /hint >}}

{{< hint type="warning" title="Minio Plugin End of Life" >}}
Due to the interaction between the TrueNAS, Minio, and FreeBSD software lifecycles, the Minio plugin eventually will not deploy in TrueNAS 13.3 and should not be considered for critical data storage use.
Users are encouraged to pursue a manual backup and restore strategy before attempting to move to TrueNAS 24.04 or newer. These versions provide fully maintained, and updatable MinIO [applications](https://www.truenas.com/docs/truenasapps/).

{{< /hint >}}
