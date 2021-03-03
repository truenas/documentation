---
title: "Advanced"
weight: 40
---

**System > Advanced** contains more advanced options for configuring system settings.

{{< hint warning >}}
These options have reasonable defaults in place.
Make sure you are comfortable with ZFS, FreeBSD, and system [configuration backup and restoration](/CORE/System/General/ConfigBackup/) before making any changes.
{{< /hint >}}

![System Advanced](/images/CORE/12.0/SystemAdvanced.png "Advanced Settings")

{{< include file="static/includes/SystemAdvancedFields.md.part" markdown="true" >}}

There is also an option to **SAVE DEBUG**.
This generates text files that contain diagnostic information.
After the debug data is collected, the system prompts for a location to save the compressed <file>.tar</file> file.

## Autotuning

TrueNAS provides an autotune script that optimizes the system depending on the installed hardware.

{{< expand "Is this script available somewhere?" "v" >}}
To see which checks are performed, the autotune script is located in <file>/usr/local/bin/autotune</file>.
{{< /expand >}}

For example, if a pool exists on a system with limited RAM, the autotune script automatically adjusts some ZFS sysctl values in an attempt to minimize memory starvation issues.
Autotuning can introduce system performance issues and must only be used as a temporary measure on a system until the underlying hardware issue is addressed.
Autotune always slows a RAM-starved system, as it caps the ARC.

{{< hint danger>}}
Using the autotuning script is not recommended for TrueNAS Enterprise customers as this can override any specific tunings made by iXsystems Support.
{{< /hint >}}

Enabling autotuning runs the autotuner script at boot.
To run the script immediately, reboot the system.

Any tuned settings appear in **System > Tunables**.

{{< expand "Can I manually tune a setting controlled by the autotuner?" "v" >}}
Deleting tunables created by the autotune only affects the current session.
Autotune-set tunables are recreated every time the system boots.
This means any setting controlled by the autotuner does not allow for further manual tuning.

To permanently change a value set by autotune, change the description of the tunable.
For example, changing the description to manual override prevents autotune from reverting that tunable back to the autotune default value.
{{< /expand >}}

When attempting to increase the performance of the TrueNAS system, and particularly when the current hardware is limiting performance, try enabling autotune.
