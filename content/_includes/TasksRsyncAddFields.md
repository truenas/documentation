**Source**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Path** | Browse to the path to be copied. FreeBSD file path limits apply. Other operating systems can have different limits which might affect how they can be used as sources or destinations. |
| **User** | Select the user to run the rsync task. The user selected must have permissions to write to the specified directory on the remote host. |
| **Direction** | Direct the flow of data to the remote host. During a push, the dataset transfers to the remote module. During a pull, the dataset stores files from the remote system. |
| **Description** | Enter a description of the rsync task. |
{{< /truetable >}}

**Schedule**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Schedule** | Select a schedule preset or select **Custom** to open the advanced scheduler. |
| **Recursive** | Select to include all sub-directories of the specified directory. When cleared, only the specified directory is included. |
{{< /truetable >}}

**Remote**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Remote Host** | Enter the IP address or host name of the remote system that will store the copy. Use the format `username@remote_host` if the user name differs on the remote host. |
| **Rsync Mode** | Select to use a custom-defined remote module of the rsync server. Or to use an SSH configuration for the rsync task. |
{{< /truetable >}}

**More Options**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Times** | Select to preserve modification times of files. |
| **Compress** | Select to reduce the size of data to transmit. Recommended for slow connections. |
| **Archive** |  When selected, rsync runs recursively. Preserves symlinks, permissions, modification times, group, and special files. When run as root, owner, device files, and special files are also preserved. Equal to passing the flags `-rlptgoD` to rsync. |
| **Delete** | Delete files in the destination directory that do not exist in the source directory. |
| **Quiet** | Select to suppress informational messages from the remote server. |
| **Preserve Permissions** | Select to preserve original file permissions. Useful when the user is set to root. |
| **Preserve Extended Attributes** | [Extended attributes](https://en.wikipedia.org/wiki/Extended_file_attributes) are preserved, but must be supported by both systems. |
| **Delay Updates** | Saves a temporary file from each updated file to a holding directory until the end of the transfer. All transferred files renamed once the transfer is complete. |
| **Auxiliary Parameters** | Additional [rsync(1)](https://rsync.samba.org/ftp/rsync/rsync.html) options to include. Separate entries by pressing <kbd>Enter</kbd>. Note: The <span class="material-icons">emergency</span> character must be escaped with a backslash \ or used inside single quotes ('*.txt'). |
| **Enabled** | Select to enable this rsync task. Clear to disable this rsync task without deleting it. |
{{< /truetable >}}
