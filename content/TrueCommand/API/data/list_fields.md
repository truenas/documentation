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
List all the types of data which are available for particular server(s). The avaiable data is always broken up into a 2-step format:

* **Measurements** : (Also called "metrics") These act as the "category" of numbers, and determines what type of number/units are provided.
* **Fields** : The specific number. The "total" and "avg" fields are *always* valid, but there may be system-specific fields available as well (such as for specific disks, network interfaces, storage pools, etc.)

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "tvid" (string ) : ID of the specific system to scan for fields.


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
[
	"net_in_kbps",
	"net_out_kbps",
	"net_total_kbps",
	"net_used_percent",
	"cpu_used_percent",
	"cpu_temperature",
	"zfs_arc_used_percent",
	"zfs_arc_miss_percent",
	"disk_busy_percent",
	"disk_read_ops_per_sec",
	"disk_write_ops_per_sec",
	"disk_read_bytes_per_sec",
	"disk_write_bytes_per_sec",
	"memory_used_percent",
	"storage_pool_usage_percent",
	"storage_pool_usage_bytes",
	"storage_pool_total_bytes"
]
```

### Reply Example 2 (with types, greatly simplified list just to show format)
```
{
	"net_in_kbps" : { "total" : "float32", "avg" : "float32" },
	"net_out_kbps" : { "total" : "float32", "avg" : "float32" },
	"net_total_kbps" : { "total" : "float32", "avg" : "float32" },
	"net_used_percent" : { "total" : "float32", "avg" : "float32" },
	"cpu_used_percent" : { "total" : "float32", "avg" : "float32" },
	"cpu_temperature" : { "total" : "float32", "avg" : "float32" },
	"zfs_arc_used_percent" : { "total" : "float32", "avg" : "float32" },
	"zfs_arc_miss_percent" : { "total" : "float32", "avg" : "float32" },
	"disk_busy_percent" : { "total" : "float32", "avg" : "float32" },
	"disk_read_ops_per_sec" : { "total" : "float32", "avg" : "float32" },
	"disk_write_ops_per_sec" : { "total" : "float32", "avg" : "float32" },
	"disk_read_bytes_per_sec" : { "total" : "float32", "avg" : "float32" },
	"disk_write_bytes_per_sec" : { "total" : "float32", "avg" : "float32" },
	"memory_used_percent" : { "total" : "float32", "avg" : "float32" },
	"storage_pool_usage_percent" : { "total" : "float32", "avg" : "float32", "pool_1" : "float32", "pool2" : "float32" },
	"storage_pool_usage_bytes" : { "total" : "float32", "avg" : "float32", "pool_1" : "float32", "pool2" : "float32"  },
	"storage_pool_total_bytes" : { "total" : "float32", "avg" : "float32", "pool_1" : "float32", "pool2" : "float32"  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

### Changelog
* **v2.0**
   * Optional "tvid" input changed to a string only (does not support array of strings any more)
   * Optional flags "with_type", "filter_type", and "ui_format" removed.

#### See Also
* {{< api-link "data/retrieve" >}}
* {{< api-link "data/current_stats" >}}
