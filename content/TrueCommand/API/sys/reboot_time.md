---
title: "sys/reboot_time"
pre: "<i class='fa fa-power-off'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | reboot_time | no | no | no | 1 | 1.2 |

#### Description
**API Call Obsolete : Removed in version 1.2**

See if there is a scheduled reboot of the TrueCommand system, and the time remaining before the system reboot occurs.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.
```
"args" : {
  "reboot_scheduled" : true,
  "reboot_delay_seconds" : 13,
  "reboot_time" : "2019-01-01T05:40:19Z",
  "reboot_type" : "restart"
}
```

OR if no reboot is scheduled:

```
"args" : {
  "reboot_scheduled" : false
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
