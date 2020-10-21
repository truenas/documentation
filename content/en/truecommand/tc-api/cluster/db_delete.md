---
title: "cluster/db_delete"
pre: "<i class='fa fa-list-ul'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| cluster | db_delete | No | Yes | No | 1.1 |

#### Description
This API call will return a list of all the NAS database backups that are stored on TrueCommand.

***WARNING:***

* This can only be performed for systems that the user has write access to. All other systems will be ignored.

### Input Arguments
* Required:
   * "db_id" (string or JSON array of strings) : ID of the database backup(s) that should be deleted.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "db_id" : "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db"
}
```

### Reply Example Arguments
```
{
  "result" : "success",
  "removed" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db"]
}
```

### Log Summary
```
{
  "removed" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db"]
}
```

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "cluster/db_backup" >}}
* {{< api-link "cluster/db_list" >}}
* {{< api-link "cluster/db_restore" >}}
