---
title: "teams/edit"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| teams | edit | yes | yes | yes | 1 |

#### Description
Modify an existing team. Any user accounts associated with this team will automatically transition to the modified permissions or team name without any further action in the user account settings. (Administrator Access Only - others will get a 403/Forbidden error code).

### Input Arguments
* Required Arguments:
   * "ugid" (string) : ID of the team (user group) to be modified.
* Optional Arguments:
   * "name" (string) : Name of the team (must be unique - will return an error if a team with that name already exists).
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
  "ugid" : "my_team-1"
  "name" : "My New Team Name",
  "icon_base64" : "new_base64_icon_contents"
}
```

### Reply Example
```
{
  "result" : "success"
}
```

### Events
Events from this change will be sent to all currently-connected administrators

Example:
```
{
"namespace" : "event",
"name" : "teams/remove",
"id" : "",
"args" : {
  "ugid" : "my_team-1",
  "name" : "My New Team Name"
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that empty fields from the input arguments (name, icon_base64, allowed_servers, allowed_groups) will result in those fields getting excluded from the summary as well (the summary only lists the *changes* via the "new_*" fields).

```
"summary" : {
  "action" : "teams/edit",
  "edit_by_username" : "admin_user",
  "edit_by_uuid" : "admin_user_uuid",
  "edit_name" : "My Team",
  "edit_ugid" : "my_team-1",
  "new_name" : "My New Team Name",
  "new_icon_base64" : "new_base64_icon_contents"
}
```

#### See Also
* {{< api-link "teams/add" >}}
* {{< api-link "teams/list" >}}
* {{< api-link "teams/remove" >}}
