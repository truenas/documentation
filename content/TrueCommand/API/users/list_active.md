---
title: "users/list_active"
pre: "<i class='fa fa-users'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | list_active | yes | no | no | 1 |

#### Description
List all currently-active user sessions (Administrator Access Only - others will get a 403/Forbidden error code)
The output reply contains all users with active sessions, as well as the number of active sessions for each user

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "list_active",
  "id" : "some_id",
  "args" : {
    "list_active":{
      "user1" : 1,
      "user2" : 2
    }
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item


### Events
General users/list_active events will be sent out any time a user logs into or out of the middleware. 

| Name | Who Receives |
|:--------:|:-------------------:|
|  users/list_active | Everyone |


Example:
```
{
"namespace" : "event",
"name" : "users/list_active",
"id" : "",
"args" : {}
}
```

#### See Also
* {{< api-link "users/list" >}}
* {{< api-link "rpc/auth_clear" >}}
