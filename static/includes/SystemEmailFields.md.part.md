## Email

**General Options**

| | |
|-|-|
| From Email | The user account Email address to use for the envelope From email address. The user account Email in Accounts > Users > Edit must be configured first. |
| From Name | The friendly name to show in front of the sending email address. Example: Storage System 01<it@example.com> |

**Authentication**

| | |
|-|-|
| SMTP | Enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid Username and Password. |

**Access when SMTP is selected**
| | |
|-|-|
| Outgoing Mail Server | Hostname or IP address of SMTP server to use for sending this email. |
| Mail Server Port | SMTP port number. Typically 25,465 (secure SMTP), or 587 (submission). |
| Security | [Email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) type. Choices are Plain (No Encryption), SSL (Implicit TLS), or TLS (STARTTLS). |
| Username Password | Enter the username if the SMTP server requires authentication.Enter the password for the SMTP server. Only plain ASCII characters are accepted. |