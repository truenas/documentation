&NewLine;

This wizard screen lets you configure a VDEV using the **Automated Disk Selection** fields.
To individually find and select disks for a VDEV, click **Manual Disk Selection** in the **Advanced Options** area.

Choosing a dRAID VDEV layout removes the **Manual Disk Selection** button and adds different options to the **Automated Disk Selection** area.
It also removes the **Spare** VDEV section from the pool creation wizard and replaces it with the **Distributed Hot Spares** option in the **Data** VDEV section.

#### VDEV Layouts
The **Layouts** field shows the following options:

* **Stripe**

  Designates that each disk is used sequentially in the VDEV.
  Requires at least one disk and has no redundancy.
  A data VDEV with a stripe layout irretrievably loses all stored data if a single disk in the VDEV fails.
  Not recommended for data VDEVs storing critical data.

* **Mirror**

  Denotes that each disk in the VDEV stores an exact copy of the data.
  Requires at least two disks in the VDEV.
  Storage capacity is the size of a single disk in the VDEV.

* **RAIDZ** and **dRAID**

  Each of these layouts has 1, 2, and 3 options.
  The options indicate the number of disks reserved for data parity and the number of disks that can fail in the VDEV without data loss to the pool.
  For example, a **RAIDZ2** layout reserves two additional disks for parity, and two disks can fail without data loss.

* **Spare**
  
  Designates one or more disks to be held in reserve for the pool, ready to automatically replace a failed disk in a data VDEV.
  Spare disks are not part of normal pool capacity and do not store data unless activated to replace a failed disk.
  Not available when using a dRAID data VDEV layout. dRAID uses distributed hot spares within the data VEDV instead.

* **Cache**

  Designates one or more disks (typically SSDs) used as a second-level adaptive replacement cache (L2ARC) to extend the read cache of a pool beyond system RAM (ARC).
  Cache disks are always striped and do not provide redundancy. A cache VDEV failure does not affect pool data integrity.
  Refer to the [L2ARC](https://www.truenas.com/docs/references/l2arc/) article for more information on how L2ARC uses this VDEV, write-algorithm behaviour, and device recommendations.

* **Special (Metadata)**
  
  Designates one or more disks (typically SSDs) used to store pool metadata and, optionally, small file data. This offloads it from the slower data VDEV to improve performance.
  Special VDEVs can use a stripe, mirror, or RAIDz layout, with the same parity rules applied for RAIDz options. Special VDEVs do not support dRAID, and must tolerate at least as many drive failures as the data VDEV.
  Using two or more special VDEVs can improve reliability by storing each metadata copy on a different VDEV.
  The **Use Metadata (Special) VDEVs** threshold (special_small_blocks) controls which file data, by size, is stored on the special VDEV instead of the data VDEV. This supports manual storage tiering on a per-dataset basis.
  Note: if a dedicated log VDEV does not exist in the pool, a special VDEV can also serve the ZIL/SLOG role for synchronous writes.
  We recommend matching the special VDEV redundancy level to the data VDEV, since losing a non-redundant special VDEV can make the entire pool inaccessible.

* **Log**

  Designates one or more disks (typically fast SSDs or NVMe) to use as a dedicated ZFS Intent Log (SLOG) to accelerate synchronous write operations.
  Log disks do not store pool data permanently; rather they hold write transactions briefly before ZFS commits them to the pool and are only read back during an unclean shutdown or crash recovery.
  We recommend mirroring the log VDEV for redundancy. A failed, non-mirrored log VDEV can risk losing recent synchronous writes that are not yet committed to the pool.

#### Automated Disk Selection - Stripe, Mirror, and RAIDZ layouts
 <!-- comment out the setting automation tag {id="pool_create_auto-select"} -->

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardDataScreen.png" alt="Pool Creation Wizard Data Screen" id="Pool Creation Wizard Data Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Disk Size** | Select the disk size from the list that displays. The list shows disks by size in GiB and type (SSD or HDD). |
| **Treat Disk Size as Minimum** | Select to use disks of the size selected in **Disk Size** or larger. If not selected, only disks of the size selected in **Disk Size** are used. |
| **Width** | Select the number of disks from the options provided on the dropdown list. |
| **Number of VDEVs** | Select the number of VDEVs from the options provided on the dropdown list. |
{{< /truetable >}}

#### Automated Disk Selection - dRAID layouts
<!-- comment out the setting automation tag {id="pool_create_draid"} -->

Similar to RAIDZ, dRAID layout numbers (**1**, **2**, or **3**) indicate the parity level and how many disks can fail without data loss to the pool.

TrueNAS defaults to allocating a minimum of 10 disks as dRAID VDEV in **Children**.
If creating a data VDEV with fewer than 10 disks, using a RAIDZ layout is strongly recommended for better performance and capacity optimization.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Treat Disk Size as Minimum** | Select to use disks of the size selected in **Disk Size** or larger. If not selected, only disks of the size selected in **Disk Size** are used. |
| **Data Devices** | Data stripe width for the VDEV. Select the number of disks from the options provided on the dropdown list. TrueNAS recommends that dRAID layouts have data devices allocated in multiples of two. |
| **Distributed Hot Spares** | Number of disk areas to actively provide spare capacity to the entire VDEV. These areas are active within the pool and function in of adding a **Spare** VDEV to the pool. We recommend setting this to at least **1**. The **Distributed Hot Spares** number cannot be modified after the pool is created. |
| **Children** | The total number of disks to allocate in the dRAID VDEV. The field selection and options update dynamically based on the chosen dRAID **Layout**, **Disk Size**, **Data Devices**, and **Distributed Hot Spares**. Increasing the number of **Children** in the dRAID VDEV can reduce the options for **Number of VDEVs**. |
| **Number of VDEVs** | Select the number of VDEVs from the options provided on the dropdown list. Options are populated dynamically depending on the selections made in all the other fields. |
{{< /truetable >}}