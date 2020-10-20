---
title: "teams/remove"
menutitle: "remove"
description: "Remove a Team"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| team | remove | yes | yes | yes | 1 |

#### Description
Remove a team. (Administrator Access Only - others will get a 403/Forbidden error code).

### Input Arguments
* "ugid" (string) : ID of the team (user group) to be removed.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "ugid" : "my_team-1"
}
```

### Reply Example
```
{
  "result" : "success"
}
```

### Events
Events from this change will be sent to all currently-connected administrators and any user with read access to the new server (such as from adding a server to an existing group).

Example:
```
{
"namespace" : "event",
"name" : "teams/remove",
"id" : "",
"args" : {
  "ugid" : "my_team-1",
  "name" : "My Team"
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that empty fields from the input arguments (icon_base64, allowed_servers, allowed_groups) will result in those fields getting excluded from the summary as well (the summary only lists the *changes*).

```
"summary" : {
  "action" : "teams/remove",
  "removed_by_username" : "admin_user",
  "removed_by_uuid" : "admin_user_uuid",
  "remove_name" : "My Team",
  "remove_ugid" : "my_team-1",
}
```

#### See Also
* {{< api-link "teams/add" >}}
* {{< api-link "teams/edit" >}}
* {{< api-link "teams/list" >}}
