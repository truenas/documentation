---
title: "UPS"
weight: 80
---

TrueNAS uses [NUT](https://networkupstools.org/) (Network UPS Tools) to provide UPS support.
When the TrueNAS system is connected to a UPS device, configure the UPS service by going to **Services**, finding the **UPS** entry, and clicking <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![ServicesUPSOptions](/images/CORE/12.0/ServicesUPSOptions.png "UPS Options")

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/ServicesUPSFields.md.part" markdown="true" >}}
{{< /expand >}}

Some UPS models can be unresponsive with the default polling frequency.
This shows in TrueNAS logs as a recurring error like `libusb_get_interrupt: Unknown error`.
If this error occurs, decrease the polling frequency by adding an entry to *Auxiliary Parameters (ups.conf)*: `pollinterval = 10`.
The default polling frequency is *two* seconds.

[upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) can get status variables like the current charge and input voltage from the UPS daemon.
Run this from the **Shell** using the syntax `upsc ups@localhost`.
The [upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) manual page has other usage examples.

[upscmd(8)](https://www.freebsd.org/cgi/man.cgi?query=upscmd) can send commands directly to the UPS, assuming the hardware supports the command being sent.
Only users with administrative rights can use this command.
These users are created in the *Extra Users* field.

{{< expand "How do I find a device name?" "v" >}}
For USB devices, the easiest way to determine the correct device name is to set *Show console messages* in **System > Advanced**.
Plug in the USB device and look for a <file>/dev/ugen</file> or <file>/dev/uhid</file> device name in the console messages.
{{< /expand >}}

{{< expand "Can I attach Multiple Computers to One UPS?" "v" >}}
A UPS with adequate capacity can power multiple computers.
One computer is connected to the UPS data port with a serial or USB cable.
This primary system makes UPS status available on the network for other computers.
The secondary computers are powered by the UPS, but receive UPS status data from the primary computer.
See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
{{< /expand >}}
