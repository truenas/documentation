---
title: "rpc/auth_token"
menutitle: "auth_token"
description: "Websocket login procedure (token)"
pre:  "<i class='fa fa-sign-in-alt'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event |
|:----------------:|:--------:|:--------:|:--------:|:--------:|
| rpc | auth_token | N/A | N/A | N/A |

#### Description
Login to TrueCommand with a previously-provided login token. This needs to be performed within a few seconds of establishing the websocket connection, otherwise the server will close down the connection. A successful login with an auth token will automatically invalidate that token and a new token will be returned for future use again.

### Input Arguments
* Required:
   * "token" (string) : Authorization token to use
* Optional:
   * none ({})


### Request Example Arguments
```
{
  "namespace" : "rpc",
  "name" : "auth_token",
  "id" : "some_id",
  "args" : {
    "token":"long_random_auth_token"
  }
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "auth_token",
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
* {{< api-link "rpc/auth" >}}
* {{< api-link "rpc/auth_clear" >}}
* {{< api-link "rpc/query" >}}
