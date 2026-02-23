---
title: "WebShare"
description: "Tutorials for configuring WebShare, a web-based file sharing feature in TrueNAS."
geekdocCollapseSection: true
weight: 60
tags:
- webshare
- shares
related: false
aliases:
 - /scale/scaleuireference/shares/webshare/
 - /scale/scaletutorials/shares/webshare/
---



WebShare provides web-based file access to authorized users through a browser interface.
Unlike SMB or NFS shares that require mounting on client systems, WebShare allows users to browse, upload, download, and search files directly from a web browser.

{{< hint type=note >}}
WebShare requires TrueNAS Connect to be configured and active.
{{< /hint >}}

The **WebShare** widget displays **Open WebShare** and **Add** buttons, and a <span class="material-icons">more_vert</span> icon for accessing service options.
Each configured WebShare displays as a row showing the share name, path, and action icons to open the share in a new browser tab, edit the share, or delete the share.

## Prerequisites

Before configuring WebShare, ensure the following:

- TrueNAS Connect is configured and active on your system
- A dataset exists for the files you want to share
- At least one local user account exists with WebShare access enabled

## Configuring the WebShare Service

Configure the WebShare service before creating shares.

{{< trueimage src="/images/SCALE/Shares/WebShareCard.png" alt="WebShare Widget" id="WebShare Widget" >}}

1. Go to **Shares** and locate the **WebShare** widget.

2. Click the <span class="material-icons">more_vert</span> icon and select **Config Service**.

3. (Optional) Select **Enable TrueSearch** to enable file indexing and search functionality.
   When enabled, TrueSearch indexes all active WebShares for fast file searching.

4. Configure the **Passkey** setting based on your security requirements:
   - **Disabled** turns off passkey authentication.
   - **Enabled** allows passkeys as an optional authentication method.
   - **Required** requires users to authenticate using passkeys.

5. Click **Save**.

6. Toggle on the **WebShare** service to start it.

## Creating a WebShare

{{< include file="/static/includes/WebShare-SMBWarning.md" >}}

After configuring the service, create a WebShare to provide access to a specific directory.

{{< trueimage src="/images/SCALE/Shares/AddWebShare.png" alt="Add WebShare" id="Add WebShare" >}}

1. Go to **Shares** and locate the **WebShare** widget.

2. Click **Add**.

3. Select the **Path** to the directory you want to share.
   The path must be under /mnt/*poolname*/.
   All subdirectories within the selected path are accessible to authorized users based on their file system permissions.

4. Enter a **Name** for the WebShare.
   The name must contain only letters, numbers, hyphens, and underscores.

5. (Optional) Select **Home Share** to use this share as the base path for user home directories.
   Only one WebShare can have this option enabled.

6. Click **Save**.

## Editing a WebShare

To modify an existing WebShare, click the <span class="material-icons">edit</span> icon on the share row.
The **Edit WebShare** screen allows you to change the path, name, and home share setting.

{{< trueimage src="/images/SCALE/Shares/EditWebShare.png" alt="Edit WebShare" id="Edit WebShare" >}}

## Deleting a WebShare

To delete a WebShare, click the <span class="material-icons">delete</span> icon on the share row.
A confirmation dialog displays before the WebShare is removed.

{{< trueimage src="/images/SCALE/Shares/DeleteWebShareDialogue.png" alt="Delete WebShare Dialog" id="Delete WebShare Dialog" >}}

## Configuring User Access

Users must have WebShare access enabled to connect.

1. Go to **Credentials > Users**.

2. Click the user you want to grant access to, then click **Edit**.

3. Locate the **Allow Access** section and enable **WebShare Access**.

4. Click **Save**.

## Accessing WebShare

After configuring the service, creating a share, and enabling user access:

1. Click **Open WebShare** on the **WebShare** widget in the **Shares** dashboard.
   Alternatively, access WebShare directly using your TrueNAS Connect URL on port 755.

2. Log in with the credentials for a TrueNAS user account that has **WebShare Access** enabled.

3. Navigate to the share to browse files.

{{< trueimage src="/images/SCALE/Shares/WebShareUIHome.png" alt="WebShare UI Home" id="WebShare UI Home" >}}

## Using WebShare

The WebShare interface provides a file browser with toolbar buttons for common actions.

### Navigating Files

The file list displays columns for file name, owner, size, and modified date.
Click a folder to open it.
Click the <span class="material-icons">arrow_back</span> icon in the column header to navigate to the parent directory.
Click the **Name** column header to sort files alphabetically.

### Uploading Files

Click the <span class="material-icons">cloud_upload</span> icon to open the upload panel.
Drag and drop files into the upload area or click **Browse Files** to select files from your computer.
Toggle between **Files** and **URL** to upload files from a web URL instead.

### Creating Folders

Click the <span class="material-icons">create_new_folder</span> icon to create a new folder in the current directory.

### Additional Toolbar Options

The toolbar provides additional options:

- <span class="material-icons">filter_list</span> **Filter** - Filter the file list
- <span class="material-icons">refresh</span> **Refresh** - Refresh the current directory
- <span class="material-icons">history</span> **Timeline** - View snapshots of the current directory
- <span class="material-icons">share</span> **Share** - Create a shareable link
- <span class="material-icons">visibility_off</span> **Hidden files** - Toggle visibility of hidden files
- <span class="material-icons">info</span> **File details** - Open the file details panel

### File Actions

Click the <span class="material-icons">more_vert</span> icon on a file row to access file-specific actions such as download, rename, copy, move, and delete.

## Using TrueSearch

When TrueSearch is enabled in the WebShare service configuration, users can search for files within WebShare.

{{< hint type=note >}}
TrueSearch requires an Enterprise license or TrueNAS Connect configuration.
Encrypted datasets are excluded from indexing.
{{< /hint >}}

After logging into WebShare:

1. Locate the search box in the top right corner of the WebShare interface.

2. Enter search terms.
   TrueSearch supports searching by:
   - File name
   - File content
   - File type

3. Review search results as they appear.

TrueSearch indexes all enabled WebShares globally.
You cannot enable or disable indexing for individual shares.
