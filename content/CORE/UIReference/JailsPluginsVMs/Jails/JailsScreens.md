---
title: "Jails Screens"
description: "This article describes the fields in the Jails screen in TrueNAS CORE."
weight: 10
tags:
- corejails
---

The Jails screen displays a list of jails installed on your system. Use to add, edit or delete jails.

![JailsScreen](/images/CORE/13.0/JailsScreen.png "Jails Screen")

Use the blue **Columns** dropdown list to display options to change the information displayed in the lis to of tables. Options are Select **All**, **JID**, **Boot**, **State**, **Release**, **IPv4**, **IPv6**, **Type**, **Template**, **Basejail** or **Reset to Defaults**.

Use the <span class="material-icons">settings</span> icon to set the pool to use for jail storage.

Use **ADD** to display the first configuration **Wizard** screen and to access the **ADVANCED JAIL CREATION** button to display advanced jail configuration screens.

## Individual Jail Screen

Click the <span class="material-icons">chevron_right</span> icon to display the individual jail screen with its primary settings and additional action options for that jail.   

Click the <span class="material-icons">expand_more</span> icon to collaspe the individual jail screen.

![Jails Options](/images/CORE/12.0/JailsOptions.png "Jails Options")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **EDIT** | Used to modify the settings described in Advanced Jail Creation. You cannot edit a jail while it is running. You can only view the settings that are read only until you stop the jail operation. |
| **MOUNT POINTS** | Select an existing mount point to edit. Either click **EDIT** or click **ACTIONS** > **Add Mount Point** to create a mount point for the jail. A mount point gives a jail access to storage located elsewhere on the system. You must stop a jail before adding, editing, or deleting a mount point. See Additional Storage for more details. |
| **RESTART** | Stops and immediately starts a jail that is running or **up**. |
| **START** | Starts a jail that has a current **STATE** of **down**. |
| **STOP** | Stops a jail that has a current **STATE** of **up**. |
| **UPDATE** | Runs [freebsd-update](https://www.freebsd.org/cgi/man.cgi?query=freebsd-update) to update the jail to the latest patch level of the installed FreeBSD release. |
| **SHELL** | Diplays the **Shell** screen which provides access a *root* command prompt to interact with a jail directly from the command line. Type `exit` to leave the command prompt and display the **Jails** screen. |
| **DELETE** | Deletes the selected jail. Caution: deleting the jail also deletes all of the jail contents and all associated snapshots. Back up the jail data, configuration, and programs first. There is no way to recover the contents of a jail after deleting it! |
{{< /truetable >}}

{{< hint type=note >}}
Action options change based on the jail state. For example, a stopped jail does not have a **STOP** or **SHELL** option.
{{< /hint >}}

## Jail Creation Options
TrueNAS has two options to create a jail. The Jail **Wizard** makes it easy to create a jail. **ADVANCED JAIL CREATION** opens the advanced configuration screens with all possible configuration settings. This form is recommended only for advanced users with ver specific requirements for a jail.

{{< expand "Jail Wizard" "v" >}}
Use the jail-creation Wizard to add a new jail by following and completing required fields in a pre-determimed order. The wizard provides the simplest process to create and configure a new jail.
Click **ADD** to display the first of three Wizard configuration screens.

### Wizard Navigation

Use **Next** to advance to the next screen.
Use **Back** to return to the previous screen.
Use **SUBMIT** to save all settings and create the Jail.
Use **Cancel** to close the current screen exit the configuation process without saving.

{{< expand "Name Jail and Choose FreeBSD Release Screen Settings" "v" >}}

![JailsWizardNameJailChooseFreeBSDRelease](/images/CORE/13.0/JailsWizardNameJailChooseFreeBSDRelease.png "Jails Wizard NameJail Choose FreeBSD Release")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required field. Enter a name that can include letters, numbers, periods (.), dashes (-), and underscores (_). |
| **Jail Type** | Select an option from the dropdown-list. Options are **Default (Clone Jail)** or **Basejail**. Use **Default (Clone Jail)** to clone jails that are clones of the specified value in **Release**. They are linked to that release, even if they are upgraded. Use **Basejails** to mount the specified release directories as nullfs mounts over the jail directories. Basejails are not linked to the original release when upgraded. Versions of FreeBSD are downloaded the first time they are used in a jail. Additional jails created with the same version of FreeBSD are created faster because the download is already complete. |
| **Release** | Select an option from the dropdown list. Options are **12.2-RELEASE** or **13.0-RELEASE**. This is the FreeBSD release to use as the jail operating system. Jails can run FreeBSD versions up to the same version as the host system. Newer releases are not shown. |
| **Advanced Jail Creation** | Opens the advanced configuration screens. This form is recommended only for advanced users with ver specific requirements for a jail |
{{< /truetable >}}

{{< /expand >}}
{{< expand "Configure Networking Screen Settings" "v" >}}

![JailsWizardConfigureNetworking](/images/CORE/13.0/JailsWizardConfigureNetworking.png "Jails Wizard Configure Networking")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **DHCP Autoconfigure IPv4** | Select to auto-configure jail networking with the Dynamic Host Configuration Protocol (DHCP). Also select **VNET** and **Berkeley Packet Filter** with this selected option. |
| **NAT** | Network Address Translation (NAT) to transform local network IP addresses into a single IP address. Select when the jail shares a single connection to the Internet with other systems on the network. |
| **VNET** | Select to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack is installed. |
| **vnet_default_interface** | Select the default VNET interface from options on the dropdown list. Options are **none**, **auto**, or specific interfaces on your system. Only takes effect when **VNET** is selected. Choose a specific interface or set to **auto** to use the interface that has the default route. Choose **none** to not set a default VNET interface. |
| **IPv4 Interface** | Select the IPv4 interface for the jail from the dropdown list. |
| **IPv4 Address** | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv4 Netmask** | Select the IPv4 netmask for the jail from the dropdown list. |
| IPv4 Default Router | Enter a valid IPv4 address to use as the default route. Enter **none** to configure the jail with no IPv4 default route. A jail without a default route is not be able to access any networks. |
| **AutoConfigure IPv6** | Select to use Stateless Address Auto Configuration (SLAAC) to autoconfigure IPv6 in the jail. |
| **IPv6 Interface** | Select the IPv6 interface for the jail from the dropdown list. |
| **IPv6 Address** | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv6 Prefix** | Select the IPv6 prefix for the jail from the dropdown list. |
| **IPv6 Default Router** | Enter a valid IPv6 address to use as the default route. Enter **none** to configure the jail without an IPv6 default route. A jail without a default route is not be able to access any networks. |
{{< /truetable >}}

{{< /expand >}}
{{< expand "Confirm Options" "v" >}}

Displays a screen that summarizes the Jail settings entered or selected on the Wizard screens.

![JailsWizardConfirmOptions](/images/CORE/13.0/JailsWizardConfirmOptions.png "Jails Wizard Confirm Options")

{{< /expand >}}

{{< /expand >}}

{{< expand "Advanced Jail Creation" "v" >}}

The **Advanced Jail Creation** screens include four expandable configuration areas:
* Basic Properties
* Jail Properties
* Network Properties
* Custom Properties

Click the <span class="material-icons">expand_more</span> icon to collaspe any area of configuration settings.   

Use **Next** to advance to the next configuration settings section, or click the <span class="material-icons">expand_less</span> icon to expand the configuration settings area.

{{< expand "Jail Basic Properties Screen" "v" >}}

![AdvancedJailCreationBasicProperties](/images/CORE/13.0/AdvancedJailCreationBasicProperties.png "Advanced Jail Creation Jail Basic Properties") 

{{< include file="/content/_includes/JailsBasicPropertiesFields.md" markdown="true" >}}

{{< /expand >}}
{{< expand "Jail Properties Screen" "v" >}}

![AdvancedJailCreationJailProperties](/images/CORE/13.0/AdvancedJailCreationJailProperties.png "Advanced Jail Creation Jail Properties") 

{{< include file="content/_includes/JailsPropertiesFields.md" markdown="true" >}}
{{< /expand >}}

{{< expand "Network Properties Screen" "v" >}}

![AdvancedJailCreationNetworkProperties](/images/CORE/13.0/AdvancedJailCreationNetworkProperties.png "Advanced Jail Creation Network Properties") 

{{< include file="content/_includes/JailNetworkPropertiesFields.md" markdown="true" >}}
{{< /expand >}}

{{< expand "Custom Properties Screen" "v" >}}

![AdvancedJailCreationCustomProperties](/images/CORE/13.0/AdvancedJailCreationCustomProperties.png "Advanced Jail Creation Custom Properties")  

{{< include file="_includes/JailsCustomPropertiesFields.md" markdown="true" >}}

{{< /expand >}}

{{< /expand >}}

{{< taglist tag="corejails" limit="10" >}}
