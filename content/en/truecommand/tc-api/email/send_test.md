---
title: "email/send_test"
menutitle: "send_test"
description: "Send a test email"
pre: "<i class='fa fa-envelope'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| email | send_test | Yes | No | No | 1 (Removed in 1.2) |

{{% pageinfo %}}
This API namespace was depricated in version 1.1, and removed in version 1.2. 
Please look at the alertplugins/* API namespace for the repacement for this functionality.
{{% /pageinfo %}}

#### Description
Send a test email to a designated address. This can be used for verifying that the system email configuration is setup properly and functional.

### Input Arguments
* Required:
   * "to" (String) or (JsonArray) : Email address(es) to send the test email to.


### Request Example Arguments for single recipiant 
```
{
  "namespace" : "email",
  "name" : "send_test",
  "id" : "some_id",
  "args" : {
    "to" : "address_1@domain.com"
  }
}
```

### Request Example Arguments for multiple recipiants 
```
{
  "namespace" : "email",
  "name" : "send_test",
  "id" : "some_id",
  "args" : {
    "to" : ["address_1@domain.com" , "address_2@domain.com"]
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
