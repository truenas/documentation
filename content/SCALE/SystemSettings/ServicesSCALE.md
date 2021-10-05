---
title: "Services"
geekdocCollapseSection: true
weight: 50
---

{{< toc >}}

**System Settings > Services** displays each system component that runs continuously in the background. These typically control data-sharing or other external access to the system. Individual services have their own configuration screens and activation toggles, and can be set to run automatically.

We have documented services related to data sharing or automated tasks in their respective [Shares]({{< relref "/SCALE/Shares/_index.md" >}}) and [Tasks]({{< relref "/SCALE/DataProtection/_index.md" >}}) articles.

![ServicesSCALE](/images/SCALE/ServicesSCALE.png "SCALE Service Screen")

{{< tabs "Services" >}}
{{< tab "Dynamic DNS" >}}
[Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) is useful when you connect TrueNAS to an ISP that periodically changes the system's IP address.
With Dynamic DNS, the system automatically associates its current IP address with a domain name and continues to provide access to TrueNAS even if the system IP address changes.

## Configuring Dynamic DNS

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
Have the DDNS service settings available or open in another browser tab when configuring TrueNAS.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

![DynamicDNSSCALE](/images/SCALE/DynamicDNSSCALE.png "Dynamic DNS Service Options")

{{< include file="static/includes/Reference/ServicesDynamicDNSFields.md.part" markdown="true" >}}

Your DDNS solution provides the required values for the fields.
Start the DDNS service after choosing your *Provider* options and saving the settings.
{{< /tab >}}

{{< tab "FTP, SFTP, and TFTP" >}}
The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The additional SSH and Trivial FTP options provide secure or simple config file transfer methods, respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

{{< expand "FTP" "v" >}}
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new dataset.

![DatasetAddSCALE](</images/SCALE/DatasetAddSCALE.png "Adding a new Dataset")

Next, go to **Credentials > Local Users**  and click *Add* to create a local user on the TrueNAS.

![AddUserFormSCALE](</images/SCALE/AddUserFormSCALE.png "Adding a new User Account")

Assign a user name and password, and link the newly created FTP share dataset as the user home directory.
You can do this for every user, or create a global account for FTP ("OurOrgFTPacnt" for example).

Return to **Storage**, find the new dataset, and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> > *View Permissions*. Then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Set the *Owner* fields (user and group) to the new user account.
Set *Apply User* and *Apply Group* before saving.

![EditDatasetPermissionsSCALE](/images/SCALE/StoragePoolsEditPermissionsBasic.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to **System Settings > Services** and find *FTP*, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesFTPSCALE](/images/SCALE/ServicesFTPSCALE.png "Services FTP Options")

Configure the options according to your environment and security considerations.

{{< include file="static/includes/Reference/ServicesFTPFields.md.part" markdown="true" >}}

Ensure *chroot* is enabled and allow *Local User Login*. Doing so confines FTP sessions to a local user's home directory.

Unless necessary, do NOT allow anonymous or root access.
For better security, enable TLS when possible (especially when FTP is exposed to a WAN).
TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217).

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images here show using [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user's <file>/home</file> directory.
After connecting, you can create directories and upload/download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")
{{< /expand >}}

{{< expand "SFTP" "v" >}}
SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Set *Allow Password Authentication* and decide if *Log in as Root with Password* is needed.
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
Review the remaining options and configure them according to your environment or security needs.

{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}

### SFTP Connections

Similar to the FTP setup, open an FTP client (like FileZilla) or command line.
This article shows using FileZilla as an example.
Using FileZilla, enter *SFTP://'TrueNAS IP'*, *'username'*, *'password'*, and port **22** to connect.

{{< hint warning >}}
SFTP does not have chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS may be the more secure choice.
{{< /hint >}}
{{< /expand >}}

{{< expand "TFTP" "v" >}}
The Trivial File Transfer Protocol (TFTP) is a lightweight version of FTP typically used to transfer configuration or boot files between machines, such as routers, in a local environment.
TFTP provides a limited set of commands and provides no authentication.

If TrueNAS is only storing images and configuration files for network devices, configure and start the TFTP service.
Starting the TFTP service opens UDP port *69*.

![ServicesTFTPSCALE](/images/SCALE/ServicesTFTPSCALE.png "TFTP Service Options")

{{< include file="static/includes/Reference/ServicesTFTPFields.md.part" markdown="true" >}}
{{< /expand >}}
{{< /tab >}}

{{< tab "LLDP" >}}
Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting LLDP tells TrueNAS to advertise itself on the network.

To configure LLDP, go to **System Settings > Services**, find *LLDP* and click the <i class="material-icons" aria-hidden="true">edit</i>.

![ServicesLLDPSCALE](/images/SCALE/ServicesLLDPSCALE.png "LLDP Service Options")

{{< include file="static/includes/Reference/ServicesLLDPFields.md.part" markdown="true" >}}

Set *Interface Description* and enter a *Country Code* before enabling the LLDP service.
{{< /tab >}}

{{< tab "OpenVPN" >}}
A virtual private network (VPN) is an extension of a private network over public resources.
It lets clients securely connect to a private network even when remotely using a public network.
TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service to provide VPN Server or Client functionality.
This means TrueNAS can act as a primary VPN server to allow remote clients access to data stored on the system using a single TCP or UDP port.
Alternately, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

Before configuring TrueNAS as either an OpenVPN Server or Client, you will need an existing public key infrastructure (PKI) with [Certificates]({{< relref "Certificates.md" >}}) and [Certificate Authorities]({{< relref "CAs.md" >}}) created in or imported to TrueNAS.
{{< expand "What does this do?" "v" >}}
This allows TrueNAS to authenticate with clients or servers by confirming network credentials were signed by a valid master Certificate Authority (CA).
To read more about the required PKI for OpenVPN, see the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview).
{{< /expand >}}

The general process to configure OpenVPN (server or client) on TrueNAS is to select the networking credentials, set the connection details, and choose any additional security or protocol options.

## OpenVPN Client

Go to the **Services** page and find the **OpenVPN Client** entry.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesOpenVPNClientOptions](/images/CORE/12.0/ServicesOpenVPNClientOptions.png "OpenVPN Client Options")

Choose the certificate to use as an OpenVPN client.
This certificate must exist in TrueNAS and be in an active (unrevoked) state.
Enter the hostname or IP address of the *Remote* OpenVPN server.

Continue to review and choose any other [Connection Settings](#connection-settings) that fit with your network environment and performance requirements.
The *Device Type* must match with the OpenVPN server *Device Type*.
*Nobind* prevents using a fixed port for the client.
By default, this is enabled to allow the OpenVPN client and server to run concurrently.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.
When the OpenVPN server is using TLS Encryption, copy the static TLS encryption key and paste it into the *TLS Crypt Auth* field.

## OpenVPN Server

Go to the **Services** page and find the **OpenVPN Server** entry.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesOpenVPNServerOptions](/images/CORE/12.0/ServicesOpenVPNServerOptions.png "OpenVPN Server Options")

Choose a *Server Certificate* for this OpenVPN server.
The certificate must both exist on the TrueNAS system and be in an active (unrevoked) state.

Now define an IP address and netmask for the OpenVPN *Server*.
Continue to choose the remaining [Connection Settings](#connection-settings) that fit with your network environment and performance requirements.
When a *TUN* *Device Type* is selected, you can choose a virtual addressing *Topology* for the server:

* *NET30*: Use one */30* subnet per client in a point-to-point topology. Use when connecting clients are Windows systems.
* *P2P*: Point-to-point topology that points the local server and remote client endpoints to each other. Each client is given one IP address. Use when none of the clients are Windows systems.
* *SUBNET*: The interface uses an IP address and subnet. Gives each client one IP address. Windows clients require the *TAP-Win32 driver* version 8.2 or newer. *TAP* devices always use the *SUBNET* *Topology*.

TrueNAS applies the *Topology* selection to any connected clients.

When *TLS Crypt Auth Enabled* is set, TrueNAS generates a static key for the *TLS Crypt Auth* field after saving the options.
To change this key, click *RENEW STATIC KEY*.
This key is required for any clients connecting to the server.
Keys are stored in the system database and are automatically included in a generated client config file, but a good practice is to back up keys in a secure location.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.

After configuring and saving your OpenVPN Server, generate client configuration files for importing to any OpenVPN client systems that are connecting to this server.
You need the certificate from the client system already imported into TrueNAS.
To generate the configuration file, click *Download Client Config* and select the *Client Certificate*.

## Common Options (Client or Server)

Many of the fields for configuring an OpenVPN Server or Client are identical.
These fields are discussed in this section, with specific configuration options listed in the [Server](#openvpn-server) and [Client](#openvpn-client) sections.

The *Additional Parameters* field manually sets any of the core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for descriptions of each option.

### Connection Settings

* *Root CA*: The Certificate Authority (CA) must be the root CA that was used to sign the Client and Server certificates.
* *Port*: This is the port that will be used for the OpenVPN connection.
* *Compression*: Choose a compression algorithm for traffic.
  Leave the field empty for data to be sent uncompressed.
  *LZO* is a standard compression algorithm that is backward compatible with previous (pre-2.4) versions of OpenVPN.
  *LZ4* is a newer option that is typically faster with fewer system resources required.
* *Protocol*: Choose between *UDP* or *TCP* protocols for OpenVPN.
  *UDP* sends packets in a continuous stream while *TCP* sends packets sequentially.
  UDP is generally faster and less strict about dropped packets than TCP.
  To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` *UDP* or *TCP* options.
* *Device Type*: use a *TUN* or *TAP* virtual networking device and layer with OpenVPN.
  This must be identical between the OpenVPN Server and any clients.

### Security Options

Because using a VPN involves connecting to a private network while still sending data over less secure public resources, OpenVPN includes several security options.
While not required, these security options help protect the data being sent into or out of the private network.

* *Authentication Algorithm*: This is used to validate packets that are sent over the network connection. Your network environment might require a specific algorithm. If no specific algorithm is required, *SHA1 HMAC* is a good standard algorithm to use.
* *Cipher*: This is an algorithm to encrypt data packets sent through the connection. While not required, choosing a *Cipher* can increase connection security. You might need to verify which ciphers are required for your networking environment. If there are no specific cipher requirements, *AES-256-GCM* is a good default choice.
* *TLS Encryption*: When *TLS Crypt Auth Enabled* is set, all TLS handshake messages are encrypted to add another layer of security. This requires a static key that is shared between OpenVPN server and clients.

## Service Activation

When finished configuring the Server or Client service, click **SAVE**.
Start the service by clicking the related toggle in **Services**.
To check the current state of the service, hover over the toggle.

Setting *Start Automatically* means the service starts whenever TrueNAS completes booting and the network and data pools are running.
{{< /tab >}}