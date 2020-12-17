---
title: "alerts/add"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alerts | add | no | no | yes | 1 |

#### Description
Create a new alert rule. The user making the request must either be an administrator, or be granted alert-creation permission via the user or team settings. The creator of an alert rule is also automatically tagged as the owner of the rule. This grants permission to edit/delete the rule even if the user is not an administrator.

### Input Arguments
* Required Inputs:
   * "name" : (string) User-visible text/nickname for this rule. Useful for easily identifying rules later.
   * "source" : (string or JsonArray of strings) Data field to scan for alert trigger (example: "memory"). Sources may also be called "fields" by other classes of API calls (the data/* class in particular). Source values are delimited by the "%" symbol to indicate the separation between parent/child data objects.
   * "value" : (string or JsonArray of strings) Specific number (example: "1024")
   * "alerttype" : (string or JsonArray of strings) One of the following options: "equals", "not_equals", "less_than", "not_less_than", "greater_than", "not_greater_than", "contains", "not_contains"
   * "priority" : (string) One of the following options: "critical", "warning", "information"
* Optional Inputs:
   * "tvid" : (string) Only apply this rule to the specified system (default is "", which means to apply to all systems)
   * "isactive" : (boolean) This alert rule should be active/used (default: true)
   * "tags" : (JsonArray of strings) List of search tags
   * "text" : (string) Custom text to display as the visual description of the alert when it is triggered.
   * "needall" : (boolean) If multiple conditions are listed, all of them must be matched before the alert itself is triggered.
      * Default value: true - all conditions must be met for the alert rule to trigger.

NOTE: If the "source", "value", or "alerttype" fields are provided as a JsonArray, then all three lists must be the same length. This allows for multiple conditions to be required before the alert is triggered.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "source" : "memory%free_percent",
  "alerttype" : "less_than",
  "value" : "10",
  "priority" : "warning",
  "name" : "Custom Rule 1"
}
```

### Reply Example
```
{
  "result" : "success",
  "caid" : "new_alert_rule_id"
}
```

### Events
Events from this change will be sent to all administrators and any user with read access to impacted server(s). 

Example:
```
{
"namespace" : "event",
"name" : "alerts/add",
"id" : "",
"args" : {
  "caid" : "new_alert_rule_id"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alerts/edit" >}}
* {{< api-link "alerts/list" >}}
* {{< api-link "alerts/remove" >}}
