---
title: "Increasing iSCSI Available Storage"
description: "This article provides information on increasing available storage in zvols and file LUNs for iSCSI block shares."
weight: 50
tags:
 - scaleiSCSI
 - scaleshares
---

{{< toc >}}

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage in an iSCSI share.

### Zvol LUNs
To expand a Zvol LUN, go to **Datasets** and click the Zvol LUN name. The **Zvol Details** widget displays. Click the **Edit** button.

![DatasetZvolListingSCALE](/images/SCALE/22.12/DatasetZvolListingSCALE.png "Edit the Zvol LUN")

Enter a new size in **Size for this zvol**, then click **Save**.

![DatasetEditZvolListingSizeSCALE](/images/SCALE/22.12/DatasetEditZvolListingSizeSCALE.png "Change the Zvol Size")

{{< hint ok >}}
TrueNAS prevents data loss by not allowing users to reduce the Zvol size. 
TrueNAS also does not allow users to increase the Zvol size past 80% of the pool size.
{{< /hint >}}

### File LUNs
You need to know the path to the file to expand a file-based LUN. Go to **Shares** and click **Configure** in the **Block (iSCSI) Shares Targets** window, then select the **Extents** tab. 

![FileLUNsEditExtent](/images/SCALE/22.12/FileLUNsEditExtent.png "File LUNS Edit Extent") 

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select **Edit**. 

![FileLUNsEditExtent2](/images/SCALE/22.12/FileLUNsEditExtent2.png "Copy the Path to the File")

Highlight and copy the path to the extent, then close the **Edit Extent** window.

Go to **System Settings > Shell** and input `sudo truncate -s +[size] [path to file]`, where *[size]* is how much space you want to grow the file by, and *[path to file]* is the file path you copied earlier. Then press <kbd>Enter</kbd>.

In our example, the command looks like this: `sudo truncate -s +1g /mnt/tankgrem3/test83/filelun`

![ShellFileLUNExpandSCALE](/images/SCALE/22.12/ShellFileLUNExpandSCALE.png "Expanding the LUN File Size in Shell")

Lastly, go back to the extent in **Shares > Block (iSCSI) Shares**.

Click the **Configure** button in the window header, then click the **Extents** tab. Lastly, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select **Edit**. Make sure the **Filesize** for the file-based LUN is set to **0** so that the share uses the actual file size. Click **Save** to retain any changes.

![FileLUNsEditExtent3](/images/SCALE/22.12/FileLUNsEditExtent3.png "Expanding the LUN File Size Zero in Shell")

{{< taglist tag="scaleiscsi" limit="10" >}}