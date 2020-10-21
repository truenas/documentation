---
title: "license/info"
pre: "<i class='fas fa-newspaper'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| license | info | yes | no | no | 1 |

#### Description
Return the information contained within the current license

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})

NOTE: The full license info will probably be more expansive than the example here (vendor/licensee info, etc).

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "license" : {
    "contact" : {
      "sales_email" : "sales@ixsystems.com",
      "sales_phone" : "1-408-943-4100",
      "support_email" : "support@ixsystems.com",
      "support_phone" : "1-408-943-4100"
    },
    "license" : {
      "id" : "default_tv_id",
      "name" : "Default License",
      "system_id" : ""
    },
    "limits" : {
      "max_disks" : 50
    }
  },
  "current_disks" : 10,
  "current_systems" : 3
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "license/register" >}}
* {{< api-link "license/gettvuid" >}}
* {{< api-link "license/check" >}}
