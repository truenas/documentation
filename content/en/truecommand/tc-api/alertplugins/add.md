---
title: "alertplugins/add"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | add | yes | no | yes | 1.1 |

#### Description
Create a new alert rule

### Input Arguments
* Required Inputs:
   * "plugins" : (string or JsonArray of strings) Name of the plugin(s) to install.

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
  "smtp-email" : "Text of installation process"
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
* {{< api-link "alertplugins/list" >}}
* {{< api-link "alertplugins/remove" >}}
