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
   * "tvid" : (string) Only apply this rule to the specified system 
      * Default value: "", which means to apply to all systems
   * "name" : (string) User-visible text/nickname for this rule. Useful for easily identifying rules.
   * "priority" : (string) One of the following options: "critical", "warning", "information"
   * "isactive" : (boolean) This alert rule should be active/used
   * "tags" : (JsonArray of strings) List of search tags
   * "text" : (string) Custom text to display as the visual description of the alert when it is triggered.
   * "needall" : (boolean) If multiple conditions are listed, all of them must be matched before the alert itself is triggered.
      * Default value: true - all conditions must be met for the alert rule to trigger.
      * A "true" value corresponds to an "AND" operation, while a false value corresponds to an "OR" operation
   * "owner" : (string) User ID for a non-administrator account that also has ownership permissions for this alert rule.
      * NOTE: Only an administrator account can change the "owner" property of an alert rule.
   * "triggers" : (Json Array of objects) Objects contain the following fields: (added in v2.0)
      * "average_over_minutes" : (integer) Use the average value of the measurement over this time period.
         * Default value: 1
      * "metric" : (string) Data category to scan for alert trigger (example: "memory_used_percent"). See the {{< api-link "data/retrieve" >}} API for a list of available identifiers.
      * "field" : (string) Data value to scan for alert trigger within the category. "total" and "avg" are always supported. 
         * Default value: "avg"
      * "comparison" : (string) One of the following options: "equals", "not_equals", "less_than", "not_less_than", "greater_than", "not_greater_than", "contains", "not_contains"
      * "value" : (number) Specific number for comparison. 
         * The logic is always: [metric / field] [comparison] [value]
         * Example: "memory_used_percent" "total" "greater_than" 90


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "caid" : "alert_rule_1",
  "text" : "System alert triggered! <alert_rule_1>"
}
```

### Reply Example
```
{
  "alert_rule_1" : {
    "caid" : "alert_rule_1",
    "tvid" : "",
    "name" : "Custom Rule 1",
    "priority" : "warning"
    "isactive" : true,
    "owner" : "user_id_2",
    "text" : "System alert triggered! <alert_rule_1>",
    "triggers" : [
      {
        "metric" : "memory_used_percent",
        "field" : "total",
        "comparison" : "greater_than",
        "value" : 99,
        "average_over_minutes" : 10
      }
    ]
  }
}
```

### Events
Events from this change will be sent to all users.

Example:
```
{
"namespace" : "event",
"name" : "alerts/list",
"id" : "",
"args" : {
  "caid" : "alert_rule_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Changelog
* **v2.0** : Input/Output format changed. Uses the new "triggers" object array which replaces the individual "alerttype", "source", and "value" arrays.
* **v1.1** : "Owner" field added.

#### See Also
* {{< api-link "alerts/add" >}}
* {{< api-link "alerts/list" >}}
* {{< api-link "alerts/remove" >}}
