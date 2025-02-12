&NewLine;

* TrueNAS is an appliance built from specific Linux packages.
  Attempting to update TrueNAS with `apt` or methods other than the TrueNAS web interface can result in a nonfunctional system.

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

* Application maintenance, including version updates, features, and configuration options, is independent of TrueNAS version release cycles.
  See the [TrueNAS Apps](https://www.truenas.com/docs/truenasapps/) documentation and the [truenas/apps](https://github.com/truenas/apps/issues) repository for more information.
