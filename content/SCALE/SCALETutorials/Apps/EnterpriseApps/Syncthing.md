---
title: "Syncthing Enterprise App"
description: "Provides general information, guidelines, uses cases, and instructions on installing the Enterprise version of the Syncthing application."
weight: 100
aliases:
 - /scale/scaletutorials/apps/syncthing/
tags:
- scaleapps
- scalesyncthing
- scaleenterprise
---

{{< toc >}}

This tutorial provides information on installing and using the TrueNAS Syncthing Enterprise app.

SCALE has two versions of the Syncthing application, the [community version]({{< relref "" >}}) in the **charts** train and a smaller **enterprise** train version, tested and polished for a safe and supportable experience for enterprise customers.
Users that want to test new features can also install the **test** train version, and provide feedback on how the SMB share option functions or report bugs found while testing this version.
SCALE has two versions of the Syncthing application, the community version in the **charts** train and a smaller version tested and polished for a safe and supportable experience for enterprise customers in the **enterprise** train. 
Community members can install either the enterprise or community version. 
A **test** train version that includes the SMB Share option still in development is available in early releases of SCALE COBIA. 
Users that want to test new features can also install the **test** train version, and provide feedback on how the SMB share option functions or report bugs found while testing this version.

{{< enterprise >}}
Syncthing is available to Enterprise systems with the appropriate VM and applications license.
{{< /enterprise >}}

## Syncthing Overview
{{< include file="/_includes/SyncthingOverview.md" >}}

## Before You Begin
You can allow the app to create a configuration storage volume or add datasets to use for storage. 
The Syncthing app allows you to select existing datasets to use for configuration or other storage inside the container pod.
If creating datasets, add the datasets (for example, *syncthing* for the configuration volume and **data1** for the additional volume) before installing the application.

Create a certificate for the Syncthing enterprise app.
{{< include file="/_includes/AddAppCertificate.md" >}}

You can install multiple Syncthing app deployments. If mounting existing datasets inside the pod for these additional deployments, create the datasets for each app deployment.

Decide on a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing application are case sensitive. For example, a file named MyData.txt is not the same  as mydata.txt file in Syncthing.

If not already assigned, set a pool for applications to use.

## Installing the Syncthing Application
Go to **Apps > Discover Apps**, locate the **Syncthing** enterprise app widget.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppWidget.png" alt="Syncthing Enterprise App Widget" id="Syncthing Enterprise App Widget" >}}

Click **Install** to open the Syncthing details screen. 

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppDetailsScreen.png" alt="Syncthing Enterprise Details Screen" id="Syncthing Enterprise Details Screen" >}}

Click **Install** to open the **Install Sycnthing** screen.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

Accept the default values in **Application Name** and **Version**. 

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group ID settings.
If selected, **Host Network** binds to the default host settings programmed for Syncthing.
Accept the default wep port **31000**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

If changing ports, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

Select the certificate created for Syncthing from the **Certificates** dropdown list.

Configure the storage settings.
To allow Syncthing to create the configuration storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**, then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

{{< trueimage src="/images/SCALE/Apps/InInstallSyncthingEnterpriseStorageConfigIxVolume.png.png" alt="Syncthing Storage Add ix-Volume" id="Syncthing Storage Add ix-Volume" >}}

To use an existing dataset created for Syncthing, select **Host Path (Path that already exists on the system)**. 
Enter or browse to the dataset created to populate the **Host Path** field (for example, */mnt/tank/syncthing/config*), then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field. 

To add another dataset path inside the container, see [**Storage Configuration**]() below for more information. ????

Click **Install**. 
The system opens the **Installed Applications** screen with the Syncthing app in the **Deploying** state.
After installation completes the status changes to **Running**. 

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsInstalled.png" alt="Syncthing Installed" id="Syncthing Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Syncthing web portal to begin configuring folders, devices, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalForTrueNAS.png" alt="Syncthing Web Portal for TrueNAS" id="Syncthing Web Portal for TrueNaS" >}}

Secure Syncthing by setting up a username and password.

## Understanding Syncthing Settings
The following sections provide detailed explanations of the settings found in each section of the **Install Syncthing** screen for the Enterprise train app.

### Application Name Settings
Accept the default value or enter a name in **Application Name** field. 
In most cases use the default name, but if adding a second deployment of the application you must change this name.

Accept the default version number in **Version**. 
When a new version becomes available, the application has an update badge. 
The **Installed Applications** screen shows the option to update applications.

### Configuration Setting
Select the timezone where your TrueNAS SCALE system is located.

### User and Group Settings
You can accept the defaults settings in **User and Group Configuration**, or enter new user and group IDs. The default value for **User Id** and **Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

### Networking Settings

Accept the default port numbers in **Web Port for Syncthing**.
The SCALE Syncthing chart app listens on port **31000**. 
Before changing default ports and assigning new port numbers, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Configuration" id="Syncthing Enterprise Network Configuration" >}}

We recommend not selecting **Host Network**. This binds to the host network.

Select the self-signed certificate created in SCALE for Syncthing from the **Certificate** dropdown list. You can edit the certificate after deploying the application.

### Storage Settings 
Allow the Syncthing enterprise app to create the configuration storage volume or create a dataset (for example, *syncthing*) to use for this purpose before you begin installing this app.
Enter or browse to the location of the **data1** dataset to populate the **Host Path** field below the **Mount Path** populated with **data1**.

Select **Host Path (Path that already exist on the system)** in **Type** to show the **Host Path** field, then enter or browse to and select the dataset an existing dataset created for the configuration storage volume. 

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigHostPath.png" alt="Syncthing Enterprise Add Host Path" id="Syncthing Enterprise Add Host Path" >}}

You can create additional datasets to use for storage within the pod in addition to the **data1** dataset. Click **Add** to the right of **Additional Storage** to show another set of **Mount Path** and **Host Path** fields for each dataset created.
Enter or browse to the dataset created for the extra storage volumes to add inside the pod.

### Resource Configuration Settings
Accept the default values in **Resources Configuration** or enter new CPU and memory values.
By default, this application is limited to use no more than 4 CPU cores and 8 Gigabytes available memory. 
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprose Resource Limits" >}}

To customize the CPU and memory allocated to the container (pod) Syncthing uses, enter new CPU values as a plain integer value followed by the suffix m (milli). Default is 4000m.

Accept the default value 8Gi allocated memory or enter a new limit in bytes. 
Enter a plain integer followed by the measurement suffix, for example 129M or 123Mi

## Securing the Syncthing Web UI

After installing and starting the Syncthing application, launch the Syncthing webUI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

## Using the Syncthing Web Portal for TrueNAS
{{< include file="/_includes/SyncthingWebPortalInfo.md" >}}

{{< taglist tag="scalesyncthing" limit="10" title="Related Syncthing Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}