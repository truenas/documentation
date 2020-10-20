---
title: "servers/add"
menutitle: "add"
description: "Add a Server"
pre: "<i class='fa fa-server'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| server | add | yes | yes | yes | 1 |

#### Description
Add a new FreeNAS/TrueNAS server to the TrueCommand administration framework.

### Input Arguments
* Required Arguments: 
   * "ip" (string) : DNS name or IP address of the system on the network.
   * "login_user" (string) : Name of the user to login to the system
      * NOTE: Not needed/used if the "is_external" flag is enabled
   * "login_password" (string) : Password for the user to login to the system
      * NOTE: Not needed/used if the "is_external" flag is enabled
* Optional Arguments: 
   * "nickname" (string) : User-visible name for this system
      * NOTE: This field is required if the "is_external" flag is enabled
   * "groups" (JsonArray of strings)
   * "tags" (JsonArray) : Search tags, Format - ["tag_1", "tag_2"]
   * "ignore_alerts" (string or JsonArray of strings) : Types of passthrough alerts to ignore from the NAS
      * Added in TrueCommand 1.1
      * Valid types: "information", "warning", "critical", or "all"
      * Default value: null. No alerts are ignored.
   * "is_external" (boolean) : This system is a not a FreeNAS/TrueNAS system (default: false)
      * Added in TrueCommand 1.1
      * Information from this system is only submitted via the "external" API namespace
      * TrueCommand does not connect to this system directly. TC is just an endpoint for storing/viewing stats that the system periodically submits.
      * This flag cannot be changed later.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "ip" : "192.168.0.1",
  "login_user" : "root",
  "login_password" : "server_password",
  "nickname" : "server_nickname",
  "groups" : ["group1","group2"]
}
```

### Reply Example
* Example Reply Arguments (success):
```
{
  "result" : "success",
  "id" : "new_server_id"
}
```

* Example Reply Arguments (error: IP already managed)
```
{
  "error" : "IP Exists",
  "code" : "400",
  "message" : "Bad Request"
}
```

### Events
Events from this change will be sent to all currently-connected administrators and any user with read access to the new server (such as from adding a server to an existing group).

Example event message:
```
{
"namespace" : "event",
"name" : "servers/add",
"id" : "",
"args" : {
  "tvid" : "new_server_id"
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that empty fields from the input arguments (hostname, mac_address, groups, nickname) will result in those fields getting excluded from the summary as well (the summary only lists the *changes*).

```
"summary" : {
  "action" : "servers/add",
  "added_by_username" : "admin_user",
  "added_by_uuid" : "admin_user_uuid",
  "new_ip" : "newuser",
  "new_tvid" : "new_server_id",
  "new_nickname" : "server_nickname",
  "new_groups" : ["group1","group2"]
}
```


#### See Also
* {{< api-link "servers/current_stats" >}}
* {{< api-link "servers/direct_auth" >}}
* {{< api-link "servers/edit" >}}
* {{< api-link "servers/find_available" >}}
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_remove" >}}
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
