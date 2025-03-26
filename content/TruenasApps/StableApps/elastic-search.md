---
title: "Elastic Search"
description: "Provides installation instructions for the Elastic Search application in TrueNAS."
weight:
aliases:
 - /truenasapps/stableapps/elasticsearch/
tags:
- apps
keywords:
- apps
- database
- generative ai
- security
- observability
---

{{< github-content 
    path="trains/stable/elastic-search/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

Elastic Search is the distributed, RESTful search and analytics engine at the heart of the [Elastic Stack](https://www.elastic.co/guide/en/starting-with-the-elasticsearch-platform-and-its-solutions/current/stack-components.html).
The TrueNAS Elastic Search app allows you to configure and deploy a single Elasticsearch node.
You can install multiple instances to deploy additional nodes, however you must configure a [Custom App]({{< relref "/TruenasApps/UsingCustomApp.md" >}}) with the **Install via YAML** option to deploy a [multi-node cluster](https://www.elastic.co/guide/en/elasticsearch/reference/master/docker.html#docker-compose-file).

This tutorial covers installing the TrueNAS Elastic Search app to deploy a node.
It does not detail management of the node or integrating it with other containers.
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

Enter a password to use for the built-in **elastic** user.
Passwords must be at least six characters long.

Accept the default or enter a value in **Heap Size**.
[Elastic documentation](https://www.elastic.co/guide/en/elasticsearch/reference/8.15/advanced-configuration.html#set-jvm-heap-size) recommends setting the heap size to no more than 50% of the total memory visible to the container.

Accept the default value in **Node Name**.

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Accept the default values in **Network Configuration**.
See [Network Configuration](#network-configuration) for more details.

Do not select **Host Network**.

Add your **Storage Configuration** settings.

Set **Host Path (Path that already exists on the system)** in **Type** for **Elastic Search Data Storage**.
Select **Enable ACL**, and then enter or browse to and select the **data** dataset created above to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallElasticSearchStorageDataACLandACE.png" alt="Add Elastic Search Data Storage" id="Add Elastic Search Data Storage" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
Enter the user and group ID **1000** and give each **FULL_CONTROL Access**.

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

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Elastic Search Configuration Settings

Elastic Search configuration settings include setting up credentials, naming the node, and setting the [heap size](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html), networking configuration, storage configuration, configuring labels and setting resource limits for the container.

If you have an existing Elastic Search account, add the credentials for that account in the **Admin User** and **Admin Password** fields.
If you do not have an existing account, enter the name and password you want to use to create the Elastic Search login credentials.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [Elastic Search documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html) for more information on environment variables.

Enter variables using [Elastic Search with Docker](https://www.elastic.co/guide/en/elasticsearch/reference/master/docker.html#docker-configuration-methods) syntax.

1. Change the setting name to uppercase
2. Prefix it with `ES_SETTING_`
3. Escape any underscores (`_`) by duplicating them
4. Convert all periods (`.`) to underscores (`_`)

For example, to set `bootstrap.memory_lock=true`, enter *ES_SETTING_BOOTSTRAP_MEMORY__LOCK* for **Name** and *true* for **Value**.

### Network Configuration

The default web port for Elastic Search is **30003**.
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

Elastic Search needs one dataset for host path storage volume configuration, with a name such as **data**, to use as the **Elastic Search Data Storage** volume.
Create this dataset before beginning the app installation wizard, as described in [Before You Begin](#before-you-begin).

If needed, you can add extra storage volumes at the time of installation or edit the application after it deploys.
Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Elastic Search** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First select the dataset row, and scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Elastic Search, the run-as user is **1000**.
Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallElasticSearchResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
