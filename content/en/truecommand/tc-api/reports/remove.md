---
title: "reports/remove"
pre: "<i class='fa fa-minus-square'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | remove | No | Yes | reports/list | 1.1 |

#### Description
Remove a custom report. You must be listed as either an "owner" on the report or a TrueCommand administrator otherwise this action will return a "FORBIDDEN" error code.

### Input Arguments
* Required:
   * "roid" (string or array of strings) : Report Object ID (roid) corresponding to the report(s) that need to be removed.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "roid" : ["1", "5"]
}
```

### Reply Example
```
{
  "namespace" : "reports",
  "name" : "response",
  "id" : "some_id",
  "args" : {
    "result" : "success"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
This will generate a {{< api-link "reports/list" >}} API event.

#### See Also
* {{< api-link "reports/add" >}}
* {{< api-link "reports/edit" >}}
* {{< api-link "reports/list" >}}
