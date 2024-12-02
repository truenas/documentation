---
title: "Community App Tutorial Template"
description: "Provides an app tutorial template to customize for new community-maintained app tutorials."
weight: 10
aliases:
- /contributing/documentation/apparticletemplate/
tags:
- apps
---

{{< hint type=important icon=gdoc_code title="Work in Progress" >}}
We are actively developing and improving this template.
Check back for updates!
{{< /hint >}}

{{< hint type=note title="How to Use this Template" >}}
To use this template, click **Edit Page** above or locate the Markdown file at [/Contributing/Applications/AppArticleTemplate.md](https://github.com/truenas/documentation/blob/master/content/Contributing/Applications/AppArticleTemplate.md) on the documentation [Github Repository](https://github.com/truenas/documentation).
Copy the template content to your target app tutorial to begin writing.

Detailed template instructions are commented out of the rendered copy of this template but show in the Markdown file.
{{< /hint >}}

<!-- BEGIN GENERAL INSTRUCTIONS -->
<!-- Use this template as a guide when creating a new application tutorial.

Feel free to change standard article content by adding or removing sections to fit the app installation process.
Change the front matter <file>description:</file> parameter at the top of the article to suit the subject and content of the new tutorial.
Description text must not exceed 160 alphanumeric or special characters, including spaces between characters.
After updating content, delete commented-out sections providing instructions for using this template when they are no longer needed.
When documenting a **Community** train app, not delete any of the commented-out instructions in the COMMUNITY APP INTRO SNIPPETS section below. 

**Formatting Tips for Content Development**
Standard text emphasis:
* Apply **Bold** to UI elements seen on the screen, including field, button, and navigation option names, other descriptions, etc.
  Use double asterisks preceding and following the name or text string to make it bold.
  Do not use bold in code strings.

* Apply *Italics* to any variable.
  Use single asterisks preceding and following the name or text string to make it italics.
  If using a variable in a code example, use the HTML tags <i></i> and not the Markdown tags.

* Apply HTML file tags <file></file> when entering a path to a file or file name, for example <file>iso</file>.

* Apply HTML keyboard tags <kbd></kbd> to keys on a keyboard, such as <kbd>Enter</kbd>.

When entering commands, command strings, or code blocks:

* Apply backticks(`string`) or HTML <code>string</code> tags to format command strings or output.
  
* Apply HTML <code></code> tags to strings with variables.

  * Do not enclose variables in angle or square brackets as these can also be part of command syntax.

  * Do not enter variables in all caps unless the command requires entering the value in all caps.

To create a code block, either use three backticks on the line before and after the content block, or use the HTML code tags.

Refer to the [Contributing to Apps]({{< relref "/content/contributing/applications/_index.md" >}}) article for more information on using the template. -->
<!-- /END GENERAL INSTRUCTIONS -->
---
<!-- BEGIN TEMPLATE -->

<!-- BEGIN COMMUNITY APP INTRO SNIPPETS -->
<!-- Include the following snippets and commented out instructions in all **Community** train app tutorials.
Choose to expose or comment out the CommunityPleaseExpand.md and CommunityPleaseImprove.md snippets as is applicable for the current tutorial. -->
<!-- DO NOT DELETE COMMUNITY APP INTRO SNIPPETS -->

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!-- Expose the following snippet if your suggested changes to this Community app documentation provide a complete installation tutorial. Leave exposed if you are proposing a partial expansion of the content, but further work is needed. -->
<!-- {{< include file="/static/includes/apps/CommunityPleaseExpand.md" >}}

<!-- Expose the following snippet if you suspect this Community app documentation is out of date, inaccurate, or needs further improvement -->
<!--{{< include file="/static/includes/apps/CommunityPleaseImprove.md" >}}-->
<!-- /END COMMUNITY APP INTRO SNIPPETS -->

*AppName* is a community-maintained application.
<!-- Enter a description of this app that includes common or specific uses for it. Also, include any links to documentation created by the application developer.
For example: 
*AppName* provides a [Quickstart Setup Guide](https://docs.appName/setup) with step-by-step instructions to help users create a *AppName* node. -->

## Before You Begin
<!-- Enter information about the configuration or preparation steps required before beginning the installation process.
For example, creating a certificate, adding a third-party account if the app requires this before installing it, and creating TrueNAS datasets for the application to use.

Include names of datasets if required or strongly recommended. For example, a dataset named ***data***, or ***config***, etc.

Specify system resources the app requires to operate properly, such as CPU or memory resources, and/or additional network interface or router configuration.

If the app requires setting up additional resources or credentials, such as a crypto wallet, include this information.

Example of possible points to include in this section you can modify to suit prerequisite for installing the app you are documenting: -->

Prepare TrueNAS before installing the app by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}

<!-- Include this paragraph to detail the datasets for host path storage volumes. Change the names of the datasets to suit what is expected for the app. NOTE: Include the HTML styling to align the indented paragraph with the bullet list in the snippet above. -->
  <p style="margin-left: 33px">Create a parent dataset, such as <i>appName</i>, and then the storage datasets (<b><i>config</i></b> and <b><i>data</i></b>) under it.
  Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.</p>

<!-- Include this snippet and a modified version of the indented text if the app requires setting up a certificate. 
{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}} 

  <p style="margin-left: 33px">Adding a certificate is optional but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for Nextcloud. A certificate is not required to deploy the application.</p> -->

<!-- Include this snippet if the app requires setting up a new TrueNAS user account before installing the app in TrueNAS, if not remove the snippet. -->
{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

<!-- Add any additional prerequisites users should complete before installing the app. -->

## Installing the Application

{{< hint info >}}
This basic procedure covers the required *appName* app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}
<!-- Change the name of the image in the path below to include the screenshot, if including this image:
{{< trueimage src="/images/SCALE/Apps/AppNameDetailsScreen.png" alt="*AppName* Information Screen" id="*AppName* Information Screen" >}} -->

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

<!-- Enter the required steps/instructions to configure the app. You can use a numbered procedure or paragraph conversational style procedure to convey the instructions the reader needs to follow. 
Enter settings in the order the reader encounters them or the order settings should be entered.
If following the default Install Wizard, enter the required App Configuration, Network Configuration, Storage Configuration, and Resource Configuration steps. -->
Enter the ***App* Configuration** settings.
<!--Only describe the required app configuration settings. Refer to the [*App* Configuration](#appname-configuration-settings) section below for more information.  -->
The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).
<!-- example text for app configuration sections: 
Accept the default values in both **User and Group Configuration** and **Network Configurations**.
(Optional) If you created a new user to administer apps, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.

Leave **Host Network** unselected.-->

 *AppName* app.Add your **Storage Configuration** settings.

Set **Host Path (Path that already exists on the system)** in **Type** for ***Data Storage***.
Select **Enable ACL**, and then enter or browse to and select the **data** dataset to populate the **Host Path** field.
<!-- replace image with the path to the image you want to add:
{{< trueimage src="/images/SCALE/Apps/InstallPlexStorageConfigDataACLandACE.png" alt="Add Plex Data Storage" id="Add Plex Data Storage" >}}-->

Select **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For example, add the **568** user and **0**, and give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the storage steps above each additional storage volume.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **nextcloud** app in the **Deploying** state. Status changes to **Running** when ready to use.

Click **Web Portal** on the **Application Info** widget to open the *AppName* web portal sign-in screen.
<!-- replace image with the path to the image you want to add 
{{< trueimage src="/images/SCALE/Apps/NextcloudSignInScreen.png" alt="Nextcloud Sign In Screen" id="Nextcloud Sign In Screen" >}}
-->

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install *Appname*** installation wizard.
<!-- Customize these sections by adding all settings in each configuration section, and providing details on the settings including expected values to enter. 
Replace the *variables* with the appropriate name for the app, setting(s), dataset name(s), etc., in the following sections.
Refer to other updated tutorials for more examples of completing these sections. -->

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### AppName Configuration Settings
<!-- Customize this section with the settings in the configuration section, and details on values to enter for each setting. -->
*AppName* configuration settings include setting up credentials, *APT packages* (previously referred to as the commands), the *host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule, and adding additional environment variables*.

If you have an existing *AppName* account, add the credentials for that account in the **Admin User** and **Admin Password** fields.
If you do not have an existing account, enter the name and password you want to use to create the *AppName* login credentials.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [*AppName* documentation](URL for environment variables documentation provided in the app provider) for more information on environment variables.

<!-- Not all apps include the following section. If it does, include the following, customized for the app requirements. -->
### User and Group Configuration
<!-- replace the image path and name:
{{< trueimage src="/images/SCALE/Apps/InstallPlexUserAndGroupConfig.png" alt="Plex User and Group Configuration Settings" id="Plex User and Group Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

The run-as user information is found on the *AppName* app details screen in the **Run-As Content** widget.
<!-- replace the image path and name
{{< trueimage src="/images/SCALE/Apps/PlexDetailsScreen.png" alt="Plex App Details Screen" id="Plex App Details Screen" >}}
-->

### Network Configuration

The default web port for *AppName* is ***30027***.
<!-- include the snippets that apply. Remove those that do not apply to the settings in the app Network Configuration section. -->
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}
<!-- replace this content with what applies to the app, if the app requires creating specific datasets.

*AppName* needs *three* datasets for host path storage volume configurations:
* ***config*** to use as the ***Configuration*** storage volume.
* ***data*** to use as the ***User Data*** storage volume.
* ***postgresdata*** to use as the ***Postgres Data*** storage volume.

If you group these datasets under a parent dataset named *AppName*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the ***netdata*** user.
If the app includes postgres storage volumes, include the following information 
If the app installation wizard cannot set up the ACL type or correctly add user permissions for the postgres storage volume,
you must configure these outside the install wizard using the **Add Dataset** and **Edit ACL** screens.
When adding the ***postgresdata*** dataset set it up with a POSIX ACL, and add the ***netdata*** user as the owner user and group with full control permissions. 

If you have a postgres dataset, also include information in the Before You Begin section about adding the dataset and permissions.

See the instructions in the [Before You Begin](#before-you-begin) section for more on creating both the parent and postgres_data datasets and configuring the ACL permissions for each.-->

{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

See **Mounting an SMB Share** below for details.

{{< expand "Creating App Datasets" "v" >}}
To create the *AppName* app datasets, go to **Datasets**, select the dataset you want to use as the parent dataset, then click **Add Dataset** to [add a dataset]({{< relref "DatasetsScale.md" >}}).
In this example, we create the *AppName* datasets under the root parent dataset ***tank***.

Enter ***AppName*** in **Name**, and select **Apps** as the **Dataset Preset**.
Click **Advanced Options** if you want to make any other setting changes. Click **Save**.
When prompted, select **Return to Pool List** to configure permissions later after adding the other three datasets, or open the ACL editor to edit ACL permissions immediately after adding the dataset.

Next, select the ***AppName*** dataset, and click **Add Dataset** to add the first child dataset.
Enter ***config*** in **Name** and select **Apps** as the **Dataset Preset**.
Click **Advanced Options** if you want to make any other setting changes. Click **Save**.

Repeat this to add the other child datasets to the ***AppName*** parent dataset.
When finished you should have the ***AppName*** parent dataset with *three* child datasets under it. Our example paths are:
* */mnt/tank/appname/****config***
* */mnt/tank/appname/****data***
* */mnt/tank/appname/****postgresdata***
<!-- replace the image with one for the app, or eliminate the image if there is no reason to show it:

{{< trueimage src="/images/SCALE/Apps/AppsAddNextcloudDatasets.png" alt="Add Nextcloud Storage" id="Add Nextcloud Storage" >}}
-->
{{< /expand >}}

#### ACL and ACE Settings

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

#### Mounting an SMB Share

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resource Configuration
<!-- replace the image with one for the app
{{< trueimage src="/images/SCALE/Apps/InstallNextcloudResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}

## Troubleshooting Tips
<!-- include this section if you want to include tips to resolve known deployment issues -->

<!-- /END TEMPLATE -->