---
title: "users/get_data"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| users | get_data | no | no | no | 1 |

#### Description
Fetch any data associated with the currently logged-in user. 
This is useful to save/restore a cache of user settings that might be needed by the Web UI for instance.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "key_path" : [Depricated in v2.0] "/"-delimited JSON object path (Example: "my/settings/variable")
   * "key_default_value" : [Depricated in v2.0] Value returned if the key path does not exist in the JSON data (empty string by default)

### Examples
* Example data stored on the server

```
{
  "obj1" {
    "obj2" : {
      "value1" : "my_nested_value"
    }
  },
  "value1" : "top_level_value"
}
```

* Example Reply Arguments (no "key_path", returns full JSON data)

```
{
  "data" : {
    "obj1" {
      "obj2" : {
        "value1" : "my_nested_value"
      }
    }
    "value1" : "top_level_value"
  }
}
```

* Example 1: Request Arguments with key_path which exists in data

```
{
 "key_path" : "obj1/obj2/value1",
 "key_default_value" : "default_value"
}
```

* Reply arguments for Example 1:

```
{
  "obj1/obj2/value1" : "my_nested_value"
}
```

* Example 2: Request Arguments with key_path which **does not** exist in data

```
{
 "key_path" : "obj1/value1",
 "key_default_value" : "default_value"
}
```

* Reply arguments for Example 2:

```
{
  "obj1/value1" : "default_value"
}
```

### Log Summary
This API call does not generate a detailed log summary item


### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "users/set_data" >}}
* {{< api-link "users/insert_data" >}}
* {{< api-link "users/insert_data_value" >}}
