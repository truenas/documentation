&NewLine;

{{< hint type=important icon=gdoc_notification title="Manual Migration Required" >}}
Due to configuration incompatibilities between the previous libvirt implementation (TrueNAS 24.10 and earlier) and Incus in TrueNAS 25.04, existing VM configurations do not transfer automatically during the upgrade.
However, TrueNAS retains storage zvols, allowing you to manually recreate the previous VM configurations and get them back online.

{{< include file="/static/includes/InstancesUpgradeAdvisory.md" >}}
{{< /hint >}}

{{< expand "Manual Migration Instructions" "v" >}}

To migrate VMs from TrueNAS 24.10 (latest) to 25.04:

1. [Prepare for migration](#preparing-to-migrate-vms-from-2410) by gathering VM configurations and storage details.
2. Upgrade to 25.04.
3. [Recreate VMs](#recreating-vms-in-2504) using the saved configurations and attach existing zvol storage.

#### Preparing to Migrate VMs from 24.10

1. Copy or write down the VM configuration:

   a. Go to the **Virtualization** screen and locate your VM.

   b. Click on the VM row to expand it, then click <span class="iconify" data-icon="mdi:pencil"></span> **Edit**.

   c. Take a screenshot or manually write down the VM settings, as they do not transfer to 25.04.

   d. Save this information externally for reference.

2. Copy or write down the storage and virtual device configuration:

   a. Go to the **Virtualization** screen and locate your VM.

   b. Click on the VM row to expand it, then click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.

   c. Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **Disk** row and select **Edit**.

   d. Note the **Zvol path**, storage **Mode**, and **Disk Sector Size**.

   e. Document all VM devices and their configurations for later use.

#### Recreating VMs in 25.04

1. Configure **Instances** settings:

   a. After upgrading to TrueNAS 25.04, go to **Instances** (formerly **Virtualization**).

   b. Click **Select Pool** to open **Global Settings**.

   c. Select the storage pool for virtualization from the **Pool** dropdown.

   d. Accept default networking settings or modify as needed, then click **Save**.

2. Recreate the VM using the existing zvol:

   a. Click **Create New Instance**.

   b. Select **VM** as the **Virtualization Method**.

   c. Select **Upload ISO, import a zvol or use another volume** from **VM Image Options**.

   d. Click **Select Volume** to open the **Volumes** screen, then click **Import Zvols** to open the **Import Zvol** dialog.

      1. Enter the path or browse to select an existing Zvol in **Select Zvols**.

      2. Select the radio button to clone or move the existing zvol.

         - Select **Clone** to clone and promote a temporary snapshot of the zvol into a custom storage volume.

            This option retains the original zvol while creating an identical copy as an instances volume.

         - Select **Move** to relocate the existing zvol to the ix-virt dataset as a volume.Enter or browse to select the path to the existing zvol.

   f. Adjust VM settings (CPU, memory, networking, etc.) to match your previous configuration.

   g. Click **Create**.

{{< /expand >}}
