---
title: "Configuration Instructions"
description: "Configuring TrueNAS SCALE after install."
geekdocCollapseSection: true
weight: 50
---

This section provides instructions for users that are configuring TrueNAS SCALE for the first time.

{{< enterprise >}}
TrueNAS SCALE Enterprise customers should contact iXsystem Support for assistance with the initial set up and configuration of their systems.
{{< /enterprise >}}

After completing the installation process, you can either use the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) to reconfigure the primary network interface with a static IP address or use the SCALE UI to make network changes and complete the initial configuration. 

Configuring your system includes:
* Setting up your first pool
* Setting up data sharing
* Setting up backup for the system and your stored data

Other options include:
* Setting up Clustering
* Configuring virtual machines (VMs) or Apps

If you plan to use this TrueNAS SCALE system as part of a cluster, complete the configuration process and then save the system configuration file. 
Then set up TrueCommand to manage your TrueNAS SCALE system(s) using the instructions in [Installing TrueCommand Cloud](https://www.truenas.com/docs/truecommand/tcgettingstarted/install/installtccloud/) or [Installing the TrueCommand Container using Docker on Linux](https://www.truenas.com/docs/truecommand/tcgettingstarted/install/installtcdocker/).
To set up clusters of TrueNAS SCALE systems, use TrueCommand to [create and manage the cluster and nodes]({{< relref "ClusterPreparation.md" >}}).

## Configuration Articles

{{< children depth="2" description="true" >}}