---
title: "servers/groups_rename"
menutitle: "groups_rename"
description: "Rename or Merge a Group"
pre: "<i class='fa fa-server'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| servers | groups_rename | yes | yes | yes | 1 |

#### Description
Simplification for renaming a server group to a different name. If a group with the new name exists, then this will effectively "merge" the old group into the new one.

NOTE: Administrator access only - all others will get a 403/Forbidden error

### Input Arguments
* Required:
   * "groupname_old" : (String) Existing name for the group.
   * "groupname_new" : (String) New name for the group.
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "groupname_old" : "group01",
  "groupname_new" : "group_1"
}
```

### Reply Example
```
{
  "result" : "success",
  "group_renamed" : "group01",
  "new_group" : "group_1"
}
```


### Events
This API call will generate a standard "servers/list_groups" event due to the group name changes.
See the {{< api-link "servers/list_groups" >}} API documentation for event formatting and examples.

## Log Summary
Log entries for this API call will have the following "summary" object. 

```
"summary" : {
  "action" : "servers/groups_rename",
  "added_by_username" : "admin_user",
  "added_by_uuid" : "admin_user_uuid",
  "group_renamed" : "group01",
  "new_group" : "group_1"
}
```

#### See Also
* {{< api-link "servers/add" >}}
* {{< api-link "servers/current_stats" >}}
* {{< api-link "servers/direct_auth" >}}
* {{< api-link "servers/edit" >}}
* {{< api-link "servers/find_available" >}}
* {{< api-link "servers/groups_add" >}}
* {{< api-link "servers/groups_replace" >}}
* {{< api-link "servers/list" >}}
* {{< api-link "servers/list_groups" >}}
* {{< api-link "servers/list_writable" >}}
* {{< api-link "servers/remove" >}}
