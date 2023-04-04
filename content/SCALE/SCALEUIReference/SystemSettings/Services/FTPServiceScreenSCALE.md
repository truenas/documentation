---
title: "FTP Service Screen"
description: "This article provides information on the FTP services screens and settings."
weight: 10
alias: 
tags:
 - scaleservices
 - scaleftp
 - scalesftp
 - scaletftp
---


{{< toc >}}


The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

The **FTP** service has basic and advanced setting options. 
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> for **FTP** to open the **Basic Settings** configuration screen.

## FTP Basic Settings

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![FTPBasicSettings](/images/SCALE/22.12/FTPBasicSettings.png "Services FTP Basic Settings General Options")

| Settings | Description |
|----------|-------------|
| **Port** | Enter the port the FTP service listens on. |
| **Clients** | Enter the maximum number of simultaneous clients. |
| **Connections** | Enter the maximum number of connections per IP address. **0** is unlimited. |
| **Login Attempts** | Enter the maximum attempts before client is disconnected. Increase if users are prone to misspellings or typos. |
| **Notransfer Timeout** | Enter the maximum number of seconds a client is allowed to spend connected, after authentication, without issuing a command which results in creating an active or passive data connection (i.e. sending/receiving a file, or receiving a directory listing). |
| **Timeout** | Enter the maximum client idle time in seconds before disconnect. Default value is **600** seconds. |

## FTP Advanced Settings
**Advanced Settings** include the **General Options** on the **Basic Settings** configuration screen, and allow you to specify access permissions, TLS settings, bandwidth and other setting to further customize FTP access.

### Access and TLS Setting Options

![FTPAdvancedSettingsAccess](/images/SCALE/22.12/FTPAdvancedSettingsAccess.png "Services FTP Advanced Settings Access Options")

#### Access Settings 
**Access** settings specify user login, file and directory access permissions.

| Settings | Description |
|----------|-------------|
| **Always Chroot** | Select to only allow users access their home directory if they are in the **wheel** group. This option increases security risk. To confine FTP sessions to a home directory of a local user, enable **chroot** and select **Allow Local User Login**. |
| **Allow Root Login** | Select to allow root logins. This option increases security risk so enabling this is discouraged. Do *not* allow anonymous or root access unless it is necessary. 
For better security, enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217). |
| **Allow Anonymous Login** | Select to allow anonymous FTP logins with access to the directory specified in **Path**. Selecting this displays the **Path** field. Enter or browse to the loction to populate the field. |
| **Allow Local User Login** | Select to allow any local user to log in. By default, only members of the **ftp** group are allowed to log in. |
| **Require IDENT Authentication** | Select to require IDENT authentication. Setting this option results in timeouts when ident (or in **Shell** `identd`) is not running on the client. |
| **File Permissions** | Select the default permissions for newly created files. |
| **Directory Permissions** | Select the default permissions for newly created directories. |

![FTPAdvancedSettingsTLS](/images/SCALE/22.12/FTPAdvancedSettingsTLS.png "Services FTP Advanced Settings TLS Options")

#### TLS Settings
**TLS** settings specify the authentication methods you want to apply and whether you want to encrypt the data you transfer across the Internet.

| Settings | Description |
|----------|-------------|
| **Enable TLS** | Select to allow encrypted connections. Requires a certificate (created or imported using **System > Certificates**. | 
| **Certificate** | Select the SSL certificate to use for TLS FTP connections from the dropdown list. To create a certificate, go to **System** > **Certificates**. |
| **TLS Policy** | Select the policy from the dropdown list of options. Options are **On**, **off**, **Data**, **!Data**, **Auth**, **Ctrl**, **Ctrl + Data**, **Ctrl +!Data**, **Auth + Data** or **Auth +!Data**. Defines whether the control channel, data channel, both channels, or neither channel of an FTP session must occur over SSL/TLS. The policies are described [here](http://www.proftpd.org/docs/directives/linked/config_ref_TLSRequired.html). |
| **TLS Allow Client Renegotiations** | Select to allow client renegotiation. This option is not recommended. Setting this option breaks several security measures. See [mod_tls](http://www.proftpd.org/docs/contrib/mod_tls.html) for details. |
| **TLS Allow Dot Login** | If select, TrueNAS checks the user home directory for a <file>.tlslogin</file> file containing one or more PEM-encoded certificates. If not found, the user is prompted for password authentication. |
| **TLS Allow Per User** | If set, allows sending a user password unencrypted. |
| **TLS Common Name Required** | Select to require the common name in the certificate to match the FQDN of the host. |
| **TLS Enable Diagnostics** | Selected to logs more verbose, which is helpful when troubleshooting a connection. |
| **TLS Export Certificate Data** | Select to export the certificate environment variables. |
| **TLS No Certificate Request** | Select if the client cannot connect likely because the client server is poorly handling the server certificate request. |
| **TLS No Empty Fragments** | Not recommended. This option bypasses a security mechanism. |
| **TLS No Session Reuse Required** | This option reduces connection security. Only use it if the client does not understand reused SSL sessions. |
| **TLS Export Standard Vars** | Selected to set several environment variables. |
| **TLS DNS Name Required** | Select to require the client DNS name to resolve to its IP address and the cert contain the same DNS name. |
| **TLS IP Address Required** | Select to require the client certificate IP address to match the client IP address. |

### Bandwidth Settings
**Bandwidth** settings specify the amount of space you want to allocate for local and anonymous user uploads and downloads.

![FTPAdvancedSettingsBandwidth](/images/SCALE/22.12/FTPAdvancedSettingsBandwidth.png "Services FTP Advanced Settings Bandwidth Options")

| Settings | Description |
|----------|-------------|
| **Local User Upload Bandwidth: (Examples: 500 KiB, 500M, 2 TB)** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Local User Download Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Anonymous User Upload Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Anonymous User Download Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |

### Other Options


![FTPAdvancedSettingsOtherOptions](/images/SCALE/22.12/FTPAdvancedSettingsOtherOptions.png "Services FTP Advanced Settings Other Options")

| Settings | Description |
|----------|-------------|
| **Minimum Passive Port** | Enter a numeric value. Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Maximum Passive Port** | Enter a numeric value. Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Enable FXP** | Select to enable the File eXchange Protocol (FXP). Not recommended as this leaves the server vulnerable to FTP bounce attacks. |
| **Allow Transfer Resumption** | Select to allow FTP clients to resume interrupted transfers. |
| **Perform Reverse DNS Lookups** | Select to allow performing reverse DNS lookups on client IPs. Causes long delays if reverse DNS isn't configured. |
| **Masquerade Address** | Enter a public IP address or host name. Set if FTP clients cannot connect through a NAT device. |
| **Display Login** | Enter a message that displays to local login users after authentication. Anonymous login users do not see this message. |
| **Auxiliary Parameters** | Used to add additional [proftpd(8)](https://linux.die.net/man/8/proftpd) parameters. |

{{< taglist tag="scaleftp" limit="10" >}}