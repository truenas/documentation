---
title: "Managing Privileges"
description: "Provides instructions on adding and managing groups privileges."
weight: 20
tags:
 - groups
keywords:
- enterprise storage solution
- nas storage 
doctype: tutorial
---


{{< hint type=warning >}}
Never modify the settings for the standard pre-defined privileges (listed below)! Changing these pre-defined roles can result in lost access to the UI!

Pre-defined TrueNAS privileges ares:

* **Read-Only Administrator** - Allows the user to view settings but not make changes in the UI.
* **Sharing Administrator** - Allows the user to create new shares and the share dataset.
* **Local Administrator** - Gives full control (read/write/execute permissions) to the user.
{{< /hint >}}

Active Directory can provision groups in TrueNAS or you can add new groups that you assign to users in AD.
After adding a group, verify or edit the privilege(s) granted to the users in the group.

## Adding a Privilege

{{< include file="/static/includes/AddPrivilege.md" >}}
