&NewLine;

Select **Enable ACL** to show the ACL and **ACE Entries** options.

{{< expand "Configuring ACE Entries" "v" >}}
Enter or browse to select the dataset and populate **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigurationACLandACESettings.png" alt="Host Path ACL and ACE Settings" id="Host Path ACL and ACE Settings" >}}

Next, click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER** or **Entry is for a GROUP**.
If you configured a group in TrueNAS that you want to give access to instead of a single user, set the ID to the group option and enter the GID for that group.

Enter the UID as one of the following:
* The default apps user, which is **473** for apps in the stable train, **568** for apps in the **enterprise** or **community** trains, **999** for postgres storage volumes, or **0** if running as root.
* The pre-assigned or run-as-user UID set as a default for the app.
* The new user UID for a TrueNAS user created to serve as the app administrator.

If the app shows **User and Group Configuration** settings, the default UID shows on the screen. If not, choose the UID indicated above (**473**, **568**, or **999**).

If the app has a different, pre-assigned run-as user UID for the app but it is not shown in the UI, refer to the tutorial for the app or look in the <file>questions.yaml</file> file in the GitHub repository for the application to find this UID/GID.

All postgres storage volumes use the default user ID **999**.

Select the ID type from the dropdown list, enter the UID (or GID if you select the group ID type) for the app administration user, and then set the **Access** permissions level to **FULL CONTROL**.
{{< /expand >}}
Select **Force** to apply the ACL even if the path has existing data. This allows you to update the app when an update is available.