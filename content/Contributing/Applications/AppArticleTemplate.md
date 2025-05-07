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
title: "APP_NAME Deployment"
description: "Provides installation instructions for the APP_NAME application in TrueNAS."
train: "community"
tags:
- apps
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
<!-- Briefly list any steps required before installing the app.
Include things like setting up datasets, creating credentials, certificates, or accounts the app needs. Focus only on what’s essential.

Keep it short and app-specific. For example: -->

Before installing, prepare TrueNAS by completing any needed setup:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<!-- Dataset setup example -->
<p style="margin-left: 33px">Create a parent dataset like <i>appName</i>, then add <b><i>config</i></b> and <b><i>data</i></b> datasets beneath it.
Use the <b>apps</b> preset. Adjust ACLs now or when adding the dataset in the app.</p>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

<!-- Add this only if needed -->
{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}}

<p style="margin-left: 33px">Certificates are optional. You can create a self-signed certificate or import one if your app needs HTTPS.</p>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

<!-- Add any extra prerequisites specific to your app here -->

## Installing the Application

Use this procedure to install the *AppName* application on TrueNAS.

1. Go to **Apps** and click **Launch Docker Image**, or locate *AppName* in the catalog and click **Install**.
2. Enter an application name and select a version, if applicable.

### Configure Application Settings

- **App Configuration**: Enter required environment variables. Leave defaults unless the application requires specific changes.
- **Network Configuration**: Use default settings unless the application requires custom networking.
- **Storage Configuration**:
  - Set **Type** to **Host Path (Path that already exists on the system)**.
  - Browse to and select the appropriate dataset, such as `data` or `config`.
  - Enable ACL and assign full control to user `0`.
  - Repeat for each required volume.
  - For Postgres storage, do not enable ACL. Select **Automatic Permissions** instead.

### Configure Resource Settings

Use the default values for CPU and memory. Enable GPU if the application uses GPU resources.

Click **Install** to begin deployment. The application enters the **Deploying** state and changes to **Running** when deployment completes.

Access the application by clicking **Web Portal** in the **Application Info** widget.

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

*AppName* uses three datasets for host path storage volume configurations:

* **config** – for the **Configuration** storage volume  
* **data** – for the **User Data** storage volume  
* **postgres_data** – for the **Postgres Data** storage volume

Create a parent dataset named *nextcloud* and nest these datasets underneath it. Set the **Dataset Preset** to **Apps**.  
Configure the ACL for this dataset from the **Permissions** widget on the **Datasets** screen.

For apps with Postgres storage volumes, use the **Automatic Permissions** option in the **Postgres Data** storage section of the install wizard.  
This approach reduces the risk of permission errors.

See the [Before You Begin](#before-you-begin) section for more information about creating datasets and setting ACL permissions.

You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install *App*** wizard or later from the **Datasets** screen.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v" >}}
Select the dataset row, scroll to the **Permissions** widget, and click **Edit**. Change the **@owner** and **@group** values from **root** to the administrative user, then click apply for each. Add an ACL entry for the run-as user. For *Netdata*, the run-as user is **0** for **root**. Save the ACL before leaving the screen.
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
