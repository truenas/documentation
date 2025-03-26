---
title: "Asigra DS-System"
description: "Provides basic installation instructions for the TrueNAS Enterprise Asigra DS-System application."
weight: 
aliases:
  - /truenasapps/enterpriseapps/asigraapp/
tags:
- asigra-ds-system
- apps
- enterprise
keywords:
- nas data storage
- software storage solutions
- enterprise data storage
---

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

{{< github-content 
    path="trains/enterprise/asigra-ds-system/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

## App Description

The Asigra DS-System app enables you to offer a robust, scalable service to multiple customers.
Agentless architecture, where customers only need to install the DS-Client on one LAN computer, eliminates the need to install software on each target backup/restore computer.

If the DS-Client is networked with the target backup/restore computers, you can browse data, back it up, and restore it as required.
Customers can run automatic and unattended backups for data environments ranging from single-user standalone computers to enterprise-wide LANs and WANs.

During backups, the DS-Client extracts changed data, compresses it, and encrypts the items specified for backup.
Only new or modified data is backed up. This accelerates the backup transmission time.
Backed-up data is transmitted to the secure off-site data center hosting the DS-System vault over the Internet, intranet, or a direct dial-up connection.
After clearing security measures for the DS-Client, restores are performed on demand, through the same DS-Client.

The TrueNAS Asigra DS-System app is the vault. An agentless DS-Client backs up data in the vault.
The DS-Operator is the management software for the DS-System.

After installing the Asigra DS-System app, register an account with Asigra if you do not already have one.
Refer to communications from Asigra for the license and the link to the DS-Operator download.
See [Setting Up Asigra in the DS Operator](#setting-up-asigra-in-the-ds-operator) below for the next steps after installing the Asigra DS-System app.

## Before You Begin

Before you install the Asigra app:

- Read the [Asigra DS-System User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-System_User_Guide.pdf).
  
  For information on the DS-License Server, see Section 2.1 in the Asigra DS-System User Guide.

  For information on creating customer accounts and DS-Client, see Section 3.1 in the Asigra DS-System User Guide.

  For more information on DS-Client accounts, see Section 4.1 in the Asigra DS-System User Guide.

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/AsigraAppDetailsScreen.png" alt="Asigra App Details Screen" id="Asigra App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}
<div style="margin-left: 33px">Asigra has two run-as user IDs, <b>0</b> for the root users and <b>999</b> for the postgres data user.
The Asigra and TrueNAS default user <b>oper</b> serves as the DS-Operator user with administration roles.
Log into the DS-Operator GUI with this user and the password entered as the **Operator Password** in the wizard after deploying the app.
You do not need to add the **oper** user in TrueNAS as a user account.
</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
Asigra expects two host path dataset storage volumes, <b>data</b> and <b>postgres_data</b>.
You can create more datasets if you want additional storage volumes for the app, but these are not required. You can add datasets and storage volumes after installing the app.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

## Installing the Application

{{< hint info >}}
This basic procedure covers the required Asigra app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallAsigraScreen.png" alt="Install Asigra DS-System Screen" id="Install Asigra DS-System Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the **Asigra Configuration** settings.
{{< include file="/static/includes/apps/InstallWizardTimezoneSettings.md" >}}

Enter passwords for the database, root user, and the operator user **oper**.

Select the DS-Operator language from the dropdown list. English is the default language.

**Enable Cluster** is selected by default, with five cluster nodes set as the default cluster size.
Accept the default or change to a value of 3-16 nodes based on your desired configuration.

The TrueNAS app is configured with all the environment variables required to deploy the app.
If you want to customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Accept the default values in **Network Configurations**. See [Network Configuration](#network-configuration) for details.
Leave **Host Network** unselected.

Add your **Storage Configuration** settings.

For **Asigra DS-System Configuration Storage**, set the **Type** to **Host Path (Path that already exists on the system)**.
Select **Enable ACL**, then enter or browse to and select the **data** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallAsigraStorageDataACLandACESettings.png" alt="Add Config Asigra Data ACL and ACE Settings" id="Add Asigra Data ACL and ACE Settings" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
Click once to add the **0** user ID. Give it **FULL_CONTROL Access**.

Select **Force Flag**.

Next, for **Asigra DS-System Postgres Data Storage**, set **Type** to **Host Path (Path that already exists on the system)**.
Enter or browse to select the **postgres_data** dataset to populate the **Host Path** field. Do not click **Edit ACL**!
Select **Automatic Permissions** to set the permissions for this dataset and for the parent dataset if storage volume datasets are nested under a parent dataset.

{{< trueimage src="/images/SCALE/Apps/InstallAsigraStorageConfigPostgresDataAutoPerms.png" alt="Add Config Asigra Postgres_Data Automatic Permissions" id="Add Asigra Postgres_Data Automatic Permissions" >}}

See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **Asigra DS-System** app in the **Deploying** state. Status changes to **Running** when ready to use.

{{< trueimage src="/images/SCALE/Apps/AsigraAppRunning.png" alt="Asigra DS-System App Installed and Running" id="Asigra DS-System App Installed and Running" >}}


See **Setting Up the DS-System in DS-Operator** below for the next steps.

## Setting Up DS-System in DS-Operator

After installing the Asigra application in TrueNAS, either click **Register** to open the Asigra New Account screen to register your company with Asigra, or if you already have a registered account, use the link provided by Asigra to download and extract the DS-Operator GUI program.

{{< trueimage src="/images/SCALE/Apps/AsigraNewCustomerInfoScreen.png" alt="Asigra New Customer Information Screen" id="Asigra New Customer Information Screen" >}}

Asigra provides your valid license and the license server IP address or URL> Enter the IP address when adding the license server for your service.
It also provides the link to where you download a zip file with the DS-Operator.

Install the DS-Operator on a local network with access to the TrueNAS system hosting the Asigra DS-System.

The instructions below cover the initial configuration of the TrueNAS Asigra DS-System after installing the TrueNAS app.
It covers downloading and logging into the DS-Operator GUI, initializing the TrueNAS DS-System, adding the administrator user roles, and setting up the license server.
Refer to Asigra documentation for additional customizing or managing instructions for your DS-Server or DS-Client products.

For help with Asigra products, contact [Asigra](https://www.asigra.com/company/contact).

The following instructions cover a Windows OS-based DS-Operator initial configuration:

1. Download the DS-Operator zip file and use a zip program like 7-Zip or WinZip to extract the <file>dsoper.jar</file> file.
   Double-click on the extracted file in your **Downloads** File Explorer folder to launch the DS-Operator GUI program.

2. Launch the DS-Operator GUI. Either double-click on the **dsoper** file in the File Explorer **Downloads** folder or right-click and select **Open**.

3. Log in as the default **oper** user and enter the password entered in the **Operator Password** field in the **Install Asigra DS-System** wizard.
   The TrueNAS Asigra app default user **oper** is preconfigured with all administration roles, but if you add some other user account to serve as the administration user you must assign the user the **Data Operator**, **Account Manager**, and **Export CRI** roles.
   Refer to the [Asigra DS-System User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-System_User_Guide.pdf) for more information.

   {{< trueimage src="/images/SCALE/Apps/AsigraConnectToDS-Operator.png" alt="Connect to Asigra DS-Operator" id="Connect to Asigra DS-Operator" >}}

   If you receive authentication errors, you might need to add the oper user to your Windows system.
   {{< expand "Adding a User in Windows" "v" >}}
   If you need to create the Asigra DS-Operator user on your Windows system:
   1. Enter **Computer Management** in the **Start** menu search field, then open the **Computer Management** program.
   2. Click on **Local Users and Groups**, right click on **Users**, and then click **New User**.
   3. Add the **oper** user, enter and confirm the password added to **Operator Password** in the **Install Asigra DS-System** wizard.
   4. Clear **User must change password at next login**,
   5. Select **Password never expires**.
   6. Click **Create**.
   {{< /expand >}}

4. Set up the TrueNAS DS-Server using the DS-Operator GUI.
   Click **Setup** on the top toolbar, then click **Initialization** to open the **DS-Operator Initialization** window.

   {{< trueimage src="/images/SCALE/Apps/DS-OperatorInitializationOption.png" alt="Asigra DS-Operator Initializaton" id="Asigra DS-Operator Initialization" >}}

   Click **Add** to open the **Add a DS-System** window. Enter the IP address for your TrueNAS server running the Asigra DS-System app, then click **OK**.

   {{< trueimage src="/images/SCALE/Apps/AsigraDS-OperatorAddaDS-SystemWindow.png" alt="Asigra DS-Operator Add a DS-System" id="Asigra DS-Operator Add a DS-System" >}}

   Click **Refresh** at the bottom left of the window to change the default IP address to the name of your DS-System.

5. Enter the license server for your DS-System.
   Select the checkbox to the left of the system name or IP address, click **Setup** on the top toolbar, and then select **License Server** to open the **DS-License Server** window for your system.

   {{< trueimage src="/images/SCALE/Apps/AsigraDS-OperatorAddLicenseServer.png" alt="Asigra DS-Operator Add License Server" id="Asigra DS-Operator Add License Server" >}}

   Enter the license server URL provided by Asigra, for example, *rlm.asigra.com*, verify the port number is **4417** or the port number Asigra provides with the license, then click **Add**.

You can now add your customer and DS-Client accounts. For more information refer to:

- Adding customer accounts for each customer backing up data to the DS-System.
  Refer to Section 3 in the [DS-System User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-System_User_Guide.pdf).

- Adding DS-Client accounts for your customers.
  Refer to Section 4 in the [DS-System User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-System_User_Guide.pdf).
  
- Customizing your DS-Sever to suit your use case using the DS-Operator GUI.
  Refer to the [DS-System User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-System_User_Guide.pdf).

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Asigra DS-System** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Asigra DS-System Configuration Settings

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

The app includes three passwords:

- **Database Password** - Sets a password for the DS-System database.
- **Root Password** - Set a password for the root run-as user. Allowed to connect to the DS-Operator GUI but is not assigned the administration roles.
  The root user can create a new user in the DS-Operator and assign administration roles to the new user. Refer to Asigra documentation for more information on assigning administration roles.
- **Operator Password** - Sets the password for the default DS-Operator administration user account **oper**.
  This user is preassigned the administration roles. Connect to the DS-Operator with this account and password.

Select the language for the DS-Operator. This sets the on-screen language for the DS-Operator UI. The default is English.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

Asigra provides information on environment variables you can add through their DS-Client.
For more information on these variables, see Sections 5.18.2 and 5.21.2 in the [DS-Client User Guide](https://asigra-documentation.s3.amazonaws.com/Guides/Cloud+Backup/v14.2/DS-Client_User_Guide.pdf).

### Network Configuration Settings

The TrueNAS Asigra DS-System app has three default ports:

- **4401** assigned to and exposes the DS-Client
- **4404** assigned to and exposes the DS-Operator admin interface
- **4409** assigned to and exposes the DS-System replication interface

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWisardAdvancedDNSSettings.md" >}}

### Storage Configuration Settings

TrueNAS provides two options for storage volumes: ixVolumes and host paths.
Asigra DS-System expects two host path storage volumes, **data** to hold app DS-System data and **postgres_data** for postgres database storage.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

If you organize the **data** and **postgres_data** datasets under a parent dataset named *asigra*, you can set the permissions for the postgres and parent datasets by selecting **Automatic Permissions** under the **Asigra DS-System Postgres Data Configuration** settings.
To show this option, set **Type** to **Host Path**. See **Setting Dataset ACL Permissions** below.

You can add extra storage volumes during the app installation or edit the application after it deploys. Stop the app before editing settings.
{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for a dataset through the **Install Asigra DS-System** wizard or from the **Datasets** screen after adding the datasets.
We recommend using the **Automatic Permissions** option found in the **Asigra DS-System Postgres Data Storage** section to set the permissions for the postgres and parent datasets.
Setting permissions from the **Datasets** screen requires several adjustments that, if not correctly set, prevent the app from deploying.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v" >}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user **0** for **root**. You can also add the app default user **568** for **apps**.
Save the ACL before leaving the screen.
{{< /expand >}}

{{< expand "Adding Postgres and Parent Dataset ACL Permissions" "v" >}}
First, set **Type** to **Host Path** to show the **Automatic Permissions** option.
Do not select **Enable ACL** as this removes the **Automatic Permissions** option.

Next, enter or browse to select **postgres_data** and populate the **Host Path** field with the path to this dataset.
Select **Automatic Permissions**. TrueNAS sets the required permissions for the postgres storage volume dataset and the parent dataset.
{{< /expand>}}

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallWizardStorageConfig2.md" >}}

#### Mounting an SMB Share Storage Volume

If adding an SMB share as an additional storage volume, create the SMB dataset and share user(s), and add the user ID for the share user(s) to the dataset ACL.
{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallAsigraResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
