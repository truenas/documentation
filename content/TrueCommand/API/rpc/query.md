---
title: "rpc/query"
pre: "<i class='fa fa-question'></i>	"
draft: false
chapte: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event |
|:----------------:|:--------:|:--------:|:--------:|:--------:|
| rpc | query | N/A | N/A | N/A |

#### Description
List all the available systems/subsystems that the user can interact with.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
```
{
  "namespace" : "rpc",
  "name" : "query",
  "id" : "some_id",
  "args" : {}
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "query",
  "id" : "some_id",
  "args" : {
    "rpc": ["auth","auth_token","auth_clear","query"]
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "rpc/auth" >}}
* {{< api-link "rpc/auth_token" >}}
* {{< api-link "rpc/auth_clear" >}}
