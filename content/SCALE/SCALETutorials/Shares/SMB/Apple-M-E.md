---
title: "Setting Up Apple M&E SMB Shares"
description: "Provides instructions for adding an SMB share optimized for Apple Media & Entertainment workflows including Final Cut Pro and Logic Pro."
weight: 27
aliases:
tags:
- smb
- apple
- shares
- media
---

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< include file="/static/includes/AppleMENameManglingWarning.md" >}}

## About Apple Media & Entertainment Shares

The MacOS Media Share purpose is designed specifically for Apple professional media workflows, including:

- Final Cut Pro and Final Cut Pro X
- Logic Pro and Logic Pro X
- Motion and Compressor
- Other Apple Media & Entertainment applications that require special file handling

This share type automatically enables Apple name mangling (aapl_name_mangling), which ensures NTFS illegal characters are properly translated for Apple applications. This is essential for professional media workflows where file naming conventions and metadata handling are critical.

{{< hint type=important title="Service Requirements" >}}
Before creating a MacOS Media Share, enable **Apple SMB2/3 Protocol Extensions** in the SMB service configuration. TrueNAS requires this for proper operation of Apple-specific features.
{{< /hint >}}

## Prerequisites

Before setting up a MacOS Media Share:

1. **User Accounts**: [Create user accounts]({{< ref "ManageLocalUsersSCALE" >}}) for media professionals who access the share.
   Go to **Credentials > Local Users** and click **Add**. Ensure **Samba Authentication** is selected for each user.

2. **Dataset**: Prepare a dataset for the share (or create one during share creation).
   For best performance with large media files, consider:
   - Enabling compression (LZ4 is recommended for media files)
   - Setting appropriate record size (128K or larger for video files)
   - Configuring adequate space quotas

3. **SMB Service**: Enable Apple SMB2/3 Protocol Extensions (instructions below).

## Setting Up a MacOS Media Share

### Step 1: Enable Apple SMB2/3 Protocol Extensions

Enable this service setting before creating the share.

1. Go to **Shares** and click <span class="iconify" data-icon="mdi:dots-vertical"></span> on the **Windows (SMB) Shares** widget header.

2. Select **Config Service** to open the **SMB Service** screen.

   Alternatively, go to **System > Services**, locate **SMB**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

3. Click **Advanced Settings** to expand advanced options.

4. Select **Enable Apple SMB2/3 Protocol Extensions**.

   {{< trueimage src="/images/SCALE/SystemSettings/SMBServiceAppleExtensions.png" alt="Enable Apple SMB2/3 Extensions" id="Enable Apple SMB2/3 Extensions" >}}

5. Click **Save**.

6. Restart the SMB service if it is already running.

### Step 2: Create the Share and Dataset

Create the dataset separately using the **Datasets** screen, or create it while adding the share.
This tutorial uses the **Add SMB** screen to create both the dataset and share.

1. Go to **Shares** and click **Add** on the **Windows (SMB) Shares** widget.

2. In the **Path** field, browse to the parent dataset where you want to create the share dataset.

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

3. Click **Create Dataset**.

4. Enter a name for the dataset (e.g., "AppleMediaShare" or "FCPProjects") and click **Create**.

   The dataset name populates the **Name** field and becomes the share name.

   {{< trueimage src="/images/SCALE/Shares/AddSMBMacOSMediaBasic.png" alt="Add MacOS Media Share - Basic Options" id="Add MacOS Media Share - Basic Options" >}}

5. Select **MacOS Media Share** from the **Purpose** dropdown.

6. (Optional) Enter a description such as "Final Cut Pro project storage" to identify the share's purpose.

7. Ensure **Enabled** is selected to activate the share when the SMB service is running.

8. If Apple SMB2/3 Protocol Extensions are not enabled, a warning displays indicating the service setting must be configured. Return to Step 1 to enable this setting, then continue.

### Step 3: Configure Advanced Options

While creating a basic MacOS Media Share requires no additional configuration, you can customize access and logging settings.

1. Click **Advanced Options** to expand additional settings.

2. Under **Access** settings, configure as needed:
   - **Export Read-Only**: Leave unselected to allow media file editing
   - **Browsable to Network Clients**: Enabled by default (recommended)
   - **Access Based Share Enumeration**: Configure based on your access control requirements

   {{< trueimage src="/images/SCALE/Shares/AddSMBMacOSMediaAdvancedAccess.png" alt="MacOS Media Share - Access Settings" id="MacOS Media Share - Access Settings" >}}

3. Under **Audit Logging**, optionally enable logging:
   - Select **Enable Logging** to track share access
   - Configure **Watch List** and **Ignore List** as needed for monitoring specific users or groups

4. Under **Other Options**, note that **Use Apple-style Character Encoding** is automatically enabled and cannot be disabled:

   {{< trueimage src="/images/SCALE/Shares/AddSMBAdvancedSettingsMacOSMediaShare.png" alt="MacOS Media Share - Other Options" id="MacOS Media Share - Other Options" >}}

   This setting is enforced because Apple name mangling is required for proper operation of Apple Media & Entertainment applications.

5. Click **Save** to create the share.

### Step 4: Configure Dataset Permissions

After creating the share, configure dataset permissions to grant access to media professionals.

1. On the **Shares** screen, locate the new share in the **Windows (SMB) Shares** widget.

2. Click <span class="iconify" data-icon="mdi:dots-vertical"></span> and select **Edit Filesystem ACL**.

3. Configure ACL entries for users or groups who need access:
   - For individual users: Add ACL entries with appropriate permissions (FULL for editors, READ for reviewers)
   - For groups: Create a group like "media_professionals" and add users, then add a group ACL entry

4. Click **Save Access Control List**.

See [Managing SMB Shares]({{< ref "ManageSMBShares.md" >}}) for detailed information on configuring ACL permissions.

### Step 5: Start the SMB Service and Mount the Share

1. If the SMB service is not running, start it from the **Windows (SMB) Shares** widget:
   - Click <span class="iconify" data-icon="mdi:dots-vertical"></span> on the widget header
   - Select **Turn On Service**

2. On the Mac client, connect to the share:
   - Open **Finder**
   - Select **Go > Connect to Server** (or press Cmd+K)
   - Enter the SMB address: `smb://your-truenas-ip/share-name`
   - Authenticate with a user account that has access to the share

3. The share is now available for use with Final Cut Pro, Logic Pro, and other Apple Media & Entertainment applications.

## Testing and Verification

After mounting the share, verify proper operation:

1. **File Creation**: Create test files from Final Cut Pro or Logic Pro to verify proper file handling.

2. **Character Handling**: Test filenames with special characters to confirm name mangling is working correctly.

3. **Performance**: Copy large media files to verify adequate transfer speeds for your workflow.

4. **Permissions**: Test access with different user accounts to verify ACL configuration.

## Migrating Existing Media Libraries

{{< hint type=warning title="Migration Considerations" >}}
If you are migrating an existing media library from a standard SMB share to a MacOS Media Share, be aware that enabling Apple name mangling may affect existing files:

- Files created without name mangling may display differently or have access issues
- Existing project files may need to be re-indexed by media applications
- Test thoroughly in a non-production environment before migrating production data

**Recommended Migration Approach**:
1. Create a new MacOS Media Share
2. Copy a subset of files for testing
3. Verify all media applications can properly access and edit files
4. Once verified, migrate remaining data
5. Update media application libraries and project files to point to the new location
{{< /hint >}}

## Troubleshooting

### Share Creation Fails

**Problem**: Unable to create the share with an error message.

**Solution**:
- Verify Apple SMB2/3 Protocol Extensions are enabled in **System > Services > SMB > Advanced Settings**
- Ensure the SMB service is not in an error state
- Review system alerts for Active Directory or LDAP connection issues

### Files Not Accessible from Media Applications

**Problem**: Final Cut Pro or Logic Pro cannot access files on the share.

**Solution**:
- Confirm the share Purpose is set to **MacOS Media Share**
- Verify Apple name mangling is enabled (visible in Advanced Options > Other Options as a checked, disabled checkbox)
- Check dataset ACL permissions for the user account
- Ensure Apple SMB2/3 Protocol Extensions are enabled in the SMB service

### Performance Issues with Large Files

**Problem**: Slow transfer speeds or stuttering during playback of media files.

**Solution**:
- Consider enabling [SMB Multichannel]({{< ref "SMBMultichannel.md" >}}) for improved throughput
- Verify network speed and MTU settings
- Check dataset record size (128K or larger recommended for video files)
- Monitor system resources (CPU, RAM, disk I/O) during transfers
- Review SMB service log level (reduce from Debug to Normal if enabled)

## Additional Resources

- [SMB Shares Screens]({{< ref "SMBSharesScreens.md" >}}) - Complete UI reference for SMB share settings
- [Managing SMB Shares]({{< ref "ManageSMBShares.md" >}}) - Details on ACL configuration and share management
- [Apple Support: Using Shared Storage with Final Cut Pro](https://support.apple.com/en-ca/101919) - Apple's official requirements
- [Apple Support: File Sharing](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) - Mac client configuration
- [Samba Documentation](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) - Technical reference for Apple extensions
