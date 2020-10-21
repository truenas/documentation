---
title: "servers/groups_replace"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | groups_replace | yes | no | yes | 1 |

#### Description
Simplification for replacing the group assignments for existing servers

NOTE: Administrator access only - all others will get a 403/Forbidden error

### Input Arguments
* Required:
   * "[server_id]" : String or array of strings for groups which need to include this server
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "server_id_1" : "new_group_1",
  "server_id_2" : [ "new_group_1", "new_group_2" ]
}
```

### Reply Example
```
{
  "server_id_1" : [ "new_group_1" ],
  "server_id_2" : [ "new_group_1", "new_group_2" ]
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
"args" : {}
}
```

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/add" >}}
* {{< api-link "servers/current_stats" >}}
* {{< api-link "servers/direct_auth" >}}
* {{< api-link "servers/edit" >}}
* {{< api-link "servers/find_available" >}}
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_remove" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
