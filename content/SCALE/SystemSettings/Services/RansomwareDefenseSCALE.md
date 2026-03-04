---
title: "TrueNAS Ransomware Defense"
description: "Provides instructions for configuring and managing TrueNAS Ransomware Defense to protect file shares from ransomware attacks."
weight:
tags:
- ransomware
- security
- services
- ransomware defense
keywords:
- ransomware defense
- ransomware protection
- truenas ransomware
- ransomware detection
- ransomware recovery
---

*TrueNAS Ransomware Defense* is a security service that monitors SMB and NFS file shares in real time and automatically responds to ransomware attacks to protect data stored on your TrueNAS system.

TrueNAS Ransomware Defense is enabled and managed through TrueNAS Connect.
After enabling the service, access the Ransomware Defense interface directly at `https://truenas-system-address/rwd` and log in with your TrueNAS system credentials.

{{< hint type=note >}}
TrueNAS Ransomware Defense protects SMB and NFS file shares only.
It does not protect client computers, email, web traffic, or other services.
{{< /hint >}}

## Before You Begin

- Enable TrueNAS Ransomware Defense on the target system through TrueNAS Connect.
  See the [TrueNAS Connect documentation](https://connect.truenas.com/docs/) for instructions.
  <!-- PLACEHOLDER: Update link to the specific Enable TrueNAS Ransomware Defense article once published in connect-docs. -->
- Verify at least one dataset exists on the TrueNAS system. TrueNAS Ransomware Defense monitors existing datasets and does not create them.
- Confirm you have TrueNAS system credentials with admin-level access (root, sudo group, or builtin_administrators group membership).

## Accessing TrueNAS Ransomware Defense

Open a browser and navigate to `https://truenas-system-address/rwd`, where *truenas-system-address* is the hostname or IP address of your TrueNAS system.

<!-- PLACEHOLDER: Add screenshot of login screen -->

Log in with your TrueNAS system credentials.

{{< expand "About user roles" "v" >}}
TrueNAS Ransomware Defense maps roles from TrueNAS system group membership:

{{< truetable >}}
| Role | Group Membership | Access |
|------|-----------------|--------|
| Admin | root, sudo, or builtin_administrators | Full access to all features including protection settings, user management, and IP security controls. |
| Operator | operators | Can view all information and pause or resume monitoring, but cannot change protection settings or manage users. |
| Viewer | All other users | Read-only access to dashboards, events, and status. |
{{< /truetable >}}
{{< /expand >}}

After logging in, the **Dashboard** displays the current monitoring state, active alert count, protected dataset count, and recent detection events.

## Setting Up TrueNAS Ransomware Defense

Complete this initial configuration before using TrueNAS Ransomware Defense in a production environment.

### Enabling Report Only Mode for Testing

Before activating full protection, enable **Report Only** mode to verify the system is working correctly without risk of disrupting file access.

1. Click **Settings** in the sidebar.
2. Enable the **Report Only** toggle.
3. Click **Save**.

With **Report Only** enabled, TrueNAS Ransomware Defense detects threats and logs alerts but does not block IPs, disable shares, or set datasets to read-only.
Disable **Report Only** after testing to enable full automated protection.

### Adding Datasets to Monitoring

1. Click **Datasets** in the sidebar.
2. Locate the dataset to protect in the list.
3. Click **Monitor** next to the dataset.
   The dataset status changes to *monitoring*.

After adding a dataset, TrueNAS Ransomware Defense automatically creates *honeypot files* in the dataset.
Honeypot files are decoy files with realistic names distributed across the dataset.
Any access to a honeypot file triggers an immediate high-confidence ransomware alert.

{{< hint type=important >}}
Do not delete honeypot files from monitored datasets. Removing them reduces detection capability.
To view all honeypot files, click **Files** in the sidebar.
{{< /hint >}}

To stop monitoring a dataset, locate it in the **Datasets** list and click the stop monitoring option.
This removes the dataset from monitoring and removes its honeypot files.

### Configuring Protection Settings

Protection settings determine how TrueNAS Ransomware Defense responds when it detects a threat.

1. Click **Settings** in the sidebar.
2. Enable or disable each protection toggle as needed.
3. Click **Save**.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Report Only** | Detects and logs threats but takes no automated action. Use for initial testing and threshold tuning. Disable to activate full protection. |
| **Disable Share** | Turns off all SMB and NFS shares on the affected dataset when ransomware is detected. Drops active client sessions immediately. |
| **Read Only** | Sets the affected dataset to read-only mode. Active connections can read files but cannot write to the dataset. |
| **Restrict Access** | Applies both **Disable Share** and **Read Only** simultaneously for maximum automated response. |
| **Stop Deleting Snapshots** | Pauses snapshot retention cleanup during an active incident to preserve snapshots needed for recovery. |
{{< /truetable >}}

{{< expand "Recommended configurations" "v" >}}
Choose a configuration based on your environment requirements.

**Conservative — low false positive risk**
Best for production environments where disrupting file access is unacceptable:
- **Report Only**: Off
- **Disable Share**: On
- **Read Only**: Off
- **Stop Deleting Snapshots**: On

**Aggressive — maximum protection**
Best for high-security environments or systems actively under attack:
- **Disable Share**: On
- **Read Only**: On
- **Restrict Access**: On
- **Stop Deleting Snapshots**: On

**Testing**
Use during initial deployment and threshold tuning:
- **Report Only**: On
- All other protections: Off
{{< /expand >}}

### Configuring a Snapshot Schedule

TrueNAS Ransomware Defense uses ZFS snapshots both as recovery points and as a detection method.
*Scheduled snapshots* are created automatically at regular intervals and compared to detect unusual data change rates.
*Ransomware snapshots* are created instantly when an attack is detected.

{{< hint type=important >}}
Snapshot-based detection requires an active snapshot schedule.
Without scheduled snapshots, TrueNAS Ransomware Defense cannot detect slow-moving ransomware that avoids other detection thresholds.
{{< /hint >}}

1. Click **Snapshots** in the sidebar.
2. Click the **Configuration** tab.
3. Enable automatic snapshot creation.
4. Set the snapshot **Interval** in minutes.
5. Set the **Retention** count to determine how many snapshots to keep before older ones are deleted automatically.
6. Enable **Change Detection**.
7. Set the change detection **Threshold** percentage.
   An alert triggers when the percentage of dataset data that changed between consecutive snapshots exceeds this value.
8. Click **Save**.

{{< expand "Recommended snapshot values" "v" >}}
{{< truetable >}}
| Environment | Interval | Retention | Threshold |
|-------------|----------|-----------|-----------|
| Standard production | 15 minutes | 96 (24 hours) | 30% |
| High-security | 5 minutes | 288 (24 hours) | 15% |
| Testing / initial setup | 60 minutes | 168 (7 days) | Disabled |
{{< /truetable >}}

Lower threshold values increase sensitivity and catch more gradual attacks but also increase the risk of false positives during periods of high legitimate activity.
{{< /expand >}}

### Verifying Active Protection

Return to the **Dashboard** and confirm:

- The system status indicator shows **Running**.
- The monitored datasets count reflects the datasets you added.
- No active alerts are present.

After verifying the system is working correctly in **Report Only** mode, go to **Settings**, disable **Report Only**, and click **Save** to enable full automated protection.

## Responding to Ransomware Alerts

TrueNAS Ransomware Defense displays a red alert indicator on the **Dashboard** when it detects suspicious activity.

<!-- PLACEHOLDER: Add screenshot of Dashboard with active alert -->

### Investigating an Alert

1. On the **Dashboard**, click the alert indicator to view event details.
2. Review the event information: the file accessed or modified, the client IP address, the detection method that triggered the alert, and the timestamp.
3. Click **Events** in the sidebar to view the full log for this detection and any related events.
4. Filter events by dataset, type, or date to identify the full scope of the activity.

{{< expand "Detection methods" "v" >}}
TrueNAS Ransomware Defense uses four methods to detect ransomware activity:

- **Honeypot access**: Any access to a honeypot file triggers an immediate high-confidence alert. This is the most reliable detection method.
- **Suspicious behavior**: Detects rapid file modifications, mass file rewrites, systematic directory scanning, and file read-then-rewrite patterns consistent with encryption.
- **File analysis**: Detects files with unusually high data randomness (indicating encrypted content), file type mismatches, and file extension changes such as renaming documents to *.encrypted*.
- **Snapshot comparison**: Alerts when more than the configured threshold percentage of dataset data changes between consecutive snapshots, catching slow-moving ransomware.
{{< /expand >}}

### Recovering from a Ransomware Attack

After confirming an alert represents a real attack, use the ransomware snapshot to restore the dataset to a clean state.

{{< hint type=important >}}
Snapshot restoration is performed in the TrueNAS web interface — not in TrueNAS Ransomware Defense.
TrueNAS Ransomware Defense identifies the recovery snapshot, but the rollback operation uses the TrueNAS **Snapshots** screen.
{{< /hint >}}

1. Click **Snapshots** in the sidebar.
2. Locate the ransomware snapshot. Ransomware snapshots include a *ransomware* identifier and timestamp in the name, for example: `tank/dataset@ransomware-1730217600`.
3. Note the full snapshot name.
4. Open the TrueNAS web interface in a separate browser tab and go to **Storage > Snapshots**.
5. Locate the ransomware snapshot and click **Rollback**.
6. Confirm the rollback operation.

   {{< hint type=important >}}
   Rolling back a dataset to a snapshot removes all data created or modified after the snapshot was taken.
   Verify the snapshot timestamp before confirming to understand what data is affected.
   {{< /hint >}}

7. Verify that data is restored and files appear intact.
8. Return to TrueNAS Ransomware Defense, click **Datasets**, and click **Reset Status** on the restored dataset.
   The dataset returns to *monitoring* state and protection resumes.
9. Click **IP Security** and review blocked IPs. Click **Unblock** for any blocked address that has been fully remediated.

### Resetting After a False Positive

A false positive occurs when TrueNAS Ransomware Defense detects legitimate activity as a threat.
Common causes include backup jobs, file migration tasks, or other operations that access or modify large numbers of files rapidly.

1. Click **IP Security** in the sidebar.
2. Locate the blocked IP and click **Unblock**.
3. Click **Datasets** in the sidebar.
4. Locate the affected dataset and click **Reset Status**.
   The dataset returns to *monitoring* state and shares re-enable automatically.

{{< expand "Adjusting settings to prevent recurrence" "v" >}}
If the same legitimate activity repeatedly triggers false positives:

- **Increase the snapshot change detection threshold**: In **Snapshots > Configuration**, raise the **Threshold** percentage so that large but legitimate data changes do not trigger detection.
- **Use Report Only mode during scheduled maintenance**: Enable **Report Only** before known maintenance tasks run and disable it afterward to avoid false blocks during predictable high-activity periods.
{{< /expand >}}

## Managing IP Security

TrueNAS Ransomware Defense automatically blocks client IP addresses when ransomware activity is detected.

{{< hint type=note >}}
IP blocks in TrueNAS Ransomware Defense are permanent until manually removed. There is no automatic unblock after a time period.
There is also no IP allowlist — all addresses are subject to automatic blocking if they trigger detection thresholds.
{{< /hint >}}

Go to **IP Security** in the sidebar to view blocked IPs, view suspicious IPs with their threat scores, manually block an IP, or unblock a previously blocked address.

{{< truetable >}}
| Action | Description |
|--------|-------------|
| View **Blocked IPs** | Shows all currently blocked addresses, the reason for the block, and the detection event that triggered it. |
| View **Suspicious IPs** | Shows addresses with unusual activity and a threat score. A rising score on a known address might indicate an attack in progress. |
| Manual block | Immediately blocks a client IP from accessing all file shares. Active SMB sessions from that address are dropped. |
| **Unblock** | Removes the block. The client regains access to file shares immediately. |
{{< /truetable >}}

Only unblock a client IP after confirming the threat has been resolved.

## Understanding Dataset Status

{{< truetable >}}
| Status | Description |
|--------|-------------|
| *monitoring* | The dataset is actively monitored. Honeypot files are in place and detection is running. |
| *ransomware_found* | Ransomware activity was detected. Protection actions were applied. An admin must click **Reset Status** before monitoring resumes. |
| *locked* | The dataset is locked by a protection action. Access is restricted until manually restored. |
{{< /truetable >}}

{{< hint type=important >}}
When ransomware is detected on a dataset, the status changes to *ransomware_found* and stays there until an admin manually resets it.
This requires a human to verify the threat is resolved before monitoring resumes.
After a detection event, also note that the same file does not trigger automated mitigation again for five minutes.
Resolve the root cause before re-enabling access.
{{< /hint >}}
