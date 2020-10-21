---
title: "reports/generate"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Has Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | generate | No | No | No | 1.1 |

#### Description
This will take a designated report object with a time range and system list and return a complete report structure with all data associated with the systems pre-populated and formatted for display in the UI.This will return JSON data structures formatted for use with the "chart.js" javascript library when charts are requested as part of a report.

### Input Arguments
* Required Arguments: 
   * "roid" (string) : Report Object ID for the report to generate
   * "tvid" (string or JsonArray of strings) : System(s) for which to generate the report.
   * "time_start" (time_t)
* Optional Arguments:
   * "time_end" (time_t - if not supplied it defaults to the current time)

The user requesting the report must have read permission for the designated report and systems, otherwise a BAD REQUEST error will be returned.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "roid" : "my_report_1",
  "tvid" : ["system_1", "system_2"],
  "time_start" : 1590682420
}
```

### Reply Example
```
{
  "namespace" : "reports",
  "name" : "response",
  "id" : "some_id",
  "args" : {
    "result" : "success",
    "my_report_1" : {
      "roid" : "my_report_1",
      "name" : "My Report",
      "owners" : ["user_1", "user_2"],
      "shared_users" : ["user_3"],
      "shared_teams" : ["team_A"],
      "last_modified_user" : "user_id_1",
      "last_modified_time_t" : 1562075297,
      "widgets" : { 
        "column_count" : 2,
        "items" : [
          {
            "id" : "network_chart_1",
            "internal_type" : "chart:line",
            "custom_settings" : false,
            "name" : "Network Traffic Chart",
            "summary" : "Chart of network traffic",
            "preview_image" : "",
            "data_paths" : null,
            "api" : null,
            "settings" : null,
            "data" : { <chart.js data object> }
          }
        ]
      }
    }
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This this API call does not emit any middleware events.

#### See Also
* {{< api-link "reports/add" >}}
* {{< api-link "reports/edit" >}}
* {{< api-link "reports/remove" >}}
* {{< api-link "reports/list" >}}
