---
title: "uilogs/clear"
menutitle: "clear"
description: "Delete all UI log records"
pre: "<i class='fa fa-archive'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| uilogs | clear | no | no | no | 1 |

#### Description
Remove all UI log records from the database.

### Input Arguments
* Required Arguments: none ({})

### Reply Example
```
{
  "result" : "success",
  "total_removed" : 12
}
```

### Events
This API call does not generate events.

### Log Summary
This API call does not generate a detailed log summary item.


#### See Also
* {{< api-link "uilogs/list" >}}
* {{< api-link "uilogs/add" >}}
