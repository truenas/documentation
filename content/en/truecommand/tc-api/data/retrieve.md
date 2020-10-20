---
title: "data/retrieve"
menutitle: "retrieve"
description: "Retrieve Data from a Server"
pre: "<i class='fa fa-sitemap'></i>	"
draft: false
chapter: false
---


| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| data | retrieve | no | no | yes | 1 |

#### Description
Retrieve data from specified servers/fields

### Input Arguments
* Required Arguments: 
   * "tvid" (string or JsonArray of strings)
   * "time_start" (string)
* Optional Arguments:
   * "time_end" (string - if not supplied it defaults to the current time)
   * "raw_objects" (bool) : Show raw system information rather than the compressed system summary (false by default)
   * "data_list" (string, JsonArray of strings, or null)
      * Path(s) to the data from the stats tree that you would like returned (using the "%"-delimiter for object names).
      * If null, the full stats object will be returned.
      * Default value: `["cpu","cpu_temp","disks","memory","network", "storage","time_t"]`

For information about the time formats, please look at the [Input Time Codes section](#input_time_codes) for details.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : ["server_id_1", "server_id_2"],
  "time_start" : "1d"
}
```

### Reply Example
```
{
  "server_id_1" : {
  "cpu": {
    "num_cpus": [24,24,24,24,24,24,24],
    "total": {
      "idle": [97.04,97,97,97,96.96,96.96,97],
      "system": [1.58,1.63,1.63,1.63,1.63,1.67,1.67],
      "user": [1.38,1.42,1.42,1.38,1.38,1.33,1.33]
      }
    },
  "cpu_temp": {
    "0": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "1": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "2": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "3": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "4": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "5": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "6": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "7": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "8": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "9": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "10": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "11": [39.6,39.5,39.5,39.5,39.1,39.5,39.5],
    "12": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "13": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "14": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "15": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "16": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "17": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "18": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "19": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "20": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "21": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "22": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "23": [39.6,39.5,39.5,39.5,39.2,39.5,39.5],
    "average": [38.02,37.92,37.92,37.92,37.58,37.92,37.92],
    "units": ["C","C","C","C","C","C","C"]
    },
  "disks": {
    "da0": {
      "L(q)": [1,0,0,0,0,0,0],
      "kBps": [109,0,0,0,0,0,0],
      "ms/r": [0,0,0,0,0,0,0],
      "ms/w": [18.2,0,0,0,0,0,0],
      "ops/s": [15,0,0,0,0,0,0],
      "r/s": [0,0,0,0,0,0,0],
      "usy": [26.6,0,0,0,0,0,0],
      "w/s": [15,0,0,0,0,0,0]
      },
    "da1": {
      "L(q)": [1,0,0,0,0,0,0],
      "kBps": [523,927,0,0,0,931,0],
      "ms/r": [0,0,0,0,0,0,0],
      "ms/w": [4.8,5.2,0,0,0,5.5,0],
      "ops/s": [29,68,0,0,0,58,0],
      "r/s": [0,0,0,0,0,0,0],
      "usy": [14.1,30.4,0,0,0,28.2,0],
      "w/s": [29,66,0,0,0,56,0]
      }
    },
  "memory": {
    "active_bytes": [615657472,607043584,608591872,607801344,611266560,613457920,613670912],
    "active_percent": [0.37,0.37,0.37,0.37,0.37,0.37,0.37],
    "cache-hit-percent": [0,0,0,0,0,0,0],
    "free_bytes": [13736296448,13733982208,13728608256,13728935936,13730336768,13728468992,13726720000],
    "free_percent": [8.26,8.26,8.26,8.26,8.26,8.26,8.26],
    "inactive_bytes": [158953472,169697280,172240896,168235008,165654528,165232640,165285888],
    "inactive_percent": [0.1,0.1,0.1,0.1,0.1,0.1,0.1],
    "laundry_bytes": [0,0,0,0,0,0,0],
    "laundry_percent": [0,0,0,0,0,0,0],
    "total_bytes": [16621088768,16621060096,16621060096,16621060096,16621060096,16621060096,16621060096],
    "wired_bytes": [2110181376,2110337024,2111619072,2116087808,2113802240,2113900544,2115383296],
    "wired_percent": [1.27,1.27,1.27,1.27,1.27,1.27,1.27]
    },
  "network": {
    "lo0": {
      "KB/s in": [22.48,0,0.95,10.18,357.04,0,1.23],
      "KB/s out": [22.48,0,0.95,10.18,357.04,0,1.23]
      },
    "oce0": {
      "KB/s in": [1.21,0,0.6,1.21,1.91,0,1.37],
      "KB/s out": [22.04,0,0,9.84,119.42,0,0]
      },
    "oce1": {
      "KB/s in": [0,0,0,0,0,0,0],
      "KB/s out": [0,0,0,0,0,0,0]
      },
    "total": {
      "KB/s in": [44.51,0,0.95,20.02,476.46,0,1.23],
      "KB/s out": [23.69,0,1.55,11.39,358.96,0,2.6]
      }
    },
  "pools": {
    "pool_sas": {
      "cache_size": [0,0,0,0,0,0,0],
      "cache_size_used": [0,0,0,0,0,0,0],
      "cache_size_used_percent": [0,0,0,0,0,0,0],
      "data_size": [70866960384,70866960384,70866960384,70866960384,70866960384,70866960384,70866960384],
      "data_size_used": [1052307456,1052356608,1055154176,1055911936,1052520448,1052270592,1052016640],
      "data_size_used_percent": [1.48,1.48,1.49,1.49,1.49,1.48,1.48],
      "log_size": [0,0,0,0,0,0,0],
      "log_size_used": [0,0,0,0,0,0,0],
      "log_size_used_percent": [0,0,0,0,0,0,0],
      "spare_size": [0,0,0,0,0,0,0],
      "spare_size_used": [0,0,0,0,0,0,0],
      "spare_size_used_percent": [0,0,0,0,0,0,0]
      },
    "total_size": [70866960384,70866960384,70866960384,70866960384,70866960384,70866960384,70866960384],
    "total_size_used": [1052307456,1052356608,1055154176,1055911936,1052520448,1052270592,1052016640  ],
    "total_size_used_percent": [1.48,1.48,1.49,1.49,1.49,1.48,1.48]
    },
  "time_t": [1538682320,1538682342,1538682363,1538682385,1538682407,1538682428,1538682450]
  }
}
```

### Events
Events from this change will be sent to all administrators and any user with read access to this server. 

Example:
```
{
"namespace" : "event",
"name" : "data/retrieve",
"id" : "",
"args" : {
    "tvid" : "system_id_with_new_data"
  }
}
```

### Log Summary
This API call does not generate a detailed log summary item


#### See Also
* {{< api-link "data/current_stats" >}}
* {{< api-link "data/list_fields" >}}
