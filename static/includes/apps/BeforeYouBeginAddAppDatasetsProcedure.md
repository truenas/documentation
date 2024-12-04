&NewLine;

  {{< expand "Creating Datasets for Apps" "v" >}}
  When creating datasets for apps follow these steps:
  1. Go to **Datasets**, select the location for the parent dataset if organizing required datasets under a parent dataset, then click **Add Dataset**.
     For example, select the root dataset of the pool, and click **Add Dataset** to create a new parent called *apps* or *appName**, where *appName* is the name of the app.

     Do not create the app datasets under the ix-applications or ix-apps dataset.

  2. Enter the name of the dataset, then select **Apps** as the **Dataset Preset**.
     Creating the parent dataset with the preset set to **Generic** causes permissions issues when you try to create the datasets the app requires with the preset set to **Apps**.

  3. Click **Save**.
     Return to dataset creation when prompted rather than configuring ACL permissions.

     You can set up permissions (ACLs) for a dataset after adding it by selecting **Go to ACL Manager** to open the <b>Edit ACL</b> screen, or wait and use the app Install wizard ACL settings to add  permissions. 
     You can also edit permissions after installing the app using either method.
  
  4. Select the parent dataset and then click **Create Dataset** to open the **Add Dataset** screen again.

  5. Enter the name of a dataset required for the app, such as *config*, select **Apps** as the **Dataset Preset**, and then click **Save**.
     When prompted, return to creating datasets rather than setting up ACL permissions.

  6. Repeat for remaining datasets required for the app.   
  {{< /expand >}}