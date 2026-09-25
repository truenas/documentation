---
title: "S3"
description: "Tutorials and reference information for S3 object storage buckets in TrueNAS."
geekdocCollapseSection: true
weight: 55
tags:
- s3
- object storage
- shares
related: false
---

TrueNAS can serve object storage over the Simple Storage Service (S3) protocol.
*S3* is the application programming interface (API) that Amazon Web Services created for its object storage service.
Many storage products and applications now use the S3 API as a standard way to store and retrieve data, and products that support it are often called S3-compatible.
TrueNAS provides S3-compatible object storage on the local system and does not use Amazon services.

Clients such as backup applications, media tools, and other applications that use the S3 API store and retrieve data in S3 buckets hosted on the TrueNAS system.

*Object storage* keeps data as whole objects in a flat container called a *bucket*, rather than as files in a folder hierarchy.
Clients upload and download complete objects over HTTP or HTTPS and sign each request with an access key.

TrueNAS creates a dedicated dataset for each S3 bucket.
Objects are stored in the <file>s3data</file> directory of the bucket dataset, so ZFS features such as snapshots, replication, quotas, and encryption apply to the bucket.

{{< hint type=note >}}
The S3 feature displays an **Experimental** label in the TrueNAS UI.
{{< /hint >}}

S3 object storage in TrueNAS has three parts:

* The **S3** service, which listens for client requests.
  Configure it from the **Object Storage (S3) Buckets** widget on the **Shares** screen.
* S3 access keys, which clients use to sign requests.
  Each access key belongs to a TrueNAS user account.
  Manage access keys on the **Credentials > S3 Access Keys** screen.
* S3 buckets, which hold the stored objects.
  Manage buckets on the **Shares** screen.

## S3 Object Storage and Cloud Sync

S3 object storage and cloud sync tasks both use the S3 protocol, but they move data in opposite directions.
S3 object storage makes TrueNAS an S3 server that other systems send data to.
A cloud sync task makes TrueNAS an S3 client that sends data to, or pulls data from, an external provider such as Amazon S3 or Storj.
See [Cloud Sync Tasks]({{< ref "/SCALE/DataProtection/CloudSyncTasks/_index.md" >}}) to back up TrueNAS data to an external S3 provider.

## Licensed S3 Features

Basic S3 buckets are available on all TrueNAS systems.
Bucket versioning, object lock, and S3 auditing are premium features.
The UI shows a **Premium** tag on these settings when the system license does not include them.

Premium features are available with TrueNAS Connect memberships, or on TrueNAS Enterprise appliances with a license that includes the S3 features.

{{< enterprise >}}
TrueNAS Enterprise systems licensed before the S3 features became available do not include versioning, object lock, or auditing.
Contact TrueNAS Enterprise Support to update the system license.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
