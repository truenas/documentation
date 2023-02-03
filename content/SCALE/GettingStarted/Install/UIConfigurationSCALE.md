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


## Applying TrueNAS Licenses (Enterprise Customers Only)

TrueNAS SCALE Enterprise customers should contact iXsystems support to obtain license information for their TrueNAS system. To apply the license information, go to the **System Settings > General** screen and use the **[Update License]({{< relref "GetSupportSCALE.md" >}})** option on the **Support** widget (system information card).

### Setting up Proactive Support

TrueNAS SCALE Enterprise customers with Silver or Gold Coverage support contracts have the option to configure **[Proactive Support]({{< relref "GetSupportSCALE.md" >}})** after they apply their system license, and after acknowledging and signing the End User License Agreement (EULA).

The **Support** widget on the **System Settings > General** screen displays the **Proactive Support** option after you enter your system license.

## Setting Up Additional Networking

After installing the SCALE <file>iso</file>, the installer displays the IP address for the web UI at the end of the installation process. 
TrueNAS uses DHCP to assign the primary web UI IP address and the other required global network addresses. 
With this IP address you can access the web UI to complete any other network or other system configuration you want or need, or you can use the 
Console setup menu to assign network addresses to network inferfaces or other global network devices [described here]({{< relref "ConsoleSetupMenuSCALE.md" >}}) 

If you make network changes, we recommend using the Web UI to configure your network interfaces as it is designed to make this process easier, and it provides safeguards so you do not break your system network connections. 

### Adding Interfaces

You have the option to [use the Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) to add and activate other network interfaces or you can use the SCALE web UI. Other network interfaces include bridge, LAGG, or VLAN interfaces that you might want to use or need for your network setup. 

We recommend using the web UI to [add or change network interfaces]({{< relref "ManagingInterfaces.md" >}}), set up link aggregate [LAGG]({{< relref "SettingUpLAGG.md" >}}) or virtual LAN [VLAN]({{< relref "SettingUpVLAN.md" >}}) interfaces, change or [configure global network settings]({{< relref "ManagingGlobalConfig.md" >}}), or set up [static IP or alais IP addresses]({{< relref "SettingUpStaticIPs.md" >}}) on the **Network** screen.

### Adding Aliases or Static IP Addresses
Static IP addresses and aliases provide different support for various network applications. 
You configure both static and alias IP addresses on the same screen in the SCALE UI.

For more information on when to use an alias or a static IP address, see [Setting Up Static IPs]({{< relref "SettingUpStaticIPs.md" >}}).

## Setting Up Storage

You must create at least on storage pool [explained here]]({{< relref "SetUpStorageScale.md" >}}) on your system. 
You can configure a pool as a mirror VDEV (virtual device) of either two disks, or as a RAIDZ1 with three disks, RAIDZ2 with four disks, or RAIDZ3 with at least five disks. 

After adding your first pool, the root or parent dataset is automatically created. Select this root parent dataset to create additional datasets.
You can create as many datasets as you want on your pool and to suit your use case. 

The storage creation process begins with [creating a pool]({{< relref "CreatePoolSCALE.md" >}}) and then [adding the datasets]({{< relref "DatasetsSCALE.md" >}}).

You can also [create virtual storage volumes (zvols)](({{< relref "AddManageZvols.md" >}})) for any virtual machine (VM) applications you plan to use.

### Setting the System Dataset

SCALE assigns the root dataset of the first pool created as the system dataset.  
If your system is equipped with enough disks to add more pools, you can [change the system dataset]({{< relref "AdvancedSettings.md" >}}) to a different root dataset for a another pool.

## Setting Up Shares
After setting up your system storage, you can [configure data sharing]({{< relref "SetUpSharing.md" >}}) using one of the sharing protocols available in SCALE.

For more information on configuring data sharing and the four share types available in SCALE:

* [SMB shares]({{< relref "/SCALE/SCALETutorials/Shares/SMB/_index.md" >}}) used for Windows shares and also to set up deprecated AFP sharing
* [NFS shares]({{< relref "/SCALE/SCALETutorials/Shares/NFS/_index.md" >}}) used for Linux-based shares
* [iSCSI shares]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}) used for block shares
* [WebDAV shares]({{< relref "/SCALE/SCALETutorials/Shares/WebDAV/_index.md" >}})

## Configuring System Services
Services you want to configure and enable are based on those you want to deploy except for these three:

* [SSH service]({{< relref "SSHServiceSCALE.md" >}})

  Set up this service to allow SSH login for administration users (admin, or if also enabled, the root user). Configure this on all SCALE systems.

* SMART service and set up SMART tests

  SMART service and tests are important for systems with large numbers of disks and to help manage the disks. 
  Managing systems with large numbers of disks can present challenges determining the disk that is having issues if SMART service and testing is not set up.

* Failover service on SCALE Enterprise High Availability (HA) systems

  The failover service enables the primary system controller to fail over to the standby controller if service to the primary is disrupted. 
  This service is not included on non-Enterprise and non-HA systems.

If you add data sharing, the system prompts you to enable the appropriate sharing service as part of the configuration and set up process.

If your installation includes a UPS, configure and enable the UPS service as well.

### Setting up SMART Testing

All systems can take advantage of the SMART service and testing if your disks support this service. 
Disks that do not support SMART testing do not display the option to set up testing.

For more information see [Managing SMART Tests]({{< relref "SmartTestsScale.md" >}}) for information on running or managing tests, or [Managing Disks]({{< relref "ManagingDisks.md" >}}) for more information on running a manual test from a selected disk.

## Setting Up Backup Solutions

After completing your initial system configuration, we recommend you save the system configuration file [described here]]({{< relref "SetUpBackupSCALE.md" >}}) and download a system debug before you begin using SCALE for day to day operations. 
After saving both configuration files, we recommend you set up a cloud storage provider service to back up your storage data. 
TrueNAS SCALE provides several cloud storage provider options for storage data. 

Download a system debug file from the **System Settings > Advanced** screen. Click **Save Debug** to begin the download. 
Keep both the system configuration file and the initial system debug file in a safe location where save regularly backed up important files.

Use the SCALE **Backup Credentials** screen **[Cloud Credentials]({{< relref "AddCloudCredentials.md" >}}**) to configure authentication credentials for the cloud service of your choice and then schedule a **[Cloud Sync Tasks]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSynctasks/_index.md" >}})** to run on the schedule you set and to regularly back up your storage data.

## Checking System Alert Settings and Services

The alert icon, on the [top toolbar]({{< relref "/SCALE/SCALEUIReference/toptoolbar/_index.md" >}}), displays a red circle with a number in it if SCALE encounters a configuration error or exceeds a threshold (such as a temperature or a usage level). 
The **[Alerts]({{< relref "/SCALE/SCALEUIReference/toptoolbar/alerts/_index.md" >}})** icon number indicates how many new alerts have occurred. Click on the alert icon to open the **Alerts** dropdown panel. 

SCALE allows you to configure both alert services and alert settings, and to assign a system email account to receive messages when a system event triggers an alert. 
Click the gear **Settings** icon the top of the **Alerts** dropdown panel to display a list of configurable alert options.

Click **[Alert Services]({{< relref "AlertServicesScreen.md" >}})** to configure an alert service such as PagerDuty. 
Click **[Alert Settings]({{< relref "AlertSettingsScreen.md" >}})** to customize alert settings that determine the threshold for trigging an alert. 
Click **[Email]({{< relref "SettingUpSystemEmail.md" >}})** to assign an email address that receives the system alert notification based on the levels and type of alert you configure.

## Setting Up Directory Services
TrueNAS SCALE allows you to configure an Active Directory or LDAP server to handle user account provisioning. You also have the option to configure system users using the **[Local Users]({{< relref "ManageLocalUsersScale.md" >}})**.

## Using Enclosure Management (TrueNAS Servers Only)
An image of the TrueNAS system server displays on the main **Dashboard > System Information** widget. 
Click **View Enclosure** on the **System Information** widget to access the **[View Enclosure]({{< relref "EnclosureScreensSCALE" >}})** screen , or select the **System Settings > Enclosure** option on the main menu navigation panel.. 
The **View Enclosure** screen lists details about the system hardware and disks in the system, including the bay the drives is in. 
If the TrueNAS system is equipped with an expansion shelf, an image of the expansion shelf with the disks populated in it also displays.

If using SCALE on servers not provided by TrueNAS, the main **Dashboard > System Information** widget displays the TrueNAS SCALE logo, and the **System Settings > Enclosure** option does not exist on the menu navigation panel.

## Using Applications in SCALE
SCALE provides a list of applications you can deploy on the **Apps > Available Applications** screen. 
SCALE Enterprise only offers MinIO as an available application.

You can deploy an application using the **Custom Install** option.

## Updating SCALE
There are a few ways to update your instance of TrueNAS SCALE. The main **Dashboard > System Information** widget alerts you when a SCALE update is available to download and install. 
You can also go to **System Settings > Updates** to see if an update is available. For all update options and procedures see **[Updating SCALE]({{< relref "UpdateSCALE.md" >}}).

## Getting Support
Enterprise SCALE customers with support contracts should contact the iXsystems Support using the **[Commercial Support](https://www.truenas.com/commercial-support/)** option on the top header of the TrueNAS Documentation Hub website. 

Regular SCALE customers experiencing issues should [file an issue ticket](https://www.truenas.com/docs/contributing/issuereporting/) through the Jira ticket reporting system for TrueNAS. 
Support is also available through the TrueNAS Community Forums, blog, and Discord. These options are accessible on the top header of the TrueNAS Documentation Hub website.

When reporting an issue, include a system debug file, downloaded following the issue occurrence. This captures the system logs iXsystems needs to help resolve your issues.