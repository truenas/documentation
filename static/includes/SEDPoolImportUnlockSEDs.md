&NewLine;

{{< expand "Importing SED Drives" "v" >}}
{{< enterprise >}}
When importing SED drives into a pool, if TrueNAS finds SED-locked disks, it stops and shows information about locked disks and provides the option to unlock or skip unlocking and proceeding with the import. If skipped, the disks remain locked and inaccessible until they are unlocked with the global SED password or any individual SED password applied to the disk.

{{< trueimage src="/images/SCALE/Storage/ImportPoolwithSEDDisks.png" alt="Import Pool with SED Disks" id="Import Pool with SED Disks" >}}

Use the individual disk SED password when the disk is locked with an individual password; otherwise, use the global SED password to unlock it.

**Unlock** the **Import Pool** screen initiates the unlock process for the SED disks to make the data on them accessible after import, and it shows the **Global SED Password** and **Individual Disk Passwords (Optional)** fields, and the **Add Disk Exceptions** option.

{{< trueimage src="/images/SCALE/Storage/UnlockDiskOnImportPoolScreen.png" alt="Unlocking SED Disks" id="Unlocking SED Disks" >}}

The **Skip** on the unlocked SED disk screen where you enter the individual disk SED passwords allows you to exit out of the unlock SED process and proceed with the pool import. To proceed with unlocking the disks, click **Unlock Disks**.

{{< trueimage src="/images/SCALE/Storage/ImportPoolScreenAddDiskExceptions.png" alt="Add Disk Excemptions" id="Add Disk Exceptions" >}}

**Add Disk Exception** expands to show the **Disk Name** and **Password** fields that, when entered, overrides the global SED password for the added disk(s).
The **x**  icon is the **Remove disk exception** function. Use it to remove the disk exception fields and activate the **Unlock Disks** button.

The **Update global settings (applies to all disks/pools)** option is selected by default. This indicates the password is saved to the system configuration for future use with these disks.
{{< /enterprise >}}
{{< /expand >}}

