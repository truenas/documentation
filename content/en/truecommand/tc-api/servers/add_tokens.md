---
title: "servers/add_tokens"
menutitle: "add_tokens"
description: "Create authentication tokens for a system"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | add_tokens | yes | no | yes | 1.1 |

#### Description
Create authentication tokens that are associated with a specific system. These tokens may be used to submit information to TrueCommand via the "external" namespace of API calls.

NOTE: Administrator access only - all others will get a 403/Forbidden error

### Input Arguments
* Required:
   * "tvid" (string) : System ID for where to generate auth tokens
   * "name" (string or Json Array of strings) : Nickname(s) for the tokens to create. These should generally be useful for the user to remember what they were using the token for.
      *  The names given here must be unique. This API will not overwrite existing tokens if the name was already created previously.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "server_id_1",
  "names" : "token_4"
}
```

### Reply Example
```
{
  "result" : "success",
  "tokens" : {
    "token_1" : "XXXXXXXXXXXXX",
    "token_2" : "YYYYYYYYYYYYY",
    "token_3" : "ZZZZZZZZZZZZZZ",
    "token_4" : "ABCDEFGHIJKLMNOP",
  }
}
```

### Events
This API call will emit a "servers/list_tokens" event to notify other administrators of the change. See the {{< api-link "servers/list_tokens" >}} API reference for details.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/list_tokens" >}}
* {{< api-link "servers/remove_tokens" >}}
