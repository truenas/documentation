&NewLine;

{{< hint type=important icon=gdoc_notification title="Manual Migration Required" >}}
Due to configuration incompatibilities between the previous KVM hypervisor (TrueNAS 24.10 and earlier) and Incus in TrueNAS 25.04, existing VM configurations do not transfer automatically during the upgrade.
However, TrueNAS retains storage zvols, allowing you to manually recreate the previous VM configurations and get them back online.
{{< /hint >}}

{{< expand "Manual Migration Instructions" "v" >}}

To migrate VMs from TrueNAS 24.10 (latest) to 25.04:

1. [Prepare for migration](#preparing-to-migrate-vms-from-2410) by gathering VM configurations and storage details.
2. Upgrade to 25.04.
3. [Recreate VMs](#recreating-vms-in-2504) using the saved configurations and attach existing zvol storage.

#### Preparing to Migrate VMs from 24.10

1. Record VM Configuration
   - Open **Virtualization** and locate your VM.
   - Click the VM row to expand it, then click <span class="iconify" data-icon="mdi:pencil"></span> **Edit**.
   - Take a screenshot or manually record the VM settings, as they do not transfer to 25.04.
   - Save this information externally for reference.

2. Record Storage and Virtual Device Configuration
   - Open **Virtualization** and locate your VM.
   - Click the VM row to expand it, then click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.
   - Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **Disk** row and select **Edit**.
   - Note the **Zvol path**, storage **Mode**, and **Disk Sector Size**.
   - Document all VM devices and their configurations for later use.

#### Recreating VMs in 25.04

1. Configure Virtualization Settings
   - After upgrading to TrueNAS 25.04, go to **Instances** (formerly **Virtualization**).
   - Click **Select Pool** to open **Global Settings**.
   - Use the **Pool** dropdown to select a storage pool for virtualization.
   - Accept default networking settings or modify as needed, then click **Save**.

2. Recreate the VM
   - Click **Create New Instance**.
   - Select **VM** as the **Virtualization Method**.
   - Select **Use zvol with previously installed OS** from **VM Image Options**.
   - Enter or browse to select the path to the existing zvol.
   - Adjust VM settings (CPU, memory, networking, etc.) to match your previous configuration.
   - Click **Create**.

{{< /expand >}}
