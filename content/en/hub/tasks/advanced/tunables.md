---
title: "Configuring System Tunables"
description: "How to tune the system."
---

TrueNAS allows you to add system tunables from the web interface.
These can be manually defined or TrueNAS can run an [autotuning script]({{< relref "systemsettings.md#autotuning" >}}) to attempt to optimize the system.
Tunables are used to manage TrueNAS [sysctls](https://www.freebsd.org/cgi/man.cgi?query=sysctl), loaders, and [rc.conf](https://www.freebsd.org/cgi/man.cgi?query=rc.conf) options.

* *loader* tunables are used to specify parameters to pass to the kernel or load additional modules at boot time.
* *rc.conf* tunables are for enabling system services and daemons and only take effect after a reboot.
* *sysctl* tunables are used to configure kernel parameters while the system is running and generally take effect immediately.

{{% alert title=Warning color=warning %}}
Adding a sysctl, loader, or `rc.conf` option is an advanced feature.
A sysctl immediately affects the kernel running the TrueNAS system and a loader could adversely affect the ability of the TrueNAS system to successfully boot.
Do not create a tunable on a production system before testing the ramifications of that change.
{{% /alert %}}

## Configuring System Tunables

To configure a tunable, go to **System > Tunables** and click *ADD*.

<img src="/images/SystemTunablesAdd.png">
<br><br>

First, select the *Type* of tunable to add or modify.
Enter the name of the *loader*, *sysctl*, or *rc.conf* variable to configure.
Next, enter the value to use for the [loader](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/boot-introduction.html#boot-loader-commands), [sysctl](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/configtuning-sysctl.html), or [rc.conf](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/config-tuning.html).
An optional description can be given.
If you wish to create the system tunable but not immediately enable it, unset the *Enable* checkbox.
Configured tunables remain in effect until deleted or *Enabled* is unset.

Restarting the TrueNAS system after making sysctl changes is recommended.
Some sysctls only take effect at system startup, and restarting the system guarantees that the setting values correspond with what is being used by the running system.

Be careful when adding or editing the default tunables.
Changing the default tunables can make the system unusable.
