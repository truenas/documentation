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

## Configuring Watch List

Use **Watch List** to specify which groups should have their SMB operations audited. Use **Ignore List** to exclude specific groups from auditing.

1. Click the **Watch List** field to display available groups on the system.
2. Select a group to add it to the list.
3. Repeat to add additional groups.

When **Watch List** contains entries, TrueNAS audits only SMB operations performed by members of the listed groups.

**Configuring Ignore List:**
1. Click the **Ignore List** field to display available groups on the system.
2. Select a group to exclude it from auditing.
3. Repeat to exclude additional groups.

TrueNAS does not record SMB operations performed by members of groups in the **Ignore List**.

**When using both lists:** If a user is a member of groups in both **Watch List** and **Ignore List**, the **Watch List** takes precedence and TrueNAS audits that user's operations.

{{< hint type=note title="Authentication Events" >}}
SMB Authentication events are logged globally for all users connecting to the SMB server, regardless of Watch List or Ignore List settings.
Watch and Ignore Lists control subsequent operations (Connect, file creates, reads, writes, etc.) but do not filter Authentication events.
Users in the Ignore List still have their initial authentication logged, but their file operations on the share are not audited.
{{< /hint >}}

Review your settings to verify that at least one list contains entries and the correct groups are selected.

Click **Save**.

After saving, you may need to restart the SMB service for audit logging to begin. Go to **System Settings > Services**, toggle the **SMB** service off then on, and verify the service is running before testing audit log generation.
