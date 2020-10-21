---
title: "servers/list"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | list | no | no | no | 1 |

#### Description
List basic information about the associated servers

### Input Arguments
* Required Arguments: none ({})
* Optional Arguments:
   * "with_details" : (true/false) - Also include the information from the "servers/current_stats" API call.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
* Example Reply Arguments (read-only server)
```
{
  "server1" : {
    "id" : "server1",
    "nickname" : "server_nickname",
    "hostname" : "server_hostname",
    "groups" :  ["group1", "group2"],
    "connection_is_up" : true,
    "connection_error" : "",
    "last_sync","yyyy-MM-dd hh:mm:ss",
    "updates_available" : true,
    "updates_running" : false
  }
}
```

* Example Reply Arguments (read-only server, with extra details requested)
```
{
  "server1" : {
    "id" : "server1",
    "nickname" : "server_nickname",
    "hostname" : "server_hostname",
    "groups" :  ["group1", "group2"],
    "connection_is_up" : true,
    "connection_error" : "",
    "last_sync","yyyy-MM-dd hh:mm:ss",
    "updates_available" : true,
    "updates_running" : false,
    "current_stats" : {
      "hostname" : "server_hostname",
      "version" : "server_version",
      "cpu_num" : 1,
      "memory_bytes" : 1024
    }
  }
}
```

* Example Reply Arguments (read/write server)
```
{
  "server1" : {
    "id" : "server1",
    "nickname" : "server_nickname",
    "hostname" : "server_hostname",
    "groups" :  ["group1", "group2"],
    "connection_is_up" : true,
    "connection_error" : "",
    "last_sync","yyyy-MM-dd hh:mm:ss",
    "updates_available" : true,
    "updates_running" : false
    "ip" : "192.168.0.1",
    "login_user" : "root",
    "mac_address" : "system_mac_address"
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
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
