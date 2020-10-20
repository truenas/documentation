---
title: "sys/set_config"
menutitle: "set_config"
description: "Change system configuration options"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys | set_config | yes | no | no | 1 |

#### Description
Change various system-configuration options for TrueCommand.

### Input Arguments
* Required:
   * At least one of the optional arguments
* Optional:
   * "server_polling_seconds" : (integer) Number of seconds between data collection probes for a NAS (minimum 10)
      * [WARNING] Changing this value will automatically trigger a close/restart of the NAS connection.
   * "stats_keep_months" : (integer) Number of months of statistics to keep within the TrueCommand database
   * "ssl_accept_selfsigned" : (boolean) Accept self-signed certificates when establishing a connection to a NAS.
   * "ssl_accept_hostmismatch" : (boolean) Accept certificate even if the hostname on the cert does not match the URL/IP of the NAS.
   * "ssl_ignore_all" : (boolean) Ignore any SSL errors with certificates when connecting to a NAS. When enabled, this will overwrite take precedence over the self-signed and hostmismatch options.
   * "nas_ssl_only" : (boolean) Require SSL connections to all NAS's. TC will not attempt non-secure connections.
   * "nas_ignore_alerts" : (string or JsonArray of strings) Ignore passthrough alerts of the listed type(s) for all NAS connections.
      * Valid types: "information", "warning", "critical", or "all"
      * NOTE: These defaults are only respected if the custom ignore rules for the individual NAS is empty. See the {{< api-link "servers/edit" >}} API call for setting custom ignore rules for specific NAS connections.
   * "nas_backup_config_keep" : (positive integer) Number of configuration backups to keep for each NAS. Set to 0 to disable automatic backups.
   * "ldap_create_users" : (boolean) Allow valid LDAP authentication to dynamically create user accounts as needed. See the "ldap_default_teams" value to determine which teams/permissions these dynamically-created user accounts are allowed.
   * "ldap_default_teams" : (JsonArray of strings) List of team ID's that a new user should be added to.
   * "ldap_servers" (JsonArray of objects) : List of LDAP settings objects
         * See the {{< api-link "ldap" >}} settings page for details


NOTE: If an optional argument is not provided or the type of value is not valid (such as a null value), then that setting will not be changed.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "stats_keep_months" : 12,
  "ssl_accept_hostmismatch" : false
}
```

### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "result" : "success"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "sys/list_config" >}}
