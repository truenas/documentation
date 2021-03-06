---
title: "Install"
weight: 10
---

{{< toc >}}

TrueCommand is incredibly versatile and offers several different install options.
TrueCommand Cloud is the preferred method for using TrueCommand, as this option requires no local resources or specific hardware requirements to get started!

## Install Options

Click one of the tabs below to see instructions for your preferred deployment method.

{{< tabs "TrueCommand Install Options" >}}
{{< tab "Cloud Deployment" >}}
TrueCommand Cloud is a SaaS offering of TrueCommand with a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS version v12.0 and newer.

## Register an iXsystems Account

Open https://portal.ixsystems.com and click **Register**. 

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

Fill out the form using the email address you want to use. 

![PortalAccountCreate](/images/TrueCommand/Cloud/PortalAccountCreate.png "Portal Account Create")

This email account must be verified.
Check the address spam folder if the email does not arrive within a few minutes.
When the email is in the spam folder, mark it as *not spam* and add the account to the address book so future emails arrive at the inbox.
After receiving the verification email, open the link provided to verify the account.

## Create a New Subscription

Log in to the verified account and click **New Subscription**.  

![PortalDashboard](/images/TrueCommand/Cloud/PortalDashboard.png "Account Services: Dashboard")

![PortalCloudSubscription](/images/TrueCommand/Cloud/PortalCloudSubscription.png "Creating a Cloud Subscription")

Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.
This can be changed later.

![PortalCloudSubscriptionOptions](/images/TrueCommand/Cloud/PortalCloudSubscriptionOptions.png "Account Services: Cloud Subscription Options")

Click *Continue* to proceed.

![PortalCloudSubscriptionSelected](/images/TrueCommand/Cloud/PortalCloudSubscriptionSelected.png "Account Services: Cloud Subscription Selected")

Next, fill the payment form. 

![CloudSubscriptionPayment](/images/TrueCommand/Cloud/CloudSubscriptionPayment.png "Cloud Subscription Payment")

Submit and wait for the form to be accepted.
When ready, click *Provision Now*.

![PortalDashboardActiveSubscription](/images/TrueCommand/Cloud/PortalDashboardActiveSubscription.png "Account Services: Active Subscriptions")

Select a *Subnet* that is not currently used on the network.

![TrueCommandProvisionSubnet](/images/TrueCommand/Cloud/TrueCommandProvisionSubnet.png "Account Services: Provisioning TrueCommand")

## Managing a TrueCommand Cloud Account

From the account home page, click *Manage*.
Add a client for desktop or laptop to obtain a TrueCommand WireGuard Config file.

![CloudSubscriptionServiceDetails](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetails.png "Account Services: Service Details")

When the client account is created, click <i class="fa fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i> to download the configuration file.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: Downloading the WireGuard Configuration File")

Open Wireguard on your machine and click *Add Tunnel*.

![WireGuardTunnels](/images/TrueCommand/WireGuardTunnels.png "WireGuard: Adding Tunnels")

Select the TrueCommand WireGuard Configuration file that was downloaded from the portal.
the configuration file into WireGuard on your machine and activate the tunnel.

![WireGuardTCCloudInactive](/images/TrueCommand/WireGuardTCCloudInactive.png "WireGuard: Tunnel Inactive")

Click *Activate* to initialize the Wireguard tunnel.

![WireGuardTCCloudActivate](/images/TrueCommand/WireGuardTCCloudActivate.png "WireGuard: Tunnel Active")

Further information on WireGuard and WireGuard clients is found on the [WireGuard home page](https://www.wireguard.com).
The TrueCommand Cloud IP address displays in the iXsystems Account Portal page.

After WireGuard is active, log in to the TrueCommand Cloud Interface by clicking the TrueCommand IP address listed on the portal, or manually entering the TrueCommand Cloud IP in a browser.

## Connecting Systems to a TrueCommand Cloud Instance

Log into the ixSystems cloud account and click *Manage*.
Under **Service Details**, copy the *TrueCommand API Key*.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the Portal to confirm the connection and activate the TrueNAS system.

Click on the **New System** alert, fill in the information from the TrueNAS system, and click *Add System*.

![NewSystemCreds](/images/TrueCommand/1.3/NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles](/TrueCommand/Administration/) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

## Support

If any issues are found when using TrueCommand Cloud or an iX Portal account, log in to the Portal Account and click *Manage* > *Request Support*.
Fill out the *Request Support* form with specific details and screenshots of the issue and click *Send Request*.
A copy of the support request is emailed to the registered email account.
{{< /tab >}}
{{< tab "Docker" >}}
## Installing the TrueCommand Container

{{< hint warning >}}
Docker Desktop for Windows uses Hyper-V.
This interferes with other virtualization applications.
For example, Docker Desktop and VMware Workstation Player cannot simultaneously run.
{{< /hint >}}

Before fetching the TrueCommand docker image, create a local directory.
Enter `mkdir {DIRECTORY}`, where *{DIRECTORY}* is the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.
Open a Command Line Interface (CLI) and enter `docker run \--detach -v "/{HOSTDIR}:/data" -p {PORT}:80 -p
{SSL}:443 ixsystems/truecommand:latest`.
*{HOSTDIR}* is a directory on the host machine for Docker container data, *{PORT}* is the TrueCommand web interface port number, and *{SSL}* port number for secure web interface access.

To install the container with an earlier TrueCommand release, replace `latest` with the desired TrueCommand version tag:
```
docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:1.3.2
```

{{< hint info >}}
Use [Windows compatible syntax](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats) when specifying paths in the Windows file system.
For example, if the created directory for the TrueCommand image was created in the Windows <file>Documents</file> folder, the `docker` command would be:
`docker run \--detach -v C:\Users\\Example\\Documents\\DockerDir`.
In this command *C* is the drive letter, *Example* is the current user name, and *DockerDir* is the TrueCommand image directory.
{{< /hint >}}

Although there are different ways to run a Docker container, `-v /*hostdirectory*:/data` is required for TrueCommand to function.

{{< hint warning >}}
Do not try to use the same `hostdirectory` for two different containers!
This results in file conflicts and database corruption.
{{< /hint >}}

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a *PORTS* column.
Find the port associated with the `ixsystems/truecommand:latest` *IMAGE*.
The *PORTS* entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where `port` and `sslport` are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where `hostsystemIPaddress` is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

{{< expand "The connection can't be established?" "v" >}}
When a connection to the web interface cannot be established, add the container ports as an exception to the host system firewall.
{{< /expand >}}
{{< /tab >}}
{{< tab "Virtual Machine" >}}
TrueCommand has both VMDK and VHDX files for virtual machine installs available from http://pkg.truecommand.io/.
Most virtual machine applications, including VMware and VirtualBox, support TrueCommand VMDK files.
Hyper-V users should use a TrueCommand VHDX file.

These are the minimum specifications for a TrueCommand virtual machine:

* RAM: at least 2GB
* Storage: at least 20GB
* CPU: at least 2 cores
* Network: Use NAT, Bridged, or Host-only depending on your host networking configuration.

After downloading the appropriate TrueCommand file, extract the TrueCommand VMDK or VHDX file to a location on your system that is accessible by your virtual machine application.
Launch your virtual machine application.
In this example, VMware Workstation Player on Windows is being used.

When VMware Player is open, click **Create a New Virtual Machine**

![VMware Installer Start](/images/CORE/12.0/VMwareInstallerStart.png "VMware Installer Start")


Select **I will install the operating system later** and click **Next**.
Select *Linux* as the guest operating system and *Debian 10.x 64-bit* as the version.
Click **Next**.

The virtual machine can be given a name and the location can be selected.
To keep the default values, click **Next**.
Enter the maximum size of the disk to be used for storage and set **Store virtual disk as a single file**.
The recommended disk size is at least *20GB*.
Click **Next**.
Review the settings for the virtual machine and click **Finish**.

![Vmware Installer VM Create](/images/CORE/12.0/VmwareInstallerVMCreate.png "Vmware Installer VM Create")


Now that the virtual machine has been created, we need to add our TrueCommand virtual image to the machine.
Select the virtual machine from the list and click **Edit virtual machine settings**.

![VMware Installer VM Create Summary](/images/CORE/12.0/VMwareInstallerVMCreateSummary.png "VMware Installer VM Create Summary")


Next, click **Add…**.
The TrueCommand file downloaded earlier is a virtual hard disk.
Select *Hard Disk* from the list of options and click **Next**.
Select *SCSI* and click **Next**.
Ensure that **Use an existing virtual disk** is set and click **Next**.

It then prompts to select an existing virtual disk from the host system.
Click **Browse…** and select the TrueCommand virtual disk (`.vmdk` file) that was downloaded earlier.
Click **Finish**.
If VMware player prompts to convert the virtual disk to a new format, click **Keep Existing Format**.

The final step is to remove the initial hard disk that was created when the virtual machine was created.
Select the virtual machine from the list and click **Edit virtual machine settings**.
Select the first hard disk and click **Remove**.

The TrueCommand virtual machine is now ready to be used.
To boot the TrueCommand virtual machine, select it from the list of virtual machines and click **Play virtual machine**.
TrueCommand usage documentation is available on the TrueNAS Documentation Hub at https://www.truenas.com/docs/hub/truecommand/.
{{< /tab >}}
{{< /tabs >}}

## Adding Browser Security Exceptions

TrueCommand uses a [self signed certificate](https://tools.ietf.org/html/rfc8705) for a secure connection.
Because of this, many Internet browsers consider the IP address or DNS hostname untrustworthy.
In these cases, the IP address or DNS hostname must be added as an exception to the browser to access the web interface.
The process of adding an exception is shown here for two different browsers, but the procedure is similar for most browsers.

{{< tabs "Browser Security Exceptions" >}}
{{< tab "Chrome" >}}
Click *Advanced* to view information about the error code.
Click *Proceed to {hostname} (unsafe)*.

![ChromeWarning](/images/TrueCommand/2.0/ChromeWarning.png "Chrome Warning")
{{< /tab >}}
{{< tab "Firefox" >}}
Click *Advanced* to view information about the error code.

![FirefoxWarning](/images/TrueCommand/2.0/FirefoxWarning.png "Firefox Warning")

Click *Add Exception...*.
Set *Permanently store this exception* to keep the IP address or DNS hostname permanently stored in Firefox.
Click *Confirm Security Exception*.

![FirefoxExceptionAdd](/images/TrueCommand/2.0/FirefoxExceptionAdd.png "Adding a security exception")
{{< /tab >}}
{{< /tabs >}}

## Creating the Administrator Account

{{< include file="static/includes/TrueCommandFirstTimeLogin.md.part" markdown="true" >}}
