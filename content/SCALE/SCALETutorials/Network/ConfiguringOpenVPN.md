---
title: "Configuring OpenVPN"
description: "This article provides instructions on configuring OpenVPN client and server service."
weight: 40
tags:
- scalenetwork
- scaleopenvpn
- scaleservices
---


{{< toc >}}


## About OpenVPN

A virtual private network (VPN) is an extension of a private network over public resources.
VPNs allow clients to securely connect to a private network even when remotely using a public network.

TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service for VPN server or client functionality.
TrueNAS can act as a primary VPN server that gives remote clients access to data stored on the system using a single TCP or UDP port.
Alternately, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

Before configuring TrueNAS as either an OpenVPN server or client, you need an existing public key infrastructure (PKI) with [Certificates]({{< relref "CertificatesSCALE.md#certificates" >}}) and [Certificate Authorities]({{< relref "CertificatesSCALE.md#certificate-authorities" >}}) created in or imported to TrueNAS.

{{< expand "What does a PKI do?" "v" >}}
A PKI allows TrueNAS to authenticate with clients or servers by confirming a valid master Certificate Authority (CA) signed the network credentials.
Refer to the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview) to read more about the OpenVPN required PKI.
{{< /expand >}}

## Configuring OpenVPN on TrueNAS SCALE
To configure OpenVPN (server or client) on TrueNAS you:

* Select the networking credentials
* Set the connection details
* Select additional security or protocol options

### Obtaining the OpenVPN Root Certificate Authority

Before setting up OpenVPN client obtain a valid root Certificate Authority (CA) to sign the client and server certificates. 
Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients).

The client certificate must be valid, unrevoked, and exist on the TrueNAS system. 
Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients).

Go to **Credentials > Certificates** and click **Add** in the **Certificate Authorities** widget to add the downloaded OpenVPN certificate.

![AddOpenVPNCA](/images/SCALE/22.02/AddOpenVPNCA.png "Add OpenVPN Certificate Authority")

Enter a name, select the **Type** and then select **Openvpn Root CA** in the **Profiles** dropdown list.

Complete the rest of the form and click **Save**.

### Configuring OpenVPN Client

To configure the OpenVPN client, go to **Network** and click on **Client** in the **OpenVPN** widget. The **OpenVPN Client** settings screen displays.

![OpenVPNClientScreen](/images/SCALE/22.02/OpenVPNClientScreen.png "OpenVPN Client Options")

1. Complete the **OpenVPN Client** configuration form by entering or selecting the settings for your client.

   You need to know the domain IP address and port number for the server where OpenVPN is to connect. This goes in the **Remote** and **Port** fields.

2. Select the OpenVPN root CA you added to your system as the **Root CA**.

3. Select the **Device Type** from the dropdown list. The topology is assigned by TrueNAS so the field does not display in the **OpenVPN Client** configuration form.

4. Decide on the level of security you want to implement for the OpenVPN server. Security options settings:

   *  **Authentication Algorithm** which validates packets that TrueNAS sends over the network connection. Your network environment might require a specific algorithm. 
      If not, **SHA1 HMAC** is a good standard algorithm to use.

   *  **Cipher** which encrypts data packets sent through the connection. While not required, choosing a cipher can increase connection security. 
      You might need to verify which ciphers your networking environment requires. If there are no specific cipher requirements, **AES-256-GCM** is a good default choice.
   
   * **TLS Crypt Auth Enabled** to use TLS web Client authentication. 
     Copy and paste the TrueNAS-generated static key for authentication/encryption of all control channel packets in the **TLS Crypt Auth** field.

   TrueNAS stores the keys in the system database and automatically includes them in a generated client config file. Back up keys in a secure location.

5. (Optional) Select the level of compression you want to use from the **Compression** dropdown list.

   * Select **LZ0** to use the standard compression algorithm that is backwards-compatible with previous (pre-2.4) versions of OpenVPN.

   * Select **LZ4** to use a newer option that is typically faster with fewer system resources required.

   * Leave blank to leave data uncompressed.

6. Select the **Protocol** to use from the dropdown list of options. 
   To force a connection to IPv4 choose either **UDP4** or **TCP4**. To force an IPv6 connection, select **UDP6** or **TCP6**.

   * Select **UDP** to send packets in a continuous stream. In general, UDP is faster and less strict about dropped packets than is TCP.

   * Select **TCP** to send packets sequentially.

See [OpenVPN Screens]){{< relref "/SCALE/SCALEUIReference/Network/OpenVPNScreens.md" >}} for more information on client settings.

### Configuring the OpenVPN Server

You can configure the OpenVPN server settings before the client settings. Make sure you use the same **Device Type** setting for client and server.

To configure the OpenVPN server, go to **Network** and click on **Server** in the **OpenVPN** widget. The **OpenVPN Server** settings screen displays.

![OpenVPNServerScreen](/images/SCALE/22.02/OpenVPNServerScreen.png "OpenVPN Server Options")

1. Complete the **OpenVPN Server** configuration form by entering or selecting the settings for your server.
   
   You need to know the domain and netmask IP addresses and port number for the server.

2. Select the valid OpenVPN server certificate that exists on your TrueNAS system. The certificate must be valid and not revoked. 

3. Select the OpenVPN root CA from the dropdown list. 
   Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients).

3. Select the **Device Type**. If you choose the **TUN** you can select a virtual addressing **Topology** for the server:
   
   * **NET30**: Use one */30* subnet per client in a point-to-point topology. Designed for use when connecting clients are Windows systems.

   * **P2P**: Point-to-point topology that points the local server and remote client endpoints to each other. 
      P2P gives each client one IP address. Recommended when none of the clients are Windows systems.
      
   * **SUBNET**: the interface uses an IP address and subnet. SUBNET gives each client one IP address. Windows clients require the **TAP-Win32 driver** version 8.2 or newer.

   If you select **TAP**, also select **SUBNET** in **Topology**.

4. Decide on the level of security you want to implement for the OpenVPN server. Security options settings:

   *  **Authentication Algorithm** which validates packets that TrueNAS sends over the network connection. Your network environment might require a specific algorithm. 
      If not, **SHA1 HMAC** is a good standard algorithm to use.

   *  **Cipher** which encrypts data packets sent through the connection. While not required, choosing a cipher can increase connection security. 
      You might need to verify which ciphers your networking environment requires. If there are no specific cipher requirements, **AES-256-GCM** is a good default choice.
   
   * **TLS Crypt Auth Enabled** to use TLS web Client authentication. 
     Copy and paste the TrueNAS-generated static key for authentication/encryption of all control channel packets in the **TLS Crypt Auth** field.

   TrueNAS stores the keys in the system database and automatically includes them in a generated client config file. Back up keys in a secure location.

5. (Optional) Select the level of compression you want to use from the **Compression** dropdown list.

   * Select **LZ0** to use the standard compression algorithm that is backwards-compatible with previous (pre-2.4) versions of OpenVPN.

   * Select **LZ4** to use a newer option that is typically faster with fewer system resources required.

   * Leave blank to leave data uncompressed.

6. Select the **Protocol** to use from the dropdown list of options. 
   To force a connection to IPv4 choose either **UDP4** or **TCP4**. To force an IPv6 connection, select **UDP6** or **TCP6**.

   * Select **UDP** to send packets in a continuous stream. In general, UDP is faster and less strict about dropped packets than is TCP.

   * Select **TCP** to send packets sequentially.

7. Click **Download Client Config** and select **Client Certificate** to generate the client configuration files to import to OpenVPN client systems connecting to the server. 
   This requires the certificate from the client system already imported onto the system.

See [OpenVPN Screens]){{< relref "/SCALE/SCALEUIReference/Network/OpenVPNScreens.md" >}} for more information on client settings.

You can use the **Additional Parameters** field to manually set any of the core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for option descriptions.


### Activating OpenVPN Services

After configuring the server or client service, click **Save**.

Start the service by clicking the <span class="iconify" data-icon="bxs:right-arrow"></span> arrow icon button next for **Client** and **Server** in the **OpenVPN** widget on the **Network**8* screen.. 

You can also start the service by going to **System Settings > Services** and clicking the **State** toggle.
Select **Start Automatically** on the **Services** screen to start the service when TrueNAS completes booting and runs the network and data pools.

{{< taglist tag="scaleopenvpn" limit="10" >}}
{{< taglist tag="scaleservices" limit="10" "Related Service Articles" >}}