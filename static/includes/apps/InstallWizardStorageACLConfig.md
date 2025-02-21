&NewLine;

Select **Enable ACL** to show the ACL and **ACE Entries** options for host path volumes except for postgres storage volumes.
Configure ACE entries for each UID and/or GID you recorded from the **Run As Context** widget in [Before You Begin](#before-you-begin).

{{< expand "Configuring ACE Entries" "v" >}}
Enter or browse to select the dataset and populate **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigurationACLandACESettings.png" alt="Host Path ACL and ACE Settings" id="Host Path ACL and ACE Settings" >}}

Next, click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER** or **Entry is for a GROUP**.
If you configured a group in TrueNAS that you want to give access to instead of a single user, set the ID to the group option and enter the GID for that group.

Enter the UID and/or GID for the run as users.
The run-as user(s) show on the app details screen in the **Run As Content** widget, and on the **Installed** application screen after the app deploys.

If the app shows **User and Group Configuration** settings, the default UID shows on the screen. If not, choose the run-as user ID found in the **Run As Content** widget.

Postgres storage volumes have **999** as the default user ID and run-as user.

If you created a new TrueNAS user to serve as the app administration user, add an entry record and enter the UID for this user in addition to the run-as user ID.

When adding the ACL entry for the run-as user, default user, and/or optional TrueNAS app administrator user, set the  **Access** permissions level to **FULL CONTROL**.

Do not use the **Edit ACL** option for postgres storage volumes. Select the **Automatic Permissions** option, which correctly sets permissions for the postgres and parent dataset (if used).
{{< /expand >}}

Select **Force Flag** to apply the ACL even if the path has existing data. This allows you to update the app when an update is available.