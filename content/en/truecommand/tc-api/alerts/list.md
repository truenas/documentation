---
title: "alerts/list"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alerts | list | no | no | no | 1 |

#### Description
List all the alert rules that are currently defined.

### Input Arguments
* Required Inputs: none ({})
* Optional Inputs: 
   * "tvid" : (string or array of strings) Only show the alert rules that impact the designated system(s)
   * "active_only" : (boolian - "false" by default) Only return alerts which are active.
**Note:** If an alert rule does not have a listed "tvid", then it will be used for all registered systems.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : ["server_id_1", "server_id_2"]
}
```

### Reply Example
```
{
  "alert_rule_1" : {
    "caid" : "alert_rule_1",
    "tvid" : "",
    "name" : "Custom Rule 1",
    "source" : "memory%free_percent",
    "alerttype" : "less_than",
    "value" : "10",
    "priority" : "warning",
    "isactive" : true,
    "owner" : "user_id_1"
  }, 
  "alert_rule_2" : {
    "caid" : "alert_rule_2",
    "tvid" : "server_id_1",
    "name" : "Custom Rule 2",
    "source" : "memory%free_percent",
    "alerttype" : "less_than",
    "value" : "5",
    "priority" : "critical",
    "isactive" : false
    "owner" : "user_id_4"
  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alerts/add" >}}
* {{< api-link "alerts/edit" >}}
* {{< api-link "alerts/remove" >}}
