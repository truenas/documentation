---
title: "Installation Instructions"
geekdocCollapseSection: true
weight: 30
---

This section provides instructions for users that are installing TrueNAS SCALE the first time on their own system hardware, and for users that need to do a clean install of SCALE. 

The installation process covers installing SCALE using an <file>iso</file>. TrueNAS SCALE uses DHCP to provide the system IP address. After that, either use the Console setup menu to reconfigure the primary network interface with a static IP address or use the SCALE UI to make network changes and complete the initial configuration. 

Finally, it covers backing up your system configuration to a file and saving an initial system debug file.

If you plan to use this TrueNAS SCALE system as part of a cluster, complete the configuration process and then save the system configuration file. 
Then set up TrueCommand to manage your TrueSCALE system(s) using the instructions in [Installing TrueCommand Cloud]({{< relref "/content/truecommand/tcgettingstarted/install/installtccloud.md" >}}) or [Installing the TrueCommand Container using Docker on Linux]({{< relref "/content/truecommand/tcgettingstarted/install/installtcdocker.md" >}}). To set up clusters of TrueNAS SCALE systems use TrueCommand to [create and manage the cluster and nodes]({{< relref "/SCALE/GettingStarted/ClusterPreparation.md" >}}).

## Installation Articles

{{< children depth="2" description="true" >}}