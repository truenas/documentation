---
title: "Installing TrueNAS Enterprise (HA)"
description: "Provides a sequential process to complete the installation of a TrueNAS Enterprise (HA) dual controller NAS system using an iso file and the TrueNAS UI."
weight: 16
aliases:
tags:
- install
- enterprise
- HA
keywords:
- enterprise data storage solution
- enterprise nas solution
- nas data storage
- high availability (ha)
- storage replication
- LDAP
- persistent storage
---

{{< enterprise >}}
Installing TrueNAS on High Availability (HA) systems is complicated and should be guided by Enterprise-level support.
Contact TrueNAS Enterprise Support for assistance whenever attempting to install TrueNAS on Enterprise HA hardware.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

Do NOT use Linux or CLI commands to recover or clean-install the TrueNAS <kbd>iso</kbd> file or configure any initial configuration settings!
Incorrect use of CLI commands can further disrupt your system access and can potentially do greater damage to your system. Proceed at your own risk.
{{< /enterprise >}}

## Installing TrueNAS for an Enterprise (HA) System

This article outlines a procedure to do a clean install of a TrueNAS Enterprise High Availability (HA) systems using an <file>iso</file> file.

HA systems are dual controller systems with the primary controller referred to as controller 1 (sometimes also as controller A) and controller 2 (or controller B).
{{< include file="/static/includes/HAControllerInstallBestPracticeSCALE.md" >}}

TrueNAS includes features and functions to help with completing the configuration process after installing and getting access to the TrueNAS web interface. This includes utilizing numerous high availability (HA) features to ensure data integrity and availability.

### Preparing for a Clean Install

For a list of TrueNAS Enterprise (HA) preparation information, see [Preparing for TrueNAS UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise" >}}).

Have this information handy to complete this procedure:

* All the assigned network addresses and host names (VIP, controller 1 and 2 IP addresses).
* Other network information including domain name(s), and DNS server, default gateway, alias, or other static IP addresses.
* The IPMI access addresses for each controller and the administration credentials for IPMI access to these addresses.
* TrueNAS license file provided by iXsystems.
* TrueNAS Storage Controller 1 (A) and 2 (B) serial numbers (refer to contracts or documentation provided with the system or contact TrueNAS Enterprise Support and provide your contract number).

{{< hint type=note >}}
HA system controllers each have serial numbers, the lower number assigned is for controller 1 (e.g. of two controller serial numbers assigned *A1-12345* and *A1-12346*, the *A1-12345* is for controller 1 and *A1-12346* is for controller 2).
{{< /hint >}}

When restoring after a clean install, also have ready:

* Storage data backups to import into the Enterprise HA system.
* System configuration file from the previous TrueNAS install.

### Overview of the Installation Procedure

{{< hint type=important >}}
{{< include file="/static/includes/HAControllerInstallBestPracticeSCALE.md" >}}
{{< /hint >}}

There are two ways to install the HA dual controller system to ensure controller 1 comes online as the primary controller:

* Install both controllers simultaneously beginning with controller 1, then immediately starting the install on controller 2.
* Installing each controller individually to specific points in the installation process.

Simultaneous installation must start with controller 1, so it comes online first.
Installing each controller individually follows a particular method to ensure controller 1 comes online as the primary controller.

The sections in this article cover the primary steps as a simultaneous installation:

1. [Download](#downloading-the-scale-install-file) the <file>iso</file> file from the TrueNAS website and prepare the USB flash drives if not using IPMI for remote access.
2. [Log into your IPMI](#using-ipmi-to-install-the-iso-on-a-controller) system using the network address assigned to controller 1, and then establish a second connection with controller 2 in a new browser session.
3. [Install TrueNAS using the <file>iso</file> file](#using-ipmi-to-install-the-iso-on-a-controller) and select the **Fresh Install** option.
   Install on controller 1, then immediately begin installing on controller 2 in the other IPMI session to simultaneously install TrueNAS on both controllers.

4. Disable DHCP, then enter the network settings to controller 1 using the [Console Setup Menu](#configuring-the-network-with-console-setup-menu).
   Enter the IP address and netmask assigned to controller 1, then enter the global network settings for host name, domain name, and nameservers.

   Use the TrueNAS UI for system configuration as it has safety mechanisms in place to prevent disrupting network access that could require you to repeat the clean install to access your system.
   However, if you are experienced with the Console Setup Menu and are using it to configure network settings you can configure the rest of the controller 1 network settings with the Console setup menu.

5. [Log into the TrueNAS UI](#configuring-settings-in-the-scale-ui) for controller 1 to sign the EULA agreement and apply the system HA license.  
6. Disable failover to configure the rest of the network settings and edit the primary network interface on controller 1, and then enable failover.
7. Complete the minimum storage requirement by adding or importing one pool on controller 1.
8. Sign in using the Virtual IP (VIP) address.
9. With controller 2 powered up, on controller 1 sync to peer to complete the install and make controller 2 the standby controller.

The sections that follow describe these steps in detail.

#### Overview of the Alternative Installation Process

This process of installing each controller sequentially has two methods:

* Install and configure controller 1 up to the point where you are ready to sync to controller 2.
  When complete, install controller 2 and restart. After the console setup menu displays, switch back to controller 1 and sync to peer.
  This synchronizes the completed configuration from controller 1 to controller 2 and keeps controller 1 designated as the primary controller.
Or
* Begin installing controller 2 immediately after installing controller 1. When controller 2 finishes installing, power it off and keep it powered down.
  When finished configuring controller 1, power up controller 2 and wait for it to finish booting up. Switch back to controller 1 and sync the configuration to controller 2.

This section provides an overview of the alternative method to clean install an HA system with controller 2 powered off while installing and configuring controller 1.
These steps are nearly identical to the section above but controller 2 is either powered off or not installed while you install and configure controller 1.

1. Use either the prepared USB flash drive inserted into a USB port for controller 1 or log into an IPMI session and install TrueNAS on controller 1.
   Finish the installation and allow controller 1 to complete its first boot.
2. Use either the prepared USB flash drives inserted into a USB port for controller 2 or log into an IPMI session for controller 2 to install TrueNAS.
   When the installation finishes, power down controller 2.  
3. Configure the required network settings on controller 1 with the [Console setup menu](#configuring-the-network-with-console-setup-menu).
4. Log into controller 1 using the IP address assigned to controller 1.
   Apply the HA license, sign the EULA, and [complete the UI configuration](#configuring-settings-in-the-scale-ui) to the point where you are ready to sync to peer on controller 1, but do not sync yet.
5. Power up controller 2 and wait for it to complete the boot process.
6. Log into controller 1, go to **System > Failover**, and click **Sync to Peer**.
   This synchronizes controller 2 with controller 1 and restarts controller 2. Controller 2 becomes the standby controller when it finishes restarting.

### Downloading the TrueNAS Install File

[Download](https://www.truenas.com/download-tn-scale/) the <file>.iso</file> file.

If you are remote to the system and are installing through an IPMI connection you do not need to save the <kbd>.iso</kbd> file to a USB flash drive.

If you are physically present with the TrueNAS system, burn the <file>.iso</file> file to a USB flash drive and use that as the install media.

### Using IPMI to Install the ISO on a Controller

Use this process to install the <file>iso</file> file on both controller 1 and controller 2. Best practice is to begin the install on controller 1, then immediately begin the install on controller 2.

{{< expand "Installing ISO Steps" "v" >}}

1. Enter the IP address assigned to the controller 1 IPMI port into a web browser and log into your IPMI system with admin credentials.

2. Select **Remote Control > iKVM/HTML5** to open the Console Setup window.

   IPMI interfaces can vary but they generally have options for **Remote Control** and **iKVM/HTML5** to open a console session on the platform.

3. Install the <file>.iso</file> file. Select the **Virtual Media > CD-ROM image** option in your IPMI system.

   a. Enter the IP address of where you downloaded the <file>.iso</file> file into **Share Host**.
      You might need assistance from your Network or IT department to obtain this address.

   b. Enter the path to the <file>.iso</file> file.
      For example, if you stored the file in an *iso* folder enter **/iso/TrueNAS-SCALE-22.12.1.iso** in **Path to Image**.

   c. Click **Save**, then **Mount**. You should see the <file>.iso</file> file under **Device 1** or the device name your IPMI configures.

3. Return to the **Remote Control > iKVM/HTML5** window opened in step 2. Either use your keyboard or open the keyboard in the window then:

   a. Type **8** to restart controller 1 (also repeat for controller 2), and type **y** to confirm and restart.

   b. As the system restarts, be prepared to hit the <kbd>F11</kbd> key when you first see the **TrueNAS Open Storage** splash screen.
      Alternatively, you can start clicking on the **F11** key on the online keyboard until you see the TrueNAS Installer screen.

   c. Select the **UEFI: ATEN Virtual CDROM** device from the boot list. The bootstrap loader begins. When it ends the TrueNAS installer opens.
{{< /expand >}}

### Using the TrueNAS Installer

{{< hint type=note >}}
If you are doing a clean install from the TrueNAS <file>.iso</file> file to recover from an issue that requires you to re-install TrueNAS from the <file>.iso</file>, have your network configuration information ready to use for controller 1 after the installation completes. Do not configure network settings on controller 2.
Also have your TrueNAS system configuration file and data backups handy, so you can recover your system settings and import your data into the recovered TrueNAS clean-install system.
{{< /hint >}}
{{< expand "TrueNAS Installer Steps" "v" >}}
{{< include file="/static/includes/SCALEInstallerProcedure.md" >}}

6. Select **OK** after the **The TrueNAS installation on <nvme0n1> succeeded** displays. The Console setup menu screen displays.

7. Enter **3** to **Reboot System** and immediately return to the IPMI **Virtual Media > CD-ROM image** screen to click **Unmount**. Click **Save**.
   If you fail to unmount the <file>iso</file> image before the system completes the restart, the bootstrap install continues in a boot loop.

TrueNAS is now installed on controller 1 and repeated for controller 2 starting with [Using IPMI to Install the ISO on a Controller](#using-ipmi-to-install-the-iso-on-a-controller).

{{< /expand >}}

### Configuring the Network with Console Setup Menu

After installing the <file>.iso</file> file on both controller 1 and 2 and finishing the TrueNAS Installer process, use the Console setup menu to configure the required network settings on controller 1, so it can access the TrueNAS UI.
TrueNAS single controller systems use the DHCP-assigned IP address for the primary network interface to access the UI to complete the rest of the network and other configuration settings.
However, HA systems with dual controllers must use static IP addresses.

To allow controller 1 to access the UI, you must disable DHCP and add the controller 1 static IP address and netmask as an alias on the primary network interface, and then enter the network settings for host name, domain name, default gateway, and the name servers (1 and 2).
You can configure the rest of the HA global network settings in the TrueNAS web UI.

To use the Console setup menu to configure required network settings on controller 1:

{{< trueimage src="/images/SCALE/CLI/ConsoleSetupMenuSCALE.png" alt="TrueNAS Console Setup Menu" id="TrueNAS Console Setup Menu" >}}

1. Type <kbd>1</kbd> and then press <kbd>Enter</kbd> to open the **Network Interfaces** screen.

   {{< trueimage src="/images/SCALE/CLI/CSMNetworkInterfacesNoAliasIP.png" alt="Network Interfaces Screen" id="Network Interfaces Screen" >}}

2. Use either <kbd>Tab</kbd> or the arrow keys to select the interface assigned as your primary network interface.
   If you have more than one interface installed and wired to your network, the primary interface is typically **eno1**.
   With the interface highlighted, press <kbd>Enter</kbd> to open the **Update Network Interface** screen.

   {{< trueimage src="/images/SCALE/CLI/CSMUpdateNetworkInterfacesHANoValues.png" alt="Select Primary Network Interface" id="Select Primary Network Interface" >}}

3. Tab or arrow down to **ipv4_dhcp** and change it to **no**.

4. Tab or arrow down to the **aliases** setting and enter the static IP address for controller 1.
   Tab or arrow down to **Save**, and then press <kbd>Enter</kbd>. A pending network changes notice displays with additional options.

5. Type <kbd>a</kbd> to apply the change, then <kbd>p</kbd> to make it persist.
   Type <kbd>q</kbd> to return to the main Console setup menu.

6. Type <kbd>2</kbd> and then press <kbd>Enter</kbd> to open the **Network Configuration** screen.

   {{< trueimage src="/images/SCALE/CLI/CSMNetworkConfigurationHANoValues.png" alt="Update Network Configuration for HA" id="Update Network Configuration for HA" >}}

7. Use either <kbd>Tab</kbd> or the arrow keys to select each field. Type the value for each field listed below. Press <kbd>Enter</kbd> after each value.

   {{< truetable>}}
   | Field | Description/Example |
   |-------|---------------------|
   | **hostname** | The host name you assign to controller 1. For example *m50-123-1*.  |
   | **domain**| The domain name for the nework controller 1. For example *my.companyname.net* |
   | **ipv4gateway** | The default gateway IP address for your network. |
   | **nameserver1**<br>**nameserver2** | The IP addresses for your network DNS servers. |
   {{< /truetable >}}

8. Use either <kbd>Tab</kbd> or the arrow keys to select **Save**, then type <kbd>q</kbd> to return to the main Console setup menu.

### Configuring Settings in the TrueNAS UI

{{< hint type=note >}}
This section only applies to controller 1. Do not configure settings on controller 2.
{{< /hint >}}

Use the TrueNAS UI to:

1. [Apply the HA license](#applying-the-ha-license).
2. [Complete the network settings](#configure-network-settings).
3. [Add the first storage pool](#adding-the-storage-pool).
4. [Sync controller 1 with controller 2](#syncing-controller-1-and-2).

### Applying the HA License

TrueNAS UI Enterprise customers see the End User License Agreement (EULA) screen the first time they log in.
Sign the agreement to open the main TrueNAS **Dashboard**.
Apply the system license next.

Go to **System > General Settings** and click **Add License** on the **Support** widget. Copy your license and paste it into the **License** field, then click **Save License**.
The **Reload** dialog opens. Click **Reload Now**. Controller 1 restarts, and displays the EULA for controller 2. Sign the EULA agreement for controller 2, and add the license.

The controller 1 and 2 (or a and b) serial numbers display on the **Support** widget on the **System > General Settings** screen.

### Configuring Network Settings
{{< include file="/static/includes/ConfigureController1Networking.md" >}}

### Adding the Storage Pool

Create or import a storage pool from a backup. You must have at least one storage pool on controller 1.
After saving the storage pool, controller 2 automatically restarts. Wait until it comes back online before syncing controller 1 with controller 2.

For more information on how to create a new pool [click here]({{< relref "CreatePoolWizard" >}}).
For more information on how to import a pool [click here]({{< relref "ImportPoolSCALE" >}}).

### Syncing Controller 1 and 2

1. Turn the failover service back on. Go to **System > Services** locate the **Failover** service and click edit.

2. Select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**.
   The system might restart. Use IPMI to monitor the status of controller 2 and wait until the controller is back up and running.

3. Log out of the controller 1 UI, and log in using the VIP address.

4. Sync controller 1 and 2.
   With controller 2 powered on, but not configured, from controller 1 click **Sync To Peer**.
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation.
   This sync controller 2 with controller 1 which adds the network settings and pool to controller 2.

   {{< trueimage src="/images/SCALE/SystemSettings/FailoverSyncToPeerDialog.png" alt="Failover Sync To Peer" id="Failover Sync To Peer" >}}

When the system comes back up, log into TrueNAS using the virtual IP address.
The main **Dashboard** displays two **System Information** widgets. In standard configurations by iXsystems, Controller 1 shows its serial number and a host name that includes the letter **a**. Controller 2 is labeled as **Standby Controller** and shows its serial number and a host name that includes the letter **b**.
Take note of this information.

{{< trueimage src="/images/SCALE/Dashboard/HAMainDashboard.png" alt="Main Dashboard for HA Systems" id="Main Dashboard for HA Systems" >}}

### Troubleshooting HA Installation

If controller 2 comes online as the primary and controller 1 as the standby, you installed and configured the controllers incorrectly.
1. Go to **System > Failover**, clear the **Default TrueNAS Controller** option, and click **Save**. The system restarts and fails over to the current standby controller (in this case, to controller 1).

2. Log back into the UI with the VIP address. Go to **System > Failover** and select **Default TrueNAS Controller** to make controller 1 the primary controller.

3. Select **Sync to Peer**. TrueNAS makes controller 2 the standby controller and syncs the configuration on controller 1 to controller

4. Click **Save**.
