---
title: "servers/list_writable"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | list_writable | no | no | no | 1 |

#### Description
List all the servers that the current user has write access to. This is useful for determining which servers the current user can directly access for administration purposes.

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
  "server_id_1" : {
    "id" : "server_id_1",
    "hostname" : "server_hostname",
    "nickname" : "server_nickname",
    "server_status" : "online"
  },
  "server_id_2" : {
    "id" : "server_id_2",
    "hostname" : "server_2_hostname",
    "nickname" : "server_2_nickname",
    "server_status" : "offline"
  }
}
```

### Events
This API call does not emit any middleware events.

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
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/remove" >}}
