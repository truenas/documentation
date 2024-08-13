---
title: "Community App Tutorial Template"
description: "Provides an app tutorial template to customize for new community-maintained app tutorials."
weight: 45
aliases:
tags:
- apps
---

Use this template as a guideline when creating a new application tutorial.
The shaded areas encompass standard article content but feel free to change by adding or removing sections to fit the app installation process.
Change the front matter `description` parameter to suit the subject and content of the new tutorial.
The description text must not exceed 160 alphanumeric or special characters, including spaces between characters.

```
```
*AppName* is a community-maintained application.
Enter a description of this app and common or specific uses for it. Also, include any links to documentation created by the application developer.
For example, 
*AppName provides a [Quickstart Setup Guide](\https://docs.appName/setup) with step-by-step instructions to help users create a Storj node.*

## Before You Begin
```
```
Enter information about the configuration or preparation steps required before beginning the installation process.
For example, creating a certificate, adding a third-party account if the app requires this before installing it, and creating TrueNAS datasets for the application to use.

Include names of datasets if required or strongly recommended. For example, a dataset named ***data***, or ***config***, etc.

Specify system resources the app requires to operate properly, such as CPU or memory resources, and/or additional network interface or router configuration.

If the app requires setting up a crypto wallet, include this information.

Example of possible points to include in this section: (do not include the three backticks in the article)
```
```
Prepare TrueNAS SCALE before installing the app by: 
   
* [Creating datasets](#creating-the-storj-datasets-on-truenas-scale) for application storage. 
  Create a parent dataset, such as *appName*, and then the storage datasets (***config*** and ***data***) under it.
  Select **apps** as the **Dataset Preset** for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.

* Add a new SCALE user account if not using the default apps user and group (568).
  Go to **Credentials > Local User**, click **Add** and create the new user.
  Make sure the user has read/write/execute privileges. If you have an existing admin user on your system with the right permissions, you make that user the app user.

* Go to [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of available or unavailable port numbers before changing the app default ports. 

```
```
The following content is considered standard when installing a new application using an app installation wizard. Modify the instructions based on what is required or optional to get the application to fully deploy.
The template sections are highlighted inside the three backticks. The backslash included in the link to images or shortcodes prevents them from rendering in this template. Remove them from your article.
```
```
## Installing the Application

Go to **Apps**, and click on **Discover Apps**.
Either scroll down to the ***AppNName*** widget or begin typing the name into the search field to locate the widget.

{{\< trueimage src="/images/SCALE/Apps/LocateImageNameWidget.png" alt="Locate *AppName* Widget" id="Locate *AppName* Widget" >}}

Click on the widget to open the ***AppNName*** information screen.

{{\< trueimage src="/images/SCALE/Apps/AppNameDetailsScreen.png" alt="*AppName* Information Screen" id="*AppName* Information Screen" >}}

Click **Install** to open the **Install *AppNName*** configuration wizard.

{{\< trueimage src="/images/SCALE/Apps/InstallAppNameScreen.png" alt="Install *AppName* Screen" id="Install *AppName* Screen" >}}

Scroll down to each section or click the navigation menu item on the right of the screen to jump to that section.

Accept the default name or enter a new name for your application if you prefer.
Enter a name that consists of, and begins or ends with lowercase alphanumeric characters.
Do not use a hyphen as the first or last character. For example, *appName*, or *app-name*, but not *-appName* or *appName-*.

Do not change the **Version**. SCALE alerts you when a new version is available for deployed apps, and allows you to update through the click of a button on the **Installed** application screen.

1. Enter the ***AppName* Configuration** settings:

   a. Enter each required configuration setting in this section.

   b. Click **Add** to show **Additional Environmental Variables** fields. These are optional settings. Describe any environment variables to enter.

2. Accept the default values in the **User ID** and **Group ID**.
   The default user **apps** (**568**) has the read, write, and execute permissions the application owner requires.
   If you created a new user for this app, enter the UI for that user in both the **User ID** and **Group ID** fields.

3. Accept the default values in the ***DNSSectionName* Settings** section unless you want to use advanced DNS configuration settings.
   Accept the default ports in **Network Configuration**.

   {{\< trueimage src="/images/SCALE/Apps/InstallAppNameNetworkConfig.png" alt="*AppName* Network Settings" id="*AppName* Network Settings" >}}

4. Accept the default **Network Configuration** settings unless you need to add custom settings. 
   If you want to use different ports, check the [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of available or unavailable port numbers.
   Leave **Host Network** unselected.

5. Configure the **Storage Configuration** settings.
   You can use the default **ixVolume** option to allow SCALE to create a data storage volume or select **Host Path** to select the path to the new datasets created earlier in this document.

   {{\< trueimage src="/images/SCALE/Apps/InstallAppNameStorage.png" alt="Add Datasets" id="Add Datasets" >}}

   Select the option to configure ACL entries if you want to configure this while installing the app, otherwise, use the **Permissions** widget for each dataset to edit ACL settings and ACE entries for the app user.

   To modify the dataset permissions, select **Enable ACL** to show the option to create an ACL entry to customize the dataset permissions.
   
   Repeat the above for any additional datasets.

   If you created and want to add more datasets for additional storage, click **Add** to the right of **Additional Storage Volumes** to show another set of storage options.
   The additional storage options include the **ixVolume** and **Host Path** options, and the option to create an **SMB share** volume.

   Setting up an SMB share option to set up data sharing using SMB.

6. Review the **Resource Configuration** settings.
   Accept the default values or enter new CPU and memory values.
   By default, this application is limited to using no more than 2 CPUs and 4096 megabytes of available memory.
   The application might use considerably less system resources.

   To customize the CPU and memory allocated to the container uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
   The default is 4000m, which means the app can use 4 cores.

   Accept the default value 8Gi allocated memory or enter a new limit in bytes.
   Enter a plain integer followed by the measurement suffix. For example, 4G or 123Mi.

7. Click **Install**.
   The system opens the **Installed** applications screen with the *AppName* app in the **Deploying** state.
   When the installation completes it changes to **Running**.

### Using the Web Portal
Click **Web Portal** on the **Application Info** widget to open the application web interface.

The time required to install the app varies depending on your hardware and network configuration.
```
```
