&NewLine;

Click **Create Pool** to open the **Pool Creation Wizard**.

{{< expand "Pool Creation Wizard Fields (Click to expand)" "v" >}}
{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

**Enclosure Option** only shows for iXsystems-provided systems with expansion shelves.

{{< hint type="information" >}}
You can rename your enclosure on the [Enclosure Screen]({{< relref "EnclosureScreensSCALE.md" >}}) to include the rack and U number in the name, which helps identify the physical location while in the pool creation screen.
{{< /hint >}}

1. Enter a name of up to 50 lowercase alpha-numeric characters.
   Use only the permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html).
   The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters.

   {{< hint type=important >}}
   You cannot change the pool name after creation.
   {{< /hint >}}

2. (Enterprise systems only) Select the **Enclosure Option** to apply the dispersal strategy of your choice. Only shows for iXsystems-provided systems with expansion shelves.
   
   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardEnclosureOptionsScreen.png" alt="Pool Creation Wizard Enclosure Options" id="Pool Creation Wizard Enclosure Options" >}}

   **No Enclosure Dispersal Strategy** does not apply a dispersal strategy in how the system adds disks by size and type to the pool VDEVs created when using the **Automated Disk Selection** option.
   Does not show additional options. Disks added to the pool VDEVs are assigned in sequence based on disk availability and are not balanced across all enclosures.

   **Maximum Dispersal Strategy** applies a maximum dispersal strategy in how the system adds disks by size and type to the pool VDEVs created when using the **Automated Disk Selection** option.
   This balances disk selection across all enclosures and available disks.
   Does not show additional options. Disks added to the pool VDEVs are spread across all available enclosure disks.

   **Limit Pool To A Single Enclosure** applies a minimum dispersal strategy in how the system adds disks by size and type to the pool VDEVs created when using the **Automated Disk Selection** option.
   Select the expansion shelf option on the **Enclosure** dropdown. Disks added to the pool VDEVs are spread across the enclosure disks that align with the selection in **Enclosure**.
  
   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardEnclosureOptionsLimitedToSingleEnclosure.png" alt="Enclosure Option Limit Pool to a Single Enclosure" id="Enclosure Option Limit Pool to a Single Enclosure" >}}

3. Create the required data VDEV.

   Select the layout from the **Layout** dropdown list, then either use the **Automated Disk Selection** fields to select and add the disks, or click **Manual Disk Selection** to add specific disks to the chosen **Layout**.

   **dRAID** layouts do not show the **Manual Disk Selection** button but do show additional **Automated Disk Selection** fields.
   When configuring a **dRAID** data VDEV, first choose a **Disk Size** then select a **Data Devices** number.
   The remaining fields update based on the **Data Devices** and **dRAID** layout selections.
   
   {{< include file="/static/includes/dRaidGroupLayout.md" >}}

   Click **Save And Go To Review** if you do not want to add other VDEV types to the pool, or click **Next** to move to the next wizard screens.

4. Add any other optional VDEVs as determined by your specific storage redundancy and performance requirements.

5. Click **Create Pool** on the **Review** wizard screen to add the pool.
