---
title: "users"
menutitle: "set_data"
description: "Save generic data for later"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | set_data | no | no | no | 1 |

#### Description
Save any random data to be associated with the currently logged-in user. 
This is useful to save/restore a cache of user settings that might be needed by the Web UI for instance.

**WARNING:** This API call with overwrite the entire data object for the user with the given arguments. To insert data into an existing object, please use the {{< api-link "users/insert_data" >}} or {{< api-link "users/insert_data_value" >}} API calls.

### Inputs Arguments
* Required:
   * Anything as long as the input arguments are a Json Object

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "generic_data" : "sample field",
  "dataobject": {
    "datafield1" : "1"
  }
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "set_data",
  "id" : "some_id",
  "args" : {
    "result" : "success"
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "users/get_data" >}}
* {{< api-link "users/insert_data" >}}
* {{< api-link "users/insert_data_value" >}}
