---
title: "license/check"
menutitle: "check"
description: "Check License Restrictions"
pre: "<i class='fas fa-newspaper'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| license | check | no | no | yes | 1 |

#### Description
Check whether the current license is expired or already reached.

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
  "disks_over_limit" : false,
  "license_expired" : false
}
```

### Events
Any licensing changes will generate a "license/check" event which will be sent out to all connected users.

Example:
```
{
"namespace" : "event",
"name" : "license/check",
"id" : "",
"args" : {}
}
```

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "license/register" >}}
* {{< api-link "license/info" >}}
