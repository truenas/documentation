---
title: "alertplugins/remove"
menutitle: "remove"
description: "Remove an Alert"
pre: "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | remove | yes | no | yes | 1.1 |

#### Description
Delete an existing alert rule

### Input Arguments
* Required:
   * "plugins" : (string or Json Array of strings) Name of the plugin(s) to remove.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "plugins" : "smtp-email"
}
```

### Reply Example
```
{
  "smtp-email" : "Text output of removal"
}
```


### Events
Events from this change will be sent to all administrators.

Example:
```
{
"namespace" : "event",
"name" : "alertplugins/list",
"id" : "",
"args" : {}
}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alertplugins/add" >}}
* {{< api-link "alertplugins/list" >}}
