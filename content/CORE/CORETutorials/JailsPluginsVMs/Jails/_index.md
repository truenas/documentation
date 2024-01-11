---
title: "Jails"
description: "Information on creating jails, and articles related to jails, plugins and virtual machines in TrueNAS CORE."
geekdocCollapseSection: true
aliases:
 - /core/applications/jails/create/
 - /core/coretutorials/jailspluginsvms/jails/creatingjails/
weight: 10
related: false
tags:
- jails
- plugins
---


{{< hint type=note >}}
{{< include file="content/_includes/COREFeatureSupport.md" >}}
{{< /hint >}}

*Jails* are a lightweight, operating-system-level virtualization.
One or multiple services can run in a jail, isolating those services from the host TrueNAS system.
The main differences between a user-created jail and a plugin are that plugins are preconfigured and usually provide only a single service.

{{< expand "Why use a Jail instead of a VM?" "v" >}}
By default, jails run the [FreeBSD](https://www.freebsd.org/) operating system.
These jails are independent instances of FreeBSD.
The jail uses the host hardware and runs on the host kernel, avoiding most of the overhead usually associated with virtualization.
The jail installs FreeBSD software management utilities so FreeBSD packages or ports can be installed from the jail command line.
This allows compiling FreeBSD ports and installing FreeBSD packages from the command line of the jail.
{{< /expand >}}

It is important to understand that users, groups, installed software, and configurations within a jail are isolated from both the TrueNAS host operating system and any other jails running on that system.

The ability to create multiple jails offers flexibility regarding software management.
For example, an administrator can choose to provide application separation by installing different applications in each jail, to create one jail for all installed applications, or to mix and match how software is installed into each jail.

## Setting Jail Storage

You must create a [data storage pool]({{< relref "/CORE/CORETutorials/Storage/Pools/_index.md" >}}) before using jails.
Make sure the pool has enough storage for all of the intended jails.
The **Jails** screen displays a message and the **CREATE POOL** button if a pool does not exist on the TrueNAS system.

If pools exist, but one is not chosen to use with jails or plugins, a dialog displays prompting you to choose a pool. Select a pool and click **CHOOSE**.

To select a different pool for jail and plugin storage, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then select a different pool from the dropdown list.

TrueNAS uses [iocage](https://github.com/iocage/iocage) for jail and plugin management.
Jails and downloaded FreeBSD release files are stored in a dataset named **iocage**.

{{< expand "About the iocage Dataset" "v" >}}
The [iocage](https://iocage.readthedocs.io/en/latest/index.html) dataset, automatically uses the first pool that is not a root pool for the TrueNAS system.
It should have at least 10 GiB of free space (recommended), and cannot be located on a share.

A <file>defaults.json</file> file contains the default settings used when a new jail is created.
The file is created automatically when not already present.
When the file is present but corrupted, iocage shows a warning and uses default settings from memory.

Each new jail installs into a new child dataset of the **iocage** dataset.
For example, with the **iocage/jails** dataset in *pool1*, a new jail called *jail1* installs into a new dataset named ***pool1*/iocage/jails/*jail1***.
Go to **Storage > Pools**, click on the **iocage** dataset to expand it, then click on **Jails** to see jail datasets added for a new a jail from the **Jails** wizard screen or for a plugin jail from the add plugin wizard screen.

FreeBSD releases are fetched as a child dataset into the <file>/iocage/download</file> dataset.
This dataset is then extracted into the **/iocage/releases** dataset to use in jail creation.
Go to **Storage > Pools**, click on the **iocage** dataset to expand it, then click on **download** to see releases added from the **Jails** wizard screen.
You can then remove the dataset in <file>/iocage/download</file> without affecting the availability of fetched releases or an existing jail.

The **iocage** datasets on activated pools are independent of each other and do not share any data.

iocage jail configs are stored in <file>/mnt/*poolname*/iocage/jails/*jailname*</file>.
When iocage is updated, the <file>config.json</file> configuration file is backed up as <file>/mnt/*poolname*/iocage/jails/*jailname*/config_backup.json</file>.
You can rename the backup file to <file>config.json</file> to restore previous jail settings.
{{< /expand >}}

See [Setting Up Jail Storage]({{< relref "SettingUpJailStorage.md" >}}) for more information on jail storage and mount points.

## Creating Jails

TrueNAS has two options to create a jail, the jail **Wizard** or **ADVANCED JAIL CREATION**.
The jail **Wizard** provides the simplest process to create and configure a new jail. The **ADVANCED JAIL CREATION** alternate method has every possible configurable jail option.
See [Jails Screen]({{< relref "JailsScreens.md" >}} for more information on jails screens and configuration settings.

To add a new jail, go to **Jails** then click **ADD**. The **Wizard** opens.
To access the advanced configuration option, click **ADVANCED JAIL CREATION** at the bottom of the **Wizard** screen. We recommend only advanced users with very specific use applications use this method to create a jail.

Enter a name for the jail. Names can contain letters, numbers, periods (.), dashes (-), and underscores (_).

Select the jail type. **Default (Clone Jail)** or **Basejail**.
Clone jails are clones of the specified FreeBSD release.
They are linked to that release, even if they are upgraded.
Basejails mount the specified release directories as nullfs mounts over the jail directories. Basejails are not linked to the original release when upgraded.

Specify the release to use. Options are **12.4-RELEASE** or **13.2-RELEASE**.
Jails can run FreeBSD versions up to the same version as the host TrueNAS system. Newer releases are not shown.
Versions of FreeBSD are downloaded the first time they are used in a jail.
Additional jails created with the same version of FreeBSD are created faster because the download is already completed.  

![JailsAddName](/images/CORE/Jails/JailsAddName.png "Jails Add Name")

Click **Next** to display the **Configure Networking** wizard screen with a simplified list of networking options.

![JailsAddNetworking](/images/CORE/Jails/JailsAddNetworking.png "Jails Add Networking")

{{< expand "Jail Supported Networking Options" "v" >}}
Jails support several different networking solutions:

* **VNET** adds a virtual network interface to the jail.

  This interface can select NAT, DHCP, or static jail network configurations.
  Since VNET provides the jail with an independent networking stack, it can broadcast an IP address, which is required by some applications.

* **NAT** ([Network Address Translation](https://tools.ietf.org/html/rfc2663)) uses the TrueNAS IP address and selects a unique port for the jail to use.

  VNET is required when NAT is selected.

* **DHCP Autoconfigure IPv4** sets the jail receive its IP address from a DHCP server.

Configure networking by entering values in either the **IPv4 Address** or **IPv6 Address** fields.
You can configure any combination of these fields.
Multiple interfaces are supported for IPv4 and IPv6 addresses.
To add more interfaces and addresses, click **ADD**.

Setting **IPv4 Default Router** and **IPv6 Default Router** to **auto** automatically configures these values.
You must select **VNET** to enable the **IPv4 Default Router** field.
When manually configuring IP addresses and if no interface is selected, TrueNAS automatically assigns the given jail IP address to the current active interface of the host system.

You can [configure a jail without network settings](#creating-a-jail-without-networking).

Selecting a proxy in the TrueNAS network settings also configures new jails to use the proxy settings, except when performing DNS lookups.
Make sure a firewall is properly configured to maximize system security.

{{< hint type=important >}}
When pairing the jail with a physical interface, edit the network interface and select **Disable Hardware Offloading**.
This prevents a network interface reset when the jail starts.
{{< /hint >}}
{{< /expand >}}

{{< expand "Additional VMware Requirements" "v" >}}

{{< include file="content/_includes/VirtualMachinesJailNetworking.md" >}}
{{< /expand >}}

Click **NEXT** to view a summary of the chosen jail options.
Click **SUBMIT** to create the new jail. After a few moments, the new jail is added to the **Jails** screen list.

### Advanced Jail Creation

From the **Jails** screen click on **ADD** to open the **Wizard**, then click on **ADVANCED JAIL CREATION** at the bottom of the screen to open the **Advanced Jail Creation** form.

![AdvancedJailCreationBasicProperties](/images/CORE/Jails/AdvancedJailCreationBasicProperties.png "Jails Add Advanced")

Enter the jail name, type, and select the release just as in the **Name Jail and Choose FreeBSD Release Wizard** screen.

Enter the networking settings leave all blank to create the jail without networking.

Click on **Jail Properties** to enter the settings for a jail ruleset to follow, commands to run in the system or jail environment, add a jail user, set allow or deny SYSV IPC message, shared memory, or semaphore primitives.
You can also add VNET interfaces and other jail settings on this screen.

Click on **Network Properties** to add interfaces, host names, domain names, and resolver addresses, disable IPv4 or IPv6 source address selection for the jail in favor of the primary IPv4 or IPv6 address of the jail (only available when the jail is not configured to use VNET).
You can also set the IPv4 or IPv6 IP address to inherit or restrict access to all system addresses or stop the jail from using either IPv4 or IPv6 entirely.
You can configure MAC address settings.

Click **Custom Properties** to add the priority for the jail at boot time, jail host ID, set up the jail as a template.
You can add system host time to synchronize time between the jail and host, enabling ZFS jailing inside the jail, define a dataset to be jailed and to be fully handed over to a jail, enter a mount point for the **jail_zfs_dataset**, configure tun settings, and add other local host, IP host name, and IPV6 autoconfigure settings.

Click **SAVE** to add the jail and return to the **Jails** screen.

## Creating a Jail without Networking
You can create a usable jail without any networking by entering only the required **Jail Name**, selecting the **Jail Type**, and **Release**.
To create a jail without networking, leave all network checkboxes cleared and fields empty to initialize the jail without any networking abilities.  

To add networking to the jail after creation, go to **Jails**, click the  <i class="material-icons" aria-hidden="true" title="Expand/Collapse Row">chevron_right</i> for the jail, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **Edit**.
Configure the network settings in the **Basic Properties** area when the jail needs to communicate over the local network or out to the internet.

If you are an experienced user you can access additional advanced configuration settings in the **Network Properties**, and **Custom Properties** sections.

For more information on the configuration screens, see [Jails Screens]({{< relref "/CORE/UIReference/JailsPluginsVMs/JailsScreens.md" >}}).

### Creating a Template Jail

A *template jail* is a jail using the basejails type and customized with other software that can efficiently create other jails with the same configuration.

To create a template jail go to **Jails**, click **ADD** then click **ADVANCED JAIL CREATION** at the bottom of the **Wizard** screen, then:

1. Create a jail to use as a template.

   a. Enter a name for the jail template, select **Basejail** as the **Jail Type**, and select the release from the **Release** dropdown.

   b. Configure the other jail setting you want to save in the template.

   c. Click **SAVE** to create the template and add this jail to the <file>iocage/templates</file> folder and list of available releases.

2. Start this new jail, then click **Shell** to install the custom software packages.
   See [Installing Jail Software]({{< relref "InstallingJailSoftware.md" >}}) for more information on customizing your jail template.

3. Click **SAVE**.

4. Click **Stop** to stop the jail.

5. Click **Edit** to open the **Edit Advanced Jail Creation** screen and make the jail a template.

   a. Click on **Custom Properties** to show that section, then select **Template**.

   b. Click **Save**.

The new template jail shows on the **Releases** dropdown list.

6. Add a new jail from the template.

   a. Click **ADD** to open the **Wizard**.

   b. Enter a name, select **Default (Clone Jail)**, then select the name of the template from the **Releases** dropdown list.

   c. Click **NEXT** to enter networking settings.

   d. Click **NEXT** to review your settings and if satisfied with the settings, click **SUBMIT** to add the jail.

   You can select the **Advanced Jail Creation** option if you want to enter any other advanced settings not included in the template.

You must use the **ADVANCED JAIL CREATION** screens to create the basejail you want to use as a template.
If you use the **Wizard** to create the basejail, then edit it to make it a template, any new jails created from this template do not start.

## Jails Articles
{{< children depth="2" description="true" >}}
