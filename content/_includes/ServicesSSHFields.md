---
---
**General Options**

| Name | Description |
|------|-------------|
| **TCP Port** | Open a port for SSH connection requests. Enter the port number. |
| **Log in as Root with Password** | Select to allow root logins. It is not recommended to allow root logins! A password must be set for the root user account. |
| **Allow Password Authentication** | Select to allow password authentication. Enabling allows SSH login authentication using a password. Warning: Determine if directory services are enabled. If so, this setting grants access to all users imported by directory service. When disabled, authentication requires keys for all users. Involves extra SSH client and server setup. |
| **Allow Kerberos Authentication** | Select to allow Kerberos authentication. Before enabling this option, valid entries must exist in:<br>**Directory Services > Kerberos Realms**<br>**Directory Services > Kerberos Keytabs**<br>The system must be able to communicate with the Kerberos domain controller. |
| **Allow TCP Port Forwarding** | Select to let users bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). |
