---
title: "rpc/auth"
menutitle: "auth"
description: "Websocket login procedure (username/password)"
pre: "<i class='fa fa-sign-in-alt'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event |
|:----------------:|:--------:|:--------:|:--------:|:--------:|
| rpc | auth | N/A | N/A | N/A |

#### Description
Login to TrueCommand with a username and password. This needs to be performed within a few seconds of establishing the websocket connection, otherwise the server will close down the connection.

### Input Arguments
* Required:
   * "username" (string) : Name of the user to login
   * "password" (string) : Password associated with the specified user
* Optional:
   * none ({})


### Request Example Arguments
```
{
  "namespace" : "rpc",
  "name" : "auth",
  "id" : "some_id",
  "args" : {
    "username":"myuser",
    "password":"mypassword"
  }
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "auth",
  "id" : "some_id",
  "args" : {
    "args" : ["long_random_auth_token", 900, "user_uuid"]
  }
}
```
The arguments returned are:
   * [0]: Authentication token which can be used to automatically re-connect to the middleware
   * [1]: Time (in seconds) that must pass without any communication from the client before the token gets invalidated.
   * [2]: The current user's UUID.

### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "rpc/auth_token" >}}
* {{< api-link "rpc/auth_clear" >}}
* {{< api-link "rpc/query" >}}
