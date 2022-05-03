---
title: "Configuring Tunables"
weight: 140
---

{{< hint danger >}}
Be careful when adding or editing the default tunables.
Changing the default tunables can make the system unusable.
{{< /hint >}}

TrueNAS allows you to add system tunables from the web interface.
You can manually define tunables, or TrueNAS can run an [autotuning script]({{< relref "/CORE/UIReference/System/Advanced.md#autotuning" >}}) to attempt to optimize the system.
Tunables are used to manage TrueNAS [sysctls](https://www.freebsd.org/cgi/man.cgi?query=sysctl), loaders, and [rc.conf](https://www.freebsd.org/cgi/man.cgi?query=rc.conf) options.

* *loader* specifies parameters to pass to the kernel or load additional modules at boot time.
* *rc.conf* enables system services and daemons and only takes effect after a reboot.
* *sysctl* configures kernel parameters while the system is running and generally takes effect immediately.

{{< hint warning >}}
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