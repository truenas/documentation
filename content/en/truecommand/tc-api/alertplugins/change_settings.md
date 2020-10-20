---
title: "alertplugins/change_settings"
menutitle: "change_settings"
description: "Change the settings for alert plugins"
pre : "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | change_settings | no | no | no | 1.1 |

#### Description
Modify the settings for alert plugins. Note that each plugin's settings are managed independently of each other, but must be updated in bulk (all of the settings for a single plugin must be submitted at the same time, even of some of those settings are unchanged from previous).

To disable a plugin just submit a null value for the plugin object.

### Input Arguments
* Required:
   * "[plugin-name]" (Json Object) : Settings object for the listed plugin.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

This will configure the "smtp-email" plugin while also disabling the "Plugin_A" plugin. Any current settings for other plugins will be untouched.

```
{
  "smtp-email" : {
    "mailserver" : "smtp.gmail.com",
    "mailserver_port" : 587,
    "auth_type" : "plain",
    "auth_user" : "example@example.net",
    "auth_pass" : "MySamplePassword01",
    "from" : "no-reply@truecommand.io",
    "to" : ["example@example.net"],
    "subject" : "TrueCommand Alert Notice",
    "cc" : null,
    "bcc" : null
  },
  "Plugin_A" : null
}
```

### Reply Example
```
{
  "result" : "success"
}
```


### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "alertplugins/add" >}}
* {{< api-link "alertplugins/list" >}}
* {{< api-link "alertplugins/current_settings" >}}
