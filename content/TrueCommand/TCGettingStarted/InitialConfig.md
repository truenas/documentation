---
title: "Creating the Initial Configuration"
description: "This article describes how to initially configure TrueCommand."
aliases:
weight: 20
tags:
- tcinstall
- tcadmin
- tcconfig
- tcresetpwd
- scaletoptoolbar
- coretoptoolbar
---
{{< toc >}}
TrueCommand allows you to manage all your TrueNAS systems from one location. This multi-system management increases efficiency and simplifes operations

To get started with the initial configuration of TrueCommand, complete these steps:

1. Create the administrator account. See [Creating the Admin Account]({{< relref "/TrueCommand/TCGettingStarted/AdminAccounts.md" >}}) for more information.
2. Create the necessary user accounts. See [Creating User Accounts]({{< relref "/TrueCommand/TCGettingStarted/UserAccounts.md" >}}).
3. Become familiar with the interface toolbars and icons. Review them here [Interface Overview]({{< relref "/TrueCommand/TCGettingStarted/InterfaceOverview.md" >}}).
4. Connect your first TrueNAS system. See [Connecting Your First TrueNAS System]({{< relref "/TrueCommand/TCGettingStarted/ConnectingTrueNAS.md" >}}) for more information.

The **Administration** page, available to users with administrator permissions, displays additional system details and offers a variety of TrueCommand configuration options.
Click the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and select **Administration** to access the **Administration** screen. It is organized into **About**, **Certificates**, and **Configuration** widgets (functional and information cards).

![TrueCommand231AdminSystemInfo](/images/TrueCommand/2.3.1/TrueCommand231AdminSystemInfo.png "Administration Configuration")

## TrueCommand Administration Overview

### About

The **About** widget displays the current TrueCommand system ID and version, contact information for iXsystems, and license details. 

#### Updating the License

You can expand TrueCommand to monitor more disks by upgrading or purchasing a license from iXsystems.
Click **GET A LICENSE** to open a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

After you upgrade or purchase a new license, you must upload it to TrueCommand.
Click **Browse…** to open a file browser on your local system.
Select the new license file to upload and click **UPLOAD LICENSE** to apply the new license to TrueCommand.

### Certificates Widget

The **Certificates** widget shows the certificates and Certificate Authorities (CAs) TrueCommand uses and has options to upload or import a certificate or CA.

![AdministrationCertificates](/images/TrueCommand/2.2/AdministrationCertificates.png "Administration: Certificates")

Click **Browse...** to upload a file from the local system.
Selecting **Plain text** allows you to copy and paste the raw text instead of uploading a file.

### Certificate Authorities

Click **IMPORT** in the **Certificate Authorities** screen to add certificate authorities (CAs) to TrueCommand.

![AdministrationCAs](/images/TrueCommand/2.2/AdministrationCAs.png "Administration: Certificates")

The **CA Import** screen allows name the CA and to select changing it to plain text before you upload it.

### Configuration

The **Configuration** widget contains options to configure various TrueCommand features. Configuration options are: 

* General Options
* SSL Options
* Alert Options
* LDAP
* SAML
* Telemetry

Click **CONFIGURE** to change feature settings.

![AdministrationConfiguration](/images/TrueCommand/2.2/AdministrationConfiguration.png "Administration: Configuration1")

After changing any options, click **SAVE** at the bottom of the window to save the new system configuration.
To reset fields back to their previous values, click **CANCEL**.

General options include how long TrueCommand stores system statistics and the number of database backups from an iXsystems NAS to store.

#### SSL options

{{< hint info >}}
This feature is only available for local installations or containerized TrueCommand deployments.
{{< /hint >}}

{{< include file="static/includes/TrueCommand/2.0/TrueCommandSSL.md.part" markdown="true" >}}

#### Alert Options

You can adjust the alert levels that TrueCommand shows from a connected NAS to tune the system messages displayed according to your use case.
Choose an alert category to ignore.
You can select multiple categories.

#### LDAP

The **Allow LDAP user creation** checkbox is not selected (disabled) by default. If disabled, you can use LDAP to log in with existing users.

#### SAML

The SAML service feature allows users to configure TrueCommand SAML for [Active Directory]({{< relref "SAMLAD.md" >}}) or [Google Admin]({{< relref "SAMLGA.md" >}})

#### Telemetry

TrueCommand reports some (completely anonymous) basic usage telemetry back to iXsystems for product improvement analysis.

Click the **PREVIEW** button to see what your system is sending.

You can disable telemetry by checking the **Disable Telemetry** box and clicking **SAVE**.

## LDAP Servers

Users can configure TrueCommand to use [LDAP servers]({{< relref "LDAPServers.md" >}}) for security and authentication management among connected TruNAS systems.

{{< include file="static/includes/TrueCommand/2.0/TrueCommandLDAP.md.part" markdown="true" >}}

## LDAP Teams

The **LDAP Teams** widget allows you to add TrueCommand teams to your LDAP server by clicking **JOIN** and selecting a team from the list.

## Alert Recipients

The **Alert Recipients** widget allows you to add email addresses to your LDAP server by clicking **ADD** and entering a valid address.

![TrueCommand231AdminAlertRecipientsNone](/images/TrueCommand/2.3.1/TrueCommand231AdminAlertRecipientsNone.png "Administration: Alert Recipients Widget")

Clicking the **Configure** button displays the following fields:

![TrueCommand231AdminAlertRecipientsConfigure](/images/TrueCommand/2.3.1/TrueCommand231AdminAlertRecipientsConfigure.png "Administration: Mailing List Configuration")

| Field | Value |
| ----- | ------------- |
| Mailserver | Address for the SMTP server. |
| Mailserver port | Port number the SMTP server listens to. |
| Auth user | User name for plain authentication. |
| Auth pass | Password for plain authentication. Leave blank for no-auth. |
| From | The email address of the sender. |

{{< taglist tag="tcinstall" limit="10" >}}
{{< taglist tag="tcconfig" limit="10" title="Related Articles" >}}
