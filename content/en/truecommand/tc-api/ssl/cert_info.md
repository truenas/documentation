---
title: "ssl/cert_info"
menutitle: "cert_info"
description: "View SSL cert information"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| ssl | cert_info | yes | no | no | 1 |

#### Description
View information about the current TrueCommand SSL certificate

### Input Arguments
* Required: <none>
* Optional: <none>

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {}
```

### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "using_custom_cert" : false
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "ssl/cert_import" >}}
* {{< api-link "ssl/cert_reset" >}}
