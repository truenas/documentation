---
title: "Installation Instructions"
description: "Guides users (including Enterprise customers) with first-time TrueNAS SCALE installations."
geekdocCollapseSection: true
weight: 30
related: false
---

This section provides instructions for users that are installing TrueNAS SCALE the first time on their own system hardware and for users that need to do a clean install of SCALE.

{{< enterprise >}}
TrueNAS SCALE Enterprise customers should contact iXsystems Support for assistance with the initial set up and configuration of their systems.

{{< expand "Contacting iX Support" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

The installation process covers installing SCALE using an <file>iso</file>.

TrueNAS SCALE uses DHCP to provide the initial system IP address.
After that, either use the Console setup menu to reconfigure the primary network interface with a static IP address or use the SCALE UI to make network changes and complete the initial configuration.

Finally, it covers backing up your system configuration to a file and saving an initial system debug file.

## Installation Articles

{{< children depth="2" description="true" >}}
