---
title: "Elastic Search"
description: "Provides installation instructions for the Elastic Search application in TrueNAS."
weight:
aliases:
tags:
- apps
keywords:
- apps
- database
- generative ai
- security
- observability
---

Elastic Search is the distributed, RESTful search and analytics engine at the heart of the [Elastic Stack](https://www.elastic.co/guide/en/starting-with-the-elasticsearch-platform-and-its-solutions/current/stack-components.html).
The TrueNAS Elastic Search app allows you to configure and deploy a single Elasticsearch node.
You can install multiple instances to deploy additional nodes, however you must configure a [Custom App]({{< relref "/TruenasApps/UsingCustomApp.md" >}}) with the **Install via YAML** option to deploy a [multi-node cluster](https://www.elastic.co/guide/en/elasticsearch/reference/master/docker.html#docker-compose-file).

Elastic provides a basic primer, [What is Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/master/elasticsearch-intro-what-is-es.html), with further information about the app and its place within the Elastic Stack.

## Before You Begin

Prepare TrueNAS before installing the app by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/ElasticSearchDetailsScreen.png" alt="Elastic Search App Details Screen" id="Elastic Search App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

  <p style="margin-left: 33px">Create a storage dataset for Elastic Search Data Storage with a name such as <b><i>data</i></b>).
  Select <b>apps</b> as the <b>Dataset Preset</b> for this dataset.
  You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.</p>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}}

  <p style="margin-left: 33px">Adding a certificate is optional but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for Elastic Search. A certificate is not required to deploy the application.</p>

## Installing the Application

{{< hint info >}}
This basic procedure covers the required Elastic Search app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallElasticSearchScreen.png" alt="Install Elastic Search Screen" id="Install Elastic Search Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the **Elastic Search Configuration** settings.

Enter a password to use for the built-in `elastic` user.
Passwords must be at least six characters long.

Accept the default or enter a value in **Heap Size**.
[Elastic documentation](https://www.elastic.co/guide/en/elasticsearch/reference/8.15/advanced-configuration.html#set-jvm-heap-size) recommends setting the heap size to no more than 50% of the total memory visible to the container.

Accept the default value in **Node Name**.

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Accept the default values in **Network Configuration**.
See [Network Configuration](#network-configuration) for more details.

Leave **Host Network** unselected.

Add your **Storage Configuration** settings.

Set **Host Path (Path that already exists on the system)** in **Type** for **Elastic Search Data Storage**.
Select **Enable ACL**, and then enter or browse to and select the **data** dataset created above to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallElasticSearchStorageDataACLandACE.png" alt="Add Elastic Search Data Storage" id="Add Elastic Search Data Storage" >}}

Select **Add** to the right of **ACL Entries** for each user or group entry you want to add.
Add the user and group ID **1000**, and give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the storage steps above each additional storage volume.
See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**.

Click **Install**.
A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **elastic-search** app in the **Deploying** state.
Status changes to **Running** when ready to use.

Click **Web UI** on the **Application Info** widget to open the Elastic Search web portal screen, which displays information about the configured node.
This is the equivalent of running a `curl` check on the app port.

{{< trueimage src="/images/SCALE/Apps/ElasticSearchWebPortal.png" alt="Elastic Search Web Portal" id="Elastic Search Web Portal" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Elastic Search** installation wizard.
<!-- Customize these sections by adding all settings in each configuration section, and providing details on the settings including expected values to enter. 
Replace the *variables* with the appropriate name for the app, setting(s), dataset name(s), etc., in the following sections.
Refer to other updated tutorials for more examples of completing these sections. -->

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Elastic Search Configuration Settings
<!-- Customize this section with the settings in the configuration section, and details on values to enter for each setting. -->
Elastic Search configuration settings include setting up credentials, *APT packages* (previously referred to as the commands), the *host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule, and adding additional environment variables*.

If you have an existing Elastic Search account, add the credentials for that account in the **Admin User** and **Admin Password** fields.
If you do not have an existing account, enter the name and password you want to use to create the Elastic Search login credentials.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [Elastic Search documentation](URL for environment variables documentation provided in the app provider) for more information on environment variables.

<!-- Not all apps include the following section. If it does, include the following, customized for the app requirements. -->
### User and Group Configuration <!-- Optional section, include only if the Install Wizard has this section -->
<!-- replace the image path and name:
{{< trueimage src="/images/SCALE/Apps/InstallPlexUserAndGroupConfig.png" alt="Plex User and Group Configuration Settings" id="Plex User and Group Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration
The default web port for Elastic Search is ***30027***.
<!-- include the snippets that apply. Remove those that do not apply to the settings in the app Network Configuration section. -->
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}
<!-- include the certificate snippet where the Install wizard shows it, which is most likely in the Network Configuratin section but could be in the Elastic Search Configuration section in other tutorials -->
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration
TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}
<!-- replace this content with what applies to the app, if the app requires creating specific datasets, and if the app uses postgres dataset storage that might require special handling.

Elastic Search needs *three* datasets for host path storage volume configurations:
* ***config*** to use as the ***Configuration*** storage volume.
* ***data*** to use as the ***User Data*** storage volume.
* ***postgresdata*** to use as the ***Postgres Data*** storage volume.

If you group these datasets under a parent dataset named Elastic Search, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the ***netdata*** user.
If the app includes postgres storage volumes, include the following information 
If the app installation wizard cannot set up the ACL type or correctly add user permissions for the postgres storage volume,
you must configure these outside the install wizard using the **Add Dataset** and **Edit ACL** screens.
When adding the ***postgresdata*** dataset set it up with a POSIX ACL, and add the ***netdata*** user as the owner user and group with full control permissions. 

If you have a postgres dataset, also include information in the Before You Begin section about adding the dataset and permissions.

See the instructions in the [Before You Begin](#before-you-begin) section for more on creating both the parent and postgres_data datasets and configuring the ACL permissions for each.-->
You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

<!-- replace the snippet with the text in the snippet if the additional storage options include temporary directory options or other storage choices. We might need to create a new snippet for those instances if they are the same in other app install wizards. -->
{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install Netdata** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}
<!-- replace the UIDs in the section below with the user IDs or run as user ID -->
{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First select the dataset row, and scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Netdata, the run-as users is **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration <!-- Optional section. Remove if not included in the install wizard. change the name of the app, and add any information about the apps use of tags if that is the case.  -->
*Emby* uses metadata to add information to media files, such as where media files are saved, the language used, and parental controls.
*Emby* uses tags to add identification information to media files.

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}
<!-- replace the image with on for the app being documented 
{{< trueimage src="/images/SCALE/Apps/InstallEmbyLabelsConfig.png" alt="Labels Configuration Settings" id="Labels Configuration Settings" >}}-->

### Resources Configuration
<!-- replace the image with one for the app
{{< trueimage src="/images/SCALE/Apps/InstallNextcloudResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
<!-- include this snippet if the app Install wizard includes the GPU settings -->
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}

## Troubleshooting Tips
<!-- include this section if you want to include tips to resolve known deployment issues -->

<!-- /END TEMPLATE -->