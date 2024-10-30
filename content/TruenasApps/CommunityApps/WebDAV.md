---
title: "WebDAV"
description: "Instructions for installing and configuring the WebDAV app and sharing feature in TrueNAS."
weight:
aliases:
 - /scale/scaletutorials/apps/webdav/
 - /scale/scaletutorials/systemsettings/services/webdavservicescale/
 - /scale/scaletutorials/shares/configurewebdav/
 - /scale/scaleuireference/shares/webdavsharesscreens/
 - /scale/scaleuireference/systemsettings/services/webdavservicescreen/
 - /scale/scaletutorials/apps/communityapps/webdav/
tags:
 - webdav
 - shares
 - apps
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!--Comment or remove the following line if your PR changes provide a complete, up-to-date, and working installation tutorial -->
{{< include file=\"/static/includes/apps/CommunityPleaseImprove.md\" >}}

The WebDAV application is a set of extensions to the HTTP protocol that allows users to collaboratively edit and manage files on remote web servers.
It serves as the replacement for the built-in TrueNAS WebDAV feature.

When installed and configured with at least one share, a container launches with temporary root privileges to configure the shares and activate the service.

{{< include file="/static/includes/AppsUnversioned.md" >}}

## First Steps

To grant access to a specific user (and group) other than the default for the webdav user and group (**666**), add a new non-root administrative user and take note of the UID and GID for this user.

If you want to create a dataset to use for the WebDAV application share(s), create it before you install the application.

## Installing the WebDAV Application

To install the application, you can accept the default values or customize the deployment to suit your use case.
You create the WebDAV share as part of the application installation.

To install the WebDAV application, go to **Apps**, click **Discover Apps**, then either begin typing WebDAV into the search field or scroll down to locate the **WebDAV** application widget.

{{< trueimage src="/images/SCALE/Apps/WebDAVwidget.png" alt="WebDAV Application Widget" id="WebDAV Application Widget" >}}

Click on the widget to open the WebDAV information screen.

{{< trueimage src="/images/SCALE/Apps/WebDAVInfoScreen.png" alt="WebDAV Application Information Screen" id="WebDAV Application Information Screen" >}}

Click **Install** to open the **Install WebDAV** configuration screen.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVAppScreen.png" alt="Install WebDAV Application Screen" id="Install WebDAV Application Screen" >}}

Application configuration settings are presented in several sections.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

Accept the defaults in **Application Name** and **Version**.

Accept the defaults or customize the settings in **WebDAV Configuration**. Accept the default authentication setting **No Authentication** or to require entering authentication credentials, select **Basic Authentication** as the type.
The application includes all the setting fields you need to install and deploy the container, but you can add additional [environment variables](#webdav-configuration-settings) to further configure the container.

The default network protocol is HTTP and uses the port 30035. To use HTTPS and add encryption to the web traffic, clear the checkmark in **Enable HTTP** and select **Enable HTTPS**.
HTTPS uses port 30035 and adds the **Certificate** field. The default certificate is 0.

We recommend not selecting **Host Network** as this binds to the host network.

Create at least one share in **Storage Configuration**.
Click **Add** to display the share settings.
**Enable the share** is selected by default. It enables the share at start (when the app starts).
Enter a name using lower or uppercase letters and or numbers. Names can include the underscore (_) or dash (-).

Accept the default [**Resource Configuration**](#resources-configuration-settings), or enter the CPU and memory settings you want to apply to the WebDAV application container.

After configuring the container settings, click **Install** to save the application configuration, deploy the app, and make the share(s) accessible.

After the installation completes, the application displays on the **Installed** applications screen.

{{< trueimage src="/images/SCALE/Apps/WebDAVAppInstalled.png" alt="WebDAV App Installed" id="WebDAV App Installed" >}}

The WebDAV widget on the **Discover** and **WebDAV** information screens includes the **Installed** badge.

### Application Name Settings
Accept the default values in **Application Name** and **Version**.
If you want to change the application name, enter a new name.

### WebDAV Configuration Settings
WebDAV configuration settings include the type of share authentication to use, none or basic.
**No Authentication** means any system can discover TrueNAS and access the data shared by the WebDAV application share, so this is not recommended.
**Basic Authentication** adds the **Username** and **Password** fields and provides some basic security.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVAddBasicAuth.png" alt="WebDAV Configuration Basic Authentication" id="WebDAV Configuration Basic Authentication" >}}

The WebDAV application configuration includes all the settings you need to install the Docker container for the app.
You can use the Docker container environment variables listed in the table below to further customize the WebDAV Docker container.

{{< expand "Docker Container Environment Variables" "v" >}}
{{< truetable >}}
| Variable | Description |
|----------|-------------|
| WEBDRIVE_URL | Use to specify a URL where you find the WebDAV resource other than the default. The default URL is http://*webdav-ip*:*webdav-port*/share1 where *webdav-ip* is the IP address for the TrueNAS system and *webdav-port* is 30034. If enabling HTTPS the URL is https://*webdav-ip*:*webdav-port*/share1 where the *webdav-ip* is the IP address for the TrueNAS system and *webdav-port* is 30035. |
| WEBDRIVE_PASSWORD_FILE | Use to specify a file that contains the password instead of using the **Password** field. Use when **Authentication Type** is set to **Basic Authorization**. |
| WEBDRIVE_MOUNT | Use to specify the location within the container where to mount the WebDAV resource (drive) into the container. This defaults to /mnt/webdrive and is not meant to be changed. |
{{< /truetable >}}
{{< /expand >}}

### User and Group Configuration Settings
The default user and group for WebDAV is 666. To specify a different user, create the user and group before installing the application, then enter the user ID (UID) and group ID (GID) in the fields for these settings.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVUserAndGroupConfig.png" alt="User And Group Configuration" id="User And Group Configuration" >}}

### Network Configuration Settings
The container for the WebDAV app has **Enable HTTP** selected by default. The port for HTTP is 30034.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVAppNetworkConfig.png" alt="WebDAV Network Configuration for HTTP" id="WebDAV Network Configuration for HTTP" >}}

To add encryption to the web traffic between clients and the server, clear the checkmark in **Enable HTTP** and select **Enable HTTPS**.
This changes the default port in **HTTPS Port** to 30035, and adds a system **Certificate**.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVNetworkConfigEnableHTTPS.png" alt="WebDAV Network Configuration for HTTPS" id="WebDAV Network Configuration for HTTPS" >}}

The default certificate is 0. You can use the default as the **Certificate** if no other specific certificate is available.

### Storage Configuration Settings
Create one or more shares in the **Storage Configuration** section. For the application to work, create at least one share.
Click **Add** for each share you want to create.
Each share must have a unique name.

To add a WebDAV share to the application, click **Add** to the right of **Shares** in the **Storage Configuration** section.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVStorageConfigAddShare.png" alt="WebDAV Storage Add Share" id="WebDAV Storage Add Share" >}}

Enter a name in **Share Name**.
The name can have upper and lowercase letters and numbers. It can include an underscore (_) and/or a dash (-).

Enter share purpose or other descriptive information about the share in **Description**. This is not required.

Enter or browse to the **Host Path** location for the where the app adds the WebDAV share.
If you created a dataset before installing the app, you can browse to it here.

Select **Read Only** to disable write access to the share.
When selected, data accessed by clients cannot be modified.

Select **Fix Permissions** to change the **Host Path** file system permissions.
When enabled, the dataset owner becomes the **User ID** and **Group ID** set in the **User and Group Configuration** section.
By default, this is the **webdav** user with UID and GID **666**.
**Fix Permissions** allows TrueNAS to apply the correct permissions to the WebDAV shares and directories and simplify app deployment.
After first configuration, the WebDAV container runs as the dedicated **webdav** user (UID: 666).

{{< hint type=important >}}
WebDAV only supports Unix-style permissions.
When deployed with **Fix Permissions** enabled, it destroys any existing permissions scheme on the shared dataset.
It is recommended to only share newly created datasets that have the **Share Type** set to **Generic**.
{{< /hint >}}

### Resources Configuration Settings
By default, this application is limited to use no more than **4** CPU cores and **8** Gibibytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallWebDAVResourcesConfig.png" alt="WebDAV Resource Configuration" id="WebDAV Resource Configuration" >}}

Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

## Testing the Share

At the end of the installation process, test access to your WebDAV share.

In a browser, this is done by opening a new tab and entering the configured protocol, system host name or IP address, WebDAV port number, and **Share Name**.
Example: `https://my-truenas-system.com:30001/mywebdavshare`

When authentication is set to something other than **No Authentication**, a prompt requests a user name and password.
Enter the saved **Username** and **Password** entered in the webdav application form to access the shared data.

To change files shared with the WebDAV protocol, use client software such as WinSCP to connect to the share and make changes.
The WebDAV share and dataset permissions must be configured so that the **User ID** and **Group ID** can modify shared files.