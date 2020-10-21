---
title: "servers/reconnect"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | reconnect | no | no | no | 1.3 |

#### Description
Trigger TrueCommand to attempt to restart the connection to designated NAS's. This can be run for any NAS that the user has write-access to.

Update status is reported via the {{< api-link "servers/list" >}} API output.

### Input Arguments
* Required:
   "id" (string or JSON Array of strings) : System ID's for which systems to queue up reconnections
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
  "result" : "success",
  "restart_queued" : ["server_id_1"]
}
```

* Example Reply Arguments (incompatible version of NAS):
```
{
  "result" : "failure"
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
