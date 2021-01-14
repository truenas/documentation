---
title: "current_stats"
pre: "<i class='fas fa-chart-pie'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| data | current_stats | no | no | yes | 1 |

#### Description
This will return the latest data for the designated systems (or all systems user has read permission for if particular systems are not specified). The data object for each system is identical to the format used by the {{< api-link "data/retrieve" >}} API call, but only contains the most recent data point. The default behavior only returns a pruned-down list of the stats from the system. To retrieve the entire stats object, you will need to enable the optional "full_stats" flag.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "tvid" (string or JSON array of strings) : ID(s) of the system to fetch stats
   * "raw_stats" (bool) : Return the raw information from the NAS instead of the compressed version. (false by default)
   * "full_stats" (bool) : Return the full information object from the NAS. (false by default).
   * "summaries" (bool) : Return a summary object of all the NAS's. (false by default)
      * Added in version 1.3

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
"tvid" : "system_id_1"
}
```

### Reply Example (abbreviated greatly)
```
"args" : {
  "system_id_1" : {
    "cpu" : {},
    "cpu_temp" : {},
    "disks" : {},
    "jails" : {},
    "memory" : {},
    "network" : {},
    "services" : {},
    "storage" : {},
    "system_info" : {},
    "time_t" : 1544629127,
    "vms" : {}
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item


### Events
| Name | Who Receives |
|:--------:|:-------------------:|
| data/current_stats | All with read access |

Example:
```
{
  "namespace" : "event",
  "name" : "data/current_stats",
  "id" : "event",
  "args" : {
    "system_id_1" : {
      "cpu" : {},
      "cpu_temp" : {},
      "disks" : {},
      "jails" : {},
      "memory" : {},
      "network" : {},
      "services" : {},
      "storage" : {},
      "system_info" : {},
      "time_t" : 1544629127,
      "vms" : {}
    }
  }
}
```

#### See Also
* {{< api-link "data/retrieve" >}}
* {{< api-link "data/list_fields" >}}
