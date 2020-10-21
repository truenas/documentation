---
title: "data/list_fields"
pre: "<i class='fa fa-sitemap'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| data | list_fields | no | no | no | 1 |

#### Description
List all the types of data which are available for particular server(s). The types of data are returned in a "path" format where the "%" symbol is used to separate field names. Example: the "cpu%num_cpus" path corresponds to the "cpu" object, and the value of the "num_cpus" field within that object.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "tvid" (string **or** JsonArray of strings) : ID of the specific system(s) to scan for fields.
   * "with_type" (boolean) : Return an array of objects with the "data_type" of the field also specified. This is helpful for doing filtering later on based on types of fields (default: false).
      * Data type return examples: "string", "bool", "number".
      * Sub-categories may also be provided for some fields to provide units (when available): "number:KB", "number:B", "number:%"
   * "filter_type" (string) : Only return fields of this type (example: "number")
   * "ui_format" (boolean) : Flag for returning the structure in an internal UI-integration format. Format may change between versions of TrueCommand.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "server_id_1"
}
```

### Reply Example
NOTE: If no tvid is given, then a generic "fields" object will be returned instead of the objects tagged by the the tvid's.
In the generic "fields" object, there will be items tagged within carats (<deviceID> for example). These are placeholder labels for something that is system-specific ("<deviceID>" might become "ada0" for particular systems).

```
{
  "fields": [
    "cpu%num_cpus",
    "cpu%total%idle",
    "cpu%total%system",
    "cpu%total%user",
    "cpu_temp%<cpu_number>",
    "cpu_temp%average",
    "cpu_temp%units",
    "disks%<diskID>%L(q)",
    "disks%<diskID>%kBps",
    "disks%<diskID>%ms/r",
    "disks%<diskID>%ms/w",
    "disks%<diskID>%ops/s",
    "disks%<diskID>%r/s",
    "disks%<diskID>%usy",
    "disks%<diskID>%w/s",
    "memory%active_bytes",
    "memory%active_percent",
    "memory%cache-hit-percent",
    "memory%free_bytes",
    "memory%free_percent",
    "memory%inactive_bytes",
    "memory%inactive_percent",
    "memory%laundry_bytes",
    "memory%laundry_percent",
    "memory%total_bytes",
    "memory%wired_bytes",
    "memory%wired_percent",
    "network%<deviceID>%KB/s in",
    "network%<deviceID>%KB/s out",
    "network%total%KB/s in",
    "network%total%KB/s out",
    "pools%pool_<pool_name>%cache_size",
    "pools%pool_<pool_name>%cache_size_used",
    "pools%pool_<pool_name>%cache_size_used_percent",
    "pools%pool_<pool_name>%data_size",
    "pools%pool_<pool_name>%data_size_used",
    "pools%pool_<pool_name>%data_size_used_percent",
    "pools%pool_<pool_name>%log_size",
    "pools%pool_<pool_name>%log_size_used",
    "pools%pool_<pool_name>%log_size_used_percent",
    "pools%pool_<pool_name>%spare_size",
    "pools%pool_<pool_name>%spare_size_used",
    "pools%pool_<pool_name>%spare_size_used_percent",
    "pools%total_size",
    "pools%total_size_used",
    "pools%total_size_used_percent",
    "time_t"
  ]
}
```

### Reply Example 2 (with types, greatly simplified list just to show format)
```
{
  "fields" : [
    { "path" : "cpu%num_cpus", "data_type" : "number" },
    { "path" : "memory%active_bytes", "data_type" : "number:B" },
    { "path" : "memory%active_percent", "data_type" : "number:%" }
  ]
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "data/retrieve" >}}
* {{< api-link "data/current_stats" >}}
