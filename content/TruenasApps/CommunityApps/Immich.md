---
title: "Immich"
description: "Provides installation instructions for the Immich application in TrueNAS."
weight: 
aliases:
 - /scale/scaletutorials/apps/communityapps/immich/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!--Comment or remove the following line if your PR changes provide a complete, up-to-date, and working installation tutorial -->
{{< include file=\"/static/includes/apps/CommunityPleaseImprove.md\" >}}

[Immich](https://immich.app) is a self-hosted photo and video backup tool.

Immich integrates photo and video storage with a web portal and mobile app.
It includes features such as libraries, automatic backup, bulk upload, partner sharing, Typesense search, facial recognition, and reverse geocoding.

TrueNAS makes installing Immich easy, but you must use the Immich web portal and mobile app to configure accounts and access libraries.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## First Steps

The Immich app in TrueNAS installs, completes the initial configuration, then starts the Immich web portal.
When updates become available, TrueNAS alerts and provides easy updates.

Before installing the TrueNAS Immich app, review the [Immich Environment Variables](https://documentation.immich.app/docs/install/environment-variables) documentation and to see if you want to configure any during installation.
You can configure environment variables at any time after deploying the application.

TrueNAS does not need advance preparation.

You can allow TrueNAS to create the datasets Immich requires automatically during app installation.
Or before beginning app installation, [create the datasets]({{< relref "DatasetsSCALE.md" >}}) to use in the **Storage Configuration** section during installation.
Immich requires seven datasets: **library**, **pgBackup**, **pgData**, **profile**, **thumbs**, **uploads**, and **video**.
You can organize these as one parent with seven child datasets, for example <file>mnt/tank/immich/library</file>, <file>mnt/tank/immich/pgBackup</file>, and so on.

## Installing the Immich Application

To install the **Immich** application, go to **Apps**, click **Discover Apps**, either begin typing Immich into the search field or scroll down to locate the **Immich** application widget.

{{< trueimage src="/images/SCALE/Apps/ImmichWidget.png" alt="Immich App Widget" id="Immich App Widget" >}}

Click on the widget to open the **Immich** application details screen.

{{< trueimage src="/images/SCALE/Apps/ImmichAppDetailsScreen.png" alt="Immich App Details Screen" id="Immich App Details Screen" >}}

Click **Install** to open the Immich application configuration screen.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallImmichScreen.png" alt="Install Immich Screen" id="Install Immich Screen" >}}

Accept the default values in **Application Name** and **Version**.

Accept the default value in **Timezone** or change to match your local timezone.
**Timezone** is only used by the Immich `exiftool` microservice if it cannot be determined from the image metadata.

Accept the default port in **Web Port**.

Immich requires seven storage datasets.
You can allow TrueNAS to create them for you, or use the dataset(s) created in [First Steps](#first-steps).
Select the storage options you want to use for **Immich Uploads Storage**, **Immich Library Storage**, **Immich Thumbs Storage**, **Immich Profile Storage**, **Immich Video Storage**, **Immich Postgres Data Storage**, **Immich Postgres Backup Storage**.
Select **ixVolume (dataset created automatically by the system)** in **Type** to let TrueNAS create the dataset or select **Host Path** to use the existing datasets created on the system.

Accept the defaults in Resources or change the CPU and memory limits to suit your use case.

Click **Install**.
The system opens the **Installed Applications** screen with the Immich app in the **Deploying** state.
When the installation completes it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/ImmichInstalled.png" alt="Immich Installed" id="Immich Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Immich web interface to set up your account and begin uploading photos.
See Immich [Post Install Steps](https://documentation.immich.app/docs/install/post-install) for more information.

{{< trueimage src="/images/SCALE/Apps/ImmichWebPortal.png" alt="Immich Web Portal" id="Immich Web Portal" >}}

## Editing the Immich Application

Go to the **Installed Applications** screen and select Immich from the list of installed applications.
Click **Edit** on the **Application Info** widget to open the **Edit Immich** screen.
The settings on the edit screen are the same as on the install screen.
You cannot edit **Storage Configuration** paths after the initial app install.

Click **Update** to save changes.
TrueNAS automatically updates, recreates, and redeploys the Immich container with the updated environment variables.

## Understanding Immich Settings

The following sections provide more detailed explanations of the settings found in each section of the **Install Immich** screen.

### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### Immich Configuration Settings

You can accept the defaults in the **Immich Configuration** settings, or enter the settings you want to use.

{{< trueimage src="/images/SCALE/Apps/InstallImmichConfigSettings.png" alt="Immich Configuration Settings" id="Immich Configuration Settings" >}}

Accept the default setting in **Timezone** or change to match your local timezone.
**Timezone** is only used by the Immich `exiftool` microservice if it cannot be determined from the image metadata.

You can enter a **Public Login Message** to display on the login page, or leave it blank.

### Networking Settings

Accept the default port numbers in **Web Port**.
The TrueNAS Immich app listens on port **30041**.

Refer to the TrueNAS [default port list]({{< relref "/references/defaultports.md" >}}) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallImmichNetworkConfig.png" alt="Immich Networking" id="Immich Networking" >}}

### Storage Settings

You can install Immich using the default setting **ixVolume (dataset created automatically by the system)** or use the host path option with datasets [created before installing the app](#first-steps).

{{< trueimage src="/images/SCALE/Apps/InstallImmichStorageConfigixVolume.png" alt="Immich Configure Storage ixVolumes" id="Immich Configure Storage ixVolumes" >}}

Select **Host Path (Path that already exists on the system)** to browse to and select the datasets.

{{< trueimage src="/images/SCALE/Apps/InstallImmichStorageConfigHostPath.png" alt="Immich Host Paths" id="Immich Host Paths" >}}

### Resource Configuration Settings

Accept the default values in **Resources Configuration** or enter new CPU and memory values
By default, this application is limited to use no more than 4 CPU cores and 8 gibibytes available memory. The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallImmichResourceConfig.png" alt="Immich Resource Limits" id="Immich Resource Limits" >}}

To customize the CPU and memory allocated to the container Immich uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
Default is 4000m, which means Immich is able to use 4 cores.

Accept the default value 8Gi allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example 4G or 123Mi.

Systems with compatible GPU(s) display devices in **GPU Configuration**.
Use the **GPU Resource** dropdown menu(s) to configure device allocation.

See [Allocating GPU]({{< relref "/content/TruenasApps/_index.md#allocating-gpu" >}}) for more information about allocating GPU devices in TrueNAS SCALE.

## Immich Database Backup and Restore

TrueNAS works differently from Immich's original documentation for database backup and recovery.
You can read how to backup and restore the Immich database [here](https://github.com/immich-app/immich/discussions/8809)