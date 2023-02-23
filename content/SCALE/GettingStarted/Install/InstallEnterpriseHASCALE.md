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
TrueNAS SCALE Enterprise will be generally available with the release of SCALE 22.12.2.
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

This article outlines a procedure to do a clean install of a SCALE Enterprise (HA) systems using an <kbd>iso</kbd> file. 
HA systems are dual controller systems. Execute this procedure on both controllers in the system. SCALE includes features and functions to help guide you with completing the process after you get to the SCALE UI.

### Preparing for a Clean Install
For a list of SCALE Enterprise (HA) preparation information, see [Preparing for SCALE UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}}).

Have this information handy to complete this procedure:
* All the assigned network addresses and host names (VIP, controller A and B IP addresses)
* Other network information including domain name(s), and DNS server, default gateway, alias or other static IP addresses
* The IPMI access addresses for each controller and the administration credentials for IPMI access to these addresses
* SCALE license file provided by iXsystems.
* SCALE Storage Controller A and B serial numbers (refer to contracts or documentation provided with the system, or contact iXsystems Support and provide your contract number)
{{< hint info >}}
HA system controllers each have serial numbers, the lower number assigned is for controller A (e.g. of two controller serial numbers assigned *A1-12345* and *A1-12346*, the *A1-12345* is for controller A and *A1-12346* is for controller B).
{{< /hint >}}
When restoring after a clean install, also have ready:
* Storage data backups to import into the Enterprise HA system.
* System configuration file from the previous TrueNAS install.

### Overview of the Install Procedure

The sections in this article cover these primary steps:

1. [Download](#downloading-the-scale-install-file) the <kbd>iso</kbd> file from the TrueNAS website and prepare a USB flash drive to use if not using IPMI for remote access.
2. [Log into your IPMI](#using-ipmi-to-install-the-iso-on-a-controller) system using the network address assigned to for controller A. 
3. [Install SCALE using the <kbd>iso</kbd> file](#using-ipmi-to-install-the-iso-on-a-controller) and use the **Fresh Install** option on controller A, and when complete, then repeat on controller B in the other IPMI session.
4. Use the DHCP-assigned IP address or assign the controller A IP address using the [Console Setup Menu](#configuring-the-network-with-console-setup-menu) to gain access to the SCALE UI.

   Use the SCALE UI for system configuration as it has safety mechanisms in place to prevent disrupting network access that could require you to repeat the clean install to access your system. However, if you are experienced with the Console Setup Menu and are using it to configure network settings you can configure the rest of the controller A network settings with the Console Setup Menu.

5. In a separate web browser session, log into the system IPMI using the network address assigned for controller B. 
   Leave the controller A IPMI connection up and where you left it at after completing step 4, and then [repeat step 3 for controller B](#using-ipmi-to-install-the-iso-on-a-controller).
6. [Log into the SCALE UI](#configuring-settings-in-the-scale-ui) to sign the EULA agreement on controller A and apply the system license.  
7. Disable failover to configure the rest of the network settings and edit the primary network interface on controller A, and then enable failover.
8. Complete the minimum storage requirement by adding or importing one pool on controller A.
9. Sign in using the Virtual IP (VIP) address.

These steps are described in detail in the sections that follow.

### Downloading the SCALE Install File

[Download](https://www.truenas.com/download-tn-scale/) the <kbd>.iso</kbd> file.

If you are remote to the system and are installing through an IPMI connection you do not need to save the <kbd>.iso</kbd> file to a USB flash drive.

If you are physically present with the TrueNAS SCALE system, burn the <kbd>.iso</kbd> file to a USB flash drive and use that as the install media.

### Using IPMI to Install the ISO on a Controller 
{{< hint info >}}
Use this process to install the <kbd>iso</kbd> file on controller A, and then after completing [Using the SCALE Installer](#using-the-scale-installer) on controller A, repeat this process for controller B. 
{{< /hint >}}
{{< expand "Installing ISO Steps" "v" >}}
1. Enter the IP address assigned to the controller A IPMI port into a web browser and log into your IPMI system with admin credentials.

2. Select **Remote Control > iKVM/HTML5** to open the Console Setup window. 

   IPMI interfaces can vary but they generally have options for **Remote Control** and **iKVM/HTML5** to open a console session on the platform.

3. Install the <kbd>.iso</kbd> file. Select the **Virtual Media > CD-ROM image** option in your IPMI system.

   a. Enter the IP address of where you downloaded the <kbd>.iso</kbd> file into **Share Host**.
      You might need assistance from your Network or IT department to obtain this address.
   b. Enter the path to the <kbd>.iso</kbd> file.
      For example, if you stored the file in an *iso* folder enter **/iso/TrueNAS-SCALE-22.12.1.iso** in **Path to Image**.
   c. Click **Save**, then **Mount**. You should see the <kbd>.iso</kbd> file under **Device 1** or the device name your IPMI configures.

3. Return to the **Remote Control > iKVM/HTML5** window opened in step 2. Either use your keyboard or open the keyboard in the window then:
   
   a. Type **8** to reboot controller A, and type **y** to confirm and reboot.

   b. As the system reboots, be prepared to hit the <kbd>F11</kbd> key when you first see the **TrueNAS Open Storage** splash screen.
      Alternatively you can start clicking on the **F11** key on the online keyboard until you see the TrueNAS SCALE Installer screen.

   c. Select the **UEFI: ATEN Virtual CDROM** device from the boot list. The bootstrap loader begins. When it ends the SCALE installer opens.
{{< /expand >}}
### Using the SCALE Installer
{{< hint info >}}
If you are doing a clean install from the SCALE <kbd>.iso</kbd> file to recover from an issue that requires you to re-install SCALE from the <kbd>.iso</kbd>, have your network configuration information ready to use after the installation completes.
Also have your SCALE system configuration file and data backups handy so you can recover your system settings and import your data into the recovered SCALE clean-install system.
{{< /hint >}}
{{< expand "SCALE Installer Steps" "v" >}}
{{< include file="/_includes/SCALEInstallerProcedure.md" type="page" >}}

7. Select **OK** after you see **The TrueNAS installation on <nvme0n1> succeeded** displays. The Console setup menu screen displays.

8. Enter **3** to **Reboot System** and immediately return to the IPMI **Virtual Media > CD-ROM image** screen to click **Unmount**. Click **Save**.
   If you fail to unmount the <kbd>iso</kbd> image before the system completes the reboot, the bootstrap install continues in a boot loop.

SCALE is now installed on controller A. Repeat this process for controller B starting with [Using IPMI to Install the ISO on a Controller](#using-ipmi-to-install-the-iso-on-a-controller).

{{< /expand >}}
### Configuring the Network with Console Setup Menu
After installing the both controller A and B <kbd>.iso</kbd> file and finishing the TrueNAS SCALE Installer process, if the TrueNAS SCALE server is connected to the network where DHCP is not enabled, use the Console setup menu to assign controller A main network interface the static IP address to allow access to the SCALE UI. 
TrueNAS SCALE uses DHCP to assign an IP address to the primary network interface to allow access to the SCALE UI.
{{< hint warning >}}
Only users with experience configuring network settings and using the Console setup menu should use it to configure all network settings. All other users should only use the Console Setup Menu to configure a static IP address for the primary network interface for Controller A to allow access to the SCALE UI.
The SCALE UI has safeguards in place to prevent network connectivity issues that could require a clean install of SCALE to restore access.
{{< /hint >}}
To use the Console setup menu to change the primary network interface IP address:

1. Type <kbd>1</kbd> and then press <kbd>Enter</kbd> to open the **Configure Network Interfaces** screen.
2. Use either <kbd>Tab</kbd> or the arrow keys to select the interface assigned as your primary network interface.
   If you have more than one interface installed and wired to your network, the primary interface is typically **eno1**.
3. Type in the IP address then use either <kbd>Tab</kbd> or the arrow keys to move through the menu and down to select **Save**, and then press <kbd>Enter</kbd>.
4. Type <kbd>q</kbd> to return to the main Console setup menu.

### Configuring Settings in the SCALE UI
SCALE UI Enterprise customers see the End User License Agreement (EULA) screen the first time they log in.
Sign the agreement to open the main SCALE **Dashboard**.
Apply the system license next.

Go to **System Settings > General** and click **Add License** on the **Support** widget. Copy your license and paste it into the **License** field, then click **Save License**.
The **Reload** dialog opens. Click **Reload Now**. Controller A restarts, and displays the EULA for controller B. Sign the EULA agreement for controller B, and add the license.

The A and B controller serial numbers display on the **Support** widget on the **System Settings > General** screen.

#### Configure Network Settings 
{{< hint warning >}}
You must disable the failover service before you can configure network settings!
{{< /hint >}}
SCALE Enterprise (HA) systems use three static IP addresses for access to the UI:

* VIP to provide UI access regardless of which controller is active. 
  If your system fails over from controller A to B, then fails over back to controller A later you might not know which controller is active.
* IP for controller A. If enabled on your network, DHCP assigns only the Controller A IP address. If not enabled, you must change this to the static IP address your network administrator assigned to this controller.
* IP for Controller B. DHCP does not assign the second controller an IP address.

Have your list of network addresses, host and domain names ready so you can complete the network configuration without disruption or system timeouts.
SCALE safeguards allow a default of 60 seconds to test and save changes to a network interface before reverting changes. This is to prevent users from breaking their network connection in SCALE.
{{< expand "Configuration Steps" "v">}}
To configure network settings:

1. Disable the failover service.
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** and click **Save**.

2. [Edit the Global Network settings]({{< relref "AddingGlobalConf.md" >}}) to add the host and domain names, DNS name server and default gateway address. 
   If enabled on your network, TrueNAS uses DHCP to assign global network addresses as well as the SCALE UI access IP address. If not enabled in your network, you must enter these values yourself. 
   Review the **Global Configuration** settings to verify they match the information your network administrator provided.

3. Edit the primary network interface.
   Go to **Network** and click on the primary interface **eno1** to open the **Edit Interface** screen for this interface.

   a. Turn DHCP off. Select **DHCP** to clear the checkbox.
      
      ![EditInterfaceInterfaceSettingsHA](/images/SCALE/22.12/EditInterfaceInterfaceSettingsHA.png "Edit Network Interface Settings")

   b. Add the failover settings. Select **Critical**, and then select **1** on the **Failover Group** dropdown list.
   
      ![EditInterfaceFailoveSettingsrHA](/images/SCALE/22.12/EditInterfaceFailoveSettingsrHA.png "Edit Network Interface Failover Settings")

   c. Add the virtual IP (VIP) and controller B IP. Click **Add** for **Aliases** to displays the additional IP address fields. 
      
      ![EditInterfaceAddAliasesHA](/images/SCALE/22.12/EditInterfaceAddAliasesHA.png "Edit Network Interface Add Alias IP Addresses")

      1. Type the IP address for controller A into **IP Address (This Controller)** and select the CIDR number from the dropdown list.

      2. Type the controller B IP address into **IP Address (TrueNAS Controller 2)** field.

      3. Type the VIP address into **Virtual IP Address (Failover Address) field.

      4. Click **Save**

   After editing the interface settings the **Test Changes** button displays. You have 60 seconds to test and then save changes before they revert. If this occurs, edit the interface again.

3. Create or import a storage pool from a backup. You must have at least one storage pool on controller A. 
   For more information on how to create a new pool [click here for more information]({{< relref "CreatePoolSCALE.md" >}}). 
   For more information on how to import a pool [click here for more information]({{< relref "ImportPoolSCALE.md" >}}).

4. Turn the failover service back on. 
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**.

   The system might reboot. Use IPMI to monitor the status of controller B and wait until the controller is back up and running then click **Sync To  Peer**. 
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation. This sync controller B with controller A which adds the network settings and pool to controller B.

   ![FailoverSyncToPeerDialog](/images/SCALE/22.12/FailoverSyncToPeerDialog.png "Failover Sync To Peer")

When the system comes back up, log into SCALE using the virtual IP address. The main **Dashboard** should now have two **System Information** widgets, one for controller A with the serial number and the host name that includes the letter **a** and the other for controller B labeled as **Standby Controller** and that includes the serial number and the host name that includes the leter **b**. Take note of this information.

![HAMainDashboard](/images/SCALE/22.12/HAMainDashboard.png "Main Dashboard for HA Systems")
{{< /expand >}}

{{< taglist tag="scaleinstall" title="Related Installation Articles" limit="20" >}}
{{< taglist tag="scaleenterprise" title="Related Enterprise Articles" limit="20" >}}
