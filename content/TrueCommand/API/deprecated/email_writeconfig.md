---
title: "email/writeconfig"
pre: "<i class='fa fa-envelope'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| email | writeconfig | yes | yes | yes | 1 (Removed in 1.2) |

{{% pageinfo %}}
This API namespace was depricated in version 1.1, and removed in version 1.2. 
Please look at the alertplugins/* API namespace for the repacement for this functionality.
{{% /pageinfo %}}

#### Description
Write SSMTP Configuration.

### Input Arguments
* Required:
   * "rootaddress" (String) : This email address will appear in the "From" field of email alerts.
   * "mailserver" (String) : The address to contact for email submissions (Example: "smtp.gmail.com").
   * "port" (String) : The port number to use when contacting the mail server (Example: "587").
   * "security" (String) ("TLS" or "STARTTLS" or "TLS+STARTTLS")
   * "AuthUser" (String) : The Username to use when connecting to the mailserver.
   * "AuthPass" (String) : The Password to use when connecting to the mailserver.
   * "AuthMethod" (String) : The type of authentication to mailserver ("LOGIN" is standard username/password).


### Request Example Arguments
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
