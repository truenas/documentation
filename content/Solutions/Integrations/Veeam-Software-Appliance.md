---
title: "Veeam Software Appliance"
description: "How to deploy the Veeam Software Appliance on a TrueNAS environment."
weight: 43
---

Veeam version 13 includes a new [Linux Software Appliance](https://www.veeam.com/products/veeam-data-platform/software-appliance.html) image that integrates with TrueNAS as a virtual machine deployment.
The goal for this appliance image is smoother, more secure, and easily accessible deployments of Veeam Backup & Replication.

<!-- Hugo-processed content for component versions tab box -->
<div style="display: none;" id="requirements-tab-content-source">
  <div data-tab-id="software-appliance-requirements" data-tab-label="Veeam Software Appliance Requirements">

  **Hardware**
  
  These requirements are provided by the [official Veeam help center](https://helpcenter.veeam.com/docs/vbr/userguide/system_requirements.html?ver=13):
  
  * CPU: x86-64 processor (minimum 8 cores recommended).
  * Memory: 16 GB RAM plus 500 MB RAM for each concurrent job.
  * Disk 1: 240 GB SSD backed minimum, with recommendations for different size environments:
    * Small (up to a few hundred workloads): 480 GB SSD backed
    * Medium (up to a few thousand workloads): 960 GB SSD backed
    * Large: Multi-TB SSD
    Larger capacities increases the disk space available to instant recovery cache, which allows running more machines for longer times.
  * Disk 2: 240 GB minimum and larger than Disk 1. This disk hosts guest file system catalogs and backups.
    Recommended sizing depends on your backup storage needs.
    Any additional disks found in the system automatically join with Disk 2 into the single Logical Volume Manager (LVM) spanned volume.
  
  **Additional**
  
  Have these additional elements prepared before starting the Veeam Software appliance deployment.
  
  * A TrueNAS environment with a storage pool and adequate specifications to host the virtual machine deployment.
    It is strongly recommended to use a storage pool configured with a [SLOG](https://www.truenas.com/docs/references/slog/) device for best performance with this virtualization use case.
  * A VNC client. Connects to the TrueNAS VM for Veeam Software Appliance install and initial configuration.
  * Authenticator App. Veeam requires activating multifactor authentication (MFA) during the appliance initial configuration process.
  * Veeam license file. Veeam requires uploading a valid license to activate the software appliance.

  </div>
  <div data-tab-id="software-appliance-differences" data-tab-label="Differences with Traditional Backup & Replication">

  The Veeam Software Appliance release is growing towards the same maturity as the traditional Veeam Backup & Replication offering.
  The initial appliance image has these key differences:
  
  * At this time, the appliance supports the vSphere and Hyper-V virtualization platforms only.
  * The appliance does not support the object storage repository type.
  * File browser is not included and individual files cannot be retrieved from systems that have been backed up.
  * These advanced features are not present:
    * Entra support
    * Replication jobs
    * Tape backup support
    * WAN accelerators

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
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy2.png" alt="TrueNAS VM - Summary" id="TrueNAS VM - Summary" >}} <!-- This image needs to be replaced with a similar shot that shows at least the minimum specs recommended above. -->
	 
  3. Go to the Storage screen and edit the zvol created in step 2.
     From the zvol additional options, Set **Sync** to **Always**.
  
  4. From the Screen, create a new zvol that is larger than the disk created during VM creation.
     This zvol is the appliance Disk 2 and stores backups.
	 Set **Sync** to **Always** on this zvol too.

  5. Go to the Virtual Machines screen and expand the newly created VM entry.
     Click Devices > Add to see the Add Device screen.
	 Add the newly created zvol as a disk in AHCI mode.
     All other settings can remain at their defaults.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy3.png" alt="TrueNAS VM - Adding Veeam Software Appliance Disk 2" id="TrueNAS VM - Adding Veeam Software Appliance Disk 2" >}}
	 
  6. Start the VM. Note the VNC connection information.

  7. Use your preferred VNC client to connect to the VM over the port number and password configured with the VM.

  </div>
  <div data-tab-id="veeam-appliance-install" data-tab-label="2. Install the Veeam Software Appliance">

  After configuring the TrueNAS Virtual Machine (VM), continue to install the Veeam Software Appliance.
  
  1. On the Veeam Software Appliance splash screen, select Veeam Backup & Replication.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy4.png" alt="Veeam Software Appliance - Splash Screen" id="Veeam Software Appliance - Splash Screen" >}}  
  
  2. Choose between Install or Reinstall, according to your current use case.
     The VNC connection can close when the installer starts.
	 If this happens, use the VNC client to reconnect.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy5.png" alt="Veeam Software Appliance - Install or Reinstall" id="Veeam Software Appliance - Install or Reinstall" >}}
	 
  3. When installing, a final data loss warning appears.
     Respond accordingly and the installation begins.
	 The system reboots into the installer when the install completes.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy6.png" alt="Veeam Software Appliance - Installation Progress" id="Veeam Software Appliance - Installation Progress" >}}
	 
  4. Back in the TrueNAS UI, stop the VM.

  5. Go to the VM devices and remove the CD-ROM device.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy7.png" alt="TrueNAS VM - Removing the CD-ROM Device" id="TrueNAS VM - Removing the CD-ROM Device" >}}
  
  6. Start the VM and reconnect over VNC.

  </div>
  <div data-tab-id="veeam-appliance-configure" data-tab-label="3. Veeam Software Appliance Initial Configuration">

  The Veeam Software Appliance must be initially configured before it is actively usable.
  
  1. Review and agree to the Veeam licensing terms and conditions.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy8.png" alt="Veeam Software Appliance - License Agreements" id="Veeam Software Appliance - License Agreements" >}}
  
  2. Change the hostname as needed.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy9.png" alt="Veeam Software Appliance - Hostname" id="Veeam Software Appliance - Hostname" >}}
  
  3. Configure the network
  
	 {{< trueimage src="/images/Veeam/vsa_deploy10.png" alt="Veeam Software Appliance - Network Configuration" id="Veeam Software Appliance - Network Configuration" >}}
  
  4. When necessary, adjust the default NTP configuration.
     The default settings are sufficient for most environments.
 
  5. Set the system time zone.
  
	 {{< trueimage src="/images/Veeam/vsa_deploy11.png" alt="Veeam Software Appliance - Time Settings" id="Veeam Software Appliance - Time Settings" >}}
  
  6. Set the default **veeamadmin** password.
     This password must meet [DISA STIG](https://www.cyber.mil/stigs) guidelines for passwords.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy12.png" alt="Veeam Software Appliance - Administrator Setup" id="Veeam Software Appliance - Administrator Setup" >}}
	 
  7. Veeam also requires enabling Multi-Factor Authentication (MFA) using an authenticator app.
     Follow the on-screen instructions to configure MFA.
  
  	 {{< trueimage src="/images/Veeam/vsa_deploy13.png" alt="Veeam Software Appliance - Multi-Factor Authentication" id="Veeam Software Appliance - Multi-Factor Authentication" >}}
  
  8. (Optional) Configure the security officer account.
     When configured, this account must provide their credentials before any sensitive actions occur on the appliance.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy14.png" alt="Veeam Software Appliance - Security Officer" id="Veeam Software Appliance - Security Officer" >}}
	 
  9. Review and finalize the configuration.
     The system boots after final confirmation.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy15.png" alt="Veeam Software Appliance - Configuration Confirm" id="Veeam Software Appliance - Configuration Confirm" >}}
	 
  </div>
  <div data-tab-id="veeam-appliance-access" data-tab-label="4. Accessing the Veeam User Interface">

  After initialization, the system boots and shows details for the host management console and the Veeam Backup & Replication web UI.
  
  {{< trueimage src="/images/Veeam/vsa_deploy16.png" alt="Veeam Software Appliance - Boot Screen" id="Veeam Software Appliance - Boot Screen" >}}

  The host management console configures network, users, time, and other advanced features, siilar to the appliance initialization process.
  The Veeam web UI manages standard Veeam operations similarly to Veeam Backup & Replication running from a Windows environment.

  1. Use a browser to access the Veeam Backup & Replication web UI and wait for any automated updates to complete.

  2. The Veeam Software Appliance requires a license.
     Upload your license file at this time.
	 
	 {{< trueimage src="/images/Veeam/vsa_deploy17.png" alt="Veeam Backup & Replication - License Information" id="Veeam Backup & Replication - License Information" >}}
	 
  3. Veeam Backup & Replication is ready to use!
  
  Some actions immediately available are:

  1. Add managed servers.

  2. Configure backup repositories.

  3. Create backup jobs.
  
  {{< trueimage src="/images/Veeam/vsa_deploy18.png" alt="Veeam Backup & Replication - Overview" id="Veeam Backup & Replication - Overview" >}}

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