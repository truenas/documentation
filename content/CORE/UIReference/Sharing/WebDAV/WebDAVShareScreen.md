---
title: "WebDAV Screen"
description: "Use the Sharing WebDAV screen to configure WebDAV on your TrueNAS"
weight: 10
tags:
- corewebdav
---

Use the **Sharing WebDAV** screen to configure WebDAV on your TrueNAS.

![WebDAVShareScreen](/images/CORE/13.0/WebDAVShareScreen.png "Sharing WebDAV Screen")

Use **COLUMNS** to change the columns displayed in the table. Options are **Select All**, **Description**, **Path**, **Enabled**, **Read Only**, **Change User and Group Owners** or **Reset to Defaults**.

Use **ADD** to open the WebDAV configuration screen.

![WebDAVAddScreen](/images/CORE/13.0/WebDAVAddScreen.png "Sharing WebDAV Add Screen")

| Settings | Descritpion |
|----------|-------------|
| **Name** | Enter a name for the share. |
| **Description** | Optional. |
| **Path** | Browse to the pool or dataset to share. |
| **Read Only** | Set to prohibit users from writing to this share. |
| **Change User & Group Ownership** | Change existing ownership of all files in the share to user webdav and group webdav. If checkmark cleared, you must manually set ownership of files accessed through WebDAV to the **webdav** or **www** user/group. |
| **Enabled** | Select to enable this WebDAV share. Leave checkbox clear to disable this WebDAV share without deleting it. |

{{< taglist tag="corewebdav" limit="10" title="Related Articles" >}}