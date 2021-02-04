---
title: "uilogs/add"
pre: "<i class='fa fa-archive'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| uilogs | add | no | no | no | 1 |

#### Description
Create a new log entry

### Input Arguments
* Required Inputs:
   * "log_entry" : (JSON object) The data to be saved in the log entry.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "log_entry" : { "error_info": "A problem occurred..." }
}
```

### Reply Example
```
{
  "result" : "success",
  "entry" : {
      "log_id" : "f7d4c622-f432-4431-9506-4cbf68b0082d",
      "time_t" : 1554996212,
      "log_entry": {
          "error_info": "A problem occurred..."
      }
  }
}
```

### Events
This API call does not generate events.

### Log Summary
This API call does not generate a detailed log summary item.


#### See Also
* {{< api-link "uilogs/list" >}}
* {{< api-link "uilogs/clear" >}}
