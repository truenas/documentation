---
title: "WebDav Share Creation"
description: "This article contains information on how to create a Web-based Distributed Authoring and Versioning (WebDAV) share on your TrueNAS."
weight: 10
aliases: /core/sharing/webdav/webdavshare/
tags:
- corewebdav
---

{{< toc >}}

A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.
{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Share Configuration

Go to **Sharing > WebDAV Shares** and click **ADD**.

![SharingWebdavAdd](/images/CORE/12.0/SharingWebdavAdd.png "Creating a WebDAV Share")

Enter a name for the share in **Name** and use the file browser to select the dataset to share.
Enter an optional description for the share in **Description** to help identify it.
To prevent user accounts from modifying the shared data, select **Read Only**.

By default, **Change User & Group Ownership** is selected.
This changes existing ownership of all files in the share to the **webdav** user and group accounts.
The default simplifies WebDAV share permission, but is unexpected, so the web interface displays a warning:

![Webdav Add Warning](/images/CORE/12.0/SharingWebdavAddWarning.png "Services Webdav Add Warning")

This warning does not display when the checkmark in **Change User & Group Ownership** is cleared.
In that situation, you must manually set shared file ownership to the **webdav** or **www** user and group accounts.

By default, the new WebDAV share is immediately active.
To create the share but not immediately activate it, clear the checkmark in **Enable**.
Click **SUBMIT** to create the share.

## Service Activation

Creating a share immediately opens a dialog to activate the WebDAV service:

![WebdavServiceEnable](/images/CORE/12.0/SharingCreateServiceEnable.png "WebDAV Service Activation from Share")

To later enable or disable the WebDAV system service, go to **Services** and click the **WebDAV** toggle to stop the service.
To automatically start the service when TrueNAS boots, select **Start Automatically**.
Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> to change the service settings.

![WebDAVServiceOptions](/images/CORE/12.0/ServicesWebdavOptions.png "WebDAV Service Options")

For better data security, select **HTTPS** as the **Protocol**.
This requires choosing an SSL certificate. The **freenas_default** certificate is available as an option.
All **Protocol** options require defining a **Port** number.
Verify that the WebDAV service port is not already in use on the network before defining a **Port** number.

To prevent unauthorized access to the shared data, select either **Basic** or **Digest** as the method of **HTTP Authentication** and create a new **Webdav Password**.

Click **SAVE** after making any changes.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.
To see the shared data, open a new browser tab and enter the following in the URL field  `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}` where the elements in curly brackets **{}** are your chosen settings from the WebDAV share and service.
Example: *https://10.2.1.1:8081/newdataset*

When the **Authentication** WebDAV service option is configured to either **Basic** or **Digest**, a user name and password is required.
Enter the user name **webdav** and the password defined in the WebDAV service.

{{< taglist tag="corewebdav" limit="10" >}}