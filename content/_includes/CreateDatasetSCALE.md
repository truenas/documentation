---
---

To create a dataset using the default settings, go to **Datasets**. 
Default settings includes the settings datasets inherit from the parent dataset.

Select a dataset (root, parent or child), then click **Add Dataset**.

![AddDatasetNameAndOptions](/images/SCALE/22.12/AddDatasetNameAndOptions.png "Add Dataset Name and Options")

Enter a value in **Name**.

Select either **Sensitive** or **Insensitive** from the **Case Sensitivity** dropdown.

Select either **SMB** for the **Share Type** or leave set to **Generic**, then click **Save**.

![AddDatasetEncrytionAndOtherOptionsBasic](/images/SCALE/22.12/AddDatasetEncrytionAndOtherOptionsBasic.png "Add Encryption and Other Options")

You can create datasets optimized for SMB shares or with customized settings for your dataset use cases.

If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset, but it is not used for application data storage. 
If you want to store data by application, create the dataset first, then deploy your application. 
When creating a dataset for an application, select **App** as the **Share Type** setting. This optimizes the dataset for use by any application.

{{< hint type=important >}}
Review the **Share Type** and **Case Sensitivity** options on the configuration screen before clicking **Save**.
You cannot change these and the **Name** setting after clicking **Save**.
{{< /hint >}}
