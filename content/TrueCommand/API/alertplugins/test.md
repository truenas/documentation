---
title: "alertplugins/test"
pre: "<i class='fa fa-bell'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| alertplugins | test | no | no | no | 1.1 |

#### Description
This will send a test alert to the current user. An individual plugin can be specified or the test can be sent through all configured plugins for the current user.

### Input Arguments
* Required Inputs: 
   * "plugin" (string) : Name of a single plugin to test.
* Optional Inputs:
   * "settings" (JSON Object) : Custom settings object to use for the test instead of using the currently-saved configuration for the user.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "plugin" : "smtp-email"
}
```

### Reply Example
```
{
  "result" : "Error/Confirmation message for the test"
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item.


### Changelog
* **v2.0** : "plugin" input argument moved from optional to required.

#### See Also
* {{< api-link "alertplugins/list" >}}
* {{< api-link "alertplugins/current_settings" >}}
* {{< api-link "alertplugins/change_settings" >}}
