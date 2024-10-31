&NewLine;

{{< hint type=info title="Storj Bucket Compatibility" >}}
Not all Storj buckets are TrueNAS compatible.
To create a TrueNAS compatible bucket, you must either log in to Storj using the [ix Storj affiliate link](https://us1.storj.io/signup?partner=ix-storj-1) before creating the bucket in the Storj UI, or create the bucket using the **Add New** option in the TrueNAS UI.
{{< /hint >}}

To create a Storj bucket from the TrueNAS UI:

Go to **Data Protection**.
Click **Add** on either the **TrueCloud Backup Tasks** or **Cloud Sync Tasks** widget.

* If using the [Add TrueCloud Backup Task]({{< relref "truecloudbackuptasksscreen.md" >}}) screen, select the stored Storj cloud credential from the **Credentials** dropdown.
  This should be done as part of setting up a task.
  
   {{< trueimage src="/static/images/SCALE/DataProtection/AddTrueCloudTaskNewBucket.png" alt="TrueCloud Add New Bucket Settings" id="TrueCloud Add New Bucket Settings" >}}

   Select **Add New** from the **Bucket** dropdown.

   Enter a name for the new bucket.

   Continue to configure the TrueCloud back up task, then click **Save**.
   TrueNAS creates the task and remote bucket on Storj.

* If using the [Cloud Sync Task Wizard]({{< relref "cloudsynctasksscreensscale.md" >}}), select the stored Storj cloud credential from the **Provider > Credentials** dropdown.
  This can be done as part of setting up a task or the wizard can be used to create the bucket without saving a configured task.

   Click **Verify Credential** for verification, then click **Next** to go to the **What and When** screen.

   Select **Add New** to open the **Add Bucket** screen.

   {{< trueimage src="static/images/SCALE/DataProtection/AddCloudSyncTaskNewBucket.png" alt="Add Bucket Screen" id="Add Bucket Screen" >}}

   Enter a name for the new bucket.

   Click **Save**.
   TrueNAS creates the remote bucket on Storj then returns to the **Cloud Sync Task Wizard**.
