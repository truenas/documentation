---
title: "Syncthing Charts App"
description: "Provides general information, guidelines, uses cases, and instructions on installing the community version of the Syncthing application."
weight: 90
aliases:
tags:
- scaleapps
- scalesyncthing
---

{{< toc >}}

This tutorial provides information on installing and using the TrueNAS Syncthing community app.

SCALE has two versions of the Syncthing application, the community version in the **charts** train and a smaller version tested and polished for a safe and supportable experience for TrueNAS Enterprise customers in the **enterprise** train. 
Community members can install either the enterprise or community version. 

{{< expand "Adding the Enterprise App" "v" >}}
To add the **enterprise** train Syncthing application to the list of available applications: 
{{< include file="/_includes/AddEnterpriseTrain.md" >}}
The **charts** and **enterprise** train versions of the Syncthing app widget display on the **Discover** application screen.

{{< trueimage src="/images/SCALE/Apps/DiscoverSyncthingAppWidgets.png" alt="Discovering Syncthing App Widgets" id="Discovering Syncthing App Widget" >}}

{{< /expand >}}
## Syncthing Overview
{{< include file="/_includes/SyncthingOverview.md" >}}

## Before Installing Syncthing
You can allow the app to create a configuration storage volume or add datasets to use for storage. 
The Syncthing app allows you to select existing datasets to use for configuration or other storage inside the container pod.
If creating datasets, add the datasets (for example, *syncthing*, *data1*) before installing the application.
If you want to mount a dataset inside the container, create a second dataset **data1** before you install the application. 

You can install multiple Syncthing app deployments. If mounting existing datasets inside the pod for these additional deployments, create the datasets for each app deployment.

Decide on a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing application are case sensitive. For example, a file named MyData.txt is not the same  as mydata.txt file in Syncthing.

If not already assigned, set a pool for applications to use.

## Installing the Syncthing Application

Go to **Apps > Discover Apps**, locate the **Syncthing** charts app widget.

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsAppWidget.png" alt="Syncthing Charts App Widget" id="Syncthing Charts App Widget" >}}

Click **Install** to open the Syncthing details screen. 

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsDetailsScreen.png" alt="Syncthing Charts Details Screen" id="Syncthing Charts Details Screen" >}}

Click **Install** to open the **Install Sycnthing** screen.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsScreen.png" alt="Install Syncthing Screen" id="Install Syncthing Screen" >}}

Accept the default values in **Application Name** and **Version**. 

Accept the default owner user and group ID settings. You can customize your Syncthing charts deployment by adding [environment variables](#configuration-settings) but these are not required.

Add the storage settings. 
Either allow the Syncthing app to create the configuration storage volume or use an existing dataset created for this app.
To use existing an dataset, select **Enable Custom Host Path for Syncthing Configuration Volume**, then browse to and select the dataset to populate the field. See [Storage Settings](#storage-settings) more on adding existing datasets.

Accept the default port numbers in **Networking**. See [Network Settings](#networking-settings) below for more information on network settings. 
If you plan to change port numbers, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
If selected, **Host Network** binds to the default host settings programmed for Syncthing. We recommend leaving this disabled.

Syncthing does not require advanced DNS options. If you want to add DNS options, see [Advanced DNS Settings](#advanced-dns-settings) below.

Accept the default resource limit values for CPU and memory or select **Enable Pod resource limits** to show the CPU and memory limit fields, then enter the new values you want to use for Syncthing. See [Resource Configuration Settings](#resource-configuration-settings) below for more information.

Click **Install**. 
The system opens the **Installed Applications** screen with the Syncthing app in the **Deploying** state.
After installation completes the status changes to **Running**. 

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsInstalled.png" alt="Syncthing Installed" id="Syncthing Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Syncthing web portal to begin configuring folders, devices, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalForTrueNAS.png" alt="Syncthing Web Portal for TrueNAS" id="Syncthing Web Portal for TrueNaS" >}}

Secure Syncthing by setting up a username and password.

## Understanding Syncthing Settings
The following sections provide more detail explanations of the settings found in each section of the **Install Syncthing** screen.

### Application Name Settings

Accept the default value or enter a name in **Application Name** field. 
In most cases use the default name, but if adding a second deployment of the application you must change this name.

Accept the default version number in **Version**. 
When a new version becomes available, the application has an update badge. 
The **Installed Applications** screen shows the option to update applications.

### Configuration Settings

You can accept the defaults in the **Configuration** settings, or enter new user and group IDs. The default value for **Ownnr User Id** and **Owner Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsConfig.png" alt="Syncthing Configuration Settings" id="Syncthing Configuration Settings" >}}

To add click **Add** to the right of **Syncthing environment** to show the **Name** and **Value** fields. 

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsConfigAddEnviron.png" alt="Add Syncthing Environment Variable" id="Add Syncthing Environment Variable" >}}

For a list of Syncthing environment variables, go to the [Syncthing documentation](https://docs.syncthing.net/) website and search for environment variables. 
You can add environment variables to the Syncthing app configuration after deploying the app. Click **Edit** on the **Syncthing Application Info** widget found on the **Installed Application** screen to open the **Edit Syncthing** screen.

### Storage Settings 
You can create an extra datasets to use for the configuration storage volume and to use for storage within the pod or allow the Syncthing app to create the configuration storage volume.
Select **Enable Custom Host Path for Syncthing Configuration Volume** to show the **Host Path for Syncthing Configuration Volume** and **Extra Host Path Volumes** fields.
Enter the host path in **Host Path for Syncthing Configuration Volume** or browse to and select the dataset an existing dataset created for the configuration storage volume. 

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsEnableCustomHostPath.png" alt="Syncthing Enable Host Path Storage fields" id="Syncthing Enable Host Path Storage Fields" >}}

**Add** to the right of **Extra Host Path Volumes** shows the **Mount Path in Pod** and **Host Path** fields. 

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartAddExtraHostPaths.png" alt="Syncthing Add Extra Host Paths" id="Syncthing Add Extra Host Paths" >}}

Enter the **data1** dataset in **Mount Path in Pod**, then enter or browse to the dataset location in **Host Path**.
If you added extra datasets to mount inside the container pod, click **Add** for each extra host path you want to mount inside the container pod.
Enter or browse to the dataset created for the extra storage volumes to add inside the pod.

### Networking Settings

Accept the default port numbers in **Web Port for Syncthing**, **TCP Port for Syncthing** and **UDP Port for Syncthing**.
The SCALE Syncthing chart app listens on port **20910**. 
The default TCP port is **20978** and the default UDP port is **20979**.
Before changing default ports and assigning new port numbers, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsNetworking.png" alt="Syncthing (Chart) Network Configuration" id="Syncthing (Chart) Network Configuration" >}}

We recommend not selecting **Host Network**. This binds to the host network.

### Advanced DNS Settings
Syncthing does not require configuring advanced DNS options. 
Accept the default settings or click **Add** to the right of **DNS Options** to enter the option name and value.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsAddAdvanceDNSOptions.png" alt="Syncthing Add Advanced DNS Options" id="Syncthing Add Advanced DNS Options" >}}

### Resource Configuration Settings
Accept the default values in **Resources Configuration** or select **Enable Pod resource limits** to enter new CPU and memory values.
By default, this application is limited to use no more than 4 CPU cores and 8 Gigabytes available memory. The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsEnablePodResourcesLimits.png" alt="Syncthing Enable Pod Resource Limits" id="Syncthing Enable Pod Resource Limit" >}}

To customize the CPU and memory allocated to the container (pod) Syncthing uses, enter new CPU values as a plain integer value followed by the suffix m (milli). Default is 4000m.

Accept the default value 8Gi allocated memory or enter a new limit in bytes. 
Enter a plain integer followed by the measurement suffix, for example 129M or 123Mi

## Securing the Syncthing Web UI
After installing and starting the Syncthing application, launch the Syncthing web portal.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

## Using the Syncthing Web Portal for TrueNAS
{{< include file="/_includes/SyncthingWebPortalInfo.md" >}}

{{< taglist tag="scalesyncthing" limit="10" title="Related Syncthing Articles" >}}
