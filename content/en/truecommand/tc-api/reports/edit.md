---
title: "reports/edit"
menutitle: "edit"
description: "Change a report"
pre: "<i class='fa fa-file'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | edit | No | Yes | Yes | 1.1 |

#### Description
Modify an existing report. Any user included in the "owners" list has permission to modify a report, including granting edit access to other users. 

TrueCommand Administrators have permission to edit all reports, even if they are not explicitly included in the "owners" list.

### Input Arguments
* Required:
   * "roid" (string) : Report Object ID for the desired report to be changed
* Optional:
   * "name" (string) : Visible title to be shown for the report.
   * "owners" (string or Json Array of strings) : User ID's for those who are granted edit permission for this report.
      * Note: The middleware ensures that the user editing the report always keeps ownership of the report.
      * The word "all" can be provided in order to grant edit permission to all users.
   * "shared_users" (string or Json Array of strings) : User ID's for those who are granted read access for this report.
      * Note: The word "all" can be used in place of a user ID in order to grant access to all users. 
   * "shared_teams" (string or Json Array of strings) : Team ID's for those who are granted read access for this report.
      * Note: The word "all" can be used in place of a team ID in order to grant access to all teams. 
   * "widgets" (Json Object) : Special data object for defining the visible widgets for this report.
      * See the {{< api-link "reporting" >}} page for full details.
   * "tags" (Json Array of strings) : Search tags to help filter available reports


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "roid" : "5",
  "name" : "My New report Name"
}
```

### Reply Example
```
{
  "namespace" : "reports",
  "name" : "response",
  "id" : "some_id",
  "args" : {
    "result" : "success",
    "5" : {
      "roid" : "5",
      "name" : "My New report Name",
      "owners" : ["user_id_1"],
      "shared_users" : ["all"],
      "shared_teams" : [],
      "widgets" : {},
      "last_modified_time_t" : 1562075384,
      "last_modified_user" : "user_id_1",
      "tags" : []
    }
  }
}
```
### Log Summary
The log summary contains a "new_" entry for every field that was changed by the API call.
```
{
  "new_name" : "My New report Name",
  "new_last_modified_time_t" : 1562075384
}
```

### Events
This will generate a {{< api-link "reports/list" >}} API event.

#### See Also
* {{< api-link "reports/add" >}}
* {{< api-link "reports/remove" >}}
* {{< api-link "reports/list" >}}
