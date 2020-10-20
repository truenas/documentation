---
title: "sys/list_config"
menutitle: "list_config"
description: "View the current system configuration settings"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys | list_config | yes | no | no | 1 |

#### Description
View the current system configuration settings. See the {{< api-link "sys/set_config" >}} API for all the possible settings.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "config" : {
    "server_polling_seconds" : 20,
    "ssl_accept_hostmismatch" : true,
    "ssl_accept_selfsigned" : true,
    "stats_keep_months" : 24
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "sys/set_config" >}}
