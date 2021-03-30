---
title: "cluster/db_list"
pre: "<i class='fa fa-list-ul'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| cluster | db_list | No | No | No | 1.1 |

#### Description
This API call will return a list of all the NAS database backups that are stored on TrueCommand.

***WARNING:***

* This can only be performed for systems that the user has write access to. All other systems will be ignored.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * "tvid" (string or JSON array of strings) : Only return backups of these system(s).


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
  "db_list" : [
    {
      "date": "2019-10-09",
      "id": "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_09-FreeNAS-11.2-U6.db",
      "tvid": "1da1363e-98ac-481c-a47d-54b87bfecbcd",
      "version": "FreeNAS-11.2-U6"
    },
    {
      "date": "2019-10-10",
      "id": "1da1363e-98ac-481c-a47d-54b87bfecbcd/2019_10_10-FreeNAS-11.2-U6.db",
      "tvid": "1da1363e-98ac-481c-a47d-54b87bfecbcd",
      "version": "FreeNAS-11.2-U6"
    }
  ]
}
```
### Log Summary
This API call does not generate a detailed log summary item


### Events
This API call does not emit any middleware events.

#### See Also
* {{< api-link "cluster/db_backup" >}}
* {{< api-link "cluster/db_delete" >}}
* {{< api-link "cluster/db_restore" >}}
