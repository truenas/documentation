---
title: "cluster/db_restore"
menutitle: "db_restore"
description: "Restore a database backup to a NAS"
pre: "<i class='fa fa-list-ul'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| cluster | db_restore | No | Yes | No | 1.1 |

#### Description
Restore a saved configuration database to a specific system or group of systems. 

***WARNING:***

* This can only be performed for systems that the user has write access to. All other systems will be ignored.

### Input Arguments
* Required:
   * "db_id" (string) : ID of the configuration backup that you wish to restore.
   * "tvid" (string or JSON array of strings) : Apply the backup configuration database to these systems
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "db_id" : "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db",
  "tvid" : "1da1363e-98ac-481c-a47d-54b87bfecbcd"
}
```

### Reply Example Arguments
```
{
  "restoring_to" : "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db",
  "ids_restoring" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd"],
  "nicknames_restoring" : ["System 1"],
  "ids_failed" : [],
  "nicknames_failed" : []
}
```

### Log Summary
```
{
  "restoring_to" : "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db",
  "ids_restoring" : ["1da1363e-98ac-481c-a47d-54b87bfecbcd"],
  "nicknames_restoring" : ["System 1"],
  "ids_failed" : [],
  "nicknames_failed" : []
}
```

### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "cluster/db_backup" >}}
* {{< api-link "cluster/db_delete" >}}
* {{< api-link "cluster/db_list" >}}
