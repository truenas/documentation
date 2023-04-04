---
---

To configure a new SSH connection in the **Replication Task Wizard**:

1. Select **Create New** on the **SSH Connection** dropdown list to open the **New SSH Connection** configuration screen.

2. Enter a name for the connection.
   
   ![NewSSHConnectionNameAndMethod](/images/SCALE/22.12/NewSSHConnectionNameAndMethod.png "New SSH Connection Name and Method")

3. Select the **Setup Method** from the dropdown list. If a TrueNAS system, select **Semi-Automatic**.

4. Enter the URL to the remote TrueNAS in **TrueNAS URL**.   

   ![NewSSHConnectionAuthetication](/images/SCALE/22.12/NewSSHConnectionAuthetication.png "New SSH Connection Authentication")

5. Enter the administration user (i.e., root or admin) that logs into the remote system with the web UI in **Admin Username**. 
   Enter the password in **Admin Password**.

6. Enter the administration user (i.e., root or admin) for remote system SSH session. 

7. Select **Generate New** from the **Private Key** dropdown list.

8. (Optional) Select a cipher from the dropdown list, or enter a new value in seconds for the **Connection Timeout**.

9. Click **Save** to create a new ssh connection and populate the **SSH Connection** field in the **Replication Task Wizard**.
