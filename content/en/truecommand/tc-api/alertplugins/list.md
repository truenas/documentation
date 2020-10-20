---
title: "alertplugins/list"
menutitle: "list"
description: "List all installed alert plugins"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | list | no | no | no | 1.1 |

#### Description
List all the alert provider plugins that are currently installed.

### Input Arguments
* Required Inputs: none ({})
* Optional Inputs: none ({})

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "smtp-email":{
    "name":"smtp-email",
    "summary":"Email alerts",
    "description":"Send email alerts via SMTP.",
    "icon_url":"",
    "version":"1.0",
    "date_released":"2019-07-19",
    "tags":["email","ssmtp","sendmail","plaintext"],
    "maintainer":[
      {"name":"Ken Moore","email":"ken@ixsystems.com","site_url":""},
      {"name":"iXsystems","email":"support@ixsystems.com","site_url":"http://ixsystems.com"}
    ],
    "repository":"ix-alertme",
    "depends":[
      {
      "filename":"smtp-email",
      "url":"https://raw.githubusercontent.com/iXsystems/ix-alertme/master/provider-plugins/smtp-email/smtp-email",
      "extract":false,
      "decompress":false,
      "sha256_checksum":"d2e17708e8f2e6a15b771395dbff8c5254cacffc68749455ef0394c2d02fe9fa"
      }
    ],
    "exec":"smtp-email",
    "api":[
      {
      "fieldname":"mailserver",
      "summary":"Address for the SMTP server",
      "default":null,
      "type":"string",
      "is_required":true,
      "is_array":false
      },{
      "fieldname":"mailserver_port",
      "summary":"Port number for the SMTP server",
      "default":null,
      "type":["int",1,65535],
      "is_required":true,
      "is_array":false
      },{
      "fieldname":"auth_type",
      "summary":"Type of authentication to SMTP server",
      "default":null,
      "type":["list",["plain","Username/password authentication"],["none","No authentication"] ],
      "is_required":true,
      "is_array":false
      },{
      "fieldname":"auth_user",
      "summary":"Username for plain authentication",
      "default":null,
      "type":"",
      "is_required":false,
      "is_array":false
      },{
      "fieldname":"auth_pass",
      "summary":"Password for plain authentication",
      "default":null,
      "type":"",
      "is_required":false,
      "is_array":false
      },{
      "fieldname":"from",
      "summary":"Email address to send from",
      "default":null,
      "type":["regex","[^@]+@[.]+"],
      "is_required":true,
      "is_array":false
      },{
      "fieldname":"to",
      "summary":"Email addresses to send to",
      "default":null,
      "type":["regex", "[^@]+@[.]+"],
      "is_required":true,
      "is_array":true
      },{
      "fieldname":"cc",
      "summary":"Email addresses to carbon-copy to",
      "default":null,
      "type":["regex","[^@]+@[.]+"],
      "is_required":false,
      "is_array":true
      },{
      "fieldname":"bcc",
      "summary":"Email addresses to blind-carbon-copy to",
      "default":null,
      "type":["regex","[^@]+@[.]+"],
      "is_required":false,
      "is_array":true
      },{
      "fieldname":"subject",
      "summary":"Subject line for the email",
      "default":null,
      "type":"",
      "is_required":true,
      "is_array":false
      }
    ]
  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alertplugins/add" >}}
* {{< api-link "alertplugins/remove" >}}
