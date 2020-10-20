---
title: "users/list"
menutitle: "list"
description: "List known users"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | list | no | yes | no | 1 |

#### Description
List user information.
If currently logged-in with an administrator account, this will show all info about all users, otherwise only the basic info about the current user account will be returned

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "users" (string or array of strings) : If the "users" argument is supplied by an administrator account, it will limit the return list of information to the users specified.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example (Non-admin request)
```
{
  "namespace" : "",
  "name" : "",
  "id" : "some_id",
  "args" : {
    "current_user_id":{
      "uuid" : "current_user_id",
      "username" : "myuser",
      "isAdministrator" : false,
      "is_active" : true
    }
  }
}
```

### Reply Example (Admin request)
```
{
  "namespace" : "",
  "name" : "",
  "id" : "some_id",
  "args" : {
    "user_id_1":{
      "uuid" : "user_id_1",
      "username" : "user1",
      "isAdministrator" : false,
      "is_active" : true,
      "allowed_servers" : [["server1", "r/w"], ["server2", "r"]],
      "allowed_groups" : [["group1", "r"], ["group2", "r"]],
      "create_alerts" : false,
      "extra_info" : {
        "full_name" : "SysAdmin 1",
        "email" : "sysadmin1@somewhere.net"
      }
    }
    "user_id_2":{
      "uuid" : "user_id_2",
      "username" : "user2",
      "isAdministrator" : true,
      "allowed_servers" : [["server1", "r/w"], ["server2", "r/w"]],
      "allowed_groups" : [["group1", "r/w"], ["group2", "r/w"]]
      "create_alerts" : null,
      "extra_info" : {
        "phone_number" : "123-456-7890",
        "email" : "sysadmin2@somewhere.net"
      }
    }
  }
}
```
* The "extra_info" object corresponds to any extra/optional information that was added for this user (may be an empty object if no extra information has been saved).


### Log Summary
This API call does not generate a detailed log summary item


### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "users/list_active" >}}
