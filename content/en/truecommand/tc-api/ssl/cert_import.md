---
title: "ssl/cert_import"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| ssl | cert_import | yes | no | no | 1 |

#### Description
Import a custom SSL certificate to be used for the TrueCommand web interface.

### Input Arguments
* Required:
   * "pem" : (string) Certificate contents (must be in PEM format)
   * "key" : (string) Key contents (must be in RSA/PEM format without a passphrase).
* Optional:
   * "pem_as_base64" : (boolean) The "pem" string is provided in base64-encoded format (default: false).
   * "key_as_base64" : (boolean) The "key" string is provided in base64-encoded format (default: false).


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
"args" : {
  "pem" : "ASFIJBGIOUWSKLDFGJBNSDF:GJBNBGSDFIVU54394785SDIGHB",
  "pem_as_base64" : true,
  "key" : "SZGFJISBEGILUWSGELIFUBIUGBSILUDGBGLRKS",
  "key_as_base64" : true
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
* {{< api-link "ssl/cert_reset" >}}
* {{< api-link "ssl/cert_info" >}}
