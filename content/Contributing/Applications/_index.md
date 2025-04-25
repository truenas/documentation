---
title: "Contributing to Apps"
description: "Information on requesting new apps, reporting issues with or making changes to existing apps."
weight: 20
tags:
- contributing
- issues
- support
- apps
aliases:
- /contributing/documentation/appcontributions/
---

We welcome community user contributions, issue reporting, and suggestions for new features and apps to create the best possible TrueNAS app user experience!

## App Updates and Releases

Application maintenance is independent of TrueNAS version release cycles.
App version information, features, configuration options, and installation behavior during access might vary from those in documented tutorials.

TrueNAS apps show the **Update** badge and button on any deployed application instance on the **Installed** application screen when a new version is available.
Users can apply the update(s) individually or collectively and at a convenient time based on needs.

To see currently available apps, go to **Apps** and click **Discover Apps** or visit the [TrueNAS Apps repository](https://github.com/truenas/apps) on GitHub.

## Contributing to TrueNAS Application Catalogs

Users can submit changes to an existing application catalogs through:

### Contributing Applications

The Apps catalog is open for contributions!
For instructions on how to locally develop and test new applications, see the [contributors guide](https://github.com/truenas/apps/blob/master/CONTRIBUTIONS.md) on GitHub.

### Participating in Github Discussions

Questions on the development of applications?
Please head over to the [discussions](https://github.com/truenas/apps/discussions) page to ask questions and collaborate with other App Developers.

### Community Forum Feature Requests

To request an application or general Apps service feature change, go to the [TrueNAS Community Forum](https://forums.truenas.com/), and click **Feature Request**.
Read the **About the Feature Requests category - README First** topic, then click **Open Draft** on the top right of the screen.
Populate the new request form with the relevant information for each section, **Problem/Justification**, **Impact**, and **User Story**.
The form guides you on populating these sections.
Click **Create Topic** to add your suggestion to the list of topics.

Users vote and comment on these suggestions.
TrueNAS team members actively monitor this channel and discusses the feasibility of each request both internally and in the forum posts.

If approved and requested to submit a PR to add the new application, submit a PR against the [TrueNAS/Community](https://github.com/truenas/charts/tree/master/community) repository.
Include the relevant files in the PR, including a ReadMe.txt file with any installation notes for TrueNAS developers.

## Contributing to TrueNAS Application Documentation

Community members can submit change requests or add new tutorials to the **Truenas Apps > Community Apps** tutorials section of the Documentation Hub.

For more information on submitting change requests, forking repos, and submitting PRs, see [Updating Content]({{< ref "/Contributing/Documentation/ContentUpdate" >}}).

### Submitting New Tutorial Articles

When submitting new tutorials or requesting changes to existing TrueNAS Documentation Hub application tutorials:
  
1. Create the PR against a forked copy of the [TrueNAS Documentation Hub public repository](https://github.com/truenas/documentation/tree/master).
  
2. Open the existing article file in the <file>/TrueNASApps/CommunityApps</file> directory of your local forked repository.

3. Add the new tutorial to the <file>CommunityApps</file> folder in your local copy of the repository if submitting a new tutorial.

4. Use the text editor of your choice to make changes to the [application tutorial template]({{< ref "/Contributing/Applications/AppArticleTemplate" >}}) as the basis for your new article.
  Article content is written in Commonmark Markdown.

5. (Optional) Save images in the **/documentation/static/images/scale/apps** folder of your local branch.

6. Submit the PR against the **Master** branch.

### Using the App Tutorial Template

Feel free to change standard article content by adding or removing sections to fit the app installation process.
Change the front matter <file>description:</file> parameter at the top of the article to suit the subject and content of the new tutorial.
Description text must not exceed 160 alphanumeric or special characters, including spaces between characters.
After updating content, delete commented-out sections providing instructions for using this template when they are no longer needed.
When documenting a **Community** train app, not delete any of the commented-out instructions in the COMMUNITY APP INTRO SNIPPETS section.

#### Formatting Tips for Content Development

Standard text emphasis:

* Apply **Bold** to UI elements seen on the screen, including field, button, and navigation option names.
  Use double asterisks preceding and following the name or text string to make it bold.
  Do not use bold in code strings.

* Apply *Italics* to any variable.
  Use single asterisks preceding and following the name or text string to make it italics.
  If using a variable in a code example, use the HTML tags (\<i>\</i>) and not the Markdown tags.

* Apply HTML file tags (<code>\<file>\</file></code>) when entering a path to a file or file name, for example <code>\<file>iso\</file></code>, which renders as <file>iso</file>.

* Apply HTML keyboard tags (<code>\<kbd>\</kbd></code>) to keys on a keyboard, for example <code>\<kbd>Enter\</kbd></code>, which renders as <kbd>Enter</kbd>.

When entering commands, command strings, or code blocks:

* Apply backticks(<code>\`\`</code>) or HTML <code>\<code>\</code></code> tags to format command strings or output, for example <code>\`string\`</code> or <code>\<code>string\</code></code>, which render as <code>string</code>.
  
* Apply HTML <code>\<code>\</code></code> tags to strings with variables.

  * Do not enclose variables in angle or square brackets as these can also be part of command syntax.

  * Do not enter variables in all caps unless the command requires entering the value in all caps.

To create a code block, either use three backticks (<code>```</code>) on the line before and after the content block, or use the HTML code tags.

#### Using the Apps Snippet Library

When creating your articles you can use the library of snippets that contain explanations of settings and configuration instructions for the various app Install Wizard settings in your submitted content.
The Technical Documentation team maintains these snippets, but you can submit change requests for these files just as with full articles if you find content that needs updating or changing.

The tutorial template includes the shortcode that calls these files into the app wizard sections of the Stable Apps and Enterprise Apps tutorials in the Documentation Hub.
To use snippets where the template does not have one, enter the include file shortcode where you want to call another snippet.
The shortcode to call snippet files is <code>{{\<include&nbsp;file="/static/includes/apps/snippetFileName.md">}}</code>, where *snippetFileName.md* is the name of the snippet file.

The following table shows the current list of snippet files.
{{< expand "App Tutorial Snippet Files" "v" >}}
Snippet files are located in the <file>/documentation/static/includes/apps</file> folder.
Not all snippet files in this folder apply to tutorial content.
Refer to the tables below for a list of snippet files with content about tutorial sections.
Open and read snippet files to determine where to use them in your tutorial.

**Community Apps General Snippets**
{{< truetable >}}
| File Name | Snippet Use and Content |
|-----------|-------------------------|
| CommunityApp.md | Introduces Community Apps section tutorials, and contributing content. |
| CommunityPleaseExpand.md | States the tutorial is incomplete or a placeholder needing further development. Use if you are proposing a partial expansion of the content, but further work is needed. |
| CommunityPleaseImprove.md | States the tutorial content is suspected to be out of date or inaccurate. Use if you suspect the Community app documentation is out of date, inaccurate, or needs further improvement. |
{{< /truetable >}}

**Before You Begin Snippets**
{{< truetable >}}
| File Name | Snippet Use and Content |
|-----------|-------------------------|
| BeforeYouBeginStableApps.md | Bullet point for adding the apps pool. Includes warning about choosing an encrypted pool for apps. |
| BeforeYouBeginRunAsUser.md | Bullet point describing where to find the run as user information, and includes a screenshot of the app information screen for the app being documented. |
| BeforeYouBegigAddAppDatasets.md | Bullet point for adding datasets for the app. Does does not include details on adding datasets as these vary by app. |
| BeforeYouBeginAddAppDatasetsProcedure.md | Procedure for correctly creating datasets for apps in an expand/collapse area. |
| InstallWizardPostgresStorageAutomaticPermissions.md | Information on configuring postgres and parent dataset permissions, added in the Before You Begin section but can also be added in the Understanding Application Wizard Settings. |
| BeforeYouBeginAddAppCertificate.md | Bullet point for adding a certificate if required for the app. Also include the AddingAppCertificate.md snippet with detailed instructions on adding a self-signed certificate. |
| AddingAppCertificate.md | Detailed set procedure on adding a self-signed certificate authority (CA) and certificate. |
| BeforeYouBeginAddNewUser.md | Single bullet point and procedure for adding a new user as a TrueNAS app administrator. |
{{< /truetable >}}

**Installing the App**
{{< truetable >}}
| File Name | Snippet Use and Content |
|-----------|---------------------|
| LocateAndOpenInstallWizard.md | Describes locating the app widget, and opening the install wizard for the app. |
| MultipleAppInstancesAndNaming.md | Describes adding more than one instance of the same app and naming it. For example, adding two stable or community app instances, or an enterprise and stable train version of the same app. |
| InstallWizardEnvironVariablesSettings.md | Details the Environment Variable settings. Can use this if the procedure requires adding environment variables, or leave the snippet in the Understanding App Install Wizard section and refer to it for more information. |
| InstallWizardAdvancedDNSSettings.md | Details the Advanced DNS setting options that might be included as part of the app configuration or network configuration settings. |
{{< /truetable >}}

**Understanding App Install Wizard Settings**
{{< truetable >}}
| Wizard Settings | File Name | Snippet Use and Content |
|---------|-----------|---------------------|
| App Name and Version | InstallWizardAppNameAndVersion.md | Details the **Application Name** and **Version** settings. |
| Advanced DNS | InstallWizardAdvancedDNSSettings.md | Details DNS option settings. Might be included as a Network Configuration or App Configuration setting option. |
| Environment Variables | InstallWizardEnvironVariablesSettings.md | Use in the Install Wizard Setting section, or if adding environment variables is required for configuring the app, use in the configuring the app procedure section. |
| Timezone | InstallWizardTimezoneSetting.md |  |
| Network (default ports) | InstallWizardDefaultPorts.md | Details changing the default port assignment. Can use this snippet in the Before You Begin and/or Installing the App sections, but is more suited to the section explaining the Network settings. |
| Host Network  | InstallWizardHostNetworkSettings.md | Details the **Host Network** setting in the Network Configuration section of the wizard. Use when the wizard includes this setting. |
| Certificate ID | InstallWizardCertificateSettings.md | Details **Certificate ID** settings, that might be optional and recommended, or required to deploy the app. Include this snippet if you used the two certificate snippets in the Before You Begin section. |
| Storage Configuration | InstallAppsStorageConfig.md | Adds the **Setting the Storage Volume Type** expand section detailing storage volume types, configuring host path storage volume ACL permissions using the **Enable ACL** and **ACL Entries** options. Does not cover specific datasets required by the app. |
| Storage Configuration | InstallAppsStorageConfig2.md | Adds the **Configuring Additional Storage Volumes** expand section detailing adding additional storage volumes, with a list of the **Additional Storage** types. |
| Storage ACL permissions | InstallWizardStorageACLConfig.md | Details on the Edit ACL and ACE Entries settings. Includes the **Configuring ACE Entries** expand detailing how to add ACE entries, default user IDs for apps, or postgres storage volumes. |
| Additional Storage SMB Option | InstallWizardStorageSMBOption.md | Details on the Additional Storage volume SMB share option. |
| Storage Temporary and tmpfs directories | InstallWizardStorageTemporaryAndTmpfs.md | Details on the **Temporary** and **Tmpfs** directory storage options that are available as primary and/or additional storage volume types, and when to use each. |
| Users and Groups | InstallWizardUserAndGroupConfig.md | Details user and group setting options. |
| Labels Configuration | InstallWizardLabelsConfiguration.md | Details on using Docker label-based configuration. |
| Resource Configuration | InstallWizardResourceConfig.md | Details CPU and memory setting options for all apps. If the app includes GPU passthrough, use with the InstallWizardGPUPassthrough.md snippet. |
| GPU Passthrough | InstallWizardGPUPassthrough.md | Details information on GPU settings if the app includes the GPU passthrough settings. Not present if the app does not detect a GPU device. |
{{< /truetable >}}
{{< /expand >}}

### Suggesting Edits to Existing Articles

Click **Edit page** at the top of the Documentation Hub article to suggest changes to an existing article.

Refer to the [Content Updates]({{< ref "/Contributing/Documentation/ContentUpdate" >}}) article for more details.
