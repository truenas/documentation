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

## How to Use this Template

Click **Edit Page** above or locate the Markdown template at [`content/resources/AppArticleTemplate.md`](https://github.com/truenas/apps-web/blob/main/content/resources/AppArticleTemplate.md) in the [TrueNAS Apps Market Repository](https://github.com/truenas/apps-web).

Copy the template content into a new Markdown file under `content/resources/` in your fork of the repository to begin writing a tutorial for a TrueNAS application. If the tutorial corresponds to an existing catalog app, update the related `content/catalog/*.md` file to link to your new resource.

Detailed template instructions are commented in the Markdown source but do not appear in the rendered version of the article.

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

Refer to the [Contributing to Apps]({{< ref "/contributing/applications" >}}) article for more information on using the template. -->
<!-- /END GENERAL INSTRUCTIONS -->
---
<!-- BEGIN TEMPLATE -->

<!-- BEGIN FRONTMATTER -->
<!-- If creating a new app tutorial instead of modifying the existing frontmatter at the top of this template article, uncomment and include the following frontmatter, including the three hyphens (---) before and after the text.
Modify AppName and keywords to reflect the app you are documenting. Replace AppName with the name of the app you are documenting.
Leave weight undefined to allow for alphabetical sorting.
tags are search tags for internal Docs Hub searches.
keywords are search tags for the article to assist with Internet searches. -->
<!--
---
title: "AppName"
description: "Provides installation instructions for the AppName application in TrueNAS."
weight:
aliases:
tags:
- apps
keywords:
- keyword1
- keyword2
---
-->
<!-- /END FRONTMATTER -->

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
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<!-- Use the style="margin-left: 33px" tags for this and other indicated elements to indent them in line with the indented snippet text in the rendered article.
Replace Markdown tags with html tags as Markdown tags do not render if you use the <div></div> and <p></p> tags. -->
<!-- replace the image path and name
<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/PlexDetailsScreen.png" alt="Plex App Details Screen" id="Plex App Details Screen" >}}</div>
-->

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<!-- Include this paragraph to detail the datasets for host path storage volumes. Change the names of the datasets to suit what is expected for the app.
NOTE: Include the HTML styling to align the indented paragraph with the bullet list in the snippet above. If only indenting one line or paragraph you can use the <p>paragraph</p> tabs with the indent information. If adding several paragraphs, and image code or expand section use the <div>sectionIndent</div> with the indent information -->
  <p style="margin-left: 33px">Create a parent dataset, such as <i>appName</i>, and then the storage datasets (<b><i>config</i></b> and <b><i>data</i></b>) under it.
  Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.</p>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

<!-- if the app uses postgres storage volumes, include this content
<div style="margin-left: 33px">You can modify dataset ACLs at the time of creation, or later in the app.
  Adding ACL permissions in the installation wizard is the recommended method.

  {{< include file="/static/includes/apps/InstallWizardPostgresStorageAutomaticPermissions.md" >}}</div>
 -->
 
<!-- Include this snippet and a modified version of the indented text if the app requires setting up a certificate.
If the Install wizard does not include the certificate field, do not include this snippet or content. -->

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}} 

  <p style="margin-left: 33px">Adding a certificate is optional but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for Nextcloud. A certificate is not required to deploy the application.</p>

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
<!-- Change the name of the image in the path below to include the screenshot, if including the image of the Install AppName screen showing the Application Name section and the wizard ToC on the right side of the screen:
{{< trueimage src="/images/SCALE/Apps/InstallAppNameScreen.png" alt="Install *AppName* Screen" id="Install *AppName* Screen" >}} -->

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

<!-- Enter the required steps/instructions to configure the app. You can use a numbered procedure or paragraph conversational style procedure to convey the instructions the reader needs to follow. 
Enter settings in the order the reader encounters them or the order settings should be entered.
If following the default Install Wizard, enter the required App Configuration, Network Configuration, Storage Configuration, and Resource Configuration steps. -->
Enter the ***App* Configuration** settings.
<!--Only describe the required app configuration settings. Refer to the [*App* Configuration](#appname-configuration-settings) section below for more information.  -->
The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).
<!-- example text for app configuration sections: 
Accept the default values in both **User and Group Configuration** and **Network Configuration**.
(Optional) If you created a new user to administer apps, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.

Do not select **Host Network** if it is not selected. If checkmarked, select to clear it.-->

Add your **Storage Configuration** settings.

Set **Type** to **Host Path (Path that already exists on the system)** for ***Data Storage***.
Select **Enable ACL**, and then enter or browse to select the ***data*** dataset to populate the **Host Path** field.
<!-- replace image with the path to the image you want to add:
{{< trueimage src="/images/SCALE/Apps/InstallPlexStorageConfigDataACLandACE.png" alt="Add Plex Data Storage" id="Add Plex Data Storage" >}}-->

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
Set **ID Type** to **Entry is for a USER**, enter the ***0*** in **ID**, and give it full control permissions.
For example, add the ***0*** user, and give each **FULL_CONTROL Access**.
<!-- if there are more than one user IDs, include "Click **Add** again to enter the user information for the next user.">

Select **Force Flag** to allow upgrading the app when the dataset has existing data.

Repeat the storage steps above each additional storage volume.

To configure the ***appName* Postgres Data Storage** host path, do not select **Enable ACL**!
Set **Type** to **Host Path (Path that already exists on the system)**, then enter or browse to select the **postgres_data** dataset to populate the **Host Path** field.
Select **Automatic Permissions**. This does not show if you selected **Edit ACL**.

{{< trueimage src="/images/SCALE/Apps/InstallWizardPostgresDatasetAutomaticPermissions.png" alt="Postgres Storage Automatic Permissions" id="Postgres Storage Automatic Permissions" >}}

See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

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
### User and Group Configuration <!-- Optional section, include only if the Install Wizard has this section -->
<!-- replace the image path and name:
{{< trueimage src="/images/SCALE/Apps/InstallPlexUserAndGroupConfig.png" alt="Plex User and Group Configuration Settings" id="Plex User and Group Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration
The default web port for *AppName* is ***30027***.
<!-- include the snippets that apply. Remove those that do not apply to the settings in the app Network Configuration section. -->
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}
<!-- include the certificate snippet where the Install wizard shows it, which is most likely in the Network Configuration section but could be in the AppName Configuration section in other tutorials -->
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration
TrueNAS provides two options for storage volumes: ixVolumes and host paths. 
{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}
<!-- replace this content with what applies to the app, if the app requires creating specific datasets, and if the app uses postgres dataset storage that might require special handling.

*AppName* needs *three* datasets for host path storage volume configurations:
* ***config*** to use as the ***Configuration*** storage volume.
* ***data*** to use as the ***User Data*** storage volume.
* ***postgresdata*** to use as the ***Postgres Data*** storage volume.

If you nest these datasets under a parent dataset named *nextcloud*, you can create this nextcloud dataset with the **Dataset Preset** set to **Generic** or **Apps**.
You can configure the ACL for this dataset from the **Permissions** widget on the **Datasets** screen.
If the app has postgres storage volumes, the process is easier and less prone to permissions errors if you use the **Automatic Permissions** option in the postgres storage volume section of the install Wizard. 

See the instructions in the [Before You Begin](#before-you-begin) section for more on creating both the parent and postgres_data datasets and configuring the ACL permissions for each.-->
You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

<!-- replace the snippet with the text in the snippet if the additional storage options include temporary directory options or other storage choices. We might need to create a new snippet for those instances if they are the same in other app install wizards. -->
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install *App*** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}
<!-- replace the UIDs in the section below with the user IDs or run as user ID. Include any other app-specific user information. This might become a snippet. -->
{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, then scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For *Netdata*, the run-as users is **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration <!-- Optional section. Remove if not included in the install wizard.-->

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}

### Resources Configuration
<!-- replace the image with one for the app
{{< trueimage src="/images/SCALE/Apps/InstallNextcloudResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
<!-- include this snippet if the app Install wizard includes the GPU settings -->
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}

## Troubleshooting Tips
<!-- include this section if you want to include tips to resolve known deployment issues -->

<!-- /END TEMPLATE -->
