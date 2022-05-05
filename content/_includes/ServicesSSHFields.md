---
---
**General Options**

| Name | Description |
|------|-------------|
| **TCP Port** | Open a port for SSH connection requests. Enter the port number. |
| **Log in as Root with Password** | Select to allow root logins. Root logins are discouraged! A password must be set for the root user account. |
| **Allow Password Authentication** | Select to allow password authentication. Enabling allows SSH login authentication using a password. Warning: when directory services are enabled, this setting grants access to all users the directory service imported. When disabled, authentication requires keys for all users (requires additional SSH client and server setup). |
| **Allow Kerberos Authentication** | Select to allow kerberos authentication. Ensure valid entries exist in **Directory Services > Kerberos Realms** and **Directory Services > Kerberos Keytabs** and the system can communicate with the kerberos domain controller before enabling this option. |
| **Allow TCP Port Forwarding** | Select to let users bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). |

**Advanced Options**

| Name | Description |
|------|-------------|
| **Bind Interfaces** | Select interfaces on your system from the dropdown list for SSH to listen on. Leave all options unselected for SSH to listen on all interfaces. |
| **Compress Connections** | Select to attempt to reduce latency over slow networks. |
| **SFTP Log Level** | Select the [syslog(3)](https://manpages.debian.org/bullseye/manpages-dev/syslog.3.en.html) facility of the SFTP server option from the dropdown list. Options are **Quiet**, **Fatal**, **Error**, **Info**, **Verbose**, **Debug**, **Debug2** or **Debug3**. |
| **SFTP Log Facility** | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) facility of the SFTP server option from the dropdown list. Options are **Daemon**, **User**, **Auth** and **Local 0** through **Local7**. |
| **Weak Ciphers** | Select a cypher from the dropdown list. Options are **None** or **AES128-CBC**. To allow more chiphers for [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) in addition to the defaults in [sshd_config(5)](https://www.freebsd.org/cgi/man.cgi?query=sshd_config). Use **None** to allow unencrypted SSH connections. Use*AES128-CBC* to allow the 128-bit [Advanced Encryption Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf).<br>  WARNING: these ciphers are security vulnerabilities. Only allow them in a secure network environment. |
| **Auxiliary Parameters** | Add any more [sshd_config(5)](https://manpages.debian.org/bullseye/openssh-server/sshd_config.5.en.html) options not covered in this screen. Enter one option per line. Options added are case-sensitive. Missspellings can prevent the SSH service from starting. |