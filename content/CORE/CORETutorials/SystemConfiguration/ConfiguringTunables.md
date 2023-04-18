---
title: "Configuring Tunables"
description: "This article describes how to add or edit tunables on TrueNAS CORE."
weight: 120
tags:
- coretunables
- coreconfiguration
---

{{< hint type=warning >}}
Be careful when adding or editing the default tunables.
Changing the default tunables can make the system unusable.
{{< /hint >}}

TrueNAS allows you to add system tunables from the web interface.
You can manually define tunables, or TrueNAS can run an [autotuning script]({{< relref "/CORE/UIReference/System/Advanced.md" >}}) to attempt to optimize the system.
Tunables are used to manage TrueNAS [sysctls](https://www.freebsd.org/cgi/man.cgi?query=sysctl), loaders, and [rc.conf](https://www.freebsd.org/cgi/man.cgi?query=rc.conf) options.

* *loader* specifies parameters to pass to the kernel or load additional modules at boot time.
* *rc.conf* enables system services and daemons and only takes effect after a reboot.
* *sysctl* configures kernel parameters while the system is running and generally takes effect immediately.

{{< hint type=important >}}
Adding a sysctl, loader, or <file>rc.conf</file> option is an advanced feature.
A sysctl immediately affects the kernel running the TrueNAS system, and a loader can adversely affect the TrueNAS boot process.
Do not create a tunable on a production system before testing the ramifications of that change.
{{< /hint >}}

## Configure Tunables

To configure a tunable, go to **System > Tunables** and click **ADD**.

![SystemTunablesAdd](/images/CORE/12.0/SystemTunablesAdd.png "Adding a Tunable")

Select the **Type** of tunable to add or modify.
Enter the name of the *loader*, *sysctl*, or *rc.conf* variable to configure.

Next, enter the value to use for the [loader](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/boot-introduction.html#boot-loader-commands), [sysctl](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/configtuning-sysctl.html), or [rc.conf](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/config-tuning.html).

If you wish to create the system tunable but not immediately enable it, unset the **Enabled** checkbox.
Configured tunables remain in effect until deleted or **Enabled** is unset.

We recommend restarting the system after making sysctl changes.
Some sysctls only take effect at system startup, and restarting the system guarantees that the setting values correspond with what the running system uses.

## Autotuning

TrueNAS provides an autotune script that optimizes the system depending on the installed hardware.

{{< expand "Is this script available somewhere?" "v" >}}
To see which checks are performed, find the autotune script in <file>/usr/local/bin/autotune</file>.
{{< /expand >}}

For example, if a pool exists on a system with limited RAM, the autotune script automatically adjusts some ZFS sysctl values to minimize memory starvation issues.
Autotuning can introduce system performance issues. You must only use it as a temporary measure until you address the underlying hardware issue.
Autotune always slows a RAM-starved system as it caps the ARC.

{{< hint type=warning >}}
We do not recommend TrueNAS Enterprise customers use the autotuning script, as it can override any specific tunings made by iXsystems Support.
{{< /hint >}}

Enabling autotune runs the autotuner script at boot.
To run the script immediately, reboot the system.

Any tuned settings appear in **System > Tunables**.

{{< expand "Can I manually tune a setting controlled by the autotuner?" "v" >}}
Deleting tunables created by the autotune only affects the current session.
Autotune-set tunables regenerate every time the system boots.
You cannot manually tune any setting the autotuner controlls.

To permanently change a value set by autotune, change the description of the tunable.
For example, changing the description to "*manual override*" prevents autotune from reverting the tunable back to the autotune default value.
{{< /expand >}}

{{< taglist tag="coretunables" limit="10" >}}
