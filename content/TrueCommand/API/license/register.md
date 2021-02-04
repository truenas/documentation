---
title: "license/register"
pre: "<i class='fas fa-newspaper'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| license | register | yes | no | yes | 1 |

#### Description
Register a new license with TrueCommand (administrator only)

### Input Arguments
* Required:
   * * "license_file_contents" : (string) Contents of the license file encapsulated as a string (file contents should already be base64-encoded can just just be read/passed through as text)


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "license_file_contents" : "contents_of_the_license_file_on_client_system",
}
```

### Reply Example
* Example Reply Arguments (success):
```
{
  "result" : "success"
}
```

* Example Reply Arguments (failure):
NOTE: This type of failure means that the license/signature files were detected to be invalid and unable to be used (not the same kind of failure as an invalid API submission or unauthorized access).
```
{
  "result" : "failure"
}
```

### Events
This API call will generate a {{< api-link "license/check" >}} event.

If the license expires while TrueCommand is still running, this will generate another {{< api-link "license/check" >}} event.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "license/info" >}}
* {{< api-link "license/gettvuid" >}}
