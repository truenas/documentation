---
title: "Increasing iSCSI Share Available Storage"
description: "Describes how to increase iSCSI share available storage on TrueNAS CORE."
weight: 10
tags:
- coreiscsi
- corefibrechannel
---

{{< toc >}}

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage that the iSCSI shares.

### Expanding Zvol LUNs 

To expand a Zvol LUN, go to **Storage > Pools** and click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the Zvol LUN, then select **Edit Zvol**.

![ExpandingZvolLUNList](/images/CORE/ExpandingZvolLUNList.png "Edit the Zvol LUN")

Enter a new size in the **Size for this zvol** field, then click **SAVE**.

![ExpandingZvolLUNSize](/images/CORE/ExpandingZvolLUNSize.png "Change the Zvol Size")

{{< hint type=tip >}}
To prevent data loss, the web interface does not allow users to reduce the Zvol size. 
TrueNAS also does not allow users to increase the Zvol size past 80% of the pool size.
{{< /hint >}}

### Expanding a File-Based LUN 

To expand a file-based LUN, you need to know the path to the file. To find the path, go to **Sharing > Block Shares (iSCSI)** and click the **Extents** tab. 
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select **Edit**. 

![ExpandingFileLUNPath](/images/CORE/ExpandingFileLUNPath.png "Copy the Path to the File")

Highlight and copy the path, then click **CANCEL**

Go to **Shell** and input command `truncate -s +[size] [path to file]` where *[size]* is how much space you want to grow the file by, and *[path to file]* is the file path you copied earlier, then press <kbd>Enter</kbd>.

![ExpandingFileLUNShell](/images/CORE/ExpandingFileLUNShell.png "Expanding the File Size in Shell")

An example of the command could look like this: `truncate -s +2g /mnt/Shares/Dataset1/FileLun/FileLUN`

Lastly, go back to the extent in **Sharing > Block Shares (iSCSI)** and make sure the **Filesize** is set to **0** so that the share uses the actual file size.

{{< taglist tag="coreiscsi" limit="10" >}}
