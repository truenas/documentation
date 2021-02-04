---
title: "teams/list"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| teams | list | no | no | no | 1 |

#### teams/list
List all the currently-defined teams and the associated permission sets.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})

Note: The "allowed_servers", "allowed_groups", and "team_members" fields will only be visible when this API is used by an administrator.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
}
```

### Reply Example (administrator access)
```
{
  "team_1" : {
    "ugid" : "team_1",
    "name" : "Test Team 1",
    "allowed_servers" : [["server_id_1","r/w"], ["server_id_2", "r"]],
    "allowed_groups" : [["group_1","r/w"], ["group_2", "r"]],
    "create_alerts" : false,
    "team_members" : {
      "user_id_1":{
        "uuid" : "user_id_1",
        "username" : "user1",
        "isAdministrator" : false,
        "extra_info" : {
          "full_name" : "SysAdmin 1",
          "email" : "sysadmin1@somewhere.net"
        }
      },
      "user_id_2":{
        "uuid" : "user_id_2",
        "username" : "user2",
        "isAdministrator" : false,
        "extra_info" : {
          "full_name" : "SysAdmin 2",
          "email" : "sysadmin2@somewhere.net"
        }
      }
    },
    "icon_base64" : "base64_string_of_icon"
  },
  "team_2" : {
    "ugid" : "team_2",
    "name" : "Test Team 2",
    "allowed_servers" : [["server_id_1","r/w"], ["server_id_2", "r"]],
    "allowed_groups" : [["group_4","r/w"], ["group_5", "r"]],
    "create_alerts" : true,
    "team_members" : {
      "user_id_5":{
        "uuid" : "user_id_5",
        "username" : "user5",
        "isAdministrator" : false,
        "extra_info" : {
          "full_name" : "SysAdmin 5",
          "email" : "sysadmin5@somewhere.net"
        }
      },
      "user_id_2":{
        "uuid" : "user_id_2",
        "username" : "user2",
        "isAdministrator" : false,
        "extra_info" : {
          "full_name" : "SysAdmin 2",
          "email" : "sysadmin2@somewhere.net"
        }
      }
    },
    "icon_base64" : "base64_string_of_icon"
  }
}```
```

### Reply Example (non-administrator access)
```
{
  "team_1" : {
    "ugid" : "team_1",
    "name" : "Test Team 1",
    "icon_base64" : "base64_string_of_icon"
  },
  "team_2" : {
    "ugid" : "team_2",
    "name" : "Test Team 2",
    "icon_base64" : "base64_string_of_icon"
  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "teams/add" >}}
* {{< api-link "teams/edit" >}}
* {{< api-link "teams/remove" >}}
