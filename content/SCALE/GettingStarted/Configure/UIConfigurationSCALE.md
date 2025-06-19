---
title: "Configuring TrueNAS Using the UI"
description: "Provides a sequential process to complete the initial configuration using the TrueNAS UI."
weight: 30
aliases:
 - /scale/gettingstarted/install/uiconfigurationscale/
tags:
- install
- migrate
keywords:
- nas storage software
- nas data storage
- enterprise storage systems
- data sharing
---

{{< enterprise >}}
TrueNAS Enterprise customers should contact TrueNAS Enterprise Support after their system(s) arrive to receive additional guidance on the next steps.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< include file="/static/includes/DisruptiveActionslist.md" >}}
{{< /enterprise >}}

TrueNAS users should follow the instructions provided below to complete the initial system setup and configuration.

Use the information mentioned in the [installation preparation instructions]({{< ref "/SCALE/GettingStarted/Install" >}}) article for your TrueNAS installation type (Enterprise, non-Enterprise, or home use) to configure your network, SMTP, or directory service settings.

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

After [logging into TrueNAS]({{< ref "FirstTimeLogin.md#logging-into-the-scale-ui" >}}), you can begin configuring TrueNAS using the web interface.

## Enterprise Licenses and Proactive Support

{{< enterprise >}}
### Applying Enterprise Licenses
TrueNAS Enterprise customers should contact Support to obtain their TrueNAS system license information.
To apply the license information, go to the **System > General Settings** screen and use the **[Update License]({{< ref "AddLicenseProactiveSupport" >}})** option on the **Support** widget (system information card).

### Setting up Proactive Support
TrueNAS Enterprise customers with Silver or Gold Coverage support contracts can configure proactive support.

Customers with appropriate support contracts can configure **[Proactive Support]({{< ref "AddLicenseProactiveSupport" >}})** after they apply their system license, and after acknowledging and signing the End User License Agreement (EULA).

After entering your system license,  the **Proactive Support** option shows on the **Support** widget on the **System > General Settings** screen. 
{{< /enterprise >}}

## Setting Up Networking

{{< include file="/static/includes/DHCPCreatedNetwork.md" >}}

{{< include file="/static/includes/UsingConsoleSetupMenuSCALE.md" >}}

If you are unfamiliar with network services, devices, or configurations, you can find more information [here]({{< ref "/SCALE/SCALETutorials/Network" >}}) to help guide you through this important and required configuration area.
{{< enterprise >}}
You must disable failover in the UI on TrueNAS Enterprise HA systems to [add or change any network setting]({{< ref "InstallEnterpriseHASCALE.md#configure-network-settings" >}}). Complete network changes and test them, then re-enable failover.
{{< /enterprise >}}

### Adding Network Interfaces

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

If your system has more than one network interface card (NIC) connected to your internal network (wired to your router or Internet access point), you can add an interface in TrueNAS.
DHCP is only available for a single interface; all other physical interfaces must be manually configured with static IP addresses.

TrueNAS allows configuring virtual network interfaces such as a [bridge]({{< ref "SettingUpBridge" >}}), link aggregate (LAGG), or virtual LAN (VLAN) interface.

You can use the Console Setup menu or TrueNAS UI to configure network interfaces.
We recommend using the web UI **Network** screen to [add or change network interfaces or aliases]({{< ref "/SCALE/SCALETutorials/Network/Interfaces" >}}), set up virtual interfaces such as a link aggregate [LAGG]({{< ref "SettingUpLAGG" >}}) or virtual LAN [VLAN]({{< ref "SettingUpVLAN" >}}), and change or [configure global network settings]({{< ref "ManagingGlobalConfig" >}}).

### Adding Aliases or Static IP Addresses

Static IP addresses and aliases provide support for various network applications.

{{< enterprise >}}
TrueNAS Enterprise HA systems use a virtual IP (VIP) to maintain access to the UI when the system fails over to the standby controller.
This VIP address might experience a minor blip at failover, but you do not need to log in with the standby controller IP address to gain access to the UI after a failover.
{{< /enterprise >}}
The **Add Interface** screen allows configuring a network interface with a static IP address or adding an alias IP address.
For more information on when to use an alias or a static IP address, see [Managing Interfaces]({{< ref "/SCALE/SCALETutorials/Network/Interfaces" >}}).

## Setting Up Storage

TrueNAS requires at least one storage pool.
We recommend creating the required pool, then planning the rest of your storage needs before adding sharing, container applications, virtual machines, or storing data.
When planning your data storage, consider the type of data sharing you want to do, any container applications you might want to deploy, and how you want to organize stored data.

The storage creation process begins with creating a pool, then adding datasets or zvols as needed.
Creating your initial storage is [explained here]({{< ref "SetUpStorageScale" >}}).

### Setting the System Dataset

TrueNAS assigns the root (parent) dataset of the first created pool as the system dataset.
If your system has enough disks to add more pools, you can [change the system dataset]({{< ref "/SCALE/SCALETutorials/SystemSettings/Advanced" >}}) to a root dataset of another pool.

## Setting Up Shares

After setting up system storage, [configure data sharing]({{< ref "SetUpSharing" >}}) using one of the sharing protocols available in TrueNAS.

These articles provide more information on the three built-in share types available in TrueNAS and configuring data sharing:
{{< truetable >}}
| Share Type | Purpose |
|-----------|-------------|
| [SMB shares]({{< ref "/SCALE/SCALETutorials/Shares/SMB" >}}) | For Windows shares and setting up deprecated AFP sharing. |
| [NFS shares]({{< ref "AddingNFSShares" >}}) | For Linux-based shares. |
| [iSCSI shares]({{< ref "/SCALE/SCALETutorials/Shares/iSCSI" >}}) | For block shares. |
{{< /truetable >}}

## Configuring System Services

Configure and enable the services based on what is deployed on your TrueNAS system.

{{< enterprise >}}
Enterprise or TrueNAS systems with large numbers of disks should enable SMART service and configure SMART testing.

TrueNAS Enterprise HA systems should enable and configure the failover service.
{{< /enterprise >}}

{{< expand "Configuring Services" "v" >}}
Configure and enable these services based on your TrueNAS system needs:

* [SSH service]({{< ref "SSHServiceSCALE" >}})

Set the service to allow SSH login for administration users (admin or, if also enabled, the root user) on all TrueNAS systems.
All TrueNAS systems that need SSH access should enable SSH service as part of the initial UI configuration, but this is an area of security vulnerability.
To security-harden your system, do not enable SSH and leave it activated at all times.
Enable the service when SSH access is needed and then disable it until needed again.

{{< include file="/static/includes/SSHUserValidationCheck.md" >}}

* SMART service and SMART tests

 SMART service and tests are important for systems with large numbers of disks.
Managing systems with large numbers of disks presents challenges when trying to determine the disk with issues if the SMART service and testing are not set up.

* Failover service on TrueNAS Enterprise High Availability (HA) systems

 The failover service enables an HA system to fail over to the standby system controller after a disruption to the primary controller.
 This service is not included in non-Enterprise and non-HA systems.

 Enterprise customers should not change failover settings or the service on their own, except when disabling failover to make network settings changes.
 Contact TrueNAS Enterprise Support for assistance before making changes to other failover settings.

When adding data sharing, the system prompts you to enable the appropriate sharing service as part of the configuration and setup process.

If your installation includes a UPS, configure and enable the UPS service.
{{< /expand >}}

### Exiting Configuration Screens Without Saving

TrueNAS allows exiting a configuration screen without saving, but asks if you want to exit without saving before closing it.
After opening a configuration screen and changing or entering a setting, when you click away from the screen or on the **X** at the top right of the screen, a dialog opens and asks if you are sure you want to exit the screen.

{{< trueimage src="/images/SCALE/Dashboard/CloseWithoutSavingChangesDialog.png" alt="Close Without Saving Changes" id="Close Without Saving Changes" >}}

To close without saving, click **Yes** or **No** to continue making changes or entering values.

### Setting Up SMART Testing

All systems can benefit from using the SMART service and testing with compatible attached disks.
Disks that do not support SMART testing do not display the option to set up testing.

See [Managing SMART Tests]({{< ref "SmartTestsScale" >}}) for information on running or managing scheduled SMART tests or [Managing Disks]({{< ref "/SCALE/SCALETutorials/Storage/Disks" >}}) for more information on running a manual test from a selected disk.

## Setting Up Backup Solutions

After completing your initial system configuration and before beginning day-to-day operations, we recommend configuring the system and data storage backup methods.
The best practice for critical data is to use more than one solution or method to back up your data in case one method fails. Recommended minimum system backup options:

1. Save the [system configuration file]({{< ref "SetUpBackupSCALE" >}}).
2. Save or [create a new boot environment]({{< ref "ManageBootEnvironSCALE" >}}) before upgrading the system to create a restore point if system issues cause lost access to the TrueNAS UI.
3. Download a system debug to capture system information before and after an upgrade or major change for comparison against future debug files.

 {{< expand "Downloading System Files" "v" >}}
 {{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}
 {{< /expand >}}

Keep downloaded system configuration files and initial or interim system debug files in a safe location where important files are regularly backed up.
You can use the boot environment in an SSH session to restore your system to the point where you completed your system configuration, and then import data or pools to recover stored data.

{{< enterprise >}}
For Enterprise customers with High Availability (HA) systems, the HA restore process requires recovering both controllers.
Contact TrueNAS Enterprise Support for assistance before attempting to recover your system.
If you choose to restore access to the active controller 1 and the TrueNAS UI, contact TrueNAS Enterprise Support for assistance with properly recovering your second standby controller.

Enterprise HA customers should not start issuing CLI commands to recover the system!

Contact TrueNAS Enterprise Support after restoring access to controller 1 to request further assistance and before taking actions that can disrupt or damage system access and might result in a complete reinstall to recover.

{{< expand "Contact TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

### Data Storage Backup Solutions

After saving system configuration and debug files, we recommend setting up data storage backups using any or all of the following methods:

* Taking regular snapshots or creating periodic snapshot tasks
* Setting up replication to another system (remote replication)
* Adding a cloud storage provider service and setting up a cloud sync task

You can take single [snapshots]({{< ref "CreatingSnapshots" >}}) or [schedule periodic snapshot tasks]({{< ref "PeriodicSnapshotTasksSCALE" >}}) to capture changes to stored data without the storage overhead that comes with backing up through data replication, or you can use one of the [replication options]({{< ref "/SCALE/SCALETutorials/DataProtection/Replication" >}}) TrueNAS provides.

Another option is to create a cloud storage service provider account and then let TrueNAS manage the backups to that account.
Use the **Backup Credentials** screen [**Cloud Credentials**]({{< ref "AddCloudCredentials" >}}) to add authentication credentials for a supported cloud service provider, and go to **Data Protection** to schedule a [**Cloud Sync Tasks**]({{< ref "/SCALE/SCALETutorials/DataProtection/CloudSynctasks" >}}) that regularly backs up your storage data to the cloud.

{{< hint type=warning title="Backing Up Critical Data" >}}
Having a secondary backup solution for critical data is a best practice!
When backing up critical data to a cloud service provider, consider backing up the data to a remote server or a secondary cloud storage service as a protection against unforeseen failures with the primary backup solution.
{{</hint >}}

## Checking System Alert Settings and Services

You can view system alerts, configure an alert service, and enter an email account to receive alerts from TrueNAS from the **Alerts** screen accessed by clicking the **Alerts** icon on the top toolbar.

{{< expand "Configuring Alerts" "v" >}}
The alert icon on the [top toolbar]({{< ref "/SCALE/SCALEUIReference/toptoolbar" >}}) shows a red circle with a number in it if TrueNAS encounters a configuration error or exceeds a threshold that you set (such as a temperature or a usage level).
The number indicates how many new alerts occurred.
Click on the alert icon to open the **[Alerts]({{< ref "/SCALE/SCALEUIReference/toptoolbar/alerts" >}})** panel.

The **Alerts** panel **Settings** (gear) icon opens the **Alert Settings** screen where you configure the alert types and thresholds. The system email option opens a configuration screen where you enter an address to receive messages for a system event triggered by an alert.

* Click **[Alert Settings]({{< ref "AlertSettingsScreen" >}})** to configure an alert service such as PagerDuty or customize alert settings such as type and threshold for triggering an alert.
* Click **[Email]({{< ref "SettingUpSystemEmail" >}})** to assign an email address to receive system alert notifications.

{{< enterprise >}}
The **Alert Settings** screen includes access to Enterprise HA setting options that customize HA-related event thresholds that produce alerts or send emails.

Enterprise systems with FIPS and STIG enabled include alert settings to customize the event thresholds that produce alerts or send emails.
{{< /enterprise >}}
{{< /expand >}}

## Setting Up Directory Services

TrueNAS allows configuring an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings.
TrueNAS allows configuring either directory server but not both.

{{< hint type=warning >}}
We do not recommend switching between directory services. This can result in configuration issues that can disrupt your system!

However, it is possible to change from one directory service to another.
To migrate from LDAP to Active Directory, first, disable LDAP in TrueNAS, and then remove the current directory server settings.
To change from Active Directory to LDAP, use the **Leave Domain** option, and then disable the service before attempting to configure and enable LDAP.
{{< /hint >}}

{{< enterprise >}}
TrueNAS Support can assist Enterprise customers with configuring directory service settings in TrueNAS with the [information customers provide]({{< ref "/SCALE/GettingStarted/Install" >}}), but do not configure customer Active Directory system settings.
{{< /enterprise >}}

Non-enterprise users can find support for configuring directory services in the TrueNAS Documentation Hub tutorials or the community forums.

## Using Enclosure Management

{{< enterprise >}}
The TrueNAS main **Dashboard** displays an image of the TrueNAS system server on the **System Information** widget for TrueNAS Enterprise customers with compatible hardware.
Click on the image to open the **[View Enclosure]({{< ref "EnclosureScreensSCALE" >}})** screen, or select the **System > Enclosure** option on the main menu navigation panel.

The **View Enclosure** screen provides details on system disks, pool and VDEV disks, disk hardware details, and disk status.
Click on a drive to view disk details.
If the TrueNAS system has an expansion shelf, the **Enclosure** screen also shows an image of the expansion shelf populated with disks.
{{< /enterprise >}}

If using TrueNAS on hardware not provided by TrueNAS, the **System Information** widget on the **Dashboard** displays the TrueNAS logo, and the **System > Enclosure** option does not exist on the menu navigation panel.

## Using Applications in TrueNAS

TrueNAS shows a list of deployable applications on the **Apps > Discover** screen.
See the [TrueNAS Apps Market](https://apps.truenas.com/) for information on deploying and managing apps, app catalogs and images, including custom apps, and specific catalog app resources.

## Updating TrueNAS

You can update your system with an <file>iso</file> file using the system Console Setup menu or with an update file installed through the TrueNAS UI.

There are a few ways to find available updates for your instance of TrueNAS:

* The [Software Releases](https://www.truenas.com/docs/softwarereleases/) article in the TrueNAS Documentation Hub shows upgrade paths, and provides links to available releases and updates.
* The main **Dashboard > System Information** widget shows when a TrueNAS update is available to download and install.
 Click the update option to open the **System > Updates** screen.
* Go to **System > Updates** to check if an update is available.

For all update options and procedures using the TrueNAS UI see **[Updating TrueNAS]({{< ref "UpdateSCALE" >}})**.

Always save a system configuration file and a new boot environment for your current release and configuration before updating to a new incremental or full release.

It is also good practice to download a debug file before and after a system update.