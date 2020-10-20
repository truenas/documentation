---
title: "sys/info"
menutitle: "info"
description: "System Info"
pre: "<i class='fa fa-cogs'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys | info | no | no | no | 1 |

#### Description
Return general information about the system itself

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
  "system_id" : "my_unique_system_id",
  "system_version" : "0.4"
}
```

### Events
This API call does not emit any middleware events.

### Log Summary

#### See Also
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot_time" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
