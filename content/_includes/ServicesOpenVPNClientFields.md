---
---

**General Options**

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Client Certificate** | Select a valid client certificate from the dropdown list. The option is **freenas_default**. A certificate must exists on this system and one that is current and not revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Root CA** | Select the root Certificate Authority used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Remote** | Enter a valid IP address or domain name to which OpenVPN connects. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets. The dropdown list provides a list of algorithms to choose from. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets. The dropdown list provides a list of encryption ciphers to choose from. |
| **Compression** | Select a compression algorithm from the dropdown list. Dropdown list options are **LZ0** or **LZ4**. |
| **Protocol** | Select the protocol to use when connecting with the remote system. Select from the dropdown list options **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. |
| **Device Type** | Select a virtual network interface from the dropdown list. Options are **TUN** or **TAP**. For information see [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| **Nobind** | Select to enable and to prevent binding to local address and port. Required if running OpenVPN client and server concurrently. |
| **TLS Crypt Auth Enabled** | Select to enable or clear checkbox to disable TLS Web Client Authentication. |
| **Additional Parameters** | Enter any additional parameters for the client. |
| **TLS Crypt Auth** | Enter the static key for authentication/encryption of all control channel packets when tls_crypt_auth_enabled is enabled. |
{{< /truetable >}}
