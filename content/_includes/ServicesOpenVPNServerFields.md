---
---
**General Options**

| Settings | Description |
|----------|-------------|
| **Server Certificate** | Select a valid client certificate from the dropdown list. The option is **freenas_default**. A certificate must exists on this system and one that is current and not revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Root CA** | Select the root Certificate Authority used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| **Server** | Enter the IP address and netmask of the server. |
| **Port** | Enter a port number to use for the connection. |
| **Authentication Algorithm** | Select an algorithm to authenticate packets. The dropdown list provides a list of algorithms to choose from. |
| **Cipher** | Select a cipher algorithm to encrypt data channel packets. The dropdown list provides a list of encryption ciphers to choose from. |
| **Compression** | Select a compression algorithm from the dropdown list. Dropdown list options are **LZ0** or **LZ4**. |
| **Protocol** | Select the protocol to use when connecting with the remote system. Select from the dropdown list options **UDP**, **UDP4**, **UDP6**, **TCP**, **TCP4** or **TCP6**. |
| **Device Type** | Select a virtual network interface from the dropdown list. Options are **TUN** or **TAP**. For more information see [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| **Topology** | Select to configure virtual addressing topology when running in TUN mode. Dropdown options are **NET30**, **P2P** or **SUBNET**. TAP mode always uses a SUBNET topology. |
| **TLS Crypt Auth Enabled** | Select to enable or clear checkbox to disable TLS Web Client Authentication. |
| **Additional Parameters** | Enter any additional parameters. |
| **TLS Crypt Auth** | When tls_crypt_auth_enabled is enabled and tls_crypt_auth is not provided, a static key is automatically generated to use with OpenVPN client. Enter that key here. |