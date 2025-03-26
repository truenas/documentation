---
title: "Storj"
description: "Provides information on setting up the Storj node app on your TrueNAS system."
weight: 
aliases:
 - /scale/scaletutorials/apps/addstorjnode/
 - /scale/scaletutorials/apps/chartapps/addstorjnode/
 - /scale/scaletutorials/apps/stableapps/addstorjnode/
 - /truenasapps/communityapps/addstorjnode/
 - /truenasapps/stableapps/addstorjnode/
tags:
- apps
- crypto
keywords:
- nas data storage
- software storage solutions
---

{{< github-content 
    path="trains/stable/storj/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

{{< include file="/static/includes/CommunityAppsLegacy.md" >}}

Storj is an open-source decentralized cloud storage (DCS) platform.
TrueNAS partners with Storj in two areas, the [cloud service]({{< relref "AddCloudCredentials.md" >}}) offering and as storage media for cloud service data through the Storj node application.

Installing the Storj node app allows you to configure your system as a storage node, and to rent out unused system storage capacity and bandwidth to other Storj cloud service users.

{{< hint type=info >}}
Storj offers features such as their multi-tenant solution architecture pattern that is used on the customer side and their website service.
Using TrueNAS in a multi-tenant solution architecture pattern is outside the scope of this document and the Storj node application.
Contact Storj support for assistance with their products and services not covered in the TrueNAS articles.
{{< /hint >}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## Before You Begin

Before you can configure your system to act as a Storj node:

* Review the Storj node hardware and bandwidth considerations at [Storj Node](https://www.storj.io/node).

* Update [TrueNAS]({{< relref "UpdateSCALE.md" >}}) to the latest public release.

* Create a [wallet address](#getting-a-wallet-address).

* Obtain a [Storj authentication token](#obtaining-an-authentication-token-for-storj).

* [Configure your router and firewall](#configuring-the-router-and-firewall).

* [Create a publicly-available domain name](#creating-a-ddns-host-name) to access the Storj application. Point this to your router public IP address.

* [Create a Storj identity and authorize it](https://docs.storj.io/node/dependencies/identity) for every node.

  Every node must have a unique identifier on the network. Use NFS/SMB shares or a file transfer service such as FTP to upload the credentials generated.
  If the identity is not present in the storage directory, it generates and authorizes one automatically.
  This can take a long time and consume system resources while it generates one.

* Prepare TrueNAS for the app installation by [creating the datasets](#creating-the-storj-datasets-on-truenas) for the application storage, and a new user if not using the default apps user.

   Create a parent dataset, such as *storj-node* and then the two storage datasets (**identity** and **data**) under it.
   Select **apps** as the **Dataset Preset** for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.

   If not using the default user **apps** (568) as the assigned user and group, go to **Credentials > Local User**, click **Add** and create the new user.
   Make sure the user has read/write/execute privileges. If you have an existing admin user on your system with the right permissions, you make that user the app user.

   If using ports other than the assigned default ports (**20909** and **28967**), go to [default port list]({{< relref "/solutions/optimizations/security.md #truenas-default-ports" >}}) for a list of available or unavailable port numbers to verify the port numbers you want to use are available options.

   {{< hint type=info >}}
   Earlier releases of TrueNAS used port 20988 for in and outbound traffic. This port assignment changed in later releases to 28967.
   {{< /hint >}}

* [Install the Storj application](#installing-the-storj-app) in TrueNAS.

Storj provides a [Quickstart Node Setup Guide](https://docs.storj.io/node/setup) with step-by-step instructions to help users create a Storj node.

## Getting a Wallet Address

Create a wallet address using any crypto wallet provider such as kraken.com, coinbase.com, Bitcoin Wallet, etc.
If you already have a wallet for another crypto-currency application, you can use the existing wallet.

See [Storj Wallet Configuration](https://support.storj.io/hc/en-us/articles/360026611692-How-do-I-hold-STORJ-What-is-a-valid-address-or-compatible-wallet-).

Special considerations regarding how to protect and manage a wallet are outside the scope of this article.

## Obtaining an Authentication Token for Storj

Open a browser window and go to Storj [Get an Authorization Token](https://docs.storj.io/node/get-started/auth-token).
Enter an email address, select **I'm not a robot**, then click **Continue**.

{{< trueimage src="/images/SCALE/Login/StorjHostaNode.png" alt="Storj Host a Node" id="Storj Host a Node" >}}

Copy the auth token to use later in this procedure. Keep the token in a secure location.

## Configuring the Router and Firewall

To allow the Storj application to communicate with Storj and other nodes, configure your router with port forwarding and the firewall to allow these ports to communicate externally:

1. Add a new port forwarding rule to your router for:

   * 28967 for both TCP and UDP protocols P2P communication
   * 7777 for outgoing communication with the satellites
   * 8888 for outgoing communication while creating and signing the identities.

2. Enter the internal IP address of your TrueNAS system in **Destination Device**.

3. Enter **28967** in **Public** and **Private** ports for both **TCP** and **UDP** for the **Protocol**.

With the TrueNAS system up and running, check your open port using something like https://www.yougetsignal.com/tools/open-ports/.
If your port forwarding is working, port 28967 is open.

This enables QUIC, a protocol based on UDP that provides more efficient internet connection usage with both parallel uploads and downloads.

Alternatively, use a dynamic DNS (DDNS) service such as NoIP to [create a host name](#creating-a-ddns-host-name) if you do not have a static IP address for the system nodes.

## Creating a DDNS Host Name

Create a DDNS host name that points to your router WAN IP address, and provide a domain name to use for accessing the Storj application.
You can use a dynamic DNS service that allows you to set up a DDNS host name.
You can use a service such as NoIP to create a domain name (i.e., *name.ddns.net*) and then point it at the WAN IP address of your router.

To verify it works, use <code>nslookup <i>name.ddns.net</i></code> where <code><i>name.ddns.net</i></code> is your DDNS host name.

## Creating the Storj Datasets on TrueNAS

[Create three new datasets]({{< relref "datasetsscale.md#creating-a-dataset" >}}), one parent with two child datasets nested under it.

Log into TrueNAS then go to **Datasets** and click **Add Dataset** to open the **Add Dataset** screen.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetNameAndOptions.png" alt="Name and Options" id="Name and Options" >}}

1. Enter a name for the first dataset in **Name**. For example, *storj-node*, select **Apps** in **Dataset Preset**, then click **Save**.

2. Select the new dataset *storj-node*, click **Add Dataset** again to create a new child dataset. For example, **data**.
   Select **Apps** in **Dataset Preset**, then click **Save**.

3. Select the *storj-node* dataset again, click **Add Dataset** and create the second child dataset. For example, **identity**.
   Select **Apps** in **Dataset Preset**, then click **Save**.

   {{< trueimage src="/images/SCALE/Datasets/DatasetsDashboardStorjNodeNested.png" alt="Nested Datasets for Storj" id="Nested Datasets for Storj" >}}

The **Datasets** screen displays two nested datasets **data** and **identity** underneath the **storj-node** dataset.

### Setting the Dataset ACL

After adding each dataset you might be prompted to change the ACL permissions or to return to the **Datasets** screen.
You can modify the dataset permissions now, or wait to modify permissions when you add the dataset as a storage volume in the **Storage Configuration** section of the **Install Storj** wizard.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) for more information on changing permissions in TrueNAS.

## Installing the Storj App

Go to **Apps**, click on **Discover Apps**.
Either scroll down to the **Storj** application or begin typing **Storj** into the search field to locate the widget.

{{< trueimage src="/images/SCALE/Apps/LocateStorjAppWidget.png" alt="Locate Storj App Widget" id="Locate Storj App Widget" >}}

Click on the widget to open the **Storj** information screen.

{{< trueimage src="/images/SCALE/Apps/StorjAppDetailsScreen.png" alt="Storj App Information Screen" id="Storj App Information Screen" >}}

Click **Install** to open the **Install Storj** app configuration wizard.

{{< trueimage src="/images/SCALE/Apps/InstallStorjAppScreen.png" alt="Install TrueNAS Storj App" id="Install TrueNAS Storj App" >}}

Scroll down to each section or click the navigation menu item on the right of the screen to jump to that section.

Accept the default name or enter a new name for your Storj application if you prefer.
Enter a name that consists of, and begins or ends with lowercase alphanumeric characters.
Do not use a hyphen as the first or last character. For example, *storjnode*, or *storj-node*, but not *-storjnode* or *storjnode-*.

Do not change the **Version**.
TrueNAS alerts you when a new version is available for deployed apps, and allows you to update through the click of a button on the **Installed** application screen.

1. Enter the **Storj Configuration** settings:

   a. [Enter the wallet address](#getting-a-wallet-address) in **Wallet** in the **Storj Configuration** section.

   {{< trueimage src="/images/SCALE/Apps/InstallStojConfigurationScreen.png" alt="Storj Configuration Settings" id="Storj Configuration Settings" >}}

   Select either **zkSync** or **zkSync Era** or both if you want to uses these wallet optional flags.

   b. Enter the [authentication token copied from Storj](#obtaining-an-authentication-token-for-storj) in **Auth Token**.

   c. Enter the email address used when you obtained the token in **Email**.

   d. Enter the [storage domain](#creating-a-ddns-host-name) (i.e., the public network DNS name) added for Storj in **Domain Address**.
   If using Dynamic DNS (DDNS), enter that name here as well. For example, *name.ddns.net*.

   e. Accept the default values for **Grace Period** and **Storage Size** unless you want to set different parameters for the rented storage.

   f. Click **Add** to show **Additional Environmental Variables** fields. These are optional settings.
   The **Install Storj** wizard includes all required settings to deploy the Storj node application.

2. Accept the default values in the **User ID** and **Group ID**.
   The default user **apps** (**568**) has the read, write, and execute permissions the application owner requires.
   If you created a new user for this app, enter the UI for that user in both the **User ID** and **Group ID** fields.

3. Accept the default values in the **Advanced Pod Settings** section unless you want to use advanced DNS configuration settings.
   Accept the default ports in **Network Configuration**.

   {{< trueimage src="/images/SCALE/Apps/InstallStorjNetworkConfig.png" alt="Storj Network Settings" id="Storj Network Settings" >}}

4. Accept the default **Network Configuration** settings.
   If you want to use different ports, check the [default port list]({{< relref "/solutions/optimizations/security.md #truenas-default-ports" >}}) for a list of available or unavailable port numbers.
   Leave **Host Network** unselected.

5. Configure the **Storage Configuration** settings.
   You can use the default **ixVolume** option to allow TrueNAS to create the data storage volume or select **Host Path** to select the path to the new **data** dataset created earlier in this document.

   {{< trueimage src="/images/SCALE/Apps/InstallStorjStorageACLEntry.png" alt="Add ACL Entries to a Dataset" id="Add ACL Entries to a Dataset" >}}

   To modify the dataset permissions, select **Enable ACL** to show the option to create an ACL entry to customize the dataset permissions.
   {{< hint type-info >}}
   The **data** dataset does not require execute permissions, just read and write.
   If you add an ACE (ACL entry) for this dataset, you do not need to grant execute permissions for the user added for this dataset.
   {{< /hint >}}

   Repeat this for the **identity** dataset. Select **Host Path** in the **Storj Identity Storage > Type** field then enter or browse to select the mount path for the existing dataset.

   If you created additional datasets for other purposes and want to add that additional storage, click **Add** to the right of **Additional Storage Volumes** to show another set of storage options.
   The additional storage options include the **ixVolume** and **Host Path** options, and the option to create an **SMB share** volume.

   Setting up an SMB share option in storage you rent out to other Storj cloud service customers is not recommended.

6. Review the **Resource Configuration** settings.
   Accept the default values or enter new CPU and memory values.
   By default, this application is limited to use no more than 4 CPU cores and 8 gibibytes available memory.
   The application might use considerably less system resources.

   To customize the CPU and memory allocated to the container uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
   Default is 4000m, which means the app is able to use 4 cores.

   Accept the default value 8Gi allocated memory or enter a new limit in bytes.
   Enter a plain integer followed by the measurement suffix, for example 4G or 123Mi.

7. Click **Install**.
   The system opens the **Installed** applications screen with the Storj app in the **Deploying** state.
   When the installation completes it changes to **Running**.

### Using the Web Portal

Click **Web Portal** on the **Application Info** widget to open the Storj web interface.

The time required to install the Storj App varies depending on your hardware and network configuration.

The Storj node dashboard displays stats for the storage node.
These could include bandwidth utilization, total disk space, and disk space used for the month.
Payout information is also provided.
