One caveat is that Google Docs and other files created with Google tools have their own proprietary set of permissions and their read/write characteristics unknown to the system over a standard file share. Files are unreadable as a result.

![GoogleDriveBadPermissions](/images/TrueNASCommon/GoogleDriveBadPermissions.png "Google Drive Bad Permissions")

To allow Google-created files to become readable, allow link sharing to access the files before the backup. Doing so ensures that other users can open the files with read access, make changes, and then save them as another file if further edits are needed. Note that this is only necessary if the file was created using Google Docs, Google Sheets, or Google Slides; other files should not require modification of their share settings.

![GoogleDriveShareLink](/images/TrueNASCommon/GoogleDriveShareLink.png "Google Drive Share Link")

TrueNAS is perfect for storing content, including cloud-based content, for the long term. Not only is it simple to sync and backup from the cloud, but users can rest assured that their data is safe, with snapshots, copy-on-write, and built-in replication functionality. 