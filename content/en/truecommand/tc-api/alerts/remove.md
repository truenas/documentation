---
title: "alerts/remove"
menutitle: "remove"
description: "Remove an Alert"
pre: "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alerts | remove | no | no | yes | 1 |

#### Description
Delete an existing alert rule. The user making the request must either be an administrator, or be listed as the "owner" of the designated alert rule, otherwise the middleware will return a FORBIDDEN error code.

### Input Arguments
* Required:
   * "caid" : (string) ID of the custom alert to remove
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "caid" : "alert_rule_1"
}
```

### Reply Example
```
{
  "result" : "success"
}
```


### Events
Events from this change will be sent to all administrators and any user with read access to impacted server(s). 

Example:
```
{
"namespace" : "event",
"name" : "alerts/remove",
"id" : "",
"args" : {
  "caid" : "alert_rule_1"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alerts/add" >}}
* {{< api-link "alerts/edit" >}}
* {{< api-link "alerts/list" >}}
