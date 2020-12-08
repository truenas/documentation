---
title: "alertplugins/update"
pre: "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | update | yes | no | yes | 1.1 |

#### Description
Update an existing alert notification plugin.

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
  "smtp-email" : "Text output of update procedure"
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
* {{< api-link "alertplugins/check_updates" >}}
