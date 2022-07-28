---
---
**General Options**

| Name | Description |
|------|-------------|
| **TCP Port** | Open a port for SSH connection requests. Enter the port number. |
| **Log in as Root with Password** | Select to allow root logins. Root logins are discouraged! A password must be set for the root user account. |
| **Allow Password Authentication** | Select to allow password authentication. Enabling allows SSH login authentication using a password. Warning: when directory services are enabled, this setting grants access to all users the directory service imported. When disabled, authentication requires keys for all users (requires additional SSH client and server setup). |
| **Allow Kerberos Authentication** | Select to allow Kerberos authentication. Ensure valid entries exist in **Directory Services > Kerberos Realms** and **Directory Services > Kerberos Keytabs** and the system can communicate with the Kerberos domain controller before enabling this option. |
| **Allow TCP Port Forwarding** | Select to let users bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). |
