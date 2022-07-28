---
title: "FTP Screen"
description: "Use the FTP screen to configure File Transfer Protocol (FTP) on your TrueNAS."
weight: 30
tags:
- coreftp
---

File Transfer Protocol is a communication protocol used to transfer data across a computer network. Use the **FTP** services screen to configure FTP service settings for your TrueNAS system.

![FTPBasicOption](/images/CORE/13.0/FTPBasicOption.png "Services FTP Basic Options")

After making changes to settings click **SAVE** to confirm and save your changes.

Click **ADVANCED OPTIONS** to display advanced settings options, and click **BASIC OPTIONS** to return to the basic settings options.

Click **CANCEL** to exit without saving.

## General Options Settings

| Name | Description |
|------|-------------|
| **Port** | Enter the port the FTP service listens on. |
| **Clients** | Enter the maximum number of simultaneous clients. |
| **Connections** | Enter the maximum number of connections per IP address. **0** is unlimited. |
| **Login Attempts** | Enter the maximum attempts before client is disconnected. Increase if users are prone to misspellings or typos. |
| **Timeout** | Enter the maximum client idle time in seconds before disconnect. Default value is **600** seconds. |
| **Certificate** | Select the SSL certificate to use for TLS FTP connections from the dropdown list, which is currently **freenas_default**. To create a certificate, go to **System > Certificates**. |

## Advanced Option Settings

Click **Advanced Options** if you need to customize your FTP service beyond the settings on the **Basic Options** screen.

### Access and TLS Settings

![FTPAdvancedOptionsAccessTLS](/images/CORE/13.0/FTPAdvancedOptionsAccessTLS.png "Services FTP Advanced Options Access and TLS")

**Access Settings**

| Name | Description |
|------|-------------|
| **Always Chroot** | Select to only allow users access their home directory if they are in the **wheel** group. This option increases security risk. |
| **Allow Root Login** | Select to allow root logins. Setting this option is discouraged as it increases security risk.  |
| **Allow Anonymous Login** | Select to allow anonymous FTP logins with access to the directory specified in *Path*.  |
| **Allow Local User Login** | Select to allow any local user to log in. By default, only members of the *ftp* group are allowed to log in. |
| **Require IDENT Authentication** | Select to require IDENT authentication. Setting this option results in timeouts when ident (or in **Shell** `identd`) is not running on the client. |
| **File Permissions** | Sets default permissions for newly created files. |
| **Directory Permissions** | Sets default permissions for newly created directories. |  

**TLS Settings**

{{< hint warning >}}
Unless necessary, do not allow anonymous or root access.
For better security, enable TLS when possible.
This is effectively [FTPS](https://tools.ietf.org/html/rfc4217).
When FTP is exposed to a WAN, enable TLS.
{{< /hint >}}

| Name | Description |
|------|-------------|
| **Enable TLS** | Select to allow encrypted connections. Requires a certificate (created or imported using **System > Certificates**. |
| **TLS Policy** | Select the policy from the dropdown list of options. Options are **On**, **off**, **Data**, **!Data**, **Auth**, **Ctrl**, **Ctrl + Data**, **Ctrl +!Data**, **Auth + Data** or **Auth +!Data**. Defines whether the control channel, data channel, both channels, or neither channel of an FTP session must occur over SSL/TLS. The policies are described [here](http://www.proftpd.org/docs/howto/TLS.html). |
| **TLS Allow Client Renegotiations** | Select to allow client renegotiations. This option is not recommended. Selecting this option breaks several security measures. See [mod_tls](http://www.proftpd.org/docs/contrib/mod_tls.html) for details. |
| **TLS Allow Dot Login** | If selected, TrueNAS checks the user home directory for a .tlslogin file containing one or more PEM-encoded certificates. If not found, the user is prompted for password authentication. |
| **TLS Allow Per User** | If selected, allows sending a user password unencrypted. |
| **TLS Common Name Required** | Select to require the common name in the certificate match the FQDN of the host. |
| **TLS Enable Diagnostics** | Select to make logs more verbose. Useful in troubleshooting a connection. |
| **TLS Export Certificate Data** | Select to export the certificate environment variables. |
| **TLS No Certificate Request** | Select if the client cannot connect due to the client server being unable to handle the server certificate request. |
| **TLS No Empty Fragments** | Not recommended. This option bypasses a security mechanism. |
| **TLS No Session Reuse Required** | This option reduces connection security. Only select if the client does not understand reused SSL sessions. |
| **TLS Export Standard Vars** | Select to set several environment variables. |
| **TLS DNS Name Required** | Select to require the client DNS name resolve to its IP address and the cert contain the same DNS name. |
| **TLS IP Address Required** | Select to require the client certificate IP address match the client IP address. |

### Bandwidth and Other Settings**

![FTPAdvancedOptionsBandwidthOther](/images/CORE/13.0/FTPAdvancedOptionsBandwidthOther.png "Services FTP Advanced Options Bandwidth and Other")

**Bandwitdth Settings**

| Name | Description |
|------|-------------|
| **Local User Upload Bandwidth: (Examples: 500 KiB, 500M, 2 TB)** | Enter a value. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Local User Download Bandwidth** | Enter a value. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Anonymous User Upload Bandwidth** | Enter a value. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |
| **Anonymous User Download Bandwidth** | Enter a value. If measurement is not specified it defaults to KiB. This field accepts human-readable input in KiBs or greater (M, GiB, TB, etc.). Default **0 KiB** is unlimited. |

**Other Options Settings**

| Name | Description |
|------|-------------|
| **Minimum Passive Port** | Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Maximum Passive Port** | Used by clients in PASV mode. A default of **0** means any port above 1023. |
| **Enable FXP** | Select to enable the File eXchange Protocol (FXP). Not recommended as this leaves the server vulnerable to FTP bounce attacks. |
| **Allow Transfer Resumption** | Select to allow FTP clients to resume interrupted transfers. |
| **Perform Reverse DNS Lookups** | Select to allow performing reverse DNS lookups on client IPs. Causes long delays if reverse DNS isn't configured. |
| **Masquerade Address** | Public IP address or host name. Select if FTP clients cannot connect through a NAT device. |
| **Display Login** | Specify the message displayed to local login users after authentication. This is not displayed to anonymous login users. |
| **Auxiliary Parameters** | Select to add additional [proftpd(8](https://linux.die.net/man/8/proftpd) parameters. |

{{< taglist tag="coreftp" limit="10" >}}
