---
title: "S3 Buckets Screens"
description: "Provides information on the S3 bucket screens, widget, and settings in TrueNAS."
weight: 20
tags:
- s3
- object storage
- shares
doctype: reference
---

The S3 bucket screens and the **Object Storage (S3) Buckets** widget on the **Shares** screen show the S3 buckets on the system and the options to add, edit, and delete buckets.

## Object Storage (S3) Buckets Widget

The **Object Storage (S3) Buckets** widget on the **Shares** screen shows general information about S3 object storage until you add a bucket.

{{< trueimage src="/images/SCALE/Shares/S3CardUnconfigured.png" alt="Object Storage (S3) Buckets Widget without Buckets" id="Object Storage (S3) Buckets Widget without Buckets" >}}

The **Object Storage (S3) Buckets <span class="material-icons">launch</span>** header is a link that opens the [**S3 Buckets** screen](#s3-buckets-screen).
The **Experimental** label shows next to the header.

The service status button shows the S3 service as **Stopped** or **Running**.

**Add** opens the [**Add S3 Bucket**](#add-and-edit-s3-bucket-screens) screen.

The <span class="material-icons">more_vert</span> dropdown list shows options for the S3 service:

* **Turn On Service** starts the S3 service. It changes to **Turn Off Service** when the service is running.
* **Config Service** opens the [**S3** service configuration screen]({{< ref "S3ServiceScreen" >}}).
* **Access Keys** opens the [**S3 Access Keys** screen]({{< ref "S3AccessKeysScreen" >}}).

After you add a bucket, the widget lists buckets in a table.

{{< trueimage src="/images/SCALE/Shares/S3ServiceRunningwithMenu.png" alt="Object Storage (S3) Buckets Widget with Bucket" id="Object Storage (S3) Buckets Widget with Bucket" >}}

The widget table shows the bucket **Name**, the bucket **Dataset**, the bucket **Owner**, and an **Enabled** toggle.
The **Enabled** toggle starts or stops serving the bucket to S3 clients.

The <span class="material-icons">more_vert</span> icon on a bucket row shows these options:

* **<span class="material-icons">edit</span> Edit** opens the [**Edit S3 Bucket**](#add-and-edit-s3-bucket-screens) screen.
* **<span class="material-icons">security</span> Edit Filesystem ACL** opens the ACL editor for the <file>s3data</file> directory of the bucket.
* **<span class="material-icons">delete</span> Delete** opens the [**Delete S3 bucket**](#delete-s3-bucket-dialog) confirmation dialog.

### Start S3 Service Dialog

The **Start S3 Service** dialog opens after you save a bucket while the S3 service is stopped.

{{< trueimage src="/images/SCALE/Shares/S3StartServiceDialog.png" alt="Start S3 Service Dialog" id="Start S3 Service Dialog" >}}

**Enable this service to start automatically** starts the S3 service when the system boots.

**Start** starts the S3 service. **No** closes the dialog without starting the service.

## S3 Buckets Screen

The **Shares > S3** screen shows the **S3 Buckets** table.
The table lists all S3 buckets on the system with more detail than the widget.
Click the **Object Storage (S3) Buckets <span class="material-icons">launch</span>** widget header to open the screen.

{{< trueimage src="/images/SCALE/Shares/S3BucketsScreen.png" alt="S3 Buckets Screen" id="S3 Buckets Screen" >}}

**Shares** in the breadcrumb at the top of the screen returns you to the **Shares** screen.

**Access Keys** opens the [**S3 Access Keys** screen]({{< ref "S3AccessKeysScreen" >}}).

**Columns** shows options to customize the table view.
The table shows the **Name**, **Dataset**, **Owner**, **Permissions Model**, **Versioning**, **Object Lock**, and **Enabled** columns by default.
**Object Ownership** and **Storage Tier** are hidden by default.

**Add** opens the [**Add S3 Bucket**](#add-and-edit-s3-bucket-screens) screen.

The <span class="material-icons">more_vert</span> icon on a bucket row shows the same **Edit**, **Edit Filesystem ACL**, and **Delete** options as the widget.
When storage tiering is available for the bucket dataset, the list also shows **Change Storage Tier**.

{{< include file="/static/includes/addcolumnorganizer.md" >}}

### Delete S3 Bucket Dialog

The **Delete** option opens the **Delete S3 bucket** confirmation dialog.

Deleting a bucket removes the bucket from the S3 service.
It does not delete the bucket dataset or any objects in it, including objects under object lock.
The S3 service stops serving the objects to clients.

To remove the stored data, delete the bucket dataset from the **Datasets** screen after you delete the bucket.

**Delete** removes the bucket. **Cancel** closes the dialog.

## Add and Edit S3 Bucket Screens

The **Add S3 Bucket** and **Edit S3 Bucket** screens show the same settings, with these differences:

* The **Add S3 Bucket** screen shows **Parent Dataset**, a file browser to select the dataset where TrueNAS creates the bucket dataset.
* The **Edit S3 Bucket** screen shows the bucket **Dataset** as read-only. You cannot change the dataset after you create the bucket.

The screen opens in basic mode and shows the **Bucket** and **Object Lock** settings.
**Advanced Options** shows the **Versioning**, **ZFS Snapshots**, **Access**, **Other Options**, and **Auditing** settings.
**Basic Options** returns to the basic settings.

**Save** creates the bucket or saves changes to an existing bucket.

{{< trueimage src="/images/SCALE/Shares/AddS3BucketBasicOptions.png" alt="Add S3 Bucket Basic Options" id="Add S3 Bucket Basic Options" >}}

### Bucket Settings

The **Bucket** settings name the bucket, set the dataset location, and assign the bucket owner.

{{< expand "Click Here for More Information" "v" >}}
{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | (Required) Enter a name for the bucket. The name must follow the S3 bucket naming rules. Enter 3 to 63 characters using lowercase letters, numbers, periods, and hyphens. The name must start and end with a letter or number, cannot contain two periods in a row, and cannot be formatted as an IP address. |
| **Parent Dataset** | (Required) Shows only on the **Add S3 Bucket** screen. Select the dataset where TrueNAS creates the bucket dataset. TrueNAS creates a new child dataset named after the bucket. The hint below the field shows the full path of the bucket dataset. You cannot select an existing dataset as the bucket dataset. Objects are stored in the <file>s3data</file> directory of the bucket dataset. |
| **Dataset** | Shows only on the **Edit S3 Bucket** screen. Displays the read-only path of the bucket dataset. |
| **Owner** | (Required) Select the user account that owns the bucket. The owner has full access to the bucket regardless of the grants, owns the <file>s3data</file> directory, and owns every uploaded object when **Object Ownership** is **Bucket Owner Enforced**. The root account cannot own a bucket. The list shows non-built-in user accounts. **Add New** opens the **Add User** screen to create an account for the bucket. |
| **Enabled** | Selected by default. Select to serve the bucket to S3 clients. Clear to stop serving the bucket without deleting it. |
{{< /truetable >}}
{{< /expand >}}

### Object Lock Settings

The **Object Lock** settings protect objects from overwrite or deletion for a retention period.
Object lock requires versioning, which is a licensed feature.
The section shows a **Premium** tag when the system license does not include it.

{{< hint type=warning >}}
Object lock is permanent.
After you save a bucket with object lock enabled, you cannot disable object lock or versioning on that bucket.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Shares/S3ObjectLockOptions.png" alt="Object Lock Settings" id="Object Lock Settings" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Object Lock** | Select to enable object lock on the bucket. Selecting this option sets **Versioning** to **Enabled** and keeps it enabled. Not available when **Permissions Model** is **Multiprotocol**. After you save the bucket, the checkbox is selected and inactive. Shows **Default Retention Mode** when selected. |
| **Default Retention Mode** | Shows after selecting **Enable Object Lock**. Select the retention mode TrueNAS applies to new objects that do not set their own retention. Options are:<ul><li>**No default rule** - Applies no default retention. Clients set retention on each object. Select this option when the bucket is a target for a backup application that manages its own object retention, such as Veeam Backup & Replication.</li><li>**Governance** - Prevents normal users from overwriting or deleting objects during the retention period. Users with special permission can override the retention.</li><li>**Compliance** - Prevents anyone from overwriting or deleting objects, or shortening the retention period, until the retention period ends.</li></ul>The first time you select **Enable Object Lock** on a bucket, this field changes to **Compliance**. Shows **Default Retention Days** when set to **Governance** or **Compliance**. |
| **Default Retention Days** | (Required) Shows when **Default Retention Mode** is **Governance** or **Compliance**. Enter the number of days TrueNAS retains new objects under the default rule, from 1 to 36500. |
{{< /truetable >}}
{{< /expand >}}

After you save a bucket with object lock enabled, the **Edit S3 Bucket** screen shows **Enable Object Lock** as selected and inactive.

{{< trueimage src="/images/SCALE/Shares/S3EditBucketWizardWithObjectLock.png" alt="Edit S3 Bucket with Object Lock" id="Edit S3 Bucket with Object Lock" >}}

### Advanced Options

**Advanced Options** shows the versioning, snapshot, access, ETag, and auditing settings.

{{< trueimage src="/images/SCALE/Shares/AddS3BucketAdvancedOptions.png" alt="Add S3 Bucket Advanced Options" id="Add S3 Bucket Advanced Options" >}}

#### Versioning Settings

The **Versioning** settings keep previous versions of objects when clients overwrite or delete them.
Versioning is a licensed feature.
The section shows a **Premium** tag when the system license does not include it.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Versioning** | (Required) Select the versioning state from the dropdown list. Options are:<ul><li>**Off** - Keeps no previous versions. This is the default.</li><li>**Enabled** - Keeps a previous version each time a client overwrites or deletes an object.</li><li>**Suspended** - Stops creating new versions but keeps the versions the bucket already has.</li></ul>After a bucket has versioning set to **Enabled** or **Suspended**, **Off** is not available. Set versioning to **Suspended** to stop creating versions. Object lock keeps versioning set to **Enabled**. |
| **Force Disable Versioning** | Shows on the **Edit S3 Bucket** screen for a bucket that has versioning set to **Enabled** or **Suspended**. Opens the [**Force disable versioning**](#force-disable-versioning-dialog) confirmation dialog. Inactive for a bucket with object lock enabled. |
{{< /truetable >}}
{{< /expand >}}

#### Force Disable Versioning Dialog

**Force Disable Versioning** opens a confirmation dialog that sets versioning to **Off** and destroys the version history of the bucket.

{{< hint type=warning >}}
Force disabling versioning permanently destroys every previous version of every object in the bucket, and every delete marker.
This cannot be undone.
{{< /hint >}}

The dialog explains the result of the action:

* The version history stops being available immediately.
* The S3 service reclaims the space used by previous versions in the background.
* The **Snapshot Versions** patterns clear, so snapshots stop serving as versions until you set new patterns.
* The S3 service restarts, which briefly interrupts client requests.

ZFS snapshots of the bucket dataset keep the old versions until you delete those snapshots.
Turning versioning on again later starts a new version history. It does not restore the destroyed history.

Select **I understand that the version history of this bucket will be destroyed.** to activate **Force Disable**.
**Force Disable** applies the change immediately, separate from the rest of the **Edit S3 Bucket** screen.

#### ZFS Snapshots Settings

The **ZFS Snapshots** settings make ZFS snapshots of the bucket dataset available to clients as read-only object versions.
Clients list these versions and read an object as it existed when TrueNAS took the snapshot.

Snapshot versions work whether versioning is on or off, and do not require a license.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Snapshot Versions** | Enter a pattern that matches the names of the bucket dataset snapshots to serve as versions, then press <kbd>Enter</kbd>. Add more than one pattern to match more snapshots. Use an asterisk (\*) to match any number of characters and a question mark (?) to match a single character. For example, enter <i>auto-\*</i> to serve snapshots created by a periodic snapshot task that uses the default naming schema. Leave empty to serve no snapshots as versions. Shows **Snapshot Versions Listed** after you enter a pattern. |
| **Snapshot Versions Listed** | (Required) Shows after you enter a **Snapshot Versions** pattern. Enter the number of the most recent matching snapshots to include when a client lists object versions. The default is *64*. Older matching snapshots are still available to a client that requests them by version ID. |
{{< /truetable >}}
{{< /expand >}}

#### Access Settings

The **Access** settings control how the S3 service treats filesystem permissions, who owns uploaded objects, and which users and groups can access the bucket.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Permissions Model** | (Required) Select how the S3 service applies filesystem permissions. Options are:<ul><li>**S3** - The S3 service is the only way to access the bucket. The service ignores filesystem permissions and uses the bucket grants to decide access. This is the default.</li><li>**Multiprotocol** - Other protocols, such as SMB or NFS, also share the <file>s3data</file> directory. The S3 service enforces the filesystem ACL as well as the grants. S3 ACLs are not supported.</li></ul>**Multiprotocol** is not available when **Enable Object Lock** is selected. |
| **Object Ownership** | (Required) Select who owns uploaded objects and whether the bucket supports S3 ACLs. Options are:<ul><li>**Bucket Owner Enforced** - The bucket owner owns every object and S3 ACLs are disabled. The grants control all access, and a user with a grant does not need permissions on the dataset. This is the default.</li><li>**Bucket Owner Preferred** - The bucket owner owns objects uploaded with the bucket-owner-full-control ACL. The account that uploads any other object owns that object.</li><li>**Object Writer** - The account that uploads an object owns it and can grant other users access to it through S3 ACLs.</li></ul>When **Permissions Model** is **Multiprotocol**, this field is set to **Object Writer** and is inactive. |
| **Grants** | Click **Add** to add a grant that gives a user, group, or everyone access to the bucket. Each grant shows the **Principal**, **User** or **Group**, and **Access** settings. Click the <span class="material-icons">close</span> icon to remove a grant. |
| **Principal** | (Required) Shows after clicking **Add** for **Grants**. Select who the grant applies to. Options are **User**, **Group**, or **Everyone**. **Everyone** applies to any client with a valid access key. |
| **User** or **Group** | (Required) Shows when **Principal** is **User** or **Group**. Select the user or group account. |
| **Access** | (Required) Select the access level for the grant. Options are:<ul><li>**Read Only** - Allows read operations.</li><li>**Write Only** - Allows write operations.</li><li>**Read / Write** - Allows read and write operations.</li><li>**Deny** - Refuses every operation for the principal, including the bucket owner.</li></ul> |
{{< /truetable >}}
{{< /expand >}}

#### Other Options Settings

The **Other Options** settings set the ETag format for objects uploaded in multiple parts.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Multipart ETag** | (Required) Select the entity tag (ETag) format for objects that clients upload in multiple parts. Options are:<ul><li>**Minted (opaque token)** - Gives the object a unique token and skips calculating a checksum for every part. This is the default.</li><li>**Composite (S3 standard)** - Gives the object the standard S3 multipart ETag, built from the MD5 checksum of each part. Select this option if a client verifies or resumes uploads by calculating the ETag and comparing it.</li></ul> |
{{< /truetable >}}
{{< /expand >}}

#### Auditing Settings

The **Auditing** settings select which S3 operations on the bucket TrueNAS records in the audit log.
S3 auditing is a licensed feature.
The section shows a **Premium** tag when the system license does not include it.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Audit** | (Required) Select which operations to audit. Options are:<ul><li>**Use service default** - Applies the **Default Audit** setting from the **S3** service configuration screen. This is the default.</li><li>**Audit all actions** - Records every auditable operation on the bucket.</li><li>**Audit nothing** - Records no operations on the bucket.</li><li>**Audit selected actions** - Records the operations you select in **Audited Actions**.</li></ul> |
| **Audited Actions** | Shows when **Audit** is **Audit selected actions**. Select one or more S3 operations from the dropdown list, such as **GetObject**, **PutObject**, or **DeleteObject**. |
| **Audit Overflow** | Select what happens to an audited request when the audit log cannot accept another record. Options are:<ul><li>**Use service default** - Applies the **Default Audit Overflow** setting from the **S3** service configuration screen.</li><li>**Drop the record** - Completes the request and does not record it.</li><li>**Answer the client with a retryable 503** - Refuses the request with a temporary error so the client tries again.</li></ul> |
{{< /truetable >}}
{{< /expand >}}
