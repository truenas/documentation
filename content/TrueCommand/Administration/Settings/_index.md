---
title: "Settings"
description: "TrueCommand configuration."
weight: 30
geekdocCollapseSection: true
---

{{< toc >}}

The **Administration** page, available to users with administrator permissions, displays additional system details and offers a variety of TrueCommand configuration options.
Click the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> Icon and select **Administration** to access the **Administration** page. It is organized into function tabs **About**, **Certificates**, and **Configuration**.

{{< tabs "Administration Tabs" >}}
{{< tab "About" >}}
The **About** tab contains the current TrueCommand system ID and version, contact information for iXsystems, and license details. 

![AdministrationAbout](/images/TrueCommand/2.0/TC20AdministrationAbout.png "Administration Configuration")

### Updating the License

TrueCommand can be expanded to monitor more disks by upgrading or purchasing a license from iXsystems.
Click **GET A LICENSE** to open a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

After you upgrade or purchase a new license, you must upload it to TrueCommand.
Click **Browse…** to open a file browser on your local system.
Select the new license file to upload and click **UPLOAD LICENSE** to apply the new license to TrueCommand.
{{< /tab >}}
{{< tab "Certificates" >}}
The **Certificates** tab shows the certificates and Certificate Authorities (CAs) TrueCommand uses and has options to upload or import a certificate or CA.

![AdministrationCertificates](/images/TrueCommand/2.0/TC20AdministrationCertificates.png "Administration: Certificates")

Clicking **Browse...** opens a dialog to upload a file from the local system.
Selecting **Plain text** allows you to copy and paste the raw text instead of uploading a file.
{{< /tab >}}
{{< tab "Configuration" >}}
The **Configuration** tab contains options to configure various features of TrueCommand. The configuration options accessible are: 

* General Options
* SSL Options
* Alert Options
* LDAP
* SAML
* Telemetry

![Administration About](/images/TrueCommand/2.1/AdministrationConfiguration1.png "Administration: Configuration1")

Scroll down to reveal all options on the **Configuration** tab.

After changing any options, click ***SAVE** at the bottom of the tab to save the new system configuration.
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

### Telemetry

TrueCommand reports some (completely anonymous) basic usage telemetry back to iXsystems for product improvement analysis.

Click the **PREVIEW** button to see what your system is sending.

You can disable telemetry by checking the **Disable Telemetry** box and clicking **SAVE**.

{{< /tab >}}
{{< /tabs >}}
