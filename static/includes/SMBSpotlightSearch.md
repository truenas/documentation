&NewLine;

TrueNAS supports macOS Spotlight search on SMB shares through the TrueSearch indexing service.
When enabled, macOS users can use native Finder search to quickly locate files on mounted SMB shares.

{{< hint type=note >}}
Spotlight search requires an Enterprise license or TrueNAS Connect configuration.
If neither is configured, the **Enable Search (Spotlight)** setting is disabled and a notice displays with a link to configure TrueNAS Connect.
{{< /hint >}}

### Enabling Spotlight Search

1. Go to **System Settings > Services** and locate the **SMB** service row.

2. Click the <span class="material-icons">edit</span> **Configure** icon to open the **SMB Service** screen.

3. Click **Advanced Settings** to expand the advanced options.

4. Select **Enable Search (Spotlight)**.

5. Click **Save**.

After enabling, TrueSearch indexes all enabled SMB shares.
Encrypted datasets are excluded from indexing to protect sensitive data.

{{< hint type=important >}}
TrueSearch indexes all enabled SMB shares globally.
You cannot enable indexing for individual shares.
{{< /hint >}}

### Mounting an SMB Share on macOS

1. Open **Finder**.

2. Click **Go > Connect to Server** in the menu bar.

3. Enter the SMB share address in the format `smb://<TrueNAS-IP>/<sharename>` and click **Connect**.

4. Enter the username and password for a TrueNAS user account with access to the SMB share, then click **Connect**.

The mounted share appears in the Finder sidebar under **Locations**.

### Using Spotlight Search on macOS

After mounting the SMB share:

1. Open **Finder** and navigate to the mounted SMB share.

2. Press <kbd>Cmd</kbd>+<kbd>F</kbd> or click the search icon in the Finder window.

3. Click the SMB share name in the search bar to set the search scope to the mounted share.
   Spotlight search does not return results from SMB shares when searching **This Mac**.

4. Enter search terms.
   Spotlight supports searching by file name, file content, and file type.

Search results appear as files are found in the TrueSearch index.
