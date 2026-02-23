---
title: "Setting Up Final Cut Pro SMB Shares"
description: "Provides instructions for adding an SMB share optimized for Final Cut Pro workflows."
weight: 27
aliases:
 - /scale/scaletutorials/shares/smb/fcpshare/
 - /scale/scaletutorials/shares/smb/apple-m-e
tags:
- smb
- apple
- shares
- media
doctype: tutorial
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< include file="/static/includes/MacOSMediaShareCompatibility.md" >}}

## About Final Cut Pro Storage Shares

{{< hint type=note >}}
The **Final Cut Pro Storage Share** purpose is available in TrueNAS 25.10.1 and later.
{{< /hint >}}

TrueNAS provides the **Final Cut Pro Storage Share** purpose for professional media production workflows.
This share type automatically enables **Use Apple-style Character Encoding** to translate NTFS illegal characters for proper file handling in Final Cut Pro.

Apple-style character encoding ensures that special characters and metadata are preserved correctly, which is essential when working with media files that have complex naming conventions.

{{< include file="/static/includes/SMBVFSConfigurationWarning.md" >}}

## Prerequisites

Before setting up a **Final Cut Pro Storage Share**:

* [Create user accounts]({{< ref "ManageUsers" >}}) for media users who access the share.
   Go to **Credentials > Local Users** and click **Add**.
   Ensure **SMB Access** is selected for each user.

* Prepare a dataset for the share (or you can create one during share creation).
   For best performance with large media files, consider:
  * Enabling compression (LZ4 is recommended for media files).
  * Setting appropriate record size (128K or larger for video files).
  * Configuring adequate space quotas.

* Turn on **Enable Apple SMB2/3 Protocol Extensions** for the SMB service (instructions below).

## Setting Up a Final Cut Pro Storage Share

To set up a Final Cut Pro storage share, complete the following steps in order:

1. [Enable Apple SMB2/3 Protocol Extensions](#enable-apple-smb23-protocol-extensions)
2. [Create the Share and Dataset](#create-the-share-and-dataset)
3. [Configure Advanced Options](#configure-advanced-options) (optional)
4. [Configure Dataset Permissions](#configure-dataset-permissions)
5. [Start the SMB Service and Mount the Share](#start-the-smb-service-and-mount-the-share)
6. [Connect from Mac Client](#connect-from-mac-client)

### Enable Apple SMB2/3 Protocol Extensions

Enable this service setting before creating the share.

1. Go to **Shares** and click <span class="iconify" data-icon="mdi:dots-vertical"></span> on the **Windows (SMB) Shares** widget header.

2. Select **Config Service** to open the **SMB Service** screen.

   Alternatively, go to **System > Services**, locate **SMB**, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> configure button.

3. Click **Advanced Settings** to expand advanced options.

4. Select **Enable Apple SMB2/3 Protocol Extensions**.

   {{< trueimage src="/images/SCALE/SystemSettings/SMBServiceAppleExtensions.png" alt="Enable Apple SMB2/3 Extensions" id="Enable Apple SMB2/3 Extensions" >}}

5. Click **Save**.

6. If the SMB service is already running, restart it for the changes to take effect.

### Create the Share and Dataset

You can either create the dataset first using the **Datasets** screen and then add the share, or create both together.
This tutorial uses the **Add SMB** screen to create both the dataset and share at the same time.

1. Go to **Shares** and click **Add** on the **Windows (SMB) Shares** widget.

2. In the **Path** field, browse to the parent dataset where you want to create the share dataset.

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

3. Click **Create Dataset**.

4. Enter a name for the dataset (e.g., *AppleMediaShare* or *FCPProjects*) and click **Create**.

   The dataset name populates the **Name** field and becomes the share name.

   {{< trueimage src="/images/SCALE/Shares/AddSMBMacOSMediaBasic.png" alt="Add Final Cut Pro Storage Share - Basic Options" id="Add Final Cut Pro Storage Share - Basic Options" >}}

5. Select **Final Cut Pro Storage Share** from the **Purpose** dropdown.

6. (Optional) Enter a description such as *Final Cut Pro project storage* to identify the share's purpose.

7. Ensure **Enabled** is selected to activate the share when the SMB service is running.

8. If Apple SMB2/3 Protocol Extensions are not enabled, a requirement error appears below the **Purpose** field.

   {{< trueimage src="/images/SCALE/Shares/MacOSEnableExt.png" alt="Final Cut Pro Storage Share Extension Required" id="Final Cut Pro Storage Share Extension Required" >}}

   Click **Enable Now** to enable the required setting in the SMB service configuration. Wait for the service to update.
   When complete, TrueNAS displays a success message confirming Apple SMB2/3 protocol extension support is enabled.

### Configure Advanced Options

While creating a basic **Final Cut Pro Storage Share** requires no additional configuration, you can customize access and logging settings.

1. Click **Advanced Options** to expand additional settings.

2. Configure **Access** settings as needed:
   * **Export Read-Only**: Leave unselected to allow media file editing.
   * **Browsable to Network Clients**: Enabled by default (recommended).
   * **Access Based Share Enumeration**: Select to enable if needed for your access control requirements.

   {{< trueimage src="/images/SCALE/Shares/AddSMBMacOSMediaAdvancedOptions.png" alt="Final Cut Pro Storage Share - Advanced Options" id="Final Cut Pro Storage Share - Advanced Options" >}}

3. Optionally enable **Audit Logging**:
   * Select **Enable Logging** to track share access.
   * Configure **Watch List** and **Ignore List** as needed for monitoring specific users or groups.

4. Note that **Use Apple-style Character Encoding** is automatically enabled under **Other Options** and cannot be disabled.
   TrueNAS enforces this setting because Final Cut Pro requires Apple character encoding to operate properly.

5. Click **Save** to create the share.

### Configure Dataset Permissions

After creating the share, configure dataset permissions to grant access to media users.

1. On the **Shares** screen, locate the new share in the **Windows (SMB) Shares** widget.

2. Click <span class="iconify" data-icon="mdi:dots-vertical"></span> and select **Edit Filesystem ACL**.

3. Configure ACL entries for users or groups who need access:
   * For individual users: Add ACL entries with appropriate permissions (FULL for editors, READ for reviewers).
   * For groups: Create a group like *media_users* and add users, then add a group ACL entry.

4. Click **Save Access Control List**.

See [Managing SMB Shares]({{< ref "ManageSMBShares.md" >}}) for detailed information on configuring ACL permissions.

### Start the SMB Service and Mount the Share

If the SMB service is not running, start it from the **Windows (SMB) Shares** widget:

1. Click <span class="iconify" data-icon="mdi:dots-vertical"></span> on the widget header.
2. Select **Turn On Service**.

### Connect from Mac Client

On the Mac client, connect to the share:

1. Open **Finder**.
2. Select **Go > Connect to Server** (or press Cmd+K).
3. Enter the SMB address: {{< cli >}}smb://*your-truenas-ip*/*share-name*{{< /cli >}}.
4. Authenticate with a user account that has access to the share.

The share is now available for use with Final Cut Pro.

## Testing and Verification

After mounting the share, verify proper operation:

* File Creation: Create test files from Final Cut Pro to verify proper file handling.

* Character Handling: Test filenames with special characters to confirm Apple character encoding is working correctly.

* Performance: Copy large media files to verify adequate transfer speeds for your workflow.

* Permissions: Test access with different user accounts to verify ACL configuration.

## Migrating Existing Media Libraries

{{< hint type=important title="Should You Migrate?" >}}
If you have an existing Final Cut Pro workflow using a standard SMB share with default settings that works properly, TrueNAS recommends keeping your current configuration. Migration is only necessary if you are experiencing specific compatibility issues or need the character encoding features provided by the **Final Cut Pro Storage Share** preset.
{{< /hint >}}

{{< hint type=warning title="Migration Considerations" >}}
Migrating an existing media library from a standard SMB share to a **Final Cut Pro Storage Share** requires careful planning because enabling Apple character encoding might affect existing files:

* Files created without Apple character encoding might display differently or have access issues
* Existing project files might need to be re-indexed by Final Cut Pro
* Test thoroughly in a non-production environment before migrating production data

### Migration Steps

Only proceed with migration if you have confirmed that your current setup is incompatible with your requirements:

1. Create a new **Final Cut Pro Storage Share** and dataset in TrueNAS following the instructions in this article.

2. Configure dataset permissions for the new share to grant appropriate access to media users.

3. Copy a small subset of test files to the new share using the Mac client:
   * Open **Finder** and connect to both the old and new shares
   * Copy a few representative project files and media assets from the old share to the new share
   * Test these files in Final Cut Pro to verify proper access and functionality

4. If testing is successful, migrate remaining data via the Mac client:
   * Use **Finder** to copy files from the old share to the new share
   * Monitor the transfer for errors or warnings
   * Verify file integrity after the transfer completes

5. Update Final Cut Pro libraries and project files to point to the new share location.

6. Keep the old share available for a period of time as a backup until you confirm all workflows function correctly with the new share.
{{< /hint >}}
