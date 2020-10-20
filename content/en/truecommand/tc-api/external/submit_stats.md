---
title: "external/submit_stats"
menutitle: "submit_stats"
description: "API hook for an external system to submit statistics"
pre: "<i class='fas fa-chart-pie'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| external | submit_stats | N/A | N/A | yes | 1.1 |

#### Description
API hook for external systems to submit statistics to TrueCommand. This requires that the external system use a valid system auth token to submit the API call over HTTP.

**Note:** This works for both "external" types of systems as well as FreeNAS/TrueNAS systems. It just needs a valid auth token which associates the API request with a currently-registered system.

**Note 2:** This will NOT work with websocket connections. HTTP API submissions only.


#### Implementation Details
It is recommended that this API usage be scripted and setup to run on a fairly regular periodic basis (at least once every hour). An example of such a script is included below for demonstration purposes:

```
#!/bin/sh

# Access info for TrueCommand (system and auth token)
TC_SYSTEM="CHANGEME"
TC_TOKEN="CHANGEME"

# CHANGEME : Gather/Assemble the data about the system 
# This data object is a hard-coded string for demonstration purposes only
DATA='{ "hostname" : "TESTHOST", "version" : "TESTVERSION", "storage" : { "total-bytes" : 4096, "used-bytes" : 1523 }, "memory" : {"bytes-per-page" : 4096, "active-pages" : 50, "free-pages" : 100, "inactive-pages" : 30 }, "cpu" : [{"user":50,"system":10,"idle":40}], "cpu_temperatures" : [30], "disk" : [{"Name":"ada0", "KBps read" : 60, "KBps write" : 20}]}'

#Now submit the statistics
URL="https://${TC_SYSTEM}/api/external/submit_stats"
echo "Submitting Stats: ${URL}"
echo "${DATA}" | jq -r . #Helps verify that the JSON was formatted properly
echo "----------"
curl -k --data "${DATA}" -u ":${TC_TOKEN}" -X PUT "${URL}"
```

### Input Arguments
* Required:
   * "hostname" (string) : System hostname
   * "cpu" (Json Array of Objects) : One object per CPU
      * "user" (number) : Percent utilization by user processes
      * "system" (number) : Percent utilization by system processes
      * "idle" (number) : Percent remaining un-used.   
   * "memory" (Json Object) : Information about memory usage on the system. Primary memory types supported are "active", "free", "inactive", "laundry", and "wired".
      * "bytes-per-page" (number) : [Optional] conversion from page numbers to bytes (if pages are supplied)
      * "cache-hit-percent" (number) : [Optional] Percentage of memory requests hitting the ZFS cache
      * "[something]-pages" (number) : Number of pages of a particular type of memory. As many of these fields as needed. This requires that the "bytes-per-page" conversion number also be provided.
      * "[something]-bytes" (number) : Number of bytes of a particular type of memory. As many of these fields as needed. These fields are preferred over the -pages fields if they both have the same prefix ("free-bytes" will be used instead of "free-pages" if both are provided).
   * "network" (Json Array of Json Objects) : Information about network usage on the system (one object per interface)
      * "name" (string) : [Required] Unique name of the interface (example: "igb0")
      * "KB/s in" (number) : [Recommended] Current data transfer into the interface
      * "KB/s out" (number) : [Recommended] Current data transfer out of the interface
      * "[something]" (number) : [Optional] Statistic to record.
   * "storage" (Json Object) : Information about storage utilization from the system
      * "total-bytes" (number) : Total size of the available storage in bytes
      * "used-bytes" (number) : Amount of storage space already used in bytes.
   * "version" (string) : Version number of the system
   * "uptime_seconds" (number) : System uptime in seconds.
* Optional (but recommended):
   * "cpu_temperatures" (Json Array of numbers) : One element per CPU, with temperature number in degrees Celcius.
   * "disk" (Json Array of Json Objects) : One element per hard-disk of stats about that disk. 
      * Note: Each disk object must have a field called "Name" which contains the unique identifier for that disk ("ada0" or "da3" for example). All other field names are arbitrary/optional but should have numerical values.
   * "timezone" (string) : System timezone (Example: "America/New_York")
   * "model" (string) : model information about the system (typically CPU make/model)

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
    "hostname": "1.2.3.4",
    "cpu": [{ "user": 15, "system": 25, "idle": 60 }],
    "memory": {
        "bytes-per-page": 256,
        "cache-hit-percent": 23,
        "free-bytes": 12885465088
        "inactive-pages": 234980,
        "active-pages": 35654568
    },
    "storage": {
        "total-bytes": 32098409238230,
        "used-bytes":  430984030458
    },
    "network": [{ "name": "igb0", "KB/s in": 13568, "KB/s out": 2036 }],
    "version": "2.7.6",
    "uptime_seconds": 518799978
}
```

### Reply Example Arguments
```
{
  "result" : "success"
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This API call will generate the standard event notifications for new statistics. See the {{< api-link "servers/list" >}} API for event details.

#### See Also
* {{< api-link "servers/list_tokens" >}}
* {{< api-link "external/submit_alerts" >}}
