---
title: "sys/update_now"
menutitle: "update_now"
description: "Start performing system updates"
pre: "<i class='fa fa-plus-square'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed |
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| sys | update_now | yes | no | yes | 1 | 1.2 |

#### Description
**This API has been removed and is no longer available on version 1.2 and later**

Perform TrueCommand system updates and reboot the system. Note that for offline updates, this process generally takes less than 10 seconds before the system will reboot to finish the update. For online updates this may take a while longer while it downloads the update files. During an online update, the current status of the update process can be found with the {{< api-link "sys/update_status" >}} API call.

### Input Arguments
* Required:
   * none ({}) : If no arguments are provided, then it will assume that an online update is being attempted.
* Optional (only one of these may be provided at a time):
   * "fetch_url" (string) : Fetch an offline update file from a designated URL on the local network.
   * "file_upload" (string) : Filename of the offline update file that was uploaded via the {{< api-link "sys/upload_file" >}} mechanisms.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "fetch_url" : "http://mylocalserver.net/system-update.img"
}
```

### Reply Example (success)
```
"args" : {
  "result" : "success",
  "updates", "starting"
}
```

### Reply Example (failure)
```
"args" : {
  "result" : "failure",
  "error", "Invalid file or url"
}
```

```
"args" : {
  "result" : "failure",
  "error", "Update procedure already running"
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
| Name | Who Receives |
|:--------:|:-------------------:|
| sys/update_now | Everyone |

There are 3 different types of events that will get sent out, but all of them will have the same basic formatting.
1. When the update process starts and every 5 seconds while the updates are running:
```
{
"namespace" : "event",
"name" : "sys/update_now",
"id" : "event",
"args" : {
  "update_running" : true,
  "reboot_required" : false,
  "details" : "last line of process log ONLY"
  }
}
```

2. When the update process finishes
Example:
```
{
"namespace" : "event",
"name" : "sys/update_now",
"id" : "event",
"args" : {
  "result" : "success",
  "reboot_required" : true,
  "update_running" : false,
  "details" : "full process log here with <br> line breaks"
  }
}
```

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot_time" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
