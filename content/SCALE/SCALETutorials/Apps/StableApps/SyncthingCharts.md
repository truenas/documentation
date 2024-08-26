---
title: "Syncthing Stable App"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the offical version of Syncthing in the stable app train."
weight: 90
aliases:
 - /scale/scaletutorials/apps/chartapps/syncthingcharts/
tags:
- apps
- syncthing
---

{{< expand "Adding the Enterprise App" "v" >}}
To add the **enterprise** train Syncthing application to the list of available applications: 
{{< include file="/static/includes/AddEnterpriseTrain.md" >}}
The **charts** and **enterprise** train versions of the Syncthing app widget display on the **Discover** application screen.

{{< trueimage src="/images/SCALE/Apps/DiscoverSyncthingAppWidgets.png" alt="Discovering Syncthing App Widgets" id="Discovering Syncthing App Widget" >}}

{{< /expand >}}
## Syncthing Overview
{{< include file="/static/includes/SyncthingOverview.md" >}}

{{< include file="/static/includes/SyncthingArticleIntro.md" >}}

## Before Installing Syncthing
{{< include file="/static/includes/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application
You can have multiple Syncthing app deployments (for example two or more **stable**, two or more **enterprise**, or a combination of **stable** and **enterprise** trains, etc.).
Each Syncthing app deployment requires a unique name that can include numbers, and dashes or underscores (for example, *syncthing2*, *syncthing-test*, *syncthing_1*, etc.).
If deploying multiple Syncthing apps on your system, each app deployment requires separate storage volumes.
Using the same two storage datasets for two different app deployments results in the app failing to start.
Create a new folder for each Syncthing app deployment and add both the **home** and **data1** datasets in that folder.

Use a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing app are case sensitive.
For example, a file named *MyData.txt* is not the same as *mydata.txt* file in Syncthing.

Go to **Apps > Discover Apps** and locate the **Syncthing** widget for the app in the stable train.

{{< trueimage src="/images/SCALE/Apps/SyncthingAppWidget.png" alt="Syncthing App Widget Stable Train" id="Syncthing App Widget Stable Train" >}}

Click on the widget to open the Syncthing details screen. 

{{< trueimage src="/images/SCALE/Apps/SyncthingAppDetailsScreen.png" alt="Syncthing Details Screen Stable Train" id="Syncthing Details Screen Stable Screen" >}}

Click on the widget to open the Syncthing details screen.

Click **Install** to open the **Install Syncthing** wizard.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section, or click on the section heading in the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingAppWizard.png" alt="Install Syncthing Wizard" id="Install Syncthing Wizard" >}}

Accept the default values in **Application Name** and **Version**.

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group ID settings (**568**).
If you created a user for this app, change these settings to the UID/GID for that new user.

Configure the storage settings.
You can allow Syncthing to create the configuration storage volume, but we recommend setting **Type** to **Host Path (Path that already exists on the system)**, and then enter or browse to the location of the **home** dataset to populate the **Host Path** field for the **Syncthing Config Storage** settings.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigHomeHostPath.png" alt="Syncthing Home Storage Settings" id="Syncthing Home Storage Settings" >}}

Next, Click **add** to the right of **Additional Storage** to add the storage configuration settings for the data volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigData1HostPath.png" alt="Syncthing Data1 Storage Settings" id="Syncthing Data1 Storage Settings" >}}

Enter or browse to the dataset created to populate the **Host Path** field (for example, */mnt/tank/syncthing/config*), then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

To add another dataset path inside the container, see [**Storage Settings**](#storage-settings) below for more information.
Set **Type** to **Host Path (Path that already exists on the system)**, enter **/data1** in **Mount Path**, and then either enter or browse to the path to the **data1** dataset to populate the **Host Path** field.

Accept the default port numbers in **Networking**. 
See [Network Settings](#networking-settings) below for more information on network settings. 
Before changing the default port number, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
When selected, **Host Network** binds to the default host settings programmed for Syncthing.
When enabled the app uses the host network for Syncthing.
The TCP and UDP ports listen on port **20978** and **20979**.
Web UI listens on port **20910**.

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
When a new version becomes available, the application shows an update badge and the **Application Info** widget on the **Installed** applications screen shows the **Update** button.

### Configuration Settings
The Syncthing app wizard is configured with all settings required to deploy the container, but you can add additional settings if you want to further customize the app in SCALE.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingWizardSyncthingConfigSettings.png" alt="Add Syncthing Variables" id="Add Syncthing Environment Variables" >}}

Click **Add** to the right of **Environmental Variables** to show a set of fields to configure the application with additional [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html).

You can add environment variables to the Syncthing app configuration after deploying the app.
Click **Edit** on the **Syncthing Application Info** widget found on the **Installed Application** screen to open the **Edit Syncthing** screen.

### User and Group Settings
Accept the user and group defaults settings in **User and Group Configuration**, or enter new user and group IDs for the user created to administer this app.
The default value for **User Id** and **Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingWizardSyncthingUserAndGroup.png" alt="Syncthing User and Group Settings" id="Syncthing User and Group Setting" >}}

### Storage Settings 
You can allow the Syncthing app to create the configuration storage volume or you can create datasets to use for the configuration storage volume and to use for storage within the container pod.

To use existing datasets, select **Enable Custom Host Path for Syncthing Configuration Volume** to show the **Host Path for Syncthing Configuration Volume** and **Extra Host Path Volumes** fields.
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
{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}
