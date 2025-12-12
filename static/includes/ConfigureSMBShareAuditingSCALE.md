&NewLine;

Configure and enable SMB auditing for an SMB share at creation or when modifying an existing share.

SMB auditing is only supported for SMB2 (or newer) protocol-negotiated SMB sessions.
SMB1 connections to shares with auditing enabled are rejected.

From the **Add SMB Share** or **Edit SMB Share** screen, click **Advanced Options** and scroll down to **Audit Logging**.

{{< trueimage src="/images/SCALE/Shares/SMBShareAdvancedAuditLogging.png" alt="SMB Share Auditing Settings" id="SMB Share Auditing Settings" >}}

Selecting **Enable** turns auditing on for the share you are creating or editing.

{{< hint type=important >}}
At least one of **Watch List** or **Ignore List** must contain entries when enabling audit logging.

Auditing all SMB operations without restrictions creates large audit databases that grow rapidly and consume significant disk space. High-volume SMB environments can generate hundreds of thousands of audit entries per day, leading to increased disk I/O that affects overall system performance and database query delays when reviewing audit logs.

Configure filtering to audit only necessary operations.
{{< /hint >}}

{{< hint type=note >}}
TrueNAS 25.10.1 and later automatically disables SMB shares when auditing is enabled and the watch list or ignore list contains invalid groups, such as groups that:

- No longer exist (for example, deleted or renamed groups in Active Directory).
- Are not SMB groups (groups with **SMB Group** selected in the group configuration).

TrueNAS generates an alert identifying the affected share and the problematic group.
The share remains disabled until you resolve the group issue or update the share configuration to remove the invalid group.
See [Troubleshooting Group Validation Issues](#troubleshooting-group-validation-issues) for detailed steps.
{{< /hint >}}

## Configuring Watch and Ignore Lists

Use **Watch List** to specify which groups should have their SMB operations audited.
To configure the watch list:

1. Click the **Watch List** field to display available groups on the system.
2. Select a group to add it to the list.
3. Repeat to add additional groups.

When **Watch List** contains entries, TrueNAS audits only SMB operations performed by members of the listed groups.

Use **Ignore List** to exclude specific groups from auditing.
To configure the ignore list:

1. Click the **Ignore List** field to display available groups on the system.
2. Select a group to exclude it from auditing.
3. Repeat to exclude additional groups.

TrueNAS does not record SMB operations performed by members of groups in the **Ignore List**.

When using both lists: If a user is a member of groups in both **Watch List** and **Ignore List**, the **Watch List** takes precedence and TrueNAS audits that user's operations.

{{< hint type=note title="Authentication Events" >}}
SMB Authentication events are logged globally for all users connecting to the SMB server, regardless of Watch List or Ignore List settings.
Watch and Ignore Lists control subsequent operations (connect, file creates, reads, writes, etc.) but do not filter authentication events.
Users in the Ignore List still have their initial authentication logged, but their file operations on the share are not audited.
{{< /hint >}}

Review your settings to verify that at least one list contains entries and the correct groups are selected.

Click **Save**.

After saving, restart the SMB service for audit logging to begin.
Go to **System Settings > Services**, toggle the **SMB** service off then on, and verify the service is running before testing audit log generation.

## Troubleshooting Group Validation Issues

If you receive an alert indicating an SMB share has been disabled due to invalid groups in the audit configuration, follow these steps:

1. Identify the problem:
   - Review the alert message to identify which share is affected and which group is invalid.

2. Check group status:
   - Navigate to **Credentials > Local Groups** to verify the group exists and is configured as an SMB group.
   - For Active Directory groups, verify the group exists in AD and the directory service connection is functioning.
   - Confirm the group type is set to SMB (not changed from SMB to another type).

3. Resolve the issue:
   - If the group was deleted or renamed: Navigate to **Shares > Windows (SMB) Shares**, edit the affected share, and update the **Watch List** or **Ignore List** to remove the invalid group or replace it with the correct group name.
   - If the group exists but is not an SMB group: Edit the group in **Credentials > Local Groups** and select the **SMB Group** option, or update the share audit configuration to use a different group.
   - If using Active Directory: Verify the Active Directory connection is active in **Credentials > Directory Services**. If the connection was temporarily offline, restarting the SMB service might re-enable the share once the connection is restored.

4. Restart the SMB service:
   - After correcting the group configuration or share settings, go to **System > Services** and restart the SMB service to re-enable the share.
   - Verify the share is functioning by checking the alert has cleared and testing access from an SMB client.
