---
---

{{< expand "Replication Task General Overview" "v" >}}
Creating a replication task:

1. Set up the data storage for where you want to hold the replicated data (snapshot created). Local replication tasks could be a new dataset in a differnt pool.

2. Make sure the admin user has a home directory assigned. 
   When the admin user is created at installation in earlier release of SCALE Bluefin, the home directory default is **/nonexistent**. 
   For remote replication you must create an SSH connection between SCALE and the remote system. 
   To establish a new SSH connection you must set the admin user home directory path on the early release of Bluefin to something other than /nonexistent. 
   To do this:
   a. Create a dataset for user home directories, such as */tank/homedir*, and make sure the dataset is not set to read only.
   b. Modify the admin user home directory to this new path. 
   c. Make sure the home directory is not set to read only. 

  Later releases of SCALE Bluefin set the admin user home directory to one created by SCALE during the installation process, and does not require you to change the admin user home directory path.

3. Create an SSH connection between the local SCALE system and the remote system. 
   You can do this from **Credentials > Backup Credentials > SSH Connection** and clicking **Add** or from the **Repliation Task Wizard** using the **Generate New** option in the settings for the remote system.

4. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**. 
   You then specify the from and to sources, task name, and set the schedule.
  
   Setting options change based on the source selections. Replicating to or from a local source does not requires an SSH connection.
   
This completes the general process for all replication tasks.
{{< /expand >}}