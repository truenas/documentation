---
---

{{< expand "Replication Task General Overview" "v" >}}
If using a TrueNAS SCALE Bluefin system on the early release (22.12.1) you must have the [admin user correctly configured]({{< relref "ManageLocalUsersSCALE.md" >}}) with:

* The **Home Directory** set to something other than **/nonexistent**
* The admin user in the **builtin_admin** group
* The admin user passwordless sudo permission enabled

Also verify the SSH service settings to make sure you have **Root with Password**, **Log in as Admin with Password**, and **Allow Password Authentication** selected to enable these capabilities.
{{< hint warning >}}
Incorrect SSH service settings can impact the admin user ability to establish an SSH session during replication, and require you to obtain and paste a public SSH key into the admin user settings.
{{< /hint >}}

1. Set up the data storage for where you want to save replicated snapshots. 
   
2. Make sure the admin user is correctly configured. 
   
3. Create an SSH connection between the local SCALE system and the remote system for remote replication tasks. Local replication does not require an SSH connection. 
   You can do this from either **Credentials > Backup Credentials > SSH Connection** and clicking **Add** or from the **Replication Task Wizard** using the **Generate New** option in the settings for the remote system.

4. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard** where you specify the settings for the replication task.
  
   Setting options change based on the source selections. Replicating to or from a local source does not requires an SSH connection.
   
This completes the general process for all replication tasks.
{{< /expand >}}