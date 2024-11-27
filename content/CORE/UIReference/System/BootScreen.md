---
title: "Boot"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/system/bootscreen/"
description: "Provides information about the Boot screen for the TrueNAS CORE."
weight: 30
aliases:
- /core/uireference/system/boot/bootscreen/
- /core/uireference/system/boot/
tags:
- boot
---

![UIRefBootScreen](/images/CORE/System/UIRefBootScreen.png "Boot Screen")

{{< truetable >}}
| Name | Description |
|------|------|
| Actions | Lets users add boot environments and check their stats/settings, as well as manage and scrub the boot pool. |
| Name | The name of the boot entry as it appears in the boot menu. |
| Active | Indicates which entry boots by default if a boot environment is not active. |
| Created | Indicates the boot environment creation date and time. |
| Space | Shows boot environment size. |
| Keep | Indicates whether or not TrueNAS deletes this boot environment when a [system update]({{< relref "/CORE/UIReference/System/Update.md" >}}) does not have enough space to proceed. |
{{< /truetable >}}
