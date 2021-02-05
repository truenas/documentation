---
title: "OpenVPN"
description: "How to configure TrueNAS to act as an OpenVPN Server or Client."
---

A virtual private network (VPN) is an extension of a private network over public resources.
It allows clients to securely connect to a private network even when they are remotely using a public network.
TrueNAS provides [OpenVPN](https://openvpn.net/) as a system level service to provide VPN Server or Client functionality.
This means you can configure TrueNAS to act as a primary VPN server to allow remote clients access to data stored on the system using a single TCP or UDP port.
Alternately, TrueNAS can be integrated into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

Before configuring TrueNAS as either an OpenVPN Server or Client, you will need an existing public key infrastructure (PKI) with [Certificates](/hub/initial-setup/security/certificates/) and [Certificate Authorities](/hub/initial-setup/security/certificate-authorities/) created in or imported to TrueNAS.
This allows TrueNAS to authenticate with clients or servers by confirming network credentials were signed by a valid master Certificate Authority (CA).
<!-- markdown-link-check-disable-next-line -->
To read more about the required PKI for OpenVPN, see the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview).

The general process to configure OpenVPN (server or client) on TrueNAS is to select the networking credentials, set the connection details, and choose any additional security or protocol options.

## Common Options

Many of the fields for configuring an OpenVPN Server or Client are identical.
These fields are discussed in this section, with specific configuration options listed in the [Server](#openvpn-server) and [Client](#openvpn-client) sections.

You can use the **Additional Parameters** field to manually set any of the core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for descriptions of each option.

### Connection Settings

* **Root CA**: The Certificate Authority (CA) must be the root CA that was used to sign the Client and Server certificates.
* **Port**: This is the port that will be used for the OpenVPN connection.
* **Compression**: Choose a compression algorithm for traffic. Leave the field empty for data to be sent uncompressed. *LZO* is a standard compression algorithm that is backwards compatible with previous (pre-2.4) versions of OpenVPN. *LZ4* is a newer option that is typically faster with less system resources required.
* **Protocol**: Choose between *UDP* or *TCP* protocols for OpenVPN. *UDP* sends packets in a continuous stream while *TCP* sends packets sequentially. UDP is generally faster and less strict about dropped packets than TCP. To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` *UDP* or *TCP* options.
* **Device Type**: use a *TUN* or *TAP* virtual networking device and layer with OpenVPN. This must be identical between the OpenVPN Server and any clients.

### Security Options

Because using a VPN involves connecting to a private network while still sending data over less secure public resources, OpenVPN includes several security options.
While not required, these security options help protect the data being sent into or out of the private network.

* **Authentication Algorithm**: This is used to validate packets that are sent over the network connection. Your network environment might require a specific algorithm. If no specific algorithm is required, *SHA1 HMAC* is a good standard algorithm to use.
* **Cipher**: This is an algorithm to encrypt data packets sent through the connection. While not required, choosing a **Cipher** can increase connection security. You might need to verify which ciphers are required for your networking environment. If there are no specific cipher requirements, *AES-256-GCM* is a good default choice.
* **TLS Encryption**: When the **TLS Crypt Auth Enabled** checkbox is set, all TLS handshake messages are encrypted to add another layer of security. This requires a static key that is shared between OpenVPN server and clients.

## OpenVPN Server

Go to the **Services** page, find the **OpenVPN Server** row, and click <i class="material-icons" aria-hidden="true" title="Configure">create</i> (Configure) to set up the TrueNAS OpenVPN Server.

<img src="/images/OpenVPNServerServiceConfig.png">
<br><br>

Choose a **Server Certificate** for this OpenVPN server.
The certificate must both exist on the TrueNAS system and be in an active (unrevoked) state.

Now define a IP address and netmask for the OpenVPN **Server**.
Continue to choose the remaining [Connection Settings](#connection-settings) that fit with your network environment and performance requirements.
When a *TUN* **Device Type** is selected, you can choose a virtual addressing **Topology** for the server:

* *NET30*: Use one `/30` subnet per client in a point-to-point topology. Designed for use when connecting clients are Windows systems.
* *P2P*: Point-to-point topology that points the local server and remote client endpoints to each other. Each client is given one IP address. This is only recommmended when none of the clients are a Windows system.
* *SUBNET*: the interface uses an IP address and subnet. Each client is given one IP address. Windows clients require the **TAP-Win32 driver** version 8.2 or newer. *TAP* devices always use the *SUBNET* **Topology**.

The **Topology** selection is automatically applied to any connected clients.

When **TLS Crypt Auth Enabled** is set, TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **RENEW STATIC KEY**.
This key is required for any clients that will connect to the server.
Keys are stored in the system database and are automatically included in a generated client config file, but a good general practice is to back up keys in a secure location.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.

After configuring and saving your OpenVPN Server, you can generate client configuration files for importing to any OpenVPN client systems that will connect to this server.
You will need the certificate from the client system already imported on the system.
To generate the configuration file, click **DOWNLOAD CLIENT CONFIG** and select the **Client Certificate**.

## OpenVPN Client

Go to the **Services** page, find the **OpenVPN Client** row, and click <i class="material-icons" aria-hidden="true" title="Configure">create</i> (Configure) to set up a TrueNAS OpenVPN Client.

<img src="/images/OpenVPNClientServiceConfig.png">
<br><br>

Choose the certificate to use as an OpenVPN client.
This certificate must exist in TrueNAS and be in an active (unrevoked) state.
Enter the host name or IP address of the **Remote** OpenVPN server.

Continue to review and choose any other [Connection Settings](#connection-settings) that fit with your network environment and performance requirements.
The **Device Type** must match with the OpenVPN server **Device Type**.
**Nobind** prevents using a fixed port for the client. By default, this is enabled to allow the OpenVPN client and server to run concurrently.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.
When the OpenVPN server is using TLS Encryption, copy the static TLS encryption key and paste into the **TLS Crypt Auth** field.

## Service Activation

When you're finished configuring the Server or Client service, click **SAVE**.
Activate the service by clicking the *Running* toggle.

Setting **Start Automatically** means the service starts whenever TrueNAS completes booting and the network and data pools are running.
You can check the current state of the service by hovering over the toggle.
