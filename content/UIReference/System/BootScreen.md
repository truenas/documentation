---
title: "Boot"
description: "Provides information about the Boot screen for the TrueNAS CORE."
weight: 30
tags:
- coreboot
---

![UIRefBootScreen](/images/CORE/13.0/UIRefBootScreen.png "Boot Screen")

{{< truetable >}}
| Name | Description |
|------|------|
| Actions | Lets users add boot environments and check their stats/settings, as well as manage and scrub the boot pool. |
| Name | The name of the boot entry as it appears in the boot menu. |
| Active | Indicates which entry boots by default if a boot environment is not active. |
| Created | Indicates the boot environment creation date and time. |
| Space | Shows boot environment size. |
| Keep | Indicates whether or not TrueNAS deletes this boot environment when a [system update]({{< ref "/UIReference/System/Update" >}}) does not have enough space to proceed. |
{{< /truetable >}}

{{< taglist tag="coreboot" limit="10" >}}
