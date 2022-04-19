---
title: "Installing or Updating"
weight: 10
geekdocCollapseSection: true
---

{{< toc >}}

TrueCommand is versatile and offers several different install options.
TrueCommand Cloud is the preferred method for using TrueCommand since it requires no local resources or specific hardware requirements to get started!

## Install Options

{{< tabs "TrueCommand Install Options" >}}
{{< tab "Cloud Deployment" >}}
TrueCommand Cloud is a SaaS offering of TrueCommand with a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS version v12.0 and newer.

## Register an iXsystems Account

Open https://portal.ixsystems.com and click **Register**. 

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

Fill out the form using the email address you want to use. 

![PortalAccountCreate](/images/TrueCommand/Cloud/PortalAccountCreate.png "Portal Account Create")
Check the address spam folder if the email does not arrive within a few minutes.
If the email is in the spam folder, mark it as *not spam* and add the account to the address book.
After receiving the verification email, open the link provided to verify the account.

## Create a New Subscription

Log in to the verified account and click **New Subscription**.  

![PortalDashboard](/images/TrueCommand/Cloud/PortalDashboard.png "Account Services: Dashboard")

![PortalCloudSubscription](/images/TrueCommand/Cloud/PortalCloudSubscription.png "Creating a Cloud Subscription")

Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.

![PortalCloudSubscriptionOptions](/images/TrueCommand/Cloud/PortalCloudSubscriptionOptions.png "Account Services: Cloud Subscription Options")

Click **Continue** to proceed.

![PortalCloudSubscriptionSelected](/images/TrueCommand/Cloud/PortalCloudSubscriptionSelected.png "Account Services: Cloud Subscription Selected")

Next, fill out the payment form. 

![CloudSubscriptionPayment](/images/TrueCommand/Cloud/CloudSubscriptionPayment.png "Cloud Subscription Payment")

Submit and wait for the form to be accepted.
When ready, click **Provision Now**.

![PortalDashboardActiveSubscription](/images/TrueCommand/Cloud/PortalDashboardActiveSubscription.png "Account Services: Active Subscriptions")

Select a **Subnet** that your network is not using.

![TrueCommandProvisionSubnet](/images/TrueCommand/Cloud/TrueCommandProvisionSubnet.png "Account Services: Provisioning TrueCommand")

## Managing a TrueCommand Cloud Account

From the account home page, click **Manage**.
Add a client for desktop or laptop to obtain a TrueCommand WireGuard Config file.

![CloudSubscriptionServiceDetails](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetails.png "Account Services: Service Details")

After adding the client, click <i class="fa fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i> to download the configuration file.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: Downloading the WireGuard Configuration File")

Open Wireguard on your machine and click **Add Tunnel**.

![WireGuardTunnels](/images/TrueCommand/WireGuardTunnels.png "WireGuard: Adding Tunnels")

Select the TrueCommand WireGuard Configuration file you downloaded.

![WireGuardTCCloudInactive](/images/TrueCommand/WireGuardTCCloudInactive.png "WireGuard: Tunnel Inactive")

Click **Activate** to initialize the Wireguard tunnel.

![WireGuardTCCloudActivate](/images/TrueCommand/WireGuardTCCloudActivate.png "WireGuard: Tunnel Active")

See the [WireGuard home page](https://www.wireguard.com) for more information on WireGuard and WireGuard clients.

The TrueCommand Cloud IP address is on the iXsystems account portal.

When WireGuard is active, log in to the TrueCommand Cloud interface by clicking the TrueCommand IP address on the portal, or manually enter the TrueCommand Cloud IP in a browser.

## Connecting Systems to a TrueCommand Cloud Instance

Log into the ixSystems cloud account and click **Manage**.
Under **Service Details**, copy the **TrueCommand API Key**.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the portal to confirm the connection and activate the TrueNAS system.

Click the **Discovered Systems** icon and select the TrueNAS system. TrueCommand automatically fills out the IP field using the WiredGuard address. Fill in the TrueNAS system nickname and password information from the TrueNAS system, and click **Add System**.

![NewSystemCreds](/images/TrueCommand/2.0/TC20NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.
{{< /tab >}}
{{< tab "VM Deployment" >}}

Deploying TrueCommand on a virtual machine (VM) requires different methods depending on which operating system you intend to use. 

You can find VM images and setup instructions on our [TrueCommand-install](https://github.com/ixsystems/truecommand-install) GitHub repository.

## Linux

### Debian

If you don't already have it, download the VM image [here](https://www.debian.org/CD/http-ftp/).

{{< hint info >}}
Ensure you have the "wget" utility installed first: `apt-get install wget`
{{< /hint >}}

Run this command (as root) from a system terminal:  
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/debian/setup.sh -O - | bash`

### Alpine

If you don't already have it, download the VM image [here](https://alpinelinux.org/downloads/).

{{< hint info >}}
Ensure you have the wget utility installed first: `apk add wget`.   
Ensure that you have the community package repository enabled:
* Edit the /etc/apk/repositories file as root and uncomment the community repository line.
* Run `apk update` to refresh the list of available packages.
{{< /hint >}}

Run this command (as root) from a system terminal:   
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/alpine/setup.sh -O - | sh`

### Void

If you don't already have it, download the VM image [here](https://voidlinux.org/download/).

{{< hint info >}}
Ensure you have the wget utility installed first: `xbps-install -y wget`
{{< /hint >}}

Run this command (as root) from a system terminal:   
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/void/setup.sh -O - | bash`

## Windows

If you don't already have it, download the VM image [here](https://www.microsoft.com/en-us/software-download/windows10).

On your Windows platform (VM or Bare-Metal):
1. Install [Docker for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/).
2. Open Windows PowerShell (**Start > Windows Power Shell > Windows Power Shell**)
3. Run the following command inside powershell to start TrueCommand:   
    `docker run --pull=always --restart unless-stopped --detach -v "[hostdirectory]:/data" -p [portnumber]:80 -p [sslportnumber]:443 ixsystems/truecommand`

{{< hint info >}}
Replace `[hostdirectory]` with a path to where you want TrueCommand to store its local database. Replace `[portnumber]` and `[sslportnumber]` with the ports you wish to expose for TC access.
{{< /hint >}}

If the command was successful, you should be able to access TrueCommand on http://localhost:80.
{{< /tab >}}
{{< tab "Docker (Linux)" >}}

## Installing the TrueCommand Container

{{< hint warning >}}
Docker Desktop for Windows uses Hyper-V, which interferes with other virtualization applications.
For example, Docker Desktop and VMware Workstation Player cannot simultaneously run.
{{< /hint >}}

Before fetching the TrueCommand docker image, create a local directory.
Enter `mkdir {DIRECTORY}` replacing `{DIRECTORY}` with the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.
Open a Command Line Interface (CLI) and enter `docker run \--detach -v "/{HOSTDIR}:/data" -p {PORT}:80 -p
{SSL}:443 ixsystems/truecommand:latest`.
`{HOSTDIR}` is a directory on the host machine for Docker container data, `{PORT}` is the TrueCommand web interface port number, and `{SSL}` is the port number for secure web interface access.

To install the container with an earlier TrueCommand release, replace `latest` with the desired TrueCommand version tag:
```
docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:1.3.2
```

{{< hint info >}}
Use [Windows compatible syntax](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats) when specifying paths in the Windows file system.
For example, if the created directory for the TrueCommand image was created in the Windows <file>Documents</file> folder, the `docker` command would be:
`docker run \--detach -v {C}:\Users\\{Example}\\Documents\\{DockerDir}`.
`{C}` is the drive letter, `{Example}` is the current user name, and `{DockerDir}` is the TrueCommand image directory.
{{< /hint >}}

Although there are different ways to run a Docker container, `-v /{hostdirectory}:/data` is required for TrueCommand to function.

{{< hint warning >}}
Do not try to use the same `{hostdirectory}` for two different containers!
Doing so results in file conflicts and database corruption.
{{< /hint >}}

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a **PORTS** column.
Find the port associated with the `ixsystems/truecommand:latest` **IMAGE**.
The **PORTS** entry is listed as `0.0.0.0:{port}->80/tcp`, `0.0.0.0:{sslport}->443/tcp` where `{port}` and `{sslport}` are the ports specified earlier.

To access the web interface with no encryption, enter `{hostsystemIPaddress}:port` in a browser address bar, where `{hostsystemIPaddress}` is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

{{< expand "The connection can't be established?" "v" >}}
When a connection to the web interface cannot be established, add the container ports as an exception to the host system firewall.
{{< /expand >}}
{{< /tab >}}
{{< tab "Docker Desktop (Windows)" >}}
The requirements to run TrueCommand in Docker Desktop for Windows are:

* Windows 10 Enterprise, Pro, or Education editions.
* 64-bit Processor with Second Level Address Translation (SLAT).
* CPU support for VM Monitor Mode Extension (VT-c on Intel CPUs).
* Hyper-V is enabled in Windows 10.
* 4 GB memory at minimum.
* [Docker Desktop](https://www.docker.com/products/docker-desktop) must be installed in Windows.

### Enable Hyper-V

Open the **Start** menu and search for **Apps & Features**.
Select **Programs and Features** under Related settings and Turn Windows Features on or off (Administrator action).
Set the Hyper-V option and click **Ok**.
Restart your computer for the change to take effect.

![EnableHyperV](/images/TrueCommand/EnableHyperV.png "Enable HyperV")

Alternatively, you can enable Hyper-V with Powershell.
Run Powershell as a Windows administrator and enter `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`.
If Powershell returns an error saying it couldn't find the command, verify that you are running PowerShell as administrator.
After the command successfully runs, reboot the computer.

![PowershellHyperVCLI](/images/TrueCommand/PowershellHyperVCLI.png "Powershell HyperV CLI")

### Install Docker Desktop

Open Docker Hub and click **[Get Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)**.

![DownloadDockerDesktop](/images/TrueCommand/DownloadDockerDesktop.png "Download Docker Desktop")

Run the installer after the download completes.
When the installer finishes, reboot the system.

{{< expand "Different Admin accounts?" "v" >}}
If the admin account is different from your Windows user account, you must add the user to the `docker-users` group.
Run Computer Management as an administrator and go to **Local Users and Groups > Groups > docker-users** to add the user to the group.
Changes take effect after logging out and back in.
{{< /expand >}}

{{< expand "WSL 2 Install Incomplete?" "v" >}}
If this error message appears after rebooting, install the Linux Kernel Update Package:

![DockerDesktopError](/images/TrueCommand/DockerDesktopError.png "Docker Desktop Error")

The update package downloads from a [Windows storage location](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

![DockerDesktopInstallWSL](/images/TrueCommand/DockerDesktopInstallWSL.png "Docker Desktop Install WSL")

Microsoft has additional documentation available to assist with [downloading the Linux kernel update](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package).

After installing the kernel update, set the WSL default version to `version 2` by opening the Powershell and entering `wsl --set-default-version 2`.

![DockerDesktopSetWSLDefault](/images/TrueCommand/DockerDesktopSetWSLDefault.png "Docker Desktop Set WSL Default")

You must reboot the system after changing the default version.
{{< /expand >}}

## Installing the TrueCommand Docker Container

Open the [Docker Hub](https://hub.docker.com) in a browser and search for `ixsystems/truecommand`.

![DockerHubSearchResults](/images/TrueCommand/DockerHubSearchResults.png "Finding the TrueCommand Container")

![DockerHubTrueCommand](/images/TrueCommand/DockerHubTrueCommand.png "TrueCommand Container details")

Verify the pull command required and run it from a command line. Example: `docker pull ixsystems/truecommand:latest`.

![DockerHubCLIInstallTrueCommand](/images/TrueCommand/DockerHubCLIInstallTrueCommand.png "CLI: Install TrueCommand Container")

When the container downloads, open Docker Desktop and select **Images**.
Hover over the **ixsystems/truecommand** entry to show the **Run** button, then click it.

![DockerDesktopImages](/images/TrueCommand/DockerDesktopImages.png "Docker Desktop: Starting the TrueCommand Container")

Open the **Optional Settings** drop-down menu, name the container, and set the following port values.
Investigate your network environment or check with your IT department to ensure that these ports will not conflict with other running services.

* Local Host Port: `9005`
* Container Port `443`

Click the `+` sign to add a second set of ports.

* Local Host Port `9004`
* Container Port `80/tcp`

![DockerDesktopTrueCommandConfig](/images/TrueCommand/DockerDesktopTrueCommandConfig.png "")

Setting the **Volume** is not usually required for TrueCommand.
Click **RUN** after configuring the settings.

When Docker Desktop shows the container status as **RUNNING**, open a new browser tab and go to `https://127.0.0.1:9005`.

![DockerDesktopTrueCommandRunning](/images/TrueCommand/DockerDesktopTrueCommandRunning.png "TrueCommand Container is running")
{{< /tab >}}
{{< /tabs >}}

## Adding Browser Security Exceptions

TrueCommand uses a [self signed certificate](https://tools.ietf.org/html/rfc8705) for a secure connection.
Because of this, many Internet browsers consider the IP address or DNS hostname untrustworthy.
In these cases, the IP address or DNS hostname must be added as an exception to the browser to access the web interface.
Adding an exception is shown here for two different browsers, but the procedure is similar for most browsers.

{{< tabs "Browser Security Exceptions" >}}
{{< tab "Chrome" >}}
Click **Advanced** to view information about the error code.
Click **Proceed to {hostname} (unsafe)**.

![ChromeWarning](/images/TrueCommand/2.0/ChromeWarning.png "Chrome Warning")
{{< /tab >}}
{{< tab "Firefox" >}}
Click **Advanced** to view information about the error code.

![FirefoxWarning](/images/TrueCommand/2.0/FirefoxWarning.png "Firefox Warning")

Click **Add Exception...**.
Set **Permanently store this exception** to permanently store the IP address or DNS hostname in Firefox.
Click **Confirm Security Exception**.

![FirefoxExceptionAdd](/images/TrueCommand/2.0/FirefoxExceptionAdd.png "Adding a security exception")
{{< /tab >}}
{{< /tabs >}}

## Creating the Administrator Account

{{< include file="static/includes/TrueCommand/TrueCommandFirstTimeLogin.md.part" markdown="true" >}}
