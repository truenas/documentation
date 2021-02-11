---
title: "Installing TrueCommand on Windows"
description: "Running TrueCommand in Docker Desktop for Windows"
tags: ["TrueCommand Docker", "TrueCommand"]
---


{{% pageinfo %}}
iXsystems now offers TrueCommand as a cloud service, refer to the [TrueCommand site](https://www.truenas.com/truecommand/) for more information.
{{% /pageinfo %}}


### Pre-requisites

The requirements to run TrueCommand in Docker Desktop for Windows are:

 + Windows 10 Enterprise, Pro, or Education
 + 64-bit Processor with Second Level Address Translation (SLAT).
 + CPU support for VM Monitor Mode Extension (VT-c on Intel CPUs).
 + Enabled Hyper-V on Windows 10
 + Minimum of 4 GB memory.

#### Enable Hyper-V

To Enable Hyper-V, click on the Windows Start button and select "*Apps and Features*.  Select *Programs and Features* under related settings and then select *Turn Windows Features on or off*.  Enable Hyper-V and click **Ok**.  Once you have enabled Hyper-V, restart your computer.

<img src="/images/EnableHyperV.png">
<br><br>

Alternatively you can enable Hyper-V using Powershell.  To accomplish this, run Powershell as Administrator, and run: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`.  If you get an error saying that the command could not be found, verify that you are running PowerShell as the Administrator.  Once the installation has completed, reboot.

<img src="/images/PowershellHyperV1.png">
<br><br>
<img src="/images/PowershellHyperV2.png">
<br><br>


#### Install Docker Desktop

Open Docker Hub and click the *Get Docker* button to download the [Docker Desktop from Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows/).

<img src="/images/DownloadDockerDesktop.png">
<br><br>

Once the download has completed, run the Docker Installer

<img src="/images/DockerDesktop1.png">
<br><br>
<img src="/images/DockerDesktop2.png">
<br><br>
<img src="/images/DockerDesktop3.png">
<br><br>

After the Installer has completed, reboot the system.

If the admin account is different from your Windows user account, the user must be added to the docker-users group. Run Computer Management as an administrator and navigate to **Local Users and Groups > Groups > docker-users** to add the user to the group.  You will need to Log out and then log back in for the changes to take effect.


If after rebooting you are presented with the following error, install the Linux Kernel Update Package.

<img src="/images/DockerDesktop4Error.png">
<br><br>

Update package can be downloaded from [this link](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

<img src="/images/DockerDesktop5.png">
<br><br>

Refer to the [Microsoft Documentatation](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package) if you need more information The 

Once the Kernel Update has been installed, set the default version of WSL to version 2 with the powershell command: `wsl --set-default-version 2`.

<img src="/images/DockerDesktop6.png">
<br><br>

Once the default version has been set, reboot the machine again.

#### Installing the TrueCommand Docker Container

While the machine reboots, open the [Docker Hub](https://hub.docker.com) in your browser and search for `ixsystems/truecommand`

<img src="/images/DockerHub1.png">
<br><br>


<img src="/images/DockerHub2.png">
<br><br>

Verify the pull command required and run it from the CLI, `docker pull ixsystems/truecommand:latest`

<img src="/images/DockerHub3.png">
<br><br>

Once that has completed, open the Docker Desktop, select *Images*, and Click on **Run**.

<img src="/images/DockerDesktop7.png">
<br><br>

Open the Optional Settings drop down mnu and name the Container and set the following port values
+ Local Host Port: `9005` 
+ Container Port `443`

Click the + sign to add the second port.

+ Local Host Port `9004`
+ Container Port `80/tcp`

<img src="/images/DockerDesktop8.png">
<br><br>

Check with your IT department to ensure that those ports will not conflict with any other running services. Setting the Volume is not usually required for TrueCommand.  When those values are set, click **RUN**

When Docker Desktop shows the containter status as **RUNNING**, open your browser and navigate to: `https://127.0.0.1:9005`.

<img src="/images/DockerDesktop9.png">
<br><br>

Due to the self signed certificate you will need to authorize the cert to open the TrueCommand Web Interface

<img src="/images/DockerBrowser1.png">
<br><br>

The initial TrueCommand screen requires you to set up the Root account and password before logging in.  
<img src="/images/DockerBrowser2.png">
<br><br>
<!-- markdown-link-check-disable-next-line -->
Once this is completed, TrueCommand can be used as normal.  Refer to the [TrueCommand Administration Documentation](https://www.truenas.com/docs/truecommand/admins/) for usage guides and instructions.  

#### Support

The [iXsystems Community](https://www.ixsystems.com/community/) is an active online resource for asking questions, troubleshooting issues, and sharing information with other TrueNAS users. [Registering](https://www.ixsystems.com/community/register/) is required for posting. New users are encouraged to briefly [introduce](https://www.ixsystems.com/community/forums/introductions.25/) themselves and review the [forum rules](https://www.ixsystems.com/community/threads/forum-rules.45124/) before posting.

TrueNAS Enterprise customers can contact iXsystems for support if an issue occurs. To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [TrueCommand Support](https://www.ixsystems.com/support/#truecommand). To purchase support, please call 1-855-GREP-4-IX (US Toll Free) or 1-408-943-4100.

