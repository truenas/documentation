---
title: "Installing or Updating"
weight: 10
geekdocCollapseSection: true
aliases:
  - /truecommand/tc_cloud/
  - /truecommand/installupdate/tc_cloud/
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

The TrueNAS instance can take 10 to 15 minutes to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

{{< /tab >}}
{{< tab "Docker (Linux)" >}}
## Installing the TrueCommand Container

{{< hint info >}}
If you haven't already installed Docker on your machine, install the [Docker Engine](https://docs.docker.com/engine/install/debian/), then install [Docker Desktop](https://docs.docker.com/desktop/linux/).
{{< /hint >}}

To run TrueCommand in Docker on Linux, you must have:

* A 64-bit Linux distro (we recommend Debian) 
* Linux Kernel Support: 4.x+
* 1 CPU with 2 GiB RAM
* 1 Hard Disk with 10 - 50 GiB storage space
* Customer networking settings and internet access

Before fetching the TrueCommand docker image, create a local directory.
Enter `mkdir directory`, replacing *directory* with the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.

Open a terminal and enter `docker run \--detach -v "/hostdir:/data" -p port:80 -p ssl:443 ixsystems/truecommand:latest`.

*hostdir* is a directory on the host machine for Docker container data, *port* is the TrueCommand web interface port number, and *ssl* is the port number for secure web interface access.

To install the container with an earlier TrueCommand release, replace *latest* with the desired TrueCommand version tag:  
`docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:1.3.2`

Although Docker containers have several run methods, TrueCommand requires`-v /hostdirectory:/data` to function.

{{< hint warning >}}
Do not try to use the same *hostdirectory* for two different containers!
Doing so results in file conflicts and database corruption.
{{< /hint >}}

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a **PORTS** column.
Find the port associated with the **ixsystems/truecommand:latest** **IMAGE**.
The **PORTS** entry is listed as **0.0.0.0:port->80/tcp**, **0.0.0.0:sslport->443/tcp** where *port* and *sslport* are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where *hostsystemIPaddress* is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

{{< expand "The connection can't be established?" "v" >}}
When a connection to the web interface cannot be established, add the container ports as an exception to the host system firewall.
{{< /expand >}}
{{< /tab >}}

{{< tab "Docker Desktop (Windows)" >}}

{{< hint warning >}}
Docker Desktop for Windows uses Hyper-V, which interferes with other virtualization applications.
For example, Docker Desktop and VMware Workstation Player cannot simultaneously run.
{{< /hint >}}

To run TrueCommand in Docker Desktop for Windows, you must have:

* Windows 10 Enterprise, Pro, or Education editions
* A 64-bit Processor with Second Level Address Translation (SLAT)
* CPU support for VM Monitor Mode Extension (VT-c on Intel CPUs)
* Hyper-V enabled
* 4 GB memory at minimum
* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed in Windows

### Enable Hyper-V

Open the **Start** menu and search for **Apps & Features**.
Select **Programs and Features** under **Related settings**, then click **Turn Windows Features on or off** (administrator action).
Set the **Hyper-V** option and click **OK**.
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
If the admin account is different from your Windows user account, you must add the user to the docker-users group.
Run Computer Management as an administrator and go to **Local Users and Groups > Groups > docker-users** to add the user to the group.
Changes take effect after logging out and back in.
{{< /expand >}}

{{< expand "WSL 2 Install Incomplete?" "v" >}}
If this error message appears after rebooting, install the Linux Kernel Update Package:

![DockerDesktopError](/images/TrueCommand/DockerDesktopError.png "Docker Desktop Error")

The update package downloads from a [Windows storage location](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

![DockerDesktopInstallWSL](/images/TrueCommand/DockerDesktopInstallWSL.png "Docker Desktop Install WSL")

Microsoft has additional documentation available to assist with [downloading the Linux kernel update](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package).

After installing the kernel update, set the WSL default version by opening the Powershell and entering `wsl --set-default-version 2`.

![DockerDesktopSetWSLDefault](/images/TrueCommand/DockerDesktopSetWSLDefault.png "Docker Desktop Set WSL Default")

You must reboot the system after changing the default version.
{{< /expand >}}

## Installing the TrueCommand Docker Container

Open the [Docker Hub](https://hub.docker.com) in a browser and search for ixsystems/truecommand.

![DockerHubSearchResults](/images/TrueCommand/DockerHubSearchResults.png "Finding the TrueCommand Container")

![DockerHubTrueCommand](/images/TrueCommand/DockerHubTrueCommand.png "TrueCommand Container details")

Verify the pull command required and run it from a command line. Example: `docker pull ixsystems/truecommand:latest`.

![DockerHubCLIInstallTrueCommand](/images/TrueCommand/DockerHubCLIInstallTrueCommand.png "CLI: Install TrueCommand Container")

When the container downloads, open Docker Desktop and select **Images**.
Hover over the **ixsystems/truecommand** entry to show the **Run** button, then click it.

![DockerDesktopImages](/images/TrueCommand/DockerDesktopImages.png "Docker Desktop: Starting the TrueCommand Container")

Open the **Optional Settings** drop-down list, name the container, and set the port values listed below.
Investigate your network environment or check with your IT department to ensure that these ports do not conflict with other running services.

* Local Host Port: 9005
* Container Port 443

Click the **+** sign to add a second set of ports.

* Local Host Port 9004
* Container Port 80/tcp

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
Click **Proceed to hostname (unsafe)**.

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
