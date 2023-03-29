---
---

{{< expand "Replication Task General Overview" "v" >}}

1. Set up the data storage for where you want to save replicated snapshots. 
   
2. Make sure the admin user has a home directory assigned. 
   In the SCALE Bluefin early release, when creating the admin user at installation the home directory default is set to **/nonexistent**. To create an SSH connection to use in a remote replication you must assign a home directory path.

   Later releases of SCALE Bluefin set the admin user home directory to one created by SCALE during the installation process, but you need to select the option to create the admin user home directory.

3. Create an SSH connection between the local SCALE system and the remote system. 
   You can do this from either **Credentials > Backup Credentials > SSH Connection** and clicking **Add** or from the **Repliation Task Wizard** using the **Generate New** option in the settings for the remote system.

4. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**. 
   You then specify the from and to sources, task name, and set the schedule.
  
   Setting options change based on the source selections. Replicating to or from a local source does not requires an SSH connection.
   
This completes the general process for all replication tasks.
{{< /expand >}}