---
title: "Administration"
weight: 10
---

{{< toc >}}

The **Administration** page shows additional system details and offers a variety of TrueCommand configuration options.
This page is available to users with administrator permissions by opening the **Configure (Gear)** menu and clicking *Administration*.
The page is organized into **About**, **Certificates**, and **Configuration** tabs.

## About TrueCommand

The **About** tab contains the current TrueCommand system ID and version, license details, and contact information for iXsystems.

![AdministrationAbout](/images/TrueCommand/1.2/AdministrationAbout.png "About TrueCommand")

### Updating the License

TrueCommand can be expanded to monitor more disks by upgrading or purchasing a license from iXsystems.
Clicking *GET A LICENSE* opens a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

Purchasing or upgrading the License requires uploading the new license to TrueCommand.
Click *Browse…* to open a file browser on your local system.
Select the new license file to upload and click *UPLOAD LICENSE* to apply the new license to TrueCommand.

## Certificate Management

The **Certificates** tab shows the certificates and Certificate Authorities (CAs) used by TrueCommand and has options to upload or import a certificate or CA.

![AdministrationCertificates](/images/TrueCommand/1.2/AdministrationCertificates.png "Saved Certificates")

Clicking *Browse...* opens a dialog to upload a file from the local system.
Selecting *Plain text* allows copying and pasting the file raw text instead of uploading a file.

## General Options, SSL, Alerts, and LDAP

The Configuration tab contains options to configure various features of TrueCommand.

![AdministrationConfiguration](/images/TrueCommand/1.2/AdministrationConfiguration.png "TrueCommand Configuration")

Changing any options requires clicking *SAVE* to save the new system configuration.
To reset fields back to their previous values, click *CANCEL*.

General options include how frequently TrueCommand measures systems statistics, how long to store system statistics, and the number of database backups from an iXsystems NAS to store.

### SSL options

This section has options to configure secure connections.
By default, TrueCommand attempts an SSL connection, then a non-SSL connection if the first attempt fails.
You can disable non-SSL connection attempts by setting *Require SSL for all connections*.
This is useful when a monitored system does not allow SSL-secured access or if the monitored system is using a custom port.

There are additional options to configure how TrueCommand handles certificates. By default, TrueCommand accepts self-signed certificates and certificate hostname mismatches.
This allows the first-time login to TrueCommand and accepting certificates from systems that use a hostname, but are registered in TrueCommand with an IP address (or vice-versa).

### Alert Options

You can adjust the level of alert that TrueCommand will show from a connected NAS to tune the system messages shown according to your use case.
Choose an alert category to ignore. Multiple categories can be selected.

### LDAP

TrueCommand supports using [LDAP](https://tools.ietf.org/html/rfc4511) to better integrate within an established network environment.
To configure LDAP, add an LDAP server IP address or DNS hostname, fill in the Domain, and click *ADD SERVER*.
Multiple LDAP servers and Domains can be added.

By default, TrueCommand creates user accounts when someone logs in to the User Interface with their LDAP credentials.
You can also use *JOIN TEAM* to have LDAP users automatically added to specific TrueCommand teams.
