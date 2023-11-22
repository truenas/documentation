&NewLine;

The **Upgrade** button displays on the **Storage Dashboard** for existing pools after an upgrade to a new TrueNAS release includes new [OpenZFS feature flags]({{< relref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up to date with the OpenZFS feature flags available in the installed TrueNAS release.

{{< include file="/_includes/UpgradePools.md" >}}

{{< trueimage src="/images/SCALE/23.10/StorageDashboardUpgradPoolConfirmation.png" alt="Updgrade Pool Dialog" id="Upgrade Pool Dialog" >}}

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not in heavy use.
The upgrade process suspends I/O for a short period, but is nearly instantaneous on a quiet pool.