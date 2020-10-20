---
title: "uilogs/list"
menutitle: "list"
description: "Fetch all UI log entries"
pre: "<i class='fa fa-archive'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| uilogs | list | no | no | no | 1 |

#### Description
Requests a list of all UI log entries.

### Input Arguments
* Required Arguments: none ({})

### Reply Example
```
{
  "result" : "success",
  "entries" : [
      {
        "log_id" : "f7d4c622-f432-4431-9506-4cbf68b0082d",
        "time_t" : 1554996212,
        "log_entry": {
            "error_info": "A problem occurred..."
        }
      },
      {
        "log_id" : "6043af9c-fdbd-42c7-a820-ab4a5568e092",
        "time_t" : 1554996673,
        "log_entry": {
            "dashboard": "Failed to load..."
        }
      }
  ]
}
```

### Events
This API call does not generate events.

### Log Summary
This API call does not generate a detailed log summary item.


#### See Also
* {{< api-link "uilogs/clear" >}}
* {{< api-link "uilogs/add" >}}
