&NewLine;

{{< hint type=info title="Storj Bucket Compatibility" >}}
Not all Storj buckets are TrueNAS compatible.
To create a TrueNAS-compatible bucket, either log in to Storj using the [ix Storj affiliate link](https://us1.storj.io/signup?partner=ix-storj-1) before creating the bucket in the Storj UI, or use the TrueNAS UI to create the bucket using the **Add New** option.
{{< /hint >}}

To create a Storj bucket from the TrueNAS UI:

Go to **Data Protection**.
Click **Add** on either the **TrueCloud Backup Tasks** or **Cloud Sync Tasks** widget.

If using the [Add TrueCloud Backup Task]({{< ref "truecloudbackuptasksscreen" >}}) screen:

1. Select the stored Storj cloud credential from the **Credentials** dropdown.
   Do this as part of setting up a task.
  
 {{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskNewBucket.png" alt="TrueCloud Add New Bucket Settings" id="TrueCloud Add New Bucket Settings" >}}

2. Select **Add New** from the **Bucket** dropdown.

3. Enter a name for the new bucket. Only lowercase letters, numbers, and hyphens are allowed

4. Continue to configure the TrueCloud backup task, then click **Save**.
   TrueNAS creates the task and remote bucket on Storj.

If using the [Cloud Sync Task Wizard]({{< ref "cloudsynctasksscreensscale" >}}):

1. Select the stored Storj cloud credential from the **Provider > Credentials** dropdown.
 Do this as part of setting up a task or use the wizard to create the bucket without saving a configured task.

2. Click **Verify Credential** for verification, then click **Next** to go to the **What and When** screen.

3. Select **Add New** to open the **Add Bucket** screen.

 {{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskNewBucket.png" alt="Add Bucket Screen" id="Add Bucket Screen" >}}

4. Enter a name for the new bucket.

5. Click **Save**.
   TrueNAS creates the remote bucket on Storj and then returns to the **Cloud Sync Task Wizard**.