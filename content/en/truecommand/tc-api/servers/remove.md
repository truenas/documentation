---
title: "servers/remove"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | remove | yes | yes | yes | 1 |

#### Description
Remove a FreeNAS/TrueNAS server from the administration framework

NOTE: Administrator access only - non-administrators will receive a 403/Forbidden error

NOTE 2: This will not remove the data previously collected from the server - just the connection/management of the server.

### Input Arguments
* Required Arguments: "id" (string) ID string for the server to remove
   * Added in v1.1: "id" may also be a JSON array of strings, each string being the ID of a server to remove.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "id" : "server_id_1"
}
```

### Reply Example
```
{
  "result" : "success"
}
```

### Events
Events from this change will be sent to **all** active connections. 

Example:
```
{
"namespace" : "event",
"name" : "servers/remove",
"id" : "",
"args" : {
  "tvid" : ["server_id_1"]
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that empty fields from the input arguments (hostname, mac_address, groups, nickname) will result in those fields getting excluded from the summary as well (the summary only lists the *changes*).

```
"summary" : {
  "action" : "servers/remove",
  "removed_by_username" : "admin_user",
  "removed_by_uuid" : "admin_user_uuid",
  "removed_ip" : "newuser",
  "removed_tvid" : "new_server_id",
  "removed_nickname" : "server_nickname",
  "removed_hostname" : "server_hostname",
  "removed_mac_address" : "server_mac",
  "removed_from_groups" : ["group1","group2"]
}
```

#### See Also
* {{< api-link "servers/add" >}}
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
