---
title: "Security Best Practices"
description: "Best practices to follow when using various services."
---

When using services on TrueNAS, especially services that allow outside
connections, there are some best practices to follow to ensure your
system is safe and secure. The main services that will be discussed
in this article are SSH, SMB, NFS, and iSCSI.

## SSH Best Practices

Using SSH to connect to your TrueNAS can be very helpful when issuing
commands through the CLI. To see SSH settings, go to **Services** and
click <i class="fas fa-pen"></i>. To make sure users cannot connect to
the system as `root` and potentially harm the system, ensure the
*Log in as Root with Password* setting is not set. It is off by default.
Unless it is required, ensure *Allow TCP Port Forwarding* is not set.
Finally, it is not safe to enable any additional weak ciphers for SSH.
Many of the ciphers are outdated and have vulnerabilities. The default
values *None, AES128-CBC* for *Weak Ciphers* are sufficient.

### SMB

Using TrueNAS to set up an SMB share and share data with multiple users
is the bread and butter of owning a TrueNAS. However, it allows others
to connect to the system and must be used properly to avoid any
security concerns. To see the SMB service settings, go to **Services**
and click <i class="fas fa-pen"></i>.
