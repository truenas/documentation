---
title: "Plugin Management"
description: "Describes how to manage plugins in TrueNAS CORE."
weight: 10
aliases: /core/applications/plugins/manageplugins/
tags:
- coreplugins
---

{{< toc >}}

{{< hint type=note >}}
{{< include file="content/_includes/COREFeatureSupport.md" type="page" >}}
{{< /hint >}}

Plugins allow extending the built-in NAS services by installing additional software.
A plugin is a pre-packaged application that is installed into a [FreeBSD Jail](https://docs.freebsd.org/en/books/handbook/jails/).
The plugin jail is limited to installing and using only the plugin software.

{{< expand "Before getting started..." "v" >}}
* Create a [data pool]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}}) if one doesn't exist. A pool must be available for plugin storage.
* Verify the system is connected to the internet. 
* Go to **Network > Interfaces**, edit the intended plugin interface, and set **Disable Hardware Offloading**.
{{< /expand >}}

## Plugin Installation

### Catalog

To see the plugin catalog, go to the **Plugins** screen.
{{< expand "First time in this menu?" "v" >}}
{{< include file="content/_includes/JailsPluginsFirstTime.md" markdown="true" >}}
{{< /expand >}}

{{< trueimage src="/images/CORE/12.0/PluginsList.png" alt="Plugins Catalog" id="1 Plugins Catalog" >}}
{{< expand "I don't see anything?" "v" >}}
If the catalog doesn't load:
* Go to **Network > Global Configuration** and confirm the addresses entered in **Default Gateway** and **DNS Servers** are correct.
* Open the **Shell** and enter `ping` followed by an Internet address. The output confirms the system is connected to the Internet.
{{< /expand >}}

Plugins are organized into two **Collections**:

* [iXsystems](https://www.ixsystems.com/) maintained plugins
* Open Source plugins created and maintained by the TrueNAS community.

By default, the iXsystems-supported plugins are shown.
To view the community-supported plugins, open **Browse a Collection** and select **Community**.

### Install Options

To install a plugin, click the plugin icon and **Install**.
This example shows installing [Tarsnap](https://www.tarsnap.com/), a popular backup solution.

{{< trueimage src="/images/CORE/12.0/PluginsTarsnapInstall.png" alt="Installing the Tarsnap Plugin" id="2 Installing the Tarsnap Plugin" >}}

Enter a name for the plugin in **Jail Name** and adjust the networking settings as needed.
Most plugins default to using [Network Address Translation (NAT)](https://datatracker.ietf.org/wg/nat/about/) for their Internet connection. You use a dynamically-generated address with **DHCP** or define static IP addresses for the plugin jail.
Using **NAT** is recommended as it does not require manual configuration of multiple available IP addresses and prevents addressing conflicts on the network.

Some plugins default to DHCP as their management utility conflicts with NAT.
Keep these plugins set to DHCP unless a manually configured IP address is preferred.

Plugins can take several minutes to download and install.
A dialog confirms when the installation completes and shows any post-install notes.
You can view the post-install notes later by expanding the entry for the installed plugin in **Plugins** and clicking <i class="fa fa-file-alt" aria-hidden="true" title="File"></i> **Post Install Notes**.

{{< expand "Troubleshooting" "v" >}}
If a plugin download or update fails with an unable to fetch an artifact or download a package error, you might need to investigate your networking environment.
Some home routers can have a security feature that prevent DHCP enabled plugins (or bridged devices with virtual MAC addresses) from resolving addresses.
Also, sometimes additional DNS validation is required that is not supported by the router or the router has a caching resolver that is holding on to a stale record.
A couple of possible solutions are to hard reset your router to clear any stale records or try using an alternate DNS server for the plugin.
{{< /expand >}}

### S3 Secret Keys

If the plugin requires an S3 Secret_Key, and you use a random password generation program, check the character string produced for disallowed characters. 
The AWS Secret_Key allows using upper and lowercase alphanumeric characters (a-z, A-Z, digits 0-9), and the following special characters: exclamation point (!), hypen (-), underscore (_), period (.), asterisk (*), single quote ('), open parenthesis ((), and closed parenthesis ()).
If the random password includes other special characters it can result in failed authentication.

## Post-Install Configuration

After a plugin is installed, the **Plugins** screen shows the added entry.

{{< trueimage src="/images/CORE/12.0/PluginsListWithInstalled.png" alt="Plugins List With Installed" id="3 Plugins List With Installed" >}}

Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to manage the plugin state, update the plugin application, configure the plugin jail mount points to storage datasets, and, when supported, open a link to the management portal for the plugin application.

Plugin jails are preconfigured and require very little tuning.
However, jail properties are available in the event a setting needs to change.
To update or reconfigure the plugin jail, go to the **Jails** screen and expand the entry for one of the plugin jails.
Click <i class="fa fa-stop" aria-hidden="true" title="Stop"></i>&nbsp; and stop the jail before changing it.

{{< trueimage src="/images/CORE/12.0/PluginsInstalledOptions.png" alt="Installed Plugin Options" id="4 Installed Plugin Options" >}}

## Removing a Plugin

{{< hint type=warning >}}
Uninstalling a plugin destroys all datasets or snapshots that are associated with the plugin!
Back up any important data stored in the plugin jail before deleting it!
{{< /hint >}}

### Backing up Jail Data

To find data stored in a jail, go to **Storage > Pools** and expand the entry for the pool that stores plugin and jail data.
Expand the **iocage** and **jails** datasets to find the plugin jail storage dataset.

{{< trueimage src="/images/CORE/12.0/StoragePoolsJailsDatasetLocation.png" alt="Storage Pools Jails Dataset Location" id="5 Storage Pools Jails Dataset Location" >}}

One option to back up stored data is to create a [local replication]({{< relref "LocalReplication.md" >}}).
You can configure the replication task to run periodically and automatically back up new changes to the jail dataset.

To convert a jail snapshot into a new storage dataset, go to **Storage > Snapshots** and find a snapshot of the jail dataset.

{{< trueimage src="/images/CORE/12.0/StorageSnapshotsJailsLocation.png" alt="Storage Snapshots Jails Location" id="6 Storage Snapshots Jails Location" >}}

Expand the snapshot entry, click <i class="material-icons" aria-hidden="true" title="Clone to New Dataset">filter_none</i>, and define the path and name of the new dataset to create from the snapshot.
Then go to **Storage > Pools**, open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the new dataset, and click **Promote Dataset**.

### Uninstalling a Plugin

To remove a plugin, go to **Plugins**, expand the installed plugin entry, and click <i class="material-icons" aria-hidden="true" title="Uninstall">delete</i>.
Confirm the plugin removal by typing in the name of the plugin jail and selecting **Confirm**.

{{< trueimage src="/images/CORE/12.0/PluginsUninstall.png" alt="Plugins Uninstall" id="7 Plugins Uninstall" >}}

Uninstalling can take a few moments while the plugin deletes from both **Plugins** and **Jails**.
The plugin dataset also deletes from ***POOL*/iocage/jails/** and any jail snapshots from **Storage > Snapshots**.

{{< taglist tag="coreplugins" limit="10" >}}
