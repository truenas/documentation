---
title: "email/deleteconfig"
menutitle: "deleteconfig"
description: "Delete ssmtp configuration"
pre: "<i class='fa fa-envelope'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| email | deleteconfig | yes | yes | yes | 1 (Removed in 1.2) |

{{% pageinfo %}}
This API namespace was depricated in version 1.1, and removed in version 1.2. 
Please look at the alertplugins/* API namespace for the repacement for this functionality.
{{% /pageinfo %}}

#### Description
Delete SSMTP Configuration

### Input Arguments
* Required:
   * none ({})


### Request Example Arguments
```
{
  "namespace" : "email",
  "name" : "deleteconfig",
  "id" : "some_id",
  "args" : {
  }
}
```



### Reply Example
```
{
  "namespace" : "email",
  "name" : "response",
  "id" : "some_id",
  "args" : {
    "result" : "success"
  }
}
```
