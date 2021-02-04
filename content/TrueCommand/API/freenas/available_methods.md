---
title: "freenas/available_methods"
pre: "<i class='fa fa-terminal'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| freenas | available_methods | N/A | N/A | N/A | 1 |

#### Description
Returns a list of all the supported FreeNAS API methods which can be used for the "freenas/send_method" API call.
This will return all the known/supported methods as well as the permission level required in order to use it.

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
  "methods" : {
    "disk.decrypt" : "r/w",
    "disk.get_encrypted" : "r",
    "disk.get_unused" : "r",
    "disk.query" : "r",
    "disk.update" : "r/w",
    "disk.wipe" : "r/w"
  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "freenas/send_method" >}}
