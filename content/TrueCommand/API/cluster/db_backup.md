---
pre: "<i class='fa fa-list-ul'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| cluster | db_backup | No | Yes | No | 1.1 |

#### Description
This API call will return a list of all the NAS database backups that are stored on TrueCommand.

***WARNING:***

* This can only be performed for systems that the user has write access to. All other systems will be ignored.
* NAS backup functionality requires a valid, non-expired license from iXsystems. This API will return a FORBIDDEN error otherwise.

### Input Arguments
* Required:
   * "tvid" (string or JSON array of strings) : Fetch the current configuration of these systems and save them for later.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "tvid" : "1da1363e-98ac-481c-a47d-54b87bfecbcd"
}
```

### Reply Example Arguments
```
{
  "started_backup" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd"]
}
```

### Log Summary
```
{
  "started_backup" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd"]
}
```

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "cluster/db_list" >}}
* {{< api-link "cluster/db_delete" >}}
* {{< api-link "cluster/db_restore" >}}
