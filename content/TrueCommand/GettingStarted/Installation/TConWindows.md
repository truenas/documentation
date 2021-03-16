---
title: "Installing TrueCommand on Windows"
description: "Running TrueCommand in Docker Desktop for Windows"
tags: ["TrueCommand Docker", "TrueCommand"]
weight: 30
---

{{< hint info >}}
For even easier deployment, iXsystems now offers TrueCommand as a cloud service!
See the [TrueCommand information page](https://www.truenas.com/truecommand/) for more details.
{{< /hint >}}

{{< toc >}}

## Prerequisites

The requirements to run TrueCommand in Docker Desktop for Windows are:

 + Windows 10 Enterprise, Pro, or Education editions.
 + 64-bit Processor with Second Level Address Translation (SLAT).
 + CPU support for VM Monitor Mode Extension (VT-c on Intel CPUs).
 + Hyper-V is enabled in Windows 10.
 + 4 GB memory at minimum.
 + [Docker Desktop](https://www.docker.com/products/docker-desktop) needs to be installed in Windows.

### ### Enable Hyper-V

To enable Hyper-V, click on Windows Start button and select or search for *Apps & Features*.
Select *Programs and Features* under **Related settings** and *Turn Windows Features on or off* (Administrator action).
Set the Hyper-V option and click *Ok*.
 You will need to restart your restart your computer for the change to take effect.

![EnableHyperV](/images/TrueCommand/EnableHyperV.png "Enable HyperV")

Alternatively, Hyper-V can be enabled with the **Powershell**.
To do this, run Powershell as a Windows Administrator and enter `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`.
If an error is returned that says the command could not be found, verify that you are running PowerShell as the Administrator.
After the command successfully runs, reboot the computer.

![PowershellHyperVCLI](/images/TrueCommand/PowershellHyperVCLI.png "Powershell HyperV CLI")

### Install Docker Desktop

Open Docker Hub and click *[Get Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)*.

![DownloadDockerDesktop](/images/TrueCommand/DownloadDockerDesktop.png "Download Docker Desktop")

Run the installer after the download completes.
When the installer is finished, reboot the system.

{{< expand "Different Admin accounts?" "v" >}}
If the admin account is different from your Windows user account, the user must be added to the `docker-users` group.
Run *Computer Management* as an administrator and go to **Local Users and Groups > Groups > docker-users** to add the user to the group.
Changes take effect after logging out and back in.
{{< /expand >}}

{{< expand "WSL 2 Install Incomplete?" "v" >}}
If this error message appears after rebooting, install the Linux Kernel Update Package:

![DockerDesktopError](/images/TrueCommand/DockerDesktopError.png "Docker Desktop Error")

The update package is downloaded from a [Windows storage location](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

![DockerDesktopInstallWSL](/images/TrueCommand/DockerDesktopInstallWSL.png "Docker Desktop Install WSL")

Microsoft has additional documentation available for assistance with [downloading the Linux kernel update](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package).

After installing the kernel update, set the WSL default version to `version 2` by opening the Powershell and entering `wsl --set-default-version 2`.

![DockerDesktopSetWSLDefault](/images/TrueCommand/DockerDesktopSetWSLDefault.png "Docker Desktop Set WSL Default")

The system must be rebooted after changing the default version.
{{< /expand >}}

## Installing the TrueCommand Docker Container

Open the [Docker Hub](https://hub.docker.com) in a browser and search for `ixsystems/truecommand`.

![DockerHubSearchResults](/images/TrueCommand/DockerHubSearchResults.png "Finding the TrueCommand Container")

![DockerHubTrueCommand](/images/TrueCommand/DockerHubTrueCommand.png "TrueCommand Container details")

Verify the pull command required and run it from a command line. Example: `docker pull ixsystems/truecommand:latest`.

![DockerHubCLIInstallTrueCommand](/images/TrueCommand/DockerHubCLIInstallTrueCommand.png "CLI: Install TrueCommand Container")

When the container is downloaded, open the Docker Desktop and select *Images*.
Hover over the *ixsystems/truecommand* entry to show the **Run** button, then click it.

![DockerDesktopImages](/images/TrueCommand/DockerDesktopImages.png "Docker Desktop: Starting the TrueCommand Container")

Open the *Optional Settings* drop down menu, name the container, and set the following port values.
Investigate your network environment or check with your IT department to ensure that these ports will not conflict with any other running services.

* Local Host Port: `9005`
* Container Port `443`

Click the `+` sign to add a second set of ports.

* Local Host Port `9004`
* Container Port `80/tcp`

![DockerDesktopTrueCommandConfig](/images/TrueCommand/DockerDesktopTrueCommandConfig.png "")

Setting the **Volume** is not usually required for TrueCommand.
Click *RUN* after configuring the settings.

When Docker Desktop shows the container status as **RUNNING**, open a new browser tab and go to `https://127.0.0.1:9005`.

![DockerDesktopTrueCommandRunning](/images/TrueCommand/DockerDesktopTrueCommandRunning.png "TrueCommand Container is running")
After creating the account the login screen refreshes and you can log in with the account credentials that were just created.
TrueCommand can now be configured and begin to be used.
See the remaining [TrueCommand Administration articles](https://www.truenas.com/docs/truecommand/admins/) for specific usage guides.

{{< include file="static/includes/AddingBrowserExceptions.md.part" markdown="true" >}}

{{< include file="static/includes/TCSupport.md.part" markdown="true" >}}
