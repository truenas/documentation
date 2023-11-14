---
title: "Netdata"
description: "Provides information on installing and configuring the Netdata app on TrueNAS SCALE."
weight:
aliases:
 - /scale/scaletutorials/apps/installnetdataapp/
tags:
- scalenetdata
- scaleapps
- scaleadmin
---

{{< toc >}}

{{< include file="/_includes/CommunityAppsLegacy.md" >}}
{{< include file="/_includes/CommunityAppsContribute.md" >}}

The TrueNAS SCALE Netdata app provides an easy way to install and access the Netdata infrastructure monitoring solution. 
SCALE deploys the Netdata app in a Kubernetes container using the Helm package manager. 
After successfully deploying the app, you can access the Netdata web portal from SCALE. 
The Netdata web portal opens on the local dashboard, and where you can create new dashboards, add plugins, metric databases, physical and virtual systems, containers, and other cloud deployments you want to monitor. 
The portal also provides access to the Netdata Cloud sign-in screen.

## Before You Begin
The SCALE Netdata app does not require advance preparation.

You can allow SCALE to automatically create storage volumes for the Netdata app or you can create specific datasets to use for configuration, cache, and library storage and extra storage volumes in the container pod.
If using specific datasets, create these before beginning the app installation.

The administrator account must have sudo permissions enabled. 
To verify, go to **Credentials > Local User**. 
Click on the administrator user (e.g., admin), then click **Edit**. Scroll down to the sudo permissions.
If you upgraded from Angelfish or early releases of Bluefin that do not have an admin user account, see [Creating an Admin User Account]({{< relref "ManageLocalUsersSCALE.md" >}}) for instructions on correctly creating an administrator account with the required permissions.

You can create a Netdata account before or after installing and deploying the Netdata app.

## Installing Netdata on SCALE
To install the **Netdata** application, go to **Apps**, click on **Discover Apps**, then either scroll down to the **Netdata** app widget or begin typing Netdata in the search field to filter the list to find the Netdata app widget.

{{< trueimage src="/images/SCALE/Apps/NetdataWidget.png" alt="Netdata App Widget" id="Netdata App Widget" >}}

Click on the widget to open the **Netdata** application details screen. 

{{< trueimage src="/images/SCALE/Apps/NetdataAppDetailsScreen.png" alt="Netdata App Details Screen" id="Netdata App Details Screen" >}}

Click **Install** to open the **Install Netdata** screen.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataScreen.png" alt="Install Netdata Screen" id="Install Netdata Screen" >}}

Application configuration settings are presented in several sections, each explained in [Understanding Netdata Settings](#understanding-netdata-settings) below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

Accept the default values in **Application Name** and **Version**.

Accept the default settings in **Netdata Configuration** and the default port in **Node Port to use for Netdata UI**. 
The SCALE Netdata app uses the default port **20489** to communicate with Netdata and show the Netdata local dashboard. 

Make no changes in the **Storage** section to allow SCALE to create the storage volumes for the app, or to use datasets created for Netdata configuration storage, select **Enable Host Path for Netdata** to show the **Host Path for Netdata Configuration** settings.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataStorageEnableHostPath.png" alt="Install Netdata Storage Enable Host Path" id="Install Netdata Storage Enable Host Path" >}}

Enter or browse to select the dataset created for Netdata configuration storage to populate the mount path. 
If using datasets created for cache and library storage, enable these options, then enter or browse to the datasets for each.

Accept the default settings in **Advanced DNS Settings**.

Accept the default values in **Resources Limits** or select **Enable Pod Resource limits** to show resource configuration options for CPU and memory and enter new values to suit your use case.

Click **Install**.
The system opens the **Installed Applications** screen with the Netdata app in the **Deploying** state.
When the installation completes it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/NetdataInstalled.png" alt="Netdata Installed" id="Netdata Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Netdata web interface showing the local dashboard.

{{< trueimage src="/images/SCALE/Apps/NetdataWebPortalLocalDashboard.png" alt="Netdata Web Portal Local Dashboard" id="Netdata Web Portal Local Dashboard" >}}

## Understanding Netdata Settings
The following sections provide more detailed explanations of the settings found in each section of the **Install Netdata** screen.

### Application Name Settings
Accept the default value or enter a name in **Application Name**.
In most cases use the default name, but if adding a second deployment of the application you must change the name.

Accept the default version number in **Version**.
When a new version becomes available, the application shows an update badge on the **Installed Applications** screen and adds Update buttons to the **Application Info** widget and the **Installed** applications screen. 

### Netdata Configuration Settings
You can accept the defaults in the **Netdata Configuration** settings or enter the settings you want to use.

Click **Add** to the right of **Netdata image environment** to display the environment variable **Name** and **Value** fields. 
Netdata does not require using environment variables to deploy the application but you can enter any you want to use to customize your container.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataConfigAddEnvironmentVariable.png" alt="Netdata Configuration Add Environment Variable" id="Netdata Configuration Add Environment Variable" >}}

The SCALE Netdata app uses port **20489** to communicate with Netdata and open the web portal. 
Netdata documentation states it uses **19999** as the default port, but it recommends restricting access to this for security reasons. 
Refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

### Netdata Storage Settings
The SCALE defaults to automatically creating storage volumes for Netdata without enabling the host path options.

To create and use datasets for the Netdata configuration, cache, and library storage or extra storage volumes inside the contanier pod, first create these datasets.
Go to **Datasets** and create the datasets before you begin the app installation process. 
See [Add Datasets]({{< relref "DatasetsScale.md" >}}) for more information. 
Select **Enable Host Path for Netdata** to show the volume mount path field to add the configuration storage dataset.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataStorageEnableHostPath.png" alt="Install Netdata Storage Enable Host Path" id="Install Netdata Storage Enable Host Path" >}}

Enter or browse to select the dataset and populate the mount path field. 
To use datasets created for cache and library storage volumes, first enable each option and then enter or browse to select the datasets tp populate the mount path fields for each.

If you want to add storage volumes inside the container pod for other storage, click **Add** to the right of **Extra Host Path Volumes** for each storage volume (dataset) you want to add. 

{{< trueimage src="/images/SCALE/Apps/InstallNetdataStorageExtraHostPath.png" alt="Install Netdata Storage Add Extra Host Path" id="Install Netdata Storage Add Extra Host Path" >}}

You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

### Advanced DNS Settings
The default **DNS Configuration** are sufficient for a basic installation. 
To specify additional DNS options, click **Add** to the right of **DNS Options** to add the DNS **Option Name** and **Option Value** fields.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataAdvancedDNSOptions.png" alt="Install Netdata Advanced DNS Options" id="Install Netdata Advanced DNS Options" >}}

### Resource Limits Settings
Accept the default values in **Resources Limits** or select **Enable Pod Resource limits** to show CPU and memory resource configuration options.

By default, the application is limited to use no more than four CPU cores and eight gigabytes available memory. 
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataResourceLimitsEnablePod.png" alt="Install Netdata Resource Limits" id="Install Netdata Resource Limits" >}}

To customize the CPU and memory allocated to the container (pod) Netdata uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
Default is 4000m.

Accept the default value 8Gi allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example 129M or 123Mi.

## Using the Netdata Web Portal
After deploying the SCALE Netdata app click on **Web Portal** to open the Netdata agent local dashboard. 
This dashboard provides a system overview with CPU usage and other vital statistics.

{{< trueimage src="/images/SCALE/Apps/NetdataWebPortalLocalDashboard.png" alt="Netdata Web Portal Local Dashboard" id="Netdata Web Portal Local Dashboard" >}}

The Netdata dashboard displays a limited portion of the reporting capabilities of the Netdata app. 
Click on the **Nodes** tab to better understand the differences between the Netdata agent and Netdata Cloud. Evaluate your system reporting needs.

{{< trueimage src="/images/SCALE/Apps/NetdataNodesDashboard.png" alt="Netdata Nodes Dashboard" id="Netdata Nodes Dashboard" >}}

Click **Sign In** to open the Netdata Cloud sign-in screen.

{{< trueimage src="/images/SCALE/Apps/NetdataSignInScreen.png" alt="Netdata Cloud Sign-In Screen" id="Netdata Cloud Sign-In Screen" >}}

Use the Netdata-provided documentation to customize Netdata to suit your use case and monitoring needs.
{{< taglist tag="scalenetdata" limit="10" >}}