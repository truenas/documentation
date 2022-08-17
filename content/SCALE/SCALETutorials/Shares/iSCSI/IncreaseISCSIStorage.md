---
title: "Increasing ISCSI Available Storage"
description: "This article provides information on increasing available storage in zvols and file LUNs for iSCSI block shares."
weight: 50
tags:
 - scaleiSCSI
 - scaleshares
---

{{< toc >}}

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage that the iSCSI shares.

### Zvol LUNs
To expand a Zvol LUN, go to **Storage** and click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the Zvol LUN, then select **Edit Zvol**.

![ExpandingZvolLUNListSCALE](/images/SCALE/ExpandingZvolLUNListSCALE.png "Edit the Zvol LUN")

Enter a new size in **Size for this zvol**, then click **SAVE**.

![ExpandingZvolLUNSizeSCALE](/images/SCALE/ExpandingZvolLUNSizeSCALE.png "Change the Zvol Size")

{{< hint ok >}}
TrueNAS prevents data loss by not allowing users to reduce the Zvol size. 
TrueNAS also does not allow users to increase the Zvol size past 80% of the pool size.
{{< /hint >}}

### File LUNs
You need to know the path to the file to expand a file-based LUN. Go to **Shares** and click **Configure** in the **Block (iSCSI) Shares Targets** window, then select the **Extents** tab. 

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select **Edit**. 

![ExpandingFileLUNPathSCALE](/images/SCALE/ExpandingFileLUNPathSCALE.png "Copy the Path to the File")

Highlight and copy the path, then click **Cancel**.

Go to **Shell** and input `truncate -s +[size] [path to file]`, then press <kbd>Enter</kbd>.

Where *[size]* is how much space you want to grow the file by, and *[path to file]* is the file path you copied earlier. 

![ExpandingFileLUNShellSCALE](/images/SCALE/ExpandingFileLUNShellSCALE.png "Expanding the File Size in Shell")

An example command could look like this: `truncate -s +2g /mnt/Pool1/Dataset1/File LUN`

Lastly, go back to the extent in **Shares > Block (iSCSI) Shares Targets** and make sure the **Filesize** is set to **0** so that the share uses the actual file size.

{{< taglist tag="scaleiscsi" limit="10" >}}