---
title: "Creating Jails"
description: "How to create Jails in TrueNAS CORE."
weight: 5
aliases: /core/appliations/jails/create/
tags:
- corejails
- corejailspluginsvm
---

{{< toc >}}

{{< hint type=note >}}
{{< include file="static/includes/General/FeatureSupport.md.part" markdown="true" >}}
{{< /hint >}}

Jails are a lightweight, operating-system-level virtualization.
One or multiple services can run in a jail, isolating those services from the host TrueNAS system.
TrueNAS uses [iocage](https://github.com/iocage/iocage) for jail and plugin management.
The main differences between a user-created jail and a plugin are that plugins are preconfigured and usually provide only a single service.

{{< expand "Why use a Jail instead of a VM?" "v" >}}
By default, jails run the [FreeBSD](https://www.freebsd.org/) operating system.
These jails are independent instances of FreeBSD.
The jail uses the host hardware and runs on the host kernel, avoiding most of the overhead usually associated with virtualization.
The jail installs FreeBSD software management utilities so FreeBSD packages or ports can be installed from the jail command line.
This allows for FreeBSD ports to be compiled and FreeBSD packages to be installed from the command line of the jail.
{{< /expand >}}

It is important to understand that users, groups, installed software, and configurations within a jail are isolated from both the TrueNAS host operating system and any other jails running on that system.

The ability to create multiple jails offers flexibility regarding software management.
For example, an administrator can choose to provide application separation by installing different applications in each jail, to create one jail for all installed applications, or to mix and match how software is installed into each jail.

## Setting Jail Storage

You must create a [data storage pool]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}}) before using jails.
Make sure the pool has enough storage for all the intended jails.
The **Jails** screen displays a message and button to **CREATE POOL** if a pool doesn't exist on the TrueNAS system.

If pools exist, but not chosen to use with jails or plugins, a dialog displays prompting you to choose a pool. Select a pool and click **CHOOSE**.

To select a different pool for jail and plugin storage, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon. You can select a different pool from the dropdown list.

Jails and downloaded FreeBSD release files are stored in a dataset named **iocage/**.

{{< expand "The iocage dataset" "v" >}}

* It should have at least *10* GiB of free space (recommended).
* It cannot be located on a share.
* It, the [iocage](https://iocage.readthedocs.io/en/latest/index.html) dataset, automatically uses the first pool that is not a root pool for the TrueNAS system.
* A <file>defaults.json</file> file contains default settings used when a new jail is created.
  The file is created automatically when not already present.
  When the file is present but corrupted, iocage shows a warning and uses default settings from memory.
* Each new jail installs into a new child dataset of <file>iocage/</file>.
  For example, with the <file>iocage/jails</file> dataset in *pool1*, a new jail called *jail1* installs into a new dataset named *pool1/iocage/jails/jail1*.
* FreeBSD releases are fetched as a child dataset into the <file>/iocage/download</file> dataset.
  This datset is then extracted into the <file>/iocage/releases</file> dataset to use in jail creation.
  The dataset in <file>/iocage/download</file> can then be removed without affecting the availability of fetched releases or an existing jail.
* They, the <file>iocage/</file> datasets on activated pools, are independent of each other and do not share any data.

iocage jail configs are stored in <file>/mnt/poolname/iocage/jails/jailname</file>.
When iocage is updated, the <file>config.json</file> configuration file is backed up as <file>/mnt/poolname/iocage/jails/jailname/config_backup.json</file>.
You can rename the backup file to <file>config.json</file> to restore previous jail settings.
{{< /expand>}}

## Creating Jails

TrueNAS has two options to create a jail. The Jail **Wizard** makes it easy to create a jail or the **ADVANCED JAIL CREATION** alternate method, where every possible jail option is configurable. See [Jails Screen]({{< relref "/CORE/UIReference/JailsPluginsVMs/Jails/JailsScreens.md" >}} for more information on the Jails screens and configuration settings.

To add a new jail, click **Jails > ADD**. The wizard provides the simplest process to create and configure a new jail. The advanced configuration method is recommended for only advanced users with very specific use applications.

Enter a name for the jail. Names can contain letters, numbers, periods (.), dashes (-), and underscores (_).

Select the jail type. **Default (Clone Jail)** or **Basejail**. Clone jails are clones of the specified FreeBSD release. They are linked to that release, even if they are upgraded. Basejails mount the specified release directories as nullfs mounts over the jail directories. Basejails are not linked to the original release when upgraded.

Specify the release to use. Jails can run FreeBSD versions up to the same version as the host TrueNAS system. Newer releases are not shown. 
Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download has already been completed.

![JailsAddName](/images/CORE/12.0/JailsAddName.png "Jails Add Name")

Click **Next** to display the second Wizard screen with a simplified list of networking options.

![JailsAddNetworking](/images/CORE/13.0/JailsAddNetworking.png "Jails Add Networking")

{{< expand "Jail Supported Networking Options" "v" >}}
Jails support several different networking solutions:

* **VNET** adds a virtual network interface to the jail.
  This interface can select NAT, DHCP, or static jail network configurations.
  Since VNET provides the jail with an independent networking stack, it can broadcast an IP address, which is required by some applications.
* **NAT** ([Network Address Translation](https://tools.ietf.org/html/rfc2663)) uses the TrueNAS IP address and selects a unique port for the jail to use.
  VNET is required when NAT is selected.
* **DHCP Autoconfigure IPv4** selected for the jail to receive its IP address from a DHCP server.
* Configure networking by entering values for the **IPv4 Address** or **IPv6 Address** fields.
  You can configure any combination of these fields.
  Multiple interfaces are supported for IPv4 and IPv6 addresses.
  To add more interfaces and addresses, click **ADD**.

  Setting the **IPv4 Default Router** and **IPv6 Default Router** fields to **auto** automatically configures these values.
  You must select **VNET** to enable the **IPv4 Default Router** field.
  When manually configuring IP addresses and if no interface is selected, TrueNAS automatically assigns the given jail IP address to the current active interface of the host system.

Leaving all checkboxes cleared and fields empty initializes the jail without any networking abilities.  
Add networking to the jail after creation by going to **Jails**, clicking <i class="material-icons" aria-hidden="true" title="Expand/Collapse Row">chevron_right</i> for a jail, then <i class="material-icons" aria-hidden="true" title="edit">edit</i> **> Basic Properties**.

Selecting a proxy in the TrueNAS network settings also configures new jails to use the proxy settings, except when performing DNS lookups.
Make sure a firewall is properly configured to maximize system security.

{{< hint type=important >}}
When pairing the jail with a physical interface, edit the network interface and select **Disable Hardware Offloading**.
This prevents a network interface reset when the jail starts.
{{< /hint >}}
{{< /expand>}}

{{< expand "Additional VMware Requirements" "v" >}}

{{< include file="static/includes/CORE/VirtualMachinesJailNetworking.md.part" markdown="true" >}}
{{< /expand>}}

Click **NEXT** to view a summary screen of the chosen jail options. Click **SUBMIT** to create the new jail. After a few moments, the new jail is added to the primary jails list.

## Advanced Jail Creation

Click **Jails > ADD**, then **ADVANCED JAIL CREATION** to open the advanced jail creation form.

![AdvancedJailCreationBasicProperties](/images/CORE/13.0/AdvancedJailCreationBasicProperties.png "Jails Add Advanced")

### Creating a Jail without Networking
{{< expand "Click for details" "v" >}}

You can create a a usable jail without any networking by selecting only the required **Jail Name** and **Release**.
Configure the remaining **Basic Properties** when the jail needs to communicate over the local network or out to the internet.

If you are an experienced user you can access additional advanced configuration settings in the **Jail Properties**, **Network Properties**, and **Custom Properties** sections.

For more information on the configuration screens see [Jails Screens]({{< relref "/CORE/UIReference/JailsPluginsVMs/Jails/JailsScreens.md" >}})
{{< /expand >}}

### Creating Template Jails
{{< expand "Click for details" "v" >}}

Template jails are *basejails* that can efficiently create jails with the same configuration.
These steps create a template jail:

1. Go to **Jails > ADD > ADVANCED JAIL CREATION**.

2. Select **Basejail** as the **Jail Type**. Configure the jail with desired options.

3. Select **Template** in the **Custom Properties** section.

4. Click **SAVE**.

5. Click **ADD**.

6. Enter a name for the template jail.
   
   Leave **Jail Type** as **Default (Clone Jail)**.
   
   Enter **Release** as the ***basejailname*(template)**, where *basejailname* is the name of the base jail created earlier.

7. Complete the jail creation wizard.

{{< /expand >}}

{{< taglist tag="corejails" limit="10" >}}
