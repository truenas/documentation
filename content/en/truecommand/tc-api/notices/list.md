---
title: "notices/list"
pre: "<i class='fa fa-flag'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| notices | list | no | no | no | 1 |

#### Description
List alert notices for systems that the user can view:

### Input Arguments
* Required inputs: none ({})
* Optional inputs:
   * "tvid" : (string or array of strings) Restrict the search to notices about the specified systems. Default value is to search for notices from all systems the current user can view (read access).
   * "all_notices" : (boolian - false by default) Return notices that have been marked as resolved.
   * "count" : (integer) Maximum limit for the number of notices returned
   * "limit_datetime" : ([string : date/time code]({{< relref "timecodes.md" >}}) Provide a date/time cutoff for the search (default value: current date/time)
   * "newer_than_datetime" : (boolean) Return notices newer than the datetime cutoff (default: false - older than cutoff)
   * "sort_ascending_time" : (boolean) Return notices in an array format arranged oldest->newest (if true) or newest->oldest (if false). Do not set this optional flag to return it in the standard object-based format.
* **Note:** The "system_time_triggered" field returns the time code (in time_t format) for finding the trigger of the event in the system data logs. This can be very useful for viewing all of the data/subsystems around the time that the alert was triggered for debugging purposes.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "server_id_1",
  "all_notices" : true
}
```

### Reply Example
```
{
  "3" : {
    "aid" : "3",
    "caid" : "alert_rule_4",
    "tvid" : "server_id_1",
    "source" : "memory%free_percent",
    "users_notified" : ["user_id_1","user_id_3"],
    "resolved" : false,
    "resolved_by" : "",
    "resolved_time" : "",
    "priority" : "warning",
    "system_time_triggered" : [1104541261],
    "last_update_time" : "20180101T12:02:375Z",
    "alert_notice_created_time_t" : 1104541266,
    "alert_rule" : {
      "caid" : "alert_rule_4",
      "tvid" : "",
      "source" : "memory%free_percent",
      "alerttype" : "less_than",
      "value" : "20",
      "priority" : "warning",
      "isactive" : true
    },
    "comments" : [
       "[20180102T15:32:55Z](admin_1) Anybody looking into this?"
    ]
  },
  "1" : {
    "aid" : "1",
    "caid" : "alert_rule_4",
    "tvid" : "server_id_1",
    "source" : "memory%free_percent",
    "users_notified" : ["user_id_5","user_id_2"],
    "resolved" : true,
    "resolved_by" : "user_id_4",
    "resolved_time" : "20170620T12:02:05Z",
    "priority" : "warning",
    "system_time_triggered" : [504925261, 504925335],
    "last_update_time" : "20170619T12:02:375Z",
    "alert_notice_created_time_t" : 504925265,
    "alert_rule" : {
      "caid" : "alert_rule_4",
      "tvid" : "",
      "source" : "memory%free_percent",
      "alerttype" : "less_than",
      "value" : "20",
      "priority" : "warning",
      "isactive" : true
    },
    "comments" : [
       "[20170620T11:50:05Z](admin_4) I got this",
       "[20170620T11:51:42Z](admin_2) Sure thing",
       "[20170620T12:02:05Z](admin_4) Fixed - just needed to restart Samba to free up a stale memory cache",
    ]
  }
}
```


### Events
Events from this change will be sent to everybody currently logged-in who has read permission for the system which triggered the alert

Example:
```
{
"namespace" : "event",
"name" : "notices/add",
"id" : "",
"args" : {
  "8" : {
    "aid" : "8",
    "caid" : "alert_rule_4",
    "tvid" : "server_id_1",
    "source" : "memory%free_percent",
    "users_notified" : ["user_id_1","user_id_2"],
    "resolved" : false,
    "resolved_by" : "",
    "resolved_time" : "",
    "priority" : "warning",
    "system_time_triggered" : [504925261],
    "last_update_time" : "20170619T12:02:375Z",
    "alert_notice_created_time_t" : 504925265,
    "alert_rule" : {
      "caid" : "alert_rule_4",
      "tvid" : "",
      "source" : "memory%free_percent",
      "alerttype" : "less_than",
      "value" : "20",
      "priority" : "warning",
      "isactive" : true
     },
    "comments" : []
    }
  }
}
```

**NOTE:** If an alert was modified in any way (such as getting marked resolved or having comments added/removed), this same event with be sent out but with the "notices/update" name instead.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "notices/add_comment" >}}
* {{< api-link "notices/set_resolved" >}}
* {{< api-link "notices/delete_comment" >}}
* {{< api-link "notices/delete" >}}
* {{< api-link "notices/create_fake" >}}
