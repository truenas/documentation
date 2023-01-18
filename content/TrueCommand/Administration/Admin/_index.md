---
title: "Administration"
description: "TrueCommand configuration."
weight: 30
geekdocCollapseSection: true
---

{{< toc >}}

The **Administration** page, available to users with administrator permissions, displays additional system details and offers a variety of TrueCommand configuration options.
Click the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and select **Administration** to access the **Administration** page. It is organized into **About**, **Certificates**, and **Configuration** panes.

![AdministrationAbout](/images/TrueCommand/2.2/Administration.png "Administration Configuration")

## About

The **About** pane contains the current TrueCommand system ID and version, contact information for iXsystems, and license details. 

### Updating the License

You can expand TrueCommand to monitor more disks by upgrading or purchasing a license from iXsystems.
Click **GET A LICENSE** to open a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

After you upgrade or purchase a new license, you must upload it to TrueCommand.
Click **Browse…** to open a file browser on your local system.
Select the new license file to upload and click **UPLOAD LICENSE** to apply the new license to TrueCommand.

## Certificates

The **Certificates** pane shows the certificates and Certificate Authorities (CAs) TrueCommand uses and has options to upload or import a certificate or CA.

![AdministrationCertificates](/images/TrueCommand/2.2/AdministrationCertificates.png "Administration: Certificates")

Click **Browse...** to upload a file from the local system.
Selecting **Plain text** allows you to copy and paste the raw text instead of uploading a file.

## Certificate Authorities

Click **IMPORT** in the **Certificate Authorities** pane to add certificate authorities (CAs) to TrueCommand.

![AdministrationCAs](/images/TrueCommand/2.2/AdministrationCAs.png "Administration: Certificates")

The **CA Import** form allows you to give the CA a name and select if you would like to be in plain text before you upload it.

## Configuration

The **Configuration** pane contains options to configure various TrueCommand features. The configuration options accessible are: 

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

### SSL options

{{< hint info >}}
This feature is only available for local installations or containerized TrueCommand deployments.
{{< /hint >}}

{{< include file="static/includes/TrueCommand/2.0/TrueCommandSSL.md.part" markdown="true" >}}

### Alert Options

You can adjust the alert levels that TrueCommand shows from a connected NAS to tune the system messages displayed according to your use case.
Choose an alert category to ignore.
You can select multiple categories.

### LDAP

{{< include file="static/includes/TrueCommand/2.0/TrueCommandLDAP.md.part" markdown="true" >}}

### SAML

The SAML service feature allows users to configure TrueCommand SAML for [Active Directory]({{< relref "SAMLAD.md" >}}) or [Google Admin]({{< relref "SAMLGA.md" >}})

### Telemetry

TrueCommand reports some (completely anonymous) basic usage telemetry back to iXsystems for product improvement analysis.

Click the **PREVIEW** button to see what your system is sending.

You can disable telemetry by checking the **Disable Telemetry** box and clicking **SAVE**.

## LDAP Servers

Users can configure TrueCommand to use [LDAP servers]({{< relref "LDAPServers.md" >}}) for security and authentication management among connected TruNAS systems.

## LDAP Teams

The **LDAP Teams** pane allows you to add TrueCommand teams to your LDAP server by clicking **JOIN** and selecting a team from the list.
