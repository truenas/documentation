&NewLine;

TrueCommand supports using [LDAP](https://tools.ietf.org/html/rfc4511) to better integrate within an established network environment.
LDAP/AD allows using single sign-on credentials from the [Lightweight Directory Access Protocol (LDAP)](https://tools.ietf.org/html/rfc4511) or [Active Directory (AD)](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services).
Users can log in with an LDAP or AD account without creating a separate TrueCommand login.

LDAP and AD require the server IP address or DNS hostname and domain to use.
The LDAP or AD Username (optional) is required when the TrueCommand user name does not match the LDAP or AD credentials.

Click on the **<i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; (Gear) > Administration**.  
Click **Add**  on the **LDAP Servers** widget to open the **Add LDAP Server** configuration screen.

![AdministrationLDAPServersWidget](/images/TrueCommand/Administration/AdministrationLDAPServersWidget.png "Administration Screen LDAP Servers Widget")

To configure LDAP, type the LDAP server IP address or DNS host name into the **LDAP Server URL** field, type the domain name in the **Domain** field, and click **ADD SERVER**.
You can add multiple LDAP servers and domains. 

Click on the **Test LDAP Config** <span class="iconify" data-icon="mdi:test-tube"></span> icon to open a window that allows you to test your connection to the LDAP server. 
The **Remove LDAP Server** <span class="iconify" data-icon="mdi:delete"></span> icon removes the selected LDAP server. 

![AddLDAPServerScreen](/images/TrueCommand/Administration/AddLDAPServerScreen.png "Add LDAP Server")

{{< expand "LDAP Server Settings" "v">}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | (Required) Enter the host name, IP or DNS name, of the LDAP server, with port number on the end. For example: *ldap.mycorp.com:636* (SSL port is typically 636 for AD/LDAP). |
| **Domain** | (Required) Base domain settings of the user. For example: <i>dc=mycorp,dc=com</i> for a typical `username@mycorp.com` user account. |
| **Group Domain** | Enter the alternative domain setting to use when searching for groups. The default value is the same as **Domain**. |
| **Verify SSL** | Select to require strict SSL certificate verification. The default value is false. Disable this option if the system host name is not the one on the SSL certificate, the system uses an IP to connect instead of the DNS host name, or the LDAP server uses a self-signed certificate. |
| **User ID Field** | Enter the user ID for the user that logs in (this is class-matched to the login username). Enter **Domain** name to use for user-matching. The default value is **uid** (user ID). Another commonly-used field is **cn** (common name). |
| **Group ID Field** | Enter the class for finding groups associated with a user. The default is cn (common name). Enter the **Domain** name to use when searching for a group name. |
| **BIND User Domain** | Enter the full domain setting for a pre-authenticated bind to the server. For example: <i>uid=binduser,cn=read-only-bind,dc=mycorp,dc=com</i>. For an unauthenticated bind, enter just a name (example: <i>truecommand-bin</i>). This is sometimes used for logging purposes on the LDAP but otherwise is not validated. |
| **Realm** | Enter the realm that performs authentication against the LDAP server. |
| **BIND Password** | Enter the password to use for the bind user. For an unauthenticated bind, leave blank while setting the **BIND User Domain** to a non-empty value. |
| **KDC** | Enter the key distribution center (KDC) that supplies session tickets and temporary session keys to users and computers within the LDAP server. |
{{< /truetable >}}
{{< /expand >}}

### LDAP connection options

TrueCommand supports two methods of validating LDAP user credentials:

#### Direct Bind
The direct BIND method uses the **Domain** and **User ID Field** values to create a static domain string for user authentication.

Example:

* Domain: *dc=mycorp,dc=com*
* User ID Field: *uid* 

When *bobby.singer* attempts to log in, TrueCommand establishes an SSL-secure connection to the LDAP server and attempts to bind with the static domain *uid=bobby.singer,dc=mycorp,dc=com* and the user-provided password. If successful, the user authentication verifies, and Bobby Singer may access TrueCommand.

#### Indirect Bind
The indirect BIND authentication method is more dynamic and searches for the proper user domain settings rather than making format assumptions. 
With TrueCommand, indirect BIND configures a bind user (typically a read-only, minimal-permissions user account) with a known domain/password to perform the initial bind to the LDAP server. 
After logging in, TrueCommand searches for the user domain requesting to log in. It then attempts a second bind with the user domain and provided password.

Example:

* Domain: *dc=mycorp,dc=com*
* User ID Field: *uid*
* BIND User Domain: *uid=binduser,cn=read-only-bind,dc=mycorp,dc=com*
* BIND Password: *pre-shared-key*

When *bobby.singer* attempts to log in, TrueCommand establishes an SSL-secure connection to the LDAP server. 
TrueCommand uses the **BIND User Domain** and **BIND Password** settings to perform an initial bind using pre-known settings from your LDAP provider. 
When bound, TrueCommand searches for the user matching *uid=bobby.singer*, but only within the subdomains that include the domain setting (*dc=mycorp,dc=com* in this example). 
If TrueCommand finds a user, it uses the entire user domain string from the search result to initialize a second bind along with the user-provided password. 
If successful, TrueCommand verifies the user authentication, and Bobby Singer is allowed access to TrueCommand.

### SSL/TLS Connection Info
{{< hint type=warning >}}
AD/LDAP authentication *requires* SSL connections.
{{< /hint >}}
If the LDAP server uses an SSL certificate generated by a custom certificate authority (CA), then one of two things must occur before TrueCommand can use the LDAP server. Either:
* Users must register the custom certificate authority with TrueCommand via the **Certificates** tab on the **Administration** screen.
Or
* Users can disable the **Verify SSL** option to accept whatever SSL certificate the server provides. 
  Users might need to choose this if the LDAP server host name differs from the one listed on the certificate or if the server uses a self-signed SSL certificate.

Selecting **Allow LDAP user creation** means TrueCommand creates user accounts when someone logs in to the User Interface with their LDAP credentials.
**JOIN TEAM** automatically adds LDAP users to specific TrueCommand teams.