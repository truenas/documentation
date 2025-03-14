&NewLine;

ixVolumes do not require setting up an Access Control List (ACL) and Access Control Entry (ACE) in the app configuration settings, but host paths do.
After entering the path inside the container in **Mount Path**, select **Enable ACL**.
Browse to or enter the path to the dataset in **Host Path**.
Click **Add** next to **ACL Entries** to display a set of ACE fields.
Use **ID Type** to select whether the ACE is for a user or a group.
Enter the UID or GID in **ID** and adjust the permissions level in **Access**.

Refer to the app **Run As Context** on the app details screen for default ID requirements.
A user or group ID does not need to exist locally on TrueNAS or match the name configured in the container to grant an ACE.
Failing to configure host path ACLs prevents the app from deploying!

Select **Force Flag** to allow TrueNAS to update the application to the next version.
This allows TrueNAS to write ACL entries to the storage volume if it has existing data in it.
**Force Flag** is required to edit or update an existing application.
