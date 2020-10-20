---
title: "teams/add"
menutitle: "add"
description: "Create a new team"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| teams | add | yes | yes | yes | 1 |

#### Description
Create a new team (Administrator Access Only - others will get a 403/Forbidden error code).

### Input Arguments
* Required Arguments:
   * "name" (string) : Name of the team (must be unique - will return an error if a team with that name already exists).
* Optional Arguments:
   * "allowed_servers" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
   * "allowed_groups" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
   * "icon_base64" (string) : Base64-encoded icon file that can be used to represent the team.
   * "tags" (JsonArray) : Search tags, Format - ["tag_1", "tag_2"].
   * "create_alerts" (boolean) : Team members are allows to create alert rules (default value: false)
      * Field added in version 1.1

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "name" : "My Team"
}
```

### Reply Example
```
{
  "result" : "success",
  "ugid" : "new_team_ugid",
  "name" : "My Team"
}
```

### Events
Events from this change will be sent to all currently-connected administrators and any user with read access to the new server (such as from adding a server to an existing group).

Example:
```
{
"namespace" : "event",
"name" : "teams/add",
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
  "action" : "teams/add",
  "created_by_username" : "admin_user",
  "created_by_uuid" : "admin_user_uuid",
  "new_name" : "My Team",
  "new_ugid" : "my_team-1",
  "allowed_servers" : [["server_id_1","r/w"], ["server_id_2","r"]],
  "allowed_groups" : [["group_1","r"], ["group_2","r/w"]]
}
```

#### See Also
* {{< api-link "teams/edit" >}}
* {{< api-link "teams/list" >}}
* {{< api-link "teams/remove" >}}
