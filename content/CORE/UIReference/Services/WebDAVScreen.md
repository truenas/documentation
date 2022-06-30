---
title: "WebDAV Services Screen"
description: "Use the WebDAV screen to configure Web Distributed Authoring and Versioning (WebDAV) and related service options on your TrueNAS"
weight: 160
tags:
- corewebdav
---

Use the **Services WebDAV** screen to enable WebDAV services on your TrueNAS.

Use **ADD** to open the WebDAV settings screen.

![ServicesWebDAVSettings](/images/CORE/13.0/ServicesWebDAVSettings.png "Services WebDAV Settings Screen")

**General Options**

| Settings | Descritpion |
|----------|-------------|
| **Protocol** | Select the protocol from the dropdown list. **HTTP** keeps the connection unencrypted. **HTTPS** encrypts the connection. **HTTP+HTTPS** allows both types of connections. |
| **HTTP Port** | Specify a port for unencrypted connections. The default port **8080** is recommended. Do not reuse a port. |
| **HTTP Authentication** | Select the HTTP authentication type from the dropdown list. **Basic Authentication** is unencrypted. **Digest Authentication** is encrypted. **No Authentication** when you don't want to use authentication. |
| **Webdav Password** | Change the default of **davtest** as davtest is a known value. |

{{< taglist tag="corewebdav" limit="10" title="Related Articles" >}}