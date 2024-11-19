&NewLine;

**Console**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Show Text Console without Password Prompt** | Unset to add a login prompt to the system before the console menu is shown. |
| **Enable Serial Console** | Do not set this if the **Serial Port** is disabled. **Serial Port** and **Serial Speed** show when this is set. |
| **Serial Port** | When **Enable Serial Console** is set, the available serial port hex addresses are 0x2F8 or 0x3f8. |
| **Serial Speeds** | When **Enable Serial Console** is set, the available serial speeds the serial port can use are 9600 bps, 19200 bps, 38400 bps, 57600 bps, or 115200bps. |
| **MOTD Banner** | The message to show when a user logs in with SSH. |
{{< /truetable >}}

**Storage**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **LOG (Write Cache) Overprovision Size in GiB** | Overprovisioning a ZFS Log SSD can increase its performance and lifespan by distributing writes and erases across more drive flash blocks. Defining a number of GiB here overprovisions ZFS Log disks during pool creation or extension. Examples: 50 GiB, 10g, 5GB |
{{< /truetable >}}

**GUI**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Show Console Messages** | Display console messages in real time at the bottom of the browser. |
| **Show Advanced Fields by Default** | Set to always show advanced fields, when available. |
{{< /truetable >}}

**Kernel**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Enable Autotune** | Activates a tuning script which attempts to optimize the system depending on the installed hardware. Warning: Autotuning is only used as a temporary measure and is not a permanent fix for system hardware issues. |
| **Enable Debug Kernel** | Set to boot a debug kernel after the next system reboot. |
{{< /truetable >}}

**Self-Encrypting Drive**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **ATA Security User** | User passed to camcontrol security -u to unlock SEDs. |
| **SED Password** | Global password to unlock SEDs. |
{{< /truetable >}}

**Syslog**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Use FQDN for Logging** | Set to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar host names. |
| **Syslog Level** | When **Syslog Server** is defined, only logs matching this level are sent. |
| **Syslog Server** | Remote syslog server DNS host name or IP address. Add a colon and the port number to the host name to use nonstandard port numbers. For example: *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. |
| **Syslog Transport** | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecting Transport Layer Security (**TLS**) also requires selecting a preconfigured system certificate and certificate authority. |
| **Syslog TLS Certificate** | Select the preconfigured system certificate to use for authenticating the TLS protocol connection to the remote system log server from the dropdown list. |
| **Syslog TLS Certificate Authority** | The preconfigured system certificate authority to use for authenticating the TLS protocol connection to the remote system log server from the dropdown list. |
{{< /truetable >}}

**Replication**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Replication Tasks Limit** | Limit the maximum number of replication tasks the system can execute simultaneously. |
{{< /truetable >}}