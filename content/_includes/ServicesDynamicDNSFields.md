---
---
**General Options**

| Name | Description |
|------|-------------|
| **Provider** | Select the provider from the dropdown list of supported providers. If a specific provider is not listed, select **Custom Provider** and enter the information in the **Custom Server** and **Custom Path** fields. |
| **Custom Server** | Displays after selecting **Custom Provider** in the **Provider** field. Enter the DDNS server name. For example, *members.dyndns.org* denotes a server similar to dyndns.org. |
| **Custom Path** | Displays after selecting **Custom Provider** in the **Provider** field. Enter the DDNS server path. Path syntax can vary by provider and must be obtained from that provider. For example, */update?hostname=* is a simple path for the update.twodns.de custome sever. The host name is automatically appended by default. For more examples see [In-A-Dyn documentation](https://github.com/troglobit/inadyn#custom-ddns-providers). |
| **CheckIP-Server SSL** | Use HTTPS for the connection to the CheckIP Server. |
| **CheckIP Server** | Name and port of the server that reports the external IP address. For example, entering *checkip.dyndns.org:80* uses [Dyn IP detection](https://help.dyn.com/remote-access-api/checkip-tool/) to discover the remote socket IP address. |
| **CheckIP Path** | Path to the CheckIP server. For example, *no-ip.com* uses a CheckIP Server of *dynamic.zoneedit.com* and CheckIP Path of <file>/checkip.html</file>. |
| **SSL** | Use HTTPS for the connection to the server that updates the DNS record. |
| **Domain Name** | Fully qualified domain name of the host with the dynamic IP address. Separate multiple domains with a space, comma (,), or semicolon (;). For example, *myname.dyndns.org; myothername.dyndns.org*. |
| **Update Period** | How often the IP is checked in seconds. |

**Credentials**

| Name | Description |
|------|-------------|
| **Username** | User name for logging in to the provider and updating the record. |
| **Password** | Password for logging in to the provider and updating the record. |
