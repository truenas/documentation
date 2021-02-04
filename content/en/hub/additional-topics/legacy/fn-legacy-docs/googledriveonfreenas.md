---
title: "How To Back Up Google Drive to FreeNAS"
description: "How To Back Up Google Drive to FreeNAS."
---

Google Drive and G Suite are widely used tools for creating and sharing documents, spreadsheets, and presentations with team members. While cloud-based tools have inherent backups and replications included by the cloud provider, certain users may require additional backup or archive capabilities. For example, companies using G Suite for important work may be required to keep records for years, potentially beyond the scope of the G Suite subscription. FreeNAS and TrueNAS offer the ability to back up Google Drive easily, using the built-in cloud sync.

This blog will explain how to set up Google Drive sync with FreeNAS 11.3, as well as provide a few caveats and workarounds when backing up Google Docs and other Google created content.

### Setting up Google Drive credentials

Set up the credentials under **System > Cloud Credentials**.

<img src="/images/GDtoFreeNAS-1.png">
<br><br>

Click **LOGIN TO PROVIDER** and login with the appropriate Google user account. Google will request to allow access to all the Google Drive files for the FreeNAS device.

<img src="/images/GDtoFreeNAS-2.png">
<br><br>

Allow access and the appropriate access key will be inserted to the FreeNAS access token. Assign a Team ID if required, but it is not necessary in all cases. 

Click **VERIFY CREDENTIAL**. Once successful, click **SAVE**. The new cloud credentials will be visible in the web interface.

<img src="/images/GDtoFreeNAS-3.png">
<br><br>

### Set the cloud sync task

Go to **Tasks > Cloud Sync Tasks** and set the backup time frame, frequency, and folders – both the cloud-based folder and FreeNAS dataset. Set whether the synchronization should sync all changes, just copy new files, or move files. Remove files from the cloud source or FreeNAS source depending on push or pull.

Add a description for the task and select the cloud credentials.

<img src="/images/GDtoFreeNAS-4.png">
<br><br>

Choose the appropriate cloud folder target and FreeNAS storage location.

<img src="/images/GDtoFreeNAS-5.png">
<br><br>

Select the file transfer mode: 

+ **Sync**: Keep files newly created or deleted the same.
+ **Copy**: Copy new files to the appropriate target (i.e., FreeNAS pulls files from Google Drive or pushes files to Google Drive).
+ **Move**: Copies files to the target and then delete files from the source. Using Move, users can set a folder in Google Drive for archival, and move older documents to that folder from their Drive account. Those files would then automatically get backed up to their FreeNAS storage.

<img src="/images/GDtoFreeNAS-6.png">
<br><br>

Once created the Task will run during the designated period of time. Edits can be made by clicking the down arrow on the right-hand side.

<img src="/images/GDtoFreeNAS-7.gif">
<br><br>

Clicking **RUN NOW** will prompt the task to start immediately and the web interface will show the status as **RUNNING** and **SUCCESS** upon completion. Details can be accessed via the **Task Manager** icon in the upper right-hand corner.

<img src="/images/GDtoFreeNAS-8.png">
<br><br>

To verify success, SSH to the FreeNAS or use the built-in Shell Terminal to verify that the files are visible. 

<img src="/images/GDtoFreeNAS-9.png">
<br><br>

<img src="/images/GDtoFreeNAS-10.png">
<br><br>

If file access to a client PC or other device is needed, create a share to the same dataset that was set to store the cloud sync. An SMB share is used as an example. 

Go to **Sharing > Windows Shares (SMB))) and click **ADD**. Choose the appropriate dataset, permissions, and settings to create a new SMB share. 

<img src="/images/GDtoFreeNAS-11.png">
<br><br>

Once mounted to the client, the files should all be visible. 

<img src="/images/GDtoFreeNAS-12.png">
<br><br>

### Working with Google created content

One caveat is that Google Docs and other files created with Google tools will have their own proprietary set of permissions and their read/write characteristics will be unknown to the system over a standard file share. Files are unreadable as a result.

<img src="/images/GDtoFreeNAS-13.png">
<br><br>

To allow Google created files to become readable, allow link sharing to access the files before the backup. Doing so will ensure that other users will be able to open the files with read access, make changes, and then save as another file should further edits be needed. Note that this is only necessary if the file was created using Google Docs, Google Sheets, or Google Slides; other files should not require modification of their share settings.

<img src="/images/GDtoFreeNAS-14.png">
<br><br>

TrueNAS and FreeNAS are perfect for storing content, including cloud-based content, for the long-term. Not only is it simple to sync and backup from the cloud, but users can rest assured that their data is safe, with unlimited snapshots, copy-on-write, and built-in replication functionality.
