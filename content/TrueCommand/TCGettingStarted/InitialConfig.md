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

## Getting Started

To get started with the initial configuration of TrueCommand, you:

1. [Create the administrator account]({{< relref "/TrueCommand/TCGettingStarted/AdminAccounts.md" >}}).
2. [Create user accounts]({{< relref "/TrueCommand/TCGettingStarted/UserAccounts.md" >}}).
3. Become familiar with the interface toolbars and icons. Review the [Interface Overview]({{< relref "/TrueCommand/TCGettingStarted/InterfaceOverview.md" >}}) article.
4. [Connect your first TrueNAS system]({{< relref "/TrueCommand/TCGettingStarted/ConnectingTrueNAS.md" >}}).

## TrueCommand Administration Overview

The **Administration** screen, available to users with administrator permissions, displays additional system details and offers a variety of TrueCommand configuration options through the system widgets or information cards.

To access the **Administration** screen, click the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and select **Administration**. 

![TrueCommand231AdminSystemInfo](/images/TrueCommand/2.3.1/TrueCommand231AdminSystemInfo.png "Administration Configuration")

The screen has seven widgets:
* **[About](#about-widget)** that covers TrueCommand system information, iXsystems Support Contact information, and TrueCommand licenses.
* **[Certificates](#certificates-widget)** where you can access system certificates and upload or reset certificates.
* **[Certificate Authorities](#certificate-authorities-widget)** where you can access or import certificate authorities.
* **[Configuration](#configuration-widget)** where you configure general, SSL, and alert options, LDAP and SAML service, and Telemetry.
* **[LDAP Servers](#ldap-servers-widget)** where you configure LDAP server settings.
* **[LDAP Teams](#ldap-teams-widget)** where you can join LDAP teams.
* **[Alert Recipients](#alert-recipients-widget)** where you configure users and their email addresses that receive system alerts.

## About Widget

The **About** widget displays the current TrueCommand system ID and version information, iXsystems Support contact information, and license details. 
Click **Get a License** to open a browser file for your system where you can obtain a license and **Upload License** to add it to TrueCommand.

### Updating Licenses

You can expand TrueCommand to monitor more disks by upgrading or purchasing a license from iXsystems.
Click **GET A LICENSE** to open a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

After you upgrade or purchase a new license, upload it to TrueCommand.
Click **Browse** to open a file browser on your local system.
Select the new license file to upload and click **UPLOAD LICENSE** to apply the new license to TrueCommand.

## Certificates Widget

The **Certificates** widget shows the certificates TrueCommand uses and has options to reset or upload a certificate.

![AdministrationCertificatesWidget](/images/TrueCommand/2.3.2/AdministrationCertificatesWidget.png "Administration: Certificates Widget")

Click **Upload Certificate** to open the **Upload Certificate** screen, where you can either browse to or drag and drop a certificate and a private key file into TrueCommand. 

![AdministrationCertificates](/images/TrueCommand/2.2/AdministrationCertificates.png "Administration: Certificates")

Selecting **Plain text** allows you to copy and paste the raw text instead of uploading a file.

## Certificate Authorities Widget

Click **IMPORT** in the **Certificate Authorities** screen to add certificate authorities (CAs) to TrueCommand.

![AdministrationCertificateAuthoritiesWidget](/images/TrueCommand/2.3.2/AdministrationCertificateAuthoritiesWidget.png "Administration: Certificates Authorities Widget")

Click **Import** to open the **Add Certificate Authority** screen, where you enter the name for the CA and either browse to or drag and drop the CA file into TrueCommand.

![AdministrationCAs](/images/TrueCommand/2.2/AdministrationCAs.png "Administration: Certificates")

Selecting **Plain Text** allows you to copy and paste the raw text before you upload it.

## Configuration Widget

The **Configuration** widget displays current general, SSL, alert options, LDAP, SAML, and telemetry service settings. It provides access to a configuration screen to add or make changes to these settings:  

* **General Options** 
* **[SSL Options](#ssl-options)** 
* **[Alert Options](#alert-options)**
* **[LDAP](#ldap)**
* **[SAML](#saml)**
* **[Telemetry](#telemetry)**

![AdministrationConfigurationWidget](/images/TrueCommand/2.3.2/AdministrationConfigurationWidget.png "Administration Configuration Widget")

Click **CONFIGURE** to open the **Configuration** screen where you can manage feature settings. After changing any options, click **Save** or **Cancel** to reset fields back to their previous values.

### General Options
General options include how long TrueCommand stores system statistics and the number of database backups from an iXsystems NAS to store.

![ConfigurationScreenGeneralSSLAlertOptions](/images/TrueCommand/2.3.2/ConfigurationScreenGeneralSSLAlertOptions.png "Configuration General SSL and Alert Options")

Enter numeric values in the **Months** and **Backups** fields.

### SSL options

{{< hint type=note >}}
This feature is only available for local installations or containerized TrueCommand deployments.
{{< /hint >}}

{{< include file="static/includes/TrueCommand/2.0/TrueCommandSSL.md.part" markdown="true" >}}

### Alert Options

You can adjust the alert levels that TrueCommand shows from a connected TrueNAS system to tune the system messages displayed according to your use case.
Select an alert category to ignore. Options are **None**, **Information**, **Warning** and **Critical**. Alerts generated by TrueCommand rules are unaffected.

### LDAP

The **Allow LDAP user creation** checkbox is not selected (disabled) by default. When disabled, you can use LDAP to log in with existing users.

### SAML 

The SAML service is an experimental feature that allows users to configure TrueCommand SAML for [Active Directory]({{< relref "SAMLAD.md" >}}) or [Google Admin]({{< relref "SAMLGA.md" >}}). 

### Telemetry 

TrueCommand reports some anonymous basic usage telemetry to iXsystems for product improvement analysis.

Click the **PREVIEW** button to see what your system is sending.

Select **Disable Telemetry** to disable the disable telemetry and click **SAVE**.

## LDAP Servers Widget

Users can configure TrueCommand to use [LDAP servers]({{< relref "LDAPServers.md" >}}) for security and authentication management among connected TruNAS systems.

{{< include file="/_includes/TrueCommandLDAP.md" type="page" >}}

## LDAP Teams Widget

The **LDAP Teams** widget allows you to add TrueCommand teams to your LDAP server by clicking **JOIN** and selecting a team from the list.

## Alert Recipients Widget

The **Alert Recipients** widget allows you to add recipient email addresses and configure mail list settings.

![AdministrationAlertRecipientsWidget](/images/TrueCommand/2.3.2/AdministrationAlertRecipientsWidget.png "Administration Screen Alert Recipients Widget")

Click **Add** to open an add an email address screen. This adds the email address to your LDAP server.

![AddRecipientScreene](/images/TrueCommand/2.3.2/AddRecipientScreen.png "Add Recipients Screen")

Click **Configure** to open the **Mailing List Configure** screen. 

![MailingListConfigureScreen](/images/TrueCommand/2.3.2/MailingListConfigureScreen.png "Mailing List Configuration Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Mailserver** | Enter the address for the SMTP server. |
| **Mailserver port** | Enter the port number the SMTP server listens to. |
| **Auth user** | Enter the user name for plain authentication. |
| **Auth pass** | Enter the password for plain authentication. Leave blank for no-auth. |
| **From** | Enter the email address of the sender. |
| **Tls** | Initiates a connection with TLS. Uses system settings. |
{{< /truetable >}}

{{< taglist tag="tcinstall" limit="10" >}}
{{< taglist tag="tcconfig" limit="10" title="Related Articles" >}}
