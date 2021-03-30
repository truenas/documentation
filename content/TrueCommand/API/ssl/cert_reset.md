---
title: "ssl/cert_reset"
pre: "<i class='fa fa-wrench'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| ssl | cert_reset | yes | no | no | 1 |

#### Description
Remove any custom SSL certificate for TrueCommand itself and replace it with the automatically-generated self-signed certificate.

Note that this API call will return an error if there is currently no custom SSL certificate being used.

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
  "result" : "success"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "ssl/cert_import" >}}
* {{< api-link "ssl/cert_info" >}}
