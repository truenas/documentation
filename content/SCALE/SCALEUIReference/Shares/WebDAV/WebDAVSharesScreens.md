---
title: "WebDAV Shares Screens"
description: "This article provides information on WebDAV screens and settings."
weight: 70
aliases: /
tags:
 - scalewebdav
 - scaleshares
---

{{< toc >}}

A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.
{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Share Configuration

Go to **Shares > WebDAV Shares** and click **Add**.

![SharingWebdavAddSCALE](/images/SCALE/SharingWebdavAddSCALE.png "Creating a WebDAV Share")

Enter a share **Name** and use the file browser to select the dataset to share.
An optional **Description** helps to identify the share.
To prevent user accounts from modifying the shared data, set **Read Only**.

By default, **Change User & Group Ownership** is set.
This changes existing ownership of *all* files in the share to the **webdav** user and group accounts.
The default simplifies WebDAV share permission, but is unexpected, so the web interface shows a warning:

![SharingWebdavAddWarningSCALE](/images/SCALE/SharingWebdavAddWarningSCALE.png "Services Webdav Add Warning")

This warning does not show when the **Change User & Group Ownership** checkbox is cleared.
In that situation, you must manually set shared file ownership to the webdav or *www* user and group accounts.

By default, the new WebDAV share is immediately active.
To create the share but not immediately activate it, unset **Enable**.
Click **Submit** to create the share.

## Service Activation

Creating a share allows users to activate the WebDAV service.
To enable or disable the WebDAV service, go to **System Settings > Services** and toggle **WebDAV**.
To automatically start the service when TrueNAS boots, set **Start Automatically**.
Click <i class="material-icons" aria-hidden="true" title="edit">edit</i> to change the service settings.

![WebDAVServiceOptionsSCALE](/images/SCALE/WebDAVServiceOptionsSCALE.png "WebDAV Service Options")

For better data security, set the **Protocol** to **HTTPS**.
If you require it, you must choose an SSL certificate (*freenas_default* is always available).
All **Protocol** options require you to define a number in the **Port** field.
Make sure the network is not already using the WebDAV service port.

To prevent unauthorized access to the shared data, set the **HTTP Authentication** to either **Basic** or **Digest** and create a new **Webdav Password**.

Be sure to click **Save** after making any changes.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.
To see the shared data, open a new browser tab and enter `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}`.
Replace the elements in curly brackets `{}` with your chosen WebDAV share and service settings.
Example: `https://10.2.1.1:8081/newdataset`

TrueNAS requires a username and password when setting the **Authentication** WebDAV service option to **Basic** or **Digest**.
Enter the user name **webdav** and the password defined in the WebDAV service.


{{< taglist tag="scalewebdav" limit="10" >}}
{{< taglist tag="scaleshares" limit="10" title="Related Shares Articles" >}}