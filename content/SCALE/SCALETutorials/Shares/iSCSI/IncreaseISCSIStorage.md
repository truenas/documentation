---
title: "Increasing iSCSI Available Storage"
description: "Provides information on increasing available storage in zvols and file LUNs for iSCSI block shares."
weight: 50
tags:
- scaleiscsi
- scaleshares
- tciscsi
---

{{< toc >}}

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

{{< expand "Expand a File-Based LUN in the TrueNAS CLI" "v" >}}
Go to **System Settings > Shell** to access the TrueNAS SCALE CLI.
If needed, use [`sharing iscsi extent query`]({{< relref "CLIiSCSI.md" >}}) to find the id number for the extent.

Enter <code>sharing iscsi extent update id=<em>1</em> filesize="<em>1234</em>"</code>, where *1* is the id number of the extent, and *1234* is the new value as an integer that is one or more multiples of the logical block size (default 512) larger than the current file size. Then press <kbd>Enter</kbd>.
The command returns an empty line when successful.

Use <code>sharing iscsi extent get_instance id=<em>1</em></code> to confirm changes.
{{< /expand >}}

{{< taglist tag="scaleiscsi" limit="10" >}}
