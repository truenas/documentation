---
title: "sys/info"
pre: "<i class='fa fa-cogs'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys | info | no | no | no | 1 |

#### Description
Return general information about the system itself

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "system_id" : "my_unique_system_id",
  "system_version" : "2.0",
  "middleware_version" : "2.0-20210426",
  "online_docs_url" : "http://www.truenas.com/docs/truecommand"
}
```

### Events
This API call does not emit any middleware events.

### Log Summary

#### See Also
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/version_info" >}}
