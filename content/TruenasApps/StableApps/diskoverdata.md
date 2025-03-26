---
title: "Diskover Data"
description: "Provides instructions to configure TrueNAS and install Diskover Data ."
weight:
aliases:
 - /truenasapps/stableapps/diskoverdataapp/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
---

{{< github-content 
    path="trains/stable/diskoverdata/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

Diskover Data Community edition is an open-source file indexer with a file search engine and a data management and analytics component powered by Elasticsearch.
Diskover Data is a web-based platform that provides single-pane viewing (a dashboard) of distributed digital assets or repositories file systems spread across cloud and on-premise storage across an organization.
It has three main components: Elasticsearch, Diskover web interface, and Diskover Data indexers.
Elasicsearch is the backbone of Diskover indexing and search functionality. It organizes the metadata created during indexing and allows for fast and efficient querying of large datasets.
Diskover Data web interface allows users to interact with Diskover and to search, filter, and visualize data indexed by Elasticsearch.
The Diskover indexers are the task workers, scanners, and crawlers responsible for scanning file systems and collecting metadata to feed information into Elasticsearch for storage and later retrieval.

Diskover Data helps administrators and users identify old and unused files and have better insights into data changes, file duplication, and wasted space.
It supports crawling local file systems, NFS and SMB, cloud storage, and plugins that add metadata functions and greater search capabilities.

This TrueNAS Diskover Data communitity edition app provides effective search and file organization functions. System administrators can manage storage infrastructure, monitor storage and usage reports, use the information to provision storage, and make effective decisions about new infrastructure purchases.
The app provides storage for Diskover Data and the Elasticsearch component. Read Diskover Data documentation to become familiar with the functions and configuration options in the Diskover Data web interface.



## Before You Begin

Before you install the Diskover Data app:

* Read the [Diskover Support documentation](https://docs.diskoverdata.com/)
  For information on environment variables, see [Alternate Configuration Invocation Via Command Line](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#using-alternate-configuration-files).
  Also, read Diskover documentation on [tags](https://docs.diskoverdata.com/diskover_setup_and_config_guide/#tagging-methods) if you plan to add [labels](#labels-configuration) through the **Install Diskover Data** wizard.
  
{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/DiskoverAppDetailsScreen.png" alt="Diskover Data App Details Screen" id="Diskover Data App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}
<div style="margin-left: 33px">The Diskover Data has two run-as user IDs, <b>0</b> for Diskover and <b>1000</b> for the Elasticsearch component.
The Diskover Data app also has the default user ID <b>568</b> for the user <b>apps</b>.
If you create a new TrueNAS user to serve as the administrator for the app, take note of the user ID to add it to the ACL permissions for each dataset created for and used by the app.</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
Diskover Data expects three host path dataset storage volumes, <b>config</b>, <b>data</b>, and <b>data</b> for the Elasticsearch component storage volume.
You can create more datasets if you want to add additional storage volumes for the app to use, but these are not required and can be added after installing the app.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

## Installing the Application

{{< hint info >}}
This basic procedure covers the required Diskover Data app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallDiskoverScreen.png" alt="Install Diskover Data Screen" id="Install Diskover Data Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the **Diskover Data Configuration** settings.
{{< include file="/static/includes/apps/InstallWizardTimezoneSettings.md" >}}

The TrueNAS app is configured with all the environment variables required to deploy the app.
If you want to customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Accept the default values in **User and Group Configuration** and **Network Configurations**.
(Optional) If you created a new user to administer the app, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.
Leave **Host Network** unselected.

Add your **Storage Configuration** settings.

For **Diskover Data Configuration Storage**, set the **Type** to **Host Path (Path that already exists on the system)**.
Select **Enable ACL**, then enter or browse to and select the **config** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallDiskoverStorageConfigACLandACESettings.png" alt="Add Diskover Data Config ACL and ACE Settings" id="Add Diskover Data Config ACL and ACE Settings" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For Diskover Data, click twice to add the **568** and **0** user IDs. For the Elasticsearch storage volume, add **568** and **1000**. Give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the steps above for each storage volume, **data** for Diskover Data data storage, and **data** for the Elasticsearch component data storage.
See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **Diskover Data** app in the **Deploying** state. Status changes to **Running** when ready to use.

{{\< trueimage src="/images/SCALE/Apps/DiskoverAppRunning.png" alt="Diskover Data App Installed and Running" id="Diskover Data App Installed and Running" >}}

Log in with your Diskover account credentials.

{{< trueimage src="/images/SCALE/Apps/DiskoverSignInScreen.png" alt="Diskover Data Sign-In Screen" id="Diskover Data Sign-In Screen" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Diskover Data** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Diskover Data Configuration Settings

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

#### Adding Environment Variables

The TrueNAS Diskover Data app is pre-configured with all environment variables required to deploy the application.

Diskover provides a list of environment variables you can add through their CLI to customize paths or tasks performed at runtime.
For more information on these variables, see [Alternate Configuration Invocation Via Command Line](https://docs.diskoverdata.com/diskover_configuration_and_administration_guide/#using-alternate-configuration-files).

{{< include file="/static/includes/apps/InstallWizardEnvironmentVariableSettings.md" >}}

### User and Group Configuration Settings

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration Settings

The default web port for the TrueNAS Diskover Data app is **30027**.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

### Storage Configuration Settings

TrueNAS provides two options for storage volumes: ixVolumes and host paths.
Diskover Data only expects one host path storage volume, **config** to hold app configuration data, **data** for data storage, and a second **data** dataset for Elasticsearch data.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

If you organize the **config** dataset under a parent dataset named *diskoverdata*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the **root** user and the Elasticsearch root **1000**.

You can add extra storage volumes during the app installation or edit the application after it deploys. Stop the app before editing settings.
{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for a dataset through the **Install Diskover Data** wizard or from the **Datasets** screen after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the Diskover Data run-as user **0** for **root**. You can also add the app default user **568** for **apps**.
Also, add the root user for the Elasticsearch root user, user ID **1000**, if permission errors display when trying to deploy the app.
Save the ACL before leaving the screen.
{{< /expand >}}

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallWizardStorageConfig2.md" >}}

#### Mounting an SMB Share Storage Volume

If adding an SMB share as an additional storage volume, create the SMB dataset and share user(s), and add the user ID for the share user(s) to the dataset ACL.
{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallDiskOverResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}