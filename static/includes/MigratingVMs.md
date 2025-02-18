&NewLine;

{{< hint type=important icon=gdoc_notification title="Manual Migration Required" >}}
Due to configuration incompatibilities between the previous KVM hypervisor implementation (TrueNAS 24.10 and earlier) and Incus in TrueNAS 25.04 (and later), existing VMs do not automatically migrate on upgrade from 24.10.X to 25.04.
However, storage zvols are retained, allowing users to easily recreate previously configured VMs.
{{< /hint >}}

{{< expand "Manual Migration Instructions" "v" >}}

To manually migrate VMs from 24.10 (latest) to 25.04, users should first [prepare to migrate](#preparing-to-migrate-vms-from-2410) by gathering image files and recording existing configuration settings.
After updating to 25.04, use the configuration details gathered above to [recreate VMs](#recreating-vms-in-2504) with the same resource allocations and mount existing storage zvols.

#### Preparing to Migrate VMs from 24.10

* Screenshot or record existing VM configuration(s).

  Go to **Instances** and click on a VM to expand that row.
  Click <span class="iconify" data-icon="mdi:pencil"></span> **Edit** to open the **Edit VM** screen and note the existing configuration.
  Save your configuration settings in an external location to reference later.
  These settings do not migrate and must be recreated after upgrading to 25.04.
* Record the existing zvol storage location and virtual device configuration.

  Go to **Instances** and click on a VM to expand that row.
  Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.
  Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **Disk** row and select **Edit**.
  Note the configured path in **Zvol** as well as the storage **Mode** and the **Disk Sector Size**.
  Continue to note all other VM devices and associated configuration settings.
  Record this information in an external location along with the configuration settings gathered above.
* Locate or download the required iso image files.

  Access the VM via **Display** or **Serial Shell** and confirm the installed OS and version.
  Refer to documentation for the installed OS if needed to locate the installed version.

  If the installed image (iso) file is stored on the TrueNAS system or in an external location, note this path and record it along with the other configuration settings.
  If needed, download a fresh image file matching the installed OS and Version

#### Recreating VMs in 25.04

* After upgrading to 25.04, go to **Instances** and click **Select Pool** to open the virtualization **Global Settings** screen.
  Use the **Pool** dropdown to select a pool for virtualization service storage.
  Accept default networking settings or modify as needed, then click **Save**.
* Click **Create New Instance** and recreate previous VM configuration(s).

  Select **VM** for **Virtualization Method** and select or upload the iso file in **Image**.
  Using the configuration settings you recorded before updating, replicate the previous VM configuration.

  Select the existing zvol for the VM as the storage source in **Disks**.
  Click **Create**.

{{< /expand >}}
