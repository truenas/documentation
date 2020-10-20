---
title: "users/remove"
menutitle: "remove"
description: "Remove a user account"
pre: "<i class='fa fa-user'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | remove | yes | yes | yes | 1 |

#### Description
Removes a user account from TrueCommand (Administrator Access Only - others will get a 403/Forbidden error code)

### Input Arguments
* Required:
   * "uuid" (string) : User ID of the account to remove
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "uuid" : "user_id_1"
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "remove",
  "id" : "some_id",
  "args" : {
    "result" : "success"
  }
}
```

### Log Summary
Log entries for this API call will have the following "summary" object. 

```
"summary" : {
  "action" : "users/remove",
  "removed_by_username" : "admin_user",
  "removed_by_uuid" : "admin_user_uuid",
  "remove_username" : "olduser",
  "remove_uuid" : "old_user_uuid",
}
```

### Events
| Name | Who Receives |
|:--------:|:-------------------:|
| users/remove | Administrators |

Events from this change will be sent to all currently-connected administrators. If the deleted user account was associated with an active session, that connection will be automatically closed by the server.

Example:
```
{
"namespace" : "event",
"name" : "users/remove",
"id" : "",
"args" : {
  "uuid" : "user_id_1",
  "username" : "user-one"
  }
}
```

#### See Also
* {{< api-link "users/add" >}}
* {{< api-link "users/edit" >}}
* {{< api-link "users/list" >}}
