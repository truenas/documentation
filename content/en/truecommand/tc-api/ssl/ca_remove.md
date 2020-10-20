---
title: "ssl/ca_remove"
menutitle: "ca_remove"
description: "Remove a custom certificate authority file"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| ssl | ca_remove | yes | no | no | 1 |

#### Description
Remove custom certificate authority file(s).

### Input Arguments
* Required:
   * "ca_certs" : (string or JSON array of strings) Name of the certificate to remove.
* Optional:
   * none ({})

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "ca_certs" : "mycustomCA-1"
}
```

### Reply Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "result" : "success"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "ssl/ca_import" >}}
* {{< api-link "ssl/ca_list" >}}
