&NewLine;

From the **Users** screen, click **NEW USER** to open the **Create NAS User** wizard.

![NASUser1](/images/TrueCommand/Dashboard/NASUser1.png "Create NAS User System Screen")

Click **Add System** to select systems or system pools to grant this user access to.
Users and groups created across multiple systems share IDs. 
Click **Next** to open the **Users/Groups** wizard screen.

![NASUser2](/images/TrueCommand/Dashboard/NASUser2.png "Create NAS User User/Groups Screen")

Enter the user detail. You can also associate the user with existing groups or create new ones. To add a group, click **+ GROUP** to open the **Create NAS Group** dialog.

![NASUser2AddNASGroup](/images/TrueCommand/Dashboard/NASUser2AddNASGroup.png "Add NAS Group Dialog")

Enter the GID for the group and a name. Leave **Smb** selected to allow using the group for Samba permissions and authentication. 
Click **OK**, then click **OK** on the **Confirm** dialog.
Click **Next** to open the **Home** wizard screen. 

![NASUser3](/images/TrueCommand/Dashboard/NASUser3.png "Create NAS User Home Screen")

If you want the user to have a home directory, enter the path to the directory and set the default UNIX permissions. 
If the directory exists and matches the username, it is set as the user home directory. 
When the path does not end with a subdirectory matching the username, a new subdirectory is created. 
The home directory full path for the user shows on the Edit NAS User screen.

Select the **Write** permissions for **Group** and **Other** if granding more access than the default, then click **NEXT** to open the **Authentication** wizard screen.

![NASUser4](/images/TrueCommand/Dashboard/NASUser4.png "Create NAS User Authentication Screen")

Enter or paste the optional public SSH key of the user for any key-based authentication into the **Sshpubkey** field. Do not paste the private key.
You can also allow users to authenticate with Samba, connect from a Windows machine with their Microsoft account, and use sudo commands. 

Select **Locked** to prevent the user from logging in or using password-based services. 
Locking an account is only possible when **Disable Password** is not selected in SCALE (Bluefin or Cobia) and a password is created for the user account on the TrueNAS SCALE system.
Click **NEXT** to open the **Create** confirmation wizard screen.

![NASUser4](/images/TrueCommand/Dashboard/NASUser4.png "Create NAS User Authentication Screen")

Review the settings then click **CREATE** to add the user. To make changes, click **BACK** until the wizard screen opens. Make your changes and click **NEXT** until the **Create** confirmation wizard screen displays, then click **CREATE** to add the TrueNAS user.

After creating the user, you can edit user settings in TrueCommand and the TrueNAS system UI.