---
title: "Using Plugins"
description: "How to install or configure application plugins."
---

{{% alert title="Notice" color="info" %}}
The Plugins feature is generally available in TrueNAS CORE and is supported by the open source TrueNAS community.
TrueNAS Enterprise does not show or support this feature unless it has been added to a TrueNAS Enterprise license.
For more details or to request plugin support in TrueNAS Enterprise, please [contact iX Support](/hub/initial-setup/support/#contacting-ixsystems-support):
{{% /alert %}}

Plugins allow you to extend the built-in NAS services by installing additional software.
A plugin is a pre-packaged application that is installed into a [FreeBSD Jail](https://en.wikipedia.org/wiki/FreeBSD_jail).
The plugin jail is limited to installing and using only the plugin software.

To begin using plugins, you need to have a data pool available for plugin storage and the system needs to be connected to the Internet.
It is also recommended to go to **Network > Interfaces** and set *Disable Hardware Offloading* for the interface that you want to use for plugins.

## Installing a Plugin

Open the **Plugins** menu to find the plugins that are available to download.
If no options appear, verify the system can `ping` an Internet address and confirm the default gateway address and DNS server address are correct in **Network > Global Configuration**.

<img src="/images/PluginsAvailable.png">
<br><br>

Plugins are organized by those supported by [iXsystems](https://www.ixsystems.com/) and open source plugins created and maintained by the TrueNAS community.
By default, the iXsystems-supported plugins are shown.
To view the community-supported plugins, open *Browse a Collection* and select *Community*.

To install a plugin, click the plugin icon then *Install*.

<img src="/images/PluginsInstall.png">
<br><br>

Enter a name for the plugin jail and adjust the networking settings as needed.
Most plugins default to using Network Address Translation (NAT) for their Internet connection, but you can choose to use a dynamically-generated address with *DHCP* or define static IP addresses for the plugin jail.
Using *NAT* is recommended as it does not require manual configuration of multiple available IP addresses and prevents addressing conflicts on the network.
Some plugins default to *DHCP* as their management utility conflicts with NAT.
Keep these plugins set to *DHCP* unless a manually configured IP address is preferred.

Plugins can take several minutes to download and install.
A dialog confirms when the installation is complete and shows any post-install notes.
You can view the post-install notes later by expanding the entry for the installed plugin in **Plugins** and clicking <i class="fas fa-file-alt" aria-hidden="true" title="File"></i>&nbsp; **Post Install Notes**.

### Troubleshooting

If a plugin download or update fails with an error about being unable to fetch an artifact or download a package, you might need to investigate your networking environment.
Some home routers can have a security feature that prevent DHCP enabled plugins (or bridged devices with virtual MAC addresses) from resolving addresses.
Also, sometimes additional DNS validation is required that is not supported by the router or the router has a caching resolver that is holding on to a stale record.
A couple of possible solutions are to hard reset your router to clear any stale records or try using an alternate DNS server for the plugin.

## Plugin Configuration

After a plugin is installed, an entry is added to the **Plugins** screen.

<img src="/images/PluginsInstalledExample.png">
<br><br>

You can manage the plugin state, update the plugin application, configure the plugin jail mount points to storage datasets, and, when supported, open a link to the management portal for the plugin application.

Plugin jails are preconfigured and typically require very little tuning, but you can reconfigure the jail properties in the event that a setting needs to change (updating the network configuration, for example).
To update or reconfigure the plugin jail, go to the **Jails** screen and expand the entry for one of the plugin jails.
You need to <i class="fas fa-stop" aria-hidden="true" title="Stop"></i> stop the jail before you can edit it.

<img src="/images/PluginJailInstalled.png">
<br><br>

## Removing a Plugin

Uninstalling a plugin will <ins>destroy</ins> all datasets or snapshots that are associated with the plugin.
Make sure to back up any important data stored in the plugin jail before deleting it!

### Backing up Jail Data

To find a jail's stored data, go to **Storage > Pools** and expand the entry for the pool that was chosen to store plugin and jail data.
Expand the `iocage` and `jails` datasets to find the plugin jail storage dataset.

<img src="/images/Jails-StorageDataset.png">
<br><br>
One option to back up this stored data is to create a [local replication](/hub/tasks/scheduled/replication/local/).
The replication task can even be configured to run periodically and automatically back up new changes to the jail dataset.

To convert a jail snapshot into a new storage dataset, go to **Storage > Snapshots** and find a snapshot of the jail dataset.

<img src="/images/Jail-SnapshotOptions.png">
<br><br>

Expand the snapshot entry, click <i class="fas fa-clone" aria-hidden="true" title="Clone"></i>&nbsp **Clone to New Dataset**, and define the path and name of the new dataset to create from the snapshot.
Then go to **Storage > Pools**, open the <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; options for the new dataset, and click *Promote Dataset*.

### Uninstall a Plugin

To remove a plugin, go to **Plugins**, expand the installed plugin entry, and click <i class="fas fa-trash" aria-hidden="true" title="Delete"></i>&nbsp; **Uninstall**.
Confirm the plugin removal by typing in the name of the plugin jail and setting *Confirm*.

<img src="/images/PluginUninstall.png">
<br><br>

Uninstalling can take a few moments.
The plugin entry is removed from **Plugins** and **Jails**.
The plugin dataset is also removed from `<storage-pool>/iocage/jails/` and any jail snapshots from **Storage > Snapshots**.

## Creating a New Plugin

TrueNAS community members are welcome to develop and contribute their own plugins to the project! See the [contributing plugins article](/hub/contributing/creating-plugins/) for more details.
