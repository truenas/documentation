---
title: "sys/update_check"
pre: "<i class='fa fa-file'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | update_check | yes | no | no | 1 | 1.2 |

#### Description
**This API has been removed and is no longer available on version 1.2 and later**

Have TrueCommand perform a check for whether system updates are available. This is a manual probe to start the update check only. TrueCommand automatically checks for system updates every 24 hours or whenever the middleware is restarted otherwise.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "result" : "success",
  "status" : "starting check for updates"
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
