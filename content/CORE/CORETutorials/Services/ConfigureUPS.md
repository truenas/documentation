---
title: "Configuring UPS"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/services/configureups/"
description: "Provides information on configuring UPS service on your TrueNAS."
weight: 150
aliases: /core/services/ups/
tags:
- ups
---

An Uninterruptible Power Supply (UPS) is a power backup system that ensures continuous electricity during outages, preventing downtime and damage.

{{< include file="/static/includes/NUTsupport.md" >}}

## Setting Up UPS Service

Connect the TrueNAS system to the UPS device. Configure the UPS service by going to **Services**, finding the **UPS** entry, and clicking <span class="material-icons">edit</span> edit icon.

{{< include file="/static/includes/HAUninterruptiblePowerSupplyNotice.md" >}}

{{< trueimage src="/images/CORE/Services/ServicesUPSScreenTop.png" alt="UPS Service Screen" id="UPS Service Screen (Top)" >}}

{{< trueimage src="/images/CORE/Services/ServicesUPSScreenBottom.png" alt="UPS Service Screen" id="UPS Service Screen (Bottom)" >}}

See [UPS Screen]({{< relref "/CORE/UIReference/Services/UPSScreen.md" >}}) for more information on UPS settings.
Some UPS models can be unresponsive with the default polling frequency.
This shows in TrueNAS logs as a recurring error like `libusb_get_interrupt: Unknown error`.
The default polling frequency is **two** seconds. Decrease the polling frequency by adding an entry to **Auxiliary Parameters (ups.conf)**: `pollinterval = 10`. This should resolve the error.

[upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) can get status variables like the current charge and input voltage from the UPS daemon.
Run this command from the shell using the syntax `upsc ups@localhost`.
The [upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) manual page has other usage examples.

If the hardware supports sending the command, [upscmd(8)](https://www.freebsd.org/cgi/man.cgi?query=upscmd) can send commands directly to the UPS.
Only users with administrative rights can administer these commands.
Create these users in the **Extra Users** field.

{{< expand "How do I find a device name?" "v" >}}
Determine the correct device name for the UPS. Go to **System > Advanced** and select **Show console messages**. 
Plug in the USB device and look for a <file>/dev/ugen</file> or <file>/dev/uhid</file> device name in the console messages.
{{< /expand >}}

{{< expand "Can I attach multiple computers to one UPS?" "v" >}}
A UPS with adequate capacity can power multiple computers.
Connect one computer to the UPS data port with a serial or USB cable.
This primary system makes UPS status available on the network for other computers.
The secondary computers receive UPS status data from the primary computer. The secondary computers receive power from the UPS. 
See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
{{< /expand >}}
