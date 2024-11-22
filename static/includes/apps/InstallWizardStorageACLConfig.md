&NewLine;

Select **Enable ACL** to show the ACL and **ACE Entries** options.

{{< expand "Configuring ACE Entries" "v" >}}
Enter or browse to select the dataset and populate **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigurationACLandACESettings.png" alt="Host Path ACL and ACE Settings" id="Host Path ACL and ACE Settings" >}}

Next, click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER** or **Entry is for a GROUP**.
If you configured a group in TrueNAS that you want to give access to instead of a single user, set the ID to the group option and enter the GID for that group.

Enter the UID as one of the following:
* The default apps user, which are:
  * **568** for apps in all trains if the app can run as any non-root user.
  * **999** for all postgres storage volumes.
  * **0** if running as root.
  * **473** for MinIO app in the stable train.
* The run-as-user UID set as a default for the app.
  The run-as user shows on the details screen in the **Run As Content** widget, and on the **Installed** application screen after the app is deployed.
  You can also refer to the tutorial for the app, or look in the <file>questions.yaml</file> file in the GitHub repository for the application to find this UID/GID.
* The new user UID for a TrueNAS user created to serve as the app administrator.

If the app shows **User and Group Configuration** settings, the default UID shows on the screen. If not, choose the run-as UID.

All postgres storage volumes use the default user ID **999**, not as the run-as user.

If you create a new user to serve as the app administration user, enter the UID for this user in addition to the run-as user ID.
Always add the run-as user with full control permissions except for postgres storage volumes.

Select the ID type from the dropdown list, enter the UID (or GID if you select the group ID type) for the app administration user, and then set the **Access** permissions level to **FULL CONTROL**.
{{< /expand >}}

Select **Force Flag** to apply the ACL even if the path has existing data. This allows you to update the app when an update is available.