---
title: "WebDAV Services Screen"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/services/webdavscreen/"
description: "Describes the WebDAV screen in TrueNAS CORE."
weight: 160
tags:
- webdav
---

The WebDAV protocol contains extensions to HTTP. These extensions expand the capabilities of a webserver. It can act as a collaborative authoring and management tool for web content. Use the **Services WebDAV** screen to enable WebDAV services on your TrueNAS.

Click **ADD** to open the WebDAV settings screen.

![ServicesWebDAVSettings](/images/CORE/Services/ServicesWebDAVSettings.png "Services WebDAV Settings Screen")

**General Options**

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Protocol** | Select the protocol from the dropdown list. **HTTP** keeps the connection unencrypted. **HTTPS** encrypts the connection. **HTTP+HTTPS** allows both types of connections. |
| **HTTP Port** | Specify a port for unencrypted connections. The default port **8080** is recommended. Do not reuse a port. |
| **HTTP Authentication** | Select the HTTP authentication type from the dropdown list. **Basic Authentication** is unencrypted. **Digest Authentication** is encrypted. Select **No Authentication** when you don't want to use authentication. |
| **Webdav Password** | Change the default of **davtest** as davtest is a known value. |
{{< /truetable >}}
