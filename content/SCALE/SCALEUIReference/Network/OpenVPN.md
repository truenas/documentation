---
title: "OpenVPN Screens"
description: "This article provides information on the **Network** screen **OpenVPN** widget and configuration screen."
weight: 40
tags:
- scalenetwork
- scaleopenvpn
---

{{< toc >}}

The **OpenVPN** widget on the **Network** screen displays OpenVPN Client and Server statuses. Use this to manually stop and start OpenVPN Client and Server services.

![OpenVPNWidget](/images/SCALE/22.12/OpenVPNWidget.png "OpenVPN")

## OpenVPN Client

Clicking **Client** opens the **Open VPN Client** configuration form. 

![OpenVPNClientScreen](/images/SCALE/22.12/OpenVPNClientScreen.png "OpenVPN Client Options")

**Manage Certificates** opens the **[Accounts > Certificates]({{< relref "CertificatesScreensSCALE.md" >}})** screen.

| Setting | Description |
|---------|-------|
| **Client Certificate** | Choose a valid client certificate which exists on this system and hasn't been revoked. |
| **Root CA** | The Certificate Authority (CA) must be the root CA you used to sign the client and server certificates. |
| **Remote** | A valid IP address or domain name to which OpenVPN will connect. |
| **Port** | The port that the OpenVPN connection is to use. |
| **Authentication Algorithm** | Choose an algorithm to authenticate packets. |
| **Cipher** | Choose a cipher algorithm to encrypt data channel packets. |
| **Compression** | Choose a compression algorithm for traffic. Leave empty to send data uncompressed.<br><br>**LZO** is a standard compression algorithm that is backward compatible with previous (pre-2.4) versions of OpenVPN.<br><br>**LZ4** is newer and typically faster and requires fewer system resources.|
| **Protocol** | Choose between **UDP** or **TCP** OpenVPN protocols. **UDP** sends packets in a continuous stream. **TCP** sends packets sequentially.<br><br>UDP is usually faster and less strict about dropped packets than TCP.<br><br>To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` UDP or TCP options. |
| **Device Type** | Use a **TUN** or **TAP** virtual networking device and layer with OpenVPN. The device must be identical between the OpenVPN server and clients. |
| **Nobind** | Enable to prevent binding to local address and port. Must be enabled if OpenVPN client and server are to run concurrently. |
| **TLS Crypt Auth Enabled** | Enable/disable TLS Web Client Authentication. |
| **Additional Parameters** | Additional parameters. |
| **TLS Crypt Auth** | Provide static key for authentication/encryption of all control channel packets when tls_crypt_auth_enabled is enabled. |

## OpenVPN Server

Clicking **Server** opens the **Open VPN Server** configuration form.

![OpenVPNServerScreen](/images/SCALE/22.12/OpenVPNServerScreen.png "OpenVPN Server Options")

**Manage Certificates** opens the **[Accounts > Certificates]({{< relref "CertificatesScreensSCALE.md" >}})** screen.

| Setting | Description |
|---------|-------|
| **Server Certificate** | Choose a valid server certificate which exists on this system and hasn't been revoked. |
| **Root CA** | The Certificate Authority (CA) must be the root CA you used to sign the client and server certificates. |
| **Server** | Enter the IP address and netmask of the server. |
| **Port** | The port that the OpenVPN connection is to use. |
| **Authentication Algorithm** | Choose an algorithm to authenticate packets. |
| **Cipher** | Choose a cipher algorithm to encrypt data channel packets. |
| **Compression** | Choose a compression algorithm for traffic. Leave empty to send data uncompressed.<br><br>**LZO** is a standard compression algorithm that is backward compatible with previous (pre-2.4) versions of OpenVPN.<br><br>**LZ4** is newer and typically faster and requires fewer system resources.|
| **Protocol** | Choose between **UDP** or **TCP** OpenVPN protocols. **UDP** sends packets in a continuous stream. **TCP** sends packets sequentially.<br><br>UDP is usually faster and less strict about dropped packets than TCP.<br><br>To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` UDP or TCP options. |
| **Device Type** | Use a **TUN** or **TAP** virtual networking device and layer with OpenVPN. The device must be identical between the OpenVPN server and clients. |
| **Topology** | Configure virtual addressing topology when running in TUN mode. (TAP mode always uses a SUBNET topology.) |
| **TLS Crypt Auth Enabled** | Enable/disable TLS Web Client Authentication. |
| **Additional Parameters** | Additional parameters. |
| **TLS Crypt Auth** | Provide static key for authentication/encryption of all control channel packets when tls_crypt_auth_enabled is enabled. |

The <span class="iconify" data-icon="mdi:play-arrow-rounded"></span> and <span class="iconify" data-icon="mdi:round-stop"></span> buttons start and stop the OpenVPN server and client.

{{< taglist tag="scaleopenvpn" limit="10" >}}