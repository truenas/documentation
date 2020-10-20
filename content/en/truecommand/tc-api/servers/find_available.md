---
title: "servers/find_available"
menutitle: "[obsolete] find_available"
description: "Find available Servers (Obsolete)"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| servers | find_available | yes | no | no | 1 | 1.2 |

#### Description
**This API call has been removed in version 1.2**

Ask for a list of all non-associcated servers on the local network which are discoverable via MDNS.

NOTE: Administrator access only - all others will get a 403/Forbidden error

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
  "192.168.10.10" : {
    "address" : "192.168.10.10",
    "target" : "my_local_server.local",
    "name" : "my_local_server",
    "port" : "80"
  },
  "192.168.10.11" : {
    "address" : "192.168.10.11",
    "target" : "my_local_server2.local",
    "name" : "my_local_server2",
    "port" : "80"
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
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_remove" >}}
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
