&NewLine;

{{< hint type=info title="Replace Legacy Root Users" >}}
All CORE systems migrating to SCALE, and all early SCALE releases such as Angelfish and pre-22.12.3 Bluefin, that migrate or upgrade to later SCALE major versions must create and begin using an admin user instead of the root user.
After migrating or upgrading from CORE or a pre-SCALE 22.12.3 releases to a later SCALE release, use this procedure to create the administrator user.
{{< /hint >}}

{{< hint type=important title="Create Unique Admin Users">}}
To maximize system security, create one or more administrative users with unique usernames and passwords following the procedure below and disable password access for the default administrative account (**root**, **admin**, or **truenas_admin**).
Configure appropriate administrative privileges for admin account(s).
Follow the principle of least privilege (PoLP) and use the least privileged admin with appropriate permissions to perform an administrative task.

TrueNAS SCALE 24.10 (Electric Eel) or newer generates an alert each time a root-level or default administrative account is used to access the web UI.
{{< /hint >}}

Go to **Credentials > Local Users** and click **Add**.

{{< trueimage src="/images/SCALE/Credentials/AddUserIdentificationSettings.png" alt="Add User Identification Settings" id="Add User Identification Settings" >}}

Enter memorable name that is difficult to guess for the administrator account.
You can create multiple admin users with different names and assign each different administration roles and privileges.

Enter and confirm the admin user password.

{{< trueimage src="/images/SCALE/Credentials/AddUser-UserIDAndGroupSettings.png" alt="Add User Group Settings" id="Add User Group Settings" >}}

Select **Create New Primary Group** to create a group with the same name as the admin user.
To assign the new admin to an existing group with appropriate administrative privileges, either assign the group as an auxiliary group  or deselect **Create New Primary Group**  and select the group as the primary group.

{{< trueimage src="/images/SCALE/Credentials/AddUserDirPermsAuthSettings.png" alt="Add User Directory and Authentication Settings" id="Add User Directory and Authentication Settings" >}}

Add the home directory for the new admin user.
Enter or browse to select the location where SCALE creates the home directory.
For example, */mnt/tank*. If you created a dataset to use for home directories, select that dataset.
Select the **Read**, **Write**, and **Execute** permissions for **User**, **Group**, and **Other** this directory should have, then select **Create Home Directory**.

Select the shell for this admin user from the **Shell** dropdown list.
We recommend setting shell to **TrueNAS Console** as this provides access to the Console Setup menu and the Linux shell from the SCALE **Shell** screen.

Select the sudo authorization permissions for the admin user.
Some applications, such as [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}), require sudo permissions for the administrator account.
For administrator accounts generated during the initial installation process, TrueNAS SCALE sets authorization to **Allow all sudo commands**.
Alternatively, accept default user sudo permissions and apply permissions to the group (see below).

Click **Save**.
The system adds the user to the **builtin-users** group after clicking **Save**.

Go to **Credentials > Local Groups** and select the new admin user primary group row to expand it.
Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit**.

{{< trueimage src="/images/SCALE/Credentials/EditGroup.png" alt="Edit Group Screen" id="Edit Group Screen" >}}

Use the **Privileges** dropdown to select assign permissions as **Local Administrator** to allow full administrative access or select **Read-Only Administrator** or **Sharing Administrator** to limit permissions. See [Using Administrator Logins]({{< relref "adminroles.md" >}}) for more information.

Select the sudo authorization permissions for the admin group.

Click **Save**.

Alternatively, click **Add** to create a new group for administrative users, such as *Share_Administrators*.
Configure the new group as above.

After creating a new group, click <i class="material-icons" aria-hidden="true" title="Members">group</i> **Members** to open the **Update Members** screen and assign one or more administrative user accounts to the group.
Click **Save**.

Log out of the TrueNAS system and then log back in using the new user credentials to verify that the admin credentials work properly with your network configuration.

After adding the admin user account, disable the root and/or default administrative user password(s).

Go to **Credentials > Local Users**, click on the user, and select **Edit**.
Click the **Disable Password** toggle to disable the password, then click **Save**.
