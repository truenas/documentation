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
 - scalefiletransfer
---

{{< toc >}}

The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH options provide secure transfer methods for critical objects like configuration files, while the Trivial FTP options provide simple file transfer methods for non-critical files.

The **FTP** service has basic and advanced setting options. 
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> for **FTP** to open the **Basic Settings** configuration screen.

## FTP Basic Settings

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![FTPBasicSettings](/images/SCALE/22.12/FTPBasicSettings.png "Services FTP Basic Settings General Options")

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Port** | Enter the port the FTP service listens on. |
| **Clients** | Enter the maximum number of simultaneous clients. |
| **Connections** | Enter the maximum number of connections per IP address. **0** is unlimited. |
| **Login Attempts** | Enter the maximum attempts before the client disconnects. Increase if users are prone to misspellings or typos. |
| **Notransfer Timeout** | Enter the maximum number of seconds a client is allowed to spend connected, after authentication, without issuing a command which results in creating an active or passive data connection (sending/receiving a file or receiving a directory listing). |
| **Timeout** | Enter the maximum client idle time in seconds before disconnecting. The default value is **600** seconds. |
{{< /truetable >}}

## FTP Advanced Settings
**Advanced Settings** include the **General Options** on the **Basic Settings** configuration screen and allow you to specify access permissions, TLS settings, bandwidth, and other settings to customize FTP access.

### Access and TLS Setting Options

![FTPAdvancedSettingsAccess](/images/SCALE/22.12/FTPAdvancedSettingsAccess.png "Services FTP Advanced Settings Access Options")

#### Access Settings 
**Access** settings specify user login, file, and directory access permissions.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Always Chroot** | Only allows users to access their home directory if they are in the **wheel** group. This option increases security risk. To confine FTP sessions to a local user home directory, enable **chroot** and select **Allow Local User Login**. |
| **Allow Root Login** | Select to allow root logins. This option increases security risk, so enabling this is discouraged. Do *not* allow anonymous or root access unless it is necessary. 
Enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217) for better security. |
| **Allow Anonymous Login** | Select to allow anonymous FTP logins with access to the directory specified in **Path**. Selecting this displays the **Path** field. Enter or browse the location to populate the field. |
| **Allow Local User Login** | Select to allow any local user to log in. Only members of the **ftp** group may log in by default. |
| **Require IDENT Authentication** | Select to require IDENT authentication. Setting this option results in timeouts when ident (or in **Shell** `identd`) is not running on the client. |
| **File Permissions** | Select the default permissions for newly created files. |
| **Directory Permissions** | Select the default permissions for newly created directories. |
{{< /truetable >}}

![FTPAdvancedSettingsTLS](/images/SCALE/22.12/FTPAdvancedSettingsTLS.png "Services FTP Advanced Settings TLS Options")

#### TLS Settings
**TLS** settings specify the authentication methods, such as if you want to encrypt the data you transfer across the Internet.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Enable TLS** | Select to allow encrypted connections. Requires a certificate (created or imported using **System > Certificates**. | 
| **Certificate** | Select the SSL certificate for TLS FTP connections from the dropdown list. To create a certificate, go to **System** > **Certificates**. |
| **TLS Policy** | Select the policy from the dropdown list of options. Options are **On**, **off**, **Data**, **!Data**, **Auth**, **Ctrl**, **Ctrl + Data**, **Ctrl +!Data**, **Auth + Data** or **Auth +!Data**. Defines whether the control channel, data channel, both channels, or neither channel of an FTP session must occur over SSL/TLS. The policies are described [here](http://www.proftpd.org/docs/directives/linked/config_ref_TLSRequired.html). |
| **TLS Allow Client Renegotiations** | Select to allow client renegotiation. We do not recommend this option. Setting this option breaks several security measures. See [mod_tls](http://www.proftpd.org/docs/contrib/mod_tls.html) for details. |
| **TLS Allow Dot Login** | TrueNAS checks the user home directory for a <file>.tlslogin</file> file containing one or more PEM-encoded certificates. If not found, the user must enter their password. |
| **TLS Allow Per User** | If select to allow sending a user password unencrypted. |
| **TLS Common Name Required** | Select to require the common name in the certificate to match the FQDN of the host. |
| **TLS Enable Diagnostics** | Select for more verbose logging, which is helpful when troubleshooting a connection. |
| **TLS Export Certificate Data** | Select to export the certificate environment variables. |
| **TLS No Certificate Request** | Select if the client cannot connect, likely because the client server is not correctly handling the server certificate request. |
| **TLS No Empty Fragments** | Not recommended. This option bypasses a security mechanism. |
| **TLS No Session Reuse Required** | This option reduces connection security. Only use it if the client does not understand reused SSL sessions. |
| **TLS Export Standard Vars** | Select to set several environment variables. |
| **TLS DNS Name Required** | Select to require the client DNS name to resolve to its IP address and the cert contain the same DNS name. |
| **TLS IP Address Required** | Select to require the client certificate IP address to match the client IP address. |
{{< /truetable >}}

### Other Options

![FTPAdvancedSettingsOtherOptions](/images/SCALE/22.12/FTPAdvancedSettingsOtherOptions.png "Services FTP Advanced Settings Other Options")

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Minimum Passive Port** | Enter a numeric value. Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Maximum Passive Port** | Enter a numeric value. Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Enable FXP** | Select to enable the File eXchange Protocol (FXP). We do not recommend FXP since it leaves the server vulnerable to FTP bounce attacks. |
| **Allow Transfer Resumption** | Select to allow FTP clients to resume interrupted transfers. |
| **Perform Reverse DNS Lookups** | Select to allow performing reverse DNS lookups on client IPs. This option causes long delays if you do not configure reverse DNS. |
| **Masquerade Address** | Enter a public IP address or host name. Use if FTP clients cannot connect through a NAT device. |
| **Display Login** | Enter a message that displays to local login users after authentication. Anonymous login users do not see this message. |
| **Auxiliary Parameters** | Used to add additional [proftpd(8)](https://linux.die.net/man/8/proftpd) parameters. |
{{< /truetable >}}

### Bandwidth Settings
**Bandwidth** settings specify the space you want to allocate for local and anonymous user uploads and downloads.

![FTPAdvancedSettingsBandwidth](/images/SCALE/22.12/FTPAdvancedSettingsBandwidth.png "Services FTP Advanced Settings Bandwidth Options")

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Local User Upload Bandwidth: (Examples: 500 KiB, 500M, 2 TB)** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If you do not specify a measurement, it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). The default **0 KiB** is unlimited. |
| **Local User Download Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If you do not specify a measurement, it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). The default **0 KiB** is unlimited. |
| **Anonymous User Upload Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If you do not specify a measurement, it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). The default **0 KiB** is unlimited. |
| **Anonymous User Download Bandwidth** | Enter a value in KiBs or greater. A default of **0 Kib** means unlimited. If you do not specify a measurement, it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). The default **0 KiB** is unlimited. |
{{< /truetable >}}

{{< taglist tag="scaleftp" limit="10" >}}
