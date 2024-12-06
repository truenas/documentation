&NewLine;

{{< hint type=warning title="Filename Encryption"  >}}
The rclone project has identified known issues with **Filename Encryption** in certain configurations, such as when long file names are used. See [SSH_FX_BAD_MESSAGE when syncing files with long filename to encrypted sftp storage](https://forum.rclone.org/t/ssh-fx-bad-message-when-syncing-files-with-long-filename-to-encrypted-sftp-storage/46228).
In some cases, this can prevent backup jobs from completing or being restored.

We do not recommend enabling **Filename Encryption** for any cloud sync tasks that did not previously have it enabled.
Users with existing cloud sync tasks that have this setting enabled must leave it enabled on those tasks to be able to restore those existing backups.
Do not enable file name encryption on new cloud sync tasks
{{< /hint >}}
