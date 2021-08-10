---
title: "Network"
geekdocCollapseSection: true
weight: 60
---

{{< toc >}}

The SCALE Network section contains network configuration and settings options for active *Interfaces*, *Static Routes*, and the *Global Configuration*. 

The Network screen also displays *OpenVPN* information and *IPMI* channels.

![NetworkSCALE](/images/SCALE/NetworkSCALE.png "SCALE Network Page")
<br></br>  
<br></br>

## Interfaces

The Interfaces section displays network port names and IP addresses, as well as their upload/download rates. 

![InterfacesSCALE](/images/SCALE/InterfacesSCALE.png "Interfaces")

{{< expand "Configuration Overview" "v" >}}
Users can edit interfaces by clicking them, delete them by clicking the trashcan icon next to them, or add new ones by clicking *Add*.

![AddInterfaceSCALE](/images/SCALE/AddInterfaceSCALE.png "Add Interface Form")

### Interface Settings

| Setting | Description |
|---------|-------------|
| Type | Choose the type of interface. Bridge creates a logical link between multiple networks. Link Aggregation combines multiple network connections into a single interface. A Virtual LAN (VLAN) partitions and isolates a segment of the connection. Read-only when editing an interface. |
| Name | Enter a name for the interface. Use the format bondX, vlanX, or brX where X is a number representing a non-parent interface. Read-only when editing an interface. |
| Description | Enter a description of the interface. |
| DHCP | Set to enable DHCP. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | Set to automatically configure the IPv6 address with rtsol(8). Only one interface can be configured this way. |

### Other Settings

| Setting | Description |
|---------|-------------|
| Disable Hardware Offloading | Turn off hardware offloading for network traffic processing. |
| MTU | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500. |
| Options | Enter additional parameters from [ifconfig(8)](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). |

{{< hint danger >}}
**WARNING:** Disabling hardware offloading can reduce network performance. We only recommend disabling hardware offloading when the interface is managing jails, plugins, or virtual machines.
{{< /hint >}}

### IP Addresses

The IP Address section lets users define an alias for the interface on the TrueNAS controller. The alias can be an IPv4 or IPv6 address.

Users may also select how many bits will be a part of the network address.
{{< /expand >}}
<br></br>  

## Global Configuration

The *Global Configuration* section has all the general TrueNAS networking settings *not* specific to any interfaces.

![GlobalConfigurationSCALE](/images/SCALE/GlobalConfigurationSCALE.png "Global Configuration")

{{< expand "Can I configure these options elsewhere?" "v" >}}
Users can configure many of these Interface, DNS, and Gateway options in the [Console Setup Menu]({{< relref "Post-installConfiguration.md" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

{{< expand "Configuration Overview" "v" >}}
{{< hint danger >}}
**Disruptive Change**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You may need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

![EditGlobalConfigurationSCALE](/images/SCALE/EditGlobalConfigurationSCALE.png "Global Configuration Options")

### Hostname and Domain

Many of these fields have default values, but users can be change them to meet local network requirements.

TrueNAS displays the *Hostname* and *Domain* in the **Dashboard** *System Information* window. 

{{< hint info >}}
**Note:** The *Global Configuration* window will only display some options when the appropriate hardware is present.
{{< /hint >}}  

| Setting | Description |
|---------|-------------|
| Hostname | System hostname. |
| Hostname (TrueNAS Controller 2) | Host name of second TrueNAS controller (for HA only). Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Hostname (Virtual) | Virtual host name. When using a virtualhost, this is also used as the Kerberos principal name. Enter the fully qualified hostname plus the domain name. Upper and lower case alphanumeric, `.`, and `-` characters are allowed. |
| Domain | System domain name, like example.com |
| Additional Domains | Additional domains to search. Separate entries by pressing <kbd>Enter</kbd>. Adding search domains can cause slow DNS lookups |

### Service Announcement

| Setting | Description |
|---------|-------------|
| NetBIOS-NS | Legacy NetBIOS name server. Advertises the SMB service NetBIOS Name. Can be required for legacy SMB1 clients to discover the server. When advertised, the server appears in Network Neighborhood. |
| mDNS | Multicast DNS. Uses the system *Hostname* to advertise enabled and running services. For example, this controls if the server appears under **Network** on MacOS clients.|
| WS-Discovery | Uses the SMB Service *NetBIOS Name* to advertise the server to WS-Discovery clients. This causes the computer to appear in the **Network Neighborhood** of modern Windows OSes. |

### DNS Servers

| Setting | Description |
|---------|-------------|
| Nameserver 1 | Primary DNS server. |
| Nameserver 2 | Secondary DNS server. |
| Nameserver 3 | Third DNS server. |

### Default Gateway

| Setting | Description |
|---------|-------------|
| IPv4 Default Gateway | Enter an IPv4 address. This overrides the default gateway provided by DHCP. |
| IPv6 Default Gateway | Enter an IPv6 address. This overrides the default gateway provided by DHCP. |

### Outbound Network

| Setting | Description |
|---------|-------------|
| Allow All | Any system service can communicate externally. |
| Deny All | This system cannot communicate externally. |
| Allow Specific | Define the system services that are allowed to communicate externally. All other external traffic is restricted. |

### Other Settings

| Setting | Description |
|---------|-------------|
| HTTP Proxy | When using a proxy, enter the proxy information for the network in the format *`http://my.proxy.server:3128`* or *`http://user:password@my.proxy.server:3128`*.
| Enable Netwait Feature | Delays the start of network services until pings are returned from the IP addresses added to the *Netwait IP List*. |
| Netwait IP List | Only appears when *Enable Netwait Feature* is set. Enter a list of IP addresses to [ping](https://www.freebsd.org/cgi/man.cgi?query=ping). Separate entries by pressing <kbd>Enter</kbd>. Each address is tried until one is successful or the list is exhausted. Leave empty to use the default gateway.
| Host Name Database | Additional hosts to be appended to */etc/hosts*. Separate entries by pressing. Separate entries by pressing <kbd>Enter</kbd>.  Use the format *`IP_address space hostname`* where multiple hostnames can be used if separated by a space. Hosts defined here are still accessible by name even when DNS is not available. See <a href="https://www.freebsd.org/cgi/man.cgi?query=hosts">hosts</a> for additional information. |
{{< /expand >}}
<br></br>  

## Static Routes

TrueNAS administrators can use the *Static Routes* section to manually enter routes so the router can send packets to a destination network.

![StaticRoutesSCALE](/images/SCALE/StaticRoutesSCALE.png "Static Routes")

{{< expand "Configuration Overview" "v" >}}
TrueNAS does not have defined static routes by default.
If you need a static route to reach portions of the network, add the route by going to **Network** and clicking *Add* in the *Static Routes* window .

![AddStaticRouteSCALE](/images/SCALE/AddStaticRouteSCALE.png "Add Static Route")

| Setting | Description |
|---------|-------------|
| Destination | Use the format *A.B.C.D/E* where *E* is the CIDR mask. |
| Gateway | Enter the IP address of the gateway. |
| Description | Notes or identifiers describing the route. |
{{< /expand >}}
<br></br>  

## OpenVPN

A virtual private network (VPN) is an extension of a private network over public resources.
VPNs allow clients to securely connect to a private network even when remotely using a public network.

TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service for VPN Server or Client functionality.
TrueNAS can act as a primary VPN server that gives remote clients access to data stored on the system using a single TCP or UDP port.
Alternately, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

![OpenVPNSCALE](/images/SCALE/OpenVPNSCALE.png "OpenVPN")

{{< expand "Configuration Overview" "v" >}}
Before configuring TrueNAS as either an OpenVPN Server or Client, you will need an existing public key infrastructure (PKI) with [Certificates]({{< relref "CertificatesSCALE.md #certificates" >}}) and [Certificate Authorities]({{< relref "CertificatesSCALE.md #certificate-authorities" >}}) created in or imported to TrueNAS.

{{< expand "What does a PKI do?" "v" >}}
A PKI allows TrueNAS to authenticate with clients or servers by confirming a valid master Certificate Authority (CA) signed the network credentials.
See the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview) to read more about the OpenVPN required PKI.
{{< /expand >}}

To configure OpenVPN (server or client) on TrueNAS, select the networking credentials, set the connection details, and choose additional security or protocol options.

### OpenVPN Client

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

### OpenVPN Server

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

#### TUN Device Type 

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

#### TLS Crypt Auth

When users enable *TLS Crypt Auth Enabled*, TrueNAS generates a static key for the *TLS Crypt Auth* field after saving the options.
To change this key, click *Renew Static Key*.
Clients connecting to the server require the static key.
TrueNAS stores the keys in the system database and automatically includes them in a generated client config file. We always recommend users back up keys in a secure location.

After configuring and saving your OpenVPN Server, generate client configuration files to importing to OpenVPN client systems connecting to the server.
You need the certificate from the client system already imported onto the system.
To generate the configuration file, click *Download Client Config* and select the *Client Certificate*.

### Common Options (Client or Server)

Many of the fields for configuring an OpenVPN Server or Client are identical.

The *Additional Parameters* field manually sets any of the core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for option descriptions.

#### Connection Settings

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

#### Security Options

Because using a VPN involves connecting to a private network while still sending data over less secure public resources, OpenVPN includes several security options.
While not required, these security options help protect the data TrueNAS sends into or out of the private network.

* *Authentication Algorithm*: Validates packets that TrueNAS sends over the network connection. Your network environment might require a specific algorithm. If not, *SHA1 HMAC* is a good standard algorithm to use.
* *Cipher*: Encrypts data packets sent through the connection. While not required, choosing a *Cipher* can increase connection security. You might need to verify which ciphers your networking environment requires. If there are no specific cipher requirements, *AES-256-GCM* is a good default choice.
* *TLS Encryption*: When *TLS Crypt Auth Enabled* is set, TrueNAS encrypts all TLS handshake messages to add another layer of security. TLS Encryption requires a static key that the OpenVPN server and clients share.

### Service Activation

When finished configuring the Server or Client service, click *Save*.
Start the service by clicking the play button next to it in the OpenVPN window. 

You may also start the service by going to **System Settings > Services** and clicking the *State* toggle.
Setting *Start Automatically* starts the service when TrueNAS completes booting and runs the network and data pools.
{{< /expand >}}
<br></br>  

## IPMI

{{< hint info >}}
IPMI (Intelligent Platform Management Interface) requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface will have IPMI options.
{{< /hint >}}

Many [TrueNAS Storage Arrays]({{< relref "/Hardware/_index.md" >}}) have a built-in out-of-band management port that provides side-band management should the system become unavailable through the web interface. 

IPMI allows users to check the log, access the BIOS setup, and boot the system without physical access. IPMI also enables users to remotely access the system to assist with configuration or troubleshooting issues.

{{< hint info >}}
Some IPMI implementations require updates to work with newer versions of Java. See [HERE](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{< /hint >}}

IPMI is configured in **Network >** *IPMI*. The IPMI configuration screen provides a shortcut to the most basic IPMI configuration.

![IPMISCALE](/images/SCALE/IPMISCALE.png "IPMI")

{{< expand "Configuration Overview" "v" >}}
The IPMI window displays the available IPMI channels. The *Identify Light* button (flashlight) lets users select a duration for the system's IPMI to flash so they can identify it. The *Manage* button (square with an outward-pointing arrow) opens the IPMI manager in a new browser tab.

### IPMI Configuration

Click the channel you wish to edit to open the configuration form.

![IPMIConfigureSCALE](/images/SCALE/IPMIConfigureSCALE.png "IPMI Configuration")

| Setting | Description |                                                                                                                                   
|---------|-------------|
| DHCP | Use DHCP. Unset to manually configure a static IPv4 connection. |
| IPv4 Address | Static IPv4 address of the IPMI web interface. |
| IPv4 Netmask | Subnet mask of the IPv4 address. |
| IPv4 Default Gateway | Enter the default gateway of the IPv4 connection. |
| VLAN ID | Enter the VLAN identifier if the IPMI out-of-band management interface is not on the same VLAN as management networking. |
| Password | Enter the password used to connect to the IPMI interface from a web browser. The maximum length accepted in the UI is 20 characters, but different hardware might require shorter passwords. |
| Identify Light | Lets users select a duration for the system's IPMI light to flash on the compatible connected hardware. |
| Manage | Opens the IPMI manager in a new browser tab. |


### IPMI Options

After saving the configuration, users can access the IPMI interface using a web browser and the IP address specified in **Network >** *IPMI*. The management interface prompts for login credentials. Refer to your IPMI device documentation to learn the default administrator account credentials.

After logging in to the management interface, users can change the default administrative user name and create additional IPMI users. IPMI utility appearance and available functions vary by hardware.
{{< /expand >}}
