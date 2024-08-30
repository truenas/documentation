&NewLine;

The [Syncthing web portal](https://docs.syncthing.net/intro/gui.html) allows administrators to monitor and manage the synchronization process, view logs, and adjust settings.

**Folders** list configured sync folders, details on sync status and file count, capacity, etc.
To change folder configuration settings, click on the folder.

**This Device** displays the current system IO status including transfer/receive rate, number of listeners, total uptime, sync state, and the device ID and version.

**Actions** displays a dropdown list of options.
Click **Advanced** to access GUI, LDAP, folder, device, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalAdvancedConfig.png" alt="Syncthing Advanced Configuration Menu" id="Syncthing Advanced Configuration Menu" >}}

You can manage directional settings for sync configurations, security, encryption, and UI server settings through the **Actions** options.

{{< expand "Managing Syncthing Folder" "v" >}}
To change or enter a directory path to share a folder, click on the folder, then select **Edit**.
We recommend each shared folder have a sync folder to allow for more granular traffic and data flow.
Syncthing creates a default sync folder in the main user or HOME directory during installation of the application.

Click on a folder to see details on that folder.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalFolderExpanded.png" alt="Syncthing Expanded Folder" id="Syncthing Expanded Folder" >}}

**Untrusted Device Password** is a beta feature and not recommended for production environments.
This feature is for edge cases where two users want to share data on a given device but cannot risk interception of data.
Only trusted users with the code can open the file(s) with shared data.
{{</expand >}}

{{< expand "Using Syncthing File Versioning" "V" >}}
**File Versioning** applies to changes received from other devices.
For example, *Bill* turns on versioning and *Alice* changes a file.
Syncthing archives the old version on the computer *Bill* uses when it syncs the change from *Alice*.
But if *Bill* changes a file locally on his computer, Syncthing does not and cannot archive the old version.

For more information on specific file versioning, see [Versioning](https://docs.syncthing.net/v1.23.2/users/versioning)
{{< /expand >}}

{{< expand "Using Syncthing Advanced Administration" "v" >}}
Go to **Actions > Advanced** to access advanced settings.
These setting options allow you to set up network isolation, directory services, database, and bandwidth throttling, and to change device-specific settings and global default settings.
{{< hint type=warning title="Misconfiguration Risks Data" >}}
Incorrect configuration can damage folder contents and render Syncthing inoperable!
{{< /hint >}}
{{< /expand >}}

{{< expand "Viewing Syncthing Logs and Debugs" "v" >}}
Go to **Logs** to access current logs and debug files.
The **Log** tab displays current logs, and the **Debugging Facilities** tab provides access to debug logging facilities.
Select different parameters to add to the logs and assist with debugging specific functionalities.

You can forward logs to a specific folder or remote device.
{{< /expand >}}

{{< expand "Maintaining File Ownership (ACL Preservation)" "v" >}}
Syncthing includes the ability to maintain ownership and extend attributes during transfers between nodes (systems).
This ensures ACLs and permissions remain consistent across TrueNAS systems during one and bi-directional Syncthing moves.
You can configure this setting on a per folder basis.
{{< /expand >}}