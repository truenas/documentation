---
title: "WebDAV Service Screen"
description: "Provides information on WebDAV service screen and settings."
weight: 75
aliases: /scale/scaleuireference/shares/webdav/webdavservicescreen/
tags:
 - scalewebdav
 - scaleservices
---

{{< toc >}}

{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}


## WebDAV Service Screen
The **Services > WebDAV** configuration screen displays settings to customize the TrueNAS WebDAV service.

You can access it from **System Settings > Services** screen. Locate **WebDAV** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **WebDAV** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate the service when TrueNAS boots.

![ServicesWebDAVScreen](/images/SCALE/22.02/ServicesWebDAVScreen.png "WebDAV Service Options")

If you require it, you must choose an SSL certificate (*freenas_default* is always available).
All **Protocol** options require you to define a number in the **Port** field.
Make sure the network is not already using the WebDAV service port.

To prevent unauthorized access to the shared data, set the **HTTP Authentication** to either **Basic** or **Digest** and create a new **Webdav Password**.

### WebDAV Configuration Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Protocol** | Select the protocol option from the dropdown list. Options are **HTTP**, **HTTPS** or **HTTP+HTTPS**. For better security, select **HTTPS**. |
| **HTTP Port** | Enter a port number for unencrypted connections. The default **8080** is not recommended. Do not reuse a port number. |
| **HTTP Authentication** | Select the authentication method from the dropdown list. Select **Basic Authentication** for unencrypted or **Digest Authentication** for encrypted. **No Authentication** to not use any authentication method. |
| **WebDAV Password** | Enter a password. **davtest** is the default password, but you should change this as it is a known password. |
| **Confirm Password** | Re-enter the password to confirm it. |
{{< /truetable >}}

{{< taglist tag="scalewebdav" limit="10" title="Related WebDAV Articles" >}}
