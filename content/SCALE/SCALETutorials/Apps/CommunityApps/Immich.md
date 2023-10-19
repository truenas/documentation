---
title: "Immich"
description: "Provides installation instructions for the Immich application."
weight: 
aliases:
tags:
- scaleapps
---

{{< include file="/_includes/CommunityAppsContribute.md" >}}

{{< toc >}}

Immich is a self-hosted photo and video backup tool.

Immich integrates photo and video storage with a web portal and mobile app.
It includes features such as libraries, automatic backup, bulk upload, partner sharing, Typesense search, facial recognition, and reverse geocoding.

TrueNAS SCALE makes installing Immich easy, but you must use the Immich web portal and mobile app to configure accounts and access libraries.

## First Steps

The Immich app in TrueNAS SCALE installs, completes the initial configuration, then starts the Immich web portal.
When updates become available, SCALE alerts and provides easy updates.

Before installing the Immich app in SCALE, review their [Environment Variables](https://documentation.immich.app/docs/install/environment-variables) documentation and to see if you want to configure any during installation.
You can configure environment variables at any time after deploying the application.

SCALE does not need advance preparation.

You can allow SCALE to create the datasets Immich requires automatically during app installation.
Or before beginning app installation, [create the datasets]({{< relref "DatasetsSCALE.md" >}}) to use in the **Storage Configuration** section during installation.
Immich requires 7 datasets: **library**, **pgBackup**, **pgData**, **profile**, **thumbs**, **uploads**, and **video**.

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

Accept the default value in **Timezone** or change to suit your needs.
**Timezone** is only used by the Immich `exiftool` microservice if it cannot be determined from the image metadata.

Accept the default port in **Web Port**.

<!-- FIX -->

Immich requires at least one storage dataset.
You can allow SCALE to create it for you, or use the dataset(s) created in [First Steps](#first-steps).
Select the storage option you want to use for both **Prometheus Data Storage** and **Prometheus Config Storage**.
Select **ixVolume** in **Type** to let SCALE create the dataset or select **Host Path** to use the existing datasets created on the system.

Accept the defaults in Resources or change the CPU and memory limits to suit your use case.

Click **Install**.
The system opens the **Installed Applications** screen with the Prometheus app in the **Deploying** state.
When the installation completes it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/ImmichInstalled.png" alt="Immich Installed" id="Immich Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Prometheus web interface to begin configuring targets, alerts, rules and other parameters.
See their postinstall steps documentation [link](link)

{{< trueimage src="/images/SCALE/Apps/ImmichWebPortal.png" alt="Immich Web Portal" id="Immich Web Portal" >}}

## Editing the Immich Application


## Understanding Immich Settings

The following sections provide more detail explanations of the settings found in each section of the **Install Immich** screen.

### Application Name Settings

Accept the default value or enter a name in **Application Name** field.
In most cases use the default name, but if adding a second deployment of the application you must change this name.

Accept the default version number in **Version**.
When a new version becomes available, the application has an update badge.
The **Installed Applications** screen shows the option to update applications.

### Immich Configuration Settings

You can accept the defaults in the **Immich Configuration** settings, or enter the settings you want to use.

{{< trueimage src="/images/SCALE/Apps/InstallImmichConfigSettings.png" alt="Immich Configuration Settings" id="Immich Configuration Settings" >}}

!!!**FIELDS**!!!

### Networking Settings

Accept the default port numbers in **Web Port**.
The SCALE Immich app listens on port **30041**.

Refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallImmichNetworkConfig.png" alt="Immich Networking" id="Immich Networking" >}}

### Storage Settings

You can install Immich using the default setting **ixVolume (dataset created automatically by the system)** or use the host path option with datasets [created before installing the app](#first-steps).

{{< trueimage src="/images/SCALE/Apps/InstallImmichStorageConfigixVolume.png" alt="Immich Configure Storage ixVolumes" id="Immich Configure Storage ixVolumes" >}}

Select **Host Path (Path that already exists on the system)** to browse to and select the datasets.

{{< trueimage src="/images/SCALE/Apps/InstallImmichStorageConfigHostPath.png" alt="Immich Host Paths" id="Immich Host Paths" >}}

### Resource Configuration Settings

Accept the default values in **Resources Configuration** or enter new CPU and memory values
By default, this application is limited to use no more than 4 CPU cores and 8 Gigabytes available memory. The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallImmichResourceConfig.png" alt="Immich Resource Limits" id="Immich Resource Limits" >}}

To customize the CPU and memory allocated to the container Immich uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
Default is 4000m.

Accept the default value 8Gi allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example 129M or 123Mi.

Systems with compatible GPU(s) display devices in **GPU Configuration**.
See [Managing GPUs]({{< relref "ManageGPUSCALE.md" >}}) for more information about allocating isolated GPU devices in TrueNAS SCALE.

{{< taglist tag="scaleapps" limit="10" >}}
