---
title: "alertplugins/current_settings"
pre: "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | current_settings | no | no | no | 1.1 |

#### Description
Return all the current settings for alert plugins for the current user.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "plugins" : (string or Json Array of strings) Only return the settings for these plugins.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "plugins" : "smtp-email"
}
```

### Reply Example
**NOTE:** This is just an example. The actual smtp-email configuration settings can be found with the {{< api-link "alertplugins/list" >}} API.

```
{
  "smtp-email" : {
    "mailserver" : "smtp.gmail.com",
    "mailserver_port" : 587,
    "auth_type" : "plain",
    "auth_user" : "example@example.net",
    "auth_pass" : "----",
    "from" : "no-reply@truecommand.io",
    "to" : ["example@example.net"],
    "subject" : "TrueCommand Alert Notice",
    "cc" : null,
    "bcc" : null
  }
}
```


### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item.

### Changelog
* **v2.0** : Sensitive settings (such as passwords), no longer get obfuscated in this API return. This permits confirmation of saved settings now.

#### See Also
* {{< api-link "alertplugins/list" >}}
* {{< api-link "alertplugins/current_settings" >}}
* {{< api-link "alertplugins/change_settings" >}}
