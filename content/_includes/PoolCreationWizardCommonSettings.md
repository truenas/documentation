&NewLine;

This wizard screen provides the option to configure a VDEV using the **Automated Disk Selection** fields.
To individually find and select disks for a VDEV, click **Manual Disk Selection** in the **Advanced Options** area.

Choosing a dRAID VDEV layout removes the **Manual Disk Selection** button and adds different options to the **Automated Disk Selection** area.

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

Similar to RAIDZ, dRAID layout numbers (**1**, **2**, or **3**) indicate a parity level with additional disks reserved for data redundancy.
For example, a **dRAID1** layout with a single **Data Device** and **Distributed Hot Spare** must have a minimum of 3 children while a **dRAID2** layout requires at least 4 children.

TrueNAS defaults to allocating 10 disks minimum as dRAID VDEV **Children**.
If a data VDEV is being created with fewer than 10 disks, using a RAIDZ layout is strongly recommended for better performance and capacity optimization.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Disk Size** | Select the disk size from the list that displays. The list shows disks by size in GiB and type (SSD or HDD). |
| **Treat Disk Size as Minimum** | Select to use disks of the size selected in **Disk Size** or larger. If not selected, only disks of the size selected in **Disk Size** are used. |
| **Data Devices** | Number of disks to provide storage capacity to the VDEV. Select the number of disks from the options provided on the dropdown list. TrueNAS recommends dRAID layouts have data devices allocated in multiples of 2. |
| **Distributed Hot Spares** | Number of disks to actively provide spare capacity to the entire VDEV. These disks remain active with the pool. |
| **Children** | The total number of disks to allocate in the dRAID VDEV. The field selection and options update dynamically based on the chosen dRAID **Layout**, **Disk Size**, **Data Devices**, and **Distributed Hot Spares**. Increasing the number of **Children** in the dRAID VDEV can reduce the options for **Number of VDEVs**. |
| **Number of VDEVs** | Select the number of VDEVs from the options provided on the dropdown list. Options are populated dynamically depending on the selections made in all the other fields. |
{{< /truetable >}}
