&NewLine;

This wizard screen provides the option to configure a VDEV using the **Automated Disk Selection** fields.
To individually find and select disks for a VDEV, click **Manual Disk Selection** in the **Advanced Options** area.

Choosing a dRAID VDEV layout removes the **Manual Disk Selection** button and adds different options to the **Automated Disk Selection** area.
It also removes the **Spare** VDEV section from the pool creation wizard and replaces it with the **Distributed Hot Spares** option in the **Data** VDEV section.

#### VDEV Layouts

* A **Stripe** designates that each disk is used sequentially in the VDEV.
  Requires at least one disk and has no redundancy.
  A data VDEV with a stripe layout irretrievably loses all stored data if a single disk in the VDEV fails.
  Not recommended for data VDEVs storing critical data.

* A **Mirror** denotes that each disk in the VDEV stores an exact data copy.
  Requires at least 2 disks in the VDEV.
  Storage capacity is the size of a single disk in the VDEV.

* **RAIDZ** and **dRAID** layouts each have 1, 2, and 3 options.
  These indicate the number of disks reserved for data parity and also the number of disks that can fail in the VDEV without data loss to the pool.
  For example, a **RAIDZ2** layout reserves two additional disks for parity and two disks can fail without data loss.

#### Automated Disk Selection - Stripe, Mirror, and RAIDZ layouts
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Disk Size** | Select the disk size from the list that displays. The list shows disks by size in GiB and type (SSD or HDD). |
| **Treat Disk Size as Minimum** | Select to use disks of the size selected in **Disk Size** or larger. If not selected, only disks of the size selected in **Disk Size** are used. |
| **Width** | Select the number of disks from the options provided on the dropdown list. |
| **Number of VDEVs** | Select the number of VDEVs from the options provided on the dropdown list. |
{{< /truetable >}}

#### Automated Disk Selection - dRAID layouts

Similar to RAIDZ, dRAID layout numbers (**1**, **2**, or **3**) indicate the parity level and how many disks can fail without data loss to the pool.

TrueNAS defaults to allocating 10 disks minimum as dRAID VDEV in **Children**.
If creating a data VDEV with fewer than 10 disks, using a RAIDZ layout is strongly recommended for better performance and capacity optimization.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Disk Size** | Select the disk size from the list that displays. The list shows disks by size in GiB and type (SSD or HDD). |
| **Treat Disk Size as Minimum** | Select to use disks of the size selected in **Disk Size** or larger. If not selected, only disks of the size selected in **Disk Size** are used. |
| **Data Devices** | Data stripe width for the VDEV. Select the number of disks from the options provided on the dropdown list. TrueNAS recommends dRAID layouts have data devices allocated in multiples of 2. |
| **Distributed Hot Spares** | Number of disk areas to actively provide spare capacity to the entire VDEV. These areas are active within the pool and function in of adding a **Spare** VDEV to the pool. It is recommended to set this to at least **1**. The **Distributed Hot Spares** number cannot be modified after the pool is created. |
| **Children** | The total number of disks to allocate in the dRAID VDEV. The field selection and options update dynamically based on the chosen dRAID **Layout**, **Disk Size**, **Data Devices**, and **Distributed Hot Spares**. Increasing the number of **Children** in the dRAID VDEV can reduce the options for **Number of VDEVs**. |
| **Number of VDEVs** | Select the number of VDEVs from the options provided on the dropdown list. Options are populated dynamically depending on the selections made in all the other fields. |
{{< /truetable >}}
