---
title: "WebDAV Screen"
description: "Use the Sharing WebDAV screen to configure Web Distributed Authoring and Versioning (WebDAV) on your TrueNAS."
weight: 10
tags:
- corewebdav
---

Web Distributed Authoring and Versioning (WebDAV) is an extension of the HTTP protocol designed to facilitate web content authoring and management.
Use the **Sharing WebDAV** screen to configure WebDAV on your TrueNAS.

![WebDAVShareScreen](/images/CORE/13.0/WebDAVShareScreen.png "Sharing WebDAV Screen")

Click **COLUMNS** to change the columns displayed in the table. Options are **Select All**, **Description**, **Path**, **Enabled**, **Read Only**, **Change User and Group Owners** or **Reset to Defaults**.

Click **ADD** to open the WebDAV configuration screen.

![WebDAVAddScreen](/images/CORE/13.0/WebDAVAddScreen.png "Sharing WebDAV Add Screen")

| Name | Description |
|----------|-------------|
| **Name** | Enter a name for the share. |
| **Description** | Optional. |
| **Path** | Browse to the pool or dataset to share. |
| **Read Only** | Select to prohibit users from writing to this share. |
| **Change User & Group Ownership** | Change existing ownership of all files in the share to user webdav and group webdav. If check mark cleared, you must manually set ownership of files accessed through WebDAV to the **webdav** or **www** user/group. |
| **Enabled** | Select to enable this WebDAV share. Leave checkbox clear to disable this WebDAV share without deleting it. |

{{< taglist tag="corewebdav" limit="10" >}}