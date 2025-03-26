---
title: "Home Assistant"
description: "Provides installation instructions for the Home Assistant application in TrueNAS."
weight:
aliases:
 - /TruenasApps/StableApps/HomeAssistantApp/
tags:
- apps
keywords:
- home
- app
- assistant
---

{{< github-content 
    path="trains/stable/home-assistant/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

The TrueNAS Home Assistant app provides a streamlined way to install, manage, and leverage the powerful capabilities of Home Assistant. TrueNAS deploys the Home Assistant app in a Docker container using Docker Compose. Once the app is successfully deployed, you can access the Home Assistant web interface directly from TrueNAS. The Home Assistant interface lets you control, automate, and monitor various smart home devices. With support for thousands of integrations, you can customize automations, create detailed dashboards, and easily manage your smart home setup.

Home Assistant provides a [Quickstart Setup Guide](https://www.home-assistant.io/getting-started/) with step-by-step instructions to help users get started.

## Before You Begin

Prepare TrueNAS before installing Home Assistant by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

  <p style="margin-left: 33px">Create a parent dataset, such as <i>HomeAssistant</i>, within your apps pool. Home Assistant uses three datasets: <b>config-storage</b>, <b>media-storage</b>, and <b>data-storage</b>. Ensure you create the necessary datasets before you install the app since Home Assistant needs them to configure properly. Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.</p>

<p style="margin-left: 33px">Follow the instructions below in <b>Creating Datasets for Apps</b> to correctly set up these datasets.

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

## Installing the Application

{{< hint info >}}
This basic procedure covers the required *Home Assistant* app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

Go to **Apps**, click on **Discover Apps**, and locate the app widget by either scrolling down to it or typing the name into the search field.
For example, to locate the Home Assistant app widget, begin typing *Home Assistant* into the search field to show app widgets matching the search input.

{{< trueimage src="/images/SCALE/Apps/DiscoverScreenHomeAssistant.png" alt="Example of Locating an App Widget" id="Example of Locating an App Widget" >}}

If this is the first application you are installing, TrueNAS displays a dialog about configuring apps.

{{< expand "Configuring Apps Dialog" "v" >}}
{{< trueimage src="/images/SCALE/Apps/AppsInformationDialog.png" alt="Apps Information Dialog" id="Apps Information Dialog" >}}

Click **Confirm** then **Agree** to close the dialog and open the application details screen.

{{< /expand >}}
If not the first time installing apps the dialog does not show, click on the widget to open the app information screen.

{{< trueimage src="/images/SCALE/Apps/HomeAssistantInformationScreen.png" alt="Home Assistant Information Screen" id="Home Assistant Information Screen" >}}

Click **Install** to open the app installation wizard.

Application configuration settings are grouped into several sections, each explained below in **Understanding App Installation Wizard Settings**.
To find specific fields begin typing in the **Search Input Fields** search field to show the section or field, scroll down to a particular section, or click on the section heading in the list of sections on the upper-right of the wizard screen.

{{< trueimage src="/images/SCALE/Apps/InstallHomeAssistantScreen.png" alt="Home Assistant Install Screen" id="Home Assistant Install Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the ***Home Assistant* Configuration** settings.

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Add your **Storage Configuration** settings.

Set **Host Path (Path that already exists on the system)** in **Type** for ***Data Storage***.
Select **Enable ACL**, and then enter or browse to select the ***data-storage*** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/AddHomeAssistantStorageConfigs.png" alt="Add Home Assistant Storage Configurations" id="Add Home Assistant Storage Configurations" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For example, add the **568** user and **0**, and give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the storage steps above each additional storage volume. See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **nextcloud** app in the **Deploying** state. Status changes to **Running** when ready to use.

Click **Web UI** on the **Application Info** widget to open the *Home Assistant* web portal sign-up screen.

{{< trueimage src="/images/SCALE/Apps/HomeAssistantSignUpScreen.png" alt="Home Assistant Sign Up Screen" id="Home Assistant Sign Up Screen" >}}

{{< trueimage src="/images/SCALE/Apps/HomeAssistantDashboard.png" alt="Home Assistant Dashboard" id="Home Assistant Dashboard" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install *Home Assistant*** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Home Assistant Configuration Settings

*Home Assistant* configuration settings include setting up credentials, *APT packages* (previously referred to as the commands), the *host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule*, and *adding additional environment variables*.

The **Home Assistant Configuration** section contains a **Database Password** field. This is where you set the password Home Assistant uses to securely connect to your TrueNAS system. This is *not* the field where you enter your current Home Assistant password or the password you intend to use to log into the app.

Upon deployment, users can set the desired Home Assistant login credentials or log in to an existing account from the Home Assistant UI.

{{< trueimage src="/images/SCALE/Apps/HomeAssistantAddDevices.png" alt="Home Assistant Add Devices Option" id="Home Assistant Add Devices" >}}

Users can select the **Add Devices** drop-down menu to configure device settings for any Home Assistant-compatible devices that they currently own. Users do not have to own any devices before installing the app and can leave this section blank if not applicable.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [*Home Assistant* documentation](https://www.home-assistant.io/docs/configuration/yaml/) for more information on environment variables.

### User and Group Configuration

It is recommended to make a **user** and **group** for the Home Assistant app. If you choose to follow the recommendation, ensure that the user and group have full access to the config-storage, media-storage, and data-storage datasets.

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

The default web port for *Home Assistant* is ***30027***.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}

{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

*Home Assistant* needs *three* datasets for host path storage volume configurations:

* ***config-storage*** to use as the ***Configuration*** storage volume.
* ***data-storage*** to use as the ***User Data*** storage volume.
* ***media-storage*** to use as the ***Media Data*** storage volume.

If you group these datasets under a parent dataset named *Home Assistant*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the ***Home Assistant*** user.
If the app includes postgres storage volumes, include the following information
If the app installation wizard cannot set up the ACL type or correctly add user permissions for the postgres storage volume,
you must configure these outside the install wizard using the **Add Dataset** and **Edit ACL** screens.
When adding the ***postgresdata*** dataset set it up with a POSIX ACL, and add the ***Home Assistant*** user as the owner user and group with full control permissions.

If you have a postgres dataset, also include information in the Before You Begin section about adding the dataset and permissions.

See the instructions in the [Before You Begin](#before-you-begin) section for more on creating both the parent and postgres_data datasets and configuring the ACL permissions for each.
You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Home Assistant** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, then scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For *Home Assistant*, the run-as users is **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallHomeAssistantResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
