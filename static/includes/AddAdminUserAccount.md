&NewLine;

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

{{< include file="/static/includes/AdminAccountSecurity.md" >}}

Go to **Credentials > Users** and click **Add**.

{{< trueimage src="/images/SCALE/Credentials/AddUserIdentificationSettings.png" alt="Add User Identification Settings" id="Add User Identification Settings" >}}

Enter memorable name that is difficult to guess for the administrator account.
You can create multiple admin users with different names and assign each different administration roles and privileges.

Enter and confirm the admin user password.

{{< trueimage src="/images/SCALE/Credentials/AddUser-UserIDAndGroupSettings.png" alt="Add User Group Settings" id="Add User Group Settings" >}}

Select **Create New Primary Group** to create a group with the same name as the admin user.
To assign the new admin to an existing group with appropriate administrative privileges, either assign the group as an auxiliary group or disable **Create New Primary Group** and select the group as the primary group.

{{< trueimage src="/images/SCALE/Credentials/AddUserDirPermsAuthSettings.png" alt="Add User Directory and Authentication Settings" id="Add User Directory and Authentication Settings" >}}

Add the home directory for the new admin user.
Enter or browse to select the location where TrueNAS creates the home directory.
For example, */mnt/tank*. If you created a dataset to use for home directories, select that dataset.
Select the **Read**, **Write**, and **Execute** permissions for **User**, **Group**, and **Other** this directory should have, then select **Create Home Directory**.

Select the shell for this admin user from the **Shell** dropdown list.
We recommend setting shell to **TrueNAS Console** as this provides access to the Console Setup menu and the Linux shell from the **Shell** screen.

{{< include file="/static/includes/AdminSudo.md" >}}

For administrator accounts generated during the initial installation process, TrueNAS sets authorization to **Allow all sudo commands**.
For improved security, deny sudo permissions unless required for specific, recurring administrative tasks or allow sudo permissions only when needed to perform a discrete task and then deny again when finished.
Do not allow sudo permissions for read-only administrators.

Alternatively, accept default user sudo permissions and apply permissions to the group.

Click **Save**.
The system adds the user to the **builtin-users** group after clicking **Save**.
