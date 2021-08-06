---
title: "OpenVPN"
weight: 40
---

{{< toc >}}

A virtual private network (VPN) is an extension of a private network over public resources.
VPNs allow clients to securely connect to a private network even when remotely using a public network.

TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service for VPN Server or Client functionality.
TrueNAS can act as a primary VPN server that gives remote clients access to data stored on the system using a single TCP or UDP port.
Alternately, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

![OpenVPNSCALE](/images/SCALE/OpenVPNSCALE.png "OpenVPN")

Before configuring TrueNAS as either an OpenVPN Server or Client, you will need an existing public key infrastructure (PKI) with [Certificates]({{< relref "CertificatesSCALE.md" #certificates >}}) and [Certificate Authorities]({{< relref "CertificatesSCALE.md" #certificate-authorities >}}) created in or imported to TrueNAS.

{{< expand "What does a PKI do?" "v" >}}
A PKI allows TrueNAS to authenticate with clients or servers by confirming a valid master Certificate Authority (CA) signed the network credentials.
See the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview) to read more about the OpenVPN required PKI.
{{< /expand >}}

To configure OpenVPN (server or client) on TrueNAS, select the networking credentials, set the connection details, and choose additional security or protocol options.

## OpenVPN Client

Go to **Network** and click *Client* in the *OpenVPN* window to configure the OpenVPN Client.

![OpenVPNClient](/images/SCALE/OpenVPNClient.png "OpenVPN Client Options")

| Setting | Description |
|---------|-------------|
| Client Certificate | Choose a valid client certificate which exists on this system and hasn't been revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Root CA | Choose the root Certificate Authority that was used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Remote | A valid IP address or domain name to which OpenVPN will connect. |
| Port | Enter a port number to use for the connection. |
| Authentication Algorithm | Choose an algorithm to authenticate packets. |
| Cipher | Choose a cipher algorithm to encrypt data channel packets. |
| Compression | Choose a compression algorithm. |
| Protocol | Choose the protocol to use when connecting with the remote system. |
| Device Type | Choose a virtual network interface. More information can be found [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| Nobind | Enable to prevent binding to local address and port. Must be enabled if OpenVPN client and server are to run concurrently. |
| TLS Crypt Auth Enabled | Enable/disable TLS Web Client Authentication. |
| Additional Parameters | Additional Parameters. |
| TLS Crypt Auth | Provide static key for authentication/encryption of all control channel packets when `tls_crypt_auth_enabled` is enabled. |

## OpenVPN Server

Go to **Network** and click *Server* in the *OpenVPN* window to configure the OpenVPN Server.

![OpenVPNServer](/images/SCALE/OpenVPNServer.png "OpenVPN Server Options")

| Setting | Description |
|---------|-------------|
| Server Certificate | Choose a valid client certificate which exists on this system and hasn't been revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Root CA | Choose the root Certificate Authority that was used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Server | Enter the IP address and netmask of the server. |
| Port | Enter a port number to use for the connection. |
| Authentication Algorithm | Choose an algorithm to authenticate packets. |
| Cipher | Choose a cipher algorithm to encrypt data channel packets. |
| Compression | Choose a compression algorithm. |
| Protocol | Choose the protocol to use when connecting with the remote system. |
| Device Type | Choose a virtual network interface. More information can be found [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| Topology | Configure virtual addressing topology when running in TUN mode. (TAP mode always uses a SUBNET topology.) |
| TLS Crypt Auth Enabled | Enable/disable TLS Web Client Authentication. |
| Additional Parameters | Additional Parameters. |
| TLS Crypt Auth | Provide static key for authentication/encryption of all control channel packets when `tls_crypt_auth_enabled` is enabled. |

### TUN Device Type 

If you choose the TUN *Device Type*, you can select a virtual addressing *Topology* for the server:

* *NET30*: Use one */30* subnet per client in a point-to-point topology.
  Designed for use when connecting clients are Windows systems.
* *P2P*: Point-to-point topology that points the local server and remote client endpoints to each other.
  P2P gives each client one IP address.
  We only recommend P2P when none of the clients are Windows systems.
* *SUBNET*: the interface uses an IP address and subnet.
  SUBNET gives each client one IP address.
  Windows clients require the *TAP-Win32 driver* version 8.2 or newer.
  *TAP* devices always use the *SUBNET* *Topology*.

TrueNAS automatically applies the *Topology* selection to any connected clients.

### TLS Crypt Auth

When users enable *TLS Crypt Auth Enabled*, TrueNAS generates a static key for the *TLS Crypt Auth* field after saving the options.
To change this key, click *Renew Static Key*.
Clients connecting to the server require the static key.
TrueNAS stores the keys in the system database and automatically includes them in a generated client config file. We always recommend users back up keys in a secure location.

After configuring and saving your OpenVPN Server, generate client configuration files to importing to OpenVPN client systems connecting to the server.
You need the certificate from the client system already imported onto the system.
To generate the configuration file, click *Download Client Config* and select the *Client Certificate*.

## Common Options (Client or Server)

Many of the fields for configuring an OpenVPN Server or Client are identical.

The *Additional Parameters* field manually sets any of the core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for option descriptions.

### Connection Settings

* *Root CA*: The Certificate Authority (CA) must be the root CA TrueNAS used to sign the Client and Server certificates.
* *Port*: This is the port that the OpenVPN connection will use.
* *Compression*: Choose a compression algorithm for traffic.
  Leave the field empty for data to be sent uncompressed.
  *LZO* is a standard compression algorithm that is backward-compatible with previous (pre-2.4) versions of OpenVPN.
  *LZ4* is a newer option that is typically faster with fewer system resources required.
* *Protocol*: Choose between *UDP* or *TCP* protocols for OpenVPN.
  *UDP* sends packets in a continuous stream while *TCP* sends packets sequentially.
  UDP is generally faster and less strict about dropped packets than TCP.
  To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` *UDP* or *TCP* options.
* *Device Type*: use a *TUN* or *TAP* virtual networking device and layer with OpenVPN.
  The Device Type must be identical between the OpenVPN Server and any clients.

### Security Options

Because using a VPN involves connecting to a private network while still sending data over less secure public resources, OpenVPN includes several security options.
While not required, these security options help protect the data TrueNAS sends into or out of the private network.

* *Authentication Algorithm*: Validates packets that TrueNAS sends over the network connection. Your network environment might require a specific algorithm. If not, *SHA1 HMAC* is a good standard algorithm to use.
* *Cipher*: Encrypts data packets sent through the connection. While not required, choosing a *Cipher* can increase connection security. You might need to verify which ciphers your networking environment requires. If there are no specific cipher requirements, *AES-256-GCM* is a good default choice.
* *TLS Encryption*: When *TLS Crypt Auth Enabled* is set, TrueNAS encrypts all TLS handshake messages to add another layer of security. TLS Encryption requires a static key that the OpenVPN server and clients share.

## Service Activation

When finished configuring the Server or Client service, click *Save*.
Start the service by clicking the play button next to it in the OpenVPN window. 

You may also start the service by going to **System Settings > Services** and clicking the *State* toggle.
Setting *Start Automatically* starts the service when TrueNAS completes booting and runs the network and data pools.
