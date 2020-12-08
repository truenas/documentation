---
title: "servers/current_stats"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | current_stats | no | no | yes | 1 |

#### Description
Ask for any information about the servers. 
NOTE: This will only return information about servers that the current user has read access to.
By default this will return the information about all the servers the user is aware of, but the "tvid" input can be used to restrict the output information as needed. More information may be returned than that shown in the example below.

### Input Arguments
* Required Arguments: none ({})
* Optional Arguments: "tvid" (string **or** JsonArray of strings)


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "server_id_1" {
    "hostname" : "server_hostname",
    "version" : "server_version",
    "cpu_num" : 1,
    "memory_bytes" : 1024
  }
}
```

### Events
Events from this change will be sent to all administrators and any user with read access to this server whenever the statistics for a server are changed. 
*NOTE:* Arguments for the event exactly match the format of the servers/current_stats API call return, just for a single system.

* Example event message:
```
{
"namespace" : "event",
"name" : "servers/current_stats",
"id" : "",
"args" : {
    "server_id_1" : {
      "hostname" : "server_hostname",
      "version" : "server_version",
      "cpu_num" : 1,
      "memory_bytes" : 1024
    }
  }
}
```

* Example "disconnection" event message for when TrueCommand loses connection to a system.
```
{
"namespace" : "event",
"name" : "servers/disconnected",
"id" : "",
"args" : {
    "tvid" : "server_id_1"
  }
}
```

* Example "connection" event message for when TrueCommand establishes a connection to a system.
```
{
"namespace" : "event",
"name" : "servers/connected",
"id" : "",
"args" : {
    "tvid" : "server_id_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/add" >}}
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
