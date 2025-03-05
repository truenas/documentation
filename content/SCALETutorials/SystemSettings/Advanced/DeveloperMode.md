---
title: "Developer Mode (Unsupported)"
description: "Provides information on the unsupported TrueNAS developer mode and how to enable it."
weight: 80
tags:
keywords:
- nas storage solutions
- software storage solutions
---

{{< hint type="warning" title="Unsupported Feature" >}}
Developer mode is for developers only.
Users that enable this functionality will not receive support on any issues submitted to the TrueNAS team.

Only enable when you are comfortable with debugging and resolving all issues encountered on the system.
Never enable on a system that has production storage and workloads.
{{< /hint >}}

TrueNAS is an Open Source Storage appliance, not a standard Linux operating system (OS) that allows customization of the OS environment.
By default, the root/boot filesystem and tools such as `apt` are disabled to prevent accidental misconfiguration that renders the system inoperable or puts stored data at risk.

{{< trueimage src="/images/SCALE/CLI/ShellApplianceWarning.png" alt="Example - TrueNAS Appliance Warning" id="Example - TrueNAS Appliance Warning" >}}

However, as an open-source appliance, there are circumstances in which software developers want to create a development environment to install new packages and do engineering or test work before creating patches to the TrueNAS project.

{{< hint type=danger title="Do Not Use Web Shell" >}}
Do not make system changes using the TrueNAS UI web shell.
Using package management tools in the web shell can result in middleware changes that render the system inaccessible.

Connect to the system using SSH or a physically connected monitor and keyboard before enabling or using developer mode.
{{< /hint >}}

To enable developer mode, log into the system as the root account and access the Linux shell.
Run the `install-dev-tools` command.

{{< trueimage src="/images/SCALE/CLI/ShellEnableDeveloperMode.png" alt="Enable TrueNAS Developer Mode" id="Enable TrueNAS Developer Mode" >}}

Running `install-dev-tools` removes the default TrueNAS read-only protections and installs a variety of tools needed for development environments on TrueNAS.
These changes do not persist across updates and `install-dev-tools` must be re-run after every system update.

## Troubleshooting

{{< hint type=note >}}
`install-dev-tools` is a developer-focused option that might not work in scenarios beyond those intended by TrueNAS developers, such as modified installations or deployments that use non-default settings.
{{< /hint >}}

Users with NVIDIA GPU drivers installed cannot enable developer mode while the NVIDIA kernel module is mounted.
Running `install-dev-tools` in this state results in the following error:  
```
/usr is currently provided by a readonly systemd system extension.
This may occur if nvidia module support is enabled. System extensions
must be disabled prior to disabling rootfs protection.
```
This happens because the NVIDIA drivers are overlaid onto `/usr` via `systemd-sysext`, making it read-only by design.
To resolve the issue, unmerge `systemd-sysext`, run `install-dev-tools`, then merge system extensions again.
