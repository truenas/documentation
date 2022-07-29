---
title: "AFP Share Screen"
description: "Use the AFP share screen to set up an Apple Filing Protocol (AFP) shares on your TrueNAS."
weight: 10
tags:
- coreafp
---

Apple Filing Protocol (AFP) facilitates workgroup and Internet file sharing in a mixed-platform environment. Go to **Sharing > AFP** to set up an AFP share. Click **ADD** to edit AFP share settings.

{{< hint warning >}}
Because AFP share creating is deprecated in 13.0 a **Recommendation** dialog displays:
{{< /hint >}}

{{< hint info >}}
* Click **CREATE AN SMB SHARE** to display the **SMB BASIC OPTIONS** configuration screen.  

* Click **CONTINUE WITH AFP SETUP** to continue to the **AFP > ADD** **BASIC OPTIONS** configuration screen.
{{< /hint >}}

![Sharing AFP Add](/images/CORE/12.0/SharingAFPAdd.png "Sharing AFP Add")

Click **ADVANCED OPTIONS** to display additional configuration settings that allow modifying the share **Permissions**, adding a **Description**, and specifying any **Auxiliary Parameters**.

![Sharing AFP Add Advanced](/images/CORE/12.0/SharingAFPAddAdvanced.png "Sharing AFP Add Advanced")

{{< include file="content/_includes/SharingAFPAddFields.md" markdown="true" >}}

Click **SUBMIT** to save settings and create the share.

Click **CANCEL** to exit the **Add** screen without saving and return to the **AFP** screen.

To edit an existing AFP share, go to **Sharing > Apple Shares (AFP)** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

{{< taglist tag="coreafp" limit="10" >}}