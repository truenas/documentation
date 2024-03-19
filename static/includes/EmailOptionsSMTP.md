&NewLine;

If **SMTP** is selected, the screen displays the SMTP configuration fields.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsSMTP.png" alt="SMTP Email Options" id="SMTP Email Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **From Email** | The email address to use for sending emails. You must first [configure the user account email]({{< relref "/SCALE/SCALETutorials/SystemSettings/General/SettingUpSystemEmail.md" >}}) in [**Credentials > Local Users**]({{< relref "LocalUsersScreensSCALE.md" >}}). |
| **From Name** | The name to show in front of the sending email address, for example: *TrueNAS*. |
| **Outgoing Mail Server** | Host name or IP address of SMTP server to use for sending emails. |
| **Mail Server Port** | SMTP port number. Typically 25, 465 (secure SMTP), or 587 (submission). |
| **Security** | Select the security option from the dropdown list. Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**. See [email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) for more information on types. |
| **SMTP Authentication** | Select to enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid user name and password. |
| **Username** | Displays when **SMTP Authentication** is selected. The user name for the sending email account, typically the full email address.
| **Password** | Displays when **SMTP Authentication** is selected. The password for the sending email account.
{{< /truetable >}}

**Send Test Mail** generates a test email to confirm the system email works correctly.

**Save** stores the email configuration and closes the **Email Options** screen.
