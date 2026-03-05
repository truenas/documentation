---
title: "Privilege Screens"
description: "Provides information on the Privilege screens and settings."
weight: 50
aliases:
tags:
 - privileges
 - roles
doctype: reference
---

## Privileges Screen

{{< hint type="warning" title="Experimental Feature" >}}
The **Privileges** feature in releases earlier than 24.10 is experimental, but as of 24.10 onwards is no longer experimental.

Do not edit the existing predefined administrator roles (Full Control Admin, Readonly Admin, and Sharing Admin)!
Editing an unrestricted administrator account privilege can result in lost access to the system!
{{< /hint >}}

The **Privileges** screen shows pre-defined and user-configured roles defined on the system.
The **Privileges** screens show the default administrator groups and roles and define customized groupings of roles for different local or directory service-imported account groups.

{{< trueimage src="/images/SCALE/Credentials/PrivilegesScreen.png" alt="Privileges Screen" id="Privileges Screen" >}}

### Add and Edit Privilege Screens {id="privilege_add"}

The new and edit privilege screens show the same settings but not all settings are editable.

{{< enterprise >}}
Enterprise-licensed systems can enable Active Directory to provision groups in TrueNAS. To make this possible, join Active Directory, then go to **System > Advanced Settings > Access** and enable the **Allow Directory Service users to access WebUI** option.
After enabling this, the **Edit Privilege** screen lists AD groups on the **Groups** dropdown list.
See [Allowing Directory Service Users to Access the UI]({{< ref "advanced/#allowing-directory-service-users-to-access-the-ui" >}}) for more information.
{{< /enterprise >}}

{{< trueimage src="/images/SCALE/Credentials/AddNewPrivilegeScreen.png" alt="New Privilege Screen" id="New Privilege Screen" >}}

**Add** opens the **New Privilege** screen. 
The <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg> **Edit** icon opens the **Edit Privilege** screen for the selected privilege.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Assigns the name entered to a new privilege. Names can include the dash (-) or underscore(_) special characters, and upper and lowercase alphanumeric characters. Enter a descriptive name for the privilege. **Name** shows on the **Edit Privilege** screen but is not editable. |
| **Groups** | Shows a list of groups configured on the system. Select a group from the dropdown list after clicking in the field. The privilege is applied to the selected group(s). |
| **Roles** | Select from a dropdown list of all available roles available to assign to the new privilege or change an existing privilege. Only the Readonly Admin, Sharing Admin, or Full Admin roles are supported in the web UI. |
| **Web Shell Access** | Select to allow a user to assign the new privilege access to the **System > Shell** screen. |
{{< /truetable >}}

Assigned administrator roles show on the [Users Screen]({{< ref "UsersScreen" >}}).

{{< include file="/static/includes/addcolumnorganizer.md" >}}
