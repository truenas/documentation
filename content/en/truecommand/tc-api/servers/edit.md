---
title: "servers/edit"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | edit | yes | yes | yes | 1 |

#### Description
Modify an existing server settings

NOTE: Administrator access only - non-administrators will receive a 403/Forbidden error

### Input Arguments
* Required Arguments: "id" (string)
* Optional Arguments (at least one): 
   * "ip" (string)
   * "login_user" (string)
   * "login_password" (string)
   * "nickname" (string)
   * "groups" (JsonArray of strings)
   * "tags" (JsonArray) : Search tags, Format - ["tag_1", "tag_2"],
   * "connection_paused" (boolean) : Pause the connection. Will connect to the system and allow minimal access, but no stats or probes will run on the NAS.
   * "ignore_alerts" (string or JsonArray of strings) : Types of passthrough alerts to ignore from the NAS
      * Valid types: "information", "warning", "critical", or "all". Submit a null value to reset back to system defaults.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "id" : "server_id_1",
  "nickname" : "new_nickname",
  "groups" : ["group3", "group4"]
}
```

### Reply Example
```
{
  "server_id_1" : {
    "id" : "server_id_1",
    "nickname" : "new_nickname",
    "groups" :  ["group3", "group4"],
    "ip" : "192.168.0.1",
    "login_user" : "root",
    "mac_address" : "system_mac_address",
    "connection_secure" : true,
    "connection_paused" : false,
    "connection_error" : "Connected"
  }
}
```


### Events
Events from this change will be sent to all administrators and any user with read access to this server. 

Example:
```
{
"namespace" : "event",
"name" : "servers/edit",
"id" : "",
"args" : {
  "tvid" : "server_id_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item
```
"summary" : {
  "action" : "servers/edit",
  "changed_by_username" : "admin_user",
  "changed_by_uuid" : "admin_user_uuid",
  "new_ip" : "192.168.0.1",
  "new_login_user" : "root",
  "new_login_password" : "------",
  "new_nickname" : "new_nickname",
  "new_groups" : ["group3","group4"]
}
```
#### See Also
* {{< api-link "servers/add" >}}
* {{< api-link "servers/current_stats" >}}
* {{< api-link "servers/direct_auth" >}}
* {{< api-link "servers/find_available" >}}
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_remove" >}}
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
