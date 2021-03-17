---
title: "TrueCommand Administration"
weight: 5
---

The **Administration** page shows additional system details and offers a variety of TrueCommand configuration options.
This page is available to users with administrator permissions by opening the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and clicking *Administration*.
The page is organized into **About**, **Certificates**, and **Configuration** tabs.

{{< tabs "Administration Tabs" >}}
{{< tab "About" >}}
The **About** tab contains the current TrueCommand system ID and version, license details, and contact information for iXsystems.

![AdministrationAbout](/images/TrueCommand/1.3/AdministrationAbout.png "Administration Configuration")

### Updating the License

TrueCommand can be expanded to monitor more disks by upgrading or purchasing a license from iXsystems.
Clicking *GET A LICENSE* opens a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

Purchasing or upgrading the License requires uploading the new license to TrueCommand.
Click *Browse…* to open a file browser on your local system.
Select the new license file to upload and click *UPLOAD LICENSE* to apply the new license to TrueCommand.
{{< /tab >}}
{{< tab "Certificates" >}}
The **Certificates** tab shows the certificates and Certificate Authorities (CAs) used by TrueCommand and has options to upload or import a certificate or CA.

![AdministrationCertificates](/images/TrueCommand/1.3/AdministrationCertificates.png "Administration: Certificates")

Clicking *Browse...* opens a dialog to upload a file from the local system.
Selecting *Plain text* allows copying and pasting the file raw text instead of uploading a file.
{{< /tab >}}
{{< tab "Configuration" >}}
The Configuration tab contains options to configure various features of TrueCommand.

![Administration About](/images/TrueCommand/1.3/AdministrationConfiguration.png "Administration: Configuration")

Changing any options requires clicking *SAVE* to save the new system configuration.
To reset fields back to their previous values, click *CANCEL*.

General options include how frequently TrueCommand measures systems statistics, how long to store system statistics, and the number of database backups from an iXsystems NAS to store.
{{< /tab >}}
{{< /tabs >}}

### SSL options

{{< include file="static/includes/TrueCommandSSL.md.part" >}}

### Alert Options

You can adjust the level of alert that TrueCommand shows from a connected NAS to tune the system messages shown according to your use case.
Choose an alert category to ignore.
Multiple categories can be selected.

### LDAP

{{< include file="static/includes/TrueCommandLDAP.md.part" >}}

