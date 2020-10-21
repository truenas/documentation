---
title: "sys/reboot_stop"
pre: "<i class='fa fa-power-off'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | reboot_stop | Yes | no | Yes | 1.1 | 1.2 |

#### Description
**API Call Obsolete : Removed in version 1.2**

Cancel any pending reboot or shudown procedure. Requires administrator permissions.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.
```
"args" : {
  "result" : "success"
}
```

OR if no reboot is scheduled:

```
"args" : {
  "result" : "No reboot timer to stop"
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
This will generate a "sys/reboot" event with the following arguments:
```
"args" : {
  "reboot_scheduled" : false
}
```

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
