---
---
**Advanced Options**

| Name | Description |
|------|-------------|
| **Bind Interfaces** | Select interfaces on your system from the dropdown list for SSH to listen on. Leave all options unselected for SSH to listen on all interfaces. |
| **Compress Connections** | Select to attempt to reduce latency over slow networks. |
| **SFTP Log Level** | Select the [syslog(3)](https://manpages.debian.org/bullseye/manpages-dev/syslog.3.en.html) facility of the SFTP server option from the dropdown list. Options are **Quiet**, **Fatal**, **Error**, **Info**, **Verbose**, **Debug**, **Debug2** or **Debug3**. |
| **SFTP Log Facility** | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) facility of the SFTP server option from the dropdown list. Options are **Daemon**, **User**, **Auth** and **Local 0** through **Local7**. |
| **Weak Ciphers** | Select a cipher from the dropdown list. Options are **None** or **AES128-CBC**. To allow more chiphers for [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) in addition to the defaults in [sshd_config(5)](https://www.freebsd.org/cgi/man.cgi?query=sshd_config). Use **None** to allow unencrypted SSH connections. Use **AES128-CBC** to allow the 128-bit [Advanced Encryption Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf).<br>  WARNING: these ciphers are security vulnerabilities. Only allow them in a secure network environment. |
| **Auxiliary Parameters** | Add any more [sshd_config(5)](https://manpages.debian.org/bullseye/openssh-server/sshd_config.5.en.html) options not covered in this screen. Enter one option per line. Options added are case-sensitive. Misspellings can prevent the SSH service from starting. |