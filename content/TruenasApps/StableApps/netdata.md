---
title: "Netdata"
description: "Provides information on installing and configuring the Netdata app on TrueNAS."
weight:
aliases:
 - /scale/scaletutorials/apps/installnetdataapp/
 - /scale/scaletutorials/apps/chartapps/installnetdataapp/
 - /scale/scaletutorials/apps/stableapps/installnetdataapp/
 - /scale/scaletutorials/apps/communityapps/installnetdataapp/
 - /truenasapps/communityapps/installnetdataapp/
 - /truenasapps/stableapps/installnetdataapp/
tags:
- apps
- reporting
keywords:
- nas data storage
- software storage solutions
---

{{< github-content 
    path="trains/stable/netdata/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

The TrueNAS Netdata app provides an easy way to install and access the Netdata infrastructure monitoring solution.
TrueNAS deploys the Netdata app in a Docker container using Docker Compose.
After successfully deploying the app, you can access the Netdata web portal from TrueNAS.
The Netdata web portal opens on the local dashboard, and where you can create new dashboards, add plugins, metric databases, physical and virtual systems, containers, and other cloud deployments you want to monitor.
The portal also provides access to the Netdata Cloud sign-in screen.

## Before You Begin

Prepare TrueNAS before installing the app by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/NetdataAppDetailsScreen.png" alt="Netdata Information Screen" id="Netdata Information Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<p style="margin-left: 33px">Netdata uses three datasets: <b>config</b>, <b>lib</b>, and <b>cache</b>.
Follow the instruction below in **Creating Datasets for Apps** to correctly set up these datasets.</p>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}
</div>

* (Optional) Create a Netdata account.
  The app install wizard allows you to create a new Netdata account when configuring the app in TrueNAS, or to configure it to use a preexisting account.

## Installing Netdata in TrueNAS

{{< hint info >}}
This basic procedure covers the required Netdata app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallNetdataScreen.png" alt="Install Netdata Screen" id="Install Netdata Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).
See [Netdata Configuration](#netdata-configuration-settings) below for more information.

Accept the default values in **Network Configurations**.
The TrueNAS Netdata app uses the default port **20489** to communicate with Netdata and show the Netdata local dashboard.
Accept the default settings in **Advanced DNS Settings**.
See [Network Configuration](#network-configuration-settings) below for more information.

Add your **Storage Configuration** settings.
Set **Type** for **Netdata Config Storage** to **Host Path (Path that already exists on the system)**.
Select **Enable ACL**, and then enter or browse to and select the **config** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataStorageConfigACLandACE.png" alt="Add Netdata Config Storage ACL and ACE Settings" id="Add Netdata Config Storage ACL and ACE Settings" >}}

Click **Add** to the right of **ACL Entries** to show the block of permissions settings.
Change **ID Type** to user, enter **0** in **ID**, and set **Access** to full control.

Next, select **Force Flag**.

Repeat the above for the **lib** and **cache** storage volumes.

Accept the defaults in **Resources Configuration**.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The system opens the **Installed Applications** screen with the Netdata app in the **Deploying** state.
When the installation completes it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/NetdataInstalled.png" alt="Netdata Installed" id="Netdata Installed" >}}

{{< trueimage src="/images/SCALE/Apps/NetdataSignInScreen.png" alt="Nextcloud Sign In Screen" id="Nextcloud Sign In Screen" >}}

Click **Web Portal** on the **Application Info** widget to open the Netdata web interface showing the local dashboard.

{{< trueimage src="/images/SCALE/Apps/NetdataWebPortalLocalDashboard.png" alt="Netdata Web Portal Local Dashboard" id="Netdata Web Portal Local Dashboard" >}}

Refer to Netdata user guides and documentation for more information on configuring Netdata dashboards.

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Netdata** wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Netdata Configuration Settings

Accept defaults in the **Netdata Configuration** settings, or to customize the container deployment click **Add** to the right of **Additional Environment Variables** to show the **Name** and **Value** fields used to enter variables.
Netdata does not require using environment variables to deploy the application but you can enter any you want to use to customize your container.

{{< trueimage src="/images/SCALE/Apps/InstallNetdataConfigAddEnvironmentVariable.png" alt="Netdata Configuration Add Environment Variable" id="Netdata Configuration Add Environment Variable" >}}

Refer to Netdata user guides and documentation for information on configuring and customizing your app.
Guides include [GitHub Install Netdata with Docker](https://github.com/netdata/netdata/blob/master/packaging/docker/README.md), and [Netdaa Deployment Guides](https://learn.netdata.cloud/docs/deployment-guides/).
Netdata provides assistance through their community forums and [Support site](https://www.netdata.cloud/support/).

### Network Configuration Settings

The TrueNAS Netdata app uses port **20489** to communicate with Netdata and open the web portal.
Netdata documentation states it uses **19999** as the default port, but it recommends restricting access to this for security reasons.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

### Storage Configuration Settings

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

Netdata needs three datasets:

* **config**
* **lib**
* **cache**

Create datasets before beginning the app installation process. Set the **Dataset Preset** to **Apps** before saving the datasets.
If you group the required datasets under a parent dataset, for example, a dataset named *netdata*, set the **Dataset Preset** to **Apps** to avoid permissions error messages and issues that can block fully deploying the app. See [Before You Begin](#before-you-begin) for more information on adding these datasets.

You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.
{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Netdata** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First select the dataset row, and scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Netdata, the run-as users is **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resources Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallNetdataResourceLimitsEnablePod.png" alt="Install Netdata Resource Limits" id="Install Netdata Resource Limits" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}

## Using the Netdata Web Portal

After deploying the TrueNAS Netdata app click on **Web Portal** to open the Netdata agent local dashboard.
This Netdata dashboard provides a system overview of CPU usage and other vital statistics for the TrueNAS server connecting to Netdata.

{{< trueimage src="/images/SCALE/Apps/NetdataWebPortalLocalDashboard.png" alt="Netdata Web Portal Local Dashboard" id="Netdata Web Portal Local Dashboard" >}}

The Netdata System Overview dashboard displays a limited portion of the reporting capabilities.
Scroll down to see more information or click on a listed metric on the right side of the screen to show the graph and reporting on that metric.
Click the other tabs at the top left of the dashboard to view other dashboards for nodes, alerts, anomalies, functions, and events.

You can add your own Netdata dashboards using Netdata configuration documentation to guide you.

Click on the **Nodes** tab to better understand the differences between the Netdata agent and Netdata Cloud service reporting.
The Netdata Cloud monitors your cloud storage providers added to Netdata.

{{< trueimage src="/images/SCALE/Apps/NetdataNodesDashboard.png" alt="Netdata Nodes Dashboard" id="Netdata Nodes Dashboard" >}}

Click **Sign In** to open the Netdata Cloud sign-in screen.

{{< trueimage src="/images/SCALE/Apps/NetdataSignInScreen.png" alt="Netdata Cloud Sign-In Screen" id="Netdata Cloud Sign-In Screen" >}}

Use the Netdata-provided documentation to customize Netdata dashboards to suit your use case and monitoring needs.
