---
title: "Jails Screens"
description: "Describes the fields in the Jails screen in TrueNAS CORE."
weight: 10
tags:
- jails
---

{{< hint type=important title="Unsupported Feature" >}}
{{< include file="content/_includes/COREFeatureSupport.md" >}}
{{< /hint >}}

The Jails screen displays a list of jails installed on your system. Use to add, edit or delete jails.

![JailsScreen](/images/CORE/Jails/JailsScreen.png "Jails Screen")

Use the blue **Columns** dropdown list to display options to change the information displayed in the list of tables. Options are **Select All**, **JID**, **Boot**, **State**, **Release**, **IPv4**, **IPv6**, **Type**, **Template**, **Basejail** or **Reset to Defaults**.

Use the <span class="material-icons">settings</span> icon to set the pool to use for jail storage.

Use **ADD** to display the first configuration **Wizard** screen and to access the **ADVANCED JAIL CREATION** button to display advanced jail configuration screens.

## Individual Jail Screen

Click the <span class="material-icons">chevron_right</span> icon to display the individual jail screen, the primary settings and additional action options for that jail.

Click the <span class="material-icons">expand_more</span> icon to collapse the individual jail screen.

![Jails Options](/images/CORE/Jails/JailsOptions.png "Jails Options")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **EDIT** | Used to modify the settings described in **Advanced Jail Creation** below. You cannot edit a jail while it is running. You can only view read only settings until you stop the jail operation. |
| **MOUNT POINTS** | Select an existing mount point to edit. Either click **EDIT** or **ACTIONS > Add Mount Point** to create a mount point for the jail. A mount point gives a jail access to storage located elsewhere on the system. You must stop a jail before adding, editing, or deleting a mount point. |
| **RESTART** | Stops and immediately starts a jail that is running or **up**. |
| **START** | Starts a jail that has a current **STATE** of **down**. |
| **STOP** | Stops a jail in the current **STATE** of **up**. |
| **UPDATE** | Runs [freebsd-update](https://www.freebsd.org/cgi/man.cgi?query=freebsd-update) to update the jail to the latest patch level of the installed FreeBSD release. |
| **SHELL** | Displays the **Shell** screen with access to a root command prompt where you can interact with a jail directly from the command line. Type `exit` to leave the command prompt or click **Jails** on the breadcrumb at the top of the screen to return to the **Jails** screen. |
| **DELETE** | Deletes the selected jail. Caution: deleting the jail also deletes all of the jail contents and all associated snapshots. Back up the jail data, configuration, and programs first. There is no way to recover the contents of a jail after deleting it! |
{{< /truetable >}}

{{< hint type=note >}}
Action options change based on the jail state. For example, a stopped jail does not have a **STOP** or **SHELL** option.
{{< /hint >}}

## Jail Creation Options
TrueNAS has two options to create a jail, the **Wizard** or the **Advanced Jail Creation** option at the bottom of the **Wizard** screen.
The Jail **Wizard** makes it easy to create a jail.
**ADVANCED JAIL CREATION** opens the advanced configuration screen with all possible jail configuration settings.
We recommend that only advanced users with specific requirements for a jail use this form.

{{< expand "Jail Wizard" "v" >}}
Use the jail-creation **Wizard** to add a new jail by following and completing required fields in a pre-determined order.
The wizard is the simplest process to create and configure a new jail.
Click **ADD** to display the first of three **Wizard** configuration screens.

### Name Jail and Choose FreeBSD Release Screen
This screen includes the jail name, type, and release settings.

![JailsWizardNameJailChooseFreeBSDRelease](/images/CORE/Jails/JailsWizardNameJailChooseFreeBSDRelease.png "Jails Wizard NameJail Choose FreeBSD Release")

{{< expand "Name Jail and Choose FreeBSD Release Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a name using letters, numbers, or the period (.), dash (-), or underscore (_) special characters. You can rename a jail after creating and saving it. |
| **Jail Type** | Select an option from the dropdown list. Options are **Default (Clone Jail)** or **Basejail**. Use **Default (Clone Jail)** to clone jails that are clones of the value specified in **Release**. These are linked to that release, even if they are upgraded. Use **Basejails** to mount the specified release directories as nullfs mounts over the jail directories. Basejails are not linked to the original release when upgraded. Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download is already complete. |
| **Release** | Select the FreeBSD release to use as the jail operating system option from the dropdown list. Options are **12.4-RELEASE** or **13.2-RELEASE**. Jails can run FreeBSD versions up to the same version as the host system. Newer releases are not shown. |
| **Advanced Jail Creation** | Opens the **Advanced Jail Creation** screens. This form is only recommended for advanced users with very specific requirements for a jail. |
{{< /truetable >}}
{{< /expand >}}
### Configure Networking Screen
This screen includes DHCP, NAT or VNET, IPV4 IP or IPv6 interface, address, and netmask, and default router, and the IPv6 prefix.

![JailsWizardConfigureNetworking](/images/CORE/Jails/JailsWizardConfigureNetworking.png "Jails Wizard Configure Networking")

{{< expand "Configure Networking Settings" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **DHCP Autoconfigure IPv4** | Select to auto-configure jail networking with the Dynamic Host Configuration Protocol (DHCP). Select **VNET** and **Berkeley Packet Filter** with this option. |
| **NAT** | Network Address Translation (NAT) to transform local network IP addresses into a single IP address. Select when the jail shares a single connection to the Internet with other systems on the network. |
| **VNET** | Select to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack is installed. |
| **vnet_default_interface** | Select the default VNET interface from options on the dropdown list. Options are **none**, **auto**, or specific interfaces on your system. Only takes effect when **VNET** is selected. Choose a specific interface or set to **auto** to use the interface that has the default route. Choose **none** to not set a default VNET interface. |
| **IPv4 Interface** | Select the IPv4 interface for the jail from the dropdown list. |
| **IPv4 Address** | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv4 Netmask** | Select the IPv4 netmask for the jail from the dropdown list. |
| **IPv4 Default Router** | Enter a valid IPv4 address to use as the default route. Enter **none** to configure the jail with no IPv4 default route. A jail without a default route is not be able to access any networks. |
| **AutoConfigure IPv6** | Select to use Stateless Address Auto Configuration (SLAAC) to auto-configure IPv6 in the jail. |
| **IPv6 Interface** | Select the IPv6 interface for the jail from the dropdown list. |
| **IPv6 Address** | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv6 Prefix** | Select the IPv6 prefix for the jail from the dropdown list. |
| **IPv6 Default Router** | Enter a valid IPv6 address to use as the default route. Enter **none** to configure the jail without an IPv6 default route. A jail without a default route is not able to access any networks. |
{{< /truetable >}}
{{< /expand >}}
### Confirm Options Screen
This screen shows a summary of the jail settings entered or selected on the **Wizard** screens.

![JailsWizardConfirmOptions](/images/CORE/Jails/JailsWizardConfirmOptions.png "Jails Wizard Confirm Options")

### Wizard Navigation

**Next** advances to the next screen.

**Back** returns to the previous screen.

**SUBMIT** saves all settings and creates the Jail.

**Cancel** closes the current screen and exits the configuration process without saving.
{{< /expand >}}
{{< expand "Advanced Jail Creation" "v" >}}
The **Advanced Jail Creation** screen has four expandable configuration areas:
* [Basic Properties](#basic-properties)
* [Jail Properties](#jail-properties)
* [Network Properties](#network-properties)
* [Custom Properties](#custom-properties)

Click the <span class="material-icons">expand_more</span> icon to collapse any area of configuration settings.

Use **Next** to advance to the next configuration settings section, or click the <span class="material-icons">expand_less</span> icon to expand a configuration settings area.

#### Basic Properties
The **Basic Properties** area includes the jail name, type, FreeBSD release, and network settings.

![AdvancedJailCreationBasicProperties](/images/CORE/Jails/AdvancedJailCreationBasicProperties.png "Advanced Jail Creation Jail Basic Properties")

{{< expand "Jail Basic Properties Settings" "v" >}}
{{< include file="/content/_includes/JailsBasicPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
#### Jail Properties
The **Jail Properties** area includes the jail ruleset to follow, commands to run in the system or jail environment, jail user, allow or deny SYSV IPC message, shared memory primitives, or semaphore primitives, VNET interfaces, and other jail settings.

![AdvancedJailCreationJailProperties](/images/CORE/Jails/AdvancedJailCreationJailProperties.png "Advanced Jail Creation Jail Properties")

{{< expand "Jail Properties Settings" "v" >}}
{{< include file="content/_includes/JailsPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
#### Network Properties
The **Network Properties** area includes the assigned interface(s), host name, domain name, resolver, rounding table to use, and IP address type (v4 or v6), mac prefix, and NAT interface and port forwarding settings.

![AdvancedJailCreationNetworkProperties](/images/CORE/Jails/AdvancedJailCreationNetworkProperties.png "Advanced Jail Creation Network Properties")

{{< expand "Network Properties Settings" "v" >}}
{{< include file="content/_includes/JailNetworkPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
#### Custom Properties
The **Custom Properties** area includes the priority for the jail at boot time, jail host ID, setting this jail as a template, system host time to synchronize time between the jail and host, enabling ZFS jailing inside the jail, defining the dataset to be jailed and to be fully handed over to a jail, entering a mount point for the **jail_zfs_dataset**, tun settings, and other local host, IP host name, and IPV6 autoconfigure settings.

![AdvancedJailCreationCustomProperties](/images/CORE/Jails/AdvancedJailCreationCustomProperties.png "Advanced Jail Creation Custom Properties")  

{{< expand "Custom Properties Settings" "v" >}}
{{< include file="_includes/JailsCustomPropertiesFields.md" markdown="true" >}}
{{< /expand >}}
{{< /expand >}}
