---
title: "Plugin Management"
weight: 10
---

{{< toc >}}

{{< hint info >}}
The Plugins feature is generally available in TrueNAS CORE and is supported by the open source TrueNAS community.
TrueNAS Enterprise licenses do not support or show this feature.
{{< /hint >}}

Plugins allow extending the built-in NAS services by installing additional software.
A plugin is a pre-packaged application that is installed into a [FreeBSD Jail](https://docs.freebsd.org/en/books/handbook/jails/).
The plugin jail is limited to installing and using only the plugin software.

{{< expand "Before getting started..." "v" >}}
* A [data pool]({{ relref "PoolCreate.md" >}}) must be available for plugin storage.
* The system must be connected to the internet.
* Go to **Network > Interfaces**, edit the intended plugin interface, and set *Disable Hardware Offloading*.
{{< /expand >}}

## Plugin Installation

### Catalog

To see the plugin catalog, go to the **Plugins** screen.
{{< expand "First time in this menu?" "v" >}}
{{< include file="static/includes/JailsPluginsFirstTime.md.part" markdown="true" >}}
{{< /expand >}}

![PluginsList](/images/CORE/12.0/PluginsList.png "Plugins Catalog")
{{< expand "I don't see anything?" "v" >}}
If the catalog doesn't load:
* Go to **Network > Global Configuration** and confirm the **Default Gateway** and **DNS Servers** addresses are correct.
* Open the **Shell** and `ping` an Internet address. The output confirms the system is connected to the Internet.
{{< /expand >}}

Plugins are organized into two **Collections**:

* [iXsystems](https://www.ixsystems.com/) maintained plugins
* Open Source plugins created and maintained by the TrueNAS community.

By default, the iXsystems-supported plugins are shown.
To view the community-supported plugins, open *Browse a Collection* and select *Community*.

### Install Options

To install a plugin, click the plugin icon and *Install*.
This example shows installing [Tarsnap](https://www.tarsnap.com/), a popular backup solution.

![PluginsTarsnapInstall](/images/CORE/12.0/PluginsTarsnapInstall.png "Installing the Tarsnap Plugin")

Enter a *Jail Name* for the plugin and adjust the networking settings as needed.
Most plugins default to using [Network Address Translation (NAT)](https://datatracker.ietf.org/wg/nat/about/) for their Internet connection, but you can choose to use a dynamically-generated address with *DHCP* or define static IP addresses for the plugin jail.
Using *NAT* is recommended as it does not require manual configuration of multiple available IP addresses and prevents addressing conflicts on the network.

Some plugins default to *DHCP* as their management utility conflicts with NAT.
Keep these plugins set to *DHCP* unless a manually configured IP address is preferred.

Plugins can take several minutes to download and install.
A dialog confirms when the installation is complete and shows any post-install notes.
You can view the post-install notes later by expanding the entry for the installed plugin in **Plugins** and clicking <i class="fa fa-file-alt" aria-hidden="true" title="File"></i> *Post Install Notes*.

{{< expand "Troubleshooting" "v" >}}
If a plugin download or update fails with an error about being unable to fetch an artifact or download a package, you might need to investigate your networking environment.
Some home routers can have a security feature that prevent DHCP enabled plugins (or bridged devices with virtual MAC addresses) from resolving addresses.
Also, sometimes additional DNS validation is required that is not supported by the router or the router has a caching resolver that is holding on to a stale record.
A couple of possible solutions are to hard reset your router to clear any stale records or try using an alternate DNS server for the plugin.
{{< /expand >}}

## Post-Install Configuration

After a plugin is installed, an entry is added to the **Plugins** screen.

![PluginsListwithInstalled](/images/CORE/12.0/PluginsListWithInstalled.png "Plugins List With Installed")

Click <i class="fa fa-chevron-right" aria-hidden="true" title="Right Chevron"></i>&nbsp; to manage the plugin state, update the plugin application, configure the plugin jail mount points to storage datasets, and, when supported, open a link to the management portal for the plugin application.

Plugin jails are preconfigured and require very little tuning.
However, jail properties are available in the event a setting needs to change.
To update or reconfigure the plugin jail, go to the **Jails** screen and expand the entry for one of the plugin jails.
You need to click <i class="fa fa-stop" aria-hidden="true" title="Stop"></i>&nbsp; and stop the jail before changing it.

![PluginsInstalledOptions](/images/CORE/12.0/PluginsInstalledOptions.png "Installed Plugin Options")

## Removing a Plugin

{{< hint danger >}}
Uninstalling a plugin **destroys** all datasets or snapshots that are associated with the plugin.
Make sure to back up any important data stored in the plugin jail before deleting it!
{{< /hint >}}

### Backing up Jail Data

To find a jail's stored data, go to **Storage > Pools** and expand the entry for the pool that was chosen to store plugin and jail data.
Expand the `iocage` and `jails` datasets to find the plugin jail storage dataset.

![StoragePoolsJailsDatasetLocation](/images/CORE/12.0/StoragePoolsJailsDatasetLocation.png "Storage Pools Jails Dataset Location")

One option to back up this stored data is to create a [local replication]({{< relref "Local.md" >}}).
The replication task can even be configured to run periodically and automatically back up new changes to the jail dataset.

To convert a jail snapshot into a new storage dataset, go to **Storage > Snapshots** and find a snapshot of the jail dataset.

![StorageSnapshotsJailsLocation](/images/CORE/12.0/StorageSnapshotsJailsLocation.png "Storage Snapshots Jails Location")

Expand the snapshot entry, click <i class="fa fa-clone" aria-hidden="true" title="Clone"></i> *Clone to New Dataset*, and define the path and name of the new dataset to create from the snapshot.
Then go to **Storage > Pools**, open the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> options for the new dataset, and click *Promote Dataset*.

### Uninstalling a Plugin

To remove a plugin, go to **Plugins**, expand the installed plugin entry, and click <i class="fa fa-trash" aria-hidden="true" title="Delete"></i>&nbsp; *Uninstall*.
Confirm the plugin removal by typing in the name of the plugin jail and setting *Confirm*.

![PluginsUninstall](/images/CORE/12.0/PluginsUninstall.png "Plugins Uninstall")

Uninstalling can take a few moments while the plugin deletes from both **Plugins** and **Jails**.
The plugin dataset also deletes from <file>{POOL}/iocage/jails/</file> and any jail snapshots from **Storage > Snapshots**.
