---
title: "Services"
geekdocCollapseSection: true
weight: 50
---

{{< toc >}}

**System Settings > Services** displays each system component that runs continuously in the background. These typically control data-sharing or other external access to the system. Individual services have configuration screens and activation toggles, and you can set them to run automatically.

Documented services related to data sharing or automated tasks are in their respective [Shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}) and [Tasks]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) articles.

![ServicesSCALE](/images/SCALE/ServicesSCALE.png "SCALE Service Screen")

{{< tabs "Services" >}}
{{< tab "Dynamic DNS" >}}
[Dynamic Domain Name Service (DDNS)](https://tools.ietf.org/html/rfc2136) is useful when you connect TrueNAS to an Internet service provider (ISP) that periodically changes the system's IP address.
With Dynamic DNS, the system automatically associates its current IP address with a domain name and continues to provide access to TrueNAS even if the system IP address changes.

## Configuring Dynamic DNS

DDNS requires registration with a DDNS service such as [DynDNS](https://dyn.com/dns/) before configuring TrueNAS.
Have the DDNS service settings available or open in another browser tab when configuring TrueNAS.
Log in to the TrueNAS web interface and go to **Services > Dynamic DNS**.

![DynamicDNSSCALE](/images/SCALE/DynamicDNSSCALE.png "Dynamic DNS Service Options")

{{< include file="static/includes/Reference/ServicesDynamicDNSFields.md.part" markdown="true" >}}

Your DDNS solution provides the required values for the fields.
Start the DDNS service after choosing your **Provider** options and saving the settings.
{{< /tab >}}

{{< tab "FTP, SFTP, and TFTP" >}}
The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

{{< expand "FTP" "v" >}}
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset](https://www.truenas.com/docs/scale/storage/pools/datasetsscale).

![DatasetAddSCALE](/images/SCALE/DatasetAddSCALE.png "Adding a new Dataset")

Next, go to **Credentials > Local Users**  and click **Add** to create a local user on the TrueNAS.

![AddUserFormSCALE](/images/SCALE/AddUserFormSCALE.png "Adding a new User Account")

Assign a user name and password, and link the newly created FTP share dataset as the user home directory.
You can do this for every user, or create a global account for FTP (for example, *OurOrgFTPacnt*).

Return to **Storage**, find the new dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i>, and select **View Permissions**. Next click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Set the **Owner** fields (user and group) to the new user account.
Set **Apply User** and **Apply Group** before saving.

![EditDatasetPermissionsSCALE](/images/SCALE/EditDatasetPermissionsSCALE.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesFTPSCALE](/images/SCALE/ServicesFTPSCALE2202.png "Services FTP Options")

Configure the options according to your environment and security considerations.

{{< include file="static/includes/Reference/ServicesFTPFields.md.part" markdown="true" >}}

To confine FTP sessions to a local user's home directory, ensure **chroot** is enabled and allow **Local User Login**. 

Do *not* allow anonymous or root access unless it is necessary. 
For better security, enable TLS when possible (especially when exposing FTP to a WAN).
TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217).

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below use [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user's <file>/home</file> directory.
After connecting, you can create directories and upload/download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")
{{< /expand >}}

{{< expand "SFTP" "v" >}}
SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System Settings > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Set **Allow Password Authentication** and decide if you need **Log in as Root with Password**.
{{< hint warning >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
{{< /hint >}}
Review the remaining options and configure them according to your environment or security needs.

{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}

### SFTP Connections

Open an FTP client (like FileZilla) or command line. 
This article shows using FileZilla as an example.
Using FileZilla, enter *SFTP://'TrueNAS IP'*, *'username'*, *'password'*, and port **22** to connect.

{{< hint warning >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}
{{< /expand >}}

{{< expand "TFTP" "v" >}}
The Trivial File Transfer Protocol (TFTP) is a lightweight version of FTP typically used to transfer configuration or boot files between machines, such as routers, in a local environment.
TFTP provides a limited set of commands and provides no authentication.

If TrueNAS is only storing images and configuration files for network devices, configure and start the TFTP service.
Starting the TFTP service opens UDP port **69**.

![ServicesTFTPSCALE](/images/SCALE/22.02/ServicesTFTPSCALE.png "TFTP Service Options")

{{< include file="static/includes/Reference/ServicesTFTPFields.md.part" markdown="true" >}}
{{< /expand >}}
{{< /tab >}}

{{< tab "LLDP" >}}
Network devices use the [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting LLDP tells TrueNAS to advertise itself on the network.

To configure LLDP, go to **System Settings > Services**, find **LLDP** and click the <i class="material-icons" aria-hidden="true">edit</i>.

![ServicesLLDPSCALE](/images/SCALE/ServicesLLDPSCALE.png "LLDP Service Options")

{{< include file="static/includes/Reference/ServicesLLDPFields.md.part" markdown="true" >}}

Set **Interface Description** and enter a **Country Code** before enabling the LLDP service.
{{< /tab >}}

{{< tab "OpenVPN" >}}
A virtual private network (VPN) is an extension of a private network over public resources.
It lets clients securely connect to a private network even when remotely using a public network.
TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service to provide VPN server or client functionality.
TrueNAS can act as a primary VPN server that allows remote clients to access system data using a single TCP or UDP port.
Alternatively, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

Before configuring TrueNAS as either an OpenVPN server or client, you need an existing public key infrastructure (PKI) with [Certificates and Certificate Authorities]({{< relref "CertificatesSCALE.md" >}}) created in or imported to TrueNAS.
{{< expand "What does this do?" "v" >}}
Certificates allow TrueNAS to authenticate with clients or servers by confirming a valid master Certificate Authority (CA) signed the network credentials.
To read more about the required PKI for OpenVPN, see the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview).
{{< /expand >}}

In general, configuring TrueNAS OpenVPN (server or client) includes selecting networking credentials, setting connection details, and choosing additional security or protocol options.

## OpenVPN Client

Go to **System Settings > Services** and find **OpenVPN Client**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![OpenVPNClient](/images/SCALE/OpenVPNClient.png "OpenVPN Client Options")

Choose the certificate to use as an OpenVPN client.
The certificate must exist in TrueNAS and be active (unrevoked).
Enter the **Remote** OpenVPN server's hostname or IP address.

Continue to review and choose any other [Connection Settings](#connection-settings) that fit your network environment and performance requirements.
The **Device Type** must match the OpenVPN server **Device Type**.
**Nobind** prevents using a fixed port for the client and is enabled by default so the OpenVPN client and server run concurrently.

Finally, review the [Security Options](#security-options) and ensure they meet your network security requirements.
If the OpenVPN server uses TLS Encryption, copy the static TLS encryption key and paste it into the **TLS Crypt Auth** field.

## OpenVPN Server

Go to **System Settings > Services** and find **OpenVPN Server**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![OpenVPNServer](/images/SCALE/OpenVPNServer.png "OpenVPN Server Options")

Choose a **Server Certificate** for the OpenVPN server.
The certificate must exist in TrueNAS and be active (unrevoked).

Now define an IP address and netmask for the OpenVPN **Server**.
Select the remaining [Connection Settings](#connection-settings) that fit your network environment and performance requirements.
If using a **TUN** **Device Type**, you can choose a virtual addressing topology for the server in **Topology**:

* **NET30**: Use one */30* subnet per client in a point-to-point topology. Use when connecting clients are Windows systems.
* **P2P**: Point-to-point topology that points the local server and remote client endpoints to each other. Each client gets one IP address. Use when none of the clients are Windows systems.
* **SUBNET**: The interface uses an IP address and subnet. Each client gets one IP address. Windows clients require the **TAP-Win32 driver** version 8.2 or newer. **TAP** devices always use the **SUBNET Topology**.

TrueNAS applies the **Topology** selection to any connected clients.

When **TLS Crypt Auth Enabled** is selected, TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **Renew Static Key**.
Clients connecting to the server require the key.
TrueNAS stores keys in the system database and includes them in client config files. We recommend always backing up keys in a secure location.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.

After configuring and saving your OpenVPN Server, generate client configuration files to import to any OpenVPN client systems connecting to this server.
You need the certificate from the client system already imported into TrueNAS.
To generate the configuration file, click **Download Client Config** and select the **Client Certificate**.

## Common Options (Client or Server)

Many OpenVPN server or client configuration fields are identical.
This section covers these fields and lists specific configuration options in the [Server](#openvpn-server) and [Client](#openvpn-client) sections.

The **Additional Parameters** field manually sets any core OpenVPN config file options.
See the OpenVPN [Reference Manual](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-4/) for descriptions of each option.

### Connection Settings

| Setting | Description |
|---------|-------|
| Root CA | The Certificate Authority (CA) must be the root CA you used to sign the client and server certificates. |
| Port | The port that the OpenVPN connection is to use. |
| Compression | Choose a compression algorithm for traffic. Leave empty to send data uncompressed.<br><br>**LZO** is a standard compression algorithm that is backward compatible with previous (pre-2.4) versions of OpenVPN.<br><br>**LZ4** is newer and typically faster and requires fewer system resources.|
| Protocol | Choose between **UDP** or **TCP** OpenVPN protocols. **UDP** sends packets in a continuous stream. **TCP** sends packets sequentially.<br><br>UDP is usually faster and less strict about dropped packets than TCP.<br><br>To force the connection to be IPv4 or IPv6, choose one of the `4` or `6` UDP or TCP options. |
| Device Type | Use a **TUN** or **TAP** virtual networking device and layer with OpenVPN. The device must be identical between the OpenVPN server and clients. |

### Security Options

OpenVPN includes several security options since using a VPN involves connecting to a private network while sending data over less secure public resources.
Security options are not required, but they help protect data users send over the private network.

| Setting | Description |
|---------|-------|
| Authentication Algorithm | Validates packets sent over the network connection. Your network environment might require a specific algorithm. If not, **SHA1 HMAC** is a reliable algorithm to use. |
| Cipher | Encrypts data packets sent through the connection. Ciphers aren't required but can increase connection security. You might need to verify which ciphers your networking environment requires. If there are no specific cipher requirements, AES-256-GCM is a good default choice. |
| TLS Encryption | When **TLS Crypt Auth Enabled** is selected, OpenVPN adds another layer of security by encrypting all TLS handshake messages. This setting requires sharing a static key between the OpenVPN server and clients. |

## Service Activation

Click **Save** after configuring the server or client service.
Start the service by clicking the related toggle in **System Settings > Services**.
Hover over the toggle to check the service current state.

Selecting **Start Automatically** starts the service whenever TrueNAS completes booting.
{{< /tab >}}

{{< tab "S3" >}}
S3 allows you to connect to TrueNAS from a networked client system with the Minio browser, s3cmd, or S3 browser.

{{< expand "Background" "v" >}}
S3 is an object storage protocol that many major cloud providers like Amazon Web Services™ use.
On TrueNAS, the service is another way to store files and can be viewed with a web browser.
Because S3 is the de facto standard for cloud-based storage, setting up an S3 service allows organizations or online application developers to use TrueNAS to replace or archive expensive cloud storage.
{{< /expand >}}

## Setting up the S3 service

{{< hint warning >}}
Having large numbers of files (>100K for instance) in a single bucket with no sub-directories can harm performance and cause stability issues.
{{< /hint >}}

Go to the **System Settings > Services** and find **S3**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesS3SCALE](/images/SCALE/ServicesS3SCALE.png "S3 Service Options")

{{< expand "Field Descriptions" "v" >}}
{{< include file="/_includes/ServicesS3Fields.md" type="page" >}}
{{< /expand >}}

Select a clean dataset, one that doesn't have existing data files.
Minio manages files as objects that you *cannot* mix with other dataset files.
You can create new datasets by going to **Storage** and clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> > **Add Dataset**.

Configure the remaining options as needed in your environment and start the service after saving any changes.

## Minio Connections

When **Enable Browser** is selected, test Minio browser access by opening a web browser and typing the TrueNAS IP address with the TCP port.
You must allow the chosen **Port** through the network firewall to permit creating buckets and uploading files.
Example: `https://192.168.0.3:9000`.

Minio supports two different connection methods.

### s3cmd

Linux or macOS users must have the [s3cmd](https://s3tools.org/s3cmd) service installed before beginning this setup.
On Windows, users can also refer to [S3Express](https://www.s3express.com/) for a similar command-line experience.

{{< hint ok >}}
Ubuntu or other Linux distributions can access the configuration by running `s3cmd --configure` to walk through critical settings.
{{< /hint >}}

Enter the specified access key and the secret key.
Under the **S3 Endpoint**, enter the TrueNAS IP address followed by TCP port, and reply **N** to the DNS-style bucket+hostname. 

Save the file.
On Linux, the default is in the home directory <file>\~/.s3cfg</file>.

If the connection has any issues, open <file>.s3cfg</file> again to troubleshoot.
In Ubuntu, use `nano .s3cfg` or `vi .s3cfg` or `gedit .s3cfg` depending on the preferred text editor.
For other operating systems, .s3cfg file location and editing tools might vary. 

Scroll down to the host_bucket area and ensure the configuration removed the `%(bucket)s.` portion and the address points to the *IP_address:TCP_port* for the system.

**Correct Example**
```
host_base = `192.168.123.207:9000`
host_bucket = `192.168.123.207:9000`
```

**Incorrect Example**
```
host_base = `192.168.123.207`
host_bucket = `%(bucket)s.192.168.123.207`
```

Poll the buckets using `s3cmd ls` to see the buckets created with the Minio browser.

For more information on using Minio with `s3cmd`, see https://docs.minio.io/docs/s3cmd-with-minio.html and https://s3tools.org/s3cmd.

### S3 Browser (Windows)

The Windows PC S3 browser is another convenient way to connect to the Minio S3 from TrueNAS.

To set it up, first [install the S3 browser](https://s3-browser.en.uptodown.com/windows).

After installation completes, add a new account. 

![AmazonS3NewAccount](/images/CORE/AmazonS3NewAccount.png "S3 Browser: New Account")

In the settings, select **S3 Compatible Storage** as the **Account Type**, then enter the Minio access point similar to the `s3cmd` setup (TrueNAS_IP_address:9000 or other port if set differently).
Select the SSL settings appropriate for the particular setup.
The S3 browser assumes SSL by default, but it can be unset for a LAN attached session.

![AmazonS3EditAccount](/images/CORE/AmazonS3EditAccount.png)

It is possible to access, create new buckets, or upload files to created buckets.

![AmazonS3Browser](/images/CORE/AmazonS3Browser.png "S3 Browser")
{{< /tab >}}

{{< tab "SNMP" >}}
[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](https://sourceforge.net/projects/net-snmp/) to provide SNMP.
To configure SNMP, go to **System Settings > Services** page, find **SNMP**, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSNMPSCALE](/images/SCALE/22.02/SCALESNMPOptions.png "SCALE SNMP Service Options")

{{< expand "Field Descriptions" "v" >}}
{{< include file="static/includes/Reference/SCALEServicesSNMPFields.md.part" markdown="true" >}}
{{< /expand >}}

Port **UDP 161** listens for SNMP requests when starting the SNMP service.

## Management Information Bases (MIBs)

Available Management Information Bases (MIBs) are located in <file>/usr/local/share/snmp/mibs</file>.
This directory contains many files routinely added or removed from the directory.
Check the directory on your system by going to  **System Settings > Shell** and entering `ls /usr/local/share/snmp/mibs`.
Here is a sample of the directory contents:

![ServicesSNMPsampleSCALE](/images/SCALE/ServicesSNMPsampleSCALE.png "Services SNMP Mib Sample")
{{< /tab >}}

{{< tab "SSH" >}}

{{< embed-video name="scaleangelfishsshaccess" >}}

The SSH service lets users connect to TrueNAS with the [Secure SHell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
When using TrueNAS as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
{{< /hint>}}

Activate or configure the SSH service on the **System Settings > Services** page.

To configure SSH go to **System Settings > Services**, find **SSH**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Configure the options as needed to match your network environment.
{{< expand "SSH Service Fields" "v" >}}
{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}
{{< /expand >}}

Remote systems may require *root* access. Be sure to have all security precautions in place before allowing *root* access.

We recommend these additional SSH service options:

* Add `NoneEnabled no` to **Auxiliary Parameters** to disable the insecure *none* cipher.
* Increase the **ClientAliveInterval** if SSH connections tend to drop.
* Increase the **ClientMaxStartup** value (**10** is default) when you need more concurrent SSH connections.

Remember to enable the SSH service in **System Settings > Services** after making changes.
To create and store specific [SSH connections and keypairs]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}), go to **Credentials > Backup Credentials**.
{{< /tab >}}

{{< tab "UPS" >}}
TrueNAS uses Network UPS Tools [NUT](https://networkupstools.org/) to provide UPS support.
After connecting the TrueNAS system UPS device, configure the UPS service by going to **System settings > Services**, finding **UPS**, and clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesUPSSCALE](/images/SCALE/ServicesUPSSCALE.png "UPS Options")

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/Reference/ServicesUPSFields.md.part" markdown="true" >}}
{{< /expand >}}

Some UPS models are unresponsive with the default polling frequency (default is **two** seconds).
TrueNAS displays the issue in logs as a recurring error like `libusb_get_interrupt: Unknown error`.
If you get an error, decrease the polling frequency by adding an entry to **Auxiliary Parameters (ups.conf)**: `pollinterval = 10`.

[upsc(8)](https://manpages.debian.org/bullseye/nut-client/upsc.8.en.html) can get status variables like the current charge and input voltage from the UPS daemon.
Run this in **System Settings > Shell** using the syntax `upsc ups@localhost`.
The [upsc(8)](https://manpages.debian.org/bullseye/nut-client/upsc.8.en.html) manual page has other usage examples.

[upscmd(8)](https://manpages.debian.org/bullseye/nut-client/upscmd.8.en.html) can send commands directly to the UPS, assuming the hardware supports it.
Only users with administrative rights can use this command. You can create them in the **Extra Users** field.

{{< expand "How do I find a device name?" "v" >}}
For USB devices, the easiest way to determine the correct device name is to set **Show console messages** in **System Settings > Advanced**.
Plug in the USB device and look for a <file>/dev/ugen</file> or <file>/dev/uhid</file> device name in the console messages.
{{< /expand >}}

{{< expand "Can I attach Multiple Computers to One UPS?" "v" >}}
A UPS with adequate capacity can power multiple computers.
One computer connects to the UPS data port with a serial or USB cable.
This primary system makes UPS status available on the network for other computers.
The UPS powers the secondary computers, and they receive UPS status data from the primary system.
See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
{{< /expand >}}
{{< /tab >}}
