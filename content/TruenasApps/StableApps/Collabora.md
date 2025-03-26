---
title: "Collabora"
description: "Provides basic configuration instructions for adding the Collabora app using the TrueNAS webUI."
weight:
aliases:
 - /scale/scaleuireference/apps/collabora/
 - /scale/scaletutorials/apps/collabora/
 - /scale/scaletutorials/apps/chartapps/collabora/
 - /scale/scaletutorials/apps/stableapps/collabora/
 - /truenasapps/communityapps/collabora/
tags:
 - apps
 - cloud
keywords:
- nas data storage
- software storage solutions
---

{{< github-content 
    path="trains/stable/collabora/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

The TrueNAS Collabora app offers an efficient solution for deploying and managing a powerful online office suite. TrueNAS installs the Collabora app in a Docker container using Docker Compose. Once deployed, you can access the Collabora Online interface through TrueNAS, enabling seamless document editing and collaboration. Collabora supports popular file formats like DOCX, XLSX, and PPTX, ensuring compatibility with Microsoft Office documents. With real-time collaboration, robust editing tools, and integration with platforms like Nextcloud, the Collabora app provides a reliable and feature-rich environment for your productivity needs.

Collabora provides a [Quickstart Setup Guide](https://collabora-online-for-nextcloud.readthedocs.io/en/latest/install/) with step-by-step instructions to help users get started.

## Before You Begin

Prepare TrueNAS before installing Collabora by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

  <p style="margin-left: 33px">Create a parent dataset, such as <i>Collabora</i>, within your apps pool. Collabora is designed to store data internally within the containerized environment and therefore does not require any additional datasets. If you wish to create optional storage for persistent data on TrueNAS, you must create those datasets before you install the app. If you create any elective datasets, select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them to the app.</p>

<p style="margin-left: 33px">Follow the instructions below in <b>Creating Datasets for Apps</b> to correctly set up these datasets.

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

## Installing the Application

{{< hint info >}}
This basic procedure covers the required *Collabora* app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

Go to **Apps**, click on **Discover Apps**, and locate the app widget by either scrolling down to it or typing the name into the search field.
For example, to locate the Collabora app widget, begin typing *Collabora* into the search field to show app widgets matching the search input.

{{< trueimage src="/images/SCALE/Apps/DiscoverScreenCollabora.png" alt="Example of Locating an App Widget" id="Example of Locating an App Widget" >}}

If this is the first application you are installing, TrueNAS displays a dialog about configuring apps.

{{< expand "Configuring Apps Dialog" "v" >}}
{{< trueimage src="/images/SCALE/Apps/AppsInformationDialog.png" alt="Apps Information Dialog" id="Apps Information Dialog" >}}

Click **Confirm** then **Agree** to close the dialog and open the application details screen.

{{< /expand >}}
If not the first time installing apps the dialog does not show, click on the widget to open the app information screen.

{{< trueimage src="/images/SCALE/Apps/CollaboraInformationScreen.png" alt="Collabora Information Screen" id="Collabora Information Screen" >}}

Click **Install** to open the app installation wizard.

Application configuration settings are grouped into sections. Each section is explained below in **Understanding App Installation Wizard Settings**.
To find specific fields begin typing in the **Search Input Fields** search field to show the section or field, scroll down to a particular section, or click on the section heading in the list of sections on the upper-right of the wizard screen.

{{< trueimage src="/images/SCALE/Apps/InstallCollaboraScreen.png" alt="Collabora Install Screen" id="Collabora Install Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the ***Collabora* Configuration** settings.

Note that the username and password you select during configuration are used to sign in to the Collabora dashboard.

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Add your **Storage Configuration** settings.

{{< trueimage src="/images/SCALE/Apps/CollaboraInstallStorage.png" alt="Storage Configuration" id="Storage Configuration" >}}

For example, if you create an optional dataset named ***data-storage***, set **Host Path (Path that already exists on the system)** in **Type**.
Select **Enable ACL**, then enter or browse to select the ***data-storage*** dataset to populate the **Host Path** field.

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For example, add the **568** user and **0**, and give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the storage steps above each additional storage volume. See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **Collabora** app in the **Deploying** state. Status changes to **Running** when ready to use.

Click **Web UI** on the **Application Info** widget to open the *Collabora* web portal sign-in screen.

{{< trueimage src="/images/SCALE/Apps/CollaboraSignInScreen.png" alt="Collabora Sign In Screen" id="Collabora Sign In Screen" >}}

{{< trueimage src="/images/SCALE/Apps/CollaboraDashboard.png" alt="Collabora Dashboard" id="Collabora Dashboard" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install *Collabora*** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Collabora Configuration Settings

*Collabora* configuration settings include setting up credentials, *APT packages* (previously referred to as the commands), the *host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule*, and *adding additional environment variables*.

The **Collabora Configuration** section contains a **Database Password** field. This is where you set the password Collabora uses to securely connect to your TrueNAS system. This is *not* the field where you enter your current Collabora password or the password you intend to use to log into the app.

Upon deployment, users can set the desired Collabora login credentials or log in to an existing account from the Collabora UI.

Users can select the **Add Devices** drop-down menu to configure device settings for any Collabora-compatible devices they currently own. Users do not have to own devices before installing the app and can leave this section blank if not applicable.

{{< trueimage src="/images/SCALE/Apps/CollaboraInstallDictionaries.png" alt="Collabora Dictionaries" id="Collabora Dictionaries" >}}

Collabora offers users the option to configure multiple dictionaries. The **Dictionaries** configuration specifies which spell-checking dictionaries are available in the Collabora UI, providing a valuable feature for multilingual environments. Users can accept the default configuration for **Dictionaries**, or add and remove unwanted default selections.

{{< trueimage src="/images/SCALE/Apps/CollaboraInstallExtraParameters.png" alt="Collabora Extra Parameters" id="Collabora Extra Parameters" >}}

You can utilize the **Extra Parameters** settings to further customize the behavior of the Collabora UI. These parameters are passed directly to Collabora as command-line arguments when the container is started. Users can accept the default parameters if no additional customization is desired.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [*Collabora* documentation](https://www.home-assistant.io/docs/configuration/yaml/) for more information on environment variables.

### User and Group Configuration

We recommend making a **user** and **group** for the Collabora app. If you follow the recommendation, give the user and group full access to the config-storage, media-storage, and data-storage datasets.

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

The default web port for *Collabora* is ***9980***.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}

{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

*Collabora* does not require users to create additional datasets for installation. We recommend creating a parent dataset for every installed application, but the Collabora app does not require this step unless users want to store persistent data on TrueNAS.

If you create datasets within TrueNAS for the Collabora app, set **Type** to **Host Path (Path that already exists on the system)**, and select your elective datasets in the **Host Path** field.

If you group these datasets under a parent dataset named *Collabora*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the ***Collabora*** user.
If the app includes postgres storage volumes, include the following information
If the app installation wizard cannot set up the ACL type or correctly add user permissions for the postgres storage volume,
you must configure these outside the install wizard using the **Add Dataset** and **Edit ACL** screens.
When adding the ***postgresdata*** dataset set it up with a POSIX ACL, and add the ***Collabora*** user as the owner user and group with full control permissions.

If you have a postgres dataset, also include information in the Before You Begin section about adding the dataset and permissions.

See the instructions in the [Before You Begin](#before-you-begin) section for more on creating both the parent and postgres_data datasets and configuring their ACL permissions.
You can add extra storage volumes during installation or edit the application after it deploys. Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Collabora** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, then scroll down to the **Permissions** widget and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For *Collabora*, the run-as users is **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include mounting an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallCollaboraResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}

### Integrating Collabora and Nextcloud

{{< include file="/static/includes/apps/CollaboraNextcloudConnection.md" >}}
