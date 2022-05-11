---
title: "WebDAV Services Screen"
weight: 160
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

For more information see:

[WebDAV Share Screen]({{< relref "/CORE/UIReference/Sharing/WebDAV/WebDAVShareScreen.md" >}})

[WebDAV Share Creation]({{< relref "/CORE/CORETutorials/Sharing/WebDAV/WebDAVShare.md" >}})