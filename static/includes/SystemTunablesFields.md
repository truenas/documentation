&NewLine;

{{< truetable >}}
| Name | Description |
|------|-------------|
| Variable | Enter the name of the loader, `sysctl`, or <file>rc.conf</file> variable to configure. loader tunables are used to specify parameters to pass to the kernel or load additional modules at boot time. rc.conf tunables are for enabling system services and daemons and only take effect after a restart. sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately. |
| Value | Enter a value to use for the [loader](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/boot-introduction.html#boot-loader-commands), [sysctl](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/configtuning-sysctl.html), or [rc.conf](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/config-tuning.html) variable. |
| Type | Creating or editing a sysctl immediately updates the Variable to the configured Value. A restart is required to apply loader or <file>rc.conf</file> tunables. Configured tunables remain in effect until deleted or Enabled is unset. |
| Description | Enter a description of the tunable. |
| Enabled | Enable this tunable. Unset to disable this tunable without deleting it. |
{{< /truetable >}}
