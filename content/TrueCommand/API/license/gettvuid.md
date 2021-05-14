---
title: "license/getvuid"
pre: "<i class='fas fa-newspaper'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| license | gettvid| no | no | no | 1 |

#### Description
Return the unique system ID for the TrueCommand instance.

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

### Reply Example:
```
{
  "system_id" : "my_unique_system_id",
}
```

### Events
This API call does not emit any middleware events.

### Log Summary

#### See Also
* {{< api-link "license/info" >}}
* {{< api-link "license/register" >}}
