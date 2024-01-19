&NewLine;

Configure and enable SMB auditing for an SMB share at creation or when modifying an existing share.

SMB auditing is only supported for SMB2 protocol-negotiated SMB sessions (or higher).
SMB1 connections to shares with auditing enabled are rejected.

From the **Add SMB Share** or **Edit SMB Share** screen, click **Advanced Options** and scroll down to **Audit Logging**.

{{< trueimage src="/images/SCALE/Shares/SMBShareAdvancedAuditLogging.png" alt="SMB Share Auditing Settings" id="SMB Share Auditing Settings" >}}

Select **Enable** to turn audition on for the share you are creating or editing. This activates auditing for this share.

Use the **Watch List** and **Limit List** functions to add audit logging groups to include or exclude.
Click in **Watch List** to see a list of groups on the system to choose from. Click on the group to add it.
Leave **Watch List** blank to include all groups, otherwise auditing is restricted to only the groups added.

Click in **Limit List** to see a list of groups on the system to choose from. Click on the group to add it.

If using both lists the watch list takes precedence over the limit list.

Click **Save**.
