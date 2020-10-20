---
title: "sys/updates_available"
menutitle: "updates_available"
description: "Check for available updates"
pre: "<i class='fa fa-question-circle'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | updates_available | no | no | no | 1 | 1.2 |

#### Description
**This API has been removed and is no longer available on version 1.2 and later**

Check for available updates to the TrueCommand appliance.

* **NOTE** This requires the ability to connect to the iXsystems update server. Offline update files may be provided using the {{< api-link "sys/update_now" >}} API call.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "updates_available" : true,
  "updates_info" : "information about update"
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
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
