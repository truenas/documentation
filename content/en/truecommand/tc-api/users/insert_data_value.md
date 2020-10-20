---
title: "users/insert_data_value"
menutitle: "insert_data_value"
description: "Save data to user cache"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added | Version Removed|
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|:---:|
| users | insert_data_value | no | no | no | 1 | 2.0 |

{{% notice warning %}}
This API namespace was removed in version 2.0
Please look at the users/set_data API for the alternative to this functionality.
{{% /notice %}}

#### Description
Save any random data to be associated with the currently logged-in user. 
This is useful to save/restore a cache of user settings that might be needed by the Web UI for instance.

This is different from the "set_data" API call in that the fields within the input arguments will be **added** to the  current user data rather than replace it. Any input objects/variables with the same name as existing fields in the user data **will** overwrite those fields however.

### Input Arguments
* Required:
   * "key_path" and "key_value" pairs ("/" delimiter for object path)

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "dataobject/datafield1" : "1",
  "generic_data" : "sample_field"  
}
```

### Reply Example
```
{
  "namespace" : "response",
  "name" : "insert_data_value",
  "id" : "some_id",
  "args" : {
    "result" : "success",
    "data" : {
      [COPY OF CURRENT DATA OBJECT]
    }
  }
}
```

### Changes from Example
Original saved data:
```
{
  "dataobject" : {
    "A" : "a"
  },
  "dataobject2" : {
    "B" : "b"
  }
}
```

After change from the request above:
```
{
  "generic_data" : "sample field",
  "dataobject": {
    "datafield1" : "1",
    "A" : "a"
  },
  "dataobject2" : {
    "B" : "b"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "users/get_data" >}}
* {{< api-link "users/set_data" >}}
* {{< api-link "users/insert_data" >}}
