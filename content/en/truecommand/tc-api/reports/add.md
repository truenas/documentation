---
title: "reports/add"
menutitle: "add"
description: "Create a new report"
pre: "<i class='fa fa-file'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | add | No | No | Yes | 1.1 |

#### Description
Create a new report. The user who creates the report is always included in the "owners" list for the report, and is granted full edit/delete permissions for the report in the future. In addition, the owner of a report is able to share the report with other users/teams on a read-only basis, or grant ownership of a report to other users for edit capabilities as well.

TrueCommand Administrators have permission to edit all reports, even if they are not explicitly included in the "owners" list.

### Input Arguments
* Required:
   * "name" (string) : Visible title to be shown for the report.
* Optional:
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
  "name" : "My Report 1",
  "shared_users" : "all"
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
      "name" : "My Report 1",
      "owners" : ["user_id_1"],
      "shared_users" : ["all"],
      "shared_teams" : [],
      "widgets" : {},
      "last_modified_time_t" : 1562075297,
      "last_modified_user" : "user_id_1",
      "tags" : []
    }
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This will generate a {{< api-link "reports/list" >}} API event.

#### See Also
* {{< api-link "reports/remove" >}}
* {{< api-link "reports/edit" >}}
* {{< api-link "reports/list" >}}
