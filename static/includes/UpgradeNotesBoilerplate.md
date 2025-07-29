&NewLine;

* TrueNAS is an appliance built from specific Linux packages.
  Updating TrueNAS using `apt` or any method other than the TrueNAS web interface can make the system inoperable.

* Modifying the base OS can cause unexpected behavior during upgrades:
  {{< expand "Users who manually installed Docker on TrueNAS 24.04 or earlier can experience TrueNAS Apps failure in 24.10 or later." "v" >}}
  This occurs due to conflicts between the manually installed and native Docker configurations.  
  * Affected systems can encounter `app_lifecycle.compose_action` errors, such as:  
    `'group_add[0]' expected type 'string', got unconvertible type 'int', value: '568'`
  * See [NAS-134660](https://ixsystems.atlassian.net/browse/NAS-134660) for details and a workaround.
  {{< /expand >}}

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in unexpected behavior such as SMB share failures after an upgrade.

  {{< include file="/static/includes/auxiliary-parameters-ssh.md" >}}

* {{< include file="/static/includes/UpgradeClearCache.md" >}}
