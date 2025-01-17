&NewLine;

{{< include file="/static/includes/Incus.md" >}}

{{< hint type=important icon=gdoc_notification title="Manual Migration Required" >}}
Due to configuration incompatibilities between the previous KVM hypervisor implementation (TrueNAS 24.10 and earlier) and Incus in TrueNAS 25.04 (and later), existing VMs do not automatically migrate on upgrade from 24.10.X to 25.04.
However, storage zvols are retained, allowing users to easily recreate previously configured VMs.
{{< /hint >}}

To manually migrate VMs from 24.10 (latest) to 25.04, users should first [prepare to migrate](#preparing-to-migrate-vms-from-2410) by gathering image files and recording existing configuration settings.
After updating to 25.04, use the configuration details gathered above to [recreate VMs](#recreating-vms-in-2504) with the same resource allocations and mount existing storage zvols.

#### Preparing to Migrate VMs from 24.10

1. Edit to record configuration settings
2. Confirm existing zvol location (if created by Truenas should contain the VM name followed by a random six-character string)
3. Locate or download iso image files

#### Recreating VMs in 25.04

