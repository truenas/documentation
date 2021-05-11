---
title: "users/edit"
pre: "<i class='fa fa-user'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | edit | no | yes | yes | 1 |

#### Description
Modify an existing user account

**Note:** Non-administrators only have access to change their own password **only if LDAP authentication is not being used**. Non-admins also have permission to change some of the extra_info fields. Administrator status and allowed servers/groups will not be touched.

### Input Arguments
* Required:
   * "uuid" (string) : User ID of the account to modify
   * "verify_password" (string) : Password of the user currently making the API request.
      * Only required if the "password" of the user is to be changed.
      * Will return a FORBIDDEN error if this password cannot be used to re-verify the current user session.
      * Added in version 1.1
* Optional arguments (at least one required)
   * Administrator access only:
      * "username" (string)
      * "ldap_servers" (JsonArray of objects) : List of LDAP settings objects
         * See the {{< api-link "ldap" >}} settings page for details
      * "isAdministrator" (bool)
      * "allowed_servers" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
      * "allowed_groups" (JsonArray) : Format - [ ["id1","r/w or r"], ["id2","r/w or r"] ]  where "r"=ReadOnly and "r/w"=ReadWrite
      * "allowed_teams" (JsonArray) : Format - ["team_1", "team_2"]
      * "create_alerts" (boolean or null) : User can create alert rules (even if not an administrator). Inherits permission from teams by default.
         * If set to a null or non-boolean value, then this user will inherit permission from any associated teams.
         * Field added in version 1.1
   * Self modification (non-admin) or Administrator access:
      * "password" (string) (cannot be used if "ldap_servers" is populated)
      * "full_name" (string) : Appears in "extra_info" field
      * "email" (string) : Appears in "extra_info" field
      * "title" (string) : Appears in "extra_info" field
      * "phone_number" (string) : Appears in "extra_info" field
      * "contact_info" (string) : Appears in "extra_info" field
      * "notes" (string) : Appears in "extra_info" field
      * "icon_base64" (string) : Appears in "extra_info" field
      * "tags" (JsonArray) : Format - ["tag_1", "tag_2"]. Appears in "extra_info" field


#### Notes about "ldap_servers" and "password" inputs:
When the "ldap_servers" field is populated, the local password field will get deleted and all authentication routines will use the input password to authentication with the list of LDAP servers (starting with the first one in the list, and going down the line until it finds a "valid" login or it will consider the authentication attempt a failure).

It is possible to switch individual users to/from LDAP authentication via the following example edits:

1. Enable LDAP authentication for the given user account. This will also delete the password hash from the local database as well. Note that the "username" **MUST** match the username on file with the LDAP provider.
```
{
  "uuid" : "user_id_1",
  "ldap_servers" : "ldap02.example.com"
}
```

2. Switch from LDAP authentication back to the local password authentication
```
{
  "uuid" : "user_id_1",
  "ldap_servers" : null,
  "password" : "new_password"
}
```

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "uuid" : "user_id_1",
  "username" : "new_username",
  "ldap_servers" : "ldap01.example.com",
  "isAdministrator" : true,
  "allowed_servers" : [["server1", "r"]],
  "allowed_groups" : [["group1","r/w"]],
  "full_name" : "John Doe"
}
```

### Reply Example (Non-Administrator)
```
{
  "namespace" : "response",
  "name" : "edit",
  "id" : "some_id",
  "args" : {
    "user_id_1":{
      "uuid" : "user_id_1",
      "username" : "new_username",
      "isAdministrator" : false,
      "ldap_auth" : true,
      "extra_info" : {
        "full_name" : "John Doe"
      }
    }
  }
}
```

### Reply Example (Administrator)
```
{
  "namespace" : "response",
  "name" : "edit",
  "id" : "some_id",
  "args" : {
    "user_id_1":{
      "uuid" : "user_id_1",
      "username" : "new_username",
      "isAdministrator" : true,
      "allowed_servers" : [["server1", "r"]],
      "allowed_groups" : [["group1","r/w"]],
      "ldap_auth" : true,
      "ldap_servers" : ["ldap01.example.com"],
      "extra_info" : {
        "full_name" : "John Doe"
      }
    }
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. Note that all the summary fields that start with "new_" will only exist if that value was *changed* by the API call (the summary only lists the *changes* to the user account).

```
"summary" : {
  "action" : "users/edit",
  "edit_by_username" : "admin_user",
  "edit_by_uuid" : "admin_user_uuid",
  "edit_username" : "newuser",
  "edit_uuid" : "new_user_uuid",
  "new_username" : "newusername",
  "new_password" : "------",
  "new_isAdministrator" : false,
  "new_allowed_servers" : [["server1", "r"]],
  "new_allowed_groups" : [["group1","r/w"]],
  "new_allowed_teams" : ["team1", "team2"],
  "new_ldap_servers" : ["ldap01.example.com"],
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
|  users/edit | Administrators + User Modified |


Example:
```
{
"namespace" : "event",
"name" : "users/edit",
"id" : "",
"args" : {
  "uuid" : "user_id_1",
  "username" : "new_username"
  }
}
```

#### See Also
* {{< api-link "users/add" >}}
* {{< api-link "users/remove" >}}
* {{< api-link "users/list" >}}
