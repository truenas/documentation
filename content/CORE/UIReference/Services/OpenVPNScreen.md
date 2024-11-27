--- 
title: "OpenVPN Screen"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/services/openvpnscreen/"
description: "Describes the OpenVPN screen in TrueNAS CORE."
weight: 70
tags:
- vpn
--- 



OpenVPN is an open source connection protocol. OpenVPN creates a secure connection between 2 points in a network. VPN services use OpenVPN to safeguard data integrity and provide anonymity. There two OpenVPN services on TrueNAS, the **OpenVPN Client** and **OpenVPN Server**.

## OpenVPN Client

Use **OpenVPN Client** to configure the client settings.

![ServicesOpenVPNClientOptions](/images/CORE/Services/ServicesOpenVPNClientOptions.png "OpenVPN Client Options")

**General Options**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Client Certificate** | Select a valid client certificate from the dropdown list. The option is **freenas_default**. A certificate must exist on this system that is current and not revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Root CA** | Select the root Certificate Authority used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Remote** | Enter a valid IP address or domain name to which OpenVPN connects. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets. The dropdown list provides a list of algorithms to choose from. This is used to confirm packets sent over the network connection. Your network environment might need a specific algorithm. If not, select **SHA1 HMAC** which is a good standard algorithm to use. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets sent through the connection. While not required, using a cipher increases connection security. Verify if your networking environment requires a particular cipher. If not, **AES-256-GCM** is a good default choice. The dropdown list provides a list of encryption ciphers to choose from. |
| **Compression** | Select a compression algorithm from the dropdown list. Dropdown list options are **LZ0** or **LZ4**. Leave the field empty to send data uncompressed. **LZ0** is the standard compression algorithm. It is backwards compatible with previous (pre-2.4) versions of OpenVPN. **LZ4** is a newer option that is typically faster with less system resources required. |
| **Protocol** | Select the protocol to use when connecting with the remote system. Select from the dropdown list options **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. Select **UDP** or **TCP**. UDP sends packets in a continuous stream. It is generally faster and less strict about dropped packets than TCP. TCP sends packets sequentially. To force the connection to be IPv4 or IPv6 choose the UDP or TCP version with the 4 or 6 respectively. |
| **Device Type** | Select a virtual network interface from the dropdown list. Options are **TUN** or **TAP**. The client and server **Device Type** must be the same. For information see [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| **Nobind** | Select to enable and to prevent binding to local address and port. Required if running OpenVPN client and server at the same time. |
| **TLS Crypt Auth Enabled** | Select to enable or clear checkbox to disable TLS Web Client Authentication. |
| **Additional Parameters** | Enter any extra parameters for the client. This manually configures any of the core OpenVPN config file options. Refer to the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for descriptions of each option. |
| **TLS Crypt Auth** | Encrypts all TLS handshake messages to add another layer of security. OpenVPN server and clients share a required static key. Enter the static key for authentication/encryption of all control channel packets. Must enable tls_crypt_auth_enabled. |
{{< /truetable >}}

## OpenVPN Server

Use **OpenVPN Server** to configure the server settings.

![ServicesOpenVPNServerOptions](/images/CORE/Services/ServicesOpenVPNServerOptions.png "OpenVPN Server Options")

Configure and save your OpenVPN server settings. Click **DOWNLOAD CLIENT CONFIG** to generate the certificate file you need from the client system.

Click **Client Certificate** to generate the configuration file you need from the client system already imported on the system.

**General Options**

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Server Certificate** | Select a valid server certificate from the dropdown list. The option is **freenas_default**. A certificate must exist on this system that is current and not revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Root CA** | Select the root Certificate Authority used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Server** | Enter the IP address and netmask of the server. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets. The dropdown list provides a list of algorithms to choose from. Your network environment might require a specific algorithm. If not, select **SHA1 HMAC** which is a good standard algorithm to use. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets sent through the connection. While not required, using a cipher increases connection security. Verify if your networking environment requires a particular cipher. If not, **AES-256-GCM** is a good default choice. The dropdown list provides a list of encryption ciphers to choose from. |
| **Compression** | Select a compression algorithm from the dropdown list. Dropdown list options are **LZ0** or **LZ4**. Leave the field empty to send data uncompressed. **LZ0** is the standard compression algorithm. It is backwards compatible with previous (pre-2.4) versions of OpenVPN. **LZ4** is a newer option that is typically faster with less system resources required. |
| **Protocol** | Select the protocol to use when connecting with the remote system. Select from the dropdown list options **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. Select **UDP** or **TCP**. UDP sends packets in a continuous stream. It is generally faster and less strict about dropped packets than TCP. TCP sends packets sequentially. To force the connection to be IPv4 or IPv6 choose the UDP or TCP version with the 4 or 6 respectively. |
| **Device Type** | Select a virtual network interface from the dropdown list. Options are **TUN** or **TAP**. The client and server **Device Type** must be the same. For more information see [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| **Topology** | Select to configure virtual addressing topology when running in TUN mode. Dropdown list options are **NET30**, **P2P** or **SUBNET**. TAP mode always uses a SUBNET topology. |
| **TLS Crypt Auth Enabled** | Select to enable or clear checkbox to disable TLS Web Client Authentication. |
| **Additional Parameters** | Enter any extra parameters. |
| **TLS Crypt Auth** | Encrypting TLS handshake messages adds another layer of security. OpenVPN server and clients share a required static key. Enabling tls_crypt_auth_enabled generates a static key if tls_crypt_auth is not provided. The generated static key is for use with OpenVPN client. Enter that key here. |
{{< /truetable >}}
