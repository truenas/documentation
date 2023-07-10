---
title: "Installing WG-Easy"
description: "Provides installation instructions for the WG Easy application."
weight:
aliases:
tags:
- scalevpn
- scaleapps
---


WG-Easy is the easiest way to install and manage WireGuard on any Linux host. 
The application is included in the Community catalog of applications.

WG-EASY is a docker image designed to simplify setting up and managing WireGuard connections. This app provides a pre-configured environment with all the necessary components and a web-based user interface to manage VPN connections.

## Installing the WG-Easy Application 
WG Easy does not require advanced preparation before installing the application.

To install the **wg-easy** application, go to **Apps**, click **Discover Apps**, then either begin typing WG Easy into the search field or scroll down to locate the **WG Easy** application widget.

{{< trueimage src="/images/SCALE/23.10/WGEasyAppWidget.png" alt="WG Easy Application Widget" id="1: WG Easy Application Widget" >}}

Click on the widget to open the **WG Easy** application information screen. 

{{< trueimage src="/images/SCALE/23.10/WGEasyAppInfoScreen.png" alt="WG-Easy Application Information Screen" id="2: "WG-Easy Application Information Screen" >}}

Click **Install** to open the WG Easy application configuration screen.
Application configuration settings are presented in several sections. 
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/23.10/WGEasyAppInstalScreen.png" alt="Install WG-Easy Application Screen" id="3: Install WG-Easy Application Screen" >}}

After installing WG Easy the app displays on the **Installed** screen.

Click **Web PortaL** on the **Application Info** widget to open the WG Easy web interface where you can add a new client.

{{< trueimage src="/images/SCALE/23.10/WGEasyWebPortal.png" alt="WG-Easy Web Portal" id="4: WG-Easy Web Portal" >}}


### Application Name Settings

Accept the default value or enter a name in **Application Name** field. 
Accept the default version number in **Version**.

### Configuration Settings

You can accept the defaults in the **Configuration** settings, or enter the configuration settings you want to use. 

{{< trueimage src="/images/SCALE/23.10/WGEasyAppConfigSettings.png" alt="WG Easy Configuration Settings" id="5: WG Easy Configuration Settings" >}} 

Enter the public host name or IP of your VPN server in **Hostname or IP**.

If you use or want to protect access to the WG Easy web UI, enter a password in **Password for WebUI**.

Accept the default values in **Persistent Keep Alive** or change the value to the number of seconds you want to keep the session alive. 
When set to zero, connections are not kept alive. Alternate value to use 25.

Enter the default MTU value or enter a new value in **Clients MTU** or accept the default MTU setting for WireGuard (1420).
 
Accept the default IPs in **Clients IP Address Range** and **Clients DNS Server** or enter the IP addresses the client uses. If not provided, the default value 1.1.1.1 is used.

To specify allowed IP addresses, click **Add** to the right of **Allowed IPs** for each IP address you want to enter. 
If you do not specify allowed IPs, the application uses 0.0.0.0/0.

To specify environment variables, click **Add** to the right of **WG-Easy Environment** for each environment variable you want to add. 

{{< expand "Environment Variables" "v" >}}
{{< truetable >}}
| Variable | Description |
|----------|-------------|
| WD_DEVICE | Enter the interface name or ID for the ethernet device WireGuard traffic should forward through. |
| WG_PRE_UP | See [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L19) for the default value. |
| WG_POST_UP | See [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L19) for the default value. |
| WG_PRE_DOWN | See [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L19) for the default value. |
| WG_POST_DOWN | See [config.js](https://github.com/WeeJeWel/wg-easy/blob/master/src/config.js#L19) for the default value. |
{{< /truetable >}}
{{< /expand >}}

### Storage Settings
You can install WG Easy using the default settings or enter your own values to customize the storage settings. 

Select **Enable Custom Host Path for WG-Easy Configuration Volume** to add the **Host Path for WG-Easy Configuration Volume** field. 
Enter or browse to select a preconfigured mount path for the host path.

{{< trueimage src="/images/SCALE/23.10/WGEasyAppStorageEnableCustomHostPathSettings.png" alt="WG Easy Add Custom Host Path" id="6: WG Easy Add Custom Host Path" >}} 

To add additional host path volumes, click **Add** to the right of **Extra Host Path Volumes**. 

{{< trueimage src="/images/SCALE/23.10/WGEasyInstallAppStorageAddExtraHostPaths.png" alt="WG Easy Add Extra Host Path Volumes" id="7: WG Easy Add Extra Host Path Volumes" >}} 

Enter the path in **Mount Path in Pod** where you want to mount the volume inside the pod. 
Enter or browse to the host path for the WG Easy application dataset.

### Networking Settings

Accept the default port numbers in **WireGuard UDP Node Port for WG-Easy** and **WebUI Node Port for WG-Easy**. 
WireGuard always listens on 51820 inside the Docker container. 
Refer to the TrueNAS [default port list]({{< relref "DefaultPorts.md" >}}) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535. 

{{< trueimage src="/images/SCALE/23.10/WGEasyInstallAppNetworking.png" alt="WG Easy Networking" id="8: WG Easy Networking" >}} 

### Advanced DNS Settings
WG Easy does not require configuring advanced DNS options. 
Accept the default settings or to add DNS options, click **Add** to the right of **DNS Options**.

{{< trueimage src="/images/SCALE/23.10/WGEasyInstallAddDNSOptions.png" alt="WG Easy Add DNS Options" id="9: WG Easy Add DNS Options" >}} 

### Resource Configuration Settings

Accept the default values in **Resources Configuration** or select **Enable Pod resource limits** to show the fiels to enter new CPU and memory values for the destination system.

{{< trueimage src="/images/SCALE/23.102/WGEasyInstallAddResourceLimits.png" alt="WG Easy Enable Resource Limits" id="10: WG Easy Enable Resource Limits" >}}

Enter CPU values as a plain integer value followed by the suffix m (milli). Default is 4000m.

Accept the default value 8Gi, or enter the memory limit in bytes. Enter a plain integer followed by the measurement suffix, for example 129M or 123Mi

Click **Save**.

{{< taglist tag="scaleapps" limit="10" >}}

