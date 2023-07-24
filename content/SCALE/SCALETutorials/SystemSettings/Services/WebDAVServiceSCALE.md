---
title: "Configuring WebDAV Service"
description: "Provides information on configuring the WebDAV service."
weight: 75
aliases: /scale/scaleuireference/shares/webdav/webdavservicescreen/
tags:
 - scalewebdav
 - scaleservices
---

{{< include file="content/_includes/SCALEWebDAVDeprecation.md" type="page" >}}

{{< toc >}}

The **Services > WebDAV** configuration screen displays settings to customize the TrueNAS WebDAV service.

You can access it from **System Settings > Services** screen. Locate **WebDAV** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **WebDAV** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate the service when TrueNAS boots.

![ServicesWebDAVScreen](/images/SCALE/22.02/ServicesWebDAVScreen.png "WebDAV Service Options")

If you require it, you must choose an SSL certificate (*freenas_default* is always available).
All **Protocol** options require you to define a number in the **Port** field.
Make sure the network is not already using the WebDAV service port.

Select the protocol option from the **Protocol** dropdown list. For better security, select **HTTPS**. 

Enter a port number for unencrypted connections in **HTTP Port**. The default **8080** is not recommended. Do not reuse a port number.

Select the authentication method from the **HTTP Authentication** dropdown list. Select **Basic Authentication** for unencrypted or **Digest Authentication** for encrypted. **No Authentication** to not use any authentication method. To prevent unauthorized access to the shared data, set the **HTTP Authentication** to either **Basic** or **Digest** and create a new **Webdav Password**.

Enter and then confirm a password but do not use the know default **davtest** password. 

Click **Save**.

Start the service.

{{< taglist tag="scalewebdav" limit="10" title="Related WebDAV Articles" >}}
