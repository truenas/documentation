&NewLine;

Select **Enable ACL** to show the ACL and **ACE Entries** options.
Configure ACE entries for each UID and/or GID you recorded from the **Run As Context** widget in [Before You Begin](#before-you-begin).

{{< expand "Configuring ACE Entries" "v" >}}
Enter or browse to select the dataset and populate **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallAppStorageConfigurationACLandACESettings.png" alt="Host Path ACL and ACE Settings" id="Host Path ACL and ACE Settings" >}}

Next, click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER** or **Entry is for a GROUP**.
If you configured a group in TrueNAS that you want to give access to instead of a single user, set the ID to the group option and enter the GID for that group.

Enter the UID and/or GID as one of the following:
* The default app user:
  * **568** for apps in all trains if the app can run as any non-root user.
  * **999** for all postgres storage volumes.
  * **0** if running as root.
  * **473** for MinIO app in the stable train.
* The run-as-user UID set as a default for the app.
  The run-as user shows on the app details screen in the **Run As Content** widget, and on the **Installed** application screen after the app deploys.
  You can refer to the tutorial for the app, or look in the <file>questions.yaml</file> file found in the GitHub repository for the application to find this UID/GID.
* The user ID for the new or existing TrueNAS user added to serve as the administrator for the app.

If the app shows **User and Group Configuration** settings, the default UID shows on the screen. If not, choose the run-as user ID found in the **Run As Content** widget.

Use the default user ID **999** for all postgres storage volumes, not the run-as user.

If you created a new TrueNAS user to serve as the app administration user, add an entry record and enter the UID for this user in addition to the run-as user ID.

When adding the ACL entry for the run-as user, default user, and/or optional TrueNAS app administrator user, and postgres user ID, set the  **Access** permissions level to **FULL CONTROL**.
{{< /expand >}}

Select **Force Flag** to apply the ACL even if the path has existing data. This allows you to update the app when an update is available.