---
title: "Veeam Infrastructure Appliance"
description: "How to deploy the Veeam Infrastructure Appliance on a TrueNAS environment."
weight: 44
---

Veeam version 13 includes a new [Veeam Infrastructure Appliance](https://helpcenter.veeam.com/rn/veeam_backup_13_0_1_release_notes.html#system-requirements-backup-infrastructure-veeam-infrastructure-appliance) image that integrates with TrueNAS as a virtual machine deployment.
The goal for this infrastructure appliance with TrueNAS is to integrate with an existing Veeam Backup & Replication deployment as a hardened backup repository for use in Veeam Jobs.

<!-- Hugo-processed content for component versions tab box -->
<div style="display: none;" id="requirements-tab-content-source">
  <div data-tab-id="infrastructure-appliance-requirements" data-tab-label="Veeam Infrastructure Appliance Requirements">

  **Hardware**
  
  These requirements are provided by the [official Veeam help center](https://helpcenter.veeam.com/docs/vbr/userguide/system_requirements.html?ver=13#veeam-infrastructure-appliance):
  
  * CPU: x86-64 processor (minimum 2 cores recommended).
  * Memory: 8 GB RAM.
  * Disk 1: 120 GB SSD backed minimum.
  * Disk 2: 120 GB minimum and larger than Disk 1.
    This disk hosts backups and sizing depends on the backup storage need.
    Any additional disks found in the system automatically join with Disk 2 into the single Logical Volume Manager (LVM) spanned volume.
  
  **Additional**
  
  Have these additional elements prepared before starting the Veeam Infrastructure Appliance deployment.
  
  * A TrueNAS environment with a storage pool and adequate specifications to host the virtual machine deployment.
    It is strongly recommended to use a storage pool configured with a [SLOG](https://www.truenas.com/docs/references/slog/) device for best performance with this virtualization use case.
  * A VNC client. Connects to the TrueNAS VM for Veeam Infrastructure Appliance install and initial configuration.
  * Authenticator App. Veeam requires activating multifactor authentication (MFA) during the appliance initial configuration process.
  * A Veeam Backup & Replication environment deployed with its web UI accessible.
  

  </div>
</div>

<!-- Linkable Tab Box -->
<div id="requirements-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script src="/js/jump-to-button-fix.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('requirements-tab-content-source', 'requirements-tabs-container');
});
</script>

## Installation Instructions

<!-- Hugo-processed content for tab box -->
<div style="display: none;" id="installation-tab-content-source">
  <div data-tab-id="virtual-machine-deploy" data-tab-label="1. Deploy a TrueNAS Virtual Machine"> 

  1. From the TrueNAS UI, go to the Virtual Machines screen and create a new Virtual Machine (VM).

     {{< trueimage src="/images/Veeam/vsa_deploy1.png" alt="TrueNAS Virtual Machines Screen" id="TrueNAS Virtual Machines Screen" >}}

  2. Configure the TrueNAS VM so that minimum Veeam requirements are met and the correct ISO image is used.
     The zvol created here is Disk 1 from the appliance requirements.
     Do not start the VM yet.
	 
	 {{< trueimage src="/images/Veeam/via_deploy2.png" alt="TrueNAS VM - Summary" id="TrueNAS VM - Summary" >}} <!-- This image needs to be replaced with a similar shot that shows at least the minimum specs recommended above. -->
	 
  3. Go to the Storage screen and edit the zvol created in step 2.
     From the zvol additional options, Set **Sync** to **Always**.
  
  4. From the Screen, create a new zvol that is larger than the disk created during VM creation.
     This zvol is the appliance Disk 2 and stores backups.
	 Set **Sync** to **Always** on this zvol too.

  5. Go to the Virtual Machines screen and expand the newly created VM entry.
     Click Devices > Add to see the Add Device screen.
	 Add the newly created zvol as a disk in AHCI mode.
     All other settings can remain at their defaults.
	 
	 {{< trueimage src="/images/Veeam/via_deploy3.png" alt="TrueNAS VM - Adding Veeam Infrastructure Appliance Disk 2" id="TrueNAS VM - Adding Veeam Infrastructure Appliance Disk 2" >}}
	 
  6. Start the VM. Note the VNC connection information.

  7. Use your preferred VNC client to connect to the VM over the port number and password configured with the VM.

  </div>
  <div data-tab-id="veeam-appliance-install" data-tab-label="2. Install the Veeam Infrastructure Appliance">

  After configuring the TrueNAS Virtual Machine (VM), continue to install the Veeam Infrastructure Appliance.
  
  1. On the Veeam Infrastructure Appliance splash screen, select **Veeam Hardened Repository**.
  
	 {{< trueimage src="/images/Veeam/via_deploy4.png" alt="Veeam Infrastructure Appliance - Splash Screen" id="Veeam Infrastructure Appliance - Splash Screen" >}}  
  
  2. Choose between Install, Upgrade, or Reinstall, according to your current use case.
     The VNC connection can close when the installer starts.
	 If this happens, use the VNC client to reconnect.
	 
	 {{< trueimage src="/images/Veeam/via_deploy5.png" alt="Veeam Infrastructure Appliance - Installer Choices" id="Veeam Infrastructure Appliance - Installer Choices" >}}
	 
  3. When installing, a final data loss warning appears.
     Respond accordingly and the installation begins.
	 The system reboots into the installer when the install completes.
	 
	 {{< trueimage src="/images/Veeam/via_deploy6.png" alt="Veeam Infrastructure Appliance - Installation Progress" id="Veeam Infrastructure Appliance - Installation Progress" >}}
	 
  4. Back in the TrueNAS UI, stop the VM.

  5. Go to the VM devices and remove the CD-ROM device.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy7.png" alt="TrueNAS VM - Removing the CD-ROM Device" id="TrueNAS VM - Removing the CD-ROM Device" >}}
  
  6. Start the VM and reconnect over VNC.

  </div>
  <div data-tab-id="veeam-appliance-configure" data-tab-label="3. Veeam Infrastructure Appliance Initial Configuration">

  The Veeam Infrastructure Appliance must be initially configured before it is actively usable.
  
  1. Review and agree to the Veeam licensing terms and conditions.
  
	 {{< trueimage src="/images/Veeam/via_deploy8.png" alt="Veeam Infrastructure Appliance - License Agreements" id="Veeam Infrastructure Appliance - License Agreements" >}}
  
  2. Change the hostname as needed.
  
	 {{< trueimage src="/images/Veeam/via_deploy9.png" alt="Veeam Infrastructure Appliance - Hostname" id="Veeam Infrastructure Appliance - Hostname" >}}
  
  3. Configure the network
  
	 {{< trueimage src="/images/Veeam/via_deploy10.png" alt="Veeam Infrastructure Appliance - Network Configuration" id="Veeam Infrastructure Appliance - Network Configuration" >}}
  
  4. When necessary, adjust the default NTP configuration.
     The default settings are sufficient for most environments.
 
  5. Set the system time zone.
  
	 {{< trueimage src="/images/Veeam/via_deploy11.png" alt="Veeam Infrastructure Appliance - Time Settings" id="Veeam Infrastructure Appliance - Time Settings" >}}
  
  6. Set the default **veeamadmin** password.
     This password must meet [DISA STIG](https://www.cyber.mil/stigs) guidelines for passwords.
	 
	 {{< trueimage src="/images/Veeam/via_deploy12.png" alt="Veeam Infrastructure Appliance - Administrator Setup" id="Veeam Infrastructure Appliance - Administrator Setup" >}}
	 
  7. Veeam also requires enabling Multi-Factor Authentication (MFA) using an authenticator app.
     Follow the on-screen instructions to configure MFA.
  
  	 {{< trueimage src="/images/Veeam/via_deploy13.png" alt="Veeam Infrastructure Appliance - Multi-Factor Authentication" id="Veeam Infrastructure Appliance - Multi-Factor Authentication" >}}
  
  8. (Optional) Configure the security officer account.
     When configured, this account must provide their credentials before any sensitive actions occur on the appliance.
	 
	 {{< trueimage src="/images/Veeam/via_deploy14.png" alt="Veeam Infrastructure Appliance - Security Officer" id="Veeam Infrastructure Appliance - Security Officer" >}}
	 
  9. Review and finalize the configuration.
     The system boots after final confirmation.
	 
	 {{< trueimage src="/images/Veeam/via_deploy15.png" alt="Veeam Infrastructure Appliance - Configuration Confirm" id="Veeam Infrastructure Appliance - Configuration Confirm" >}}
	 
  </div>
  <div data-tab-id="veeam-appliance-access" data-tab-label="4. Add the Hardened Repository to a Veeam Software Appliance">

  After initialization, the system boots and shows details for the Veeam Hardened Repository, including IP addresses and hostname.
  Record these details for later use.
  
  {{< trueimage src="/images/Veeam/via_deploy16.png" alt="Veeam Infrastructure Appliance - Boot Screen" id="Veeam Infrastructure Appliance - Boot Screen" >}}

  The hardened repository is ready for use with both traditional Windows-based Veeam environments and new Linux-based Software appliances.
  These instructions focus on the Linux-based Software appliance.

  1. Use a browser to access the Veeam Software Appliance web UI.

  2. Go to **Managed Servers** and click **Add Server**.
     Select **Veeam Infrastructure Appliance**.
	 
	 {{< trueimage src="/images/Veeam/via_deploy17.png" alt="Veeam Backup & Replication - Add Server" id="Veeam Backup & Replication - Add Server" >}}
	 
  3. Enter the Veeam Hardened Repository DNS name or IP address recorded at the beginning of this section.
     	 
	 {{< trueimage src="/images/Veeam/via_deploy18.png" alt="Veeam Backup & Replication - Server Configuration" id="Veeam Backup & Replication - Server Configuration" >}}
	 
  4. Confirm the validation popup and go to the next review screen.
     Veeam completes the server configuration.
	 This can take several minutes to complete.
	 
	 {{< trueimage src="/images/Veeam/via_deploy19.png" alt="Veeam Backup & Replication - Server Validation" id="Veeam Backup & Replication - Server Validation" >}}
  
  5. A job summary displays at the end of the process.
     Click OK to continue to adding the hardened repository.
	 
	 {{< trueimage src="/images/Veeam/via_deploy20.png" alt="Veeam Backup & Replication - Infrastructure Summary" id="Veeam Backup & Replication - Infrastructure Summary" >}}

  6. Go to the **Repositories** menu and click **Add Repository > Hardened Repository**.
  
     {{< trueimage src="/images/Veeam/via_deploy21.png" alt="Veeam Backup & Replication - Repositories" id="Veeam Backup & Replication - Repositories" >}}
	 
  7. Choose a recognizable name for the repository and click Next.
  
  8. Select the previously added Infrastructure Appliance, verify the capacity meets expectation, click the provided path, and click **Next**.
  
	 {{< trueimage src="/images/Veeam/via_deploy22.png" alt="Veeam Backup & Replication - Repository Server" id="Veeam Backup & Replication - Repository Server" >}}
	 
  9. The path is automatically populated.
     Click populate again to confirm the capacity matches expectations.
	 Define a length of time days for the **Make recent backups immutable for X days** option, according to the organizational need.
	 The remaining settings are typically left at their defaults.
	 
	 {{< trueimage src="/images/Veeam/via_deploy23.png" alt="Veeam Backup & Replication - Repository Settings" id="Veeam Backup & Replication - Repository Settings" >}}
	 
  10. Adjust the mount server settings as needed according to any specific organizational need.
      These are typically left at their defaults.

  11. Review all the configuration settings and click **Finish** when everything is correct.
      Veeam can take several minutes to complete the hardened repository configuration.
	  
	  {{< trueimage src="/images/Veeam/via_deploy24.png" alt="Veeam Backup & Replication - Repository Summary" id="Veeam Backup & Replication - Repository Summary" >}}

  12. From here, the hardened repository is added to Veeam Backup & Replication and is available for Jobs like any other repository.

  </div>
</div>

<!-- Linkable Tab Box -->
<div id="install-tabs-container"></div>

<script src="/js/linkable-tabs.js"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script src="/js/jump-to-button-fix.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('installation-tab-content-source', 'install-tabs-container');
});
</script>