&NewLine;

To manually add a new user, click **Credentials > Users**, and then click **Add** to open the **Add User** screen.

1. Enter a username for the user. Names are case sensitive!

2. Set the level of access given to this user.

   **SMB Access** is selected by default.
   Select **TrueNAS Access**, then select the administration role from the dropdown list that shows after selecting the **TrueNAS Access** option.

   To create an administrator with full access, select **Full Admin**.
   To create an administrator with access to manage shares, select **Sharing Admin**.
   To create an administrator with read-only access, select **Readonly Admin**.

   To allow the user to access the **Shell** in the UI, select **Shell Access**.

   To allow the user to establish an SSH session with the system, select **SSH Access**. Selecting this option also selects the **Shell Access** option by default.
   To limit the user to only Shell access, do not select the **SSH Access** option.
   
3. Enter a password for the user.
   
   {{< expand "Set up SSH authentication." "v" >}}   
   These options only show when you select the **SSH Access** option.

   Select the optional **Allow SSH Login with Password** if you want to allow this user to log in to an SSH session and not be prompted to enter a password.
   This is not recommended as it presents a security vulnerability!

   Manually enter or copy/paste the public key in the **Public SSH Key** field to assign a public SSH key to the user for key-based authentication. 
   
   Do not enter the private key!

   After adding authentication settings, complete the SSH access by setting up sudo commands in the next step.
   
   Always keep a backup of an SSH public key if you are using one.
   {{< /expand >}}

4. Enter additional details for the user. Setting options change based on the access option selected.
   **Shell Access** and **SSH Access** show the **Shell** and **Sudo Command** settings.

   {{< trueimage src="/images/SCALE/Credentials/AddUserAdditionallDetailsSettings.png" alt="Additional Details Settings" id="Additional Details Settings" >}}

   Enter the full name for the user. The full user name is not case sensitive.

   (Optional) Enter the email for the user.
   Starting in TrueNAS 25.10, system notifications are sent to recipients configured in system email settings rather than user account emails.

   {{< expand "Set up the group." "v" >}}
   Accept the default group setting, which is **Create New Primary Group**. This creates a group with the same name as the admin user.
   The role setting adds the user to the appropriate auxiliary group for that role.

   {{< trueimage src="/images/SCALE/Credentials/AddUserGroupSettingOptions.png" alt="User Goup Settings" id="User Group Settings" >}}

   To select a different group, clear the checkmark, and select a new group on the **Primary Group** dropdown list.
   Next, select the group in **Auxiliary Groups** from the dropdown list.
   {{< /expand >}}

   {{< expand "Accept the default UID Setting" "v" >}}
   Accept the default UID setting or enter a new UID.
   TrueNAS suggests a user ID starting at **3000**, but you can change it if you wish.
   We recommend using an ID  of 3000 or greater for non-built-in users.
   {{< /expand >}}

   {{< expand "(Optional) Add a home directory for the user." "v" >}}
   Some functions, such as replication tasks, require setting a home directory for the user configuring the task.

   {{< include file="/static/includes/SSHUserValidationCheck.md" >}}
   
   When creating a user, the default home directory path is set to **/var/empty**.
   This directory is an immutable directory shared by service accounts and accounts that should not have a full home directory.
   If set to this path TrueNAS does not create a home directory for the user. You must change this to the path for the dataset created for home directories.

   {{< trueimage src="/images/SCALE/Credentials/AddUserHomeDirectorySettings.png" alt="User Home Directory Settings" id="User Home Directory Settings" >}}
   
   Select **Create Home Directory** to create a new home directory. Leave unselected to select an existing home directory.
   The file browser field is renamed based on whether you select this option.

   Click the arrow to expand the dataset tree until you reach the home directory parent dataset.
   After clicking on a dataset, the **Create Dataset** option activates.
   Use the **Create Dataset** option to add a new dataset for the home directory if one does not already exist.

   Leave **Default Permissions** selected to accept the default permissions, or clear the checkmark to select **Read**, **Write**, and **Execute** for each role (**User**, **Group**, and **Other**) and customise these permissions for the user, group, or other.
      
   {{< expand "Why did this change in TrueNAS 24.04 (Dragonfish) and later?" "v" >}}
   TrueNAS uses the `pam_mkhomdir` PAM module in the pam_open_session configuration file to automatically create user home directories if they do not exist.
   `pam_mkhomedir` returns `PAM_PERM_DENIED` if it fails to create a home directory for a user, which eventually turns into a pam_open_session() failure.
   This does not impact other PAM API calls, for example, `pam_authenticate()`.
   
   TrueNAS 24.04 (or newer) does not include the customized version of `pam_mkhomedir` used in TrueNAS 13.0 that specifically avoided trying to create the `/nonexistent` directory. This led to some circumstances where users could create the `/nonexistent` directory on TrueNAS versions before 24.04.
   
   Starting in TrueNAS 24.04 (Dragonfish), the root filesystem of TrueNAS is read-only, which prevents `pam_mkhomdir` from creating the `/nonexistent` directory in cases where it previously did.
   This results in a permissions error if `pam_open_session()` is called by an application for a user account that has **Home Directory** set to **/nonexistent**.
   {{< /expand >}}
   {{< /expand >}}

   Select the shell option from the dropdown list. Default is zsh when you select **Shell Access** or **SSH Access**

   {{< expand "Set up the sudo command options." "v" >}}
   
   {{< include file="/static/includes/AdminSudo.md" >}}

   To improve security, deny sudo permissions unless required for specific, recurring administrative tasks, or allow sudo permissions only when needed to perform a discrete task, and then deny again when finished.
   Do not allow sudo permissions for read-only administrators.

   Select **All all sudo commands** if you want to allow the user to enter sudo commands in the shell or an SSH session, but still have TrueNAS prompt the user for their password. 
   To limit the sudo commands allowed to a few rather than all commands, enter each in the **Allowed sudo commands** field.
   Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*.
   <file>/usr/bin/</file> is the default location for commands.
   Press enter after each command to separate the entries.

   {{< trueimage src="/images/SCALE/Credentials/AddUserSudoSettingOptions.png" alt="Add User Sudo Command Options" id="Add User Sudo Command Options" >}}

   Select **Allow all sudo commands with no password** to allow the user to enter sudo commands in the shell or an SSH session, and not have TrueNAS prompt the user to enter their password.
   To limit the commands allowed to a few rather than all sudo commands, enter each in the **Allowed sudo commands with no password** field.
   Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*.
   <file>/usr/bin/</file> is the default location for commands.
   Press enter after each command to separate the entries.

   Alternatively, accept default user sudo permissions and apply permissions to a new administrator group if you choose to use a group to assign permissions.
   {{< /expand >}}

5. Click **Save** to add the user.
