---
title: "iSCSI"
description: "Provides information about the sharing iscsi namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scaleclisharing
- scaleiscsi
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

<!-- From IncreaseISCSIStorage.md:

{{< expand "Expand a File-Based LUN in the TrueNAS CLI" "v" >}}
Go to **System Settings > Shell** to access the TrueNAS SCALE CLI.
If needed, use [`sharing iscsi extent query`]({{< relref "CLIiSCSI.md" >}}) to find the id number for the extent.

Enter <code>sharing iscsi extent update id=<em>1</em> filesize="<em>1234</em>"</code>, where *1* is the id number of the extent, and *1234* is the new value as an integer that is one or more multiples of the logical block size (default 512) larger than the current file size. Then press <kbd>Enter</kbd>.
The command returns an empty line when successful.

Use <code>sharing iscsi extent get_instance id=<em>1</em></code> to confirm changes.
{{< /expand >}} -->

{{< taglist tag="scaleclisharing" limit="10" title="Related CLI Sharing Articles" >}}
{{< taglist tag="scaleiscsi" limit="10" title="Related iSCSI Articles" >}}