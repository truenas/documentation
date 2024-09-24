&NewLine;

To set up permissions, select **Enable ACL** to show the ACL and ACE Entries options.

First set the dataset permissions. Enter or browse to select the dataset path. 

Next click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER**.
Enter the UID as one of the following:
* The default apps user which is either **473** for apps in the stable train or **568** for apps in the **enterprise** or **community** train.
* The new user ID for the TrueNAS user created to serve as the app administrator.

If setting up postgres storage volumes, the default user id for these volumes is **999**.

If there is run-as option in the wizard, the user ID is the one defined in the run-as option, or use the default user shown in the app install wizard.
If not show in the UI, to find the run-as user ID, refer to the questions.yaml file in the GitHub repository for the application.

Select the permissions level from the **Access** dropdown list. For the app administration user, set this to **FULL CONTROL**.

Select **Force** to apply the ACL even if the path has existing data.