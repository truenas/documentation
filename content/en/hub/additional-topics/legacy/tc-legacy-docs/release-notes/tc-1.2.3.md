---
title: "TrueCommand 1.2.3 Release Notes"
description: "TrueCommand 1.2.3 Release Notes"
---

## TrueCommand 1.2.3

### May 22, 2020
The TrueCommand team is pleased to make revision 3 of the 1.2 release (version 1.2.3) available!

This revision contains these fixes:

+ The container startup procedure has been streamlined and ensures a faster startup.
+ The pre-connection IP test for the NAS’s has been disabled. This may resolve connection issues on security-optimized networks where null-packets or other IP probes are restricted.

To update to this release:

+ Docker: Re-run “docker pull ixsystems/truecommand” to fetch the latest version of the container, then restart the container.
+ VM image: Reboot the VM. During boot, the VM will check for updates and pull the latest version.
