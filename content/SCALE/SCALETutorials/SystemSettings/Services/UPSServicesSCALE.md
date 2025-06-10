---
title: "UPS"
description: "Provides information on configuring UPS service in TrueNAS."
weight: 70
aliases: 
tags:
 - ups
 - services
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- hybrid storage
---

An Uninterruptible Power Supply (UPS) is a power backup system that ensures continuous electricity during outages, preventing downtime and damage.

{{< include file="/static/includes/NUTsupport.md" >}}

## Setting Up UPS Service

Connect the TrueNAS system to the UPS device. To configure the UPS service, go to **System > Services**, finding **UPS**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

See [UPS Service Screen]({{< ref "UPSServicesScreenSCALE" >}}) for details on the UPS service settings.

{{< include file="/static/includes/HAUninterruptiblePowerSupplyNotice.md" >}}

Some UPS models are unresponsive with the default polling frequency (default is two seconds).
TrueNAS displays the issue in logs as a recurring error like **libusb_get_interrupt: Unknown error**.

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}
If you get an error, decrease the polling frequency by adding an entry to **Auxiliary Parameters (ups.conf)**: `pollinterval = 10`.

{{< expand "How do I find a device name?" "v" >}}
For USB devices, the easiest way to determine the correct device name is to enable and view console messages in the TrueNAS UI.
Go to **System > General Settings**, find the **GUI** widget, and click **Settings**.
Select **Show Console Messages** under **Other Options**.
Click **Save**.

Plug in the USB device and look for a <file>/dev/ugen</file> or <file>/dev/uhid</file> device name in the console messages.
{{< /expand >}}

{{< expand "Can I attach Multiple Computers to One UPS?" "v" >}}
A UPS with adequate capacity can power multiple computers.
One computer connects to the UPS data port with a serial or USB cable.
This primary system makes UPS status available on the network for other computers.
The UPS powers the secondary computers, and they receive UPS status data from the primary system.
See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
{{< /expand >}}
