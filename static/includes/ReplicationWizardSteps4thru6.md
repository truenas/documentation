&NewLine;

4. (Optional) Select **Recursive** to replicate all snapshots contained within the parent dataset and any child datasets.

5. (Optional) Select **Replicate Custom Snapshots**, then leave the default value in **Naming Schema**.
   If you know how and want to enter the schema, enter it in **Naming Schema**.
   
   A snapshot naming schema identifies the snapshots to replicate, and might be required by the remote system.
   A naming schema is a string of [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M variables that name custom snapshots you want to replicate.
   Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the pattern entered show on a dropdown list.

   Selecting **Matching regular expression** does not automatically destroy snapshots where selecting **Matching naming schema** does.
   When using regular expression, the snapshots on the destination host are not automatically destroyed when they are destroyed on the source host due to snapshot lifetime.
   Snapshots on the destination host display as "Will not be destroyed automatically" and do not display with a retention period.
   Use naming schema for these.

6. (Optional) Accept the default name in **Task Name**, or enter a name of your choosing.
   TrueNAS populates this field with a default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in the destination dataset a challenge.
   To make it easier to find the snapshot, give it a name that is easy to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily.

   Click **Next** to show the scheduling options.
   