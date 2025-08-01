---
title: "Increasing iSCSI Available Storage"
description: "Provides information on increasing available storage in zvols and file LUNs for iSCSI block shares."
weight: 50
tags:
- iscsi
- shares
- iscsi
---

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage in an iSCSI share.

### Zvol LUNs

To expand a Zvol LUN, go to **Datasets** and click the Zvol LUN name. The **Zvol Details** widget displays. Click the **Edit** button.

{{< trueimage src="/images/SCALE/Datasets/DatasetZvolListingSCALE.png" alt="Edit Zvol LUN" id="Edit Zvol LUN" >}}

Enter a new size in **Size for this zvol**, then click **Save**.

{{< trueimage src="/images/SCALE/Datasets/DatasetEditZvolListingSizeSCALE.png" alt="Change the Zvol Size" id="Change the Zvol Size" >}}

{{< hint type=tip >}}
TrueNAS prevents data loss by not allowing users to reduce the Zvol size.
TrueNAS also does not allow users to increase the Zvol size past 80% of the pool size.
{{< /hint >}}

### File LUNs

Go to **Shares** and click **Configure** in the **Block (iSCSI) Shares Targets** screen, then select the **Extents** tab.

{{< trueimage src="/images/SCALE/Shares/FileLUNsEditExtent.png" alt="Extents Screen" id="Extents Screen" >}}

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select **Edit**.

{{< trueimage src="/images/SCALE/Shares/FileLUNsEditExtent2.png" alt="Edit Extent" id="Edit Extent" >}}

Enter a new size in **Filesize**.
Enter the new value as an integer that is one or more multiples of the logical block size (default 512) larger than the current file size.
Click **Save**.

{{<include file="/static/includes/addcolumnorganizer.md">}}