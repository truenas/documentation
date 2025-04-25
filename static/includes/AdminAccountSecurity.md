&NewLine;

{{< hint type=important title="Administrator Account Security">}}
The default SCALE administrator account name changes from **admin** to **truenas_admin** in TrueNAS SCALE 24.10 (Electric Eel) fresh installations.
Earlier releases of SCALE with the **admin** account retain this account when upgrading to 24.10 through the UI.

To improve security and minimize username discoverability, create one or more administrator accounts with unique usernames and passwords and disable password access for default administrator accounts (**root**, **admin**, or **truenas_admin**).
Configure appropriate administrative privileges for each admin account.
Follow the principle of least privilege (PoLP) and assign the lowest permissions required to perform the administrative tasks expected for that user.
If a task requires SSH login or sudo command permission, temporarily enable these settings then disable when the task is complete.
See [Security Recommendations](https://www.truenas.com/docs/solutions/optimizations/security/) and [Allowing Sudo Commands]({{< ref "AdminRoles/#allowing-sudo-commands" >}}) for more information.

After adding the admin user account and group privileges, login to confirm UI access then disable the root and/or default administrator user password(s).
Go to **Credentials > Users**, click on the user, and select **Edit**.
Click the **Disable Password** toggle to disable the password, then click **Save**.
{{< /hint >}}
