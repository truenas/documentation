---
title: "reports/list"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Has Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | list | No | No | Yes | 1.1 |

#### Description
This will list all the reports where the current user is tagged as an "owner" of the repo, or any reports that are shared with the current user. For specific details about the formatting of the report "widgets" object, please view the 

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
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
    "read_only" : {
      "internal-3" : {
        "roid" : "internal-3",
        "name" : "Internal Report",
        "owners" : [ "user_id_1"],
        "shared_users" : ["user_id_4", "all"],
        "shared_teams" : ["team_id_3"],
        "last_modified_user" : "user_id_1",
        "last_modified_time_t" : 1562075297,
        "widgets" : { <report details here> }
      }
    },
    "read_write" : {
      "5" : {
        "roid" : "5",
        "name" : "My Sample Report",
        "owners" : [ "user_id_1"],
        "shared_users" : ["user_id_4"],
        "shared_teams" : ["team_id_3"],
        "last_modified_user" : "user_id_1",
        "last_modified_time_t" : 1562075297,
        "widgets" : { <report details here> }
      }
    }
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This this API call does not emit any middleware events by itself, many of the other reports API calls will emit a reports/list event when they change the number of available reports in some way. The format for this event is included below.

Example:
```
{
  "namespace" : "event",
  "name" : "reports/list",
  "id" : "event",
  "args" : {
    "roid" : ["1"]
  }
}
```

#### See Also
* {{< api-link "reports/add" >}}
* {{< api-link "reports/edit" >}}
* {{< api-link "reports/remove" >}}
