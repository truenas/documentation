---
title: "Installing SCALE Enterprise (HA)"
description: "This article provides a sequential process to complete the installation of a SCALE Enterprise (HA) dual controller system using an iso file and the SCALE UI."
weight: 16
aliases:
tag:
- scaleinstall
- scaleenterprise
---

{{< toc >}}

{{< enterprise >}}
TrueNAS SCALE Enterprise is generally available with the release of SCALE 22.12.2.
Do not attempt to install Enterprise High Availability systems with TrueNAS SCALE until it becomes generally available or the deployment is experimental in nature.

Installing TrueNAS SCALE on High Availability (HA) systems is complicated and should be guided by Enterprise level support.
Contact iXsystems Support for assistance whenever attempting to install TrueNAS SCALE on Enterprise HA hardware.

{{< expand "Contacting Support" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /expand >}}

Do NOT use Linux or CLI commands to recover or clean-install the SCALE <kbd>iso</kbd> file or configure any initial configuration settings!
Incorrect use of CLI commands can further disrupt your system access and can potentially do greater damage to your system. Proceed at your own risk.
{{< /enterprise >}}

## Installing SCALE for an Enterprise (HA) System

This article outlines a procedure to do a clean install of a SCALE Enterprise High Availability (HA) systems using an <file>iso</file> file.

HA systems are dual controller systems with the primary controller referred to as controller 1 (sometimes also as controller A) and controller 2 (or controller B). 
{{< include file="/content/_includes/HAControllerInstallBestPracticeSCALE.md" type="page" >}}

SCALE includes features and functions to help guide with completing the configuration process after installing and getting access to the SCALE web interface.

### Preparing for a Clean Install
For a list of SCALE Enterprise (HA) preparation information, see [Preparing for SCALE UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}}).

Have this information handy to complete this procedure:
* All the assigned network addresses and host names (VIP, controller 1 and 2 IP addresses)
* Other network information including domain name(s), and DNS server, default gateway, alias or other static IP addresses
* The IPMI access addresses for each controller and the administration credentials for IPMI access to these addresses
* SCALE license file provided by iXsystems.
* SCALE Storage Controller 1 (A) and 2 (B) serial numbers (refer to contracts or documentation provided with the system, or contact iXsystems Support and provide your contract number)
{{< hint info >}}
HA system controllers each have serial numbers, the lower number assigned is for controller 1 (e.g. of two controller serial numbers assigned *A1-12345* and *A1-12346*, the *A1-12345* is for controller 1 and *A1-12346* is for controller 2).
{{< /hint >}}
When restoring after a clean install, also have ready:
* Storage data backups to import into the Enterprise HA system.
* System configuration file from the previous TrueNAS install.

### Overview of the Installation Procedure
{{< hint warning >}}
{{< include file="/content/_includes/HAControllerInstallBestPracticeSCALE.md" type="page" >}}
{{< /hint >}}

There are two ways to install the HA dual controller system to ensure controller 1 comes online as the primary controller:

* Install both controller simultaneously beginning with controller 1, then immediately starting the install on controller 2.
* Installing each controller individually to specific points in the installation process.

Simultaneous installation must start with controller 1 so it comes online first. 
Installing each controller individually follows a particular method to ensure controller 1 comes online as the primary controller.

The sections in this article cover the primary steps as a simultaneous installation:

1. [Download](#downloading-the-scale-install-file) the <file>iso</file> file from the TrueNAS website and prepare the USB flash drives if not using IPMI for remote access.
2. [Log into your IPMI](#using-ipmi-to-install-the-iso-on-a-controller) system using the network address assigned to controller 1, and then establish a second connection with controller 2 in a new browser session. 
3. [Install SCALE using the <file>iso</file> file](#using-ipmi-to-install-the-iso-on-a-controller) and select the **Fresh Install** option. 
   Install on controller 1, then immediately begin installing on controller 2 in the other IPMI session to simultaneously install SCALE on both controllers.

4. Use the DHCP-assigned IP address or assign the controller 1 IP address using the [Console Setup Menu](#configuring-the-network-with-console-setup-menu) to gain access to the SCALE UI.

   Use the SCALE UI for system configuration as it has safety mechanisms in place to prevent disrupting network access that could require you to repeat the clean install to access your system. 
   However, if you are experienced with the Console Setup Menu and are using it to configure network settings you can configure the rest of the controller 1 network settings with the Console setup menu.

5. [Log into the SCALE UI](#configuring-settings-in-the-scale-ui) for controller 1 to sign the EULA agreement and apply the system HA license.  
6. Disable failover to configure the rest of the network settings and edit the primary network interface on controller 1, and then enable failover.
7. Complete the minimum storage requirement by adding or importing one pool on controller 1.
8. Sign in using the Virtual IP (VIP) address.
9. With controller 2 powered up, on controller 1 sync to peer to complete the install and make controller 2 the standby controller.

The sections that follow describe these steps in detail.

#### Overview of the Alternative Installation Process
This process of installing each controller sequentially has two methods:

* Install and configure controller 1 up to the point where you are ready to sync to controller 2.
  Then install controller 2 and reboot. When the console setup menu displays, switch back to controller 1 and sync to peer.
  This synchronizes the completed configuration from controller 1 to controller 2 and keeps controller 1 designated as the primary controller.
Or 
* Begin installing controller 2 immediately after installing controller 1. When controller 2 finishes installing, power it off and keep it powered down.
  When finished configuring controller 1, power up controller 2 and wait for it to finish booting. Switch back to controller 1 and sync the configuration to controller 2.

This section provides an overview of the alternative method to clean install an HA system with controller 2 powered off while installing and configuring controller 1.
These steps are nearly identical to the section above but controller 2 is either powered off or not installed while you install and configure controller 1.

1. Use either the prepared USB flash drive inserted into a USB port for controller 1 or log into an IPMI session and install SCALE on controller 1.
   Finish the installation and allow controller 1 to complete its first boot.
2. Use either the prepared USB flash drives inserted into a USB port for controller 2 or login into an IPMI session for controller 2 to install SCALE.
   When the installation finishes, power down controller 2.  
3. Configure network settings on controller 1 either with the Console setup menu or using the UI.
4. Log into controller 1 using the IP address assigned to controller 1.
   Apply the HA license, sign the EULA, and complete the UI configuration to the point where you are ready to sync to peer on controller 1, but do not sync yet.
5. Power up controller 2 and wait for it to complete the boot process.
6. Log into controller 1, go to **System Settings > Failover**, and click **Sync to Peer**.
   This synchronizes controller 2 with controller 1 and reboots controller 2. Controller 2 becomes the standby controller when it finishes rebooting.

### Downloading the SCALE Install File

[Download](https://www.truenas.com/download-tn-scale/) the <file>.iso</file> file.

If you are remote to the system and are installing through an IPMI connection you do not need to save the <kbd>.iso</kbd> file to a USB flash drive.

If you are physically present with the TrueNAS SCALE system, burn the <file>.iso</file> file to a USB flash drive and use that as the install media.

### Using IPMI to Install the ISO on a Controller 

Use this process to install the <file>iso</file> file on both controller 1 and controller 2. Best practice is to begin the install on controller 1, then immediately on controller 2. 

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
   
   a. Type **8** to reboot controller 1 (also repeat for controller 2), and type **y** to confirm and reboot.

   b. As the system reboots, be prepared to hit the <kbd>F11</kbd> key when you first see the **TrueNAS Open Storage** splash screen.
      Alternatively you can start clicking on the **F11** key on the online keyboard until you see the TrueNAS SCALE Installer screen.

   c. Select the **UEFI: ATEN Virtual CDROM** device from the boot list. The bootstrap loader begins. When it ends the SCALE installer opens.
{{< /expand >}}
### Using the SCALE Installer
{{< hint info >}}
If you are doing a clean install from the SCALE <file>.iso</file> file to recover from an issue that requires you to re-install SCALE from the <file>.iso</file>, have your network configuration information ready to use for controller 1 after the installation completes. Do not configure network settings on controller 2.
Also have your SCALE system configuration file and data backups handy so you can recover your system settings and import your data into the recovered SCALE clean-install system.
{{< /hint >}}
{{< expand "SCALE Installer Steps" "v" >}}
{{< include file="/_includes/SCALEInstallerProcedure.md" type="page" >}}

7. Select **OK** after you see **The TrueNAS installation on <nvme0n1> succeeded** displays. The Console setup menu screen displays.

8. Enter **3** to **Reboot System** and immediately return to the IPMI **Virtual Media > CD-ROM image** screen to click **Unmount**. Click **Save**.
   If you fail to unmount the <file>iso</file> image before the system completes the reboot, the bootstrap install continues in a boot loop.

SCALE is now installed on controller 1 and repeated for controller 2 starting with [Using IPMI to Install the ISO on a Controller](#using-ipmi-to-install-the-iso-on-a-controller).

{{< /expand >}}
### Configuring the Network with Console Setup Menu
After installing the both controller 1 and 2 <file>.iso</file> file and finishing the TrueNAS SCALE Installer process, if the TrueNAS SCALE server is connected to the network where DHCP is not enabled, use the Console setup menu to assign controller 1 main network interface the static IP address to allow access to the SCALE UI. 
TrueNAS SCALE uses DHCP to assign an IP address to the primary network interface to allow access to the SCALE UI.
{{< hint warning >}}
Only users with experience configuring network settings and using the Console setup menu should use it to configure all network settings. All other users should only use the Console setup menu to configure a static IP address for the primary network interface for controller 1 to allow access to the SCALE UI.
The SCALE UI has safeguards in place to prevent network connectivity issues that could require a clean install of SCALE to restore access.
{{< /hint >}}
To use the Console setup menu to change the primary network interface IP address on controller 1:

1. Type <kbd>1</kbd> and then press <kbd>Enter</kbd> to open the **Configure Network Interfaces** screen.
2. Use either <kbd>Tab</kbd> or the arrow keys to select the interface assigned as your primary network interface.
   If you have more than one interface installed and wired to your network, the primary interface is typically **eno1**.
3. Type in the IP address then use either <kbd>Tab</kbd> or the arrow keys to move through the menu and down to select **Save**, and then press <kbd>Enter</kbd>.
4. Type <kbd>q</kbd> to return to the main Console setup menu.

### Configuring Settings in the SCALE UI
{{< hint info >}}
This section only applies to controller 1. Do not configure settings on controller 2.
{{< /hint >}}
SCALE UI Enterprise customers see the End User License Agreement (EULA) screen the first time they log in.
Sign the agreement to open the main SCALE **Dashboard**.
Apply the system license next.

Go to **System Settings > General** and click **Add License** on the **Support** widget. Copy your license and paste it into the **License** field, then click **Save License**.
The **Reload** dialog opens. Click **Reload Now**. Controller 1 restarts, and displays the EULA for controller 2. Sign the EULA agreement for controller 2, and add the license.

The controller 1 and 2 (or a and b) serial numbers display on the **Support** widget on the **System Settings > General** screen.

#### Configure Network Settings 
{{< hint warning >}}
You must disable the failover service before you can configure network settings!

Only configure network settings on controller 1! When ready to sync to peer, SCALE applies settings to controller 2 at that time.
{{< /hint >}}
SCALE Enterprise (HA) systems use three static IP addresses for access to the UI:

* VIP to provide UI access regardless of which controller is active. 
  If your system fails over from controller 1 to 2, then fails over back to controller 1 later you might not know which controller is active.
* IP for controller 1. If enabled on your network, DHCP assigns only the controller 1 IP address. 
  If not able to use DHCP, you must change this to the static IP address your network administrator assigned to this controller.
* IP for controller 2. DHCP does not assign the second controller an IP address.

Have your list of network addresses, host and domain names ready so you can complete the network configuration on controller 1 without disruption or system timeouts.
SCALE safeguards allow a default of 60 seconds to test and save changes to a network interface before reverting changes. This is to prevent users from breaking their network connection in SCALE.
{{< expand "Configuration Steps" "v">}}
To configure network settings on controller 1:

1. Disable the failover service.
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** and click **Save**.

2. [Edit the global network settings]({{< relref "AddingGlobalConf.md" >}}) to add the host and domain names, DNS name server and default gateway address. 
   If enabled on your network, TrueNAS uses DHCP to assign global network addresses as well as the SCALE UI access IP address. If not enabled in your network, you must enter these values yourself. 
   Review the **Global Configuration** settings to verify they match the information your network administrator provided.

3. Edit the primary network interface.
   Go to **Network** and click on the primary interface **eno1** to open the **Edit Interface** screen for this interface.

   a. Turn DHCP off. Select **DHCP** to clear the checkbox.
      
      ![EditInterfaceInterfaceSettingsHA](/images/SCALE/22.12/EditInterfaceInterfaceSettingsHA.png "Edit Network Interface Settings")

   b. Add the failover settings. Select **Critical**, and then select **1** on the **Failover Group** dropdown list.
   
      ![EditInterfaceFailoveSettingsrHA](/images/SCALE/22.12/EditInterfaceFailoveSettingsrHA.png "Edit Network Interface Failover Settings")

   c. Add the virtual IP (VIP) and controller 2 IP. Click **Add** for **Aliases** to displays the additional IP address fields. 
      
      ![EditInterfaceAddAliasesHA](/images/SCALE/22.12/EditInterfaceAddAliasesHA.png "Edit Network Interface Add Alias IP Addresses")

      1. Type the IP address for controller 1 into **IP Address (This Controller)** and select the CIDR number from the dropdown list.

      2. Type the controller 2 IP address into **IP Address (TrueNAS Controller 2)** field.

      3. Type the VIP address into **Virtual IP Address (Failover Address)** field.

      4. Click **Save**

   After editing the interface settings the **Test Changes** button displays. You have 60 seconds to test and then save changes before they revert. If this occurs, edit the interface again.

3. Create or import a storage pool from a backup. You must have at least one storage pool on controller 1. 
   For more information on how to create a new pool [click here for more information]({{< relref "CreatePoolSCALE.md" >}}). 
   For more information on how to import a pool [click here for more information]({{< relref "ImportPoolSCALE.md" >}}).

4. Turn the failover service back on. 
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**.

   The system might reboot. Use IPMI to monitor the status of controller 2 and wait until the controller is back up and running.

5. Log out of the controller 1 UI, and log in using the VIP address.

   With controller 2 powered on, but not configured, from controller 1 click **Sync To  Peer**. 
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation. This sync controller 2 with controller 1 which adds the network settings and pool to controller 2.

   ![FailoverSyncToPeerDialog](/images/SCALE/22.12/FailoverSyncToPeerDialog.png "Failover Sync To Peer")

When the system comes back up, log into SCALE using the virtual IP address. 
The main **Dashboard** should now have two **System Information** widgets, one for controller 1 with the serial number and the host name that includes the letter **a** and the other for controller 2 labeled as **Standby Controller** and that includes the serial number and the host name that includes the letter **b**. 
Take note of this information. 

![HAMainDashboard](/images/SCALE/22.12/HAMainDashboard.png "Main Dashboard for HA Systems")

#### Troubleshooting HA Installation
If controller 2 comes on line as the primary and controller 1 as the standby, you installed and configured these controllers incorrectly. 
Go to **System Settings > Failover**, clear the **Default TrueNAS Controller** option, and click **Save**. 
The system reboots and fails over to the current standby controller (in this case, to controller 1).
Log back into the UI with the VIP address, go to **System Settings > Failover** and select **Default TrueNAS Controller** to make controller 1 the primary controller.
and then select **Sync to Peer**. SCALE makes controller 2 the standby controller and syncs the configuration on controller 1 to controller 2.
Click **Save**.
{{< /expand >}}

{{< taglist tag="scaleinstall" title="Related Installation Articles" limit="20" >}}
{{< taglist tag="scaleenterprise" title="Related Enterprise Articles" limit="20" >}}
