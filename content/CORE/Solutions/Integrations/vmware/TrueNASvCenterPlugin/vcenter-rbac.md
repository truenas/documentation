---
title: "Role-Based Access Control (RBAC)"
description: "How to configure individual vCenter user access to TrueNAS hosts."
tags: ["VMware", "TrueNAS Enterprise"]
weight: 60
---

An administrator can grant vCenter users specific role-based access to the fleet of TrueNAS systems that are managed by this plugin.

<img src="/images/VCP-RBAC-Roles.png">
<br><br>

| Role Name       | User is allowed to:            |
|-----------------|--------------------------------|
| Discover        | Add TrueNAS systems to vCenter |
| Create Clones   | Copy existing datastores       |
| Create Storage  | Create new datastores          |
| Modify Storage  | Edit existing datastores       |
| Destroy Storage | Delete datastores              |

Each role gives the user the ability to perform the functions in that role and all of the roles that precede it in the list.
For example, a user with a *Create Storage* role can create a new datastore and clone existing datastores.
The vCenter administrator account always has all permissions.

{{% pageinfo %}}
New vCenter users must be created in **Menu > Administration > Single Sign On > Users and Groups**.
{{% /pageinfo %}}

## Add a Role to an Existing vCenter User

Click **+** to open the Add Role Based Access Control window.
Type a user name in the form `DOMAIN.NAME\username`, where `DOMAIN.NAME` is the user Domain found in the **vCenter Menu > Administration > Single Sign On > Users and Groups** page.
Open the *Assign Role* drop-down menu and choose a role for the user.
Click **Add** to add the role.

If the entry does not appear in the list immediately, click **Refresh**.