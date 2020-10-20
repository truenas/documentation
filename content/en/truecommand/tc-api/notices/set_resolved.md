---
title: "notices/set_resolved"
menutitle: "set_resolved"
description: "Mark Notice Resolved"
pre: "<i class='fa fa-flag'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| notices | set_resolved | no | no | yes | 1 |

#### Description
Mark an alert notice as resolved, and optionally add a comment about why.

### Input Arguments
* Required inputs:
   * "aid" : (string or JSON Array of strings) ID(s) for the alert notice to resolve
* Optional inputs:
   * "comment" : (string) Text to add as a comment about why the alert was resolved


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "aid" : "1",
  "comment" : "Fixed - just needed to restart Samba to free up a stale memory cache"
}
```

### Reply Example
```
{
  "1" : {
    "aid" : "1",
    "caid" : "alert_rule_4",
    "tvid" : "server_id_1",
    "source" : "memory%free_percent",
    "resolved" : true,
    "resolved_by" : "user_id_4",
    "resolved_time" : "20170620T12:02:05Z",
    "priority" : "warning",
    "system_time_triggered" : [504925261]
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
Events from this change will be sent to all administrators and any user with read access to impacted server(s).

Example:
```
{}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "notices/list" >}}
* {{< api-link "notices/add_comment" >}}
* {{< api-link "notices/delete_comment" >}}
* {{< api-link "notices/delete" >}}
* {{< api-link "notices/create_fake" >}}
