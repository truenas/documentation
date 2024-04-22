---
title: "Setting Up a Remote Syslog Server"
description: "Describes setting up a remote syslog server in TrueNAS CORE."
weight: 75
tags:
- settings
---

TrueNAS CORE allows users to configure a remote system logging server using any of the three transport protocols supported in CORE.
Options are **UDP**, **TCP**, or **TLS**.
The steps for all three protocol is the same except **UDP** and **TCP** do not require a certificate and certificate authority but **TLS** does.

## Configuring a Syslog Server
1. (TLS only) Go to **System > CAs** and configure a [certificate authority]({{< relref "CreatingCertificateAuthorities.md" >}}) for the remote logging server.
   You can use a self-signed CA. Enter the IP address for the remote server in **Subject Alternate Names**.

2. (TLS only) Go to **System > Certificates** and configure a [certificate]({{< relref "CreatingCertificates.md" >}}) for the remote logging server.
   Use the CA created for the remote syslog server. Enter the IP address for the remote server in **Subject Alternate Names**.

3. Go to **System > Advanced** and configure the syslog server settings:

   ![SystemAdvancedSyslogTransportTLS](/images/CORE/System/SystemAdvancedSyslogTransportTLS.png "Advanced Syslog Transport TLS Settings")

   a. Select the level of logging in **Syslog Level**.

   b. Enter the IP address for the remote sever in **Syslog Server**.

   c. Select **TLS** in **Syslog Transport** or one of the other transport protocols.
      The system shows the certificate and certificate authority settings after selecting **TLS**.
      If selecting **UDP** or **TCL**, go to step four.

   d. Select the certificate created for the remote syslog server from the **Syslog TLS Certificate** dropdown list.

   e. Select the certificate authority created for the remote syslog server from the **Syslog TLS Certificate Authority** dropdown list.

4. Click **SAVE**.