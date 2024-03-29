---
title: "Configuring SCALE Using the UI"
description: "Provides a sequential process to complete SCALE initial configuration using the SCALE UI."
weight: 30
aliases:
 - /scale/gettingstarted/install/uiconfigurationscale/
tags:
- install
- migrate
---

{{< enterprise >}}
iXsystems TrueNAS Enterprise customers should contact iXsystems Support after their systems arrive to receive additional guidance on their next steps.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

TrueNAS SCALE users should follow the instructions provided below to complete the initial set up and configuration of their systems.

Use the information mentioned in the [installation preparation instructions]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}) article for your SCALE installation type (Enterprise, non-Enterprise, or home use) to configure your network, SMTP, or directory service settings.

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

After [logging into SCALE]({{< relref "FirstTimeLogin.md#logging-into-the-scale-ui" >}}) as admin, you can begin to configuring SCALE using the web interface.

## Enterprise Licenses and Proactive Support

{{< enterprise >}}
### Applying Enterprise Licenses
TrueNAS SCALE Enterprise customers should contact iXsystems support to obtain license information for their TrueNAS system.
To apply the license information, go to the **System Settings > General** screen and use the **[Update License]({{< relref "AddLicenseProactiveSupport.md" >}})** option on the **Support** widget (system information card).

### Setting up Proactive Support
TrueNAS SCALE Enterprise customers with Silver or Gold Coverage support contracts have the option to configure proactive support.

Customers with appropriate support contracts can configure **[Proactive Support]({{< relref "AddLicenseProactiveSupport.md" >}})** after they apply their system license, and after acknowledging and signing the End User License Agreement (EULA).

The **Support** widget on the **System Settings > General** screen displays the **Proactive Support** option after entering your system license.
{{< /enterprise >}}

## Setting Up Networking

{{< include file="/static/includes/DHCPCreatedNetwork.md" >}}

{{< include file="/static/includes/UsingConsoleSetupMenuSCALE.md" >}}

If you are unfamiliar with network services, devices, or configurations, you can find more information [here]({{< relref "/SCALE/SCALETutorials/Network/_index.md" >}}) to help guide you through this important and required configuration area.
{{< enterprise >}}
You must disable failover in the UI on SCALE Enterprise HA systems to [add or change any network setting]({{< relref "InstallEnterpriseHASCALE.md#configure-network-settings" >}}). Complete network changes and test them, then re-enable failover.
{{< /enterprise >}}

### Adding Network Interfaces

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

If your system has more than one network interface card (NIC) connected to your internal network (wired to your router or Internet access point), you can add an interface in SCALE.
DHCP is available for only a single interface; any other physical interfaces must be configured with static IP addresses.

You can also configure virtual network interfaces such as a [bridge]({{< relref "SettingUpBridge.md" >}}), link aggregate (LAGG), or virtual LAN (VLAN) interface.

You can use either the Console Setup menu or SCALE UI to configure network interfaces.
We recommend using the web UI the **Network** screen to [add or change network interfaces or aliases]({{< relref "ManagingInterfaces.md" >}}), set up link aggregate [LAGG]({{< relref "SettingUpLAGG.md" >}}) or virtual LAN [VLAN]({{< relref "SettingUpVLAN.md" >}}) interfaces, change or [configure global network settings]({{< relref "ManagingGlobalConfig.md" >}}), or set up [static IP addresses]({{< relref "SettingUpStaticIPs.md" >}}).

### Adding Aliases or Static IP Addresses
Static IP addresses and aliases provide support for various network applications.
{{< enterprise >}}
SCALE Enterprise HA systems use a virtual IP (VIP) to maintain access to the UI if the system fails over to the standby controller.
This VIP address might experience a minor blip at failover, but you do not need to log in with the standby controller IP address to gain access to the UI after a failover.
{{< /enterprise >}}
You can configure a network interface with a static IP or add an alias IP address on the same screen in the SCALE UI.
For more information on when to use an alias or a static IP address, see [Managing Interfaces]({{< relref "ManagingInterfaces.md" >}}).

## Setting Up Storage
TrueNAS SCALE requires at least one storage pool.
We recommend creating the required pool and then planning the rest of your storage needs before moving on to adding sharing, container applications, virtual machines, or you begin storing data.
When planning your data storage, consider the type of data sharing you want to do, any container applications you might want to deploy, and how you want to organize stored data.

The storage creation process begins with creating a pool and then adding datasets or zvols as needed.
Creating your initial storage is [explained here]({{< relref "SetUpStorageScale.md" >}}).

### Setting the System Dataset
SCALE assigns the root parent dataset of the first created pool as the system dataset.
If your system has enough disks to add more pools, you can [change the system dataset]({{< relref "/SCALE/SCALETutorials/SystemSettings/Advanced/_index.md" >}}) to a root dataset of different pool.

## Setting Up Shares
After setting up your system storage, you can [configure data sharing]({{< relref "SetUpSharing.md" >}}) using one of the sharing protocols available in SCALE.

These articles provide more information on configuring data sharing and the three built-in share types available in SCALE:
{{< truetable >}}
| Share Type | Purpose |
|-----------|-------------|
| [SMB shares]({{< relref "/SCALE/SCALETutorials/Shares/SMB/_index.md" >}}) | Used for Windows shares and also to set up deprecated AFP sharing. |
| [NFS shares]({{< relref "AddingNFSShares.md" >}}) | Used for Linux-based shares. |
| [iSCSI shares]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}) | Used for block shares. |
{{< /truetable >}}

## Configuring System Services
Configure and enable the services you need based on what you deploy on your SCALE system.
{{< enterprise >}}
Enterprise or SCALE systems with large numbers of disks should enable SMART service and configure SMART testing.
SCALE Enterprise HA systems should enable and configure the failover service.
{{< /enterprise >}}
{{< expand "Configuring Services" "v" >}}
Configure and enable these services based on your SCALE system needs:

* [SSH service]({{< relref "SSHServiceSCALE.md" >}})

  Set this service to allow SSH login for administration users (admin or, if also enabled, the root user) on all SCALE systems.
  All SCALE systems that need SSH access should enable SSH service as part of the initial UI configuration, but this is an area of security vulnerability.
  For security hardening, do not enable SSH and leave it activated at all times.
  Turn on the service when SSH access is needed and then turn it back off until it is needed again.

* SMART service and SMART tests

  SMART service and tests are important for systems with large numbers of disks.
  Managing systems with large numbers of disks can present challenges when determining the disk with issues if SMART service and testing is not set up.

* Failover service on SCALE Enterprise High Availability (HA) systems

  The failover service enables an HA system to fail over to the standby system controller after a disruption to the primary controller.
  This service is not included on non-Enterprise and non-HA systems.

  Enterprise customers should not make changes to failover settings or the service on their own except when disabling failover to make changes to network settings.
  Contact iXsystems Support for assistance before making any changes to other failover settings.

When you add data sharing, the system prompts you to enable the appropriate sharing service as part of the configuration and set up process.

If your installation includes a UPS, configure and enable the UPS service.
{{< /expand >}}

### Setting Up SMART Testing
All systems can take advantage of the SMART service and testing with compatible attached disks.
Disks that do not support SMART testing do not display the option to set up testing.

See [Managing SMART Tests]({{< relref "SmartTestsScale.md" >}}) for information on running or managing scheduled SMART tests or [Managing Disks]({{< relref "/SCALE/SCALETutorials/Storage/Disks/_index.md" >}}) for more information on running a manual test from a selected disk.

## Setting Up Backup Solutions
After completing your initial system configuration and before you begin day-to-day operations, we recommend configuring the system and data storage backup. Recommended backup options:

1. Saving the [system configuration file]({{< relref "SetUpBackupSCALE.md" >}}).
2. Saving or [creating a new boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point if system issues cause you to lose access to the SCALE UI.
3. Downloading a system debug to capture system information to use as a comparison against future debug files.
  To download a system debug file, go to **System Settings > Advanced** and click **Save Debug** to begin the download.

Keep both the system configuration file and the initial system debug file in a safe location where important files are regularly backed up.
You can use the boot environment in an SSH session to restore your system to the point where you completed your system configuration, and then import data or pools to recover stored data.

{{< enterprise >}}
For Enterprise customers with High Availability (HA) systems, the HA restore process requires recovering both controllers.
Contact iXsystems Support for assistance before attempting to recover your system.
If you choose to restore access to controller 1 and the SCALE UI, contact iXsystems Support to get assistance with properly recovering your second controller.

Enterprise HA customers should not start issuing CLI commands to recover the system!

Contact iXsystems Support after you restore access to controller 1 to request further assistance and before taking actions that can disrupt or damage system access further and result in requiring a complete reinstall to recover.

{{< expand "Contact iXsystems Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

### Data Storage Backup Solutions
After saving system configuration and debug files, we recommend setting up data storage backups using any or all of the following methods:

* Taking regular snapshots or creating periodic snapshot tasks
* Setting up replication to another system (remote replication)
* Adding a cloud storage provider service and setting up a cloud sync task

You can take single [snapshots]({{< relref "CreatingSnapshots.md" >}}) or [schedule periodic snapshot tasks]({{< relref "PeriodicSnapshotTasksSCALE.md" >}}) to capture changes to stored data without the storage overhead that comes with backing up through data replication, or you can use one of the [replication options]({{< relref "/SCALE/SCALETutorials/DataProtection/Replication/_index.md" >}}) SCALE provides.

Another option is to create an account with a cloud storage service provider, then let SCALE manage the backups.
Use the **Backup Credentials** screen [**Cloud Credentials**]({{< relref "AddCloudCredentials.md" >}}) to add authentication credentials for a supported cloud service provider, and go to **Data Protection** to schedule a [**Cloud Sync Tasks**]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSynctasks/_index.md" >}}) that regularly backs up your storage data to the cloud.

## Checking System Alert Settings and Services
You can view system alerts, configure an alert service, and enter an email account to receive alerts from SCALE through the **Alerts** icon found on the top toolbar.
{{< expand "Configuring Alerts" "v" >}}
The alert icon on the [top toolbar]({{< relref "/SCALE/SCALEUIReference/toptoolbar/_index.md" >}}) displays a red circle with a number in it if SCALE encounters a configuration error or exceeds a threshold that you set (such as a temperature or a usage level).
The number indicates how many new alerts have occurred.
Click on the alert icon to open the **[Alerts]({{< relref "/SCALE/SCALEUIReference/toptoolbar/alerts/_index.md" >}})** panel.

The **Alerts** panel includes the **Settings** (gear) icon that provides access to the alert settings screen where you configure alert types and thresholds, and a system email option that opens a configuration screen where you enter an address to receive messages for a system event triggered by an alert.

* Click **[Alert Settings]({{< relref "AlertSettingsScreen.md" >}})** to configure an alert service such as PagerDuty or customize alert settings such as type and threshold for triggering an alert.
* Click **[Email]({{< relref "SettingUpSystemEmail.md" >}})** to assign an email address to receive system alert notifications.

{{< enterprise >}}
The **Alert Settings** screen includes access to the Enterprise HA setting options that customize HA-related event thresholds that produce alerts or send emails.
{{< /enterprise >}}
{{< /expand >}}

## Setting Up Directory Services
TrueNAS SCALE allows you to configuring an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings.
SCALE allows configuring either directory server but not both.

{{< hint type=warning >}}
We do not recommended that you switch between directory services. This can result in configuration issues that could disrupt your system!

However, it is possible to change from either directory service to the other.
If you want to migrate from LDAP to Active Directory, you must disable LDAP in SCALE and then remove the current directory server settings.
To change from Active Directory to LDAP, use the **Leave Domain** option and then disable the service before attempting to configure and enable LDAP.
{{< /hint >}}

{{< enterprise >}}
iXsystems Support can assist Enterprise customers with configuring directory service settings in SCALE with the [information customers provide]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}), but they cannot configure customer Active Directory system settings.
{{< /enterprise >}}

Non-Enterprise users can find support for configuring directory services in the TrueNAS Documentation Hub tutorials or in the community forums.

## Using Enclosure Management
{{< enterprise >}}
For TrueNAS Enterprise customers with compatible hardware, the TrueNAS SCALE main **Dashboard** displays an image of the TrueNAS system server on the **System Information** widget.
Click on the image to open the **[View Enclosure]({{< relref "EnclosureScreensSCALE" >}})** screen, or select the **System Settings > Enclosure** option on the main menu navigation panel.

The **View Enclosure** screen provides details on the system disks, the pools and VDEVs disks are in, the hardware details, and the disk status.
Click on a drive to view the disk details.
If the TrueNAS system has an expansion shelf, the **Enclosure** screen also displays an image of the expansion shelf populated with disks.
{{< /enterprise >}}

If using SCALE on servers not provided by TrueNAS, the **System Information** widget on the **Dashboard** displays the TrueNAS SCALE logo and the **System Settings > Enclosure** option does not exist on the menu navigation panel.

## Using Applications in SCALE
SCALE provides a list of applications you can deploy on the **Apps > Discover** screen.

See the [Apps tutorials]({{< relref "/SCALE/SCALETutorials/apps/_index.md" >}}) for procedures on generically deploying and managing apps, app catalogs and images, custom apps, and specific app deployments and notes.

## Updating SCALE
You can update your system with an <file>iso</file> file using the system administration console or an update file installed through the SCALE UI.

There are a few ways to find available updates for your instance of TrueNAS SCALE:

* The main **Dashboard > System Information** widget alerts you when a SCALE update is available to download and install.
  Click the update option to open the **System Settings > Updates** screen.
* Go to **System Settings > Updates** to check if an update is available.

For all update options and procedures using the SCALE UI see **[Updating SCALE]({{< relref "UpdateSCALE.md" >}})**.

Always save the system configuration file and save a new boot environment for your current release and configuration before updating to a new incremental or full release.

It is also good practice to download a fresh debug file before and after a system update.