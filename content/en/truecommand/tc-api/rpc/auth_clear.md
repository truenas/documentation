---
title: "rpc/auth_clear"
menutitle: "auth_clear"
description: "Websocket logout procedure"
pre: "<i class='fa fa-sign-out-alt'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event |
|:----------------:|:--------:|:--------:|:--------:|:--------:|
| rpc | auth_clear | N/A | N/A | N/A |

#### Description
Logout of an existing session. This will invalidate any existing auth tokens for the user session and close down the websocket connection.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
```
{
  "namespace" : "rpc",
  "name" : "auth_clear",
  "id" : "some_id",
  "args" : {}
}
```

### Reply Example
There is no reply. The server responds by closing the websocket connection after invalidating any outstanding auth tokens and closing the current session (nearly-instant action).

### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "rpc/auth" >}}
* {{< api-link "rpc/auth_token" >}}
* {{< api-link "rpc/query" >}}
