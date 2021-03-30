---
title: "alerts/edit"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alerts | edit | no | no | no | 1 |

#### Description
Modify a custom alert rule. The user making the request must either be an administrator, or be listed as the "owner" of the designated alert rule, otherwise the middleware will return a FORBIDDEN error code.

### Input Arguments
* Required Inputs:
   * "caid" : (string) ID of the custom alert
   * At least one of the optional inputs listed below

* Optional Inputs:
   * "tvid" : (string) Only apply this rule to the specified system (default is "", which means to apply to all systems)
   * "name" : (string) User-visible text/nickname for this rule. Useful for easily identifying rules.
   * "source" : (string or JsonArray of strings) Data field to scan for alert trigger (example: "memory"). Sources may also be called "fields" by other classes of API calls (the data/* class in particular).
   * "value" : (string or JsonArray of strings) Specific number or percentage of total (example: "10%", or "1024")
   * "alerttype" : (string or JsonArray of strings) One of the following options: "equals", "not_equals", "less_than", "not_less_than", "greater_than", "not_greater_than", "contains", "not_contains"
   * "priority" : (string) One of the following options: "critical", "warning", "information"
   * "isactive" : (boolian) This alert rule should be active/used
   * "tags" : (JsonArray of strings) List of search tags
   * "text" : (string) Custom text to display as the visual description of the alert when it is triggered.
   * "needall" : (boolean) If multiple conditions are listed, all of them must be matched before the alert itself is triggered.
      * Default value: true - all conditions must be met for the alert rule to trigger.
   * "owner" : (string) User ID for a non-administrator account that also has ownership permissions for this alert rule.
      * NOTE: Only an administrator account can change the "owner" property of an alert rule.
      * This property was added in version 1.1

NOTE: If the "source", "value", or "alerttype" fields are provided as a JsonArray, then all three lists must be the same length. This allows for multiple conditions to be required before the alert is triggered.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "caid" : "alert_rule_1",
  "value" : "20"
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
    "value" : "20",
    "priority" : "warning"
    "isactive" : true,
    "owner" : "user_id_2"
  }
}
```

### Events
Events from this change will be sent to all administrators and any user with read access to impacted server(s). 

Example:
```
{
"namespace" : "event",
"name" : "alerts/edit",
"id" : "",
"args" : {
  "caid" : "alert_rule_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alerts/add" >}}
* {{< api-link "alerts/list" >}}
* {{< api-link "alerts/remove" >}}
