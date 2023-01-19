---
title: "Setting Up a Storj Node"
description: "This article provides information on the steps to set up a Storj node on your TrueNAS SCALE system."
weight: 30
alias: /scale/scaletutorials/dataprotection/cloudsynctasks/
tags:
 - scalestorj
 - scalecloudsynctask
---

{{< toc >}}

## Prerequisites

Storj is an open-source Decentralized Cloud Storage (DCS) platform. Storj permits any computer running its software to be configured to rent that system's unused storage capacity and bandwidth to users. 

Before you can configure your system to act as a Storj node, the following steps must be completed:

* Update TrueNAS SCALE to the latest public release.

* Have a publicly available hostname pointing to your router's public IP address.

* Your router must support DDNS (Dynamic DNS).

* You must have a Storj wallet already set up. There are apps available to do this but there are security risks.

### Getting a Valid Storj Wallet Address
{{< expand "Click Here for More Information" "v" >}}
There are several methods available to use in order to create a Storj Eth Wallet address. The following example utilizes the MetaMask Chrome extension, but you can use any method you like:

Click on the MetaMask extension, and *Get Started.* You can either import an existing wallet using the seed phrase or create a new one. Click on *Create Wallet*, and then *I Agree*. Click on *No Thanks* in order to proceed. Click on *Account Details* and then copy the Eth Wallet address.
{{< /expand >}}
### Generate an Authentication Token for Storj

Open a browser window and go to [Storj Host a Node](https://www.storj.io/host-a-node). Enter an email address that you would like associated with the account. Complete the "I'm not a robot" reCAPTCHA. Click **Continue**.

Copy the auth token and keep it in a secure location.

![StorjHostaNode](/images/SCALE/22.12/StorjHostaNode.png "Storj Host a Node")

### DDNS Hostname

Provide a domain name with which you will access the Storj application. The DDNS hostname should point to your router WAN IP address.

### Port Forwarding
{{< expand "Click Here for More Information" "v" >}}
Your router should have a *Port Forward* section within which you can add a new rule. For the *Destination Device*, enter the internal IP address of your TrueNAS system. For the *Public* and *Private* ports, enter `20988`. Select both *TCP* and *UDP* for the *Protocol.* 

This enables *QUIC*, a protocol based on UDP that provides parallel uploads and downloads.

Your TrueNAS system must be up and running in order to check your open port. If your port forwarding is working, port 20988 is open. There are various tools available on the web you can use to check if the port is open.
{{< /expand >}}
## Create the Storj Datasets on TrueNAS SCALE

![DatasetsDashboardSCALE](/images/SCALE/22.12/DatasetsDashboardSCALE.png "SCALE Datasets Dashboard") 

Login to TrueNAS SCALE. In the Navigation menu at the left, click **Datasets**. The **Datasets** dashboard displays. With the System Dataset selected, click the **Add Dataset** button located on the right side of the dashboard. 

![AddDatasetStorjSCALE](/images/SCALE/22.12/AddDatasetStorjSCALE.png "Add Dataset Storj SCALE") 

The **Add Dataset** screen appears. In the **Name** field, enter a name for the first dataset to be created under the **System Dataset**. In this example, we entered `storj-node`.

Leave all other options at their defaults. Scroll down to the bottom and click **Save**. 

![DatasetsDashboardStorjNode](/images/SCALE/22.12/DatasetsDashboardStorjNode.png "Dataset Dashboard Storj SCALE")

Select the *storj-node* dataset you just created underneath the System Dataset. Click the **Add Dataset** button at the right side of the screen.

Name the new dataset. In our example, we entered `config`. Leave all other settings at their defaults, scroll down and click **Save**.

In the **Datasets Dashboard**, select the *storj-node* dataset again, and click the **Add Dataset** button at the right side of the screen.

Name the new dataset. In this example, we entered `identity`. Leave all other settings at their defaults, scroll down and click **Save**.

![DatasetsDashboardStorjNodeNested](/images/SCALE/22.12/DatasetsDashboardStorjNodeNested.png "Nested Dataset Storj SCALE") 

TrueNAS displays two nested datasets underneath the storj-node dataset. In this example, the nested datasets are *config* and *identity*.

## Install the Storj App on TrueNAS SCALE
{{< expand "Click Here for More Information" "v" >}}
### Application Name and Config


![InstallApplicationsStorjSCALE](/images/SCALE/22.12/InstallApplicationsStorjSCALE.png "Install Storj App SCALE") 

Click on **Apps** in the navigation menu of the SCALE UI. **Installed Applications** appears on the first menu tab. Click on the second tab to view the **Available Applications**. Find the Storj App, and click the **Install** button.

![InstallStorjAppNameSCALE](/images/SCALE/22.12/InstallStorjAppNameSCALE.png "Name Storj App SCALE") 

Enter a name for the Storj App. In this example, we entered `storjnode`.

The next steps relate to the Storj App configuration:

![InstallStorjAppConfigSCALE](/images/SCALE/22.12/InstallStorjAppConfigSCALE.png "Config Storj App SCALE")

**Configure Wallet for Storj**. Enter the Storj Eth Wallet address. 

**Configure Auth token for Storj Node**. Enter the Auth Token that you created for the Storj Node. 

**Configure Email for Storj**. Enter the email address you associated with the Auth Token created for the Storj Node. 

**Add Your Storage Domain for Storj**. Enter your storage domain for Storj, the public DNS name for your network. If you are using Dynamic DNS, enter that name here as well.

**Owner User ID**. The default is `568`.

**Owner Group ID**. The default is `568`.

**Storj Extra Environment Variables**. The default setting for this field is empty. To define additional environment variables, click the **Add** button.

![InstallStorjAppConfigExtraEnvVariablesSCALE](/images/SCALE/22.12/InstallStorjAppConfigExtraEnvVariablesSCALE.png "Config Extra Environment Variables Storj App SCALE")

### Determine How Much Local Storage to Allocate to Storage Node


![InstallStorjAppStorageSCALE](/images/SCALE/22.12/InstallStorjAppStorageSCALE.png "Allocate Storage Storj App SCALE")

In the **Configure Storage Size You Want to Share in GiBs**, enter the amount of space to dedicate to Storj.

Select the checkbox **Enable Custom Host Path for Storj Configuration Volume**. Browse to the host path by clicking on the arrow <span class="material-icons">chevron_right</span> next to the System Dataset Pool icon. A dropdown navigation menu appears. Select the newly created dataset (in our example: config). This path appears in the **Host Path for Storj Configuration Volume** field.

Next, select the checkbox **Configure Identity Volume for Storage Node**. Browse to the host path by clicking on the arrow <span class="material-icons">chevron_right</span> next to the System Dataset Pool icon. A dropdown navigation menu appears. Select the newly created dataset (in our example: identity). This path appears in the **Host Path for Storj Identity Volume** field.

By default, the **Extra Host Path Volumes** field is empty. Click the **Add** button to define a **Mount Path in Pod** and a **Host Path**.


![InstallStorjAppStorageExtraHostPathSCALE](/images/SCALE/22.12/InstallStorjAppStorageExtraHostPathSCALE.png "Storage Extra Host Path Storj App SCALE")

### Network Settings


![InstallStorjAppNetworkingSCALE](/images/SCALE/22.12/InstallStorjAppNetworkingSCALE.png "Network Settings Storj App SCALE")

Enter the web port in the **Web Port for Storj** field. In this example we are keeping the default setting `20909`.

Enter the node port in the **Node Port for Storj** field. In this example, we are keeping the default setting `20988`.

### Advanced DNS Settings


![InstallStorjAppAdvDNSSCALE](/images/SCALE/22.12/InstallStorjAppAdvDNSSCALE.png "Advanced DNS Settings Storj App SCALE")

Click the **Add** button to create advanced DNS settings. In this example, we are keeping the default settings and not entering any advanced DNS settings.

### Resource Limits


![InstallStorjAppResourceLimitsSCALE](/images/SCALE/22.12/InstallStorjAppResourceLimitsSCALE.png "Pod Resource Limits Storj App SCALE")

By default, **Enable Pod resource limits** checkbox is cleared. In this example we are keeping the default setting and not enabling Pod resource limits.


![InstallStorjAppResourceLimitsSelectedSCALE](/images/SCALE/22.12/InstallStorjAppResourceLimitsSelectedSCALE.png "Pod Resource Limits Selected Storj App SCALE")

When the **Enable Pod resource limits** checkbox is selected, two additional fields display:

**CPU Limresource limitsit** allows you to enter a plain integer value with suffix m(milli) to define the CPU resource limit. Example: `1000m`. 

**Memory Limit** allows you to enter a value specified by number of bytes. This value is followed by the quantity suffix such as E,P,T,G,M,k as well as Ei, Pi, Ti, Mi, Gi, and Ki. Example: `129e6`, `129M`, `128974848000m`, `123Mi`.

Review your entries carefully. When you have finished, click **Save** to confirm these settings.

### Using the Web Portal

Clicking **Save** begins the installation. The time required to install the Storj App will vary depending upon your hardware and network configuration. When the installation is complete, clicking the **Installed Applications** tab displays the Storj App. The status of the application should be listed as active. 

Click the **Web Portal** button to view additional details about the application.

The Storj Node dashboard displays stats for the storage node. These may include bandwidth utilization, total disk space, and disk space used for the month. Payout information is also provided.
{{< /expand >}}

{{< taglist tag="scalestorj" limit="10" >}}