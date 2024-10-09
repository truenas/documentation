---
title: "STIG Compliance"
description: "Resonse to STIG SRG for the TrueNAS appliance."
weight: 35
aliases:
tags:
 - ssh
 - 2fa
keywords:
 - TrueNAS Security
 - TrueNAS STIG Compliance
---


## TrueNAS Compliance
TrueNAS falls into the catagory of an appliance with its own operating system as covered in [General Purpose Operating System SRG](https://www.stigviewer.com/stig/general_purpose_operating_system_srg/) findings.
Through connection to Active Directory, TrueNAS also complies with the [Active Directory Domain Security Technical Implementation Guide SRG](https://www.stigviewer.com/stig/active_directory_domain/) findings related to authentication and access controls for user, group, and systems.

## Customizing TrueNAS Security Options
Many areas of compliance with the STIG SGR findings are automatically addressed through the TrueNAS kernel and middleware, but some are optional settings and features in the TrueNAS UI are customizable by administration users to suit individual use cases and preferences.
This article details customizable settings to accomplish a security-hardened systems.

## Administration Accounts
TrueNAS creates either the root user or an administration user at installation.
Releases of TrueNAS might use **root** as the default administration user, while other releases have either the **admin** or **truenas_admin** as the default user.

TrueNAS 13.0 and 13.3 can only have **root** as the administration user. Assign a complex password and change it frequently to protect access to the system.

TrueNAS systems with the **root** user, or either the **admin** or **truenas_admin** user should create a new administration user with full control privileges and assign a complex password that you should also change on a frequent basis.

Additionally, after testing the login for the new adminstration user, disable both the **root** user password if not already disabled and the the default **admin** or **truenas_admin** user password to security-harden the system. 
Only enable the root user password when necessary to perform functions not available to adminstration user.

If creating multiple administration user accounts for individuals that fill specific role, limit privileges and access to what is minimally required to perform their system responsibilities.

### Restrict Access to Roles
TrueNAS 23.10 and later allow for role-based access control (RBAC) through the privileges function and the predefined readonly and sharing_administrator roles.

In 24.04, 24.10 and later releases, full administrators can configure new privileges to create administration user roles limited to specific tasks such as replication, cloud sync, cloud backup, apps and docker, directory services, system audit, and keychain read/write capabilities.
Create the new privilege and assign them to a new or existing group and assign the new group to the administration user.

{{< hint type="info" title="Use Caution">}}
Use caution when creating new privileges.
Incorrectly configuring privileges can result in unintended consequences.
Do not modify the default existing privileges!
{{< /hint >}}

### Restrict Access to SSH
Enable SSH access only for the administration user (Local Administrator) with full control privileges, but do not leave the SSH service enabled when not in use.

Turn SSH service off when not in use.
Do not set the SSH service to start automatically if the system reboots to prevent starting and leaving it running when not needed. See [SSH Service]({{< relref "/SCALETutorials/SystemSettings/Services/SSHServiceSCALE.md" >}}) for more information.

If using multiple administration user accounts, limit access to SSH session to only users that require this ability to communicate with TrueNAS at the command-line level. See [Restrict Access to Sudo Commands](#restrict-access-to-ssh) for more information.

### Restrict Access to Sudo Commands
Only the main system administration account and the root user should have access to `sudo` commands.

Where possible, restrict administration user access to specific `sudo` commands rather than allowing unlimited access.
Also limit administration users `sudo` command entry by requiring password entery before any `sudo` command can be executed in an SSH or shell session.

If creating multiple administration users with permissions to perform specific tasks, do not enable `sudo` commands or configure the user with limited access by entering only the specific commands they need.
See [Managing Users]({{< relref "ManageLocalUsersSCALE.md" >}}) for more information on creating users and configuring `sudo` commands.

### Restrict Access to Shell
Configure access to the shell for only the main administration user with full control.
For better control leave access to the shell to only the root user.
Enable the root user password only when required.

If creating multiple administration users, deny or restrict administration user access to the shell.
If granting limited access to the shell, restrict `sudo` command access to only those commands necessary for the role the administration user fills and enforce password entry for commands.

## Lock Users
To prevent or restrict user access for a limited period of time, use the **Lock User** option.
This is useful when a specific administration role transfers from one user to another.
For example, if you create a sharing_administrator account rather than assigning the role to an individual existing user.
Locking the account disables but does not delete the account.
Before unlocking the account, change the password and then assign the role to another user.

## Configure Two Factor Authentication
Two Factor Authentication adds a second level of security to log in access. See [Managing Global Two-Factor Authentication]({{< relref "MaageGlobal2faSCALE.md" >}}) for more information

## Session Controls
Monitor the user session displayed on the **Access** widget located on the **System > Advanced Settings** screen.
Use **Terminate Other Sessions** to end a websocket session/connection to TrueNAS if necessary.
Configure session timeout in seconds to limit the how long TrueNAS remains logged in when not in active use.

## System Auditing
Customize system auditing retention period by specifying how long the TrueNAS dataset retains the audting records.
Specify the storage quota size and percentage 


## System Logging
Configure TrueNAS to send system logs to an external server using the **Syslog** widget on the **System > Advanced Settings** screen in [release 24.10 and later]({{< relref "managesyslogsscale.md" >}}), or the **System > Advanced** screen in [release 13.0 or later]({{< relref "/core/uireference/system/advanced/_index.md" >}}).

Enter the IP address or host name for the remote system logging server.
Select the preconfigured system certificate or create a new dedicate certificate authority and certificate to secure the connection with the remote server for additional security.
A certificate is required if using TLS protocl to use syslog transport for the remote log server connection.

To include the fully-qualified domain name (FQDN) in logs to precisesly identify systems with similar host names, select or enable the **Use FQDN for Logging** option.

## Alert Settings
Configure alert settings to monitor system, user, and process activity from the **System > Alert Settings** screen.
Configure the email address to receive alerts from the system when the alert criteria is met.
Next configure the individual alert parameters for your use case.
Consider setting the following alerts for STIG compliance:
{{< truetable >}}
| Category | Alert | Reason |
|----------|-------|---------|
| **Audit** | **Audit Service Backend Failed** | Set alert level preference to send notifications when an auditing function failure occurs to promptly correct the issue and not lose audit logs. |
|  | **Audit Service Setup Failed** | Set alert level preference to send notifications when the auditing setup fails to correct the issue promptly and not lose audit logs. |
| **Certificates** | **Certificate is Expiring Soon**<br>**Certificate is Expiring**<br>**Certificate has Expired**  | Set alert level preferences to send notifications when a certificate is about to or has expired to either renew or replace the certificate before functions relying on certificates are impacted, and to keep those functions protected. |
|  | **Certificate Revoked** | Set alert preferences to send notifications when a certificate is revoked to promptly address the issue or obtain a new certificate. |
|  | **WEeb UI HTTPS Certificate Setup Failed** | Set alert level preferences to send notifications when the web UI HTTPS certificate setup fails to promptly address issues that impact the security of HTTPS access to the TrueNAS web UI. |
| **Directory Services** | **Active Directory Domain Validation Failed** | Set the alert level prefrence to send notifications when Active Directory domain verificaiton fails to propmptly investigate and take corrective action. |
| **Key Management Interoperability Protocol (KMIP)** | **Failed to Communicate with KMIP Server** | Set alert level preference to send notifications when a communication failure with the KMIP server occurs to promptly diagnose and correct issues. |
|  | **Failed to Sync SED Global Password with KMIP Server**<br>**Failed to sync SED Keys with KMIP Server**<br>**Failed to Sync ZFS Keys with KMIP Server** | Set the alert level preference to send notifications when the SED global password fails to sync with the KMIP server to promptly diagose and correct password and/or sync issues.|
| **Sharing** | **Deprecated Service Configuration Detected**<br>**Deprectated Service is Running** |  Set the alert level preference to send notifications when |
|  |  |  Set the alert level preference to send notifications when deprecated services or service configuration are detected to reconfigure the system to use replacement services or implement replacements. Deprecation notices are provided in the release notes and in tutorials for effected Shares protocols. |
|  | **IP Addresses Bound to an iSCSI Portal Were Not Found**<br>**NFS Services Could Not Bind to Specific IP Addresses Using 0.0.0**<br>**NFS shares reference hosts that could not be resolved** | Set the alert level preference to send notifications when network connections are not found or cannot bind to promptly remove or replace these configurations. |
|  | **NTLMv1 authentication has been attempted in the last 24 hours** | Set the alert level preference to send notifications when this authentication protocol is used, to monitor validation between TrueNAS and Windows servers. This protocol provides some session security, message integrity, and confidentiality but is not as robust as more modern protocols. NTLMv1 is susceptible to replay attachs and certain type sof brute-force attacks. Take prompt steps to correct issues leading to this type of authentication. |
|  | **SMB share path has unresolvable issues** | Set the alert level preference to send notifications when there are unresolvable issues with an SMB share path.Leaving share paths issues unaddressed can leave the system and data in the shares vulnerable to attack. |
| **Storage** | **Pool consuming USB disks** |  Set the alert level preference to send notifications when TrueNAS detects USB disk connected to an used by the system. USB drives can put data and data security at risk if used for normal storage, and as a potential source of unauthorized data transfer medium. USB drives are not recommended as a target for system and data backups. |
| **System** | **Admin User is Overriden**<br>**Administrator account activity**<br>**SSH Login Failures** | Set the alert level preference to send notifications when TrueNAS detects adminitrator user activity related to web UI and SSH sessions. Setting these alerts provides visiblity to potential unauthorized access to TrueNAS features, functions, system configuration, and data storage. |
|  | **The Web Interface Could Not Bind to Configured Address** | Set the alert level preference to send notifications when TrueNAS detects problems binding to any network address. Address incorrectly configured network addresses promptly to maintain secure communication between TrueNAS and other remote servers. |
{{< /truetable >}}

## Allowed Domains and IP Addresses/Hosts
To increase network and share security, consider configuring allowed domains on the [**Network > Global Configuration** screen]({{< relref "ManagingGlobalConfig.md" >}}) and allowed host names or IP addresses for [SMB shares]({{< relref "/scale/scaletutorials/shares/smb/_index.md #configuring-share-advanced-options-settings" >}}) or [NFS shares]({{< relref "/AddingNFSShares.md #adding-nfs-share-networks-and-hosts" >}}. 

## Disable Unused Network Connections
Unused network connections, whether in network interfaces such as a bridge, VLAN, or link aggregate, interface aliases, or static routes.
Left active in the system and if publicly accessible, these addresses present security vulnerabilities.
Check share advanced options and share service configurations for invalid network addresses or connections to discontinued remote servers.

## Dataset Security


### Lock Datasets

### Configure Access Control Lists 

### Configure Encryption

## Data Transfer Security

### Encrypt Replication Tasks

## Manage Boot Environments

## Configure a Banner

