---
title: "Configuring WebDAV Shares"
description: "This article provides instructions on adding a WebDAV share, configuring and starting the WebDAV service, and then connecting to it with a web browser."
weight: 40
aliases: 
tags:
 - scalewebdav
 - scaleshares
---

{{< toc >}}


A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.
{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Configuring a WebDAV Share

Go to **Shares** and click on **Add** on the **WebDAV <span class="material-icons">launch</span>** widget. 
The first WebDAV share added to your system opens the **No WebDAV** screen. 
Click **Add WebDAV** to open the **Add WebDAV** configuration screen.

![AddWebDAVScreen](/images/SCALE/22.02/AddWebDAVScreen.png "Add WebDAV Screen") 

Enter a share **Name**.

Add the path to the pool or dataset in **Path**. Enter or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to browse to the dataset and populate the path.
An optional **Description** helps to identify the share.
To prevent user accounts from modifying the shared data, set **Read Only**.

To change existing ownership of all files in the share to the **webdav** user and group accounts leave **Change User & Group Ownership** selected.
This default simplifies WebDAV share permission, but is unexpected, so the web interface displays a warning:

![AddWebDAVWarningDialog](/images/SCALE/22.02/AddWebDAVWarningDialog.png "Add Webdav Warning")

If you clear the **Change User & Group Ownership** checkbox this warning does not display and you must manually set shared file ownership to the **webdav** or **www** user and group accounts.

Click **Save** to add the share. The **Enable service** dialog opens. Click **Enable Service** to start the service or click **Cancel** to start the service at a later time.

## Configuring WebDAV Service

To automatically start the service when TrueNAS boots, select **Start Automatically**.

Click <i class="material-icons" aria-hidden="true" title="edit">edit</i> to change the service settings.

![ServicesWebDAVScreen](/images/SCALE/22.02/ServicesWebDAVScreen.png "WebDAV Service Options")

For better data security, set **Protocol** to **HTTPS**. 
If you require it, you must choose an SSL certificate (*freenas_default* is always available).
Define a number in the **Port** field. But do not use the default **8080** or reuse the same port number.
Make sure the network is not already using the WebDAV service port.

To prevent unauthorized access to the shared data, set **HTTP Authentication** to either **Basic** or **Digest** and create a new **Webdav Password**. Do not use the default password **davtest** as it is a known password.

TrueNAS requires a username and password when setting the **Authentication** WebDAV service option to **Basic** or **Digest**.
Enter the user name **webdav** and the password defined in the WebDAV service.

Click **Save** after making changes.

## Activating the WebDAV Service

Creating a share allows users to activate the WebDAV service.

You can enable the serivce from the **Sharing** screen **Enable Service** dialog or from the **WebDAV <span class="material-icons">launch </span>** widget toolbar option. 
Click <span class="material-icons">more_vert</span> and then click **Turn On Service**. 
Or you can go to **System Settings > Services** and scroll down to **WebDAV** and click the toggle to **Start**.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.
To see the shared data, open a new browser tab and enter `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}` where the elements in curly brackets `{}` are variables to replace with your chosen WebDAV share and service settings.
For example: *https://10.2.1.1:8081/newdataset*

{{< taglist tag="scalewebdav" limit="10" >}}