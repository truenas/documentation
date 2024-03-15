&NewLine;

To create a pool using the **Pool Creation Wizard**.

{{< expand "Pool Creation Wizard Fields (Click to expand)" "v" >}}
{{< include file="/_includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

1. Enter a name.
   Use up to 50 lower case alpha-numeric and permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html).
   The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters.

   {{< hint type=important >}}
   The pool name cannot change after creation.
   {{< /hint >}}

2. Create the required data VDEV.

   Select the layout from the **Layout** dropdown list, then either use the **Automated Disk Selection** fields to select and add the disks, or click **Manual Disk Selection** to add specific disks to the chosen **Layout**.

   **dRAID** layouts do not have the **Manual Disk Selection** button and instead show additional **Automated Disk Selection** fields.
   When configuring a **dRAID** data VDEV, first choose a **Disk Size** then select a **Data Devices** number.
   The remaining fields update based on the **Data Devices** and **dRAID** layout selections.

   Click **Save And Go To Review** if you do not want to add other VDEV types to the pool, or click **Next** to move to the next wizard screen.

3. Add any other optional VDEVs as determined by your specific storage redundancy and performance requirements.

4. Click **Create Pool** on the **Review** wizard screen to add the pool.