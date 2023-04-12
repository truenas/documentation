---
title: "Adding the Netdata app"
description: "This article provides information on how to install and configure the Netdata app on TrueNAS SCALE."
weight: 30
tags:
- scalenetdata
- scaleapps
- scaleadmin
---

{{< toc >}}


## Before You Begin

Before using SCALE to install the Netdata application you need to configure TrueNAS SCALE storage for the Netdata application to use. 

Verify the [local administrator]({{< relref "ManageLocalUsersSCALE.md" >}}) account has sudo permissions enabled.

Set up an account with Netdata if you don't already have one.

## Installing Netdata on SCALE

In this procedure you:

1. Add the storage Netdata uses

2. Install the Netdata app in SCALE

### Adding Netdata Storage

Netdata needs a primary dataset for the application (netdata). 

SCALE Bluefin creates the **ix-applications** dataset in the pool you set as the application pool when you first go to the **Apps** screen. This dataset is internally managed so you cannot use this as the parent when you create the required Netdata dataset.

To create the Netdata dataset, go to **Datasets**, select the dataset you want to use as the parent dataset, then click **Add Dataset** to [add a dataset]({{< relref "DatasetsScale.md" >}}). In this example, we create the *apnetdat* dataset under the root parent dataset **tank**.

![InstallNetDAppDatasetsSCALE](/images/SCALE/22.12/InstallNetDAppDatasetsSCALE.png "Netdata Dataset")

### Installing Netdata in SCALE

Go to **Apps** to open the **Applications** screen and then click on the **Available Applications** tab. 

1. Set the pool SCALE applications use. 
   
   If you have not installed an application yet, SCALE opens the **Choose a pool for Apps** dialog. Select the pool where you created the Netdata dataset from the **Pools** dropdown list and then click **Choose** to set the pool for all applications. 

   After SCALE finishes configuring the system to use this pool, a confirmation dialog displays. Click **Close**.

2. Locate the **netdata** widget and then click **Install** to open the **netdata** configuration wizard.
   
   ![InstallNetDAppAvailAppSCALE](/images/SCALE/22.12/InstallNetDAppAvailAppSCALE.png "Available Applications") 
   
3. Enter a name for the app in **Application Name** and then click **Next**. This example uses *netdata*.   
   
   ![InstallNetDAppNameSCALE](/images/SCALE/22.12/InstallNetDAppNameSCALE.png "Add Nextcloud Application Name")

4. For a basic installation you can leave the default values in all settings. 
   TrueNAS populates **Node Port to use for Netdata UI** with the default port number of 20489. If you wish to add an image environment, click the **Add** button and enter a **Name** and **Value**.

   ![InstallNetDAppServiceConfSCALE](/images/SCALE/22.12/InstallNetDAppServiceConfSCALE.png "Add Netdata Configuration Data")

5. **Storage** for Netdata by default is configured without host path volumes enabled. 

   You can enable host paths for the Netdata Configuration, Cache and Library volumes by selecting their respective checkboxes. You can also specify additional host path volumes by clicking the **Add** button next to **Extra Host Path Volumes**, and providing the location of where the volume will be mounted inside the pod, as well as the path to the host.

   ![InstallNetDAppServiceConfHostPSCALE](/images/SCALE/22.12/InstallNetDAppServiceConfHostPSCALE.png "Add Netdata Storage Data")

6. The default **DNS Configuration** should be sufficient for a basic installation. If you want to specify additional DNS options, click the **Add** button next to **DNS Options** to enter a DNS  **Option Name** and **Option Value**.

   ![InstallNetDAppAdvancedDNSSettingsSCALE](/images/SCALE/22.12/InstallNetDAppAdvancedDNSSettingsSCALE.png "Add Netdata DNS Configuration")

7. The checkbox for **Enable Pod Resource limits** is not selected by default.

   ![InstallNetDAppResourceSCALE](/images/SCALE/22.12/InstallNetDAppResourceSCALE.png "Add Netdata Resources Configuration")
   
   When selected, additional fields display where you can specify CPU resource and memory limits.

8. Click **Save**. The Netdata app installation process begins. Go to **Apps** > **Applications** and click on the **Installed Applications** tab. The **netdata** widget shows the status of *DEPLOYING*.

   ![InstallNetDAppDeployingSCALE](/images/SCALE/22.12/InstallNetDAppDeployingSCALE.png "Netdata App Status")

   Once installed, the **netdata** widget shows the status of *ACTIVE*. Clicking on the vertical ellipsis provides additional options to interact with the agent.

   ![InstallNetDAppRunningOptionsSCALE](/images/SCALE/22.12/InstallNetDAppRunningOptionsSCALE.png "Netdata App Active")

## Using the Netdata Web Portal

A successfully installed Netdata app displays in the **Installed Applications** tab with a status of **Active**. 

   ![InstallNetDAppRunningSCALE](/images/SCALE/22.12/InstallNetDAppRunningSCALE.png "Netdata App Installed")

1. Click on the **Web Portal** button. The Netdata agent dashboard displays. The Netdata agent dashboard provides a system overview that displays CPU usage and other vital statistics. 

   ![InstallNetDAppNetDAgentCropSCALE](/images/SCALE/22.12/InstallNetDAppNetDAgentCropSCALE.png "Netdata Agent Dashboard")

2. The Netdata agent displays a limited portion of the reporting capabilities of the Netdata app. Click on the *Node View* tab to better understand the differences between the Netdata agent and Netdata Cloud. Evaluate your system reporting needs. 

   ![InstallNetDAppNetDAgentDashNoCloudSCALE](/images/SCALE/22.12/InstallNetDAppNetDAgentDashNoCloudSCALE.png "Netdata Agent Node View")

3. To sign in to *Netdata Cloud*, click the *Sign in to Netdata Cloud!* button.

   ![InstallNetDAppCloudSignUpSCALE](/images/SCALE/22.12/InstallNetDAppCloudSignUpSCALE.png "Netdata Cloud Sign In")

4. To stop the Netdata app, return to the **Installed Applications** tab and click the **Stop** button on the **netdata** widget.

   ![InstallNetDAppRunningSCALE](/images/SCALE/22.12/InstallNetDAppRunningSCALE.png "Stopping the Netdata App")

{{< taglist tag="scaleapps" limit="10" >}}
