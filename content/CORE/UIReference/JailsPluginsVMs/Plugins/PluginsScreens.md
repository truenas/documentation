---
title: "Plugins Screens"
description: "This article describes how to install and maintain 3rd party applications on TrueNAS CORE."
weight: 20
tags:
- coreapps
- coreplugins
- corejailspluginsvm
---

Use the **Plugins** screen to install and maintain 3rd party applications on your TrueNAS storage systems.

![PluginsScreen](/images/CORE/13.0/PluginsScreen.png "Plugins Screen")

Use the blue **Columns** dropdown list to display options to change the information displayed in the lis to of tables. Options are **Select All**, **Status**, **Admin Portals**, **IPv4 Address**, **IPv6 Address**, **Version**, **Plugin**, **Release**, **Boot**, **Collection** or **Reset to Defaults**.

Use the <span class="material-icons">settings</span> icon to set the pool to use for **Plugin and Jail Manager** storage.

Use **Browse a Collection** to select 3rd party applications from either the **iXsystems** or **Community** libraries.

Use **REFRESH INDEX** to update the index of applications.

Use **INSTALL** to display the **Plugins Add** configuration screen and to access the **ADVANCED PLUGIN INSTALLATION** button to display advanced Plugin and jail configuration screens.

## Individual Plugin Screen

Click the <span class="material-icons">chevron_right</span> icon to display the individual plugin screen with its IP address, plugin name, release and version and the Github location for the collection. It includes additional action options for that plugin.   

Click the <span class="material-icons">expand_more</span> icon to collaspe the individual plugin screen.

![PluginDetailScreen](/images/CORE/13.0/PluginDetailScreen.png "Plugin Detail Screen")

| Name | Description |
|------|-------------|
| **Manage** | Displays the **System Overview** screen for that application. For example, the **netdatajail** system overview with CPU and load graphics and options to view other information about this application. |
| **MOUNT POINTS** | Displays the **Jails Mount Points of *nameofpluginjail*** screen. Click **ACTIONS** and select either **Add** to create a mount point for the jail used by the plugin, or **Go Back to Jails** to open the **Jails** screen. A mount point gives a jail access to storage located elsewhere on the system. You must stop a jail before adding, editing, or deleting a mount point. See Additional Storage for more details. |
| **RESTART** | Starts a stopped plugin.  |
| **STOP** | Stops a plugin and the associated jail. |
| **UPDATE** | Displays the **Update plugin** dialog where you can select the option to **Update jail as well**. Select  **Confirm** to activate the **UPDATE** button. |
| **Uninstall** | Displays a verification dialog for the plugin and related jail. Type the name displayed in the dialog and select **Confirm** to activate the **DELETE** button.  |

## Plugin Add Screen
Use the **Add** screen to install the plugin highlighted on the **Plugins** screen for a simple basic install of a third party application. Use the
**ADVANCED PLUGIN INSTALLATION** button to open the advanced configuration screens with all possible configuration settings for the plugin and related jail. This form is recommended only for advanced users with ver specific requirements for a jail.

![PluginsAddScreen](/images/CORE/13.0/PluginsAddScreen.png "Plugins Add Screen")

| Setting | Description |
|---------|-------------|
| **Plugin Name** | Displays the name of the plugin highliged on the **Plugin** screen. |
| **Jail Name** | Required field. Enter a name that can include letters, numbers, periods (.), dashes (-), and underscores (_). |
| **DHCP** | Select to allow DHCP to configure networking for the Jail**. |
| **NAT** | Network Address Translation (NAT) to transform local network IP addresses into a single IP address. Select when the jail shares a single connection to the Internet with other systems on the network. |
| **IPv4 Interface** | Select the IPv4 interface for the jail from the dropdown list. |
| **IPv4 Address** | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv4 Netmask** | Select the IPv4 netmask for the jail from the dropdown list. |
| **IPv6 Interface** | Select the IPv6 interface for the jail from the dropdown list. |
| **IPv6 Address** | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv6 Prefix** | Select the IPv6 prefix for the jail from the drowdown list. |
| **Advanced Plugin Installation** | Opens the advanced configuration screens. This form is recommended only for advanced users with ver specific requirements for a jail |

## Advanced Plugin Installation

The **Advanced Plugin Installation** screens include four expandable configuration areas:
* Basic Properties
* Jail Properties
* Network Properties
* Custom Properties

Click the <span class="material-icons">expand_more</span> icon to collaspe any area of configuration settings.   

Use **Next** to advance to the next configuration settings section, or click the <span class="material-icons">expand_less</span> icon to expand the configuration settings area.

{{< expand "Jail Basic Properties Screen" "v" >}}

![PluginsAdvancedAddBasicProperties](/images/CORE/13.0/PluginsAdvancedAddBasicProperties.png "Plugins Advanced Add Basic Properties") 

| Name | Description |
|------|-------------|
| **Plugins Name** | Displays the name of the Plugin highlighed on the **Plugins** screen. This field is not editable. |
| **Name** | Required field. Enter a name that can include letters, numbers, periods (.), dashes (-), and underscores (_). |
| **DHCP Autoconfigure IPv4** | Select to auto-configure jail networking with the Dynamic Host Configuration Protocol (DHCP). Also select **VNET** and **Berkeley Packet Filter** with this selected option. |
| **NAT** | Network Address Translation (NAT) to transform local network IP addresses into a single IP address. Select when the jail shares a single connection to the Internet with other systems on the network. |
| **VNET** | Select to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack is installed. |
| **Berkeley Packet Filter** | Select to use the [Berkeley Packet Filter (BPF(4))](https://www.freebsd.org/cgi/man.cgi?query=bpf) to data-link layers in a protocol independent fashion. |
| **vnet_default_interface** | Select the default VNET interface from options on the dropdown list. Options are **none**, **auto**, or specific interfaces on your system. Only takes effect when **VNET** is selected. Choose a specific interface or set to **auto** to use the interface that has the default route. Choose **none** to not set a default VNET interface. |
| **IPv4 Interface** | Select the IPv4 interface for the jail from the dropdown list. |
| **IPv4 Address** | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv4 Netmask** | Select the IPv4 netmask for the jail from the dropdown list. |
| **IPv4 Default Router** | Enter a valid IPv4 address to use as the default route. Enter **none** to configure the jail with no IPv4 default route. A jail without a default route is not be able to access any networks. |
| **AutoConfigure IPv6** | Select to use Stateless Address Auto Configuration (SLAAC) to autoconfigure IPv6 in the jail. |
| **IPv6 Interface** | Select the IPv6 interface for the jail from the dropdown list. |
| **IPv6 Address** | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv6 Netmask** | Select the IPv6 prefix for the jail from the drowdown list. |
| **IPv6 Default Router** | Enter a valid IPv6 address to use as the default route. Enter **none** to configure the jail without an IPv6 default route. A jail without a default route is not be able to access any networks. |
| **Auto Start** | Select to auto-start the jail at system boot time. Jails are started and stopped based on iocage priority. Set in the **Custom Properties priority** field. |
{{< /expand >}}
{{< expand "Jail Properties Screen" "v" >}}

![PluginsAdvancedAddJailProperties](/images/CORE/13.0/PluginsAdvancedAddJailProperties.png "Plugins Advanced Add Jail Properties") 

{{< include file="content/_includes/JailsPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
{{< expand "Network Properties Screen" "v" >}}

![PluginsAdvancedAddNetworkProperties](/images/CORE/13.0/PluginsAdvancedAddNetworkProperties.png "Plugins Advanced Add Network Properties") 

{{< include file="content/_includes/JailNetworkPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
{{< expand "Custom Properties Screen" "v" >}}

![PluginsAdvancedAddCustomProperties](/images/CORE/13.0/PluginsAdvancedAddCustomProperties.png "Plugins Advanced Add Custom Properties")  

{{< include file="_includes/JailsCustomPropertiesFields.md" markdown="true" >}}
{{< /expand >}}

{{< taglist tag="corejailspluginsvm" limit="10" >}}
