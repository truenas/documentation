---
title: "alertplugins/check_updates"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | check_updates | no | no | no | 1.1 |

#### Description
Scan all the installed notification plugins and see if any updates are available. This returns an object of plugins where the remote version is newer than the locally-installed version.

### Input Arguments
* Required Inputs: none ({})
* Optional Inputs: none ({})

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
The information returned here is only the plugin information from the remote repository where the remote plugin has a newer release date than the currently-installed plugin.

```
{
  "smtp-email": {
    "name":"smtp-email",
    "summary":"Email alerts",
    "description":"Send email alerts via SMTP.",
    "icon_url":"",
    "version":"1.0",
    "date_released":"2019-07-19",
    "repository":"ix-alertme",
    "tags":["email","ssmtp","sendmail","plaintext"]
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
* {{< api-link "alertplugins/update" >}}
