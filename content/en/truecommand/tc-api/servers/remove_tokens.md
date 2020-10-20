---
title: "servers/remove_tokens"
menutitle: "remove_tokens"
description: "Remove authentication tokens"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | remove_tokens | yes | no | yes | 1.1 |

#### Description
Remove special access tokens from server registrations.

NOTE: Administrator access only - all others will get a 403/Forbidden error

### Input Arguments
* Required:
   * "tvid" (string) : System ID where the auth token needs to be removed
   * "name" (string or Json Array of strings) : Name(s) of the tokens to remove
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "server_id_1",
  "names" : ["token_1", "token_2"]
}
```


### Reply Example
```
{
  "result" : "success",
  "tokens" : {
    "token_3" : "XXXXXXXXXXXXX"
  }
}
```

### Events
This API call will emit a "servers/list_tokens" event to notify other administrators of the change. See the {{< api-link "servers/list_tokens" >}} API reference for details.

## Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/add_tokens" >}}
* {{< api-link "servers/list_tokens" >}}
