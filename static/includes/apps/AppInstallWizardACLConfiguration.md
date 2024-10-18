&NewLine;

Select **Enable ACL** to show the ACL and ACE Entries options.

Enter or browse to select the dataset path. 

Next click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER**.
Enter the UID as one of the following:
* The default apps user which is either **473** for apps in the stable train or **568** for apps in the **enterprise** or **community** train.
* The new user ID for the TrueNAS user created to serve as the app administrator.

If setting up postgres storage volumes, the default user id for these volumes is **999**.

If there is run-as option defined in the wizard, enter this run-as UID when adding the user ACE entry.
If not shown in the UI, to find the run-as user ID, refer to the <file>questions.yaml</file> file in the GitHub repository for the application.

Select the permissions level from the **Access** dropdown list. Enter the UID for the app administration user, and set the level to **FULL CONTROL**.

Select **Force** to apply the ACL even if the path has existing data.