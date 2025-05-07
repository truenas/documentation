&NewLine;

Select **Enable ACL** to show the ACL and **ACE Entries** options for host path volumes. For postgres storage volumes do not select **Enable ACL**, instead select the **Automatic Permissions** option. Configure ACE entries for each UID and/or GID recorded in the **Run As Context** widget from [Before You Begin](#before-you-begin).

{{< expand "Configuring ACE Entries" "v" >}}
Enter or browse to select the dataset to populate **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigurationACLandACESettings.png" alt="Host Path ACL and ACE Settings" id="Host Path ACL and ACE Settings" >}}

Click **Add** to the right of **ACL Entries** to show the permissions settings. Set **ID Type** to **Entry is for a USER** or **Entry is for a GROUP**. If you configured a group granting access for users, set the ID to **Group** and enter the GID.

Enter the UID and/or GID for the run-as users, found in the **Run As Context** widget. 

If a new TrueNAS user is created to serve as the app administrator, add the UID for this user along with the run-as user ID. Set the **Access** permission to **FULL CONTROL** for the run-as user, default user, and app administrator user.

Do not use **Edit ACL** for postgres storage volumes. Use **Automatic Permissions** to set the correct permissions.

{{< /expand >}}

Select **Force Flag** to apply the ACL even if the path has existing data, allowing app updates.
