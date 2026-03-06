&NewLine;

The **Basic Configuration** section settings control core directory service settings.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfiguationScreen.png" alt="Basic Configuration" id="Basic Configuration" >}}

{{< expand "Basic Configuration Settings" "v" >}} {id="dir-services_basic"}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Configuration Type** | Sets the type of directory service. Shows three options: **Active Directory**, **LDAP**, and **IPA** (formerly FreeIPA). 
each option changes the **Directory Services Configuration** screen to show integration settings for that type of directory service. |
| **Enable Service** | Activates the service for the directory service configuration. Enabled by default. Clear to disable the configuration without deleting it. Re-enable it later without reconfiguring it. The **[Directory Services]({{< ref "/SCALE/Credentials/DirectoryServices" >}})** screen returns to the default and provides the options to configure AD, LDAP, or IPA. |
| **Enable Account Cache** | Caches user and group information. Caching makes directory users and groups available in UI dropdown menus. Enabled by default. |
| **Enable DNS Updates** | Allows the directory service to update DNS records. Enabled by default. |
| **Timeout (seconds)** | The number of seconds before the directory service connection times out. Valid range is 1-40 seconds. |
| **Kerberos Realm** | Defines the Kerberos realm for authentication. Name of Kerberos realm used for authentication to the directory service. If left empty, Kerberos is not used for binding to the directory service. When joining an Active Directory or IPA domain for the first time, the realm is detected and configured automatically if not specified. This field auto-populates after joining an Active Directory domain. |
{{< /truetable >}}
{{< /expand >}}
