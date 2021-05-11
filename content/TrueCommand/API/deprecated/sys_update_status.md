---
title: "sys/update_status"
pre: "<i class='fa fa-file'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | update_status | no | no | no | 1 | 1.2 |

#### Description
**This API has been removed and is no longer available on version 1.2 and later**

View the log file for the current update procedure, and report whether the system is waiting to reboot to finish performing updates.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "reboot_required" : true,
  "update_running" : false,
  "update_status" : "log file of information<br>on multiple lines"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot_time" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/upload_file" >}}
