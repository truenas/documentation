---
title: "LDAP"
description: "LDAP authentication options"
chapter: false
pre: "<i class='fa fa-bookmark'></i>	"
---

TrueCommand provides the ability to use an external LDAP authentication server for managing user logins permissions.

{{% notice "info" %}}
Active directory environments utilize an LDAP authentication server as part of the active directory specifications. As such, the information specified here also applies to using an active directory instance for handling the authentication.
{{% /notice %}}

{{% notice "warning" %}}
The LDAP configuration within TrueCommand 2.0 is significantly different from the TrueCommand 1.x configuration. The migration from 1.x to 2.0 will try to convert the two formats for you automatically, but the "sasl_domain" and "user" settings from 1.x are no longer utilized within 2+. 

Please ensure that you have a non-LDAP admin account for your TrueCommand instance available before you perform the migration from 1.x to 2.0. This may be needed to adjust the LDAP connection settings after the migration.
{{% /notice %}}

## LDAP Settings Object
Each LDAP settings definition provides all the information necessary to establish a connection to AD/LDAP and authenticate a user.

* "url" (string, Required) : The IP or DNS name of the LDAP server, with port number on the end.
   * Example: "ldap.mycorp.com:389"
* "verify_ssl" (bool) : Require strict SSL certificate verification.
   * Default value: false
   * Disable this option if the hostname of the system is different than the one listed on the SSL certificate, an IP is used for the connection instead of the DNS hostname, or if a self-signed certificate is used by the LDAP server.
* "domain" (string, Required) : The base domain settings of the user.
   * Example: "dc=mycorp,dc=com" for a typical username@mycorp.com user account
* "user_id_field" (string) : The domain fieldname to use for user-matching.
   * Default value: "uid" (user ID)
   * Another field commonly-used is "cn" (common name)
* "group_id_field" (string) : The domain fieldname to use when searching for a group name.
   * Default value: "cn" (common name)
* "group_domain_base" (string) : The alternative domain setting to use when searching for groups.
   * Default value: Same as "domain"
* "bind_user_domain" (string) : The full domain setting for a pre-authenticated bind to the server.
   * Example: "uid=binduser,cn=read-only-bind,dc=mycorp,dc=com"
   * For an unauthenticated bind set this field to just a name (example: "truecommand-bind"). This is sometimes used for logging purposes on the LDAP, but otherwise is not validated.
* "bind_user_password" (string) : The password to use for the bind user.
   * For an unauthenticated bind, leave this field blank while setting the "bind_user_domain" to a non-empty value.

## LDAP connection options
There are two common methods of validating an LDAP user which TrueCommand supports:

### Direct Bind
In this method, the "domain" and "user_id_field" are used to create a static domain string which is then utilized to attempt to authenticate the user.

Example:
```
{
"domain" : "dc=mycorp,dc=com",
"user_id_field" : "uid"
}
```
When user "bobby.singer" attempts to login, TrueCommand will establish an SSL-secure connection to the LDAP server and then attempt to bind with the static domain "uid=bobby.singer,dc=mycorp,dc=com" and the user-provided password. If successful, then the user authentication has been verified and Bobby Singer is allowed access to TrueCommand.

### Indirect Bind
This method of authentication is much more dynamic and searches for the proper user domain settings rather than making assumptions about the format. In this situation, a "bind user" (typically a read-only, minimal-permissions user account) is configured with a known domain/password to perform the initial bind to the LDAP server. Once logged in, a search is then performed to find the domain of the user currently requesting to login, and then a second bind is attempted utilizing the user domain and provided password.

Example:
```
{
"domain" : "dc=mycorp,dc=com",
"user_id_field" : "uid",
"bind_user_domain" : "uid=binduser,cn=read-only-bind,dc=mycorp,dc=com",
"bind_user_password" : "pre-shared-key",
}
```
When "bobby.singer" attempts to login, TrueCommand will establish an SSL-secure connection to the LDAP server, and then the  "bind_user_domain" and "bind_user_password" settings are used to perform an initial bind utilizing pre-known settings from your LDAP provider. Once bound, a search is then performed for the user matching "uid=bobby-singer", but only within the subdomains that include the "domain" setting ("dc=mycorp,dc=com" in this example). If a user is found, the full user domain string from the search result is then used to initialize a second bind along with the user-provided password. If successful, then the user authentication has been verified and Bobby Singer is allowed access to TrueCommand.

## SSL/TLS Connection Info
If the LDAP server uses an SSL certificate generated by a custom certificate authority (CA), then one of two things must occur before the LDAP server can be used by TrueCommand:

* (Option 1) The custom certificate authority must be registered with TrueCommand via the {{< api-link "ssl/ca_import" >}} API call.
* (Option 2) The "verify_ssl" option can be disabled to accept whatever SSL certificate the server provides. This may be needed if the  hostname of the LDAP server is different than the one listed on the certificate, or if the server uses a self-signed SSL certificate.
