---
title: "WebDAV"
description: "Instructions for configuring the WebDAV app and migrating from the deprecated SCALE WebDAV sharing feature."
weight:
aliases:
 - /scale/scaletutorials/apps/webdav/
tags:
- scalewebdav
---

{{< toc >}}

The WebDav application is a set of extensions to the HTTP protocol which allows users to collaboratively edit and manage files on remote web servers, and serves as the replacement for the built-in TrueNAS SCALE WebDAV feature.

When installed and configured with at least one share, a container launches with temporary root privileges to configure the shares and activate the service.
The **Fix Permissions** checkbox allows TrueNAS to apply the correct permissions to the WebDAV shares and directories and simplify app deployment.
After first configuration, the WebDAV container runs as the dedicated **webdav** user (UID: 666).

{{< hint type=important >}}
WebDAV only supports Unix-style permissions.
When the application is deployed and **Fix Permissions** is enabled, this destroys any existing permissions scheme on the shared dataset.
It is recommended to only share newly created datasets that have the **Share Type** set to **Generic**.
{{< /hint >}}

## Before You Begin

Before WebDAV application deployment:

* Disable the WebDAV service (when active).
  Go to **System Settings > Services** and disable the service, then clear the **Start Automatically** checkbox to prevent the service from re-enabling after a system restart.

* Review any existing WebDAV service authentication settings and note all IP addresses, port numbers, URLs and credentials (username and password).

* Remove any existing WebDAV shares.
  Go to **Shares > WebDAV** and edit any existing configurations. Record the **Name**, **Path**, and **Read Only** settings and then delete the WebDAV share configuration.

If you want to grant access to a specific user (and group) other than the defaults, add the new non-root administrative user and take note of the UID and GID for this user.
If any existing shares were created with the **webdav** user and group in control, note the UID and GID (**666**) to recreate the previous WebDAV share in the application.

## Migrating from the Built-in WebDAV Feature

After disabling the WebDAV service and clearing any existing share configurations from the **Shares > WebDAV** screen, install the WebDAV application.
Go to **Apps** click on **Available Applications** and locate the **WebDAV** application widget.

{{< trueimage src="/images/SCALE/22.12/WebDAVAppWidget.png" alt="WebDAV Application Widget" id="1 WebDAV Application Widget" >}}

Click **Install** to open the **webdav** configuration wizard.

### Service Settings

Select the authentication from the **Authentication Type** dropdown.

**No Authentication** means any system that can discover TrueNAS can access the data shared by WebDAV.
Due to security concerns, this is not recommended.

Selecting **Basic Authentication** displays credential settings.

{{< trueimage src="/images/SCALE/22.12/WebDAVConfigurationBasicAuth.png" alt="WebDAV Configuration Basic Authentication" id="2 WebDAV Configuration Basic Authentication" >}}

Enter the username and password information for your WebDAV share (noted from the previous WebDAV service settings).

Set **Enable HTTPS** to add encryption to the web traffic between clients and the server.
This requires opening an additional **HTTPS Port** and adding a system **Certificate**.

{{< trueimage src="/images/SCALE/22.12/WebDAVNetworkConfigForHTTPS.png" alt="WebDAV Network Configuration for HTTPS" id="3 WebDAV Network Configuration for HTTPS" >}}

The **truenas_default Certificate** can be used as the **Certificate** when no other specific certificates are available.

### Share Settings

Add your existing WebDAV share to the application.
Click **Add** to the right of **Shares** in the **Storage Configuration** section.

{{< trueimage src="/images/SCALE/22.12/WebDAVStorageConfigAddShare.png" alt="WebDAV Storage Configuration Add Share" id="4 WebDAV Storage Configuration Add Share" >}}

Enter the **Share Name**.
This can be the share name recorded from a configuration in **Shares > WebDAV**.

A share **description** is not required by can be a useful place to record notes about the share.

Enter or browse to the **Host Path** location for the WebDAV share dataset.
Use a path previously used in a saved configuration from **Shares > WebDAV**.

Select **Read Only** to make the share read only and disable write access to the share.
When selected, data accessed by clients cannot be modified.

Set **Fix Permissions** to change the **Host Path** filesystem permissions.
The dataset owner becomes the **User ID** and **Group ID** set in the **User and Group Configuration** section.
By default, this is the **webdav** user with UID and GID **666**.

To specify a different user, enter the user ID (UID) and group ID (GID) in the fields for these settings.
When migrating from an existing built-in WebDAV share, you might need to adjust the default to use whatever UID and GID was previously configured as the share path owner.

Click **Save** to save the configuration, deploy the app, and make any enabled **Shares** accessible.

## Testing the Share

At the end of this migration process, test access to your WebDAV share.

In a browser, this is done by opening a new tab and entering the configured protocol, system host name or IP address, WebDAV port number, and **Share Name**.
Example: `https://my-truenas-system.com:30001/mywebdavshare`

When authentication is set to something other than **No Authentication**, a prompt requests a user name and password.
Enter the saved **Username** and **Password** entered in the webdav application form to access the shared data.

To change files shared with the WebDAV protocol, use client software such as WinSCP to connect to the share and make changes.
The WebDAV share and dataset permissions must be configured so that the **User ID** and **Group ID** can modify shared files.

{{< taglist tag="scalewebdav" limit="10" title="Related WebDAV Articles" >}}