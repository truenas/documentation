---
title: "sys/reboot"
pre: "<i class='fa fa-power-off'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | reboot | yes | no | yes | 1 | 1.2 |

#### Description
**API Call Obsolete : Removed in version 1.2**

Schedule a system reboot for the TrueCommand appliance. 
There is a 5 minute delay by default in order to allow other logged-in users enough time to finish up whatever they are doing before the system goes down. There will also be system-wide events announcing the impending reboot to all active user sessions.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "delay_seconds" (integer) : Schedule the reboot to happen this many seconds after the API call is received. 
      * Default Value: 300 (5 minutes)
   * "poweroff" (boolean) : Power off the system instead of rebooting it.
      * Default Value: false
      * When enabled, the "reboot_type" info field will change to "poweroff" during the delay.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.
```
"args" : {
  "delay_seconds" : 15
}
```

### Reply Example
```
"args" : {
  "reboot_delay_seconds" : 15,
  "reboot_time" : "2019-01-01T05:40:19Z",
  "reboot_type" : "restart"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
| Name | Who Receives |
|:--------:|:-------------------:|
| sys/reboot | Everyone |


Example:
```
{
  "namespace" : "event",
  "name" : "sys/reboot",
  "id" : "event",
  "args" : {
    "reboot_delay_seconds" : 15,
    "reboot_time" : "2019-01-01T05:40:19Z",
    "reboot_type" : "restart"
  }
}
```

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot_time" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
