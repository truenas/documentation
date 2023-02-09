---
title: "Configuring SCALE Using the UI"
description: "This article provides a sequential process to complete the SCALE installation and configuration using the SCALE UI."
weight: 30
aliases:
tags:
- scaleinstall
- scalemigrate
---


{{< toc >}}


iXsystems TrueNAS Enterprise customers should contact iXsystems Support when their systems arrive to receive additional guidance on their next steps.

All other TrueNAS SCALE users can follow these instructions to complete their system set up and configuration.

Use the information mentioned in the [Installation Instructions]({{< relref "/Content/SCALE/GettingStarted/Install/_index.md" >}}) overview article to configure your network, SMTP, or directory service settings.

SCALE Bluefin has implemented rootless login and disabled the root user password as a security-hardening measure. 
After a fresh install from an <kbd>iso</kbd> file, administrators log in with the admin account created during install and no longer log in as the root user. 
After you log into SCALE with the administrator account you can begin to configure SCALE in the UI.
For Enterprise customers, iXsystem Support guides you through this process and your first log in.

## Applying TrueNAS Licenses (Enterprise Customers Only)

TrueNAS SCALE Enterprise customers should contact iXsystems support to obtain license information for their TrueNAS system. 
To apply the license information, go to the **System Settings > General** screen and use the **[Update License]({{< relref "GetSupportSCALE.md" >}})** option on the **Support** widget (system information card).

### Setting up Proactive Support (Enterprise Customers Only)

TrueNAS SCALE Enterprise customers with Silver or Gold Coverage support contracts have the option to configure proactive support.
{{< expand "Configuring Proactive Support" "v" >}}
Customers with appropriate support contracts can configure **[Proactive Support]({{< relref "GetSupportSCALE.md" >}})** after they apply their system license, and after acknowledging and signing the End User License Agreement (EULA).

The **Support** widget on the **System Settings > General** screen displays the **Proactive Support** option after you enter your system license.
{{< / expand >}}

## Setting Up Networking

After installing the SCALE <kbd>iso</kbd> file, the SCALE installer provides the DHCP-assigned IP address for the web UI at the end of the installation process. 
TrueNAS uses DHCP to assign the primary web UI IP address and provision the other required global network addresses. 
If you have more than one network interface card installed and connected to your network you need to assign an IP address and configure it in SCALE
{{< expand "Configuring Network Settings" "v" >}}
With the DHCP-assigned IP address, displayed at the top of the Console setup menu screen, you can access the web UI to complete any other network or other system configuration you want or need to configure.
Users or administrators experienced with the Console setup menu can use it to assign network addresses to network interfaces and configure other global network devices [described here]({{< relref "ConsoleSetupMenuSCALE.md" >}}). 
If you are not familiar or experienced with using the Console setup menu, we recommend using the Web UI to [configure your network interfaces]({{< relref "ManagingInterfaces.md" >}}) and other network configuration settings as it is designed to make this process easier and it provides safeguards so you do not break your system network connections. 

If you are unfamiliar with network services, devices, configurations, you can find more information [here]({{< relref "/SCALE/SCALETutorials/Network/_index.md" >}}) to help guide you through this important and required configuration area.
{{< /expand >}}

### Adding Network Interfaces

If your system includes more than one network interface card (NIC) installed and connected to your internal network (wired connecting it to your router or Internet access point), you can add an interface in SCALE. 
You can only use DHCP to provide the IP address to one interface which is the primary interface.
{{< expand "Adding an Interface" "v" >}}
You can also configure virtual network interfaces such as a [bridge]({{< relref "SettingUpBridge.md" >}}), link aggregate (LAGG), or virtual LAN (VLAN) interface. 

You can use either the Console setup menu or SCALE UI to configure network interfaces. 
We recommend using the web UI to [add or change network interfaces or aliases]({{< relref "ManagingInterfaces.md" >}}), set up link aggregate [LAGG]({{< relref "SettingUpLAGG.md" >}}) or virtual LAN [VLAN]({{< relref "SettingUpVLAN.md" >}}) interfaces, change or [configure global network settings]({{< relref "ManagingGlobalConfig.md" >}}), or set up [static IP addresses]({{< relref "SettingUpStaticIPs.md" >}}) on the **Network** screen.
{{< /expand >}}

### Adding Aliases or Static IP Addresses
Static IP addresses and aliases provide different support for various network applications. 
You configure a network interface as either static or add alias IP addresses on the same screen in the SCALE UI. 
For more information on when to use an alias or a static IP address, see [Managing Interfaces]({{< relref "ManagingInterfaces.md" >}}).

## Setting Up Storage

TrueNAS SCALE requires at least one storage pool. We recommend creating the required pool and then planning the rest of your storage needs before you begin adding sharing, container applications, virtual machines, or storing data.
When planning your data storage, consider the type of data sharing you want to do, any container applications you might want to deploy, and how you want to organize stored data. 

The storage creation process begins with creating a pool and then adding the datasets as needed. 
You must create at least on storage pool [explained here]]({{< relref "SetUpStorageScale.md" >}}) on your system. 

After adding your first pool, the root parent dataset is automatically created. 
Select this root parent dataset to when you create your first dataset.
You can create as many datasets as you want or need on your pool and to suit your use case. 
You can also create virtual storage volumes (zvols) for any virtual machine (VM) you plan to use on SCALE.

### Setting the System Dataset

SCALE assigns the root parent dataset of the first pool create as the system dataset.  
If your system is equipped with enough disks to add more pools, you can [change the system dataset]({{< relref "AdvancedSettings.md" >}}) to a different root parent dataset for a another pool.

## Setting Up Shares
After setting up your system storage, you can [configure data sharing]({{< relref "SetUpSharing.md" >}}) using one of the sharing protocols available in SCALE.

For more information on configuring data sharing and the four share types available in SCALE:

* [SMB shares]({{< relref "/SCALE/SCALETutorials/Shares/SMB/_index.md" >}}) used for Windows shares and also to set up deprecated AFP sharing
* [NFS shares]({{< relref "/SCALE/SCALETutorials/Shares/NFS/_index.md" >}}) used for Linux-based shares
* [iSCSI shares]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}) used for block shares
* [WebDAV shares]({{< relref "/SCALE/SCALETutorials/Shares/WebDAV/_index.md" >}})

## Configuring System Services
Services you want to configure and enable are based on those you want to deploy on your SCALE system.
All SCALE systems should enable SSH service as part of the initial UI configuration.
Enterprise or SCALE systems with large numbers of disks should also enable SMART service and configure SMART testing. 
SCALE Enterprise HA systems should enable and configure the failover service.
{{< expand "Configuring Services" "v" >}}
Configure and enable these three services based on your SCALE system:

* [SSH service]({{< relref "SSHServiceSCALE.md" >}})

  Set this service to allow SSH login for administration users (admin or, if also enabled, the root user) on all SCALE systems.

* SMART service and SMART tests

  SMART service and tests are important for systems with large numbers of disks. 
  Managing systems with large numbers of disks can present challenges when determining the disk with issues if SMART service and testing is not set up.

* Failover service on SCALE Enterprise High Availability (HA) systems

  The failover service enables HA systems to fail over the primary system controller to the standby controller if service to the primary is disrupted. 
  This service is not included on non-Enterprise and non-HA systems.

  Enterprise customers should not make chages to failover settings or the service on their own. Contact iXsystems Support for assistance before making any change to failover settings.

When you add data sharing the system prompts you to enable the appropriate sharing service as part of the configuration and set up process.

If your installation includes a UPS, configure and enable the UPS service as well.
{{< /expand >}}
### Setting up SMART Testing

All systems can take advantage of the SMART service and testing if your disks support this service. 
Disks that do not support SMART testing do not display the option to set up testing.

See [Managing SMART Tests]({{< relref "SmartTestsScale.md" >}}) for information on running or managing scheduled SMART tests, or [Managing Disks]({{< relref "ManagingDisks.md" >}}) for more information on running a manual test from a selected disk.

## Setting Up Backup Solutions

After completing your initial system configuration, we recommend you save the system configuration file [described here]]({{< relref "SetUpBackupSCALE.md" >}}) and download a system debug before you begin using SCALE for day to day operations. 
Download a system debug file from the **System Settings > Advanced** screen. Click **Save Debug** to begin the download. 
Keep both the system configuration file and the initial system debug file in a safe location where save regularly backed up important files.

After saving both files, we recommend you set up snapshots, replication, or a cloud storage provider service and cloud sync task to back up your storage data. 
{{< expand "Backup Solutions" "v" >}}

TrueNAS SCALE provides options to back up your stored data:
* Snapshots and periodic snapshot tasks
* Replication to another system
* Cloud storage provider options and cloud sycn tasks 

You can take regular [snapshots]({{< relref "CreatingSnapshots.md" >}}) or [schedule snapshot tasks]({{< relref "PeriodicSnapshotTasksSCALE.md" >}} to capture changes to stored data without the storage overhead that comes with backing up through data replication, or you can use one of the [replication options]({{< relref "/SCALE/SCALETutorials/DataProtection/Replication/_index.md" >}}) SCALE provides. 

Another data storage backup option is to create a cloud storage service account and then use the SCALE to manage the backup. 
Use the **Backup Credentials** screen **[Cloud Credentials]({{< relref "AddCloudCredentials.md" >}})** to add authentication credentials for a supported cloud service and then schedule a **[Cloud Sync Tasks]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSynctasks/_index.md" >}})** to regularly back up your storage data to the cloud.
{{< /expand >}}
## Checking System Alert Settings and Services
Configure the alert service and settings you want to use, and then designate an email account to receive alerts from SCALE from the alert icon on the top toolbar.
{{< expand "Configuring Alerts" "v" >}}
The alert icon on the [top toolbar]({{< relref "/SCALE/SCALEUIReference/toptoolbar/_index.md" >}}) displays a red circle with a number in it if SCALE encounters a configuration error or exceeds a threshold (such as a temperature or a usage level) that you set. 
The **[Alerts]({{< relref "/SCALE/SCALEUIReference/toptoolbar/alerts/_index.md" >}})** icon number indicates how many new alerts have occurred. 
Click on the alert icon to open the **Alerts** dropdown panel. 

The **Alerts** dropdown panel also includes configuration access to alert services and alert settings, and a system email account to receive messages when a system event triggers an alert. 
Click the gear **Settings** icon the top of the **Alerts** dropdown panel to display a list of configurable alert options.

* Click **[Alert Services]({{< relref "AlertServicesScreen.md" >}})** to configure an alert service such as PagerDuty. 
* Click **[Alert Settings]({{< relref "AlertSettingsScreen.md" >}})** to customize alert settings that determine the threshold for trigging an alert. 
* Click **[Email]({{< relref "SettingUpSystemEmail.md" >}})** to assign an email address to receive the system alert notifications.
{{< /expand >}}

## Setting Up Directory Services
TrueNAS SCALE allows you to configure an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings. 

iXsystems Support can assist Enterprise customers with configuring directory service settings in SCALE with the [information customers provide]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}), but they do not configure customer Active Directory system settings. 
Non-Enterprise users can find support for configuring directory services in the TrueNAS Documentation Hub tutorials or in the community forums.

## Using Enclosure Management (Enterprise Only)
TrueNAS SCALE main **Dashboard** displays an image of the TrueNAS system server on the **System Information** widget. Click on the image to open the **[View Enclosure]({{< relref "EnclosureScreensSCALE" >}})** screen, or select the **System Settings > Enclosure** option on the main menu navigation panel. 

The **View Enclosure** screen provides details about the system disks, the pools and VDEVs they are in, the hardware, and the disk status. Click on a drive to view the disk details. 
If the TrueNAS system is equipped with an expansion shelf, an image of the expansion shelf with the disks populated in it also displays.

If using SCALE on servers not provided by TrueNAS, the main **System Information** widget on the main **Dashboard** displays the TrueNAS SCALE logo and the **System Settings > Enclosure** option does not exist on the menu navigation panel.

## Using Applications in SCALE
SCALE provides a list of applications you can deploy on the **Apps > Available Applications** screen. 
SCALE Enterprise only offers MinIO as an available application.

You can deploy an application using the **Custom Install** option.

## Updating SCALE
There are a few ways to update your instance of TrueNAS SCALE. The main **Dashboard > System Information** widget alerts you when a SCALE update is available to download and install. 
You can also go to **System Settings > Updates** to see if an update is available. For all update options and procedures see **[Updating SCALE]({{< relref "UpdateSCALE.md" >}}).

When updating to either a new incremental or full release, always save the system configuration file again. It is good practice to download a fresh debug file after a system update.

## Getting Support
Enterprise SCALE customers with support contracts should contact the iXsystems Support using the **[Commercial Support](https://www.truenas.com/commercial-support/)** option on the top header of the TrueNAS Documentation Hub website. 

Non-Enterprise SCALE customers experiencing issues should [file an issue ticket](https://www.truenas.com/docs/contributing/issuereporting/) through the Jira ticket reporting system for TrueNAS. 
When reporting an issue, include a system debug file, downloaded following the issue occurrence. This captures the system logs iXsystems needs to help resolve your issues.

Support is also available through the TrueNAS [Community Forums, blog, and Discord]){{< relref "/content/Contributing/IssueReporting/_index.md" >}}. These options are accessible on the top header of the TrueNAS Documentation Hub website.

{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}