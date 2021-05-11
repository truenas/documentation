---
title: "logs/search"
pre: "<i class='fa fa-search'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| logs | search | no | no | no | 1 |

#### Description
Search through the logs and return results

### Input Arguments
* Required Arguments: none ({})
* Optional Arguments: 
   * "time_end" (time_t - if not supplied it defaults to the current time)
   * "time_start" (time_t - if not supplied it defaults to one month prior to the end time)
   * "uuid" (string - only return log entries associated with this user)
   * "header" (string or array of strings - only return log entries associed with particular API calls: such as "users/add" or "servers/edit")

For information about the time formats, please look at the [Input Time Codes section](#input_time_codes) for details.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```

  "uuid" : "user_uuid",
  "header" : "users/add"
}
```

### Reply Example
NOTE: The actual reply structure will be much more expansive than shown here (more sub-fields and datasets within the sub-fields per field).
```
{
  "logs_start" : "2017-03-01T10:10:03Z",
  "logs_end" : "2017-03-31T10:10:03Z",
  "logs" : [
    {
      "timestamp" : <ISO 8601 date format (yyyy-MM-ddThh:mm:ssZ)>,
      "uuid" : "user_uuid",
      "header" : "users/add",
      "summary" : {<optional summary of changes> }
    } ,
    {
      "timestamp" : <ISO 8601 date format (yyyy-MM-ddThh:mm:ssZ)>,
      "uuid" : "user_uuid",
      "header" : "users/add",
      "summary" : {<optional summary of changes> }
    } 
  ]
}
```
**NOTE:** The "summary" object for logs is optional. It will only exist for those API calls that include it within their associated API documentation. Please reference the associated API calls for the format/existance of the summary object.

### Events
This API call does not emit any middleware events.


### Log Summary
This API call does not generate a detailed log summary item
