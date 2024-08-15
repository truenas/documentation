&NewLine;

All CORE systems migrating to SCALE, and all early SCALE releases such as Angelfish and pre-22.12.3 Bluefin, that migrate or upgrade to later SCALE major versions must create and begin using an admin user instead of the root user.
After migrating or upgrading from CORE or a pre-SCALE 22.12.3 releases to a later SCALE release, use this procedure to create the administrator user.

Go to **Credentials > Local Users** and click **Add**.

Enter memorable name that is difficult to guess for the administrator account.
You can create many admin users with different names and assign each different administration roles and privileges.

Enter and confirm the admin user password.

Select **truenas_admin** on the **Auxiliary Group** dropdown list if recreating the **truenas_admin** user.
When creating **admin** or any other custom named administrator, select **builtin_administrator**,  as the auxiliary group.

{{< trueimage src="/images/SCALE/Credentials/AddAuxiliaryGroupAdminUserSettings.png" alt="Add Admin User Auxiliary Groups" id="Add Admin User Auxiliary Groups" >}}

Add the home directory for the new admin user. 
Enter or browse to select the location where SCALE creates the home directory.
For example, */mnt/tank*. If you created a dataset to use for home directories, select that dataset.
Select the **Read**, **Write**, and **Execute** permissions for **User**, **Group**, and **Other** this user should have, then select **Create Home Directory**.

Select the shell for this admin user from the **Shell** dropdown list.
We recommend setting shell to **TrueNAS Console** as this provides access to the Console Setup menu and the Linux shell from the SCALE **Shell** screen.

Select the sudo authorization permissions for the truenas_admin user.
Some applications, such as [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}), require sudo permissions for the administrator account.
For administrator accounts generated during the initial installation process, TrueNAS SCALE sets authorization to **Allow all sudo commands**.

Click **Save**.
The system adds the user to the **builtin-users** group after clicking **Save**.

Log out of the TrueNAS system and then log back in using the **truenas_admin** (or the name of the administrator created) user credentials to verify that the admin user credentials work properly with your network configuration.

After adding the admin user account, disable the root user password.

Go to **Credentials > Local Users**, click on the **root** user, and select **Edit**.
Click the **Disable Password** toggle to disable the password, then click **Save**.
