---
title: "Configuring UPS Service"
description: "This article provides information on configuring UPS service in SCALE."
weight: 70
alias: 
tags:
 - scaleups
 - scaleservices
---

{{< toc >}}

TrueNAS uses Network UPS Tools [NUT](https://networkupstools.org/) to provide UPS support.
After connecting the TrueNAS system UPS device, configure the UPS service by going to **System settings > Services**, finding **UPS**, and clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

See [UPS Service Screen]({{ relref "UPSServicesScreenSCALE.md" }}) for details on the UPS service settings.

{{< include file="/_includes/HAUninterruptiblePowerSupplyNotice.md" type="page" >}}

Some UPS models are unresponsive with the default polling frequency (default is two seconds).
TrueNAS displays the issue in logs as a recurring error like **libusb_get_interrupt: Unknown error**.
If you get an error, decrease the polling frequency by adding an entry to **Auxiliary Parameters (ups.conf)**: `pollinterval = 10`.

[upsc(8)](https://manpages.debian.org/bullseye/nut-client/upsc.8.en.html) can get status variables like the current charge and input voltage from the UPS daemon.
Run this in **System Settings > Shell** using the syntax `upsc ups@localhost`.
The [upsc(8)](https://manpages.debian.org/bullseye/nut-client/upsc.8.en.html) manual page has other usage examples.

[upscmd(8)](https://manpages.debian.org/bullseye/nut-client/upscmd.8.en.html) can send commands directly to the UPS, assuming the hardware supports it.
Only users with administrative rights can use this command. You can create them in the **Extra Users** field.

{{< expand "How do I find a device name?" "v" >}}
For USB devices, the easiest way to determine the correct device name is to set **Show console messages** in **System Settings > Advanced**.
Plug in the USB device and look for a <file>/dev/ugen</file> or <file>/dev/uhid</file> device name in the console messages.
{{< /expand >}}

{{< expand "Can I attach Multiple Computers to One UPS?" "v" >}}
A UPS with adequate capacity can power multiple computers.
One computer connects to the UPS data port with a serial or USB cable.
This primary system makes UPS status available on the network for other computers.
The UPS powers the secondary computers, and they receive UPS status data from the primary system.
See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
{{< /expand >}}


{{< taglist tag="scaleups" limit="10" >}}
