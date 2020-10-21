---
title: "servers/direct_auth"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | direct_auth | no | no | no | 1 |

#### Description
Request direct access to a server (requires user write permissions for server)
This will return all the necessary information to directly connect to the server for advanced configuration

NOTE: The authentication token returned is only temporary - any significant delay in using it to login to the server may result in the token becoming invalid.


### Input Arguments
* Required:
   "id" (string)
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "id" : "server_id_1"
}
```

### Reply Example
* Example Reply Arguments (success):
```
{
  "server_status" : "online",
  "server_ip" : "192.168.0.1",
  "server_auth_token" : "some_temporary_authentication_token"
}
```

* Example Reply Arguments (unavailable):
```
{
  "server_status" : "offline"
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/add" >}}
* {{< api-link "servers/current_stats" >}}
* {{< api-link "servers/edit" >}}
* {{< api-link "servers/find_available" >}}
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_remove" >}}
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
