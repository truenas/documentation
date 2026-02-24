&NewLine;

Click **Create Pool** to open the **Pool Creation Wizard**.

1. Enter a name of up to 50 lowercase alpha-numeric characters. The pool name contributes to the maximum character length for datasets, so it is limited to 50 characters.
   Use only the permitted special characters that conform to [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html).
   Names can have upper or lowercase alphanumeric characters, but use lower-case alpha characters to avoid potential problems with sharing protocols.
   Names can have special characters such as underscore (_), hyphen (-), colon (:), or a period (.), but do not begin a pool name with a special character.

   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardGeneralInfo.png" alt="Pool Creation Wizard General Info" id="Pool Creation Wizard General Info" >}}

   {{< hint type=important >}}
   You cannot change the pool name after creation.
   {{< /hint >}}

   Select the encryption option for the pool. Select **None** to create an unencrypted pool. We recommend not encrypting the pool root dataset or the system dataset.
   If creating a second pool on your system and you want to encrypt this pool, select **Software Encryption (ZFS)**. All datasets created with this option selected are also encrypted by default.
   {{< enterprise >}}
   If your Enterprise system is licensed for and has SED drives, you can select **Self-Encrypting Drives (SED)** to create a pool with SED drives and encryption.
   The drives you can select are only SED drives.

   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardGeneralInfoSED.png" alt="Pool Creation Wizard General Info - SED" id="Pool Creation Wizard General Info - SED" >}}

   Enter and confirm the global SED password. This applies to all SED drives in the system.
 
2. (Enterprise systems only) Select the **Enclosure Option** to apply the dispersal strategy of your choice.
   
   **Enclosure Option** only shows for TrueNAS Enterprise systems with connected expansion shelves.

   {{< hint type=info >}}
   You can rename your enclosure on the [Enclosure screen]({{< ref "EnclosureScreensSCALE" >}}) to include the rack and U number in the name, which helps identify the physical location while in the pool creation screen.
   {{< /hint >}}

   The dispersal strategy sets how the system adds disks by size and type to the pool VDEVs created using the **Automated Disk Selection** option.
   Enclosures mentioned in the options below refer to the disk enclosures in the expansion shelves and main system chassis.

   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardEnclosureOptionsScreen.png" alt="Pool Creation Wizard Enclosure Options" id="Pool Creation Wizard Enclosure Options" >}}

   **No Enclosure Dispersal Strategy** does not apply a dispersal strategy, and does not show additional options.
   Disks added to the pool VDEVs are assigned in sequence based on disk availability and are not balanced across all enclosures.

   **Maximum Dispersal Strategy** applies a maximum dispersal strategy.
   This option balances disk selection across all enclosures and available disks and does not show additional options.
   Disks added to the pool VDEVs are spread across all available enclosure disks.

   **Limit Pool To A Single Enclosure** applies a minimum dispersal strategy.
   Select the expansion shelf option on the **Enclosure** dropdown.
   Disks added to the pool VDEVs are spread across the enclosure disks that align with the selection in **Enclosure**.
  
   {{< trueimage src="/images/SCALE/Storage/PoolCreationWizardEnclosureOptionsLimitedToSingleEnclosure.png" alt="Enclosure Option Limit Pool to a Single Enclosure" id="Enclosure Option Limit Pool to a Single Enclosure" >}}
   {{< /enterprise >}}

3. Create the required data VDEV.
   
   {{< expand "Pool Creation Wizard Data VDEV" "v" >}}
   {{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
   {{< /expand >}}

   Select the layout from the **Layout** dropdown list, then use the **Automated Disk Selection** fields to select and add the disks, or click **Manual Disk Selection** to add specific disks to the chosen **Layout**.

   **dRAID** layouts do not show the **Manual Disk Selection** button but do show additional **Automated Disk Selection** fields.
   When configuring a **dRAID** data VDEV, first, choose a **Disk Size** then select a **Data Devices** number.
   The remaining fields update based on the **Data Devices** and **dRAID** layout selections.

   {{< include file="/static/includes/dRaidGroupLayout.md" >}}

   Click **Save And Go To Review** if not adding other VDEV types to the pool or click **Next** to move forward to the next wizard screen.

4. Add optional VDEVs to suit your storage redundancy and performance requirements.

5. Click **Create Pool** on the **Review** wizard screen to add the pool.