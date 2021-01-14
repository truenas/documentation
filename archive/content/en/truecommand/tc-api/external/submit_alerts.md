---
title: "external/submit_alerts"
pre: "<i class='fa fa-bell'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| external | submit_alerts | N/A | N/A | yes | 1.1 |

#### Description
API hook for external systems to submit alert notices to TrueCommand. This requires that the external system use a valid system auth token to submit the API call over HTTP.

**Note:** This works for both "external" types of systems as well as FreeNAS/TrueNAS systems. It just needs a valid auth token which associates the API request with a currently-registered system.

**Note 2:** This will NOT work with websocket connections. HTTP API submissions only.

#### Implementation Details
It is recommended that this API usage be scripted and run automatically based on some external trigger. An example of such a script is included below for demonstration purposes:

```
#!/bin/sh

# Access info for TrueCommand (system and auth token)
TC_SYSTEM="CHANGEME"
TC_TOKEN="CHANGEME"

# CHANGEME : Gather/Assemble the data about the system 
# This data object is a hard-coded string for demonstration purposes only
DATA='{"external-alert-1" : {"source" : "external_alert_system_XYZ","type" : "warning", "time_t" : "1565274547", "text" : "This is a test of alert system XYZ forwarding to TrueCommand"} }'

#Now submit the statistics
URL="https://${TC_SYSTEM}/api/external/submit_alerts"
echo "Submitting Alert: ${URL}"
echo "${DATA}" | jq -r . #Helps verify that the JSON was formatted properly
echo "----------"
curl -k --data "${DATA}" -u ":${TC_TOKEN}" -X PUT "${URL}"
```

### Input Arguments
* Required:
   * alert-ID (JSON Object) : Every alert needs to have a unique alert ID, this can be any string. This allows TrueCommand to see/combine alert notices with the same ID while also keeping track of all the times that the alert was submitted or triggered.
      * "source" (string) : Internal source designation for the alert. Can be anything that is useful for diagnosing and fixing the alert.
         * Examples: "SMART tests", "service/XYZ", "alertsystem/123"
      * "type" (string) : Priority designation for the alert. Must be one of the following options: "information", "warning", or "critical"
      * "time_t" (string or number) : UNIX timestamp for when the alert was created on the system itself.
      * "text" (string) : User-facing text for the alert.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "external_alert_1" : {
    "source" : "external_alert_system_XYZ",
    "type" : "warning",
    "time_t" : "1565274547",
    "text" : "This is a test of alert system XYZ forwarding to TrueCommand"
  }
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
This API call will generate the standard event notifications for new alert notices. See the {{< api-link "notices/list" >}} API for event details.

#### See Also
* {{< api-link "servers/list_tokens" >}}
* {{< api-link "external/submit_stats" >}}
