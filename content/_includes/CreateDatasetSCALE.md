&NewLine;

To create a basic dataset using the default settings, go to **Datasets**.
Default settings include the settings datasets inherit from the parent dataset.

Select a dataset (root, parent, or child), then click **Add Dataset**.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetNameAndOptions.png" alt="Name and Options" id="Name and Options" >}}

Enter a value in **Name**.

Select the **Dataset Preset** option you want to use. 
Options are **Generic**, **Multiprotocol**, **SMB**, or **Apps**.

You can create datasets optimized for SMB shares or with customized settings for your dataset use cases. 
If creating an SMB or multi-protocol (SMB and NFS) share the dataset name value auto-populates the **SMB Name** field and applies the dataset name to the SMB share.

If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset, but it is not used for application data storage.
If you want to store data by application, create the dataset first, then deploy your application.
When creating a dataset for an application, select **App** as the **Dataset Preset**. This optimizes the dataset for use by an application.

If you want to configure advanced setting options, click **Advanced Options**. 
For the **Sync** option, we recommend production systems with critical data use the default **Standard** choice or increase to **Always**.
Choosing **Disabled** is only suitable in situations where data loss from system crash or power loss is acceptable.

Select either **Sensitive** or **Insensitive** from the **Case Sensitivity** dropdown.

Click **Save**.

{{< hint type=important >}}
Review the **Dataset Preset** and **Case Sensitivity** under **Advanced Options** on the **Add Dataset** screen before clicking **Save**.
You cannot change these or the **Name** setting after clicking **Save**.
{{< /hint >}}
