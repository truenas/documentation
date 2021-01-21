---
title: "users/add"
pre: "<i class='fa fa-user'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | add | yes | yes | yes | 1 |

#### Description
Add a new user account to TrueCommand (Administrator Access Only - others will get a 403/Forbidden error code)

### Input Arguments
* Required:
   * "username" (string)
   * "isAdministrator" (bool)
   * Exactly **one** of the following options:
      * "password" (string) : Provide a local-system password for this user
      * "ldap_servers" (JsonArray of objects) : Authenticate with an LDAP server. Object details below:
         * "server" (string, Required) : IP or DNS name of the LDAP server
         * "user" (string, optional) : Username to try when validating the connection to the LDAP server (will use the account username by default)
         * "domain" (string, optional) : Append @<domain> to the username before attempting the LDAP connection.
* Optional:
   * "allowed_servers" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
   * "allowed_groups" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
   * "allowed_teams" (JsonArray) : Format - ["team_1", "team_2"]
   * "full_name" (string) : Appears in "extra_info" field
   * "email" (string) : Appears in "extra_info" field
   * "title" (string) : Appears in "extra_info" field
   * "phone_number" (string) : Appears in "extra_info" field
   * "contact_info" (string) : Appears in "extra_info" field
   * "notes" (string) : Appears in "extra_info" field
   * "icon_base64" (string) : Appears in "extra_info" field
   * "tags" (JsonArray) : Format - ["tag_1", "tag_2"]. Appears in "extra_info" field
   * "create_alerts" (boolean or null) : User can create alert rules (even if not an administrator). Inherits permission from teams by default.
      * If set to a null or non-boolean value, then this user will inherit permission from any associated teams.
      * Field added in version 1.1


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "username" : "newuser",
  "password" : "mypassword",
  "isAdministrator" : false,
  "allowed_servers" : [["server1", "r"]],
  "allowed_groups" : [["group1","r/w"]],
  "full_name" : "John Doe"
}
```

### Reply Example Arguments
```
{
  "result" : "success",
  "uuid" : "new_user_uuid"
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that empty fields from the input arguments (servers, groups, teams) will result in those fields getting excluded from the summary as well (the summary only lists the *changes* to the user account).

```
"summary" : {
  "action" : "users/add",
  "created_by_username" : "admin_user",
  "created_by_uuid" : "admin_user_uuid",
  "isAdministrator" : false,
  "new_username" : "newuser",
  "new_uuid" : "new_user_uuid",
  "allowed_servers" : [["server1", "r"]],
  "allowed_groups" : [["group1","r/w"]],
  "allowed_teams" : ["team1", "team2"]
  "new_extra_info" :{
    "new_full_name" : "John Doe",
    "new_email" : "john.doe@myuniversity.com",
    "new_title" : "SysAdmin - Physics Department",
    "new_phone_number" : "1-123-456-7890 x123",
    "new_contact_info" : "address, office#, etc..",
    "new_notes" : "Additional notes about this user"
  }
}
```

### Events
| Name | Who Receives |
|:--------:|:-------------------:|
|  users/add | Administrators |


Example:
```
{
"namespace" : "event",
"name" : "users/add",
"id" : "",
"args" : {
  "uuid" : "new_user_uuid",
  "username" : "newuser"
  }
}
```

#### See Also
* {{< api-link "users/remove" >}}
* {{< api-link "users/edit" >}}
* {{< api-link "users/list" >}}
