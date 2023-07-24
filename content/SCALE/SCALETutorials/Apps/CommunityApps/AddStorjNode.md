---
title: "Deploying a Storj Node"
description: "Provides information on the steps to set up a Storj node on your TrueNAS SCALE system."
weight: 
aliases:
 - /scale/scaletutorials/apps/addstorjnode/
tags:
- scalestorjapp
---

{{< toc >}}

Storj is an open-source decentralized cloud storage (DCS) platform. 
Storj permits a computer running this software to configure the system as a node and to rent unused system storage capacity and bandwidth to other users. 

## Before You Begin

Before you can configure your system to act as a Storj node:

1. Review the Storj node hardware and bandwidth considerations at [Storj Node](https://www.storj.io/node).

2. Update [TrueNAS SCALE]({{< relref "UpdateSCALE.md" >}}) to the latest public release.

3. Create a [wallet address](#getting-a-wallet-address). 

4. Generate a [Storj authentication token](#generating-an-authentication-token-for-storj).

5. Configure your router and firewall.
   Open ports on your router and configure port forwarding. Configure firewall rules to [allow access for these ports](#configuring-the-router-and-firewall).
   * Default 20988
   * Open 28967 for both TCP and UDP. 
   * Open ports 7777 and 8888 for outbound communication.

   Alternatively, use a dynamic DNS (DDNS) service such as NoIP to to [create a host name](#creating-a-ddns-host-name) if you do not have a static IP address for the system nodes. 

6. Create a publicly-available domain name to access the Storj application. Point this to your router public IP address.

7. [Create a Storj identity and authorize it](https://docs.storj.io/node/dependencies/identity) for every node. 
   Every node must have a unique identifier on the network. Use NFS/SMB shares or or a file transfer service such as FTP to upload the credentials generated.
   If the identity is not present on the storage directory, it generates and authorizes one automatically. 
   This can take a long time and consume resources of the system while it generates one.

8. [Install the Storj application](#installing-the-storj-app) in SCALE.

Storj provides a [Quickstart Node Setup Guide](https://docs.storj.io/node/setup) with step-by-step instructions to help users create a Storj node.

## Getting a Wallet Address

Use Google Chrome MetaMask extension to create a wallet address, or if you already have one, you can use the exiting wallet. 
See [Storj Wallet Configuration](https://support.storj.io/hc/en-us/articles/360026611692-How-do-I-hold-STORJ-What-is-a-valid-address-or-compatible-wallet-). 
   
Special considerations regarding how to protect and manage a wallet are outside the scope of this article.

## Generating an Authentication Token for Storj

Open a browser window and go to [Storj Host a Node](https://www.storj.io/host-a-node). 
Enter an email address to associate with the account, select the **I'm not a robot** checkbox, then click **Continue**.

{{< trueimage src="/images/SCALE/22.12/StorjHostaNode.png" alt="Storj Host a Node" id="1: Storj Host a Node" >}}

Copy the auth token to use later in this procedure. Keep this token in a secure location.

## Configuring the Router and Firewall
To allow the Storj application to communicate with Storj and the nodes, configure your router with port forwarding and the firewall to allow these ports to communicate externally:

1. Add a new port forwarding rule to your router for:
   * 28967 for both TCP and UDP protocols
   * 7777 for outgoing communication with the satellites
   * 8888 for outgoing communication while creating and signing the identities.
2. Enter the internal IP address of your TrueNAS system in **Destination Device**. 
3. Enter **20988** in **Public** and **Private** ports for both **TCP** and **UDP** for the **Protocol**. 

With the TrueNAS system up and running, then check your open port using something like https://www.yougetsignal.com/tools/open-ports/. If your port forwarding is working, port 20988 is open.

This enables QUIC, which is a protocol based on UDP that provides more efficient usage of the Internet connection with both parallel uploads and downloads.

## Creating a DDNS Host Name

Create a DDNS host name that points to your router WAN IP address, and provide a domain name to use for access the Storj application. 
You can use a dynamic DNS service that allows you to set up a DDNS host name. You can use a service such as NoIP to create a domain name (i.e., *name.ddns.net*) and then point it at the WAN IP address of your router.

Use <code>nislookup <i>name.ddns.net</i></code> to verfiy it works.

## Creating the Storj Datasets on TrueNAS SCALE

Create three new datasets, one a parent to two child datasets nested under it. 

1. Log into TrueNAS SCALE, then go to **Datasets** and click **Add Dataset** to open the **Add Dataset** screen.

{{< trueimage src="/images/SCALE/22.12/AddDatasetStorjSCALE.png" alt="Add Dataset Storj SCALE" id="2: Add Dataset Storj SCALE" >}}

2. Enter a name for the first dataset in **Name**. For example, *storj-node*, and click **Save**. 

3. Select the new dataset *storj-node*, click **Add Dataset** again to create a new child dataset. For example, *config*.

4. Click **Save**.

5. Select the *storj-node* dataset again, click **Add Dataset** and create the second child dataset. For example, *identity*.

6. Click **Save**.

{{< trueimage src="/images/SCALE/22.12/DatasetsDashboardStorjNodeNested.png" alt="Nested Dataset Storj SCALE" id="3: Nested Dataset Storj SCALE" >}}

TrueNAS displays two nested datasets *config* and *identity* underneath the *storj-node* dataset. 

## Installing the Storj App

Go to **Apps**, click on **Available Applications**, then scroll down to the **Storj** application, and click **Install** to open the **Storj** configuration wizard.

{{< trueimage src="/images/SCALE/22.12/InstallApplicationsStorjSCALE.png" alt="Install Storj App SCALE" id="4: Install Storj App SCALE" >}}

1. Accept the default name or enter a new name for your Storj application. 
   
   {{< hint type=note >}}
   You can enter a name for the Storj app using lowercase alphanumeric characters that begin and end with an alphanumeric characters. 
   Do not use a hyphenas the first or last character. For example, *storjnode*, or *storj-node*, but not *-storjnode* or *storjnode-*. 
   {{< /hint >}}

{{< trueimage src="/images/SCALE/22.12/InstallStorjAppNameSCALE.png" alt="Name Storj App SCALEL" id="5: Name Storj App SCALE" >}}

2. [Enter the wallet address](#getting-a-wallet-address) in **Configure Wallet for Storj**.

{{< trueimage src="/images/SCALE/22.12/InstallStorjAppConfigSCALE.png" alt="Config Storj App SCALE" id="6: Config Storj App SCALE" >}}

3. Enter the [authentication token copied from Storj](#generating-an-authentication-token-for-storj) in **Configure Auth token for Storj Node**. 
   Enter the email address associated with the token in **Configure Email for Storj**.

4. Enter the [storage domain](#creating-a-ddns-host-name) (i.e., the public network DNS name) added for Storj in **Add Your Storage Domain for Storj**. 
   If using Dynamic DNS (DDNS), enter that name here as well. For example, *name.ddns.net*.

5. Accept the default values in **Owner User ID** and **Owner Group ID**. Either accept the default or change the value in **Termination Grace Period**.

6. Configure the storage size (in GB) you want to share. Enter the value in **Configure Storage Size You Want to Share in GB's**.

{{< trueimage src="/images/SCALE/22.12/InstallStorjAppStorageSCALE.png" alt="Allocate Storage Storj App SCALE" id="7: Allocate Storage Storj App SCALE" >}}

7. Enter the host paths for the [new datasets created for the Storj](#creating-the-storj-datasets-on-truenas-scale) application. 
   Select **Enable Custom Host Path for Storj Configuration Volume** and browse to the newly created dataset (*config*). 
   Next, select **Configure Identity Volume for Storage Node** and browse to the second newly created dataset (*identity*). 

8. Enter the web port 28967 in **Web Port for Storj**, and 20988 in **Node Port for Storj**.

{{< trueimage src="/images/SCALE/22.12/InstallStorjAppNetworkingSCALE.png" alt="Network Settings Storj App SCALE" id="8: Network Settings Storj App SCALE" >}}

9. Review your entries and then click **Save**.

The time required to install the Storj App varies depending on your hardware and network configuration. 
When complete, the **Installed Applications** screen displays the Storj app with the status of active. 

Enviromental variables are optional. 
If you want to include additional variables, see [Storj Environment Variables](https://storj.github.io/core/tutorial-environment-variables.html) for a list. 
Click **Add** for each variable you want to add. 

### Using the Web Portal

Click the **Web Portal** button to view additional details about the application.

The Storj Node dashboard displays stats for the storage node. These could include bandwidth utilization, total disk space, and disk space used for the month. 
Payout information is also provided.

{{< taglist tag="scalestorjapp" limit="10" >}}
