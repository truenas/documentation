---
title: "ssl/ca_import"
menutitle: "ca_import"
description: "Import a custom certificate authority file"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| ssl | ca_import | yes | no | no | 1 |

#### Description
Import a custom certificate authority (CA) certificate which will be accepted for all NAS connections.

If the "name" matches an already existing custom CA, then that CA file will be overwritten with the new contents.

### Input Arguments
* Required:
   * "name" : (string) internal name for the CA certificate
   * "pem" : (string) Certificate contents (must be in PEM format)
* Optional:
   * "pem_as_base64" : (boolean) The "pem" string is provided in base64-encoded format (default: false).


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "name" : "mycustomCA-1"
  "pem" : "ASFIJBGIOUWSKLDFGJBNSDF:GJBNBGSDFIVU54394785SDIGHB",
  "pem_as_base64" : true
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
* {{< api-link "ssl/ca_list" >}}
* {{< api-link "ssl/ca_remove" >}}
