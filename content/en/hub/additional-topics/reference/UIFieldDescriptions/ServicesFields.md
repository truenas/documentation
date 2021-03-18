---
title: "FRG: Services"
linkTitle: "Services"
description: "Descriptions of each field in the Services section of the TrueNAS web interface."
weight: 90
tags: ["reference", "afp", "ftp/sftp/tftp", "iscsi", "nfs", "smb", "webdav", "s3", "snmp", "rsync", "s.m.a.r.t.", "openvpn", "lldp"]
---

## AFP

**General Option**

| | |
|-|-|
| Database Path | Sets the database information to be stored in the path. The path must be writable even if the pool is read only. |

**Access**

| | |
|-|-|
| Guest Account | Select an account to use for guest access. This account must have permissions to the shared pool or dataset. The privileges given to this user are also available to any client connecting to the guest service. This user must exist in the password file, but does not require a valid login. The root user cannot be used as guest account. |
| Guest Access | Set to disable the password prompt that appears before clients access AFP shares. |
| Max Connections | Maximum number of simultaneous connections permitted via AFP. The default limit is 50. |
| Chmod Request | Indicates how to handle Access Control Lists. Ignore: ignores requests and gives the parent directory ACL inheritance full control over new items. Preserve: preserves ZFS ACEs for named users and groups or the POSIX ACL group mask. Simple: is set to chmod() as requested without any extra steps. |
| Map ACLs | Select mapping of permissions for authenticated users. Rights (default, Unix-style permissions), None, or Mode (ACLs). |

**Other Options**

| | |
|-|-|
| Log Level | Record AFP service messages up to the specified log level in the system log. By default, severe and warning level messages are logged. |
| Bind Interfaces | Specify the IP addresses to listen for AFP connections. Leave blank to bind to all available IPs. If none are specified, advertise the first IP address of the system, but listen for any incoming request. |
| Global Auxilliary | Additional [afp.conf(5)](http://netatalk.sourceforge.net/3.0/htmldocs/afp.conf.5.html) parameters. |

## Dynamic DNS

**General Options**

| | |
|-|-|
| Provider | Several providers are supported. If a specific provider is not listed, select Custom Provider and enter the information in the Custom Server and Custom Path fields. |
| CheckIP-Server SSL | Use HTTPS for the connection to the CheckIP Server. |
| CheckIP Server | Name and port of the server that reports the external IP address. For example, entering checkip.dyndns.org:80 uses [Dyn IP detection](https://help.dyn.com/remote-access-api/checkip-tool/). to discover the remote socket IP address. |
| CheckIP Path | Path to the CheckIP Server. For example, no-ip.com uses a CheckIP Server of dynamic.zoneedit.com and CheckIP Path of /checkip.html. |
| SSL | Use HTTPS for the connection to the server that updates the DNS record. |
| Domain Name | Fully qualified domain name of the host with the dynamic IP address. Separate multiple domains with a space, comma (,), or semicolon (;). Example: myname.dyndns.org; myothername.dyndns.org. |
| Update Period | How often the IP is checked in seconds. |

**Credentials**

| | |
|-|-|
| Username | Username for logging in to the provider and updating the record. |
| Password | Password for logging in to the provider and updating the record. |

## FTP

**General Options**

| | |
|-|-|
| Port | Set the port the FTP service listens on. |
| Clients | The maximum number of simultaneous clients. |
| Connections | Set the maximum number of connections per IP address. 0 means unlimited. |
| Login Attempts | Enter the maximum number of attempts before client is disconnected. Increase this if users are prone to typos. |
| Timeout | Maximum client idle time in seconds before client is disconnected. |
| Certificate | The SSL certificate to be used for TLS FTP connections. To create a certificate, use System --> Certificates. |

**Advanced**

| | |
|-|-|
| Access | When set, a local user is only allowed access to their home directory if they are a member of the wheel group. |
| Always Chroot | Setting this option is discouraged as it increases security risk. |
| Allow Root Login | Allow anonymous FTP logins with access to the directory specified in Path. |
| Allow Anonymous Login | Allow any local user to log in. By default, only members of the ftp group are allowed to log in. |
| Allow Local User Login | Setting this option will result in timeouts if identd is not running on the client. |
| Require IDENT Authentication | Sets default permissions for newly created files. |
| File Permissionshelp_outline | Sets default permissions for newly created directories. |

**TLS**

| | |
|-|-|
| Enable TLS | Allow encrypted connections. Requires a certificate created or imported with the System > Certificates menu. |
| TLS Policy | Define whether the control channel, data channel, both channels, or neither channel of an FTP session must occur over SSL/TLS. The policies are described [here](http://www.proftpd.org/docs/directives/linked/config_ref_TLSRequired.html). |
| TLS Allow Client Renegotiations | Setting this option is not recommended as it breaks several security measures. Refer to [mod_tls](http://www.proftpd.org/docs/contrib/mod_tls.html) for more details. |
| TLS Allow Dot Login | If set, the user home directory is checked for a .tlslogin file which contains one or more PEM-encoded certificates. If not found, the user is prompted for password authentication. |
| TLS Allow Per User | If set, the password of the user can be sent unencrypted. |
| TLS Common Name Required | When set, the common name in the certificate must match the FQDN of the host. |
| TLS Enable Diagnostics | If set when troubleshooting a connection, logs more verbosely. |
| TLS Export Certificate Data | Set to export the certificate environment variables. |
| TLS No Certificate Request | Set if the client cannot connect, and it is suspected the client is poorly handling the server certificate request. |
| TLS No Empty Fragments | Enabling this option is not recommended as it bypasses a security mechanism. |
| TLS No Session Reuse Required | Setting this option reduces the security of the connection, so only use it if the client does not understand reused SSL sessions. |
| TLS Export Standard Vars | If selected, sets several environment variables. |
| TLS DNS Name Required | If set, the DNS name of the client must resolve to its IP address and the cert must contain the same DNS name. |
| TLS IP Address Required | If set, the client certificate must contain the IP address that matches the IP address of the client. |

**Bandwidth**

| | |
|-|-|
| Local User Upload Bandwidth: (Examples: 500 KiB, 500M, 2 TB) * | In KiBs or greater. A default of 0 KiB means unlimited. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to KiB. |
| Local User Download Bandwidth * | In KiBs or greater. A default of 0 KiB means unlimited. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to KiB. |
| Anonymous User Upload Bandwidth * | In KiBs or greater. A default of 0 KiB means unlimited. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to KiB. |
| Anonymous User Download Bandwidth * | In KiBs or greater. A default of 0 KiB means unlimited. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to KiB. |

**Other Options**

| | |
|-|-|
| Minimum Passive Port * | Used by clients in PASV mode. A default of 0 means any port above 1023. |
| Maximum Passive Port * | Used by clients in PASV mode. A default of 0 means any port above 1023. |
| Enable FXP | Set to enable the File eXchange Protocol. This option makes the server vulnerable to FTP bounce attacks so it is not recommended. |
| Allow Transfer Resumption | Set to allow FTP clients to resume interrupted transfers. |
| Perform Reverse DNS Lookups | Set to perform reverse DNS lookups on client IPs. This can cause long delays if reverse DNS is not configured. |
| Masquerade Address | Public IP address or hostname. Set if FTP clients cannot connect through a NAT device. |
| Display Login | Specify the message displayed to local login users after authentication. Not displayed to anonymous login users. |
| Auxiliary Parameters | Used to add additional [proftpd(8](https://linux.die.net/man/8/proftpd) parameters. |

## iSCSI

**Target Global Configuration**

| | |
|-|-|
| Base Name | Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the iqn.format section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| ISNS Servers | Hostnames or IP addresses of the ISNS servers to be registered with the iSCSI targets and portals of the system. Separate entries by pressing Enter. |
| Pool Available Space Threshold | Generate an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device based extents. |

**Portals**

| | |
|-|-|
| Description | Optional description. Portals are automatically assigned a numeric group. |
| Discovery Authentication Group | iSCSI supports multiple authentication methods that are used by the target to discover valid devices. None allows anonymous discovery while CHAP and Mutual CHAP require authentication. |
| Discovery Authentication Group | Group ID created in Authorized Access. Required when the Discovery Authentication Method is set to CHAP or Mutual CHAP. |
| IP Address | Select the IP addresses to be listened on by the portal. Click ADD to add IP addresses with a different network port. The address 0.0.0.0 can be selected to listen on all IPv4 addresses, or :: to listen on all IPv6 addresses. |
| Port | TCP port used to access the iSCSI target. Default is 3260. |

**Initiators**

| | |
|-|-|
| Connected Initiators | Initiators currently connected to the system. Shown in IQN format with an IP address. Set initiators and click an -> (arrow) to add the initiators to either the Allowed Initiators or Authorized Networks lists. Clicking Refresh updates the Connected Initiators list. |
| Allowed Initiators | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click + to add it to the list. Example: iqn.1994-09.org.freebsd:freenas.local |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: 192.168.2.0/24. |
| Description | Any notes about initiators. |

**Authorized**

| | |
|-|-|
| Group ID | Allow different groups to be configured with different authentication profiles. Example: all users with a group ID of 1 will inherit the authentication profile associated with Group 1. |
| User | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| Secret  | User password. Must be at least 12 and no more than 16 characters long. |
| Peer User | Only entered when configuring mutual CHAP. Usually the same value as User. |
| Peer Secret | Mutual secret password. Required when Peer User is set. Must be different than the Secret. |

**Target**

| | |
|-|-|
| Target Name | The base name is automatically prepended if the target name does not start with iqn. Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the iqn.format section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| Portal Group ID | Leave empty or select number of existing portal to use. |
| Initiator Group ID | Select which existing initiator group has access to the target. |
| Authentication Method | Choices are None, Auto, CHAP, or Mutual CHAP. |
| Authentication Group Number | Select None or an integer. This value represents the number of existing authorized accesses. |

**Extents**

| | |
|-|-|
| Name | Name of the extent. If the Extent size is not 0, it cannot be an existing file within the pool or dataset. |
| Description | Notes about this extent. |
| Enabled | Set to enable the iSCSI extent. |
| Extent Type | Device provides virtual storage access to zvols, zvol snapshots, or physical devices. File provides virtual storage access to a single file. |
| Device | Only appears if Device is selected. Select the unformatted disk, controller, or zvol snapshot. |
| Logical Block Size | Leave at the default of 512 unless the initiator requires a different block size. |
| Disable Physical Block Size Reporting | Set if the initiator does not support physical block size values over 4K (MS SQL). |
| Enable TPC | Set to allow an initiator to bypass normal access control and access any scannable target. This allows xcopy operations which are otherwise blocked by access control. |
| Xen initiator compat mode | Set when using Xen as the iSCSI initiator. |
| LUN RPM | Do NOT change this setting when using Windows as the initiator. Only needs to be changed in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| Read-only | Set to prevent the initiator from initializing this LUN. |

**Associated Targets**

| | |
|-|-|
| Target | Select an existing target. |
| LUN ID | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| Extent | Select an existing extent. |

## LLDP

**General Options**

| | |
|-|-|
| Interface Description | Enables receive mode. Any received peer information is saved in interface descriptions. |
|-|-|
| Country Code | Two-letter [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/) code used to enable LLDP location support. |
| Location | The physical location of the host. |

## NFS

**General Options**

| | |
|-|-|
| Number of servers * | Specify how many servers to create. Increase if NFS client responses are slow. Keep this less than or equal to the number of CPUs reported by sysctl -n kern.smp.cpus to limit CPU context switching. |
| Bind IP Addresses | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |

**NFSv4**

| | |
|-|-|
| Enable NFSv4 | Set to switch from NFSv3 to NFSv4. |
| NFSv3 ownership model for NFSv4 | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4 | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |

**Ports**

| | |
|-|-|
| mountd(8) bind port | Enter a port to bind [mountd(8)](https://www.freebsd.org/cgi/man.cgi?query=mountd). |
| rpc.statd(8) bind port | Enter a port to bind [rpc.statd(8)](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd). |
| rpc.lockd(8) bind port | Enter a port to bind [rpc.lockd(8)](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd). |

**Other Options**

| | |
|-|-|
| Serve UDP NFS clients | Set if NFS clients need to use UDP. |
| Allow non-root mount | Set only if required by the NFS client. Set to allow serving non-root mount requests. |
| Support >16 groups | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| Log mountd(8) requests | Set to log [mountd(8)](https://www.freebsd.org/cgi/man.cgi?query=mountd) syslog requests. |
| Log rpc.statd(8) and rpc.lockd(8) | Set to log [rpc.statd(8)](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) and [rpc.lockd(8)](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) syslog requests. |

## OpenVPN Client

**General Options**

| | |
|-|-|
| Client Certificate | Choose a valid client certificate which exists on this system and hasn't been revoked. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Root CA | Choose the root Certificate Authority that was used to sign the Client and Server certificates. Find more about generating certificates and CAs for OpenVPN [here](https://community.openvpn.net/openvpn/wiki/HOWTO#SettingupyourownCertificateAuthorityCAandgeneratingcertificatesandkeysforanOpenVPNserverandmultipleclients). |
| Remote  | A valid IP address or domain name to which OpenVPN will connect. |
| Port | Enter a port number to use for the connection. |
| Authentication Algorithm | Choose an algorithm to authenticate packets. |
| Cipher | Choose a cipher algorithm to encrypt data channel packets. |
| Compression | Choose a compression algorithm. |
| Protocol | Choose the protocol to use when connecting with the remote system. |
| Device Type | Choose a virtual network interface. More information can be found [here](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting). |
| Nobind | Enable to prevent binding to local address and port. Must be enabled if OpenVPN client and server are to run concurrently. |
| TLS Crypt Auth Enabled | Enable/disable TLS Web Client Authentication. |
| Additional Parameters | Additional parameters. |
| TLS Crypt Auth | Provide static key for authentication/encryption of all control channel packets when tls_crypt_auth_enabled is enabled. |

## OpenVPN Server

**General Options**

| | |
|-|-|
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
| Additional Parameters | Additional parameters. |
| TLS Crypt Auth | When tls_crypt_auth_enabled is enabled and tls_crypt_auth is not provided, a static key is automatically generated to be used with OpenVPN client. |

## Rsync

**Rsync Module**

| | |
|-|-|
| TCP Port | rsyncd listens on this port. |
| Auxiliary Parameters | Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). |

## S.M.A.R.T

**General Options**

| | |
|-|-|
| Check Interval | Define a number of minutes for [smartd](https://www.freebsd.org/cgi/man.cgi?query=smartd&manpath=FreeBSD+11.1-RELEASE+and+Ports) to wake up and check if any tests are configured to run. |
| Difference | Enter a number of degrees in Celsius. SMART reports if the temperature of a drive has changed by N degrees Celsius since the last report. |
| Informational | Enter a threshold temperature in Celsius. SMART will message with a log level of LOG_INFO if the temperature is higher than the threshold. |
| Critical | Enter a threshold temperature in Celsius. SMART will message with a log level of LOG_CRIT and send an email if the temperature is higher than the threshold. |

## S3

**S3 Configuration Options**

| | |
|-|-|
| IP Address | Enter the IP address which runs the S3 service. 0.0.0.0 tells the server to listen on all addresses. |
| Port | Enter the TCP port which provides the S3 service. |
| Access Key | Enter the S3 access ID. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| Secret Key | Enter the S3 secret access key. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| Disk | Browse to the directory for the S3 filesystem. |
| Enable Browser | Set to enable the web user interface for the S3 service. Access the minio web interface by entering the IP address and port number separated by a colon in the browser address bar. |
| Certificate | Use an SSL certificate that was created or imported in System > Certificates for secure S3 connections. |

## SMB

**NetBIOS**

| | |
|-|-|
| NetBIOS Name | Automatically populated with the original hostname of the system. This name is limited to 15 characters and cannot be the Workgroup name. |
| NetBIOS Alias | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| Workgroup | Must match Windows workgroup name. When this is unconfigured and Active Directory or LDAP are active, TrueNAS will detect and set the correct workgroup from these services. |
| Description | Optional. Enter a server description. |
| Enable SMB1 support | Use this option to allow legacy SMB clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern versions of the SMB protocol. |
| NTLMv1 Auth | Off by default. When set, [smbd(8)](https://www.freebsd.org/cgi/man.cgi?query=smbd) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |
|  |  |
|  |  |

**Other Options**

| | |
|-|-|
| Unix Charset | Default is UTF-8 which supports all characters in all languages. |
| Log Level | Record SMB service messages up to the specified log level. By default, error and warning level messages are logged. |
| Use Syslog Only | Set to log authentication failures in /var/log/messages instead of the default of /var/log/samba4/log.smbd. |
| Local Master | Set to determine if the system participates in a browser election. Leave unset when the network contains an AD or LDAP server, or when Vista or Windows 7 machines are present. |
| Enable Apple SMB2/3 Protocol Extensions | These [protocol extensions](https://support.apple.com/en-us/HT210803) can be used by macOS to improve the performance and behavioral characteristics of SMB shares. This is required for Time Machine support. |
| Administrators Group | Members of this group are local admins and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| Guest Account | Account to be used for guest access. Default is nobody. The chosen account is required to have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If the selected Guest Account is deleted the field resets to nobody. |
| File Mask | Overrides default file creation mask of 0666 which creates files with read and write access for everybody. |
| Directory Mask | Overrides default directory creation mask of 0777 which grants directory read, write and execute access for everybody. |
| Bind IP Addresses | Static IP addresses which SMB listens on for connections. Leaving all unselected defaults to listening on all active interfaces. |
| Auxiliary Parameters | Enter additional smb.conf options. See the [Samba Guide](http://www.oreilly.com/openbook/samba/book/appb_02.html) for more information on these settings. To log more details when a client attempts to authenticate to the share, add log level = 1, auth_audit:5. |

## SNMP

**General Options**

| | |
|-|-|
| Location | Enter the location of the system. |
| Contact | E-mail address that will receive SNMP service messages. |
| Community | Change from public to increase system security. Can only contain alphanumeric characters, underscores, dashes, periods, and spaces. This can be left empty for SNMPv3 networks. |

**SNMP v3 Options**

| | |
|-|-|
| SNMP v3 Support | Set to to enable support for [SNMP version 3](https://tools.ietf.org/html/rfc3410). See [snmpd.conf(5)](http://net-snmp.sourceforge.net/docs/man/snmpd.conf.html) for configuration details. |

**Other Options**

| | |
|-|-|
| Auxiliary Parameters | Enter any additional [snmpd.conf(5)](http://net-snmp.sourceforge.net/docs/man/snmpd.conf.html) options. Add one option for each line. |
| Expose zilstat vis SNMP | Enabling this option may have performance implications on your pools. |
| Log Level | Choose how many log entries to create. Choices range from the least log entries (Emergency) to the most (Debug). |

## SSH

**General Options**

| | |
|-|-|
| TCP Port | Open a port for SSH connection requests. |
| Log in as Root with Password | Root logins are discouraged. Allows root logins. A password must be set for the root user account. |
| Allow Password Authentication | Enabling allows using a password to authenticate the SSH login. Warning: when directory services are enabled, allowing password authentication can grant access to all users imported by the directory service. |
|  | Disabling changes authentication to require keys for all users. This requires additional setup on both the SSH client and server. |
| Allow Kerberos Authentication | Ensure valid entries exist in Directory Services > Kerberos Realms and Directory Services > Kerberos Keytabs and the system can communicate with the Kerberos Domain Controller before enabling this option. |
| Allow TCP Port Forwarding | Set to allow users to bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). |

**Advanced Options**

| | |
|-|-|
| Bind Interfaces | Select interfaces for SSH to listen on. Leave all options unselected for SSH to listen on all interfaces. |
| Compress Connections | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) level of the SFTP server. |
| SFTP Log Level | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) facility of the SFTP server. |
| SFTP Log Facility | Allow more ciphers for [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) in addition to the defaults in [sshd_config(5)](https://www.freebsd.org/cgi/man.cgi?query=sshd_config). None allows unencrypted SSH connections and AES128-CBC allows the 128-bit [Advanced Encryption Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf). |
| Weak Ciphers | WARNING: these ciphers are considered security vulnerabilities and should only be allowed in a secure network environment. |
| Auxiliary Parameters | Add any more [sshd_config(5)](https://www.freebsd.org/cgi/man.cgi?query=sshd_config) options not covered in this screen. Enter one option per line. These options are case-sensitive. Misspellings can prevent the SSH service from starting. |

## TFTP

**Path**

| | |
|-|-|
| Directory | Browse to an existing directory to use for storage. Some devices can require a specific directory name. Consult the documentation for that device to see if there are any restrictions. |

**Connection**

| | |
|-|-|
| Host | The default host to use for TFTP transfers. Enter an IP address. Example: 192.0.2.1 |
| Port | The UDP port number that listens for TFTP requests. Example: 8050 |
| Username | Select the account to use for TFTP requests. This account must have permission to the Directory. |

**Access**

| | |
|-|-|
| File Permissions | Adjust the file permissions using the checkboxes. |
| Allow New Files | Set when network devices need to send files to the system. |

**Other Options**

| | |
|-|-|
| Auxiliary Parameters | Add more options from [tftpd(8)](https://www.freebsd.org/cgi/man.cgi?query=tftpd). Add one option on each line. |

## UFS

**General Options**

| | |
|-|-|
| Identifier | Describe the UPS device. It can contain alphanumeric, period, comma, hyphen, and underscore characters. |
| UPS Mode | Choose Master if the UPS is plugged directly into the system serial port. The UPS will remain the last item to shut down. Choose Slave to have this system shut down before Master. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| Driver | See the [Network UPS Tools compatibility list](http://networkupstools.org/stable-hcl.html)for a list of supported UPS devices. |
| Port or Hostname | Serial or USB port connected to the UPS. To automatically detect and manage the USB port settings, select auto. |
|  | When an SNMP driver is selected, enter the IP address or hostname of the SNMP UPS device. |

**Monitor**

| | |
|-|-|
| Monitor User | Enter a user to associate with this service. Keeping the default is recommended. |
| Monitor Password | Change the default password to improve system security. The new password cannot contain a space or #.Enter accounts that have administrative access. See upsd.users(5) for examples. |
| Extra Users | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| Remote Monitor | Set for the default configuration to listen on all interfaces using the known values of user: upsmon and password: fixmepass. |

**Shutdown**

| | |
|-|-|
| Shutdown Mode | Choose when the UPS initiates shutdown. |
| Shutdown Timer | Enter a value in seconds for the the UPS to wait before initiating shutdown. Shutdown will not occur if power is restored while the timer is counting down. This value only applies when Shutdown mode is set to UPS goes on battery. |
| Shutdown Command | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| Power off UPS | Set for the UPS to power off after shutting down the system. |

**Email**

| | |
|-|-|
| Send Email Status Updates | Set enable sending messages to the address defined in the Email field. |
| Email | Enter any email addresses to receive status updates. Separate entries by pressing Enter. |
| Email Subject | Enter the subject for status emails. |

**Other Options**

| | |
|-|-|
| No Communication Warning Time | Enter a number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. |
| Host Sync | Upsmon will wait up to this many seconds in master mode for the slaves to disconnect during a shutdown situation. |
| Description | Describe this service. |
| Auxiliary Parameters (ups.conf) | nter any extra options from [UPS.CONF(5)](http://networkupstools.org/docs/man/ups.conf.html). |
| Auxiliary Parameters (upsd.conf) | Enter any extra options from [UPSD.CONF(5)](http://networkupstools.org/docs/man/upsd.conf.html). |

## WebDAV

**General Options**

| | |
|-|-|
| Protocol | HTTP will keep the connection unencrypted. HTTPS encrypts the connection. HTTP+HTTPS allows both types of connections. |
| HTTP Port | Specify a port for unencrypted connections. The default port 8080 is recommended. Do not reuse a port. |
| HTTP Authentication | Basic Authentication is unencrypted. Digest Authentication is encrypted. |
| Webdav Password | The default of davtest is recommended to change. davtest is a known value. |
