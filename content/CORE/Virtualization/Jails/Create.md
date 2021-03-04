---
title: "Create"
weight: 5
---

{{< toc >}}

{{< hint info >}}
Jails feature are available to and supported by the TrueNAS CORE community.
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

## Jail Storage

A [data storage pool](/CORE/Storage/Pools/) must be created before using jails.
Make sure the pool has enough storage for all the intended jails.
The **Jails** screen displays a message and button to **CREATE POOL** if no pools exist on the TrueNAS system.

If pools exist, but none have been chosen for use with jails or plugins, a dialog appears to choose a pool. Select a pool and click **CHOOSE**.

To select a different pool for jail and plugin storage, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings). A dialog shows the active pool. A different pool can be selected from the drop-down.

Jails and downloaded FreeBSD release files are stored in a dataset named `iocage/`.

{{< expand "The iocage dataset" "v" >}}

* At least *10* GiB of free space is recommended.
* Cannot be located on a Share.
* [iocage](http://iocage.readthedocs.io/en/latest/index.html) automatically uses the first pool that is not a root pool for the TrueNAS system.
* A <file>defaults.json</file> file contains default settings used when a new jail is created.
  The file is created automatically when not already present.
  When the file is present but corrupted, iocage shows a warning and uses default settings from memory.
* Each new jail installs into a new child dataset of <file>iocage/</file>.
  For example, with the <file>iocage/jails</file> dataset in *pool1*, a new jail called *jail1* installs into a new dataset named *pool1/iocage/jails/jail1*.
* FreeBSD releases are fetched as a child dataset into the <file>/iocage/download</file> dataset.
  This datset is then extracted into the <file>/iocage/releases</file> dataset to be used in jail creation.
  The dataset in <file>/iocage/download</file> can then be removed without affecting the availability of fetched releases or an existing jail.
* <file>iocage/</file> datasets on activated pools are independent of each other and do not share any data.

iocage jail configs are stored in <file>/mnt/poolname/iocage/jails/jailname</file>.
When iocage is updated, the <file>config.json</file> configuration file is backed up as <file>/mnt/poolname/iocage/jails/jailname/config_backup.json</file>.
The backup file can be renamed to <file>config.json</file> to restore previous jail settings.
{{< /expand>}}

## Creating Jails

TrueNAS has two options to create a jail. The *Jail Wizard* makes it easy to quickly create a jail. *ADVANCED JAIL CREATION* is an alternate method, where every possible jail option is configurable. There are numerous options spread across four different primary sections. This form is recommended for advanced users with very specific requirements for a jail.

{{< tabs "Jail Create Options" >}}
{{< tab "Jail Wizard" >}}
New jails can be created quickly by going to **Jails > ADD**.

![JailsAddName](/images/CORE/12.0/JailsAddName.png "Jails Add Name")

The wizard provides the simplest process to create and configure a new jail.

Enter a `Jail Name`. Names can contain letters, numbers, periods (`.`), dashes (`-`), and underscores (`_`).

Choose a `Jail Type`: *Default (Clone Jail)* or *Basejail*. Clone jails are clones of the specified FreeBSD RELEASE. They are linked to that RELEASE, even if they are upgraded. Basejails mount the specified RELEASE directories as nullfs mounts over the jail directories. Basejails are not linked to the original RELEASE when upgraded.

Jails can run FreeBSD versions up to the same version as the host TrueNAS system. Newer releases are not shown.

Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download has already been completed.

Click *NEXT* to see a simplified list of networking options.

Jails support several different networking solutions:

* *VNET* adds a virtual network interface to the jail.
  This interface can set NAT, DHCP, or static jail network configurations.
  Since *VNET* provides the jail with an independent networking stack, it can broadcast an IP address, which is required by some applications.
* [Network Address Translation (NAT)](https://tools.ietf.org/html/rfc2663), which uses the TrueNAS IP address and sets a unique port for the jail to use.
  *VNET* is required when *NAT* is selected.
* Set *DHCP Autoconfigure IPv4* for the jail to receive its IP address from a DHCP server.
* Manually configure networking by entering values for the *IPv4 Address* or *IPv6 Address* fields.
  Any combination of these fields can be configured.
  Multiple interfaces are supported for IPv4 and IPv6 addresses.
  To add more interfaces and addresses, click *ADD*.

  Setting the *IPv4 Default Router* and *IPv6 Default Router* fields to *auto* automatically configures these values.
  *VNET* must be set to enable the **IPv4 Default Router** field.
  When no interface is selected when manually configuring IP addresses, TrueNAS automatically assigns the given jail IP address to the current active interface of the host system.
* Leaving all checkboxes unset and fields empty initializes the jail without any networking abilities.
  Networking is added to the jail after creation by going to **Jails**, clicking **>**(Expand) for a jail, then <i class="fa fa-pencil" aria-hidden="true" title="Pen"></i> **EDIT > Basic Properties**.

Setting a proxy in the TrueNAS network settings also configures new jails to use the proxy settings, except when performing DNS lookups.
Make sure a firewall is properly configured to maximize system security.

{{< hint warning >}}
When pairing the jail with a physical interface, edit the network interface and set *Disable Hardware Offloading*.
This prevents a network interface reset when the jail starts.
{{< /hint >}}

![JailsAddNetworking](/images/CORE/12.0/JailsAddNetworking.png "Jails Add Networking")

Click **NEXT** to view a summary screen of the chosen jail options. Click **SUBMIT** to create the new jail. After a few moments, the new jail is added to the primary jails list.
{{< /tab >}}
{{< tab "Advanced Jail Creation" >}}
The advanced jail creation form is opened by clicking **Jails > ADD**, then *ADVANCED JAIL CREATION*.

![JailsAddAdvanced](/images/CORE/12.0/JailsAddAdvanced.png "Jails Add Advanced")

### Options

A usable jail without any networking can be quickly created by setting only the required *Jail Name* and *Release*.
Configure the remaining **Basic Properties** when the jail needs to communicate over the local network or out to the internet.

{{< include file="static/includes/JailsAdvancedFields.md.part" markdown="true" >}}

Additional settings are in the **Jail Properties**, **Network Properties**, and **Custom Properties** sections.

{{< expand "Jail Properties" "v" >}}
{{< include file="static/includes/JailsPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< expand "Network Properties" "v" >}}
{{< include file="static/includes/JailsNetworkPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< expand "Custom Properties" "v" >}}
{{< include file="static/includes/JailsCustomPropertiesFields.md.part" markdown="true" >}}
{{< /expand >}}

{{< /tab >}}
{{< /tabs >}}

## Creating Template Jails

Template jails are basejails that can efficiently create jails with the same configuration.
These steps create a template jail:

* Go to **Jails > ADD > ADVANCED JAIL CREATION**.
* Select *Basejail* as the *Jail Type*.
  Configure the jail with desired options.
* Set *template* in the `Custom Properties` section.
* Click *SAVE*.
* Click *ADD*.
* Enter a name for the template jail.
  Leave *Jail Type* as *Default (Clone Jail)*.
  Set *Release* to *basejailname(template)*, where *basejailname* is the name of the base jail created earlier.
* Complete the jail creation wizard.