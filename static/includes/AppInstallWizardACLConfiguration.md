&NewLine;

To set up permissions, select **Enable ACL** to show the ACL and ACE Entries options.

First set the dataset permissions. Enter or browse to select the dataset path. 

Next click **Add** to the right of **ACL Entries** to show the permissions settings.
Set **ID Type** to **Entry is for a USER**, enter the UID for either the default apps user or (**473**) if not defined, or the UID for a new TrueNAS MinIO app admin user if one is created.
If setting up postgres storage volumes, the user id for these volumes is **999**.
If there is run-as option in the wizard, the user ID is **0**, or use the default user shown in the app install wizard.

Select the permissions level from the **Access** dropdown list. For the app administration user, set this to **FULL CONTROL**.

Select **Force** to apply the ACL even if the paht has existing data.