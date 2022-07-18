---
title: "OpenVPN Client and Server Screens"
description: "This article provides information on the OpenVPN services screens, **OpenVPN Client** and **OpenVPN Server**."
weight: 50
tags:
- scalenetwork
- scaleopenvpn
---

{{< toc >}}


The **OpenVPN** widget on the **Network** screen displays the status of both the OpenVPN **Client** and OpenVPN **Server** services, allows you to start or stop services, and provides access to the configuration screens for client and server services.

![NetworkScreen](/images/SCALE/22.02/NetworkScreen.png "Network screen")

Click on **Client** to open the **OpenVPN Client** service configuration screen.

Click on **Service** to open the **OpenVPN Server** service configuration screen.

![OpenVPNClientStart](/images/SCALE/22.02/OpenVPNClientStart.png "OpenVPN Client Start")

Click on the <span class="iconify" data-icon="bxs:right-arrow"></span> arrow icon to turn the service on or off.

## OpenVPN Client Screen
The **OpenVPN Client** screen displays the settings to configure or manage an OpenVPN client. Many settings on this screen are the same as those on the **OpenVPN Server** screen.

![OpenVPNClientScreen](/images/SCALE/22.02/OpenVPNClientScreen.png "OpenVPN Client Configuration Screen")

| Setting | Description |
|---------|-------------|
| **Client Certificate** | Select a valid and unrevoked client certificate that exists on this system from the dropdown list of options. The dropdown list default certificate is **freenas_default**. <br> Click [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients) for more about generating certificates and CAs for OpenVPN. |
| **Root CA** | Select the root Certificate Authority TrueNAS uses to sign the client and server certificates from the dropdown list of options. If no options display, you must obtain and sign a Certificate Authority (CA) root uses for OpenVPN. Click [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients) for more about generating certificates and CAs for OpenVPN. |
| **Remote** | A valid IP address or domain name where you want OpenVPN to connect. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets from the dropdown list of options. If your system does not require a specific algorithm, selecting **SHA1 HMAC** is a good standard algorithm to use. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets from the dropdown list of options. Selecting a cipher is optional but it can increase connection security. Verify which ciphers your networking environment requires. If you do not have a specific cipher requiremens, **AES-256-GCM** is a good default choice.|
| **Compression** | Select a compression algorithm from the dropdown list of options, empty, **LZO** or **LZ4**. **LZO** is a standard compression algorithm that is backward-compatible with previous (pre-2.4) versions of OpenVPN. **LZ4** is a newer option that is typically faster with fewer system resources required. Leave this field empty to send data uncompressed. |
| **Protocol** | Select the protocol to use when connecting with the remote system from the dropdown list of options which are **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. Select either **UDP** or **TCP** for OpenVPN.<br> UDP sends packets in a continuous stream and is generally faster and less strict about dropped packets, while TCP sends packets sequentially.<br> To force the connection to be IPv4 use one of the UDP or TCP 4 options or for IPv6 use one of the UPD or TCP 6 options. |
| **Device Type** | Select a virtual network interface from the dropdown list of options **TUN** or **TAP**. Select the same device type for client and server settings. <br> Click [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting) for more information. |
| **Nobind** | Select to prevent binding to local address and port. Must be enabled if OpenVPN client and server are to run concurrently. |
| **TLS Crypt Auth Enabled** | Select to enable TLS Web Client Authentication. TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **Renew Static Key**. |
| **Additional Parameters** | Enter additional parameters. These entries set any of the core OpenVPN config file options.
Refer the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for option descriptions.|
| **TLS Crypt Auth** | Enter static key for authentication/encryption of all control channel packets when **TLS Crypt Auth Enabled** is selected or the CLI command `tls_crypt_auth_enabled` is enabled. |

Click **Save** to save settings and exit to the **Network** the screen.

## OpenVPN Server Screen
The **OpenVPN Server** displays the settings for configuring or managing an OpenVPN server.

![OpenVPNServerScreen](/images/SCALE/22.02/OpenVPNServerScreen.png "OpenVPN Server Configuration Screen")

| Setting | Description |
|---------|-------------|
| **Server Certificate** | Select a valid and unrevoked client certificate that exists on this system from the dropdown list of options. The dropdown list default certificate is **freenas_default**. <br> Click [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients) for more information about generating certificates and CAs for OpenVPN. |
| **Root CA** | Select the root Certificate Authority TrueNAS uses to sign the client and server certificates from the dropdown list of options. If no options display, you must obtain and sign a Certificate Authority (CA) root uses for OpenVPN. Click [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients) for more about generating certificates and CAs for OpenVPN . |
| **Server** | Enter the IP address and netmask of the server. Select the CIDR value from the dropdown list. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets from the dropdown list of options. If your system does not require a specific algorithm, selecting **SHA1 HMAC** is a good standard algorithm to use. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets from the dropdown list of options. Selecting a cipher is optional but it can increase connection security. Verify which ciphers your networking environment requires. If you do not have specific cipher requirements, **AES-256-GCM** is a good default choice.|
| **Compression** | Select a compression algorithm from the dropdown list of options, empty, **LZO** or **LZ4**. **LZO** is a standard compression algorithm that is backward-compatible with previous (pre-2.4) versions of OpenVPN. **LZ4** is a newer option that is typically faster with fewer system resources required. Leave this field empty to send data uncompressed. |
| **Protocol** | Select the protocol to use when connecting with the remote system from the dropdown list of options which are **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. Select either **UDP** or **TCP** for OpenVPN.<br> UDP sends packets in a continuous stream and is generally faster and less strict about dropped packets, while TCP sends packets sequentially.<br> To force the connection to be IPv4 use one of the UDP or TCP 4 options or for IPv6 use one of the UPD or TCP 6 options. |
| **Device Type** | Select a virtual network interface from the dropdown list of options **TUN** or **TAP**. Select the same device type for client and server settings. If you select **TUN** you can select a virtual addressing topology for the server. TrueNAS automatically applies the **Topology** selection to any connected clients.<br> Click [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting) for more information. |
| **Topology** | Select an option from the dropdown list to configure virtual addressing topology when running in TUN mode.<br> Select **NET30** to use one /30 subnet per client in point-to-point topology. This is designed to use when connecting clients are Windows systems.<br> Select **P2P** to use a point-to-point topology that points the local server and remote client endpoints to each other. P2P gives each client one IP address. Recommended when the clients are not Windows systems.<br> Select **Subnet** if the interface uses an IP address and subnet. Subnet gives each client one IP address. Windows clients require the **Tap-Win32 driver** version 8.2 or newer.<br> If you selected **TAP** for **Device Type** it always uses **Subnet** topology.) |
| **TLS Crypt Auth Enabled** | Select to enable TLS Web Client Authentication. TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **Renew Static Key**. |
| **Additional Parameters** | Enter additional parameters. These entries set any of the core OpenVPN config file options.
Refer the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for option descriptions. |
| **TLS Crypt Auth** | Provide static key for authentication/encryption of all control channel packets when **TLS Crypt Auth Enabled** is selected or the CLI command `tls_crypt_auth_enabled` is enabled. |
| **Renew Static Key** | Generates a new key to replace the static key generated after selecting **TLS Crypt Auth**. |
| **Download Client Config** | Use to generate client configuration files to import to OpenVPN client systems connecting to the server. Requires the certificate from the client system imported to the system. To generate the configuration file select **Client Certificate**. |

Click **Save** to save settings and exit to the **Network** the screen.

{{< taglist tag="scaleopenvpn" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" "Related Network Articles" >}}