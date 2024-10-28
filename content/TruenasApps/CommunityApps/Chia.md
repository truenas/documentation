---
title: "Chia"
description: "Provides basic installation instructions for the Chia application in TrueNAS."
weight: 
aliases:
 - /scale/scaleuireference/apps/chia/
 - /scale/scaletutorials/apps/chia/
 - /scale/scaletutorials/apps/communityapps/chia/
tags: 
 - apps
 - crypto
keywords:
- nas data storage
- software storage solutions
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!--Comment or remove the following line if your PR changes provide a complete, up-to-date, and working installation tutorial -->
{{< include file=\"/static/includes/apps/CommunityPleaseImprove.md\" >}}

The TrueNAS Chia app installs the Chia Blockchain architecture in a Kubernetes container.
Chia Blockchain is a cryptocurrency ecosystem that uses Proof of Space and Time, and allows users to work with digital money and interact with their assets and resources.
Instead of using expensive hardware that consumes exorbitant amounts of electricity to mine crypto, it leverages existing empty hard disk space on your computer(s) to farm crypto with minimal resources.

{{< include file="/static/includes/AppsUnversioned.md" >}}

## First Steps
Before you install the application, you have the option to create the **config** and **plots** datasets for the Chia app storage volumes, or you can allow TrueNAS to automatically create these storage volumes.

You also have the option to mount datasets inside the container for other Chia storage needs.
You can allow TrueNAS to create these storage volumes, or you can create and name datasets according to your intended use or as sequentially-named datasets (i.e., *volume1*, *volume2*, etc.) for each extra volume to mount inside the container.

Create all datasets before you begin the app installation process if using existing datasets and the host path option.
See [Creating a Dataset]({{< relref "DatasetsSCALE.md" >}}) for information on correctly configuring the datasets.

## Installing the TrueNAS Chia App
To install the TrueNAS Chia app you:
1. [Configure and deploy the TrueNAS Chia app](#deploying-the-truenas-chia-app) in the Kubernetes container.
2. [Obtain the authentication keys](#obtaining-and-preserving-keys) from Chia and make the keys persist across container reboots.
3. [Add the keys to the TrueNAS Chia app](#adding-keys-to-the-truenas-chia-app).
3. Setup the [Chia GUI](#setting-up-the-chia-gui) or Chia command line (CLI) to configure Chia and start farming.

### Deploying the TrueNAS Chia App
Log into TrueNAS, go to **Apps**, click on **Discover Apps**, then either begin typing Chia into the search field or scroll down to locate the **Chai** application widget.

{{< trueimage src="/images/SCALE/Apps/DiscoverScreenChiaApp.png" alt="Locating the Chia App Widget" id="Locating the Chia App Widget" >}}

Click on the widget to open the **Chia** app information screen.

{{< trueimage src="/images/SCALE/Apps/ChiaAppDetailsScreen.png" alt="Chia App Information Screen" id="Chia App Information Screen" >}}

Click **Install** to open the **Install Chia** configuration screen.

{{< trueimage src="/images/SCALE/Apps/InstallChiaScreen.png" alt="Install Chia Screen" id="Install Chia Screen" >}}

Application configuration settings are presented in several sections, each explained in [Understanding TrueNAS Chia Wizard Settings](#understanding-truenas-chia-wizard-settings) below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

Accept the default value or enter a name in **[Application Name](#application-name)**.
Accept the default value in **Version**.

Select the timezone for your TrueNAS system location from the **Timezone** dropdown list of options.

{{< trueimage src="/images/SCALE/Apps/InstallChiaConfigFullNodeService.png" alt="Install Chia Configuration" id="Install Chia Configuration" >}}

Select the service from the **Chia Service Mode** dropdown list.
The default option is **Full Node**, but you can select **Farmer** or **Harvester**.
**Harvester** displays additional settings, each described in [Chia Configuration](#chia-configuration) below. Refer to Chia-provided documentation for more information on these services.

You can enter the network address (IP address or host name) for a trusted peer in **Full Node Peer** now or after completing the app installation.
This is the trusted/known or untrusted/unknown server address you want to use in sync operations to speed up the sync time of your Chia light wallet.
If not already configured in Chia, you can add this address as a trusted peer in Chia after completing the app installation.

Accept the default values in **Chia Port** and **Farmer Port**.
You can enter port numbers below 9000, but check the [Default Ports list](https://www.truenas.com/docs/references/defaultports/) to verify the ports are available. Setting ports below 9000 automatically enabled host networking.

By default, TrueNAS can create the storage volumes (datasets) for the app.

{{< trueimage src="/images/SCALE/Apps/InstallChiaStorageConfigixVolume.png" alt="Install Chia Storage ixVolume" id="Install Chia Storage ixVolume" >}}

If you created datasets to use, select **Host Path (Path that already exists on the system)**.
Enter or browse to select the mount path for the **config** and **plot** datasets created in [First Steps](#first-steps) and populate the **Host Path** field for both **Data** and **Plots** storage volumes.

Accept the defaults in [**Resource Configuration**](#resource-configuration) or change the CPU and memory limits to suit your use case.

Click **Install**.
The system opens the **Installed Applications** screen with the TrueNAS Chia app in the **Deploying** state.
When the installation completes, it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/ChiaAppInstalled.png" alt="Chia App Installed" id="Chia App Installed" >}}

The first time the TrueNAS Chia app launches, it automatically creates and sets a new private key for your Chia plotting and wallet, but you must preserve this key across container restarts.

### Obtaining and Preserving Keys
To make sure your plots and wallet private key persists (is not lost) across container restarts, save the mnemonic seed created during the app installation and deployment.

On the **Installed** apps screen, click on the Chia app row, then scroll down to the **Workloads** widget and the **Shell** and **Logs** icons.

{{< trueimage src="/images/SCALE/Apps/ChiaAppWorkloadsWidget.png" alt="Chia Workloads Widget" id="Chia Workloads Widget" >}}

Click on the shell <span class="iconify" data-icon="ci:window-terminal"></span> icon to open the **Choose pod** window.

{{< trueimage src="/images/SCALE/Apps/ChiaChoosPodforShell.png" alt="Chia Choose Pod for Shell" id="Chia Choose Pod for Shell" >}}

Click **Choose** to open the **Pod shell** screen.

To show Chia key file details and the 24 word recovery key, enter `/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed`.
The command should return the following information:

{{< trueimage src="/images/SCALE/Apps/ChiaShellShowMnemonicSeed.png" alt="Chia Mnemonic-Seed Command Example" id="Chia Mnemonic-Seed Command Example" >}}

If you loose the keyfile at any time, use this information to recover your account.
To copy from the TrueNAS **Pod Shell**, highlight the part of the screen you want to copy, then press <kbd>Ctrl+Insert</kbd>.
Open a text editor like Notepad, paste the information into the file and save it. Back up this file and keep it secured where only authorized people can access it.

Now save this mnemonic-seed phrase to one of the host volumes on TrueNAS. Enter this command at the prompt:

<code>echo <i>type all 24 unique secret words in this command string</i> > /plots/keyfile</code>

Where <i>type all 24 unique secret words in this command string</i> is all 24 words in the mnemonic-seed.

Next, edit the TrueNAS Chia app to add the key file.

### Adding Keys to the TrueNAS Chia App
Click **Installed** on the breadcrumb at the top of the **Pod Shell** screen to return to the **Apps > Installed** screen.
Click on the Chia app row, then click **Edit** in the **Application Info** widget to open the **Edit Chia** screen.

Click on **Chia Configuration** on the menu on the right of the screen or scroll down to this section.
Click **Add** to the right of **Additional Environments** to add the **Name** and **Value** fields.

{{< trueimage src="/images/SCALE/Apps/EditChiaConfigAddEnvironmentVariable.png" alt="Edit Chia Add Keys Environment Variable" id="Edit Chia Add Keys Environment Variable" >}}

Enter **keys** in **Name** and **/plots/keyfile** in **Value**.

Scroll down to the bottom of the screen and click **Save**.
The container should restart automatically.

After the app returns to the **Running** state, you can confirm the keys by returning to the **Pod shell** screen and entering the `/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed` command again.
If the keys are not identical, edit the Chia app again and check for any errors in the name of values entered.
If identical, the keys file persists for this container.

You can now complete your Chia configuration using either the Chia command line (CLI) or web interface (GUI).

### Setting Up the Chia GUI
To complete the Chia software and client setup, go to the [Chia Crash Course](https://docs.chia.net/guides/crash-course/introduction) and [Chai Getting Started](https://docs.chia.net/installation) guides and follow the instructions provided.
The following shows the simplest option to install the Chia GUI.

Click on the link to the [Chia downloads](https://www.chia.net/downloads/) and select the option that fits your operating system environment. This example shows the Windows setup option.

After downloading the setup file and opening the **Chia Setup** wizard, agree to the license to show the Chia setup options.

{{< trueimage src="/images/SCALE/Apps/ChiaGUISetupInstallOptions.png" alt="Chia Setup Wizard Install Options" id="Chia Setup Wizard Install Options" >}}

Click **Next**. Choose the installation location.

{{< trueimage src="/images/SCALE/Apps/ChiaSetupGUIChooseLocation.png" alt="Chia Setup Wizard Install Location" id="Chia Setup Wizard Install Location" >}}

Click **Install** to begin the installation. When complete, click **Next** to show the **Chia Setup Installation Complete** wizard window.
**Launch Chia** is selected by default. Select the **Add the Chia Command Line executable to PATH** advanced option if you want to include this. Click **Finish**.

After the setup completes the Chia web portal opens in a new window where you configure your Chia wallet and farming modes, and other settings to customize Chia for your use case.

{{< trueimage src="/images/SCALE/Apps/ChiaWebPortalGUI.png" alt="Chia Web Portal" id="Chia Web Portal" >}}

Use the [Chia Documentation](https://docs.chia.net/) to complete configuration of your Chia software and client.

At this point, you are ready to begin farming Chia.
{{< hint type=info >}}
The CLI process is beyond the scope of this quick how-to, but we recommend you start by reading up on their [CLI reference materials](https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference), [Quick Start guide](https://github.com/Chia-Network/chia-blockchain/wiki/Quick-Start-Guide) and other [documentation](https://github.com/Chia-Network/chia-blockchain/wiki).
{{< /hint >}}

## Understanding TrueNAS Chia Wizard Settings
The following sections provide more details on the settings found in each section of the TrueNaS **Install Chia** and **Edit Chia** screens.

### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### Chia Configuration
The **Chia Configuration** section includes four settings: **Timezone**, **Chia Service Node**, **Full Node Peer**, and **Additional Environments**.

Select the time zone for the location of the TrueNAS server from the dropdown list.

The **Chia Service Node** has three options: **Full Node**, **Farmer**, and **Harvestere**. The default **Full Node**, and **Farmer** do not have extra settings.

{{< trueimage src="/images/SCALE/Apps/InstallChiaConfigFullNodeService.png" alt="Install Chia Configuration" id="Install Chia Configuration" >}}

Selecting **Harvester** shows the required **Farmer Address** and **Farmer Port** settings, and **CA** for the certificate authority for the farmer system.
Refer to Chia documentation on each of these services and what to enter as the farmer address and CA.

{{< trueimage src="/images/SCALE/Apps/InstallChiaConfigHarvesterService.png" alt="Install Chia Harvester Service" id="Install Chia Harvester Service" >}}

After configuring Chia in the Chia GUI or CLI, you can edit these configuration settings. You can also create a second TrueNAS Chia app deployment by repeating the instructions above if you want to create a second app deployment as a **Harvester** service node.

You can enter the network address (IP address or host name) for a trusted peer in **Full Node Peer** now or after completing the app installation and setting up the Chia GUI or CLI and configuring the Chia blockchain.
Enter the trusted/known or untrusted/unknown server address you want to use in sync operations to speed up the sync time of your Chia light wallet.
You can also edit this after the initial app installation in TrueNAS.

Click **Add** to the right of **Additional Environments** to add a **Name** and **Value** field.
You can add environment variables here to customize Chia, and to make the initial key file persist, survive after a container restart.
Click **Add** for each environment variable you want to add. Refer to Chia documentation for information on environment variables you might want to implement.

### Network Configuration
Accept the default port numbers in **Chia Port** and **Farmer Port**.
The TrueNAS Chai app listens on port **38444** and **38447**.

Refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter an available number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallChiaNetworkConfig.png" alt="Chia Network Configuration" id="Chia Network Configuration" >}}

### Storage Configuration
You can allow TrueNAS to create the datasets for Chia plots and configuration storage, or you can create the datasets you want to use as storage volumes for the app or to mount in the container.
If manually creating and using datasets, follow the instructions in [Creating a Dataset]({{< relref "DatasetsSCALE.md" >}}) to correctly configure the datasets.
Add one dataset named **config** and the another named **plots**.
If also mounting datasets in the container, add and name these additional storage volumes according to your intended use or use *volume1*, *volume2*, etc. for each additional volume.

In the TrueNAS Chia app **Storage Configuration** section, select **Host Path (Path that already exists on the system)** as the **Type** for the **Data** storage volume.
Enter or browse to and select the location of the existing dataset to populate the **Host Path** field. Repeat this for the **Plots** storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallChiaStorageConfigHostPaths.png" alt="Install Chia Storage Host Paths" id="Install Chia Storage Host Paths" >}}

If adding storage volumes inside the container pod, click **Add** to the right of **Additional Volumes** for each dataset or ixVolume you want to mount inside the pod.

{{< trueimage src="/images/SCALE/Apps/InstallChiaStorageConfigAdditionalVolsHostPath.png" alt="Install Chia Storage Additional Volumes" id="Install Chia Storage Additional Volumes" >}}

You can edit the TrueNAS Chia app after installing it to add additional storage volumes.

### Resource Configuration
The **Resources Configuration** section allows you to limit the amount of CPU and memory the application can use.
By default, this application is limited to use no more than **4** CPU cores and **8** Gibibytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallChiaResourcesConfig.png" alt="Resources Configuration" id="Resources Configuration" >}}

Tune these limits as needed to prevent the application from over-consuming system resources and introducing performance issues.