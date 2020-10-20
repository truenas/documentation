---
title: "servers/list_groups"
menutitle: "list_groups"
description: "List Server Groups"
pre: "<i class='fa fa-server'></i> "
draft: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | list_groups | no | no | Yes | 1 |

#### Description
List all the current groups and which servers are associated with each group.
If a non-administrator makes this API call, it will only return information about the groups that the user currently has access to see.

NOTE: Administrator access requirement removed in version 1.2

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "group1" : ["server_1", "server_2"],
  "group2" : ["server_1", "server_3"],
  "group3" : ["server_4"]
}
```

### Events
Events will be sent to all currently-connected administrators when the list of groups on the system is changed via any of the servers/groups_* API calls.

Example event message:
```
{
"namespace" : "event",
"name" : "servers/list_groups",
"id" : "",
"args" : {
  "group1" : ["server_1", "server_2"],
  "group2" : ["server_1", "server_3"],
  "group3" : ["server_4"]
  }
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
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
