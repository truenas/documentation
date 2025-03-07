&NewLine;

The **Administration** screen, available to users with administrator permissions, displays additional system details and offers a variety of TrueCommand configuration options through the system widgets or information cards.

To access the **Administration** screen, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon at the top right of the screen to open the settings menu, then click **Administration**.

![AdministrationScreen](/images/TrueCommand/Administration/AdministrationScreen.png "Administration Screen")

The screen has seven widgets:
* **[About](#about-widget)** - Shows TrueCommand system information, iXsystems Support Contact information, and TrueCommand licenses.
* **[Certificates](#certificates-widget)** - Allows you to upload or reset certificates.
* **[Certificate Authorities](#certificate-authorities-widget)** - Allows you import certificate authorities into TrueCommand.
* **[Configuration](#configuration-widget)** - Provides access to general, SSL, alert, LDAP and SAML service, and Telemetry settings.
* **[LDAP Servers](#ldap-servers-widget)** - Allows you to add an LDAP server.
* **[LDAP Teams](#ldap-teams-widget)** - Allows you to join LDAP teams.
* **[Alert Recipients](#alert-recipients-widget)** - Allows you to configure alert recipient users emails and configure mailing list email settings.

## About Widget

The **About** widget displays the current TrueCommand system ID and version, iXsystems Support contact information, and license details.

![AdministrationAboutWidget](/images/TrueCommand/Administration/AdministrationAboutWidget.png "Administration About Widget")

Click **View Open Source Licenses** to see a list of open-source licenses TrueCommand uses.

![OpenSourceLicensesWindow](/images/TrueCommand/Administration/OpenSourceLicensesWindow.png "Open-Source Licenses Window")

### Updating Licenses

You can expand TrueCommand to monitor more disks by upgrading or purchasing a license from iXsystems.
Click **GET A LICENSE** to open a new browser tab to purchase a TrueCommand license.
You can also contact iXsystems to upgrade the current license.

After you upgrade or purchase a new license, upload it to TrueCommand.
Click **Browse** to open a file browser on your local system.
Select the new license file to upload and click **UPLOAD LICENSE** to apply the new license to TrueCommand.

## Certificates Widget

The **Certificates** widget shows the certificates TrueCommand uses and has options to reset or upload a certificate.

![AdministrationCertificatesWidget](/images/TrueCommand/Administration/AdministrationCertificatesWidget.png "Administration Certificates Widget")

Click **Upload Certificate** to open the **Upload Certificate** screen, where you can either browse to or drag and drop a certificate and a private key file into TrueCommand.

![AdministrationCertificates](/images/TrueCommand/Administration/AdministrationCertificates.png "Upload Certificates")

Selecting **Plain text** allows you to copy and paste the raw text instead of uploading a file.

## Certificate Authorities Widget

Click **IMPORT** in the **Certificate Authorities** widget to add a certificate authority (CA) to TrueCommand.

![AdministrationCertificateAuthoritiesWidget](/images/TrueCommand/Administration/AdministrationCertificateAuthoritiesWidget.png "Administration Certificates Authorities Widget")

Click **Import** to open the **Add Certificate Authority** screen, where you enter the name for the CA and either browse to or drag and drop the CA file into TrueCommand.

![AdministrationCAs](/images/TrueCommand/Administration/AdministrationCAs.png "Add Certificate Authority")

Selecting **Plain Text** allows you to copy and paste the raw text before you upload it.

## Configuration Widget

The **Configuration** widget displays current general, SSL, alert options, LDAP, SAML, and telemetry service settings. It provides access to a configuration screen to add or make changes to these settings:  

* [**General Options**](#general-options)
* **[SSL Options](#ssl-options)**
* **[Alert Options](#alert-options)**
* **[LDAP and SAML](#ldap-and-saml-options)**
* **[Telemetry](#telemetry)**

![AdministrationConfigurationWidget](/images/TrueCommand/Administration/AdministrationConfigurationWidget.png "Administration Configuration Widget")

Click **CONFIGURE** to open the **Configuration** screen where you can manage feature settings.
After changing any options, click **Save** or **Cancel** to reset fields back to their previous values.

### General Options
General options include settings for account sessions, how long TrueCommand stores system statistics and the number of TrueNAS configuration file backups to store.

![ConfigurationScreenGeneralSSLAlertOptions](/images/TrueCommand/Administration/ConfigurationScreenGeneralSSLAlertOptions.png "Configuration General, SSL, and Alert Options")

By default, TrueCommand logs out idle user account sessions after 30 minutes of inactivity.
A warning shows when the session is within 3 minutes of timing out.
Update the **Minutes** field to set a different number of minutes before an idle user account is automatically logged out.
Setting **0** disables automatic logouts.

TrueCommand stores 3 months of statistics from connected TrueNAS systems and 7 days of TrueNAS database backups.
Enter numeric values in the **Months** and **Backups** fields to change these defaults.

### SSL options

{{< hint type=note >}}
This feature is only available for local installations or containerized TrueCommand deployments.
{{< /hint >}}

{{< include file="/static/includes/TrueCommandSSL.md" >}}

### Alert Options

You can adjust the alert levels that TrueCommand shows from a connected TrueNAS system to tune the system messages displayed according to your use case.
Select an alert category to ignore. Options are **None**, **Information**, **Warning** and **Critical**. Alerts generated by TrueCommand rules are unaffected.

### LDAP and SAML Options

The **Allow LDAP user creation** checkbox is not selected (disabled) by default. When disabled, you can use LDAP to log in with existing users.

![AdministrationConfigLDAP](/images/TrueCommand/Administration/AdministrationConfigLDAP.png "Configuration LDAP Settings")

The SAML service is an experimental feature that allows users to configure TrueCommand SAML for [Active Directory]({{< relref "SAMLAD.md" >}}) or [Google Admin]({{< relref "SAMLGA.md" >}}).

### Telemetry

TrueCommand reports some anonymous basic usage telemetry to iXsystems for product improvement analysis.

![AdministrationConfigTelemetry](/images/TrueCommand/Administration/AdministrationConfigTelemetry.png "Configuration Telemetry Settings")

Click the **PREVIEW** button to see what your system is sending.

Select **Disable Telemetry** to deny telemetry collection.

## LDAP Servers Widget

Users can configure TrueCommand to use [LDAP servers]({{< relref "LDAPServers.md" >}}) for security and authentication management among connected TrueNAS systems.

{{< include file="/static/includes/TrueCommandLDAP.md" >}}

## LDAP Teams Widget

The **LDAP Teams** widget allows you to add TrueCommand teams to your LDAP server by clicking **JOIN** and selecting a team from the list.

## Alert Recipients Widget

The **Alert Recipients** widget allows you to add recipient email addresses and configure mail list settings.

![AdministrationAlertRecipientsWidget](/images/TrueCommand/Administration/AdministrationAlertRecipientsWidget.png "Administration Screen Alert Recipients Widget")

Click **Add** to open the **Add Recipient** screen, where you can add an email address to your LDAP server.

![AddRecipientScreene](/images/TrueCommand/Administration/AddRecipientScreen.png "Add Recipients Screen")

Click **Configure** to open the **Mailing List Configure** screen.

![MailingListConfigureScreen](/images/TrueCommand/Administration/MailingListConfigureScreen.png "Mailing List Configuration Screen")

{{< expand "Alert Mail List Settings" "v">}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Mailserver** | Enter the address for the SMTP server. |
| **Mailserver port** | Enter the port number the SMTP server listens to. |
| **Auth user** | Enter the user name for plain authentication. |
| **Auth pass** | Enter the password for plain authentication. Leave blank for no-auth. |
| **From** | Enter the email address of the sender. |
| **TLS** | Initiates a connection with TLS. Uses system settings. |
| **STARTTLS** | Initiates a connection with TLS or SSL on an existing connection. |
{{< /truetable >}}
{{< /expand >}}