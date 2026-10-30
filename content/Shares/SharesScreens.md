---
title: "Shares Screens"
description: "Describes the TrueNAS Shares screen and options for accessing SMB, NFS, iSCSI, NVMe-oF, S3, and WebShare shares."
weight: 80
tags:
- shares
doctype: reference
---


Click **Shares** on the main navigation panel to open the **Shares** screen.
The screen shows a card for each type of share: SMB shares, NFS shares, iSCSI and Fibre Channel share targets, NVMe-oF subsystems, Amazon S3 buckets, and WebShare shares.

{{< trueimage src="/images/SCALE/Shares/SharesScreenWithS3.png" alt="TrueNAS Shares Screen" id="TrueNAS Shares Screen" >}}

Each card header shows the status of the share service as **Running** or **Stopped**.
Click the card header to open the full screen for that share type.
The **Object Storage (S3) Buckets** and **WebShare** cards also show an **Experimental** label.

{{< truetable >}}
| Card | Description |
|--------|-------------|
| **Windows (SMB) Shares** | Lists SMB shares on the system. See [SMB Shares Screens]({{< ref "SMBSharesScreens" >}}). |
| **UNIX (NFS) Shares** | Lists NFS shares on the system. See [NFS Shares Screens]({{< ref "NFSSharesScreens" >}}). |
| **Block (iSCSI/FC) Share Targets** | Lists iSCSI and Fibre Channel share targets on the system. See [Block (iSCSI) Share Target Screens]({{< ref "iSCSISharesScreens" >}}). |
| **NVMe-oF Subsystems** | Lists NVMe over Fabrics (NVMe-oF) subsystems on the system. See [NVMe-oF Share Screens]({{< ref "nvme-of-screens" >}}). |
| **Object Storage (S3) Buckets** | Lists S3 object storage buckets on the system. See [S3 Buckets Screens]({{< ref "S3BucketsScreens" >}}). |
| **WebShare** | Lists WebShare shares on the system. See [WebShare Shares Screens]({{< ref "WebShareSharesScreens" >}}). |
{{< /truetable >}}

{{< trademark-notice s3="true" >}}
