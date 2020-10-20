---
title: "notices/delete"
menutitle: "delete"
description: "Delete a Notice"
pre: "<i class='fa fa-flag'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| notices | delete | yes | yes | yes | 1 |

#### Description
Delete an alert notice in its entirety. There is no way to recover an alert notice that has been deleted, so this should be handled with extreme care.
***Administrator Access Only***

### Input Arguments
* Required Arguments:
   * "aid" : (string or JSON array of strings) Notice ID(s) to delete.
      * Special Option: "aid" = "delete-all: yes, this is terrible... don't do it!"
      * This will delete *all* alert notices in the database (mainly used for developer debugging)


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "aid" : "3"
}
```

### Reply Example
```
{]
```


### Events
Events from this change will be sent to all administrators and any user with read access to impacted server(s). 

Example:
```
{
"namespace" : "event",
"name" : "notices/delete",
"id" : "",
"args" : {
  "aid" : ["3"]
  }
}
```

### Log Summary
Changes made via this API call will be automatically entered into the system log, and a summary statement will appear which looks like the following:
```
"summary" : {
  "action" : "notices/delete",
  "changed_by_username" : "admin_user",
  "changed_by_uuid" : "admin_user_uuid",
  "deleted_aid" : ["3"]
}
```

#### See Also
* {{< api-link "notices/list" >}}
* {{< api-link "notices/add_comment" >}}
* {{< api-link "notices/set_resolved" >}}
* {{< api-link "notices/delete_comment" >}}
* {{< api-link "notices/create_fake" >}}
