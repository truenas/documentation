&NewLine;

All CORE systems migrating to SCALE, and all Angelfish and early Bluefin releases of SCALE upgrading to 22.12.3+ or to later SCALE major versions should create and begin using an admin user instead of the root user. 
After migrating or upgrading from CORE or a pre-SCALE 22.12.3 earlier release to a later SCALE release, use this procedure to create the Local Administrator user.

Go to **Credentials > Local Users** and click **Add**.

Enter the name to use for the administrator account. For example, *admin*.
You can create multiple admin users with any name and assign each different administration privileges.

Enter and confirm the admin user password.

Select **builtin_administrators** and **root** on the **Auxiliary Group** dropdown list.

{{< trueimage src="/images/SCALE/Credentials/AddAuxiliaryGroupAdminUserSettings.png" alt="Add Admin User Auxiliary Groups" id="Add Admin User Auxiliary Groups" >}}

Add the home directory for the new admin user. 
Enter or browse to select the location where SCALE creates the home directory. For example, */mnt/tank*. If you created a dataset to use for home directories, select that dataset.
Select the **Read**, **Write**, and **Execute** permissions for **User**, **Group** and **Other** this user should have, then select **Create Home Directory**.

Select the shell for this admin user from the **Shell** dropdown list.
To have **System Settings > Shell** open in the Console Setup Menu, select **TrueNAS Console**.
This gives the administrator access to the TrueNAS and Linux CLI prompts.

Select the sudo authorization permissions for this admin user.
Some applications, such as [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}), require sudo permissions for the administrator account.
For administrator accounts generated during the initial installation process, TrueNAS SCALE sets authorization to **Allow all sudo commands**.

Click **Save**.
The system adds the user to the **bulitin-users** group after clicking **Save**.

Log out of the TrueNAS system and then log back in using the admin user credentials to verify that the admin user credentials work properly with your network configuration.

After adding the admin user account, disable the root user password:

Go to **Credentials > Local Users**, click on the **root** user and select **Edit**.
Click the **Disable Password** toggle to disable the password, then click **Save**.