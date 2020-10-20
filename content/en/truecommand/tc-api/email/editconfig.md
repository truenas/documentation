---
title: "email/editconfig"
menutitle: "editconfig"
description: "Edit ssmtp configuration"
pre: "<i class='fa fa-envelope'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| email | editconfig | yes | yes | yes | 1 (Removed in 1.2) |

{{% pageinfo %}}
This API namespace was depricated in version 1.1, and removed in version 1.2. 
Please look at the alertplugins/* API namespace for the repacement for this functionality.
{{% /pageinfo %}}

#### Description
Configure SSMTP

### Input Arguments
* Required:
   * "rootaddress" (String)
   * "mailserver" (String)
   * "port" (String)
   * "security" (String) ("TLS" or "STARTTLS" or "TLS+STARTTLS")
   * "AuthUser" (String)
   * "AuthPass" (String)
   * "AuthMethod" (String)


### Configuration of SSMTP 
```
{
  "namespace" : "email",
  "name" : "writeconfig",
  "id" : "some_id",
  "args" : {
     "rootaddress" : "email@domain.com",
     "mailserver" : "smtp.domain.com",
     "port" : "587",
     "security" "TLS+STARTTLS",
     "AuthUser" "useraddress",
     "AuthPass" "userpass",
     "AuthMethod" : "LOGIN"
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
