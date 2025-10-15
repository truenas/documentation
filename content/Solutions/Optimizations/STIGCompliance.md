---
title: "STIG Compliance"
description: "Response to General Operating System STIG SRG for the TrueNAS appliance."
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

TrueNAS falls into the category of an appliance with its own operating system as covered in [General Purpose Operating System SRG](https://stigviewer.com/stigs/general_purpose_operating_system_security_requirements_guide) findings.
Through connection to Active Directory, TrueNAS also complies with the [Active Directory Domain Security Technical Implementation Guide SRG](https://stigviewer.com/stigs/active_directory_domain) findings related to authentication and access controls for user, group, and systems.

## Customizing TrueNAS Security Options for STIG Compliance

Many areas of compliance with the STIG SRG findings are automatically addressed through the TrueNAS kernel and middleware, but some are optional settings and features in the TrueNAS UI administration users customize to suit individual use cases and security policies.
This article details customizable settings to accomplish a security-hardened system for STIG and FIPS compliance.

## Install TrueNAS

Existing TrueNAS systems can upgrade to the latest release through the UI.
Earlier releases of TrueNAS can upgrade by following the established migration paths or might need to clean-install the latest release of SCALE using the <file>iso
</file>. Refer to documentation on upgrading existing systems found [here]({{< ref "/TrueNASUpgrades" >}}).

If side-grading (migrating) from an earlier release to the latest TrueNAS release, follow guidance in the [Preparing to Migrate]({{< ref "/SCALE/GettingStarted/Migrate/MigratePrep" >}}) article before beginning the migration.

If clean-installing TrueNAS for the first time, follow guidance in the [Installation Instructions]({{< ref "/SCALE/GettingStarted/Install" >}}) articles.

### Prerequisites

If you are installing TrueNAS on servers other than licensed TrueNAS Enterprise systems, you should read and follow guidance in the [TrueNAS Hardware Guide]({{< ref "SCALEHardwareGuide" >}}).

## Configuring TrueNAS

After installing TrueNAS, users must configure network, storage, users, sharing, and data backup solutions. See [Configuration Instructions]({{< ref "/SCALE/gettingstarted/configure" >}}) for more information.

### Administration Accounts

TrueNAS creates the root user and an administration user at installation.
Some releases of TrueNAS might only have **root** as the default administration user, while other releases have either the **admin** or **truenas_admin** as the default user.

TrueNAS systems with the **root** user, or either the **admin** or **truenas_admin** user should create a new administration user with full control privileges and assign a complex password that follows current password management guidelines.

After testing the login for the new administration user, disable both the **root** user password if not already disabled, and the the default **admin** or **truenas_admin** user password to security-harden the system.
Only enable the root user password when necessary to perform functions not available to the administration user, and when tasks are complete, disable the root user password again.

If creating multiple administration user accounts for individuals that fill specific roles, limit privileges and access to what is minimally required to perform the system responsibilities.

See [Using Administrator Logins]({{< ref "AdminRoles" >}}) for more information on administration user accounts.

#### Restrict Access to Roles

TrueNAS allows for role-based access control (RBAC) through the privileges function such as the predefined, full control, readonly, and sharing_administrator roles.

In 24.10 and later releases, full administrators can configure new privileges to create other administration user roles that are limited to specific tasks such as replication, cloud sync, cloud backup, apps and docker, directory services, system audit, and keychain read/write capabilities.
Create the new privilege and assign it to a new or existing group, and then assign the new group to the administration user.

{{< hint type="info" title="Use Caution">}}
Use caution when creating new privileges.
Incorrectly configuring privileges can result in unintended consequences.
Do not modify the default existing privileges!
{{< /hint >}}

See [Using Administrator Logins]({{< ref "AdminRoles" >}}) for more information on administration user accounts.

#### Restrict Access to SSH

Enable SSH access only for the full-control administration user (Local Administrator) but do not leave the SSH service enabled when not in use. Disable the SSH service after completing the required tasks until access is needed again.

Do not set the SSH service to start automatically if the system restarts to prevent starting and leaving SSH running when not needed.
See [SSH Service]({{< ref "SSHServiceSCALE" >}}) for more information.

If using multiple administration user accounts, limit SSH session access to only users that require this ability to communicate with TrueNAS at the command-line level.
See [Restrict Access to Sudo Commands](#restrict-access-to-ssh) for more information.

#### Restrict Access to Sudo Commands

Only the main system administration account should have access to `sudo` commands.

If other administration users need access to SSH or `sudo` command, restrict access to specific `sudo` commands rather than allowing unlimited access.
Also, limit `sudo` command entry by imposing the requirement to enter a password before any `sudo` command can be executed in an SSH or shell session.

If creating multiple administration users with permissions to perform specific tasks, do not enable `sudo` commands or configure limited access by entering only the specific commands they need to use to complete required tasks.

See [Managing Users]({{< ref "ManageUsers" >}}) and [Using Administrator Logins]({{< ref "AdminRoles" >}}) for more information on creating users and allowing `sudo` command access.

#### Restrict Access to Shell

Configure access to the shell for only the main administration user with full control.
For better control leave access to the shell to only the root user.
Enable the root user password only when required.

If creating multiple administration users, deny or restrict administration user access to the shell.
If granting limited access to the shell, restrict `sudo` command access to only those commands necessary for the role the administration user fills and enforce password entry for commands.

#### Lock Users

If necessary, use the **Lock User** option on the **Credentials > Users > Edit User** screen to prevent or restrict user access for a limited time.
Locking the account disables but does not delete the account.

### Web UI Security

Various settings found on the **System > General Settings** and **Advanced Settings** screens can limit web UI access, increase visibility of system activity, and increase system security.
TrueNAS can also require login credential entry before permitting access to the Console Setup menu after the system installation.

#### Require Login to Show Console Setup Menu

After the initial system installation, administration users with full control can configure TrueNAS to require a user login before showing the Console Setup menu screen.
Go to **System > Advanced Settings** and click **Configure** on the **Console** widget. Clearing the **Show Text Console without Password Prompt** sets TrueNAS to show the login prompt before showing the Console Setup menu.

#### Set Up a GUI SSL Certificate

TrueNAS provides a default, self-signed certificate to enable encrypted web interface connections but users can obtain, import, or create a new certificate to use for this function for added security.
If adding or importing a certificate, go to **Credentials > Certificates** then first add or import the certificate authority (CA) and then create or import the certificate to add it as a selectable option in the **GUI SSL Certificate** field on the **System > General Settings > GUI Settings** screen.

#### Configure HTTPS TLS Protocols

TrueNAS is configured to use TLSv1.2 and TLSv1.3 to provide a cryptographic protocol for securing client/server connections.
TrueNAS provides the TLSv1.0 and TLSv1.1 options for backward compatibility but these protocols are less secure than the default protocol selections.
To change the default selections, go to **System > General Settings**, and click **Settings** on the **GUI** widget. Click the dropdown arrow for **HTTPS Protocols**, make the change and then click **Save**.

#### Configure a Banner

TrueNAS allows you to configure a banner message to show before logging into the web UI or SSH login screens.

To configure a web UI banner message, go to **System > Advanced Settings** and click **Configure** on the **Access** widget.
Type the text into the **Login Banner** field, and click **Save**.
This shows a banner screen when users first enter the web UI IP address. Users click **Continue** to gain access the the TrueNAS login screen.

To configure a banner before authorized users can log into an SSH session, go to **System > Advanced Settings** and click **Console**.
Enter the text for the message in the **MOTD Banner** field and click **Save**.

### Session Controls

Monitor the user session displayed on the **Access** widget located on the **System > Advanced Settings** screen.
Use **Terminate Other Sessions** to end a WebSocket session/connection to TrueNAS if necessary.
Configure session timeout in seconds to limit how long TrueNAS remains logged in when not in active use.

#### Configure Two Factor Authentication

Two Factor Authentication adds a second level of security to log-in access.
TrueNAS provides the option to enable two-factor authentication globally, which prompts users to set up 2FA for the web UI.
A separate option allows requiring two-factor authentication to log into an SSH session for users who configured a 2FA secret.

{{< hint type=important >}}
**STIG Mode Exception:** In GPOS STIG compatibility mode, 2FA for UI access is mandatory for all users. In standard mode, users can skip 2FA setup and log in without it.
{{< /hint >}}

When global 2FA is enabled in standard (non-STIG) mode:
* Users with a configured 2FA secret must provide the 2FA code to log in to the UI
* Users without a configured 2FA secret can log in without 2FA but are prompted once per session to set it up
* SSH 2FA only applies to users who configured a 2FA secret and are using password-based authentication

See [Managing Global Two-Factor Authentication]({{< ref "ManageGlobal2faSCALE" >}}) for more information

### Monitor System Activity

#### Monitor System Console Messages

TrueNAS allows showing real-time console messages at the bottom of the web UI screen.
Turning this on allows the administration user to monitor console messages detailing system activity.
Click on the banner at the bottom of the UI screen to open a dialog showing system activity for a few days of system activity.
Go to **System > General Settings** and click **Settings** on the **GUI** widget. Select **Show Console Messages** and click **Save** to show console messages.

#### System Auditing

To customize the system auditing retention period, specify how long the TrueNAS retains auditing records.
See [Audit Logs]({{< ref "AuditingSCALE" >}}) for more information on TrueNAS audit logs and configuring auditing settings.

To keep audit log records beyond the retention period, use the **Export** button to download a copy of the audit database.
Move the file to a remote backup server to retain a copy of the log based on your data security policies.
TrueNAS prevents modification of the audit log database on the TrueNAS server. Use other data protection measures to prevent modification of a downloaded copy of the file.

#### System Logging

Configure TrueNAS to send system logs to an external server using the **Syslog** widget on the **System > Advanced Settings** screen in [release 24.10 and later]({{< ref "managesyslogsscale" >}}).

Enter the IP address or host name for the remote system logging server.
Select the preconfigured system certificate.

A certificate is required if using TLS protocol to use syslog transport for the remote log server connection.
Create a new dedicated certificate authority and certificate to secure the TLS connection with the remote server.

To include the fully-qualified domain name (FQDN) in logs to precisely identify systems with similar host names, select or enable the **Use FQDN for Logging** option.

#### Alert Settings

Configure alert settings to monitor system, user, and process activity from the **System > Alert Settings** screen.

Configure the email address to receive alerts from the system when the alert criteria is met.

Next, configure the individual alert parameters for your use case.
Consider setting the following alerts for STIG compliance:
{{< truetable >}}
| Category | Alert | Reason |
|----------|-------|---------|
| **Audit** | **Audit Service Backend Failed** | Set alert level preference to send notifications when an auditing function failure occurs to promptly correct the issue and not lose audit logs. |
|  | **Audit Service Setup Failed** | Set alert level preference to send notifications when the auditing setup fails to correct the issue promptly and not lose audit logs. |
| **Certificates** | <li>**Certificate is Expiring Soon**<br><li>**Certificate is Expiring**<br><li>**Certificate has Expired**</li>  | Set alert level preferences to send notifications when a certificate is about to or has expired to either renew or replace the certificate before functions relying on certificates are impacted and to keep those functions protected. |
|  | **Certificate Revoked** | Set alert preferences to send notifications when a certificate is revoked to promptly address the issue or obtain a new certificate. |
|  | **Web UI HTTPS Certificate Setup Failed** | Set alert level preferences to send notifications when the web UI HTTPS certificate setup fails to promptly address issues that impact the security of HTTPS access to the TrueNAS web UI. |
| **Directory Services** | **Active Directory Domain Validation Failed** | Set the alert level preference to send notifications when Active Directory domain verification fails to promptly investigate and take corrective action. |
| **Key Management Interoperability Protocol (KMIP)** | **Failed to Communicate with KMIP Server** | Set alert level preference to send notifications when a communication failure with the KMIP server occurs to promptly diagnose and correct issues. |
|  | <li>**Failed to Sync SED Global Password with KMIP Server**<br><li>**Failed to sync SED Keys with KMIP Server**<br><li>**Failed to Sync ZFS Keys with KMIP Server**</li> | Set the alert level preference to send notifications when the SED global password fails to sync with the KMIP server to promptly diagnose and correct password and/or sync issues.|
| **Sharing** | <li>**Deprecated Service Configuration Detected**<br><li>**Deprecated Service is Running**</li> | Set the alert level preference to send notifications when deprecated services or service configurations are detected to reconfigure the system to use replacement services or implement replacements. Deprecation notices are provided in the release notes and tutorials for affected Share protocols. |
|  | <li>**IP Addresses Bound to an iSCSI Portal Were Not Found**<br><li>**NFS Services Could Not Bind to Specific IP Addresses Using 0.0.0**<br><li>**NFS shares reference hosts that could not be resolved**</li> | Set the alert level preference to send notifications when network connections are not found or cannot bind to promptly remove or replace these configurations. |
|  | **NTLMv1 authentication has been attempted in the last 24 hours** | Set the alert level preference to send notifications when this authentication protocol is used, to monitor validation between TrueNAS and Windows servers. This protocol provides some session security, message integrity, and confidentiality but is not as robust as more modern protocols. NTLMv1 is susceptible to replay attacks and certain types of brute-force attacks. Take prompt steps to correct issues leading to this type of authentication. |
|  | **SMB share path has unresolvable issues** | Set the alert level preference to send notifications when there are unresolvable issues with an SMB share path. Leaving share paths issues unaddressed can leave the system and data in the shares vulnerable to attack. |
| **Storage** | **Pool consuming USB disks** |  Set the alert level preference to send notifications when TrueNAS detects a USB disk connected to and used by the system. USB drives can put data and data security at risk if used for normal storage and as a potential source of unauthorized data transfer medium. USB drives are not recommended as a target for system and data backups. |
| **System** | <li>**Admin User is Overriden**<br><li>**Administrator account activity**<br><li>**SSH Login Failures**</li> | Set the alert level preference to send notifications when TrueNAS detects administrator user activity related to web UI and SSH sessions. Setting these alerts provides visibility to potential unauthorized access to TrueNAS features, functions, system configuration, and data storage. |
|  | **The Web Interface Could Not Bind to Configured Address** | Set the alert level preference to send notifications when TrueNAS detects problems binding to any network address. Address incorrectly configured network addresses promptly to maintain secure communication between TrueNAS and other remote servers. |
{{< /truetable >}}

### Network Security

Do not leave inactive network connections configured or active in TrueNAS even if they are non-public IP addresses.

#### Allowed IP Addresses

To limit the IP address(es) allowed access to the TrueNAS web UI to a single or range of IP addresses in a subnet, go to **System > Advanced Settings > Allowed IP Addresses** and either enter a single IP address to restrict access to one IP address, or enter an IP address and subnet mask to restrict access to a range of IP addresses.

Use caution when configuring the system to restrict access to avoid locking out web UI access to all users!
If locked out of the web UI, connect a terminal and keyboard to the system server to change this setting to allow web UI access again.

#### Disable Unused Network Connections

Unused network connections, whether in network interfaces such as a bridge, VLAN, link aggregate, interface aliases, or static routes.
Left active in the system and if publicly accessible, these addresses present security vulnerabilities.
Check share advanced options and share service configurations for invalid network addresses or connections to discontinued remote servers.

#### Allowed Domains and IP Addresses/Hosts

To increase network, consider configuring allowed domains on the [**Network > Global Configuration** screen]({{< ref "ManagingGlobalConfig" >}}).

To increase share security, configure allowed host names or IP addresses for [SMB shares]({{< ref "/scale/scaletutorials/shares/smb/#configuring-share-advanced-options-settings" >}}) or [NFS shares]({{< ref "/SCALE/SCALETutorials/Shares/AddingNFSShares/#adding-nfs-share-networks-and-hosts" >}}).

### Data Security

To keep data secure, TrueNAS provides dataset access controls, encryption, and the ability to lock/unlock datasets.
Shares can configure share or filesystem access controls.
Applications allow configuring access control on the storage volumes or host path datasets they use for container storage.

#### Configure Access Control Lists (ACLs)

TrueNAS provides both POSIX and NFSv4 access control protocols and applies them based on the dataset preset selected when creating the dataset.
Advanced users can override the default ACL protocol applied through advanced dataset setting options to suit their security protocols or individual use cases.

Access to datasets can be configured for the owner, per user, group, or everyone, set to allow or deny settings, with permission limited to read-only, read/write, or full control.
See [Setting Up Permissions]({{< ref "PermissionsSCALE" >}}) for more information.

SMB shares permit setting up permissions for just the share but not the dataset for the share, or for both the dataset and the share.
See [Windows Shares]({{< ref "/SCALE/SCALETutorials/Shares/SMB" >}}) for more information on SMB shares, creating shares, and configuring settings including permissions.

NFS shares do not have the same setting options and rely on the dataset ACL settings.
See [NFS Shares]({{< ref "AddingNFSShares" >}}) for more information.

Apps installation wizards for apps in the **enterprise** and **stable** trains, and some **community** apps include the option to enable ACLs where you set the owner and permissions level by storage volume/dataset host path.

#### Configure Encryption

TrueNAS allows users to set encryption at the dataset level but does not recommend setting it at the pool level. Pool-level encryption forces encryption on all datasets created in the pool and can only use key encryption.
Encrypting at the dataset level allows more granular control over encrypted versus unencrypted datasets, and allows setting the encryption type to either key or passphrase protection.
Child datasets of encrypted datasets inherit encryption from the parent dataset.
See [Storage Encryption]({{< ref "EncryptionSCALE" >}}) for more information on encrypting datasets.

Datasets with encryption allow users to lock the datasets to prevent reading from or writing to the dataset until it is unlocked.

### Data Transfer Security

TrueNAS allows encryption on data transfers made through cloud sync and replication tasks.
This adds a layer of encryption on top of dataset-level encryption whether the dataset is encrypted or not.

See [Encrypting Cloud Sync Tasks]({{< ref "/SCALE/SCALETutorials/dataprotection/CloudSyncTasks" >}}) for more information on encrypting cloud sync tasks, or [Adding Transfer Encryption]({{< ref "/scale/scaletutorials/dataprotection/replication/advancedreplication" >}}) for information on adding encryption to remote replication tasks.

#### Maintain SSH Connection Credentials

TrueNAS uses SSH connection credentials for cloud backup tasks, cloud sync tasks, rsync tasks, and replication tasks.
Purge the list of SSH connections to backup servers no longer actively used to minimize security vulnerabilities through connections to the remote servers or services no longer used.
Select out-of-date or inactive SSH connections, SSH Keypair, or cloud credentials to edit or delete them.

### Updating TrueNAS Releases

TrueNAS provides a way to update to the latest releases from the UI. The main Dashboard and Software > Updates screen provide access to the latest releases for the currently installed release train selected in TrueNAS.
Alternatively, users can use an <file>iso</file> to clean install the latest version of TrueNAS.
Each release upgrade creates a new boot environment.

#### Manage Boot Environments

To manage versions of TrueNAS releases, go to **System > Boot** to open the **Boot Environments** screen.
Select the checkbox(es) for releases you want to delete from the list of inactive releases.
Maintaining releases does not pose security risks but does consume space on the boot pool.
See [Boot Pool Management]({{< ref "ManageBootEnvironSCALE" >}}) for more information on working with boot pool environments.

### Virtualization

This document does not cover the virtual machine environments created by users.
STIG compliance for these user-deployed environments is based on the operating system and applications deployed in these VMs.

## Future STIG Compliance

TrueNAS does not comply with STIG SGR GPOS for the following findings that are planned for a future release:

{{< expand " SRG-OS-00366-GPOS-10153" "v" >}}
The operating system must prevent the installation of patches, service packs, device drivers, or OS components without verification, and that are digitally signed using a certificate recognized and approved by the organization.
{{< /expand >}}
{{< expand "SRG-OS-000477-GPOS-00222" "v" >}}
The operating system must generate audit records for all kernel module load, unload, and restart actions, and also for all program initiations.
{{< /expand >}}
{{< expand "SRG-OS-000278-GPOS-00108" "v" >}}
Completion of compliance with this finding stating the operating system must use cryptographic mechanisms to protect the integrity of audit tools.
{{< /expand >}}
