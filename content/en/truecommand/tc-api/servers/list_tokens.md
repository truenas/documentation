---
title: "servers/list_tokens"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | list_tokens | yes | no | no | 1.1 |

#### Description
List all the current authentication tokens which are associated with a specific system.
These are tokens that may be used to submit system information via the  "external" namespace of API calls, and are associated with a specific system registration.

NOTE: Administrator access only - non-administrators will receive a 403/Forbidden error

### Input Arguments
* Required:
   * "tvid" (string) : System ID for which to return current auth tokens
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "system_id_1"
}
```

### Reply Example
```
{
  "tokens" : {
    "token_1" : "XXXXXXXXXXXXX",
    "token_2" : "YYYYYYYYYYYYY",
    "token_3" : "ZZZZZZZZZZZZZZ"
  }
}
```

### Events
This API call does not emit any middleware events of it's own. Any modification of the available tokens will emit a "servers/list_tokens" event to notify other administrators of the change.

```
{
"namespace" : "event",
"name" : "servers/list_tokens",
"id" : "",
"args" : {
  "tvid" : "system_id_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "servers/add_tokens" >}}
* {{< api-link "servers/remove_tokens" >}}
