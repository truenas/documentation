---
title: "TrueNAS vCenter Installation"
description: "Installing TrueNAS in vCenter" 
tags: ["vm", "TrueNAS Enterprise"]
---



### TrueNAS® vCenter Plugin Installation: Windows

Required Information and Settings
+ 1. The vCenter system root password must be known.
+ 2. The vCenter system must have internet access to https://vcplugin.ixsystems.com/plugin/vcp.
+ 3. SSH must be enabled on the vCenter system. 

Extract and Run Installer
Obtain the vCenter Plugin .zip installation file from iXsystems Support.
Open File Explorer, go to the file download folder (typically Downloads), right-click the vCenter Plugin .zip file, then click **Extract All…** .


<img src="/images/vcp-01.PNG">
<br><br>


Choose the extract location and unset Show extracted files when complete. Click Next to begin the extraction. When it completes, close all open windows.

#### [Powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6) is used to install the plugin. Right-click the Start menu and click Windows 

<img src="/images/vcp-02.PNG">
<br><br>

`cd` to the directory with the extracted files and enter .\bin\vcenter-truenas.bat -install to begin the install. In this example, the extracted plugin files are in Downloads/vcenter-truenas-setup-1.1-windows_jre:

<img src="/images/vcp-03.PNG">
<br><br>

The installer prompts for the vCenter hostname or IP address, username, and password:

<img src="/images/vcp-04.PNG">
<br><br>

#### Enable SSH
Log in to into the VMware Appliance Management portal by opening a new browser tab and entering the hostname or IP address of the vCenter server followed by :5480 in the address bar. Example: 1.2.3.4:5480
Replace 1.2.3.4 with the IP address of the vCenter server.

<img src="/images/vcp-05.PNG">
<br><br>

Log in with the administrator credentials and go to the Access page on the left-side menu. Click Edit.

<img src="/images/vcp-06.PNG">
<br><br>

Set Enable SSH Login and click OK.

{{% pageinfo %}}
vCenter 6.5 requires logging in as the root account, going to Access, and setting both Enable SSH Login and Enable BASH Shell.
{{% /pageinfo %}}

Close the browser tab and return to the Windows Powershell. Restart vSphere UI. The *vCenter VMware vSphere Web Client* service must be restarted after finishing the install process.
Use the [Windows 10 OpenSSH client](https://docs.microsoft.com/en-us/windowsserver/administration/openssh/openssh_install_firstuse) or a third-party SSH application and connect to the vCenter server hostname or IP address as the administrator account.
{{% pageinfo %}}
Note: For vCenter 6.5, open the SSH connection as `root`.
{{% /pageinfo %}}

These images show using [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) to connect as `Administrator@vsphere.local` to a vCenter server.

<img src="/images/vcp-07.PNG">
<br><br>

A security warning can appear when this is the first time exchanging SSH keys. After establishing the connection, enter `service-control --restart vsphere-ui`. The system returns `Successfully restarted service vsphere-ui` after a brief pause.

<img src="/images/vcp-08.PNG">
<br><br>

For vCenter 6.5 installations, type `shell`, then `service-control --stop vsphere-ui && servicecontrol --start vsphere-ui` to restart the service.

#### Finish vCenter Plugin Installation
Open a browser and log in to the vCenter system. A banner announces that the plugin has been installed. Press **F5** to refresh the browser.
The final step to deploying the plugin is to add vCenter credentials to the plugin. This allows vCenter to use the plugin to issue commands to connected TrueNAS® systems. In the vCenter web interface, go to **Menu** > **Global Inventory Lists** > **Manage TrueNAS** and click **vCenter Settings**.

<img src="/images/vcp-09.PNG">
<br><br>

Add the hostname or IP address of this vCenter system and valid username and password credentials. Click Configure vCenter and restart the vSphere UI once more to finish initializing the plugin. The vCenter interface is
now ready to connect to TrueNAS® systems.

#### Updating the Plugin

Open Powershell, cd to the directory with the extracted installer, and enter `.\bin\vcenter-truenas.bat - upgrade` to update the plugin to the latest version. The vCenter Plugin installer fetches the latest plugin version from https://vcplugin.ixsystems.com/plugin/vcp and applies it to the vCenter system configured in `conf/vmware.yml`.
An alternate update method is to remove the current plugin and install the new version. Log in to the Windows system that installed the plugin, open the Powershell, go to the location of the extracted plugin, and enter `.
\bin\vcenter-truenas.bat -uninstall` to uninstall the plugin. The plugin configuration and database is preserved. Follow the installation procedure described above to download and install the new version of the plugin.
The previous configuration is re-applied to the updated plugin.


#### Installer CLI Options

The bin/vcenter-truenas.bat installer has several options in the Powershell prompt. These commands must be run from the extracted vCenter plugin directory.

• .\bin\vcenter-truenas.bat -help displays all on-screen help for using the .bat.
• .\bin\vcenter-truenas.bat -install starts the plugin installation prompts.
• .\bin\vcenter-truenas.bat -upgrade upgrades the plugin to the latest version available from iXsystems.
• .\bin\vcenter-truenas.bat -uninstall removes the plugin from vCenter. All plugin settings are preserved.
• .\bin\vcenter-truenas.bat -support downloads a debug file from vCenter and stores it in the extracted vCenter plugin logs directory.
• .\bin\vcenter-truenas.bat -troubleshoot runs self-tests on the plugin to determine if it is functional.

### Files

The installer stores settings in subdirectories of the extracted plugin installer:

• conf/vmware.yml contains all configuration settings for the installer, including connection details for the associated vCenter server.
• db/ contains the plugin database. This is useful to search in situations where the plugin, vCenter, and TrueNAS databases are out of sync.
• log/ stores all logs generated by the -support flag.

