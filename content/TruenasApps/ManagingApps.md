---
title: "Managing TrueNAS Apps"
description: "Provides instructions on managing TrueNAS applications."
weight: 35
aliases:
tags:
---


To manage individual apps use the functional buttons and settings found on each app widget.
To manage global application settings, use the options on the **Configuration** dropdown list.

## Setting Up the Apps Service

Click on **Configuration** at the top right of the screen to expand the dropdown with options to manage the pool the app uses for general storage, container images, app trains, and GPU devices.
Configuration settings allow setting up multiple IP addresses and directory service authentication.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

For information on managing trains, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

### Managing the Apps Pool

TrueNAS prompts you to select the pool for apps the first time you click on **Apps**.
You can exit out of this if you are not ready to deploy apps, do not have a pool designated for apps, or just want to look at the app options.
You must choose the pool before you can install an application.
If you forget to set the app pool, TrueNAS prompts you again after you click **Install** on an app information screen.

#### Choosing the Apps Pool

Click **Choose Pool** to choose the pool.

Select the pool and click **Save**.

{{< trueimage src="/images/SCALE/Apps/AppsSettingsChoosePool.png" alt="Choosing a Pool for Apps" id="Choosing a Pool for Apps" >}}

{{< include file="/static/includes/apps/AppsPool.md" >}}

#### Unsetting the Apps Pool

Click **Unset Pool** to remove the pool for applications and delete any ixVolumes created for individual application storage.
ixVolumes are added to the **ix-apps** hidden dataset created when you set the apps pool. These storage volumes exist until you delete the application or unset the apps pool.
To maintain individual application data, create datasets to use with the host path storage option.
 
To select a different pool for apps, click **Configuration** and select **Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

To reset the apps pool, click **Choose Pool** and select the pool.

### Changing Apps Network Settings

Go to **Apps > Installed**, click **Configuration**, and select **Settings**.

To add another range of IP addresses, click **Add** to the right of **Address Pools**, then select a range from the dropdown list of options, and enter the desired value in **Size**.

**Base** shows the default IP address and subnet, and **Size** shows the network size of each docker network that is cut off from the base subnet.

{{< hint type="info" title="Apps Networking Troubleshooting Tip!" >}}
This setting replaces the **Kubernetes Settings** option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsVMsNoHTTPS.md" >}}

### Updating the Docker Image

TrueNAS can monitor the GitHub repository for the docker image for updates if the **Check for docker image updates** option on the **Settings** screen is enabled.
Go to the **Installed** applications screen, click on **Configuration**, and then click on **Settings** to open the screen.
Scroll down to check this option. If check-marked it is enabled. Select to clear the checkbox to disable it.

Click **Save** after making a change.

### Installing NVIDIA Drivers

Beginning in TrueNAS 24.10, NVIDIA drivers are no longer automatically installed. Users must manually install drivers from the TrueNAS UI.

If running TrueNAS 24.10 or higher:
1. Go to **Apps > Installed** and click on the **Configuration**.

2. Click on **Settings** to open the **Settings** configuration screen.

3. Select **Install NVIDIA Drivers**, which is available to users with compatible GPUs.

4. Select **Install NVIDIA Drivers**, and click **Save.**

## Managing Container Images

While on the **Installed** application screen, click **Configuration**, then click on **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new ones from this screen.

### Downloading an Image

**Pull Image** downloads a specific custom image to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

To download a specific image, click **Pull Image**, then enter a valid path and tag to the image.
Enter the path using the format *registry*/*repository*/*image* to identify the specific image.
The default **latest** tag downloads the most recent image version.

When downloading a private image, enter user account credentials that allow access to the private registry.

## Managing Installed Apps

Installed applications show on the **Installed** applications screen in the **Applications** table.
Select an app row to view the widgets for the app in the **Details** area. Widgets include **Application Info**, **Workloads**, **Notes**, and **Application Metadata**.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsScreenWithApps.png" alt="" id="" >}}

### Upgrading Apps

Upgrade options only show if TrueNAS detects an available update for installed applications.

TrueNAS notifies users of available updates in several ways:

* Yellow circle with an exclamation mark on the app row.
* **Update** banner and button at the top of the **Installed** application screen.

Select an app row in the **Applications** stable to see the **Update** button in the **Application Info** widget for that app.
Select the checkbox(es) to the right of an app or each app with the update indicator to show the **Bulk Actions** button above the **Applications** table.
When multiple apps have available updates, the **Update All** button shows at the top of the screen.

To upgrade an app:
1. Select the app row and click **Update** on the **Application Info** widget.
2. Select the **Update** or **Update All** button at the top of the screen.
3. Select the checkbox to the left of the app row, then click **Update** or **Update All**.

Click **Bulk Actions** and select **Upgrade All** to upgrade multiple selected apps.

Clicking **Update** opens an upgrade window that includes two selectable options, **Images (to be updated)** and **Changelog**.
Click on the down arrow to see the options available for each.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

Click **Upgrade** to begin the process. A counter dialog opens showing the upgrade progress.

TrueNAS stops the app, applies the update, then restarts the app. When updating multiple apps, TrueNAS updates each app, one at a time.
When complete, the update badge and buttons disappear and the application **Update** state on the **Installed** screen changes from **Update Available** to **Up to date**.

#### Troubleshooting Updates

If you did not select the **Force Flag** when setting up storage and ACL permissions in the app installation wizard when you first configured the app, you need to enable this function.

Select the app row, stop the app, and click **Edit** in the **Application Info** widget to open the **Edit *appName*** screen.

Scroll down to **Storage Configuration** and select the **Force Flag** option** for each of the storage volumes. This allows updating the dataset when it has existing data, but it does not overwrite your existing data.

### Deleting Apps

To delete an application, click <i class="fa fa-stop" aria-hidden="true"></i> **Stop** on the application row.

{{< hint type="warning" >}}
Make sure you have the correct app row selected or you might delete the first app listed in the table!
{{< /hint >}}

After the app status changes to **Stopped**, select the app row, then click **Delete** on the **Application Info** widget for the selected application to open the **Delete** dialog.
{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

Select **Remove ixVolumes** to delete hidden app storage from the Apps pool.

Click **Confirm** then **Continue** to delete the application.

### Stopping Apps

To stop an app showing either the **Deploying** or **Running** status, click the <i class="fa fa-stop" aria-hidden="true"></i> **Stop** button on the **Applications** table row for the app.

### Restarting Apps

To restart a stopped app, click the <span class="material-icons">restart_alt</span> icon button restart the app.
Clicking restart when the app is still running, first stops the app and then restarts it.