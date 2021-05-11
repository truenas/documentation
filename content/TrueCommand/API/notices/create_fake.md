---
title: "notices/create_fake"
pre: "<i class='fa fa-flag'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| notices | create_fake | yes | no | no | 1 |

#### Description
This is a way to automatically create a "fake" alert notice for testing. 

### Input Arguments
* Required Arguments:
   * "tvid" : (string) ID of the system which "triggered" the fake alert
   * "caid" : (string) ID of the alert rule that will be used as the trigger for the notice.


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "system_id_1",
  "caid" : "alert_rule_1"
}
```

### Reply Example
```
{
  "result" : "success",
  "aid" : "test-4"
}
```


### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "notices/list" >}}
* {{< api-link "notices/add_comment" >}}
* {{< api-link "notices/set_resolved" >}}
* {{< api-link "notices/delete_comment" >}}
* {{< api-link "notices/delete" >}}
