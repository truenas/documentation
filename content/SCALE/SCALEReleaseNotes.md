---
title: SCALE Angelfish Release Notes
weight: 5
aliases:
  - /releasenotes/
  - /releasenotes/scale/
  - /releasenotes/releaseschedule/
  - /releasenotes/scale/22.02.1/
  - /releasenotes/scale/22.02.0.1/
  - /releasenotes/scale/22.02.0/
  - /releasenotes/scale/22.02-rc.2/
  - /releasenotes/scale/22.02-rc.1-2/
  - /releasenotes/scale/22.02-rc.1-1/
  - /releasenotes/scale/22.02-rc.1/
  - /releasenotes/scale/21.08-beta.2/
  - /releasenotes/scale/21.08-beta.1/
  - /releasenotes/scale/21.06-beta.1/
  - /releasenotes/scale/21.04-alpha.1/
  - /releasenotes/scale/21.02-alpha.1/
  - /releasenotes/scale/20.12-alpha/
  - /releasenotes/scale/20.10-alpha/

---

{{< toc >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

## SCALE Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| SCALE 22.02.1 | Code-freeze | 06 April 2022 |
| SCALE 22.02.1 | Internal Testing Sprints | 11 April > 29 April 2022 |
| SCALE 22.02.1 | Tag | 02 May 2022 |
| SCALE 22.02.1 | Release | 03 May 2022 |
| SCALE 22.02.2 | Code-freeze | 08 June 2022 |
| SCALE 22.02.2 | Internal Testing Sprints | 13 June > 17 June 2022 |
| SCALE 22.02.2 | Tag | 20 June 2022 |
| SCALE 22.02.2 | Release | 21 June 2022 |
| SCALE 22.02.3 | Code-freeze | 03 August 2022 |
| SCALE 22.02.3 | Internal Testing Sprints | 08 August > 19 August 2022 |
| SCALE 22.02.3 | Tag | 22 August 2022 |
| SCALE 22.02.3 | Release | 23 August 2022 |

## Obtaining the Release

To download an <file>.iso</file> file for installing SCALE Angelfish, go to https://www.truenas.com/truenas-scale/ and click **Download**.
Manual update files are also available at this location.

To upgrade an existing SCALE install, log in to your SCALE web interface and go to **System Settings > Update**.

{{< hint warning >}}
SCALE is developed as an appliance that uses specific Linux packages with each release. Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.
{{< /hint >}}

## 22.02.2

**June 21, 2022**

iXsystems is excited to announce the release of TrueNAS SCALE 22.02.2!

### Enclosure Management

As TrueNAS SCALE continues to progress, so has Enclosure view functionality.  With this release, the Enclosure view is available on the following TrueNAS platforms:
* R10
* R20B
* R40
* R50B
* Mini 3.0 X
* Mini 3.0 X+
* Mini 3.0 XL+

Functionality is still improving for these platforms and we are working to add additional platforms in future releases.

### Improvement
<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110523'>NAS-110523</a>] -         When ZFS dedup is enabled on a pool, use SHA512 as the checksum algorithm
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111673'>NAS-111673</a>] -         ZFS debuginfo RPM conversion to DEB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112058'>NAS-112058</a>] -         [ SCALE ] Multiple containers cannot use the same intel GPU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113866'>NAS-113866</a>] -         create trunas-devel metapackage SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114918'>NAS-114918</a>] -         Help dialog under System/Certificates/Add mostly quite useless
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115659'>NAS-115659</a>] -         Set ZFS module parameter spl_panic_halt
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115713'>NAS-115713</a>] -         new api endpoint to be used for recordsize choices for webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115720'>NAS-115720</a>] -         Azure Custom Endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115740'>NAS-115740</a>] -         Azure Custom Endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116049'>NAS-116049</a>] -         cache dmidecode -t0 data in dmidecode plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116053'>NAS-116053</a>] -         cache truenas.get_chassis_hardware results
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116154'>NAS-116154</a>] -         Improve error message when quota cannot be set on user/group
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116203'>NAS-116203</a>] -         TrueNAS Capacity Monitoring via Proactive Support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116248'>NAS-116248</a>] -         Cannot restore a PUSH replication
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116265'>NAS-116265</a>] -         Merge truenas/zfs-2.1-release into stable/angelfish
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116269'>NAS-116269</a>] -         Validate that all groups / users in a proposed ACL can chdir into the path prior to actually setting it
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116387'>NAS-116387</a>] -         Remove unused trueview.stats event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116388'>NAS-116388</a>] -         Allow custom reporting.realtime time
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116475'>NAS-116475</a>] -         better exceptions in py-nvme/py-sgio (get errno) on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116484'>NAS-116484</a>] -         optimize disk.sync_all on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116566'>NAS-116566</a>] -         using glob.glob in disk code on SCALE is painful
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116624'>NAS-116624</a>] -         update scst with upstream
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116637'>NAS-116637</a>] -         Build Core samba vfs modules on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116641'>NAS-116641</a>] -         Merge truenas/zfs-2.1.5-release into stable/angelfish
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114311'>NAS-114311</a>] -         ImageInspectError for all pods in kube-system namespace
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115707'>NAS-115707</a>] -         Expose info about gluster network interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116303'>NAS-116303</a>] -         add r50b nvme rear drive bays mapping support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116304'>NAS-116304</a>] -         add r50 nvme rear drive bays mapping support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116447'>NAS-116447</a>] -         &quot;Proactive support&quot; checkbox for &quot;Alert Settings&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116670'>NAS-116670</a>] -         Branch out for 22.02.2
</li>
</ul>

### Bug

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106532'>NAS-106532</a>] -         M50 and M60 rear nvme drive bay mapping
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112562'>NAS-112562</a>] -         Attempt to add third SSD to mirrored pool fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113532'>NAS-113532</a>] -         Cannot re-import zpool from GUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114143'>NAS-114143</a>] -         Dashboard: Interface names cut off
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114235'>NAS-114235</a>] -         Need better Linux kernel config procedure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114924'>NAS-114924</a>] -         Import CSR errors out on passphrase
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114942'>NAS-114942</a>] -         Rclone fails with Scaleway S3 storage due to incorrect region
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114960'>NAS-114960</a>] -         Long SMART Extended Self Test stuck at 90% for more than 48 hours
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114984'>NAS-114984</a>] -         Core files for the following executables were found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114987'>NAS-114987</a>] -         Can not create pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115025'>NAS-115025</a>] -         UPS Shutdown occurs when Power Off UPS is not set
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115050'>NAS-115050</a>] -         Unhandled exception in dataset size observer
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115094'>NAS-115094</a>] -         Allow /cluster locations to be used for CloudSync Tasks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115102'>NAS-115102</a>] -         SMB stops when changes to the LDAP configuration are made
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115176'>NAS-115176</a>] -         SNMP Monitoring of the pools fail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115306'>NAS-115306</a>] -         NextCloud hits the SQL connection limit
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115334'>NAS-115334</a>] -         CPU widget reporting Hottest CPU wrong when there are 2 CPUs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115394'>NAS-115394</a>] -         Apps : Search field default text gets outside the field when not selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115425'>NAS-115425</a>] -         Rebooting Cluster Node does not restart smbd properly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115426'>NAS-115426</a>] -         Active Directory doesn&#39;t allow saving or warn when NetBIOS name &gt; 15 characters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115435'>NAS-115435</a>] -         Falls off LDAP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115478'>NAS-115478</a>] -         SMB_ASSERT() on failure to get ZFS dataset information
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115541'>NAS-115541</a>] -         adding description to an interface causes unhandled exception
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115544'>NAS-115544</a>] -         adjusting lagg/bond membership excludes existing members 22.02.0.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115578'>NAS-115578</a>] -         Rebooting TrueNAS Scale does not cleanly shut down VMs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115602'>NAS-115602</a>] -         Cannot remove netbios alias when updating AD config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115611'>NAS-115611</a>] -         Server does not boot in degraded state after loosing one boot-pool drive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115616'>NAS-115616</a>] -         CPU usage is wrong
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115628'>NAS-115628</a>] -         Device list in iSCSI Extents is empty 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115633'>NAS-115633</a>] -         Network graph: incorrect legend units
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115639'>NAS-115639</a>] -         scale - zfs recordsize artificially capped at 1M. Should be tunable to 16M
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115663'>NAS-115663</a>] -         in Sharing / SMB / Edit Share ACL, first entry cannot be deleted even if multiple present
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115675'>NAS-115675</a>] -         Dashboard does not provide storage widget for pool named &quot;temp&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115689'>NAS-115689</a>] -         Corrupted zpool may cause smbd service to crash
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115738'>NAS-115738</a>] -         No &quot;overview&quot; information in &quot;Interface&quot; widget in dashboard, Chinese, Germen language are affected.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115770'>NAS-115770</a>] -         Fix `pool.dataset.processes_using_paths` for datasets that have nested zvols
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115783'>NAS-115783</a>] -         Generated dhclient.conf files in BlueFIN nightlies are broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115787'>NAS-115787</a>] -         After configuring LAGG, dashboard UI is broken and apps don&#39;t show
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115796'>NAS-115796</a>] -         [SCALE] UI becomes unresponsive when installing some apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115798'>NAS-115798</a>] -         Nextcloud missing configuration to prevent locks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115802'>NAS-115802</a>] -         TrueNAS Scale doesn&#39;t automatically use new LetsEncrypt certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115812'>NAS-115812</a>] -         When using Kubernetes GUI slows down to a crawl after a few minutes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115833'>NAS-115833</a>] -         VM clone of a clone zvol name length issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115850'>NAS-115850</a>] -         22.12 - Mapping loginShell to /bin/sh enables nologin users to log in
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115854'>NAS-115854</a>] -         Can&#39;t change SMB admin group due to typo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115856'>NAS-115856</a>] -         [CLI] print created API key
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115860'>NAS-115860</a>] -         Failed Upgrade to SCALE 22.02.0.1 - Zpool Wont Import
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115865'>NAS-115865</a>] -         `middleware.block_hooks`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115872'>NAS-115872</a>] -         `zfs send -V` prints a per-second report of how much data has been sent (like `-v` does)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115887'>NAS-115887</a>] -         No System Dataset Option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115902'>NAS-115902</a>] -         [SCALE] Quota critical/warning alert cannot  be 0 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115913'>NAS-115913</a>] -         Secure temporary dir with `generate_ssh_key_pair`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115915'>NAS-115915</a>] -         Reduce the vulnerability to timing attacks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115935'>NAS-115935</a>] -         Fix unit tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115938'>NAS-115938</a>] -         Tryinto replicate ix-systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115942'>NAS-115942</a>] -         Port NAS-115110 to Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115952'>NAS-115952</a>] -         Update samba to 4.15.7
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115954'>NAS-115954</a>] -         GeckoMain filling /var/db/system/cores (Container/App core!?)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115956'>NAS-115956</a>] -         SMBD Core Dump after transfer of huge data volume (time machine backup 800GB)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115964'>NAS-115964</a>] -         Fix integration tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115969'>NAS-115969</a>] -         Permit case-insensitive renames in Samba 4.15
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115975'>NAS-115975</a>] -         Unable to connect to KMIP server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115976'>NAS-115976</a>] -         Add tests for renames over SMB protocol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115977'>NAS-115977</a>] -         Add `ReplicationContext.remove_dataset` so we don&#39;t forget to update …
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115980'>NAS-115980</a>] -         add ctdb.shared.volume.teardown method
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115981'>NAS-115981</a>] -         store cython-generated c files when making builds
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115983'>NAS-115983</a>] -         missing f in f-string
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116017'>NAS-116017</a>] -         Syncthing host paths are not mounted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116029'>NAS-116029</a>] -         smb.sharesec.query returns list index out of range
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116030'>NAS-116030</a>] -         `truenas-devel` package is not available on the apt
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116033'>NAS-116033</a>] -         Fix unlocking readonly datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116063'>NAS-116063</a>] -         optimize system_is_enterprise_ix_hardware calls
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116068'>NAS-116068</a>] -         Pod/Application logs do not display
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116072'>NAS-116072</a>] -         `middlewared.utils.functools.cache`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116074'>NAS-116074</a>] -         Maintain equal `--ignore` option for both flake8 invocations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116082'>NAS-116082</a>] -         Sysctl &quot;Variable&quot; tooltip is outdated
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116092'>NAS-116092</a>] -         System dataset update validation errors are not displayed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116093'>NAS-116093</a>] -         k3s uses system configured proxy for internal/localhost calls
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116094'>NAS-116094</a>] -         [SCALE] UPS Reporting is empty
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116097'>NAS-116097</a>] -         Bettet diagnostics for system dataset umount failures
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116099'>NAS-116099</a>] -         Fix `pool.dataset.processes` returning bogus paths for locked datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116105'>NAS-116105</a>] -         The process asyncio_loop occupies the CPU for a long time
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116108'>NAS-116108</a>] -         crash during session teardown after failure to create recycle bin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116116'>NAS-116116</a>] -         Kubernetes service is not running
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116118'>NAS-116118</a>] -         Include lsblk -f output in Hardware debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116119'>NAS-116119</a>] -         zv exists but no pv/pvc linked impossible to delete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116121'>NAS-116121</a>] -         Apps can&#39;t create PVC and stuck on deploying
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116128'>NAS-116128</a>] -         Include rpc-statd and rpc-gssd status in debug output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116130'>NAS-116130</a>] -         Plex (official) doesn&#39;t start automatically after reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116134'>NAS-116134</a>] -         Device list in iSCSI Extents UX issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116135'>NAS-116135</a>] -         fix changing hostname on standby node on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116140'>NAS-116140</a>] -         iSCSI wizard breaks down when middleware returns errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116157'>NAS-116157</a>] -         Fix system_/dmi.py comparing a list to an int
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116163'>NAS-116163</a>] -         SCALE: multiple machines get the same MAC address for LACP interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116170'>NAS-116170</a>] -         retry git commands on failure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116207'>NAS-116207</a>] -         smbd crash due to SMB_ASSERT() being triggered in vfs_recycle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116208'>NAS-116208</a>] -         i225 FW1.79 support issues in Core and Scale, fixes in Freebsd 14 and Ubuntu 22.05
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116220'>NAS-116220</a>] -         Cannot update dataset options in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116225'>NAS-116225</a>] -         Smart can&#39;t load
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116231'>NAS-116231</a>] -         after Update 22.02.1 My app can not gpu passthrough anymore
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116233'>NAS-116233</a>] -         Fix alternate code path for SMB connection rename in tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116242'>NAS-116242</a>] -         Add initial Windows SD conversion regression tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116244'>NAS-116244</a>] -         Reporting shows null data
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116252'>NAS-116252</a>] -         Blacklist wide links related parameters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116253'>NAS-116253</a>] -         Remove crossrename from vfs objects when recycle enabled (#8967)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116264'>NAS-116264</a>] -         fix NO_VIP check on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116266'>NAS-116266</a>] -         Disable vfs_shadow_copy_zfs if snapdir is visible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116273'>NAS-116273</a>] -         remove nonexistent entry point for middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116279'>NAS-116279</a>] -         Only the first selected dataset obey snapshot retention policy on replication
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116283'>NAS-116283</a>] -         fix pool.is_upgraded_by_name
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116288'>NAS-116288</a>] -         Use /proc/spl/kstat/zfs for quick zpool checks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116289'>NAS-116289</a>] -         [EFAULT] Unable to define domain for cloud: operation failed: domain &#39;xxx is already defined with uuid 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116300'>NAS-116300</a>] -         Long replication output runs off of the screen and can&#39;t be scrolled
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116310'>NAS-116310</a>] -         Remove automatic quota on TM preset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116324'>NAS-116324</a>] -         filesystem.can_access_as_user is broken. May be impacting vm plugin access checks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116326'>NAS-116326</a>] -         Significantly increase maxPods per node
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116346'>NAS-116346</a>] -         Not able to retrieve logs for a successful cloud sync task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116349'>NAS-116349</a>] -         Do not send events for transient jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116350'>NAS-116350</a>] -         `pool.is_upgraded` minor performance improvements and tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116351'>NAS-116351</a>] -         Reporting/rrd loging issues with .zfs snapshot set as visible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116362'>NAS-116362</a>] -         iptables-restore fails do to unquoted comments
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116365'>NAS-116365</a>] -         Exception while calling periodic task (smb.sharesec.synchronize_acls)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116373'>NAS-116373</a>] -         include file type in filesystem.stat output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116379'>NAS-116379</a>] -         kernel bug at startup (ntb_hw_plx)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116424'>NAS-116424</a>] -         Clean up created replication tasks after replication test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116425'>NAS-116425</a>] -         Do not crash `zettarepl_schedule` if `begin` or `end` are not specified
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116433'>NAS-116433</a>] -         device.get_disks() optimizations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116454'>NAS-116454</a>] -         Add mount flags to filesystem.statfs() output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116470'>NAS-116470</a>] -         Ensure disk_choices methods don&#39;t show in-use zvols
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116480'>NAS-116480</a>] -         Fix migrations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116486'>NAS-116486</a>] -         Simplify process of adding NFS SPNs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116490'>NAS-116490</a>] -         Raise validation errors on ZFS ctldir and snapdir
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116496'>NAS-116496</a>] -         Raise validation error on permissions changes to .zfs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116500'>NAS-116500</a>] -         Remove widelinks from list of sample aux params for CI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116518'>NAS-116518</a>] -         Upgrade from Core 12.0-U8.1 to Scale 22.02.1 - NFS &amp; iSCSI Fail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116520'>NAS-116520</a>] -         Allow setting gid 0 on new groups
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116522'>NAS-116522</a>] -         remove sockstat dependency
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116530'>NAS-116530</a>] -         Do not allow port forwarding in ix-chart/minio app with hostnetworking
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116531'>NAS-116531</a>] -         Fix AD debug script
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116532'>NAS-116532</a>] -         Remove FreeBSD debug scripts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116540'>NAS-116540</a>] -         disk.get_unused traceback
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116545'>NAS-116545</a>] -         Add key to SMB share presets to indicate cluster-safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116546'>NAS-116546</a>] -         SCST rotational config option is 0 or 1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116567'>NAS-116567</a>] -         Fix `rmtree_one_filesystem` error reporting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116568'>NAS-116568</a>] -         fix typo causing exorbitant memory usage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116569'>NAS-116569</a>] -         Fix typo in SMB presets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116575'>NAS-116575</a>] -         Expose ZFS dosmodes in filesystem plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116584'>NAS-116584</a>] -         Add initial bunch of returns decorators to DS-related plugins
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116586'>NAS-116586</a>] -         Libvirt guests are not gracefully terminating at shutdown
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116596'>NAS-116596</a>] -         fix AttributeError in disabled_reasons
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116600'>NAS-116600</a>] -         Fix mseries nvme mapping
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116602'>NAS-116602</a>] -         catch proper pyudev exception
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116613'>NAS-116613</a>] -         Fix async path validator
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116630'>NAS-116630</a>] -         fix disk serial detection when SCALE is installed on bhyve
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116631'>NAS-116631</a>] -         `wait_to_hang_and_dump_core` script
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116646'>NAS-116646</a>] -         ctdb teardown method to resync interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116650'>NAS-116650</a>] -         fix NO_VIP check when bond iface is empty
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116651'>NAS-116651</a>] -         Improve error messages for invalid AD accounts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116652'>NAS-116652</a>] -         fix SCALE HA detection on BHYVE VMs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116657'>NAS-116657</a>] -         Fix `EventSource` error handling
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116658'>NAS-116658</a>] -         resolve uid -1 and gid -1 prior to perm_check
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116659'>NAS-116659</a>] -         Fix iSCSI disk tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116660'>NAS-116660</a>] -         Ensure that SMB service stays running after AD stop
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116671'>NAS-116671</a>] -         optimize ctdb.general.healthy
</li>
</ul>




## 22.02.1

{{< expand "22.02.1" >}}
**May 3, 2022**

iXsystems is pleased to announce the release of TrueNAS SCALE 22.02.1! 

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111197'>NAS-111197</a>] -         Document return type(s) of public endpoints of gluster plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113826'>NAS-113826</a>] -         add ability to enable/disable STP on bridge interfaces SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114564'>NAS-114564</a>] -         Increase default number of NFS servers in TrueNAS 13 and SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115010'>NAS-115010</a>] -         Disable the docker-compose binary
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115057'>NAS-115057</a>] -         Provide indication that SED password was set
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115066'>NAS-115066</a>] -         Debug should show if connected to truecommand
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115194'>NAS-115194</a>] -         Update SCALE V5.10 to latest upstream release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115214'>NAS-115214</a>] -         umount FUSE mountpoint before stopping gluster volume
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115244'>NAS-115244</a>] -         optimization in network common_validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115465'>NAS-115465</a>] -         Expose additional flags via acl_flags in NFS4 ACL struct
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115467'>NAS-115467</a>] -         nfs4xdr-acl-tools optimize determination of whether ACL is trivial
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115468'>NAS-115468</a>] -         parallelize the git checkout portion of the scale build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115479'>NAS-115479</a>] -         Get usage stats of docker images being used by ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115618'>NAS-115618</a>] -         Have bullseye backports mirror for angelfish
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115690'>NAS-115690</a>] -         Update Polish Translation (pool)
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104368'>NAS-104368</a>] -         NTB investigation/implementation in Linux
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113617'>NAS-113617</a>] -         Update iconik plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114424'>NAS-114424</a>] -         Add netdata application
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114881'>NAS-114881</a>] -         Remove Disable Hardware Offload checkbox from webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114929'>NAS-114929</a>] -         add truenas/py-nvme to scale-build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115932'>NAS-115932</a>] -         Branch out for 22.02.1
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112105'>NAS-112105</a>] -         Domain name included in hostname twice in DHCP registration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113532'>NAS-113532</a>] -         Cannot re-import zpool from GUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114013'>NAS-114013</a>] -         CLI Menu: memory leak and thread utilization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114315'>NAS-114315</a>] -         No apps starting after unexpected restart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114327'>NAS-114327</a>] -         Add notice-level alert for NTLMv1 auth attempts (maybe daily report)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114336'>NAS-114336</a>] -         No foreign console keyboard map possible 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114435'>NAS-114435</a>] -         Fix `IoThreadPool`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114436'>NAS-114436</a>] -         cannot provide blank domain in networking config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114514'>NAS-114514</a>] -         After removing GPU from system, GPU still shows up in Apps/Chart config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114519'>NAS-114519</a>] -         Kubernetes unusable after adding 2nd network bridge to Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114536'>NAS-114536</a>] -         truecommand.poll_api_for_status jobs can queue up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114547'>NAS-114547</a>] -         Fix aptly local repository not being able to update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114594'>NAS-114594</a>] -         After update to 12.0-U8 S3 fails to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114601'>NAS-114601</a>] -         Push replication issue from TrueNAS to FreeBSD 13.0 offsite server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114620'>NAS-114620</a>] -         Unable to create intermediate CA in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114652'>NAS-114652</a>] -         Support upload max file size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114653'>NAS-114653</a>] -         Show a warning when debug file was too large to upload
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114667'>NAS-114667</a>] -         SCALE Nightlies - Failed to start kubernetes cluster for Applications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114674'>NAS-114674</a>] -         22.02 / allow variables for portal path
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114676'>NAS-114676</a>] -         Dry run action fails in Cloud Sync Task edit mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114689'>NAS-114689</a>] -         Add a $ref for hostPath schema validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114702'>NAS-114702</a>] -         "mail_html" not in sys.module error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114705'>NAS-114705</a>] -         make some ctdb plugins accessible via cli program
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114715'>NAS-114715</a>] -         Update nvidia device plugin tag
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114717'>NAS-114717</a>] -         Dropbox API tokens auto-expire
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114721'>NAS-114721</a>] -         Type-safer job progress defaults
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114722'>NAS-114722</a>] -         Safer reporting of job progress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114723'>NAS-114723</a>] -         TrueNAS SCALE - Missing sdparm command
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114727'>NAS-114727</a>] -         Minio broken by default in recent scale (missing setcap)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114732'>NAS-114732</a>] -         Fix `disk_entry` schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114733'>NAS-114733</a>] -         Fix serial console test when checking enabled serial
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114741'>NAS-114741</a>] -         Have consistent plex friendly name
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114742'>NAS-114742</a>] -         Allow multiple bind ips for NFS server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114751'>NAS-114751</a>] -         TrueNas Scale Cloud Sync Remote folder reset to /
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114753'>NAS-114753</a>] -         Add tests for NFS share parameters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114754'>NAS-114754</a>] -         Incorrect ECC certificate ciphers available
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114760'>NAS-114760</a>] -         Set log level of pyroute.netlink to critical
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114769'>NAS-114769</a>] -         Changing Kerberos Principal from nothing to "---" breaks AD form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114771'>NAS-114771</a>] -         S3 service access key validation error 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114781'>NAS-114781</a>] -         Reporting database used size 1.13 GiB is larger than 1.13 GiB.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114790'>NAS-114790</a>] -         Add regression tests for NFS subtree behavior
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114792'>NAS-114792</a>] -         check=false for track_processes api test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114794'>NAS-114794</a>] -         Replication failed, None Command failed with code 1..
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114795'>NAS-114795</a>] -         Fix behavior for allow_nonroot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114800'>NAS-114800</a>] -         Scale > Cannot create app using PVCs, stuck deplying.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114802'>NAS-114802</a>] -         Scale > Cannot remove zvol without breaking the running system
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114807'>NAS-114807</a>] -         Restart NFS service on configuration update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114808'>NAS-114808</a>] -         fix acltype logic in sysdataset plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114809'>NAS-114809</a>] -         Add test for NFS "allow nonroot"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114811'>NAS-114811</a>] -         Expose "allow_nonroot" in Services > NFS in webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114815'>NAS-114815</a>] -         Add regression tests for NFS server config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114819'>NAS-114819</a>] -         More `can_update` tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114821'>NAS-114821</a>] -         Fix `zettarepl.annotate_snapshots` deadlock
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114825'>NAS-114825</a>] -         Expose ability to query active NFSv3 and NFSv4 clients
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114829'>NAS-114829</a>] -         Add regression tests for endpoints to get NFSv3 and NFSv4 clients
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114833'>NAS-114833</a>] -         Error when disabling Hardware Offloading on physical interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114834'>NAS-114834</a>] -         [SCALE] Apps fail to start after an update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114837'>NAS-114837</a>] -         VLAN with multiple IP address not working from GUI when boot system
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114839'>NAS-114839</a>] -         SCALE missing UPS reporting 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114850'>NAS-114850</a>] -         /etc/default/locale missing in TrueNas Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114853'>NAS-114853</a>] -         The following system core files were found: /usr/bin/udevadm
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114854'>NAS-114854</a>] -         Add regression tests for ACLs over NFS protocol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114860'>NAS-114860</a>] -         fix failover_critical.py alert on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114867'>NAS-114867</a>] -         remove copyright/cleanup failover_disks.py alert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114869'>NAS-114869</a>] -         remove unnecessary SCALE HA alert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114873'>NAS-114873</a>] -         fix failover.py alert on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114874'>NAS-114874</a>] -         fix license alert verbiage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114877'>NAS-114877</a>] -         make sata dom alert run on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114898'>NAS-114898</a>] -         Fix `hold_pending_snapshots` feature allowing for incremental base to…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114899'>NAS-114899</a>] -         Fix unit tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114900'>NAS-114900</a>] -         Allow getting / setting NFS-related debug levels at runtime
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114904'>NAS-114904</a>] -         Improve `zfs.snapshot.query` `{&quot;count&quot;: True}` performance.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114907'>NAS-114907</a>] -         Expand stats collected for nfsd in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114909'>NAS-114909</a>] -         less verbosity of logs in disk.sync
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114910'>NAS-114910</a>] -         Remove contrib/non-free components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114912'>NAS-114912</a>] -         Add regression tests for NFS debug API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114915'>NAS-114915</a>] -         Option to global set SED password missing from Advanced
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114919'>NAS-114919</a>] -         Extend nfsd stats to include threadpool info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114920'>NAS-114920</a>] -         Add private API to get / set NFSD threadpool mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114922'>NAS-114922</a>] -         FusionIO Card (PCI Passthru to underlying VM) Blocks Automatic Update in Web GUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114923'>NAS-114923</a>] -         Add regression tests for get/set threadpool mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114938'>NAS-114938</a>] -         VM&#39;s uuid changes after every (system) reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114945'>NAS-114945</a>] -         Expand warning for shell modifications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114956'>NAS-114956</a>] -         CLI percent downloading and extracting significant digits
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114974'>NAS-114974</a>] -         Cannot Export/Disconnect zpool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114977'>NAS-114977</a>] -         Error: [EFAULT] The uploaded file is not valid: no such table: django_migrations close
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114978'>NAS-114978</a>] -         Default to enabling SA-based xattrs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114980'>NAS-114980</a>] -         Excutable found in /usr/sbin/apache2 alerts annoying
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114986'>NAS-114986</a>] -         Replication fails with: can't compare offset-naive and offset-aware datetimes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115001'>NAS-115001</a>] -         Dataset name with spaces Produces error when creating a new VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115019'>NAS-115019</a>] -         Missing qlogic Firmware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115027'>NAS-115027</a>] -         Local User creation taking over 4-5 minutes to Save
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115037'>NAS-115037</a>] -         Web UI not working after sideloading
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115039'>NAS-115039</a>] -         CTDB is unhealthy due to old nodes still present
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115041'>NAS-115041</a>] -         Upgrading from 22.02-RC.2 to RELEASE failing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115049'>NAS-115049</a>] -         macOS cannot mount NFS shares with default options
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115054'>NAS-115054</a>] -         Cutting from a SMB Share results in error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115058'>NAS-115058</a>] -         Exception disable_offload_capabilities when configuring network interface from CLI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115061'>NAS-115061</a>] -         k3s fails to restart after system reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115069'>NAS-115069</a>] -         Upgrade From CORE 12.0-U8 to SCALE 22.02 RELEASE Fails - freenas-boot/grub Dataset Exists
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115077'>NAS-115077</a>] -         Google Sync Task Dry Run causes permanent task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115080'>NAS-115080</a>] -         SED drives do not work on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115083'>NAS-115083</a>] -         Add link state of interfaces for reporting realtime event source
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115095'>NAS-115095</a>] -         CRITICAL: Web UI HTTPS certificate setup failed.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115101'>NAS-115101</a>] -         NSCD not running
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115104'>NAS-115104</a>] -         iftop no longer available
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115111'>NAS-115111</a>] -         KeyError 'nodePort'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115113'>NAS-115113</a>] -         Fix validation for raw uids / gids in pool.dataset.set_quota
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115119'>NAS-115119</a>] -         Convert SSH etc group to use common render_ctx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115121'>NAS-115121</a>] -         Convert PAM etc group to use a render_ctx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115126'>NAS-115126</a>] -         Avoid pwd and grp lookups in etc file generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115128'>NAS-115128</a>] -         Remove FreeBSD checks from etc plugin in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115130'>NAS-115130</a>] -         Pool created and Working but showing as "N/A" under disk tab
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115133'>NAS-115133</a>] -         Core files for /usr/sbin/proftpd were found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115135'>NAS-115135</a>] -         Improve webdav validation and disable deprecated TLS versions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115137'>NAS-115137</a>] -         use new webdav.cert_choices to determine which certificate options to present users for webdav + https
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115140'>NAS-115140</a>] -         Convert webdav etc group to use render_ctx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115166'>NAS-115166</a>] -         Fix iSCSI extents with whitespace in zvol names
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115171'>NAS-115171</a>] -         Assignment of qcow2 image to a VM fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115185'>NAS-115185</a>] -         SCALE: UPS Reporting Graphs Blank
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115191'>NAS-115191</a>] -         &quot;Network / Global Configuration / Host Name Database&quot; is inconvenient
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115195'>NAS-115195</a>] -         Fix updating `22.02.0` to `CUSTOM`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115196'>NAS-115196</a>] -         Use opener in ssh etc file generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115198'>NAS-115198</a>] -         Reuse fd in etc file generation and run unlink in thread
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115203'>NAS-115203</a>] -         Improve permissions handling in temporary keytab files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115207'>NAS-115207</a>] -         Fix middleware not starting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115211'>NAS-115211</a>] -         Remove legacy LDAP truenas_cacerts.pem file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115215'>NAS-115215</a>] -         Remove pwd and grp lookups from minio etc file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115218'>NAS-115218</a>] -         Avoid writing pool secrets to temp file and use fchmod where possible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115231'>NAS-115231</a>] -         Middleware does not detect when disks are used by a pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115232'>NAS-115232</a>] -         Improve net global
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115237'>NAS-115237</a>] -         Add better handling for NFS hosts that don't resolve
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115240'>NAS-115240</a>] -         Job leak in middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115243'>NAS-115243</a>] -         Dashboard Pool Widget not seeing new pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115246'>NAS-115246</a>] -         GUI form cannot be saved on a fresh install
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115249'>NAS-115249</a>] -         Fix regression in clusterjobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115251'>NAS-115251</a>] -         add junit_family=xunit2
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115256'>NAS-115256</a>] -         Dashboard widget is broken after pool is removed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115258'>NAS-115258</a>] -         Make `network_alias` `alias_address` and `alias_interface_id` NOT NULL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115268'>NAS-115268</a>] -         Fix id used for user-related config file regression tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115272'>NAS-115272</a>] -         Merge migrations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115273'>NAS-115273</a>] -         Employ `flake8-import-order` to ensure correct import orders accordin…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115277'>NAS-115277</a>] -         Fix `replication.list_datasets` crashing when `SSH+NETCAT` transport is used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115284'>NAS-115284</a>] -         Disk Pool not updated after replace
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115291'>NAS-115291</a>] -         unable to unlock encrypted dataset using gui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115294'>NAS-115294</a>] -         lldp was removed so remove from api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115295'>NAS-115295</a>] -         add system.product_type API test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115298'>NAS-115298</a>] -         stop test_022_catalog completely on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115299'>NAS-115299</a>] -         OpenSSL CVE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115300'>NAS-115300</a>] -         fix dissapear typos
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115302'>NAS-115302</a>] -         fix regression in dns.sync
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115309'>NAS-115309</a>] -         No error is shown if update servers cannot be reached
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115310'>NAS-115310</a>] -         simplify and fix test_003_network.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115327'>NAS-115327</a>] -         swagger API execution does not work when redirect to HTTPS is enabled 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115352'>NAS-115352</a>] -         Memory leak in zettarepl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115355'>NAS-115355</a>] -         fix test_400_service.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115356'>NAS-115356</a>] -         Disable root squashing in export config on demand
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115359'>NAS-115359</a>] -         Aborting cloud sync task did not close the progress window
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115367'>NAS-115367</a>] -         fix test_400_enable_disable_services on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115369'>NAS-115369</a>] -         Fix test_003_network.py on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115370'>NAS-115370</a>] -         Allow SYS security for NFSv3
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115374'>NAS-115374</a>] -         [Scale] Cores files found (/opt/bitnami/redis/bin/redis-cli)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115378'>NAS-115378</a>] -         Ensure that rpc-statd service is enabled / started when NFS is started
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115383'>NAS-115383</a>] -         prevent sharenfs parameter from breaking NFS exports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115397'>NAS-115397</a>] -         fix network regression on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115399'>NAS-115399</a>] -         Test NFS bindip separately from NFS server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115405'>NAS-115405</a>] -         `from middlewared.test.integration.assets.pool import pool` to test p…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115408'>NAS-115408</a>] -         Add option to enable shares on pool import
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115411'>NAS-115411</a>] -         Fix test failure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115412'>NAS-115412</a>] -         improve disk.get_dev_size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115414'>NAS-115414</a>] -         better test_disk_get_dev_size tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115415'>NAS-115415</a>] -         No installed apps shown after upgrade to SCALE 22.02.0.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115420'>NAS-115420</a>] -         The dashboard displays "Updates available" when no updates are available.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115426'>NAS-115426</a>] -         Active Directory doesn't allow saving or warn when NetBIOS name > 15 characters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115430'>NAS-115430</a>] -         Root Email Will Not Save - TrueNAS Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115432'>NAS-115432</a>] -         net.inet.tcp.recvbuf_inc was removed in 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115434'>NAS-115434</a>] -         fix test_disk_get_dev_size api test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115439'>NAS-115439</a>] -         [SCALE] Apps do not use the newer cert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115446'>NAS-115446</a>] -         [SCALE] debug file not attached
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115448'>NAS-115448</a>] -         Expand maproot tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115450'>NAS-115450</a>] -         Remove anonuid / anongid if user sets uid 0 / gid 0 as maproot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115456'>NAS-115456</a>] -         Fix logic for ms-account validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115469'>NAS-115469</a>] -         Optimize acl_is_trivial
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115471'>NAS-115471</a>] -         Remove LEGACY HA mode for SMB on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115482'>NAS-115482</a>] -         Don't set posixacl acltype on freenas-boot pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115485'>NAS-115485</a>] -         Certificate authority generates invalid certificates on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115486'>NAS-115486</a>] -         Fix api docs not respecting port properly when redirecting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115496'>NAS-115496</a>] -         Add check that systemdataset pool is valid
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115498'>NAS-115498</a>] -         Fix typo in filesystem.listdir and add optimization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115511'>NAS-115511</a>] -         SMB GUI for Recycle Bin Advising Bad Config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115521'>NAS-115521</a>] -         return stp info in interface.query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115545'>NAS-115545</a>] -         filesystem.setperm isn't properly handling cases where acltype = off
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115552'>NAS-115552</a>] -         sqlite3.IntegrityError UNIQUE constraint failed when signing a csr
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115557'>NAS-115557</a>] -         Upstream avahi master has NULL deref fix, bring into our repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115561'>NAS-115561</a>] -         Provide `sensors -j` output in debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115572'>NAS-115572</a>] -         Remove `/var/log/btmp` and `/var/log/wtmp` from debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115601'>NAS-115601</a>] -         Fix FileExistsError: [Errno 17] File exists: '/var/db/collectd/rrd/localhost > '/var/db/collectd/rrd/test91.test91.nb.ixsystems.com'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115604'>NAS-115604</a>] -         connecting to TC is broken on 13 (potentially stable/master too)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115605'>NAS-115605</a>] -         Fix ValueError crashes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115606'>NAS-115606</a>] -         add rsync to depends in README.md
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115616'>NAS-115616</a>] -         CPU usage is wrong
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115619'>NAS-115619</a>] -         Don't write to same log file during parallel checkout in builder
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115628'>NAS-115628</a>] -         Device list in iSCSI Extents is empty 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115647'>NAS-115647</a>] -         Log branch override
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115678'>NAS-115678</a>] -         fix NameError crash in exports.mako
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115681'>NAS-115681</a>] -         nginx fixes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115688'>NAS-115688</a>] -         Fix `system.info` schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115697'>NAS-115697</a>] -         Alert if the total number of snapshots is too large
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115705'>NAS-115705</a>] -         Update codeowners
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115719'>NAS-115719</a>] -         Fix job state reporting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115752'>NAS-115752</a>] -         set netbios name in cluster api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115766'>NAS-115766</a>] -         Fix NUT user group for 22.02.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115793'>NAS-115793</a>] -         Allow netbiosname changes through AD plugin when clustered
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115801'>NAS-115801</a>] -         Try to persist uids and gids across builds
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115845'>NAS-115845</a>] -         Prevent integration tests to interfere with each other
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115854'>NAS-115854</a>] -         Can't change SMB admin group due to typo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115887'>NAS-115887</a>] -         No System Dataset Option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115935'>NAS-115935</a>] -         Fix unit tests
</li>
</ul>

{{< /expand >}}

## 22.02.0.1

{{< expand "22.02.0.1" >}}
**March 22, 2022**

iXsystems is pleased to announce the release of TrueNAS SCALE 22.02.0.1! This is a small update to [SCALE 22.02.0](https://www.truenas.com/docs/releasenotes/scale/22.02.0/) to address multiple security issues.

### Security Hotpatch

The 22.02.0.1 security hotpatch implements security measures in response to these security vulnerabilities:
+ [CVE-2022-0847](https://security.truenas.com/cves/2022-03-09-cve-2022-0847/)
+ [CVE-2022-0001](https://security.truenas.com/cves/2022-03-11-cve-2022-0001/)
+ [CVE-2022-0002](https://security.truenas.com/cves/2022-03-11-cve-2022-0002/)
+ [CVE-2022-0778](https://security.truenas.com/cves/2022-03-15-cve-2022-0778/)

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115214'>NAS-115214</a>] -         umount FUSE mountpoint before stopping gluster volume
</li>
</ul>
        
### Bug

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115202'>NAS-115202</a>] -         Fix CVE-2022-0847 vulnerability
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115245'>NAS-115245</a>] -         Intel CVE-2022-0001 &amp; CVE-2022-0002
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115299'>NAS-115299</a>] -         OpenSSL CVE
</li>
</ul>

{{< /expand >}}

## 22.02.0

{{< expand "22.02.0" >}}
**February 22, 2022**

iXsystems is pleased to announce the release of TrueNAS SCALE 22.02.0!

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105865'>NAS-105865</a>] -         Display parent dataset name in GUI in the "Add Dataset" form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109278'>NAS-109278</a>] -         Allow specifying properties for ix volumes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109638'>NAS-109638</a>] -         send signals to fenced based on zpool events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110488'>NAS-110488</a>] -         Review allowedCommonJsDependencies
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110533'>NAS-110533</a>] -         Improve experience when reloading page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111045'>NAS-111045</a>] -         SCALE: Want CI for truenas/linux repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111100'>NAS-111100</a>] -         Add bulk alternate datastream modification utility
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111419'>NAS-111419</a>] -         Investigate automatically forcing xattr_fallback=on so it can be off by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111842'>NAS-111842</a>] -         Sync improvements for Data Protection Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111872'>NAS-111872</a>] -         Use toggle slider to control share status
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111964'>NAS-111964</a>] -         Enable fullTemplateTypeCheck
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112096'>NAS-112096</a>] -         Angelfish splash screen
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112767'>NAS-112767</a>] -         Better implementation of IxUserCombobox using IxCombobox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112919'>NAS-112919</a>] -         Refactor JIRA form to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112945'>NAS-112945</a>] -         Add ix-file-upload to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113296'>NAS-113296</a>] -         Add support for expandable rows
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113433'>NAS-113433</a>] -         ignore AttributeError in get_remote_os_version()
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113575'>NAS-113575</a>] -         Refactor NFS service form to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113649'>NAS-113649</a>] -         Investigate running waagent only in azure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113671'>NAS-113671</a>] -         Remove support for showing console on loading indicator
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113679'>NAS-113679</a>] -         Remove unnecessary password checks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113689'>NAS-113689</a>] -         remove osc from pool plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113702'>NAS-113702</a>] -         improve pool.import_pool on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113716'>NAS-113716</a>] -         Host needs to be a dropdown in TFTP service configuration form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113734'>NAS-113734</a>] -         Rename Adjust priority button
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113793'>NAS-113793</a>] -         remove int_pass column from SCALE HA db
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113821'>NAS-113821</a>] -         Refactor LLDP form to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113847'>NAS-113847</a>] -         declutter network plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113855'>NAS-113855</a>] -         add zstd package to SCALE (to unpack core dumps)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113914'>NAS-113914</a>] -         Add Minio to Enterprise Plugin Repository
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113915'>NAS-113915</a>] -         Merge OpenZFS 2.1.2 and a few other commits
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114011'>NAS-114011</a>] -         PlexPass Version of Plex for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114028'>NAS-114028</a>] -         Add an input field for "tls_server_uri" into in S3 configuration form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114043'>NAS-114043</a>] -         Expose TTY into UI for TrueNAS Catalog Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114137'>NAS-114137</a>] -         Add an input field "console_bindport" into in S3 configuration form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114297'>NAS-114297</a>] -         Add link to docs from Update page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114379'>NAS-114379</a>] -         Improve vm.query performance after middleware restart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114448'>NAS-114448</a>] -         Refactor Export/Disconnect dialog into a separate component
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114492'>NAS-114492</a>] -         Merge Linux v5.10.93
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114500'>NAS-114500</a>] -         micro optimization in snmp-agent.py get_Kstat on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114531'>NAS-114531</a>] -         Pull from debian upstream
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114638'>NAS-114638</a>] -         Skip duplicate action runs on TrueNAS/Linux CI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114697'>NAS-114697</a>] -         SCALE update files in build artifacts should be named with version string
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114773'>NAS-114773</a>] -         Make xattr_compat a tunable, zfs_xattr_compat
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105932'>NAS-105932</a>] -         Add a few more ACMD DNS Authenticators
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108574'>NAS-108574</a>] -         Add TLS support for Minio chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108575'>NAS-108575</a>] -         Allow disabling docker image updates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108577'>NAS-108577</a>] -         Take backup of postgres in nextcloud chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108689'>NAS-108689</a>] -         Chart release events on chart release resource changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108691'>NAS-108691</a>] -         Ability to retrieve next unused port in middleware for Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108692'>NAS-108692</a>] -         Ability to retrieve k8s pods logs in middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109470'>NAS-109470</a>] -         Allow setting security privileges in ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111274'>NAS-111274</a>] -         Nextcloud server app not configurable due to volume persistency
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112591'>NAS-112591</a>] -         Alert for large number of snapshots
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112741'>NAS-112741</a>] -         Help Widget for TrueNAS dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113095'>NAS-113095</a>] -         Machinaris Chart v0.6.x (new arch requires multiple containers)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113455'>NAS-113455</a>] -         Please document how our systemd preset works
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113675'>NAS-113675</a>] -         Allow dashboard widgets to be reordered
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113759'>NAS-113759</a>] -         New FTP option: timeout_notransfer
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114241'>NAS-114241</a>] -         Replication configuration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114454'>NAS-114454</a>] -         Add unit/api tests for crypto plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114619'>NAS-114619</a>] -         Branch out build for 22.02
</li>
</ul>

### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108382'>NAS-108382</a>] -         Mount locally joined Gluster Volumes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109636'>NAS-109636</a>] -         Add ability to make fenced reserve disks based off detected zpool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111870'>NAS-111870</a>] -         Additional middleware changes to support Democratic CSI use of native API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111907'>NAS-111907</a>] -         bugclerk visibility into OS Services repos
</li>
</ul>

### Bug Fixes

<<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108202'>NAS-108202</a>] -         bad signature because OCSP stapling not activated in the nginx config file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108333'>NAS-108333</a>] -         create ctdb plugin for gluster smb integration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108334'>NAS-108334</a>] -         create gluster shared volume for ctdb recovery db
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108939'>NAS-108939</a>] -         Dashboard Memory legend changes colour
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109118'>NAS-109118</a>] -         Use library chart for official catalog items
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109138'>NAS-109138</a>] -         fix up ctdb.shared.volume and gluster.volume/peer CRUD APIs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109194'>NAS-109194</a>] -         handles k3s and VMs on SCALE HA appropriately
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109206'>NAS-109206</a>] -         add interface validation in ctdb.public.ip.create
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109304'>NAS-109304</a>] -         zfs.dataset.create set xattr=sa by default like pool.dataset.create
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109322'>NAS-109322</a>] -         typo in reset_keys() in fenced on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109325'>NAS-109325</a>] -         fix check_path_resides_within_volume wrt to gluster paths
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109451'>NAS-109451</a>] -         fix ctdb.general.ips
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109456'>NAS-109456</a>] -         deprecate internal uses of system.is_freenas
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109491'>NAS-109491</a>] -         cache if a system is licensed for HA (failover.licensed)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109497'>NAS-109497</a>] -         change cluster_events API to mount all gluster volumes based on events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109498'>NAS-109498</a>] -         add gluster FUSE api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109597'>NAS-109597</a>] -         FailoverService HA_MODE/HA_LICENSED not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109599'>NAS-109599</a>] -         traceback in jail_freebsd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109602'>NAS-109602</a>] -         traceback in libvirt event_loop_connection
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109617'>NAS-109617</a>] -         improvements to gluster.peer.status API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110853'>NAS-110853</a>] -         Export keys from dataset does not render json output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111581'>NAS-111581</a>] -         Upstream xattr compat
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111680'>NAS-111680</a>] -         Support form will not work correctly if user is required to enter captcha
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111800'>NAS-111800</a>] -         Replication failed: cannot receive resume stream:  space quota exceeded.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111810'>NAS-111810</a>] -         Fixes #116 by swapping MINIO_ACCESS_KEY and MINIO_SECRET_KEY
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111814'>NAS-111814</a>] -         Do not report coredumps generated by apps in containers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111851'>NAS-111851</a>] -         TrueNAS Scale Manual Page URLs are incorrect and/or out-of-date
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111858'>NAS-111858</a>] -         TrueNAS-12.0-U4.1 alert email set for 'warning' and 'immediately' but for failed SSH logins is sending the alert daily (at midnight)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111989'>NAS-111989</a>] -         loading the dashboard calls to our update servers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111998'>NAS-111998</a>] -         CLI: network interface setup is very non-intuitive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112122'>NAS-112122</a>] -         Cloud sync task ignores configured subfolder
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112189'>NAS-112189</a>] -         No Scrollbar For Selecting SSL Certs For K8S Ingress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112307'>NAS-112307</a>] -         CPU Reports in Dashboard broken, when using a proxy host
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112334'>NAS-112334</a>] -         Applications add route - default route - truenas scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112371'>NAS-112371</a>] -         Misleading and ambiguous description for creating a new pool with encryption
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112667'>NAS-112667</a>] -         Core was generated by python3.9: middlewared (zettarepl)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112912'>NAS-112912</a>] -         Lost WebUI and SSH access on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113041'>NAS-113041</a>] -         FTP Timeout not honoured
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113212'>NAS-113212</a>] -         System freezing/not restarting after kernel bugs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113277'>NAS-113277</a>] -         SCALE reproducible virtualization system crash / boot loop
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113314'>NAS-113314</a>] -         CPU Usage Reports Incorrectly in GUI on Dual Socket EPYC System
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113406'>NAS-113406</a>] -         Truenas scale - info messages show that it is based on Freebsd.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113441'>NAS-113441</a>] -         Replication with dedicated user broken TrueNAS Core -> TrueNAS Scale /usr/sbin is not in PATH
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113453'>NAS-113453</a>] -         system continually does an orderly shutdown if browser tab is left open
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113490'>NAS-113490</a>] -         [SCALE] Downloading certificates is not working correctly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113492'>NAS-113492</a>] -         Plugin install impossible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113494'>NAS-113494</a>] -         Disk wipe very slow on some disks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113520'>NAS-113520</a>] -         Core files for the following executables were found: smartctl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113527'>NAS-113527</a>] -         TFTP failed to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113560'>NAS-113560</a>] -         Changing tab in the job list do not update the table.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113564'>NAS-113564</a>] -         Installer doesn't UEFI boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113568'>NAS-113568</a>] -         Network UPS Tools missing SNMP driver
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113570'>NAS-113570</a>] -         SCALE - swap partiton on boot-pool is newer used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113583'>NAS-113583</a>] -         Unable to expand pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113588'>NAS-113588</a>] -         Password is NOT a required FTP credential field
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113590'>NAS-113590</a>] -         It&#39;s unclear how to edit a cloud sync task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113609'>NAS-113609</a>] -         M60 has traceback alerts for "SATADOMWear" but system doesn&#39;t have SATADOMs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113615'>NAS-113615</a>] -         Add implmentation of configuring immutable flag via ioctl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113630'>NAS-113630</a>] -         Kubernetes will not start on fresh install
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113641'>NAS-113641</a>] -         Bind IP address ignored when clicking 'Display' button
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113642'>NAS-113642</a>] -         TrueNAS Scale UPS  service fails to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113651'>NAS-113651</a>] -         Fix credential button doesn't do anything
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113652'>NAS-113652</a>] -         Container_images error when opening an app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113664'>NAS-113664</a>] -         Add required parameters for fsrvp in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113682'>NAS-113682</a>] -         Update common library
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113687'>NAS-113687</a>] -         Document Boot CD and Python packages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113700'>NAS-113700</a>] -         Apps are not working, chart jobs never complete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113706'>NAS-113706</a>] -         Cloud Sync Tasks: null credentials is not allowed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113708'>NAS-113708</a>] -         Fix autocomplete on search field
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113709'>NAS-113709</a>] -         TrueNAS logo do not fit the box on Reboot page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113720'>NAS-113720</a>] -         SMB Service is not listed alphabetically
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113727'>NAS-113727</a>] -         Web gui unresponsive after a few days
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113733'>NAS-113733</a>] -         Properly report if vm device fails to delete in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113740'>NAS-113740</a>] -         mail.send task fails.  Cannot find offending email address
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113753'>NAS-113753</a>] -         Fix nested `Dict` validation error attribute name
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113754'>NAS-113754</a>] -         Remove unnecessary usage of parametrize in filesystem api test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113756'>NAS-113756</a>] -         Fix form-chip
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113757'>NAS-113757</a>] -         LetsEncrypt Certificate not showing in Application Charts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113758'>NAS-113758</a>] -         Bug fix for encryption summary of dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113760'>NAS-113760</a>] -         Export keys from dataset does not render json output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113772'>NAS-113772</a>] -         Virtualization: SPICE doesn't support display resize due to missing agent support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113781'>NAS-113781</a>] -         TrueNAS Scale - iftop is taking huge CPU load 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113785'>NAS-113785</a>] -         SCALE NIGHTLY: Cannot create debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113789'>NAS-113789</a>] -         Allow enabling multichannel SMB through API validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113790'>NAS-113790</a>] -         &quot;Mixing disks of different sizes in a vdev is not allowed.&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113791'>NAS-113791</a>] -         Allow empty fromemail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113798'>NAS-113798</a>] -         Fix machinaris configs update + Add additional env variables (base for workers setup) 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113811'>NAS-113811</a>] -         TrueNAS can offer to use HDDs of one zpool in creating another!
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113812'>NAS-113812</a>] -         NFS large file transfers never finish with sec=krb5p or krb5i
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113816'>NAS-113816</a>] -         Fix wsdd configuration generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113817'>NAS-113817</a>] -         Errors in EntityJobComponent cannot be closed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113838'>NAS-113838</a>] -         Cloud sync dry run websocket performance improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113848'>NAS-113848</a>] -         VMs cannot start with ISO attached
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113853'>NAS-113853</a>] -         VDEV Removal Error - Failed to wipe disks: 2) sdi: [ESERVICESTARTFAILURE] The smartd service failed to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113856'>NAS-113856</a>] -         SQLAlchemy 1.4 does not use `default=` when adding a column through alembic
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113861'>NAS-113861</a>] -         SQLAlchemy 1.4 compatibility
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113867'>NAS-113867</a>] -         Unit tests should not be making real network requests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113890'>NAS-113890</a>] -         Fix KeyError: 'naming-schema'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113892'>NAS-113892</a>] -         GUI nvme manual smart test ValidationErrors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113903'>NAS-113903</a>] -         Input type="number" validation in Firefox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113907'>NAS-113907</a>] -         Build with Ganesha v4.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113912'>NAS-113912</a>] -         Buttons has different fonts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113918'>NAS-113918</a>] -         TrueNAS Scale Upgrade Installation Fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113921'>NAS-113921</a>] -         Optionally expand get_user_obj output to include grouplist
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113937'>NAS-113937</a>] -         Improve executing commands with a user context implementation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113943'>NAS-113943</a>] -         [SCALE RC2] WebUI Prevents Loading in I-frame
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113953'>NAS-113953</a>] -         When locale is not "English (en)" reports other than CPU cannot be accessed, as they redirect to the dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113961'>NAS-113961</a>] -         Database used size 1.07 GiB is larger than 1.01 GiB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113967'>NAS-113967</a>] -         Update TrueNAS  failed 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113970'>NAS-113970</a>] -         Disk report specific dropdowns don&#39;t show content
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113987'>NAS-113987</a>] -         "Installed Applications" Screen Takes Longer to Load
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113995'>NAS-113995</a>] -         Failing to create a ticket with large debug file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113999'>NAS-113999</a>] -         Apps create directories on path of locked dataset, preventing it from mounting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114005'>NAS-114005</a>] -         VM with PCI-Passthrough won't boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114012'>NAS-114012</a>] -         Core to Scale upgrade, very minor networking bug (DHCP)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114013'>NAS-114013</a>] -         CLI Menu: memory leak and thread utilization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114015'>NAS-114015</a>] -         Export/Disconnect fails: PoolDataset does not exist
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114020'>NAS-114020</a>] -         Despite NAS-110600 being marked as resolved, the same bug continues to prevent me from disconnecting two outdated pools.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114022'>NAS-114022</a>] -         [SCALE] WebUI keeps &quot;Unlocking Datasets&quot; even though It&#39;s already done
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114024'>NAS-114024</a>] -         Properly validate empty/malformed chart/questions yaml files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114025'>NAS-114025</a>] -         Disable apt by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114026'>NAS-114026</a>] -         VM delete fails due to non existing PCI device
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114029'>NAS-114029</a>] -         Print full name of the plugin being initialized
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114031'>NAS-114031</a>] -         Nextcloud update never ends
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114032'>NAS-114032</a>] -         Entity empty should be centered
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114034'>NAS-114034</a>] -         Installing Nextcloud as a plugin leads to php error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114045'>NAS-114045</a>] -         Truenas Scale PCIe Passthru issue - Raid card not visible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114047'>NAS-114047</a>] -         core file found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114058'>NAS-114058</a>] -         Duplicate drives in pool creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114074'>NAS-114074</a>] -         Hostname Database regression in SCALE 22.02-RC.2
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114076'>NAS-114076</a>] -         Pool shows up as unhealthy when replacing drive in pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114084'>NAS-114084</a>] -         ZFS metadata corruption - Pool state green in dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114087'>NAS-114087</a>] -         VM - RAW file type broken/unable to run VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114088'>NAS-114088</a>] -         Cloud Sync Tasks - WebUI broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114092'>NAS-114092</a>] -         Delete dataset with childs - lsof at 100%
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114113'>NAS-114113</a>] -         Memory leak in zettarepl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114116'>NAS-114116</a>] -         Make minio console port configurable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114122'>NAS-114122</a>] -         SCALE Nightlies - Upgrade Apps Screen is Still Slow to Load
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114130'>NAS-114130</a>] -         Correctly recognize wg/macvtap interfaces as cloned interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114135'>NAS-114135</a>] -         Correctly raise assertion error in api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114144'>NAS-114144</a>] -         No login shell for SSH after upgrade for user root
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114146'>NAS-114146</a>] -         &quot;Create Pool&quot; dialog improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114149'>NAS-114149</a>] -         Impossible to install SCALE on SSD &quot;size partition table entries is 0 bytes&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114159'>NAS-114159</a>] -         Fix building docs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114170'>NAS-114170</a>] -         Properly check catalog dataset is locked
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114171'>NAS-114171</a>] -         Scale and Core: "Serial Shell" French translation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114176'>NAS-114176</a>] -         Cloud Sync Fail with snapshots enabled and existing Zvol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114187'>NAS-114187</a>] -         Add allow interfaces directive to avahi config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114189'>NAS-114189</a>] -         Fix a few schema errors discovered when performing integration tests …
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114207'>NAS-114207</a>] -         Ability to mount extras in read-only mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114208'>NAS-114208</a>] -         Kubernetes/Docker Environment Variable With Value of "y" Becomes "true"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114212'>NAS-114212</a>] -         Reportsdashboard doesn't work
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114214'>NAS-114214</a>] -         Deleting a dataset causes the deletion of a replication task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114215'>NAS-114215</a>] -         [SCALE] Disk Report not showing the correct drives in a pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114223'>NAS-114223</a>] -         Do not take snapshot of docker dataset when making a backup of apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114224'>NAS-114224</a>] -         APPS: Fix Launch Docker Image and Settings dropdown
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114226'>NAS-114226</a>] -         Do not enable waagent automatically
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114228'>NAS-114228</a>] -         zettarepl.create_recursive_snapshot_with_exclude
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114248'>NAS-114248</a>] -         Selectively handle auth header in docker client
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114279'>NAS-114279</a>] -         Reduce pyroute logs footprint in middleware logs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114280'>NAS-114280</a>] -         Set certain sysctl(s) to configure system behavior appropriately
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114302'>NAS-114302</a>] -         Only log once that no enclosures were found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114306'>NAS-114306</a>] -         Delete app while smb share open through windows
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114338'>NAS-114338</a>] -         Warning not showing up for isolating Passthrough devices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114347'>NAS-114347</a>] -         Virtual Machines list don't update when starting or stopping a VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114353'>NAS-114353</a>] -         Do not run `disk.sync_all` on zvol creation/deletion
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114356'>NAS-114356</a>] -         Make sure we close opened snapshot handle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114358'>NAS-114358</a>] -         Wrong timezone in various timestamps throughout the UI + CLI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114359'>NAS-114359</a>] -         Provide `exclude_mountpoint_property` for `replication.run_onetime` f…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114360'>NAS-114360</a>] -         Correctly retrieve bus attribute for disk
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114375'>NAS-114375</a>] -         Static routes are not added after reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114378'>NAS-114378</a>] -         Investigate always adding a no-execute taint on kubernetes on start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114381'>NAS-114381</a>] -         Increate acme.client logging level
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114391'>NAS-114391</a>] -         randomly erorrs during replication: "Timeout in head()"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114393'>NAS-114393</a>] -         App Catalog Sync is Too Slow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114394'>NAS-114394</a>] -         Unable to update gui https cert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114404'>NAS-114404</a>] -         Move crypto plugin to separate service parts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114405'>NAS-114405</a>] -         [SCALE] Dataloss: PVC's getting destroyed when backup is restored
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114410'>NAS-114410</a>] -         Custom cron job modal is cut off on smaller screens
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114417'>NAS-114417</a>] -         Do not modify original create properties dict
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114420'>NAS-114420</a>] -         Cloud Sync Task UI does not keep Directory/Files checkbox checked
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114428'>NAS-114428</a>] -         Validation Error Traceback from unsetting Include Dataset Properties
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114431'>NAS-114431</a>] -         VM performance improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114435'>NAS-114435</a>] -         Fix `IoThreadPool`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114444'>NAS-114444</a>] -         Add Shibgreen support for Machinaris
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114481'>NAS-114481</a>] -         Fix xattr compat fallback handling on Linux
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114501'>NAS-114501</a>] -         services/nfs - convert to kernel NFS server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114503'>NAS-114503</a>] -         Free memory for snapshot mountpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114506'>NAS-114506</a>] -         Can not delete a virtual machine with not present GPU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114513'>NAS-114513</a>] -         Fix 13.0 freenas/webui in nightlies build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114519'>NAS-114519</a>] -         Kubernetes unusable after adding 2nd network bridge to Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114529'>NAS-114529</a>] -         Fix memory leak in py-libzfs iterators
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114533'>NAS-114533</a>] -         Replication no longer works on nightly build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114541'>NAS-114541</a>] -         NFS Path with "spaces" never shows up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114546'>NAS-114546</a>] -         Some tables in the UI have left aligned empty and loading states
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114555'>NAS-114555</a>] -         Ensure that zpool handles are freed in iterator
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114567'>NAS-114567</a>] -         Remove py-bonjour dependency
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114569'>NAS-114569</a>] -         Remove unused packages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114573'>NAS-114573</a>] -         fix process pool deadlock
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114581'>NAS-114581</a>] -         fix exorbitant middlewared service memory usage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114594'>NAS-114594</a>] -         After update to 12.0-U8 S3 fails to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114596'>NAS-114596</a>] -         Eliminate extra call to cache.get for SMB_HA_MODE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114601'>NAS-114601</a>] -         Push replication issue from TrueNAS to FreeBSD 13.0 offsite server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114620'>NAS-114620</a>] -         Unable to create intermediate CA in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114622'>NAS-114622</a>] -         Fix UI verbiage to say CSR's when importing certs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114623'>NAS-114623</a>] -         fix get_smartd_schedule_pieces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114632'>NAS-114632</a>] -         Fix websocket regression
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114635'>NAS-114635</a>] -         Fix `Unable to downgrade from 22.02-MASTER-20211206-192929 to 22.02-C…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114655'>NAS-114655</a>] -         nfsv4 acltype doesn't work for NFS 4 clients
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114667'>NAS-114667</a>] -         SCALE Nightlies - Failed to start kubernetes cluster for Applications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114689'>NAS-114689</a>] -         Add a $ref for hostPath schema validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114702'>NAS-114702</a>] -         "mail_html" not in sys.module error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114704'>NAS-114704</a>] -         [SCALE] nfs service not startable. (/etc/exports not being generated at least) 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114710'>NAS-114710</a>] -         Error: Unable to downgrade from 22.02-MASTER-20220207-112927 to 22.02.1-MASTER-20220208-034252
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114721'>NAS-114721</a>] -         Type-safer job progress defaults
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114722'>NAS-114722</a>] -         Safer reporting of job progress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114723'>NAS-114723</a>] -         TrueNAS SCALE - Missing sdparm command
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114732'>NAS-114732</a>] -         Fix `disk_entry` schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114733'>NAS-114733</a>] -         Fix serial console test when checking enabled serial
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114734'>NAS-114734</a>] -         Fix ACL checks for NFS kernel server
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114784'>NAS-114784</a>] -         Disable subtree checking if NFS export is a mountpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114795'>NAS-114795</a>] -         Fix behavior for allow_nonroot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114807'>NAS-114807</a>] -         Restart NFS service on configuration update
</li>
</ul>

{{< /expand >}}

## 22.02-RC.2

{{< expand "22.02-RC.2" >}}

**December 22, 2021**

iXsystems is pleased to announce the release of TrueNAS SCALE 22.02-RC.2!

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110081'>NAS-110081</a>] -         Investigate/fix Sentry integration for webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112309'>NAS-112309</a>] -         Make an example of user combobox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112525'>NAS-112525</a>] -         Standartize IP validation 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112555'>NAS-112555</a>] -         Add ChangeDetection.OnPush to new ix-form components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112556'>NAS-112556</a>] -         Solve input text formatting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112571'>NAS-112571</a>] -         Add tooltips to explain dataset lock icons
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112586'>NAS-112586</a>] -         Add test harnesses to new ix-form components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112617'>NAS-112617</a>] -         Implement new form checkbox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112655'>NAS-112655</a>] -         Move inline styles to associated files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112660'>NAS-112660</a>] -         Update apt mirrors preparing for next Angelfish RC
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112663'>NAS-112663</a>] -         Add titles to pages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112689'>NAS-112689</a>] -         Improve i18n support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112713'>NAS-112713</a>] -         Replace T-marker with translate.instant
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112724'>NAS-112724</a>] -         Network Metrics: Octets != MB/s
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112739'>NAS-112739</a>] -         Enable prefer-as-const
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112769'>NAS-112769</a>] -         Add tests to localization form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112770'>NAS-112770</a>] -         Refactor any simple form to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112771'>NAS-112771</a>] -         Refactor any simple form to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112772'>NAS-112772</a>] -         Refactor any simple form to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112777'>NAS-112777</a>] -         Add &quot;multiple&quot; support for ix-select 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112781'>NAS-112781</a>] -         Create pools with atime disabled by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112793'>NAS-112793</a>] -         W42 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112803'>NAS-112803</a>] -         cleanup unused failover code on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112804'>NAS-112804</a>] -         create new failover endpoint for triggering failover event on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112818'>NAS-112818</a>] -         When GMail mail is configured, hide &quot;fromemail&quot; and &quot;fromname&quot; fields from UI and send them as empty strings
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112821'>NAS-112821</a>] -         clean up interface/configure.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112848'>NAS-112848</a>] -         Refactor NTP form on System Settings to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112851'>NAS-112851</a>] -         The &quot;Unlock Children&quot; box unchecked doesn&#39;t indicate that inherited child datasets will be unlocked as well
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112880'>NAS-112880</a>] -         Refactor SysctlFormComponent
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112889'>NAS-112889</a>] -         W42 - Type safety improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112896'>NAS-112896</a>] -         Enable no-nested-ternary linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112901'>NAS-112901</a>] -         Redesign error handling in ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112908'>NAS-112908</a>] -         Show job arguments in webui task manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112914'>NAS-112914</a>] -         Remove unused theme editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112925'>NAS-112925</a>] -         Refactor remaining bootenv forms to ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112938'>NAS-112938</a>] -         Refactor ssh key pair form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112949'>NAS-112949</a>] -         Standartize progress indication in new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112968'>NAS-112968</a>] -         capture stderr on ssh_test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112969'>NAS-112969</a>] -         Display human-readable values on Network widget charts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112987'>NAS-112987</a>] -         Add app metadata for helm subcharts in app operations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112989'>NAS-112989</a>] -         W43 - Type safety improvement
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112990'>NAS-112990</a>] -         use filterable_returns in dns.query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113023'>NAS-113023</a>] -         Refactor Console and Static Route forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113027'>NAS-113027</a>] -         Refactor Isolated GPU PCI Ids form to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113037'>NAS-113037</a>] -         Refactor some of Kerberos forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113050'>NAS-113050</a>] -         Enable implicit-arrow-linebreak and other rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113061'>NAS-113061</a>] -         change cluster API tests to use new cluster IPs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113062'>NAS-113062</a>] -         update ixsystems/releng to use new cluster ip env vars
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113069'>NAS-113069</a>] -         add ldap/ad env vars to cluster tests pipeline
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113104'>NAS-113104</a>] -         remove multipath related api calls from webUI on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113116'>NAS-113116</a>] -         Refactor ServiceWebdavComponent to use new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113117'>NAS-113117</a>] -         Refactor SyslogFormComponent to use new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113130'>NAS-113130</a>] -         Add endpoint to retrieve valid choices for syslog tls certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113152'>NAS-113152</a>] -         Refactor Add Init/Shutdown Script form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113184'>NAS-113184</a>] -         Refactor BootEnvReplaceForm and BootEnvAttachForm to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113186'>NAS-113186</a>] -         Switch from debug builds to production builds of ZFS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113204'>NAS-113204</a>] -         Refactor SMART service form to ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113205'>NAS-113205</a>] -         Refactor SystemDatasetPool to new forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113217'>NAS-113217</a>] -         Refactor resilver config form to new forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113219'>NAS-113219</a>] -         Enclosure UI should provide more disk details like disk model
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113267'>NAS-113267</a>] -         Refactor Catalog and Pull Image forms to new ix-forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113286'>NAS-113286</a>] -         flag primary interface on active-backup bonds
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113289'>NAS-113289</a>] -         webui to preserve order for bond members
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113294'>NAS-113294</a>] -         Build an example of basic ix-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113298'>NAS-113298</a>] -         Add examples and utilities to test pages using ix-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113299'>NAS-113299</a>] -         Enable linter rule to force camelCase for local variables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113319'>NAS-113319</a>] -         Enable strict templates in Angular
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113322'>NAS-113322</a>] -         Allow closing slide-in forms with Escape key
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113363'>NAS-113363</a>] -         Enforce camelCase on function params
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113377'>NAS-113377</a>] -         Refactor Rsync form to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113378'>NAS-113378</a>] -         Refactor license form to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113379'>NAS-113379</a>] -         Refactor S3 settings form to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113382'>NAS-113382</a>] -         up the gluster.localevents.send timeout parameter
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113390'>NAS-113390</a>] -         Refactor service ssh form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113421'>NAS-113421</a>] -         Enforce proper naming convention of class members
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113430'>NAS-113430</a>] -         W47: Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113451'>NAS-113451</a>] -         Refactor Dashboard Configuration to use new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113467'>NAS-113467</a>] -         Refactor ServiceDDNSComponent component to new ix forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113493'>NAS-113493</a>] -         Add unit tests for Services table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113569'>NAS-113569</a>] -         Merge Linux v5.10.81
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113604'>NAS-113604</a>] -         Keep sidenav state in user preferences
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113606'>NAS-113606</a>] -         improve fenced logging SCALE HA
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111019'>NAS-111019</a>] -         Allow disabling builtin load balancer in k8s
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111274'>NAS-111274</a>] -         Nextcloud server app not configurable due to volume persistency
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112132'>NAS-112132</a>] -         Support: Use OAuth flow instead of username/password
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112168'>NAS-112168</a>] -         Add collabora official application
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112754'>NAS-112754</a>] -         Improve process of updating apt mirrors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112865'>NAS-112865</a>] -         Please add custom mount point to host data access for minio app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112936'>NAS-112936</a>] -         Mirror debian-debug repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113095'>NAS-113095</a>] -         Machinaris Chart v0.6.x (new arch requires multiple containers)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113125'>NAS-113125</a>] -         Should we display WAITING jobs in Task manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113153'>NAS-113153</a>] -         Allow setting capabilities for workloads deployed with ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113455'>NAS-113455</a>] -         Please document how our systemd preset works
</li>
</ul>

### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-103664'>NAS-103664</a>] -         Add support for NFSv4.X ACLs on Linux
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111888'>NAS-111888</a>] -         Clustered SMB: Initial Delivery Requirements
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111694'>NAS-111694</a>] -         Dataset keyfile upload not working, manually entered key works
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111863'>NAS-111863</a>] -         IPMI Identify is not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112060'>NAS-112060</a>] -         [ SCALE ] Rollback should use dropdown instead of textfield
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112102'>NAS-112102</a>] -         Can&#39;t Upgrade TrueNAS Core 12.0-U3 to TrueNAS Scale 21.08
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112122'>NAS-112122</a>] -         Cloud sync task ignores configured subfolder
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112238'>NAS-112238</a>] -         Application events order changes order on every button or mouse click
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112347'>NAS-112347</a>] -         TrueNAS Scale Quote Exceeded on Dataset - Daily
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112351'>NAS-112351</a>] -         Error: &quot;Disk 10336936891386576613 is FAULTED&quot; - What is 10336936891386576613?
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112427'>NAS-112427</a>] -         ACL view in &quot;Storage&quot; shows &quot;-&quot; instead of the group
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112430'>NAS-112430</a>] -         core dump after migrating from TrueNAS Core 12.0-U5 to TrueNAS SCALE Beta 21.08
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112481'>NAS-112481</a>] -         Booting on a network without a DHCP server results in a funky console.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112490'>NAS-112490</a>] -         Failed to access Homes Directory for Domain Users
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112543'>NAS-112543</a>] -         Freenas_default expired
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112569'>NAS-112569</a>] -         pbkdf2iters value is not correctly shown
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112594'>NAS-112594</a>] -         R40: first enclosure element is unclickable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112629'>NAS-112629</a>] -         TrueNAS SCALE Enterprise login window says &quot;TrueNAS SCALE_ENTERPRISE ® © 2021&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112633'>NAS-112633</a>] -         Fix colors for Directory Services Monitor popup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112643'>NAS-112643</a>] -         Fix job width on Task Manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112645'>NAS-112645</a>] -         Unable to Startup Windows VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112666'>NAS-112666</a>] -         WebUI was all blank except the menu on the left
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112676'>NAS-112676</a>] -         Add initial cluster tests for sharing.smb
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112682'>NAS-112682</a>] -         Add basic filesystem API tests for clustered filesytem
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112684'>NAS-112684</a>] -         Fix empty state on entity table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112700'>NAS-112700</a>] -         Fix regex for branchout in scale build repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112706'>NAS-112706</a>] -         Columns &quot;Frequency&quot; and &quot;Next Run&quot; in &quot;Rsync Tasks&quot; list wrong values
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112743'>NAS-112743</a>] -         reporting broken after changing system dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112751'>NAS-112751</a>] -         Add initial clustered activedirectory tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112752'>NAS-112752</a>] -         NVIDIA Tesla P4 not recognized by K3S
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112760'>NAS-112760</a>] -         Correctly specify nightlies version
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112761'>NAS-112761</a>] -         FTP fails to start when Enable TLS is checked
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112765'>NAS-112765</a>] -         Apply Pending Updates prompt is shown twice when configuration is saved
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112766'>NAS-112766</a>] -         Add last 1000 lines of k3s logs to debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112768'>NAS-112768</a>] -         middleware cannot parse UPS driver list correctly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112773'>NAS-112773</a>] -         azurelinuxagent tries to run and fails on local Hyper-V VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112780'>NAS-112780</a>] -         Migration from CORE to SCALE results in a corrupted install of SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112783'>NAS-112783</a>] -         [ix-input] the clear button invisible on form init 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112788'>NAS-112788</a>] -         Split AD service into parts and add DNS client plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112797'>NAS-112797</a>] -         storage widget is capitalizing zpool names
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112798'>NAS-112798</a>] -         standby controller widget on dashboard doesnt work
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112814'>NAS-112814</a>] -         The &quot;From Name&quot; isn&#39;t used in an email sent that was configured in Alerts -&gt; Email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112823'>NAS-112823</a>] -         shutdown -r now races and breaks scale HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112835'>NAS-112835</a>] -         Attach Debug fails with: Error: [EFBIG] Debug too large to attach
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112844'>NAS-112844</a>] -         WARNING Domain validation failed with error: [ENOMETHOD] Method &#39;get_n_working_srvers&#39; not found in &#39;activedirectory&#39;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112853'>NAS-112853</a>] -         journal_ha thread being started on non-HA systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112856'>NAS-112856</a>] -         ACL editor stuck on &quot;please wait&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112857'>NAS-112857</a>] -         CPU Temperature not appearing in Reporting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112887'>NAS-112887</a>] -         openebs not starting correctly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112900'>NAS-112900</a>] -         Prevent users from disabling mDNS if time machine is enabled
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112903'>NAS-112903</a>] -         vrrp_fifo_listen thread not running on initial setup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112904'>NAS-112904</a>] -         failover.status taking forever on initial failover
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112907'>NAS-112907</a>] -         Ensure that samba internal directories are owned by root
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112912'>NAS-112912</a>] -         Lost WebUI and SSH access on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112913'>NAS-112913</a>] -         JIRA categories can not be retrieved using oauth token
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112920'>NAS-112920</a>] -         &quot;The reporting database is broken&quot; message appears for irrelevant errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112922'>NAS-112922</a>] -         fix service restart on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112924'>NAS-112924</a>] -         Investigate improving restore functionality of k8s cluster
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112939'>NAS-112939</a>] -         Fix cluster tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112947'>NAS-112947</a>] -         Investigate failures with support.attach_ticket endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112950'>NAS-112950</a>] -         Allow booting TrueNAS CORE from GRUB menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112953'>NAS-112953</a>] -         remove __nfsv4link from sysdataset plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112960'>NAS-112960</a>] -         Convert ldap start stop to job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112961'>NAS-112961</a>] -         failover.force_master broken on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112967'>NAS-112967</a>] -         Add basic set of clustered LDAP tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112971'>NAS-112971</a>] -         user.update ignores missing home directory
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112976'>NAS-112976</a>] -         Webui submits invalid alert policy when &quot;IMMEDIATELY&quot; is selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112978'>NAS-112978</a>] -         Add ability to query ntp peers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112981'>NAS-112981</a>] -         Update webui to follow job_id returned by ldap.update() in master
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112982'>NAS-112982</a>] -         Add method to get cluster-wide time info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112993'>NAS-112993</a>] -         [SCALE] Syslog lvl &quot;Is Debug&quot; not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112998'>NAS-112998</a>] -         Make sure we don&#39;t iterate over none object
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113003'>NAS-113003</a>] -         NextCloud PHP memory limit set to 2 MB for CLI commands
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113006'>NAS-113006</a>] -         Improve ad idmap validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113008'>NAS-113008</a>] -         Unable to promote dataset/zvol clones in SCALE 21.08-BETA.2
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113009'>NAS-113009</a>] -         Update machinaris to correctly configure worker address
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113013'>NAS-113013</a>] -         Bug fix for correctly retrieving k8s secret after creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113025'>NAS-113025</a>] -         remove unused code and clean-up info_linux.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113026'>NAS-113026</a>] -         remove unused code and clean-up lag_linux.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113028'>NAS-113028</a>] -         remove used code and clean-up type_linux.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113032'>NAS-113032</a>] -         more validaiton to failover.events.validate()
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113034'>NAS-113034</a>] -         less verbose about sql related logs in journal_ha
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113048'>NAS-113048</a>] -         SCALE - Apps - Sometimes show as nothing installed after updating an app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113052'>NAS-113052</a>] -         Can&#39;t update TrueNAS Scale 21.08 Beta 2 to 22.02 RC1. Stuck on ZFS import. 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113053'>NAS-113053</a>] -         Add Cron Job, but schedule is lost upon save
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113054'>NAS-113054</a>] -         Add basic auto-configuration for non-OpenLDAP LDAP servers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113056'>NAS-113056</a>] -         Kubernetes won&#39;t start after upgrade to 22.02-RC.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113058'>NAS-113058</a>] -         Core files for the following executables were found: /usr/sbin/smbd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113059'>NAS-113059</a>] -         Re-initialize docker dataset on k8s cluster restore
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113060'>NAS-113060</a>] -         Allow mocking methods in integration tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113064'>NAS-113064</a>] -         UPS Service crashes with repeated errors in console log
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113070'>NAS-113070</a>] -         Bug fix for running tests in CI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113071'>NAS-113071</a>] -         Installer does not activate legacy boot partition
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113073'>NAS-113073</a>] -         Bypass validation in OROperator if value matches default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113075'>NAS-113075</a>] -         Only adjust &quot;ldap ssl&quot; parameter in idmap backend if AD enabled
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113076'>NAS-113076</a>] -         22.02-RC.1 fresh install not working (middleware doesn&#39;t start)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113083'>NAS-113083</a>] -         Unable to upgrade from 21.08-BETA.2 to 22.02-RC.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113084'>NAS-113084</a>] -         macOS Safari TrueNAS FavIcon/TouchIcons
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113089'>NAS-113089</a>] -         Fix WebUI CI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113092'>NAS-113092</a>] -         Default idmap options to empty dict
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113093'>NAS-113093</a>] -         zectl activate randomly fails the first time it&#39;s called (2nd time works)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113094'>NAS-113094</a>] -         remove hdd standby force radio box in SCALE webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113098'>NAS-113098</a>] -         Remove FreeBSD lsiget util
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113107'>NAS-113107</a>] -         Use valid data for test_230
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113115'>NAS-113115</a>] -         Hover in enclosure UI / disks not clickable on some resolutions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113126'>NAS-113126</a>] -         No jobs are available. Please be patient...
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113127'>NAS-113127</a>] -         Task Manager → Active → Shows only 10 jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113129'>NAS-113129</a>] -         Unable to rename boot environments
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113133'>NAS-113133</a>] -         Allow updating anything to MASTER release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113134'>NAS-113134</a>] -         Allow call(&quot;pool.query&quot;, [], {&quot;extra&quot;: {&quot;is_upgraded&quot;: true}}) to avo…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113135'>NAS-113135</a>] -         Storage page: Do not call pool.is_upgraded in a loop
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113138'>NAS-113138</a>] -         GUI does not allow bond interfaces to be members of a bond (works on command line)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113144'>NAS-113144</a>] -         Stuck on boot. middleware not running 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113157'>NAS-113157</a>] -         Fix ordering of crossrename and recycle.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113158'>NAS-113158</a>] -         SMBD Core File
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113175'>NAS-113175</a>] -         Remove chart context added when doing validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113180'>NAS-113180</a>] -         Blacklist `interfaces` global parameter in SMB config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113182'>NAS-113182</a>] -         Inputs on login page look weird when password is saved
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113189'>NAS-113189</a>] -         Fix TrueNAS ZFS CI workflow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113190'>NAS-113190</a>] -         Allow checking out all repos by providing an override
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113194'>NAS-113194</a>] -         usb-devices not implemented in freenas-debug for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113196'>NAS-113196</a>] -         Dashboard Memory and CPU Widgets stop updating and show &quot;spinners&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113207'>NAS-113207</a>] -         Failed to parse IPMI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113214'>NAS-113214</a>] -         Kubernetes won&#39;t start after upgrade to 22.02-RC.1-1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113223'>NAS-113223</a>] -         cluster.utils.resolve_hostnames TypeError crash
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113237'>NAS-113237</a>] -         add more unit tests for dmi parsing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113244'>NAS-113244</a>] -         Disks being listed are suffering from weird caching issues?
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113246'>NAS-113246</a>] -         Time Machine SMB share not accessible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113249'>NAS-113249</a>] -         GUI does not show configured network interface MTU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113251'>NAS-113251</a>] -         middlewared to core dump
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113252'>NAS-113252</a>] -         Show correct choices for ups ports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113257'>NAS-113257</a>] -         Unable to deploy Plex App on TrueNAS Scale -taint {ix-svc-start: }
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113258'>NAS-113258</a>] -         Unable to continue after replication task fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113268'>NAS-113268</a>] -         Mark macvtapX as an internal interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113272'>NAS-113272</a>] -         Do not repeatedly log same error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113275'>NAS-113275</a>] -         [SMB 22.02.RC.1-1] - TimeMachine cannot find backup disk even after restarting avahi
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113276'>NAS-113276</a>] -         TrueNAS ISO Image does not boot in UEFI mode when written with Rufus
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113280'>NAS-113280</a>] -         `{&quot;ha_sync&quot;: False}` option for queries that should not be synchroniz…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113281'>NAS-113281</a>] -         dont run ssh.save_keys if nothing changed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113282'>NAS-113282</a>] -         Locked ZFS Encrypted Dataset visible on network and can be written to creating data leak
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113283'>NAS-113283</a>] -         Provide iso chroot env with custom built packages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113287'>NAS-113287</a>] -         Fix `Attribute` constructor arguments typos and fix the bug that made…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113288'>NAS-113288</a>] -         Fix a couple of incorrect schemas
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113292'>NAS-113292</a>] -         Datasets disappear when encrypted options are opened
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113304'>NAS-113304</a>] -         VM loses internet connectivity
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113305'>NAS-113305</a>] -         Do not check for an updated docker tag if tag is using digest
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113308'>NAS-113308</a>] -         netif.create_interface races with netif.list_interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113312'>NAS-113312</a>] -         fix smb cluster api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113316'>NAS-113316</a>] -         fix event that is sent when gluster vol is deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113327'>NAS-113327</a>] -         fix cluster smb api tests (round 2)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113338'>NAS-113338</a>] -         Some groups and users created by the user are not displayed in the ACL permissions setting interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113348'>NAS-113348</a>] -         Drag and drop sometimes breaks on group members list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113352'>NAS-113352</a>] -         Make sure SED disks are unlocked on HA systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113359'>NAS-113359</a>] -         Minio service deletes bucket metadata on startup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113365'>NAS-113365</a>] -         Update payload for catalog.items job in api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113370'>NAS-113370</a>] -         [SCALE] Add return button on the &quot;Unlock Datasets&quot; popup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113375'>NAS-113375</a>] -         SCALE - Disks - Name Tooltip incorrect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113396'>NAS-113396</a>] -         smbd dumps core whed accessing manualy mounted fs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113397'>NAS-113397</a>] -         Partially received snapshot is saved
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113400'>NAS-113400</a>] -         timeout ix-zfs.service after 15mins at boot time
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113418'>NAS-113418</a>] -         [SCALE] Dashboard statistics don&#39;t load fully
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113420'>NAS-113420</a>] -         simplify SCALE HA duplicate failover event logging
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113427'>NAS-113427</a>] -         missing f-string formatter in cluster.localevents
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113443'>NAS-113443</a>] -         system.is_stable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113447'>NAS-113447</a>] -         Apps can&#39;t access files after fresh install and import of pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113452'>NAS-113452</a>] -         filesystem.statfs incorrectly identifies filesystem types
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113468'>NAS-113468</a>] -         Only run nscd when LDAP is enabled
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113473'>NAS-113473</a>] -         Add acls to debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113474'>NAS-113474</a>] -         First time update UI doesn&#39;t allow apply updates and reboot checkbox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113475'>NAS-113475</a>] -         Error activating BE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113487'>NAS-113487</a>] -         Have humanized app version for history of chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113518'>NAS-113518</a>] -         mDNS stops working when specifying SMB interface bindings
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113561'>NAS-113561</a>] -         fix fstype parsing in filesystem.statfs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113564'>NAS-113564</a>] -         Installer doesn&#39;t UEFI boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113568'>NAS-113568</a>] -         Network UPS Tools missing SNMP driver
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113574'>NAS-113574</a>] -         Skip statfs check on SMB path if it does not exist
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113576'>NAS-113576</a>] -         use PAM in sshd_config when AD is configured to allow PAM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113577'>NAS-113577</a>] -         Fix handling of partially replicated snapshots
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113589'>NAS-113589</a>] -         Selecting single source directory for cloud sync behaves incorrectly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113592'>NAS-113592</a>] -         Generate new user `uid` before chowning his home directory to that uid
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113607'>NAS-113607</a>] -         Cloud Sync Tasks can&#39;t be loaded on Data Protection dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113608'>NAS-113608</a>] -         Fix job progress statement for ctdb plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113631'>NAS-113631</a>] -         Fix bug in initializing hwm in winbindd_idmap.tdb
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113632'>NAS-113632</a>] -         Ensure rid value consistency between user/group name changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113662'>NAS-113662</a>] -         Add debian debug mirror to nightlies apt soruces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113758'>NAS-113758</a>] -         Bug fix for encryption summary of dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113791'>NAS-113791</a>] -         Allow empty fromemail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113890'>NAS-113890</a>] -         Fix KeyError: &#39;naming-schema&#39;
</li>
</ul>

{{< /expand >}}

## 22.02-RC.1-2

{{< expand "22.02-RC.1-2" >}}

**November 23, 2021**

iXsystems is pleased to announce the availability of TrueNAS SCALE 22.02-RC.1-2!
This is a maintenance release that includes Samba security updates, WebUI form improvements and fixes a regression with TrueCommand clustering.

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113322'>NAS-113322</a>] -         Allow closing slide-in forms with Escape key
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113195'>NAS-113195</a>] -         Jira Ticket for Samba 4.15.2 and 4.13.14 Security Releases
</li>
<li>[<a href='https://security.truenas.com/cves/2021-11-09-cve-2021-25717/'>CVE 2021-25717</a>] -         TrueNAS Security Notice for Samba CVE
</li>
<li>[<a href='https://security.truenas.com/cves/2021-11-09-cve-2020-23192/'>CVE 2020-23192</a>] -         TrueNAS Security Notice for Samba CVE
<li>[<a href='https://security.truenas.com/cves/2021-11-09-cve-2020-2124/'>CVE 2020-2124</a>] -         TrueNAS Security Notice for Samba CVE
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113417'>NAS-113417</a>] -         fix event that is sent when gluster vol is deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113223'>NAS-113223</a>] -         cluster.utils.resolve_hostnames TypeError crash
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113144'>NAS-113144</a>] -         Stuck on boot. middleware not running
</li>
</ul>

{{< /expand >}}

## 22.02-RC.1-1

{{< expand "22.02-RC.1-1" >}}

**November 4, 2021**

iXsystems is pleased to announce the availability of TrueNAS SCALE 22.02-RC.1-1!
This is a maintenance release that fixes ZFS pool import issues.

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113052'>NAS-113052</a>] -         Can't update TrueNAS Scale 21.08 Beta 2 to 22.02 RC1. Stuck on ZFS import. 
</li>
</ul>

{{< /expand >}}

## 22.02-RC.1

{{< expand "22.02-RC.1" >}}

**October 26, 2021**

TrueNAS SCALE reached an important milestone today when TrueNAS SCALE 22.02-RC1 was released after 12 months of Alpha and Beta testing by over 4,000 TrueNAS Community members. This release includes scale-out file and object (S3) storage services as well as a wide range of containerized applications, supported on a Kubernetes platform. 

TrueNAS SCALE is an Open Source Hyperconverged Infrastructure (HCI) project that began its journey as an Alpha release in October 2020 with the now-delivered promise of:
 
* Scale-out ZFS
* Converged Compute and Storage
* Active-Active Reliability 
* Linux Containers (Kubernetes) & VMs (KVM)
* Ease of Deployment and Operation

The scale-out capabilities extend to both file (clustered SMB, Glusterfs) and object storage (S3 API with Minio) and do not force users to choose between file and object storage. After 12 months of enthusiastic development and testing, it is now being deployed in many applications and has about 100 PB under management. The Release Candidate (RC) phase is the start of more widespread deployment which will grow as further updates are provided.

We appreciate the [community feedback](https://www.truenas.com/community/forums/truenas-scale-discussion/) and [bug reports](https://jira.ixsystems.com/) and hope to get all those features to RELEASE quality faster. A special thanks also goes to the large number of awesome community members who joined the development and test team. We’ve really appreciated your contributions and teamwork and it has greatly contributed to the accelerated development process.

### Improvements

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104564'>NAS-104564</a>] -         Add smbtorture regression tests for ix-developed SMB VFS modules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110194'>NAS-110194</a>] -         Strings with variables are untranslatable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110196'>NAS-110196</a>] -         Add an HTML linter
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110406'>NAS-110406</a>] -         Improve yarn.lock workflow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110472'>NAS-110472</a>] -         Lint commit messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110498'>NAS-110498</a>] -         Enable another 2 linter rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110838'>NAS-110838</a>] -         Start designing better ways of working with forms or tables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111064'>NAS-111064</a>] -         Refactor tooltips in webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111091'>NAS-111091</a>] -         Refactor any small form to reflect new coding practices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111179'>NAS-111179</a>] -         improve system.dmidecode_info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111196'>NAS-111196</a>] -         Document return type(s) of public endpoints of filesystem plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111290'>NAS-111290</a>] -         Red service status on share dashboard with no shares
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111447'>NAS-111447</a>] -         Update filesystem.default_acl_choices to accept path
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111466'>NAS-111466</a>] -         Add tests to Acl Editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111467'>NAS-111467</a>] -         Add tests to Task Manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111537'>NAS-111537</a>] -         Allow job dialog to collapsed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111567'>NAS-111567</a>] -         Change Patch object to reflect name correctly in schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111574'>NAS-111574</a>] -         Real-time updates on the Storage widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111590'>NAS-111590</a>] -         Validate gateway specified for kubernetes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111625'>NAS-111625</a>] -         Add ensure_display_device field in the UI for vms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111638'>NAS-111638</a>] -         Upgrade to Angular 11
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111639'>NAS-111639</a>] -         Improve type safety in Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111640'>NAS-111640</a>] -         Split FieldConfig into separate interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111641'>NAS-111641</a>] -         Type EntityWizard configuration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111643'>NAS-111643</a>] -         Standartize terminal components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111644'>NAS-111644</a>] -         Add type information to failover endpoints
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111645'>NAS-111645</a>] -         Correct some of the template errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111662'>NAS-111662</a>] -         W32 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111717'>NAS-111717</a>] -         Layout improvements for Shares dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111746'>NAS-111746</a>] -         Upgrade catalog_update vm to 21.04 ubuntu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111842'>NAS-111842</a>] -         Sync improvements for Data Protection Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111852'>NAS-111852</a>] -         Improvements to retrieving catalog(s)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111875'>NAS-111875</a>] -         W34 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111882'>NAS-111882</a>] -         SCALE: Merge Linux v5.10.58
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111905'>NAS-111905</a>] -         Update text on submit button 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111919'>NAS-111919</a>] -         Improvements for disabled checkbox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111943'>NAS-111943</a>] -         Huge titles on Reports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111949'>NAS-111949</a>] -         Add rsync modules to usage stats plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111964'>NAS-111964</a>] -         Enable fullTemplateTypeCheck
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112000'>NAS-112000</a>] -         OpenZFS 2.1.1 patch set
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112006'>NAS-112006</a>] -         Improve type safety of core events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112010'>NAS-112010</a>] -         Improve type checking in templates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112011'>NAS-112011</a>] -         Update to Angular 12
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112080'>NAS-112080</a>] -         Remove non-common properties from BaseFieldConfig
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112081'>NAS-112081</a>] -         Do not send lots of "removed" messages when moving apps pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112094'>NAS-112094</a>] -         Impossible to delete a vm if something happened to its dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112095'>NAS-112095</a>] -         W36 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112108'>NAS-112108</a>] -         Do not show vms in the UI if system does not support virtualization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112119'>NAS-112119</a>] -         deprecate custom "options" for interfaces on scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112128'>NAS-112128</a>] -         Template and dialog service calls cleanup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112138'>NAS-112138</a>] -         Remove `services_restart` from `pool.dataset.unlock` call
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112144'>NAS-112144</a>] -         M30 support in Enclosure UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112156'>NAS-112156</a>] -         add more unit tests for dmidecode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112199'>NAS-112199</a>] -         Fix some of untranslatable messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112205'>NAS-112205</a>] -         Simplify ModalService
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112239'>NAS-112239</a>] -         Add support in UI for R20B 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112247'>NAS-112247</a>] -         add init_gluster to cluster API pipeline
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112248'>NAS-112248</a>] -         setup pytest for cluster API unit tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112249'>NAS-112249</a>] -         update license alert to detect M30
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112271'>NAS-112271</a>] -         W37 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112292'>NAS-112292</a>] -         change ixsystems/releng to call --initialize-gluster flag
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112295'>NAS-112295</a>] -         call pytest instead of pytest-3 in cluster API tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112308'>NAS-112308</a>] -         Finish refactoring of localization form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112309'>NAS-112309</a>] -         Make an example of user combobox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112341'>NAS-112341</a>] -         remove osc related code in network plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112359'>NAS-112359</a>] -         MTU validation is too restrictive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112382'>NAS-112382</a>] -         CLI Shortcut (Network): Create Bridged interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112399'>NAS-112399</a>] -         Sync styles for Network and Storage widgets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112400'>NAS-112400</a>] -         midcli doesn't flush systemd messages logged on console
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112405'>NAS-112405</a>] -         remove the "Options" field in the network settings in webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112407'>NAS-112407</a>] -         W38 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112409'>NAS-112409</a>] -         lagg member validation broken on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112414'>NAS-112414</a>] -         Enable no-for-in-array linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112416'>NAS-112416</a>] -         Enable additional linter rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112431'>NAS-112431</a>] -         Enable @typescript-eslint/no-this-alias linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112432'>NAS-112432</a>] -         Enable @typescript-eslint/no-unused-expressions linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112433'>NAS-112433</a>] -         Enable no-restricted-globals linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112437'>NAS-112437</a>] -         remove scan_vrrp from network.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112440'>NAS-112440</a>] -         clean up disk.get_reserved on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112442'>NAS-112442</a>] -         bridge and lagg member choices methods are wrong on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112446'>NAS-112446</a>] -         rewrite core dump handling on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112485'>NAS-112485</a>] -         Remove some of unused code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112524'>NAS-112524</a>] -         Do not allow user to navigate to next step if current has errors in Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112537'>NAS-112537</a>] -         W39 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112557'>NAS-112557</a>] -         Should we provide a kind of "shortcuts" in new CLI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112570'>NAS-112570</a>] -         Make "Dismiss all alerts" easier to find
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112572'>NAS-112572</a>] -         Enable additional linter rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112573'>NAS-112573</a>] -         Add tests for FormatDateTimePipe
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112586'>NAS-112586</a>] -         Add test harnesses to new ix-form components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112587'>NAS-112587</a>] -         Remove support for legacy encryption from webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112612'>NAS-112612</a>] -         Enable @typescript-eslint/prefer-for-of
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112613'>NAS-112613</a>] -         Enable @typescript-eslint/prefer-includes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112617'>NAS-112617</a>] -         Implement new form checkbox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112627'>NAS-112627</a>] -         DiskStats does not scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112657'>NAS-112657</a>] -         use casefold() for hostname validation in gluster API tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112674'>NAS-112674</a>] -         Expose Chia node port for the app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112689'>NAS-112689</a>] -         Improve i18n support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112722'>NAS-112722</a>] -         SCALE: Merge Linux v5.10.70
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107006'>NAS-107006</a>] -         Display job description in task manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111632'>NAS-111632</a>] -         SCALE 21.06 BETA: KVM change machine type
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111692'>NAS-111692</a>] -         Add application for guydavis/machinaris
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111896'>NAS-111896</a>] -         setup QE infrastructure for testing SCALE cluster
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112123'>NAS-112123</a>] -         create "run-cluster-tests.py"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112161'>NAS-112161</a>] -         Request to include python3-pip
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112246'>NAS-112246</a>] -         change ixsystems/releng repo to call run-cluster-tests.py in pipeline
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112602'>NAS-112602</a>] -         create systemd.link file to rename ntb network device
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112603'>NAS-112603</a>] -         fix internal heartbeat code for m-series ntb device on SCALE
</li>
</ul>

## Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112342'>NAS-112342</a>] -         remove complexity of network API on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112600'>NAS-112600</a>] -         ntb driver is written for SCALE so need to plumb in middleware code
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109873'>NAS-109873</a>] -         Empty graphs in Reporting: CPU, Disk, Memory, System, ZFS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110483'>NAS-110483</a>] -         Interface allows creation of child dataset on read-only dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110863'>NAS-110863</a>] -         Fix scrollbar on Shares Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110864'>NAS-110864</a>] -         UI issues on Advanced Settings for Isolated PCI Ids
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111123'>NAS-111123</a>] -         Not an integer when trying to generate a private key for a ssh connections
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111276'>NAS-111276</a>] -         VMware Snapshot Not Being Removed from vSphere 7
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111289'>NAS-111289</a>] -         reporting.realtime updates are received on all pages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111393'>NAS-111393</a>] -         pool health UI shows both green and red checkmarks while resilvering and removing mirror
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111397'>NAS-111397</a>] -         untilDestroyed bugs on DiskListComponent
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111420'>NAS-111420</a>] -         SCALE 21.06 BETA: Cirrus video device in libvirt xml when removing all emulated displays
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111445'>NAS-111445</a>] -         Exceptions are not handled when using folder selector
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111491'>NAS-111491</a>] -         ARC size tunable set incorrectly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111499'>NAS-111499</a>] -         &quot;Next Run&quot; in Cloud Sync Tasks does not sort properly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111526'>NAS-111526</a>] -         [SCALE] timemachine and samba issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111529'>NAS-111529</a>] -         Imported CA Certificates not trusted by system
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111540'>NAS-111540</a>] -         cron jobs for CloudSync tasks with encrypted destinations are not created after dataset is unlocked
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111621'>NAS-111621</a>] -         No usable error when trying to add smb idmap
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111627'>NAS-111627</a>] -         Change text of update dialog of apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111634'>NAS-111634</a>] -         Syslog TLS misconfigured
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111702'>NAS-111702</a>] -         SMB acces problem 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111711'>NAS-111711</a>] -         Replication says finished, but actually has error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111716'>NAS-111716</a>] -         Fix dataset delete dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111718'>NAS-111718</a>] -         [SCALE 21.08 Nightly - Launch Docker Image] DNS Policy dropdown should show full description 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111719'>NAS-111719</a>] -         Error loading module '/usr/lib/x86_64-linux-gnu/samba/vfs/zfsacl.so'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111731'>NAS-111731</a>] -         Locked cloud sync and rsync tasks are displayed as PENDING
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111733'>NAS-111733</a>] -         Locked shares are displayed normally
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111751'>NAS-111751</a>] -         Not showing that we are retrieving catalog data in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111782'>NAS-111782</a>] -         Replication says finished, but actually has error - cannot receive incremental stream
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111823'>NAS-111823</a>] -         SCALE Can't delete boot environment
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111835'>NAS-111835</a>] -         duplicate webUI entries on 21.06-BETA.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111838'>NAS-111838</a>] -         Move LDAP client code into explicit service plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111858'>NAS-111858</a>] -         TrueNAS-12.0-U4.1 alert email set for 'warning' and 'immediately' but for failed SSH logins is sending the alert daily (at midnight)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111869'>NAS-111869</a>] -         Add configurable ACL templates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111877'>NAS-111877</a>] -         Infinite loading when switching to Rsync Module
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111878'>NAS-111878</a>] -         TextLimiter directive prevent values from change detection updates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111881'>NAS-111881</a>] -         catch NoSuchDevice in ethtool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111884'>NAS-111884</a>] -         Fix unnecessary re-rendering on Sharing dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111885'>NAS-111885</a>] -         /auth/check_user always returns false
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111899'>NAS-111899</a>] -         Export compile_name_regex to be used in TrueNAS middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111902'>NAS-111902</a>] -         Remove dependency on samba3 loadparm context
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111910'>NAS-111910</a>] -         Remove invalid auxiliary parameter from test payload
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111917'>NAS-111917</a>] -         Avoid generating invalid krb5.conf
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111920'>NAS-111920</a>] -         Run corefile alert every 6 hours instead of every 5 minutes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111921'>NAS-111921</a>] -         Add validation to ensure that packages only build from truenas organisation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111922'>NAS-111922</a>] -         Fix displaying percent value
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111924'>NAS-111924</a>] -         Investigate why table header and rows gets huge
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111925'>NAS-111925</a>] -         Fix regression in kerberos config generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111927'>NAS-111927</a>] -         Update preferred trains default value for catalog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111934'>NAS-111934</a>] -         Move loglevel mapping conversion to compress method
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111935'>NAS-111935</a>] -         Do not retrieve old catalog.items jobs when querying up catalogs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111938'>NAS-111938</a>] -         Create idmap service to wrap around winbind
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111940'>NAS-111940</a>] -         [SCALE] Storage > Apply Permissions Recursively checkbox Is not getting checked & applied
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111944'>NAS-111944</a>] -         Unrecoverable crash when upgrading from CORE to SCALE 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111947'>NAS-111947</a>] -         Remove additional unused mDNS service types
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111954'>NAS-111954</a>] -         Fix GMail thread safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111958'>NAS-111958</a>] -         Properly retrieve snapshots in bootenv plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111966'>NAS-111966</a>] -         Disk I/O Performance is Null
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111968'>NAS-111968</a>] -         Impossible to remove all permissions in trivial permissions editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111970'>NAS-111970</a>] -         Remove unnecessary validation for SMB password
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111971'>NAS-111971</a>] -         Linted files are not added to the same commit
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111973'>NAS-111973</a>] -         Can't delete dataset(s)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111975'>NAS-111975</a>] -         [SCALE] Can't convert POSIX Dataset into NFSv4 Dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111983'>NAS-111983</a>] -         Some tables don't have left margin anymore
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111984'>NAS-111984</a>] -         typos in task error messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111988'>NAS-111988</a>] -         Fresh TrueNAS SCALE boot: samba-related middleware exceptions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111990'>NAS-111990</a>] -         Wait for permissions job to finish during dataset creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111992'>NAS-111992</a>] -         Log parameter lookup failures due to missing config file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111993'>NAS-111993</a>] -         Shift wsdd setup to post_init
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111994'>NAS-111994</a>] -         Do not allow host networking to be enabled when external interfaces are supplied
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111995'>NAS-111995</a>] -         Fix out of order operations in applying smb config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111997'>NAS-111997</a>] -         Properly retrieve registry config and ACLs in SMB debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112001'>NAS-112001</a>] -         Deprecate heimdal portion of kerberos plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112003'>NAS-112003</a>] -         All application data lost when changing pools
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112004'>NAS-112004</a>] -         [SCALE] Can't save changes to VMs general settings because the UI wants a GPU to be selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112005'>NAS-112005</a>] -         Sync catalogs before trying to validate them
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112007'>NAS-112007</a>] -         Fix system dataset setup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112008'>NAS-112008</a>] -         Remove unused code in vm plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112009'>NAS-112009</a>] -         Update nvidia device plugin tag
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112012'>NAS-112012</a>] -         It is possible to start a manual S.M.A.R.T. test for disk that does not support tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112013'>NAS-112013</a>] -         Storage Widget on Dashboard Reporting Incorrect Values
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112017'>NAS-112017</a>] -         Unable to use GPU in apps/charts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112018'>NAS-112018</a>] -         Fix pool export
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112019'>NAS-112019</a>] -         Issues when migrating system dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112020'>NAS-112020</a>] -         Copies must be a string when it is
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112022'>NAS-112022</a>] -         Artifacts when scrolling reporting graphs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112029'>NAS-112029</a>] -         Performance drop is sometimes blocked by top menu bar
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112032'>NAS-112032</a>] -         Fix check for whether advanced flags are inherited
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112033'>NAS-112033</a>] -         Remove clear button from disabled inputs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112034'>NAS-112034</a>] -         Add smb data to account plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112035'>NAS-112035</a>] -         Fix unit tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112036'>NAS-112036</a>] -         Schema unit tests are failing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112037'>NAS-112037</a>] -         Chart releases unit test is failing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112038'>NAS-112038</a>] -         media user issues (duplicate entry, wrong uid/gid)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112039'>NAS-112039</a>] -         Wait for sync job to complete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112040'>NAS-112040</a>] -         [SCALE] Can't unlock encrypted pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112049'>NAS-112049</a>] -         Properly initialize service announcements on boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112082'>NAS-112082</a>] -         Sidebar is not scrollable on a small screen
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112083'>NAS-112083</a>] -         Fix infinite restart on main CLI when middleware is not running
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112089'>NAS-112089</a>] -         Add returns to filesystem acl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112090'>NAS-112090</a>] -         Add dump endpoint for or-operator schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112097'>NAS-112097</a>] -         fix filesystem.statfs (round 2)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112101'>NAS-112101</a>] -         Add regression tests for ACL templates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112107'>NAS-112107</a>] -         Add endpoint clarifying why virtualization is not supported
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112109'>NAS-112109</a>] -         Handling broken reporting database
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112111'>NAS-112111</a>] -         Update group api tests to use 'additional_information'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112112'>NAS-112112</a>] -         query SMB information through user plugin in tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112117'>NAS-112117</a>] -         .zshrc missing on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112118'>NAS-112118</a>] -         Clearing reporting database should not be offered when "Report CPU usage in percent" is changed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112130'>NAS-112130</a>] -         Allow using OROperator directly in accepts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112133'>NAS-112133</a>] -         Build custom collectd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112136'>NAS-112136</a>] -         Add returns decorator to kerberos methods
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112137'>NAS-112137</a>] -         SHM Arguments for Containers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112140'>NAS-112140</a>] -         Nextcloud upgrade failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112141'>NAS-112141</a>] -         smb.configure fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112148'>NAS-112148</a>] -         Add test for complex groupmap behavior
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112154'>NAS-112154</a>] -         SCALE: Applications startup even when host path volume is on locked encrypted dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112157'>NAS-112157</a>] -         Properly check if system supports virtualization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112158'>NAS-112158</a>] -         [SCALE] NFSv4 permissions are not applied recursively 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112159'>NAS-112159</a>] -         Fix activedirectory idmap cache generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112163'>NAS-112163</a>] -         Properly apply default SMB acl on dataset creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112164'>NAS-112164</a>] -         Correctly generate nut.conf
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112166'>NAS-112166</a>] -         Snapshot UI Hangs forever
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112167'>NAS-112167</a>] -         Do not generate username map unless required
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112169'>NAS-112169</a>] -         Check for SMB share registry entry before cleanup in delete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112170'>NAS-112170</a>] -         Fix validation for MS account
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112181'>NAS-112181</a>] -         Pi-Hole on TrueNAS-21.08-BETA.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112186'>NAS-112186</a>] -         [SCALE] App Stop "stuck", doesn't register when using Loadbalancer
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112192'>NAS-112192</a>] -         ClusterFirst DNS not connecting to external addresses. 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112197'>NAS-112197</a>] -         Update iX apt mirrors to not reference "unstable"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112225'>NAS-112225</a>] -         SMART disabled for disks behind SATL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112228'>NAS-112228</a>] -         Slide-in forms do not fit mobile device display
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112229'>NAS-112229</a>] -         Add handling for ZFS cmd returning '-' for quota / used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112236'>NAS-112236</a>] -         Fix validation of auxiliary parameters for SMB shares
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112238'>NAS-112238</a>] -         Application events order changes order on every button or mouse click
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112240'>NAS-112240</a>] -         App fails to deploy because of failing nvidia-device-plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112257'>NAS-112257</a>] -         Fix issue unix tokens for local users
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112263'>NAS-112263</a>] -         LACP bond does not activate (works using command line)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112264'>NAS-112264</a>] -         MTU (jumbo frame) settings from GUI ignored; works on command line
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112269'>NAS-112269</a>] -         [SCALE] (2) Can't save changes to VMs general settings because the UI wants a GPU to be selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112272'>NAS-112272</a>] -         definitions/nodeIP not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112273'>NAS-112273</a>] -         UPS email configuration reports "Field was not expected"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112274'>NAS-112274</a>] -         GUI configuration for UPS description requires explicit quotes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112280'>NAS-112280</a>] -         smbd throws core dump
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112282'>NAS-112282</a>] -         "Create Snapshot" GUI "recursive" checkbox text label missing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112283'>NAS-112283</a>] -         Console MOTD Banner field not wrapping text
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112284'>NAS-112284</a>] -         Disabling (rather than deleting) a Time Machine SMB share does not stop its MDNS announcement.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112289'>NAS-112289</a>] -         "attach" or "expand" does not show in storage options
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112290'>NAS-112290</a>] -         Recently changed boot drive, network stats no longer show
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112291'>NAS-112291</a>] -         remove item_method decorator from gluster volume plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112293'>NAS-112293</a>] -         fix cluster tests (missed local commit)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112294'>NAS-112294</a>] -         Add LDAP_DN attribute for middleware schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112296'>NAS-112296</a>] -         GRUB install: error: filesystem 'zfs' doesn't support blocklists
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112298'>NAS-112298</a>] -         Reboot Link
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112300'>NAS-112300</a>] -         zilstat not functional on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112312'>NAS-112312</a>] -         [SCALE] App Upgrade Changelog field very small on bigger screens
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112314'>NAS-112314</a>] -         Prevent permissions changes to contents of ix-applications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112317'>NAS-112317</a>] -         Upgrade rclone to 1.56.0 to resolve Google API issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112319'>NAS-112319</a>] -         Fix External PR Docker Build on GitHub
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112329'>NAS-112329</a>] -         Preferences not being saved and potentially other bugs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112336'>NAS-112336</a>] -         WebUI and middleware use different range checks for VLAN tags
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112340'>NAS-112340</a>] -         Quick fix the first time notice popup issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112352'>NAS-112352</a>] -         Broadcast address zero for network interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112357'>NAS-112357</a>] -         smart.test.disk_choices returns disks that do not support smart tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112363'>NAS-112363</a>] -         webUI needs to send ip address type information
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112373'>NAS-112373</a>] -         fix address/mixin.py typo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112378'>NAS-112378</a>] -         Services page is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112383'>NAS-112383</a>] -         Reboot as part of Scale Nightly Upgrade always results in Unscheduled Reboot Warning
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112397'>NAS-112397</a>] -         Python script failure during Cloud Sync Task with Microsoft Onedrive, error: "InvalidAuthenticationToken: Unable to initialize RPS"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112398'>NAS-112398</a>] -         Shadow copies not visible via SMB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112410'>NAS-112410</a>] -         Fix full groupmap test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112420'>NAS-112420</a>] -         middleware prevents valid bridge configuration on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112423'>NAS-112423</a>] -         Cloud Sync Form is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112424'>NAS-112424</a>] -         Fix delete message on Shares
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112425'>NAS-112425</a>] -         Cloud Sync Tasks should show "Disabled" instead of a "Next Run" time if task is disabled
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112428'>NAS-112428</a>] -         Disable Hardware Offloading shows TrueNAS Core text
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112429'>NAS-112429</a>] -         Deleting snapshots is not reflected in GUI when search is performed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112430'>NAS-112430</a>] -         core dump after migrating from TrueNAS Core 12.0-U5 to TrueNAS SCALE Beta 21.08
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112434'>NAS-112434</a>] -         Fix abort button on job item component
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112435'>NAS-112435</a>] -         Poor looking cloud sync error dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112468'>NAS-112468</a>] -         Update middleware for samba changes in 4.15
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112470'>NAS-112470</a>] -         Build with Samba 4.15
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112481'>NAS-112481</a>] -         Booting on a network without a DHCP server results in a funky console.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112482'>NAS-112482</a>] -         Failed login SSH using Domain Admin account
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112489'>NAS-112489</a>] -         Remove osc from plugins/reporting/update.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112490'>NAS-112490</a>] -         Failed to access Homes Directory for Domain Users
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112518'>NAS-112518</a>] -         Dump errors to stderr in noninteractive mode and exit with code 1 on …
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112519'>NAS-112519</a>] -         Send proper ClientException for a job exception
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112520'>NAS-112520</a>] -         Improve factory reset speed and display progress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112521'>NAS-112521</a>] -         Remove SSH keys
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112522'>NAS-112522</a>] -         KeyError in coredump.py plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112526'>NAS-112526</a>] -         EntityJobComponent regression
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112531'>NAS-112531</a>] -         Alter behavior of restrict_pam key for AD plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112533'>NAS-112533</a>] -         Fix automatic home directory creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112535'>NAS-112535</a>] -         Display nice error in YAML error dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112536'>NAS-112536</a>] -         Print nicer job progress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112546'>NAS-112546</a>] -         IPv6 has incorrect http port on CLI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112554'>NAS-112554</a>] -         Unable to Create OpenVPN Server/Client Certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112560'>NAS-112560</a>] -         Preserve whitespaces for traceback output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112567'>NAS-112567</a>] -         Raise error if SMB client connection fails for shadow copy test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112577'>NAS-112577</a>] -         hook_setup_ha endless loop
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112581'>NAS-112581</a>] -         SCALE won't boot "Failed to start `Save SSH keys`"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112583'>NAS-112583</a>] -         "MirrorEstimated raw capacity"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112584'>NAS-112584</a>] -         Fix logic for path_suffix removal
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112588'>NAS-112588</a>] -         Add clear button on the search field
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112596'>NAS-112596</a>] -         SCALE Can't clear UPS Alerts (critical and info)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112597'>NAS-112597</a>] -         The system returned the following error - [object Object]
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112598'>NAS-112598</a>] -         Only run interactive editor if we requested so explicitly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112605'>NAS-112605</a>] -         Ensure we have clean state for SMB VSS tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112608'>NAS-112608</a>] -         systemdataset.setup is broken on scale HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112628'>NAS-112628</a>] -         Adjust site-specific kerberos info for API usage change
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112629'>NAS-112629</a>] -         TrueNAS SCALE Enterprise login window says "TrueNAS SCALE_ENTERPRISE ® © 2021"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112631'>NAS-112631</a>] -         APPS: Mismatch colors on charts badge
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112632'>NAS-112632</a>] -         Start / stop idmap service when clearing idmap cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112633'>NAS-112633</a>] -         Fix colors for Directory Services Monitor popup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112634'>NAS-112634</a>] -         Same SMB SIDs are assigned twice
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112640'>NAS-112640</a>] -         NFS-Ganesha fails on alias change
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112643'>NAS-112643</a>] -         Fix job width on Task Manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112669'>NAS-112669</a>] -         Fix SMB config generation issues when clustered
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112686'>NAS-112686</a>] -         Do not wipe host address bits when setting network interface alias
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112687'>NAS-112687</a>] -         Unable to create CSR in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112688'>NAS-112688</a>] -         Expose current interface addresses in `network interface query`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112701'>NAS-112701</a>] -         Address issues in ctdb public ip generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112703'>NAS-112703</a>] -         Expand usage of ads domain info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112719'>NAS-112719</a>] -         Unable to verify or use mega.nz cloud creds
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112721'>NAS-112721</a>] -         Add API call to create directories
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112725'>NAS-112725</a>] -         SCALE: Remove feature@xattr_compat
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112746'>NAS-112746</a>] -         Use specified smartd polling `interval`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112747'>NAS-112747</a>] -         Address multiple issues with clustered active directory
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112748'>NAS-112748</a>] -         Safely consume state key in vm event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112749'>NAS-112749</a>] -         ethtool.from_netlink log spam
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112780'>NAS-112780</a>] -         Migration from CORE to SCALE results in a corrupted install of SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112786'>NAS-112786</a>] -         remove the `Alias` dialog box in nfs sharing form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112799'>NAS-112799</a>] -         rrdcached plugin spamming logs on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112873'>NAS-112873</a>] -         Add validation to internal kerberos.get_cred method
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112920'>NAS-112920</a>] -         "The reporting database is broken" message appears for irrelevant errors
</li>
</ul>

{{< /expand >}}

## 21.08-BETA.2

{{< expand "21.08-BETA.2" >}}

**October 8, 2021**

TrueNAS SCALE 21.08-BETA.2 has been released! This is a maintenance release that includes an undisclosed security update and improvements for SMB/NFSv4 protocols while development looks ahead to the upcoming SCALE 22.02-RC.1 release later this month.

We appreciate the [community feedback](https://www.truenas.com/community/forums/truenas-scale-discussion/) and [bug reports](https://jira.ixsystems.com/) and hope to get all those features to RELEASE quality faster. A special thanks also goes to the large number of awesome community members who joined the development and test team. We’ve really appreciated your contributions and teamwork and it has greatly contributed to the accelerated development process.

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112141'>NAS-112141</a>] -         smb.configure fails
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112158'>NAS-112158</a>] -         [SCALE] NFSv4 permissions are not applied recursively 
</li>
</ul>

{{< /expand >}}

## 21.08-BETA.1

{{< expand "21.08-BETA.1" >}}

**August 31, 2021**

TrueNAS SCALE 21.08-BETA.1 has been released and includes clustered SMB (aka Windows storage) and a much improved Windows-style ACL (Access Control List) editor, building on the major iXsystems innovation of Windows-style (aka NFSv4) ACLs on Linux ZFS.  With these new features, the first release (“Angelfish”) of TrueNAS SCALE is largely feature complete and scheduled to go through the RC and RELEASE process in Q4 of 2021.

[TrueNAS SCALE 21.06-BETA.1](https://www.truenas.com/docs/releasenotes/scale/21.06-beta.1/) had the largest community of BETA users of any previous TrueNAS or FreeNAS release with over 3,000 deployed systems and a lot of field testing. Many thanks to the thousands of community developers and testers who have contributed to the effort.

Commercial BETA trials have started for a limited number of users and are also going well. The TrueNAS R-Series platforms are the first platforms available with TrueNAS SCALE support.

**TrueNAS SCALE 21.08-BETA.1** includes over 500 new features, improvements and bug fixes along with major new capabilities including:

* **Windows-style ACL Editor**: TrueNAS CORE and Enterprise support Windows-style file system ACLs (aka NFSv4 ACLs), based on OpenZFS with FreeBSD-compatible extended attributes. TrueNAS SCALE includes iXsystems enhancements to Linux which also allow importing of TrueNAS CORE & Enterprise pools while keeping the same extended attributes. With 21.08, the ACL editor in the WebUI received a large improvement in ease of use, while still supporting advanced ACL configurations. This makes it much easier for storage administrators to set up and manage ACLs in an immediately familiar way with a much smaller learning curve for new users.

* **Scale-Out SMB**: [TrueCommand 2.0](https://www.ixsystems.com/blog/truecommand-2-0-beta/) provides a WebUI for TrueNAS SCALE which enables ZFS datasets to be pooled together as cluster volumes which span multiple nodes. Clustered SMB access to those clustered volumes is previewed on TrueNAS SCALE 21.08 via APIs, and will be WebUI configurable with an upcoming TrueCommand version update. This allows scale-out capacity and bandwidth as well as fault tolerance. 

* **Improved System and Sharing Dashboards**: The main dashboard and the sharing dashboards have been significantly improved. The overall goal is to simplify setup and administration by reducing the steps required.

* **Enclosure Management**: Enclosure management provides visual control of specific iXsystems platforms such as the TrueNAS R-Series, with support for the Minis, M-Series, and X-Series coming soon.

* **OpenZFS 2.1**: 21.08-BETA.1 includes an updated version of OpenZFS which lays the groundwork for future file-system feature enhancements.  iXsystems contributed code for better scaling of worker processes with processor cores which makes tasks such as scrubbing and resilvering behave more reliably.

* **Container Storage Interface (CSI)**: The Democratic CSI is now supported and has been improved to be all API based. This will enable more robust deployments of TrueNAS storage for kubernetes systems.

* **Application Catalog Improvement**: Third-party applications can be deployed as single (Docker) containers or “pods” of containers described with customizable  Helm charts. These applications can be downloaded via catalogs like [TrueCharts](https://github.com/truecharts/truecharts), which also provides a process for users to build and customize their own catalogs. The syncing and managing of catalogs has been improved and is now snappier and more robust. 

The WebUI, while similar to TrueNAS CORE, has also been vastly improved with new UX enhancements which enable configuration and management of a system with far greater ease than ever before. Users will find much more relevant and important information readily available with less need to navigate through multiple pages in the interface.
TrueNAS SCALE documentation has also improved significantly and includes instructions on how to sidegrade from TrueNAS CORE to SCALE. In addition, there are Developer Notes and Release Notes.  

We appreciate the [community feedback](https://www.truenas.com/community/forums/truenas-scale-discussion/) and [bug reports](https://jira.ixsystems.com/) and hope to get all those features to RELEASE quality faster. A special thanks also goes to the large number of awesome community members who joined the development and test team. We’ve really appreciated your contributions and teamwork and it has greatly contributed to the accelerated development process.  

### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107149'>NAS-107149</a>] -         UX Improvements for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108215'>NAS-108215</a>] -         Integrate Gluster into Samba
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108347'>NAS-108347</a>] -         Storage section improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108383'>NAS-108383</a>] -         Add ACLs to API keys
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109669'>NAS-109669</a>] -         UI dependency audit
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110668'>NAS-110668</a>] -         Sharing dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110942'>NAS-110942</a>] -         remove lxml from SCALE
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100829'>NAS-100829</a>] -         Checkbox for restart services during unlock
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107006'>NAS-107006</a>] -         Display job description in task manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108291'>NAS-108291</a>] -         Investigate using SPICE instead of VNC
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108842'>NAS-108842</a>] -         SCALE: Allow custom App catalogs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108922'>NAS-108922</a>] -         UI should update chart release status based on chart release events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110126'>NAS-110126</a>] -         Allow selecting multiple source directories for cloud sync
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110368'>NAS-110368</a>] -         Show upgrade summary when trying to upgrade a chart release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110519'>NAS-110519</a>] -         New cloud sync remote: Google Photos
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110531'>NAS-110531</a>] -         Log websocket messages in debug file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110543'>NAS-110543</a>] -         New replication task field: name_regex
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110673'>NAS-110673</a>] -         Move WebDAV share form to sidebar
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110732'>NAS-110732</a>] -         Investigate automating app versions with new upstream images
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110764'>NAS-110764</a>] -         Implement Redesigned permissions/ACL forms
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110938'>NAS-110938</a>] -         Network traffic chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110964'>NAS-110964</a>] -         Storage Widget for Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110966'>NAS-110966</a>] -         Network Widget for Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110967'>NAS-110967</a>] -         View Permissions sidebar
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110983'>NAS-110983</a>] -         Document best practices for chart devs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110984'>NAS-110984</a>] -         Document return type of events generated by middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111266'>NAS-111266</a>] -         add 2 drop-downs to network interface section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111267'>NAS-111267</a>] -         add endpoint for retrieving xmit_hash_policy and lacpdu_rate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111288'>NAS-111288</a>] -         Support R-series enclosure UI on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111291'>NAS-111291</a>] -         Job log page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111292'>NAS-111292</a>] -         Improvements for Task Manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111316'>NAS-111316</a>] -         Add chelsio_adapter_config_v4 to scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111331'>NAS-111331</a>] -         Use our custom chia docker image for official app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111340'>NAS-111340</a>] -         Allow updating stable train from test train with catalog_update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111395'>NAS-111395</a>] -         Add support for policy based routing for kubernetes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111410'>NAS-111410</a>] -         Automatically update official catalog items
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111632'>NAS-111632</a>] -         SCALE 21.06 BETA: KVM change machine type
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111708'>NAS-111708</a>] -         DemoCSI: Add functionality to allow deletion of all snapshots of a dataset
</li>
</ul>

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-101423'>NAS-101423</a>] -         Display available memory in VM wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106051'>NAS-106051</a>] -         Redesign Task Manager
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108602'>NAS-108602</a>] -         Gracefully abort jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108604'>NAS-108604</a>] -         Make restarting/reloading locked attachments optional
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108779'>NAS-108779</a>] -         Add tooltip for tips on webshell page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109432'>NAS-109432</a>] -         CLONE - Gracefully abort jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109677'>NAS-109677</a>] -         Update information in WebUI repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110075'>NAS-110075</a>] -         Standartize how subscriptions are handled in webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110116'>NAS-110116</a>] -         Improve documentation of backend endpoints
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110264'>NAS-110264</a>] -         Remove AFP sharing (backend)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110275'>NAS-110275</a>] -         Bugclerk: try to set assignee for tickets created from github
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110285'>NAS-110285</a>] -         Add interfaces to at least 5 API endpoints
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110320'>NAS-110320</a>] -         Update welcome image
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110383'>NAS-110383</a>] -         Various issues with new webui implementation of directory services
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110514'>NAS-110514</a>] -         UI should show that it failed to retrieve catalogs data
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110583'>NAS-110583</a>] -         Render ix-chart dynamically in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110642'>NAS-110642</a>] -         zfs snapshot API - ability to update properties after snapshot creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110712'>NAS-110712</a>] -         add --trace-malloc arg to middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110798'>NAS-110798</a>] -         Investigate stopping database pods before taking snapshot during app upgrade
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110806'>NAS-110806</a>] -         Linter: ban unused imports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110807'>NAS-110807</a>] -         Bugclerk should set ticket status to In review on PR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110808'>NAS-110808</a>] -         Linter: ban console.log
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110820'>NAS-110820</a>] -         Allow specifying extra arguments in get_instance
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110824'>NAS-110824</a>] -         Auto refresh application list when new Catalog is added
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110827'>NAS-110827</a>] -         Linter: add max-len linter rule
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110828'>NAS-110828</a>] -         Clean up entity-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110835'>NAS-110835</a>] -         Remove Rest and Jails related code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110836'>NAS-110836</a>] -         Remove or make a plan to remove moment.js
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110837'>NAS-110837</a>] -         Add 3 linter rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110839'>NAS-110839</a>] -         Setup unit test infrastructure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110840'>NAS-110840</a>] -         Add typing to EntityWizard configuration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110841'>NAS-110841</a>] -         Make volumes-list.component.ts less bad
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110843'>NAS-110843</a>] -         Reduce amount of `any`s in webui code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110848'>NAS-110848</a>] -         Allow using a specific existing snapshot for one time replication
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110879'>NAS-110879</a>] -         Modernize webui build process
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110887'>NAS-110887</a>] -         Enable bridge STP/RSTP on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110943'>NAS-110943</a>] -         remove lxml from vm/utils on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110944'>NAS-110944</a>] -         remove lxml from vm/supervisor/supervisor_base on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110945'>NAS-110945</a>] -         remove lxml from vm/pci_linux on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110946'>NAS-110946</a>] -         remove lxml from vm/info_linux on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110947'>NAS-110947</a>] -         remove python3-lxml build dependency on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110950'>NAS-110950</a>] -         remove unused files that reference lxml on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110982'>NAS-110982</a>] -         Improve error logging in case py-libzfs fails to retrieve dataset handle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110987'>NAS-110987</a>] -         Expose `checksum` for public APIs of ZFS info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110989'>NAS-110989</a>] -         UI should consume catalog.create as a job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111014'>NAS-111014</a>] -         Add JSON input / output support for batch net_groupmap operations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111036'>NAS-111036</a>] -         Intelligently set defaults for 'acl_mode'based on 'acl_type'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111056'>NAS-111056</a>] -         SCALE: Want system performance analysis tools
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111058'>NAS-111058</a>] -         Add commonly used upgrade strategy versioning patterns
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111067'>NAS-111067</a>] -         Linter: ban boxed types
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111068'>NAS-111068</a>] -         Linter: angular-eslint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111079'>NAS-111079</a>] -         Improving type safety.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111089'>NAS-111089</a>] -         Improve type safety of resourceTransformIncomingRestData and ws jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111102'>NAS-111102</a>] -         Improve huge catalog(s) handling edge cases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111113'>NAS-111113</a>] -         Add option to replication run onetime to fail if target already exists
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111114'>NAS-111114</a>] -         snapshot data in GET dataset to mimic GET snapshot structure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111136'>NAS-111136</a>] -         Enforce Finnish notation for observables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111143'>NAS-111143</a>] -         too many calls to system.info unnecessarily
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111170'>NAS-111170</a>] -         W26 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111173'>NAS-111173</a>] -         add a private system.hostname endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111175'>NAS-111175</a>] -         Add ability to select common options for bond interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111176'>NAS-111176</a>] -         traceback in unscheduled_reboot_alert on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111178'>NAS-111178</a>] -         consistent use of quotes in dmidecode_info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111193'>NAS-111193</a>] -         Allow upgrading CI helm chart values when using catalog update tool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111194'>NAS-111194</a>] -         Document return type(s) of failover plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111195'>NAS-111195</a>] -         Document return type(s) of public endpoints of replication plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111200'>NAS-111200</a>] -         Catalog sync endpoint is a job now and UI should treat it as such
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111204'>NAS-111204</a>] -         Make chart.release.scale a job to wait for pods to be scaled up/down
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111205'>NAS-111205</a>] -         Treat start/stop action for apps as a job in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111218'>NAS-111218</a>] -         Update SCALE to Samba 4.14.5
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111234'>NAS-111234</a>] -         Add unit tests for EntityUtils.parseSchemaFieldConfig
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111235'>NAS-111235</a>] -         Refactor and add unit tests to compare-validation.ts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111236'>NAS-111236</a>] -         Add unit tests to password-validation.ts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111261'>NAS-111261</a>] -         W27 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111263'>NAS-111263</a>] -         interface return type is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111270'>NAS-111270</a>] -         Document how valid_char regex works for chart devs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111272'>NAS-111272</a>] -         Re-install scale-build if there are manual edits
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111284'>NAS-111284</a>] -         Don't allow root dataset permissions to be edited
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111290'>NAS-111290</a>] -         Red service status on share dashboard with no shares
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111303'>NAS-111303</a>] -         CLONE - Render ix-chart dynamically in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111312'>NAS-111312</a>] -         Removing barrel files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111314'>NAS-111314</a>] -         add filterable "ctdb getdbmap" to API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111315'>NAS-111315</a>] -         Renaming files to match naming convention
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111328'>NAS-111328</a>] -         Merge zfs-2.1.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111347'>NAS-111347</a>] -         W29 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111386'>NAS-111386</a>] -         xattr compat cleanup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111414'>NAS-111414</a>] -         Treat removing vdev in the UI as a job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111428'>NAS-111428</a>] -         Add an alert/warning for users when they change cidr of k8s cluster in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111442'>NAS-111442</a>] -         Hard to find how to run Cron jobs manually
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111446'>NAS-111446</a>] -         Layout improvements for Storage widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111447'>NAS-111447</a>] -         Update filesystem.default_acl_choices to accept path
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111463'>NAS-111463</a>] -         improve truenas.get_chassis_hardware on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111468'>NAS-111468</a>] -         New POSIX ACL editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111469'>NAS-111469</a>] -         Add support for horizontal radio buttons on ACL Editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111470'>NAS-111470</a>] -         Support checkbox groups for redesigned ACL editor
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111517'>NAS-111517</a>] -         graceful addition/removal of ctdb public ip addresses
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111528'>NAS-111528</a>] -         W30 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111541'>NAS-111541</a>] -         W31 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111590'>NAS-111590</a>] -         Validate gateway specified for kubernetes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111593'>NAS-111593</a>] -         More user-friendly CLI for network operations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111594'>NAS-111594</a>] -         improve wipe_disk/delete_partitions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111623'>NAS-111623</a>] -         Layout improvements for Network widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111641'>NAS-111641</a>] -         Type EntityWizard configuration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111656'>NAS-111656</a>] -         KeyError in network.py on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111662'>NAS-111662</a>] -         W32 - Improving type safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111773'>NAS-111773</a>] -         SCALE build broken after upstream packages update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111836'>NAS-111836</a>] -         Branch out feature in build system
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112081'>NAS-112081</a>] -         Do not send lots of "removed" messages when moving apps pool
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100503'>NAS-100503</a>] -         Avoid N event subscriptions to run the same code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102855'>NAS-102855</a>] -         ZoL user namespace xattrs are incompatible with FreeBSD and vice-versa
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108044'>NAS-108044</a>] -         Unable to generate debug file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108200'>NAS-108200</a>] -         SCALE fails to import boot pool when HBA is attached
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108277'>NAS-108277</a>] -         Truenas Scale : Installation failed if no disc is selected in menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108560'>NAS-108560</a>] -         Pool status will not update unless system is restarted/system panics
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108792'>NAS-108792</a>] -         [SCALE] Fix VNC Input
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109021'>NAS-109021</a>] -         Dashboard widget template error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109165'>NAS-109165</a>] -         icons on the dashboard are not aligned
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109335'>NAS-109335</a>] -         SCALE - samba auto-generated datasets aren't getting correct permissions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109476'>NAS-109476</a>] -         Full filesystem replication doesn't work incrementally
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109485'>NAS-109485</a>] -         pam_krb5(sudo:auth): parse_name failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109720'>NAS-109720</a>] -         Interrupted full replications are silently failing to resume
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109820'>NAS-109820</a>] -         SCALE Samba group write permissions do not work
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109976'>NAS-109976</a>] -         Changes in debug generation process
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110008'>NAS-110008</a>] -         rsync task ceases to work after 11.3-U5 -> 12.0-U2.1 upgrade, rsync command returned 12
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110024'>NAS-110024</a>] -         SCALE: lagg name bond0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110166'>NAS-110166</a>] -         Winbind does not start on boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110391'>NAS-110391</a>] -         Can't mirror boot-pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110404'>NAS-110404</a>] -         Main menu may disappear when resizing window
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110405'>NAS-110405</a>] -         Impossible to open a secondary menu on mobile
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110428'>NAS-110428</a>] -         UI in Virtualization page incorrectly reporting available system memory
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110515'>NAS-110515</a>] -         Threadripper 1950X incorrect temperature shown
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110575'>NAS-110575</a>] -         Wireguard Tunnel remains on passive node of HA system after failover.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110582'>NAS-110582</a>] -         Properly show summary of selected options in application's wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110616'>NAS-110616</a>] -         Make it more obvious how to get to Console Setup menu in Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110651'>NAS-110651</a>] -         Encryption options are not shown/set correctly after canceling "Add dataset" with passphrase encryption
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110665'>NAS-110665</a>] -         OpenStack Swift auth_version Invalid Version
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110671'>NAS-110671</a>] -         Middlewared is leaking enourmous amounts of memory (high CPU usage as well)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110703'>NAS-110703</a>] -         Many invalid opcodes reported by Kernel
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110754'>NAS-110754</a>] -         rsync task configuration corrupted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110760'>NAS-110760</a>] -         Entity table multiselect doesn't respect filters or pages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110773'>NAS-110773</a>] -         Fix kerberos error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110775'>NAS-110775</a>] -         [SCALE] UI Freeze/slowdown when displaying catalog info with a lot of Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110797'>NAS-110797</a>] -         Plex providing CODEC error with transcoding
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110802'>NAS-110802</a>] -         Double-click on Launch Docker Wizard breaks wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110812'>NAS-110812</a>] -         Issues when selecting disk during Scale installation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110816'>NAS-110816</a>] -         Grub config is not updated on FreeBSD bootenv activation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110825'>NAS-110825</a>] -         Refresh All apps job progress gets to 100% too quickly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110826'>NAS-110826</a>] -         inadyn is ancient and appears to be broken in Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110832'>NAS-110832</a>] -         Telegram & Email Notification Not Working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110833'>NAS-110833</a>] -         CertificateChecks traceback
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110842'>NAS-110842</a>] -         openebs does not run
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110844'>NAS-110844</a>] -         Allow retrieving snapshot(s) of dataset(s) from pool.dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110863'>NAS-110863</a>] -         Fix scrollbar on Shares Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110877'>NAS-110877</a>] -         Create storage class before doing helm action
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110883'>NAS-110883</a>] -         Remove legacy FreeBSD files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110884'>NAS-110884</a>] -         Replication Task Wizard UI issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110894'>NAS-110894</a>] -         Reinitialize udev monitor on udev polling error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110914'>NAS-110914</a>] -         SCALE smartd (smart | S.M.A.R.T.) not starting on Virtual Machine's
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110927'>NAS-110927</a>] -         No UI option to change the readonly state of a ZVOL.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110929'>NAS-110929</a>] -         Allow retrieving catalog data partially
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110930'>NAS-110930</a>] -         Improvements to kubernetes lifecycle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110931'>NAS-110931</a>] -         Raise multus log level
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110932'>NAS-110932</a>] -         Do not attempt to query chart releases if no pool is set
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110934'>NAS-110934</a>] -         Allow specifying environment variables independently
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110948'>NAS-110948</a>] -         Compile errors related to @types/d3-array
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110949'>NAS-110949</a>] -         Improve retrieving installed application(s) performance
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110952'>NAS-110952</a>] -         Clean supervisor_freebsd reference
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110953'>NAS-110953</a>] -         Removing ports folder
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110955'>NAS-110955</a>] -         Add regression tests for AFP/SMB migration param
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110957'>NAS-110957</a>] -         Out of sync data on Sharing Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110958'>NAS-110958</a>] -         Start libvirt before probing for cpu model choices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110969'>NAS-110969</a>] -         Increase verbosity of range-related idmap verrors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110972'>NAS-110972</a>] -         Add latest_human_version key in catalog items
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110974'>NAS-110974</a>] -         Always update container image(s) during app upgrade
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110976'>NAS-110976</a>] -         Print full shell pipe commands in the debug instead of obfuscated and…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110979'>NAS-110979</a>] -         fix 'NoneType' object has no attribute 'call_sync'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110980'>NAS-110980</a>] -         Make catalog.create endpoint a job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110981'>NAS-110981</a>] -         Volume List header misaligned after click Import button
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110986'>NAS-110986</a>] -         Middleware in some cases unable to retrieve vm status
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110988'>NAS-110988</a>] -         Enabling additional linter rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110998'>NAS-110998</a>] -         ACL Manager shows empty page, other issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111000'>NAS-111000</a>] -         S3 secret key cannot be shown (button show/hide doesn't work)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111006'>NAS-111006</a>] -         Submit Button for Charts Broken in 20210610 builds
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111010'>NAS-111010</a>] -         Correctly validate root uid when retrieving user object
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111011'>NAS-111011</a>] -         [EFAULT] Failed to wipe disks error with vdev removal
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111012'>NAS-111012</a>] -         Perform chown() when setting POSIX1E ACL non-recursively
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111015'>NAS-111015</a>] -         cloudsync.onedrive_list_drives called for unrelated cloud credentials
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111016'>NAS-111016</a>] -         Document return type(s) for pool plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111017'>NAS-111017</a>] -         Allow acltype to change through middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111022'>NAS-111022</a>] -         Add validation related to legacy AFP shares
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111025'>NAS-111025</a>] -         Unable to change Web Interface HTTP/HTTPS Port
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111027'>NAS-111027</a>] -         Is the email field under Services/UPS superfluous?
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111029'>NAS-111029</a>] -         GSSAPI authentication is not usable for LDAP bind
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111038'>NAS-111038</a>] -         Fix parsing error for POSIX1E getfacl output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111039'>NAS-111039</a>] -         Remove strict check for path existence in AFP validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111041'>NAS-111041</a>] -         SCALE: Missing cxgbetool for Chelsio NICs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111046'>NAS-111046</a>] -         Middleware/UI not giving optimal volblocksize for 5 wide raidz1 layout
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111050'>NAS-111050</a>] -         Incorrect group tag when adding a mask ACL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111051'>NAS-111051</a>] -         Retrieve created at property for datasets/volumes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111060'>NAS-111060</a>] -         disk.get_unused results in an error on API Incremental CI plan
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111063'>NAS-111063</a>] -         Document return types of ups plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111065'>NAS-111065</a>] -         Use correct API endpoint for disabling ACL on update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111070'>NAS-111070</a>] -         Document return type(s) of webdav plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111071'>NAS-111071</a>] -         Document return type(s) of vpn plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111073'>NAS-111073</a>] -         Fix MIT kerberos keytab handling
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111080'>NAS-111080</a>] -         Fix Enclosure Mapping for early version Mini X 3.0 Systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111081'>NAS-111081</a>] -         Fix setting default SMB ACL on dataset creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111087'>NAS-111087</a>] -         Do not read/validate all catalog item versions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111092'>NAS-111092</a>] -         [SCALE] NFS Service settings page broken - "Field was not expected"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111094'>NAS-111094</a>] -         [SCALE] Add NFS share missing local groups in dropdown list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111096'>NAS-111096</a>] -         Synchronously sync catalog on creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111098'>NAS-111098</a>] -         Manual update stuck at 0 percent from core to scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111099'>NAS-111099</a>] -         Replication progress says "total 11.12 TiB of 11.04 TiB"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111103'>NAS-111103</a>] -         [SCALE] k3s agent fatal error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111118'>NAS-111118</a>] -         incorrect help dialog box on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111123'>NAS-111123</a>] -         Not an integer when trying to generate a private key for a ssh connections
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111130'>NAS-111130</a>] -         Can't create Google Photos credentials
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111132'>NAS-111132</a>] -         Fix r10 enclosures
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111140'>NAS-111140</a>] -         SCALE 21.06 BETA: Error after imported pool from CORE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111144'>NAS-111144</a>] -         CLI: python exception while typing storage subcommand
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111145'>NAS-111145</a>] -         CLI: python exception when unknown binary specified in EDITOR env var
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111163'>NAS-111163</a>] -         Unable to revoke certificate from OpenVPN Server Service access
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111164'>NAS-111164</a>] -         CLI: Query of Account -> Group does not show 'group' as viable option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111165'>NAS-111165</a>] -         CPU dashboard widget layout buggy with 128 thread CPU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111174'>NAS-111174</a>] -         Fix api tests for catalog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111188'>NAS-111188</a>] -         UI Debug failing to complete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111192'>NAS-111192</a>] -         Remove cached content of a catalog after deleting it
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111201'>NAS-111201</a>] -         Treat openebs/zfs-driver image as system internal image
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111202'>NAS-111202</a>] -         Properly show which image(s) would be upgraded in UI on app upgrade
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111203'>NAS-111203</a>] -         Error(s) are not rasied by UI on app upgrade and is stuck on loop
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111210'>NAS-111210</a>] -         Improvements to revoking a certificate/ca
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111215'>NAS-111215</a>] -         Bug fix for validating acltype when parent ds does not exist
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111217'>NAS-111217</a>] -         Disable containerd in systemd preset file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111223'>NAS-111223</a>] -         Fix R40 to comply with enclosure management nep specified single mapped enclosure to UI.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111226'>NAS-111226</a>] -         Mark login password as private
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111227'>NAS-111227</a>] -         After upgrading app UI does not show newer app version in tile
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111228'>NAS-111228</a>] -         SMBd startup fails when connecting to Active Directory
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111229'>NAS-111229</a>] -         After rollback app UI does not show rollbacked app version in tile
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111240'>NAS-111240</a>] -         Add `who` string to ACL output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111243'>NAS-111243</a>] -         Remove netatalk from build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111246'>NAS-111246</a>] -         Error when trying to save NFS Acl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111247'>NAS-111247</a>] -         Add WDS support for Win10 clients, so they can discover SCALE hosts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111248'>NAS-111248</a>] -         Convert JSON validation errors ValidationErrors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111254'>NAS-111254</a>] -         Remove API test for MULTIPROTOCOL_AFP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111259'>NAS-111259</a>] -         Fix R20 to comply to enclosure management NEP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111264'>NAS-111264</a>] -         Some themes do not display all text
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111273'>NAS-111273</a>] -         Fix R50 to comply with enclosure NEP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111283'>NAS-111283</a>] -         Error when creating ubuntu vm in Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111286'>NAS-111286</a>] -         Boot environment -> Add is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111287'>NAS-111287</a>] -         Boot environment -> Clone is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111289'>NAS-111289</a>] -         reporting.realtime updates are received on all pages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111295'>NAS-111295</a>] -         [SCALE] hubernetes hostnames periodically become unreachable/unresponsive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111296'>NAS-111296</a>] -         Update certificate/ca return type entry
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111305'>NAS-111305</a>] -         Reporting database size (1.08 GB) is larger than 1 GiB.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111309'>NAS-111309</a>] -         [scale]BUG with app version control
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111317'>NAS-111317</a>] -         traceback when creating failover type bond on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111324'>NAS-111324</a>] -         traceback when setting default route on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111325'>NAS-111325</a>] -         properly handle internal interfaces when configuring default route on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111333'>NAS-111333</a>] -         Pool operations (creation or deletion) cause critical alerts on NVMe drives
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111334'>NAS-111334</a>] -         CoreService Tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111337'>NAS-111337</a>] -         dhclient is stopped for random interfaces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111339'>NAS-111339</a>] -         Add iptables rules with counters to debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111342'>NAS-111342</a>] -         Unable to edit email alert service in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111343'>NAS-111343</a>] -         Additional Enclosure Fixes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111344'>NAS-111344</a>] -         Log error(s) if we fail to add/remove iptable rules for k8s
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111348'>NAS-111348</a>] -         CallError from k8s when k8s isn't used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111350'>NAS-111350</a>] -         only log pyroute2.NDB errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111353'>NAS-111353</a>] -         fix pyroute2.NDB typo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111360'>NAS-111360</a>] -         Add ipsets to debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111368'>NAS-111368</a>] -         Bug fix for syslog log level
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111369'>NAS-111369</a>] -         Bug fix for chart release api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111371'>NAS-111371</a>] -         Merge multiple calls for creating an SSH connection into one
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111376'>NAS-111376</a>] -         can't disable VM autostart in GUI in 21.07-MASTER-20210703-212917
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111390'>NAS-111390</a>] -         Enclosure Management fix for R20A.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111391'>NAS-111391</a>] -         View permissions sidebar doesn't appear on long lists
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111392'>NAS-111392</a>] -         Smart Tests page does not show anything
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111397'>NAS-111397</a>] -         untilDestroyed bugs on DiskListComponent
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111399'>NAS-111399</a>] -         fix NDB() instantiation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111402'>NAS-111402</a>] -         Fix api tests for ups plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111406'>NAS-111406</a>] -         Fix for mini-3.0-xl+ 2.5 inch drive bays being swapped.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111415'>NAS-111415</a>] -         Update chart.release.scale api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111416'>NAS-111416</a>] -         Updated to latest nightly, TrueNAS-SCALE-21.07-MASTER-20210715-052922
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111420'>NAS-111420</a>] -         SCALE 21.06 BETA: Cirrus video device in libvirt xml when removing all emulated displays
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111424'>NAS-111424</a>] -         Bug fix for retrieving catalog item versions in api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111427'>NAS-111427</a>] -         Bug fix for catalog item migration handling
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111429'>NAS-111429</a>] -         crash in ha_permission()
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111430'>NAS-111430</a>] -         Allow running update-grub even if vdev is DEGRADED (too many errors)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111433'>NAS-111433</a>] -         Adding no-implicit this to introduce stricter checks.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111435'>NAS-111435</a>] -         NFS under "Reporting" does not show data
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111436'>NAS-111436</a>] -         500 on /api/docs in CI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111443'>NAS-111443</a>] -         mc works poorly in the Shell
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111444'>NAS-111444</a>] -         Middleware takes up a lot of CPU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111460'>NAS-111460</a>] -         webUI is showing incorrect information
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111461'>NAS-111461</a>] -         [SCALE] Tunables settings error - UI missing tunable type dropdown, defaults to 'loader'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111465'>NAS-111465</a>] -         User is not redirected to ACL editor after SMB home share is created
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111482'>NAS-111482</a>] -         Add configuration entries for SMB multichannel
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111483'>NAS-111483</a>] -         Nothing happens after testing network interface configuration changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111485'>NAS-111485</a>] -         Disabling Cloud Sync tasks throws error about PoolScrub
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111494'>NAS-111494</a>] -         deprecation warning for middleware test/api2/runtest.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111496'>NAS-111496</a>] -         fix and improve webdav api tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111500'>NAS-111500</a>] -         ACL type mismatch when stripping POSIX ACL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111505'>NAS-111505</a>] -         Add support for fuse-mounted paths to filesystem plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111511'>NAS-111511</a>] -         automatic configuration of ctdb clustering daemon
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111531'>NAS-111531</a>] -         make sure xmit hash and lacpdu rate are reported
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111532'>NAS-111532</a>] -         fix xmit-hash and lacpdu rate on iface update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111536'>NAS-111536</a>] -         Reporting database continues to grow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111538'>NAS-111538</a>] -         raise CallError on cluster api events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111542'>NAS-111542</a>] -         Traceback starting up middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111543'>NAS-111543</a>] -         Replace netcli with new CLI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111556'>NAS-111556</a>] -         Bug fix for iptables getting out of sync
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111557'>NAS-111557</a>] -         Can't Create Link Aggregation Latest Nightly TrueNAS-SCALE-21.07-MASTER-20210727-152922
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111558'>NAS-111558</a>] -         Prevent boot installation into installation media itself
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111560'>NAS-111560</a>] -         UI bug when going to Alerts -> Settings Cog -> Email page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111561'>NAS-111561</a>] -         Html appears as text in Slack alerts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111564'>NAS-111564</a>] -         Correct vm.query event payload to match vm_entry schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111565'>NAS-111565</a>] -         UI should update vm event handling logic
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111568'>NAS-111568</a>] -         Bug fix for collectd configuration generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111570'>NAS-111570</a>] -         Wait when adding/removing iptables rules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111571'>NAS-111571</a>] -         Make acltype=nfsv4 the default on Linux
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111572'>NAS-111572</a>] -         SCALE POSTINIT scripts aren't executing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111575'>NAS-111575</a>] -         Fix label on the Network widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111576'>NAS-111576</a>] -         [scale/apps] Specific field in charts are not remembered on edit.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111578'>NAS-111578</a>] -         Clear cached chart releases when stopping k8s
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111582'>NAS-111582</a>] -         Swap size should consider boot drive size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111583'>NAS-111583</a>] -         No Reportng Data Latest TrueNAS SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111597'>NAS-111597</a>] -         Retrieve more useful information for app upgrade summary
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111603'>NAS-111603</a>] -         Fix quota alert for dataset owner
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111605'>NAS-111605</a>] -         TrueNAS SCALE MinIO App - GUI does not work
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111613'>NAS-111613</a>] -         Improving naming convention
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111617'>NAS-111617</a>] -         Alignment for radio buttons in Alerts > Email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111620'>NAS-111620</a>] -         Cannot rename boot environment
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111621'>NAS-111621</a>] -         No usable error when trying to add smb idmap
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111628'>NAS-111628</a>] -         Failed to check for alert CoreFilesArePresent
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111631'>NAS-111631</a>] -         fuse mount gluster volumes with acl support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111633'>NAS-111633</a>] -         Bug fix for creating a zvol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111655'>NAS-111655</a>] -         Fix check for passdb backend type
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111668'>NAS-111668</a>] -         Fix free space on storage widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111670'>NAS-111670</a>] -         Fix DS_TYPE_LDAP idmap generation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111671'>NAS-111671</a>] -         Fix foreign groupmap alias removal
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111674'>NAS-111674</a>] -         only eventsd.delete if glustereventsd is running
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111682'>NAS-111682</a>] -         Excessive smartctl usage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111683'>NAS-111683</a>] -         Fix smb plugin issues causing test_435_smb_registry failures
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111689'>NAS-111689</a>] -         Fixes for test_425_smb_protocol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111690'>NAS-111690</a>] -         call enclosure.query once in disk.sync_all
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111693'>NAS-111693</a>] -         fix enclosure.sync_zpool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111695'>NAS-111695</a>] -         Upload config: File is bigger than 10MiB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111697'>NAS-111697</a>] -         Fix idmap create / delete methods
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111703'>NAS-111703</a>] -         Add bpfcc-tools
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111706'>NAS-111706</a>] -         Fixes for base SMB regression tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111707'>NAS-111707</a>] -         DemoCSI: Allow setting refreservation and refquota properties simultaneously
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111710'>NAS-111710</a>] -         Fix groupmap tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111712'>NAS-111712</a>] -         zettarepl logs are being truncated, hindering investigation of errors.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111714'>NAS-111714</a>] -         Enable SMB2/3 aapl extensions prior to AFP compat tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111715'>NAS-111715</a>] -         Add global parameter handling for guest access
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111716'>NAS-111716</a>] -         Fix dataset delete dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111722'>NAS-111722</a>] -         SQL foreign key error when trying to delete a cloudsync credential
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111726'>NAS-111726</a>] -         Chart is broken on Network widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111727'>NAS-111727</a>] -         Shares tables collapse and show nothing on smaller screens
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111734'>NAS-111734</a>] -         When a dataset is deleted, underlying resources are silently deleted too
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111738'>NAS-111738</a>] -         Directory services FAULTED when expected DISABLED
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111740'>NAS-111740</a>] -         Bug fix for specifying env variables for minio app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111741'>NAS-111741</a>] -         Stop containerd explicitly after stopping docker
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111742'>NAS-111742</a>] -         iSCSI Targets table doesn't automatically refresh when new item is added
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111744'>NAS-111744</a>] -         Fix SSHd IPV6 link local ListenAddress
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111747'>NAS-111747</a>] -         Cannot add Google Drive in Backup Credentials
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111749'>NAS-111749</a>] -         Fix IP Addresses on Network widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111758'>NAS-111758</a>] -         fix IndexError in network.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111762'>NAS-111762</a>] -         Remove Samba passdb binding from middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111763'>NAS-111763</a>] -         Fix homedir copy on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111767'>NAS-111767</a>] -         UI gets stuck when error occurs trying to create new SSH Connection
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111768'>NAS-111768</a>] -         `replication.count_eligible_manual_snapshots gives 'index out of range' error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111770'>NAS-111770</a>] -         Adapt Minio app to conform to upstream configuration for TLS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111771'>NAS-111771</a>] -         Expose machinaris api port for workers usage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111772'>NAS-111772</a>] -         Fix multiple issues with krb nfs4 config in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111785'>NAS-111785</a>] -         Fix tdb directory setup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111789'>NAS-111789</a>] -         Perform direct smb config write when updating with AD domain name
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111792'>NAS-111792</a>] -         Allow setting permissions on /root/.ssh
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111794'>NAS-111794</a>] -         Move static nsswitch.conf to base install
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111795'>NAS-111795</a>] -         Error when updating Alpha to Beta
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111796'>NAS-111796</a>] -         Fix lazy initialization of directory services cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111799'>NAS-111799</a>] -         Fix scale installer
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111806'>NAS-111806</a>] -         Add tests for directory services user/group cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111810'>NAS-111810</a>] -         Fixes #116 by swapping MINIO_ACCESS_KEY and MINIO_SECRET_KEY
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111811'>NAS-111811</a>] -         Current rest-api only returns `text/plain` responses
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111813'>NAS-111813</a>] -         Remove check for privatedir path in passdb_list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111816'>NAS-111816</a>] -         Improve acltype retrieval based on path
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111819'>NAS-111819</a>] -         Fix taking vmware-aware manual snapshots
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111820'>NAS-111820</a>] -         Setting id on USER_OBJ or GROUP_OBJ creates another USER ace
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111822'>NAS-111822</a>] -         Stripping acl produces inconsistent permissions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111825'>NAS-111825</a>] -         grub2 failing to build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111828'>NAS-111828</a>] -         Fix regression on network chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111832'>NAS-111832</a>] -         Ban ViewEncapsulation.None
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111837'>NAS-111837</a>] -         Make sure we start nfs when user requests it
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111843'>NAS-111843</a>] -         Fix typo in _strip_acl_posix1e call
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111846'>NAS-111846</a>] -         Bug fix for string initialization in cython
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111847'>NAS-111847</a>] -         Enforce global configuration reload on share guest access change
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111848'>NAS-111848</a>] -         Improve share enumeration test
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111849'>NAS-111849</a>] -         Fix typo in smb.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111854'>NAS-111854</a>] -         [SCALE] SMB only works after reloading a Share
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111877'>NAS-111877</a>] -         Infinite loading when switching to Rsync Module
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111938'>NAS-111938</a>] -         Create idmap service to wrap around winbind
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111940'>NAS-111940</a>] -         [SCALE] Storage > Apply Permissions Recursively checkbox Is not getting checked & applied
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111951'>NAS-111951</a>] -         Fix update dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111954'>NAS-111954</a>] -         Fix GMail thread safety
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111958'>NAS-111958</a>] -         Properly retrieve snapshots in bootenv plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111975'>NAS-111975</a>] -         [SCALE] Can't convert POSIX Dataset into NFSv4 Dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111997'>NAS-111997</a>] -         Properly retrieve registry config and ACLs in SMB debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112004'>NAS-112004</a>] -         [SCALE] Can't save changes to VMs general settings because the UI wants a GPU to be selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112013'>NAS-112013</a>] -         Storage Widget on Dashboard Reporting Incorrect Values
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112020'>NAS-112020</a>] -         Copies must be a string when it is
</li>
</ul>

{{< /expand >}}

## 21.06-BETA.1

{{< expand "21.06-BETA.1" >}}

**June 22, 2021**

After a very successful ALPHA cycle with thousands of deployed and tested systems, iXsystems is excited to announce the release of TrueNAS SCALE 21.06, which marks the official beginning of BETA. SCALE is now being tested for general NAS usage, scale-out, and application deployment. Many thanks to the thousands of community developers and testers who have contributed to the effort.

As our initial [community post](https://www.truenas.com/community/threads/truenas-scale-announcement-and-nightly-image-downloads.85927/) and [blog](https://www.ixsystems.com/blog/truenas-scale-release-plan/) indicated, TrueNAS SCALE is defined by its acronym:

**S**cale-Out ZFS: Capacity & Performance</br>
**C**onverged compute and storage</br>
**A**ctive-Active reliability</br>
**L**inux containers & virtualization: Docker, K8s, and KVM</br>
**E**asy Setup & Management</br>

With TrueNAS SCALE 21.06 and the recent release of [TrueCommand 2.0](https://www.truenas.com/docs/truecommand/), every element in the acronym has been delivered and is ready for BETA testing on the path to RELEASE later this year. The major new capabilities of TrueNAS SCALE 21.06 include:

* **SMB ACLs**: TrueNAS CORE supports NFSv4 and SMB ACLs, based on OpenZFS with FreeBSD-compatible extended attributes. TrueNAS SCALE includes an iXsystems enhancement to Linux which also allows importing of TrueNAS pools while keeping the same extended attributes functional. This is the final piece which allows migration of storage from TrueNAS CORE to SCALE.

* **Applications**: Third-party applications can now be deployed as single (Docker) containers or “pods” of containers using Helm charts with dynamic, customizable configurations. TrueNAS SCALE 21.06 also includes the ability to use one or more community-provided application repositories. One of our community members (Ornias) has built an extensive library of applications called [TrueCharts](https://github.com/truecharts/catalog), which also provides a process for users to build and customize their own libraries.

* **Scale-Out ZFS**: TrueCommand 2.0 provides a cluster volumes interface for TrueNAS SCALE systems. This 
 enables ZFS datasets to be pooled together as cluster volumes which span multiple nodes. Cluster volumes can have a variety of redundancy properties including 3-way Mirrors, N+1, and N+2. Each cluster volume can then be shared with GlusterFS natively. Support for clustered SMB access will be available in August with SCALE 21.08.

[TrueNAS SCALE documentation](https://www.truenas.com/docs/scale/) has also reached its BETA phase. It is based on the greatly improved documentation of TrueNAS CORE. In addition, there are Developer Notes (retired) and Release Notes. Even if you aren’t ready to make the leap, please review the docs and let us know if you have any questions.

We appreciate the [community feedback](https://www.truenas.com/community/forums/truenas-scale-discussion/) and [bug reports](https://jira.ixsystems.com/) and hope to get all those features to RELEASE quality faster. A special thanks also goes to the large number of awesome community members who joined the development and test team. We’ve really appreciated your contributions and teamwork and it has greatly contributed to the accelerated development process.  

{{< /expand >}}

## 21.04-ALPHA.1

{{< expand "21.04-ALPHA.1" >}}

**April 22, 2021**

After a very successful development cycle with thousands of downloads and deployments, iXsystems is pleased to announce TrueNAS SCALE 21.04 is now available!  This release is planned to be the last ALPHA version on the path toward BETA.  TrueNAS SCALE 21.04 is based on Debian “Bullseye” Linux and includes:

<ul style="list-style: none;">
  <li><b>KVM Virtualization</b>: Mature Hypervisor with good reliability, Guest OS support, and enterprise features. This hypervisor is performing well in the field with our early adopters. In a future version, we plan to <a href='https://kubevirt.io/'>integrate it with Kubernetes</a> so that VMs and containers can be deployed from a common user interface and API.</li>
  <li><b>Kubernetes</b>: 3rd Party Applications can now be deployed as a single (docker) image or “pods” of containers. Using Helm Charts, complex applications can now be easily deployed with dynamic charts, giving users fine-grained control and flexibility. TrueNAS SCALE 21.04 now includes the ability to utilize community-provided catalogs, including <a href='https://github.com/truecharts/apps'>TrueCharts</a>.</li> 
  <li><b>GPU Passthrough</b>: SCALE 21.02 introduced Intel QuickSync GPU passthrough to containers. 21.04 improves this support by bringing NVIDIA GPU/CUDA passthrough to the UI and containers as well. Now containers which have GPU offload capabilities, such as Plex, can take advantage of a wider-range of GPU hardware. The sharing of GPU resources across multiple containers simultaneously is also supported.</li>
  <li><b>Scale-out ZFS</b>: Cluster volumes which span multiple nodes and ZFS pools can be created to provide scalable and robust data stores. The web UI for these is included  in TrueCommand 2.0 which is <a href='https://www.truenas.com/docs/truecommand/devnotes/#nightly-docker-images'>available as a nightly image</a>.  
</ul>

The UI, while similar to TrueNAS CORE, has also been improved with some new UX enhancements across the ‘Data Protection’ and ’Sharing’ sub-sections. Further UX improvements are expected to arrive in version 21.06.  

In the 21.02 version, we also introduced the new [TrueNAS CLI](https://www.truenas.com/community/threads/introducing-the-new-truenas-cli.90741/) that uses the API and persists all changes. This CLI will make it easier to script the set-up and configuration of TrueNAS.  Feedback on the CLI has been very positive and provided much help in us rapidly maturing it for field-use.

In March, the [TrueNAS CORE documentation](https://www.truenas.com/docs/hub/) received a major facelift which greatly improved navigation and ease of use. TrueNAS SCALE documentation is taking shape as a clone of TrueNAS CORE. [TrueNAS SCALE documentation](https://www.truenas.com/docs/hub/scale/) is minimal at the moment and relies on its similarity to TrueNAS CORE in addition to the Developer Notes (retired) and Release Notes. 

We appreciate the [community feedback](https://www.ixsystems.com/community/forums/truenas-scale-discussion/) and [bug reports](https://jira.ixsystems.com/) and hope to get SCALE to production quality faster. A special thanks also goes to the large number of community members who joined the development and test team. We’ve really enjoyed your contributions and teamwork and it has greatly contributed to the accelerated development process.

### Software Features

#### Verified

Verified Features are generally working in SCALE. Minor bugs could be present.

* Pool Management
* SMB Shares
* iSCSI Shares
* NFS Shares
* S3 Shares
* AFP Shares
* AD / LDAP Directory Services
* Online / Offline updating
* Virtual Machines (Using KVM)
* WebDAV
* Monitoring, Alerting and Reporting
* POSIX 1e support
* Boot Environments
* SSH Credentials
* ZFS Encryption
* Cloud Sync
* Replication
* TrueCommand Cloud connections
* [Applications UI]({{<relref "/SCALE/SCALEUIReference/Apps/UsingApps.md" >}})

#### Provisional

These features have been added, but have known issues or are not fully feature-complete.
Please use only with caution.

* Command Line Interface. To access, log in to the web interface and click **System Settings > Shell**. Enter `cli` to activate the interface and `help` to see a list of options.
* Tasks:
  * Cron
  * Init/Shutdown Scripts
  * S.M.A.R.T. testing
  * Resilver prioritization
  * Periodic Snapshots
  * Rsync
  * Scrub
* Docker Images deployed as Helm Charts with Kubernetes NVIDIA / Intel Quicksync GPU passthrough (CLI)
* Wireguard (CLI)
* Networking and Settings UX Refresh
* OpenVPN Client and Server
* Two-factor authentication
* Certificate Management

#### Experimental

These features are still in early development and will be landing in Nightly images of SCALE in the near future. 

* Clustered Datasets API support for TrueCommand
* TrueCommand Clustering UI for SCALE
* NFSv4 ACL support


### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104330'>NAS-104330</a>] -         Remove NIS support for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105932'>NAS-105932</a>] -         Add a few more ACMD DNS Authenticators
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107219'>NAS-107219</a>] -         Allow no password sudo with commands (API)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108291'>NAS-108291</a>] -         Investigate using SPICE instead of VNC
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108322'>NAS-108322</a>] -         Applications UI implementation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108574'>NAS-108574</a>] -         Add TLS support for Minio chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108692'>NAS-108692</a>] -         Ability to retrieve k8s pods logs in middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108957'>NAS-108957</a>] -         Show chart release events in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109169'>NAS-109169</a>] -         Config upload / factory reset for TN HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109303'>NAS-109303</a>] -         Introduce concept of changelog for chart release upgrades
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109315'>NAS-109315</a>] -         Push openzfs/catalog validation docker images on master update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109316'>NAS-109316</a>] -         Custom Catalogs Support in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109381'>NAS-109381</a>] -         Report installation and first boot versions on TrueNAS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109446'>NAS-109446</a>] -         Show pod logs in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109458'>NAS-109458</a>] -         Need "-d sat" on RI-SSD drives in debug/SMART
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109537'>NAS-109537</a>] -         Have readable/better ACME authenticator field names
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109538'>NAS-109538</a>] -         Detach used PCI devices automatically
</li>
</ul>

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108602'>NAS-108602</a>] -         Gracefully abort jobs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109029'>NAS-109029</a>] -         Allow user to configure GPU in Launch Docker image wizard in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109153'>NAS-109153</a>] -         Implement entity-empty on entity-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109154'>NAS-109154</a>] -         Implement Entity-empty on Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109159'>NAS-109159</a>] -         Update rendering for a list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109172'>NAS-109172</a>] -         System Advanced Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109202'>NAS-109202</a>] -         Data Protection Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109240'>NAS-109240</a>] -         Have a spinner while loading chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109256'>NAS-109256</a>] -         Move Email link to Alerts Menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109257'>NAS-109257</a>] -         Move Guide link to topbar
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109258'>NAS-109258</a>] -         Remove Misc page from UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109271'>NAS-109271</a>] -         We should allow selecting apps from app tiles for bulk actions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109278'>NAS-109278</a>] -         Allow specifying properties for ix volumes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109280'>NAS-109280</a>] -         Retrieve only desired properties when loading storage page in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109305'>NAS-109305</a>] -         Allow chart devs to have more control on values for helm release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109312'>NAS-109312</a>] -         Chart Release creation should be a wizard like "launch docker image"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109314'>NAS-109314</a>] -         Allow saving preferred train of a catalog for the user
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109326'>NAS-109326</a>] -         Show warning when adding sysctls
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109345'>NAS-109345</a>] -         Add validation for $ref types in catalog_validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109442'>NAS-109442</a>] -         Investigate cleaning up challenges similar to how certbot does for ACME
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109468'>NAS-109468</a>] -         Investigate having a sane version for applications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109469'>NAS-109469</a>] -         Investigate using PV/PVC for storage in Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109479'>NAS-109479</a>] -         Implement entity-empty on credentials/certificates cards
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109559'>NAS-109559</a>] -         Allow setting a container to be privileged in the UI for ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109591'>NAS-109591</a>] -         Implement entity-empty on the Storage page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109601'>NAS-109601</a>] -         Expose consolemsg property in System General
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109638'>NAS-109638</a>] -         send signals to fenced based on zpool events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109677'>NAS-109677</a>] -         Update information in WebUI repo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109804'>NAS-109804</a>] -         Scale: Implement column sorting in entity-tree-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109859'>NAS-109859</a>] -         remove incorrect verbiage for iscsi
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109914'>NAS-109914</a>] -         FUSE mnt/umnt gluster volumes when the volume is started/stopped/deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109990'>NAS-109990</a>] -         improve nfs debug section for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109999'>NAS-109999</a>] -         gluster.localevents.send is not a job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110023'>NAS-110023</a>] -         Remove custom scrollbar implementation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110029'>NAS-110029</a>] -         make public api endpoint for retrieving unique system hash
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110053'>NAS-110053</a>] -         fix nvme drive detection on SCALE
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100503'>NAS-100503</a>] -         Avoid N event subscriptions to run the same code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107243'>NAS-107243</a>] -         Unable to passthrough GPU pci devices in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107508'>NAS-107508</a>] -         Unable to install TrueNAS Scale in UEFI mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108154'>NAS-108154</a>] -         Limit number of simultaneous replications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108202'>NAS-108202</a>] -         bad signature because OCSP stapling not activated in the nginx config file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108421'>NAS-108421</a>] -         Missing stats in virtual memory (psutil)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108560'>NAS-108560</a>] -         Pool status will not update unless system is restarted/system panics
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108599'>NAS-108599</a>] -         SMB shares not accessible after reboot until avahi (mDNS) is restarted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108630'>NAS-108630</a>] -         Bad key labels for the UPS battery statistics and time remaining graphs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108737'>NAS-108737</a>] -         TNSCALE - Upgrading via a new ISO wipes the initial image
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108799'>NAS-108799</a>] -         20.12 TrueNAS SCALE USB ISO unknown filesystem
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108854'>NAS-108854</a>] -         Mandatory field SAN when creating new CA Certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108879'>NAS-108879</a>] -         Scale - grub.cfg changes for console boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108921'>NAS-108921</a>] -         Allow users to disable container image updates in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108924'>NAS-108924</a>] -         Edit ZVOL → wrong compression property selected by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108938'>NAS-108938</a>] -         SCALE - If network bridge is set, kube-bridge make WebUI unreachable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108956'>NAS-108956</a>] -         Can not resume "import disk" after reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108975'>NAS-108975</a>] -         Boot Pool Status in GUI is empty
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108990'>NAS-108990</a>] -         Aborted disk import job is displayed as completed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109005'>NAS-109005</a>] -         Shell does not display Greek characters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109014'>NAS-109014</a>] -         SMART not reporting properly on SAS drives since r5022. Was working in r4883
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109020'>NAS-109020</a>] -         SSH service failed to start - After Upgrade from Freenas - Hostkey missing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109034'>NAS-109034</a>] -         Emailing alerts sometimes happens before the network interface is online (and fails)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109041'>NAS-109041</a>] -         Overlapping icons
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109042'>NAS-109042</a>] -         Entity-form checkboxes breaking field alignment
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109052'>NAS-109052</a>] -         Idmap GUI issue after adding trusted domain.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109074'>NAS-109074</a>] -         Add user form template display error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109077'>NAS-109077</a>] -         Editing disk device of VM does not show up already selected zvol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109087'>NAS-109087</a>] -         UI dashboard takes very long to show up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109102'>NAS-109102</a>] -         SCALE TFTP does not affect config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109134'>NAS-109134</a>] -         CLONE - Fix the year displayed in Display System Processes and the Shell
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109173'>NAS-109173</a>] -         middleware job - re-raise existing CallError
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109177'>NAS-109177</a>] -         Clean up LDAP error messages and fix call to set ldap passwd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109183'>NAS-109183</a>] -         Disk usage sorting is alphaneumeric, not by actual space used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109192'>NAS-109192</a>] -         TrueNAS Scale and plex Hardware accleration adding support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109193'>NAS-109193</a>] -         Bring kdump-tools back in TN Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109197'>NAS-109197</a>] -         traceback in CLI system->boot->get_disks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109206'>NAS-109206</a>] -         add interface validation in ctdb.public.ip.create
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109220'>NAS-109220</a>] -         Installing TrueNAS Scale Nightly 02. Febuary fails with "no space left on volume /dev/sda" on a 300GB SAS drive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109232'>NAS-109232</a>] -         UI allows modifying boolean checkbox when editable is false
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109237'>NAS-109237</a>] -         Cannot create ACME Certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109261'>NAS-109261</a>] -         After adding CSR, page needs to be refreshed to see the new CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109269'>NAS-109269</a>] -         We have some unexpected text remaining after certificate deletion in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109270'>NAS-109270</a>] -         Inconsistent extension form while creating CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109273'>NAS-109273</a>] -         SMB share is unavailable because it uses a locked dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109281'>NAS-109281</a>] -         Application names cannot be modified once installed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109289'>NAS-109289</a>] -         Test - SCALE-21.02- ALPHA (Angelfish) Sprint 1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109300'>NAS-109300</a>] -         Truenas Scale installer install disk selection does not  list drives past sdz i.e. sdaa...
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109307'>NAS-109307</a>] -         Restart services dependent on acme certs when they renew
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109310'>NAS-109310</a>] -         New Firmware for EOL E16 Shelf validated
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109311'>NAS-109311</a>] -         OpenStack Swift auth_version verification fails 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109313'>NAS-109313</a>] -         Add validation for app train names
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109321'>NAS-109321</a>] -         Add basic pseudo service for directory services cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109325'>NAS-109325</a>] -         fix check_path_resides_within_volume wrt to gluster paths
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109327'>NAS-109327</a>] -         Remove temporary wrapper to start kubernetes service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109328'>NAS-109328</a>] -         Register events of services as private which are private themselves
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109336'>NAS-109336</a>] -         Delete snapshots in descendant filesystems as well on chart release upgrade
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109341'>NAS-109341</a>] -         VM libvirtError - internal error: client socket is closed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109344'>NAS-109344</a>] -         Keep track of catalog repo/branches for installed chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109350'>NAS-109350</a>] -         CLONE - Bad key labels for the UPS battery statistics and time remaining graphs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109351'>NAS-109351</a>] -         systemd-sysv-generator - console warning for missing native systemd unit file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109370'>NAS-109370</a>] -         Column for Disk Serial number
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109371'>NAS-109371</a>] -         Can't delete VM without deleting snaps first
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109388'>NAS-109388</a>] -         disk.get_unused isn't returning a complete list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109398'>NAS-109398</a>] -         Replication of ZVOLs stopped working after upgrade from 11.3-U5 to 12.0-U2
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109403'>NAS-109403</a>] -         Replication task prograss is showing wrong units
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109405'>NAS-109405</a>] -         Trying to add a cloud sync job complains about no folder attribute defined
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109408'>NAS-109408</a>] -         LSI3008 firmware image not found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109411'>NAS-109411</a>] -         Add encryption summary for pools in debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109412'>NAS-109412</a>] -         CPU Usage graph: 'idle' is always pegged at 100%
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109417'>NAS-109417</a>] -         Set zvol_volmode to 2 in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109418'>NAS-109418</a>] -         Properly set error code if dataset is busy on deletion
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109420'>NAS-109420</a>] -         libvirtd.core on upgrade to 12.0-U2
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109428'>NAS-109428</a>] -         UI displays an ACME certificate as a CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109429'>NAS-109429</a>] -         UI incorrectly displays certificate type value when creating CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109430'>NAS-109430</a>] -         Improve error handling for directory services
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109431'>NAS-109431</a>] -         UI does not show null selected entry in enum for chart release edit/create form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109434'>NAS-109434</a>] -         Resolve issues with joining Active Directory Domains
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109435'>NAS-109435</a>] -         API Call systemGeneralUiRestartGet gives no response
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109440'>NAS-109440</a>] -         Fix migration revision id
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109441'>NAS-109441</a>] -         Properly send events for event sources when arguments are specified
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109443'>NAS-109443</a>] -         UI should retrieve ACME DNS authenticator choices from middleware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109448'>NAS-109448</a>] -         Properly reload/restart services dependent on ACME certs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109449'>NAS-109449</a>] -         TrueNAS Scale: cannot select UPS driver
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109451'>NAS-109451</a>] -         fix ctdb.general.ips
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109452'>NAS-109452</a>] -         disk.query doesn't fire event on removal
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109454'>NAS-109454</a>] -         Improve handling for corefile alerts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109456'>NAS-109456</a>] -         deprecate internal uses of system.is_freenas
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109462'>NAS-109462</a>] -         [SCALE] Can't unlock encrypted zfs pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109467'>NAS-109467</a>] -         SCALE 21.02 - certificate import not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109472'>NAS-109472</a>] -         DIsable pagination on services page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109473'>NAS-109473</a>] -         "File Ticket" form link to JIRA is indistinguishable from the rest of the text
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109474'>NAS-109474</a>] -         Reconfigure zettarepl_file logger on system dataset reconfiguration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109480'>NAS-109480</a>] -         unify failover.** api calls to a single entity
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109481'>NAS-109481</a>] -         coredns container keeps restarting since install
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109483'>NAS-109483</a>] -         Telegram Notification Not Formatting HTML
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109484'>NAS-109484</a>] -         Upgrade of Truenas Scale from nightly 2021-02-06 to 2021-02-18 breaks users
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109487'>NAS-109487</a>] -         nslcd.service failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109490'>NAS-109490</a>] -         Use the correct verbiage when Applying Pending Updates for HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109491'>NAS-109491</a>] -         cache if a system is licensed for HA (failover.licensed)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109495'>NAS-109495</a>] -         General Settings broken after page reload
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109497'>NAS-109497</a>] -         change cluster_events API to mount all gluster volumes based on events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109498'>NAS-109498</a>] -         add gluster FUSE api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109509'>NAS-109509</a>] -         Replication says finished, but actually has error "cannot receive org.truenas:managedby property"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109510'>NAS-109510</a>] -         Destination dataset already exists and is it's own encryption root.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109513'>NAS-109513</a>] -         TrueNAS Scale: UPS shutdown command is incorrect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109520'>NAS-109520</a>] -         TrueNAS Scale: UPS (NUT) service fails to start correctly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109522'>NAS-109522</a>] -         Can't reconfigure S3 AkSk on the same dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109523'>NAS-109523</a>] -         S3 listen only to https
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109526'>NAS-109526</a>] -         Use get_instance endpoint when using middleware call
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109528'>NAS-109528</a>] -         ignore `docs` folder for train validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109531'>NAS-109531</a>] -         pool.dataset.query should not return the boot pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109532'>NAS-109532</a>] -         ix-applications content (folders) not moved when pools changed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109533'>NAS-109533</a>] -         Use colon to concatenate repository and tag for ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109534'>NAS-109534</a>] -         Fix service query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109545'>NAS-109545</a>] -         Slow (iSCSI) api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109548'>NAS-109548</a>] -         Snapshots can't be deleted from gui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109549'>NAS-109549</a>] -         Add human version for catalog items
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109550'>NAS-109550</a>] -         Export Key option visible when using passphrase encryption
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109552'>NAS-109552</a>] -         Add ability to change "System Dataset Pool" option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109553'>NAS-109553</a>] -         Add "Show Console Messages" to GUI on General Settings
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109555'>NAS-109555</a>] -         Add endpoint to retrieve valid system dataset pool choices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109560'>NAS-109560</a>] -         Retrieve timestamps for each pod log entry
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109564'>NAS-109564</a>] -         Setting Plex to "Require" secure connection prevents docker container from properly deploying
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109581'>NAS-109581</a>] -         products filter in alert not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109582'>NAS-109582</a>] -         Improve UI error handling - [object Object] while taking a debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109584'>NAS-109584</a>] -         Kubernetes/dump.txt is 193MB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109585'>NAS-109585</a>] -         Give proper replication and periodic snapshot task debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109597'>NAS-109597</a>] -         FailoverService HA_MODE/HA_LICENSED not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109598'>NAS-109598</a>] -         Vulenribilty found in Web UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109599'>NAS-109599</a>] -         traceback in jail_freebsd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109602'>NAS-109602</a>] -         traceback in libvirt event_loop_connection
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109605'>NAS-109605</a>] -         Validate certificate while creating/updating idmap
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109606'>NAS-109606</a>] -         Replication Task cannot be created through UI due to SSH check even for LOCAL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109610'>NAS-109610</a>] -         HA systems only deliver debug for active node when a proxy is configured
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109617'>NAS-109617</a>] -         improvements to gluster.peer.status API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109627'>NAS-109627</a>] -         Error: [EFAULT] Kubernetes service is not running.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109642'>NAS-109642</a>] -         Roll Back breaks the page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109643'>NAS-109643</a>] -         Adjust default NFSv4 ACL for new datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109648'>NAS-109648</a>] -         Retrieve chart release history on chart.release.query event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109652'>NAS-109652</a>] -         Wrong san value in the payload of "certificate.create" when creating a CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109656'>NAS-109656</a>] -         replication does not work after upgrade to 12.0-U2.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109659'>NAS-109659</a>] -         Change wording to "Unselect All" when all apps are selected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109665'>NAS-109665</a>] -         UI should show readable names of popular ACME servers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109668'>NAS-109668</a>] -         Fix resolving patch for certificate service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109682'>NAS-109682</a>] -         Page needs to be refreshed to see newly created VM
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109686'>NAS-109686</a>] -         [Charts/Apps] "show_if" only working on "type: dict"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109687'>NAS-109687</a>] -         R20 doesn't recognize its own enclosure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109692'>NAS-109692</a>] -         New SSH connection form hides errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109694'>NAS-109694</a>] -         Initial protocol testing for SMB using pylibsmb
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109696'>NAS-109696</a>] -         Cloud Sync Task Dropbox never completes, stuck at 100%
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109700'>NAS-109700</a>] -         Support mailcfg[fromname]
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109702'>NAS-109702</a>] -         Retrieve build time without authentication
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109705'>NAS-109705</a>] -         All replication hangs until system is rebooted after getting SSHException
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109710'>NAS-109710</a>] -         Remove chart release update alert if chart release is deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109712'>NAS-109712</a>] -         Use updated endpoints to manipulate VM display/vnc devices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109713'>NAS-109713</a>] -         Do not use "vm.create" for adding VM devices in the UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109714'>NAS-109714</a>] -         Unexpected asterik in VM delete dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109715'>NAS-109715</a>] -         Unable to launch a docker image from UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109718'>NAS-109718</a>] -         Add throttle for build_time endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109720'>NAS-109720</a>] -         Interrupted full replications are silently failing to resume
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109722'>NAS-109722</a>] -         no doc.txz in 12.0 -- jail creation failure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109724'>NAS-109724</a>] -         allow failover.status in rest api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109727'>NAS-109727</a>] -         middlewared (zettarepl) zombie process
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109728'>NAS-109728</a>] -         Dynamic DNS service not starting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109729'>NAS-109729</a>] -         Unable to modify/edit a chart release based on ix-chart
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109731'>NAS-109731</a>] -         fix failover.in_progress on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109732'>NAS-109732</a>] -         Clear various AD-related caches when service explicitly stopped
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109734'>NAS-109734</a>] -         Fix RcloneVerboseLogCutter
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109739'>NAS-109739</a>] -         Snapshots deletion confirmation page does not display snapshot names
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109741'>NAS-109741</a>] -         Allow better progress report for core.bulk
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109743'>NAS-109743</a>] -         Explicitly set tdbsam as passdb backend when stopping ldap
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109749'>NAS-109749</a>] -         Fix SMB share ids in smb_registry tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109752'>NAS-109752</a>] -         Do not wait for completed job pods to be deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109754'>NAS-109754</a>] -         [Charts/Apps] Lists-in-Lists broken on latest build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109757'>NAS-109757</a>] -         SCALE: Failed to start kubernetes cluster - Unable to find "ix-truenas" node.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109762'>NAS-109762</a>] -         remove ability to share raw disks via iscsi on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109769'>NAS-109769</a>] -         HA journal EOFError pickle.load()
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109777'>NAS-109777</a>] -         Retrieve app_readme at item level for UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109780'>NAS-109780</a>] -         [Certificates] Creating ACME certificate fails stating missing "root email adress"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109782'>NAS-109782</a>] -         Bridged NIC adapter always set to DOWN state
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109790'>NAS-109790</a>] -         Add initial tests for alternate datastream support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109797'>NAS-109797</a>] -         "Bucket is required" when setting up Google Drive cloud sync task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109799'>NAS-109799</a>] -         Some Text In UI (Storage>Pools>Edit>ACL) don't show up in the .PO file 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109801'>NAS-109801</a>] -         Some LDAP configuration fields are empty after upgrading
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109805'>NAS-109805</a>] -         Add regression tests for domain sid modifications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109808'>NAS-109808</a>] -         Fix typo in nis.get_cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109810'>NAS-109810</a>] -         fix various issues in CtdbSharedVolumeService
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109816'>NAS-109816</a>] -         Restarting the middlewared service leaves you with no dhclient
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109819'>NAS-109819</a>] -         Traceback trying edit disk on pool status page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109820'>NAS-109820</a>] -         SCALE Samba group write permissions do not work
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109824'>NAS-109824</a>] -         Ensure aclmode set to DISCARD if not using NFSv4 ACLs on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109826'>NAS-109826</a>] -         All encryption indicators and menu options missing in Storage tree table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109827'>NAS-109827</a>] -         Retrieve k8s backup name after completing backup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109831'>NAS-109831</a>] -         Task manager shows vmware.periodic_snapshot_task_begin every 10 minutes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109847'>NAS-109847</a>] -         Cannot create docker containers without some fields.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109855'>NAS-109855</a>] -         [certificates] ACME crashes with valid credentials and wildcard domain
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109858'>NAS-109858</a>] -         Recursively destroy backup snapshot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109861'>NAS-109861</a>] -         Always add encryption properties while retrieving datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109865'>NAS-109865</a>] -         Add dependencies to SMB SID tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109867'>NAS-109867</a>] -         Chart release summary dialog styling issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109884'>NAS-109884</a>] -         [SCALE] Some VMs don't have network access after Update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109893'>NAS-109893</a>] -         Opening openVPN server settings takes you back to the dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109898'>NAS-109898</a>] -         PoolDatasetService.do_create: skip children lookups on parent datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109903'>NAS-109903</a>] -         Wrong openapi schema on {id} endpoints
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109905'>NAS-109905</a>] -         SCALE Init scripts are not executed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109907'>NAS-109907</a>] -         TrueCommand Cloud cannot access added systems if they have the Listen Interface customized
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109911'>NAS-109911</a>] -         CRUDService.query: handle force_sql_filters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109919'>NAS-109919</a>] -         Bug fix for validation acme authenticator schemas
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109921'>NAS-109921</a>] -         Correctly display CertBot validation errors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109926'>NAS-109926</a>] -         Increase permitted SMB stream size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109927'>NAS-109927</a>] -         Do not have catalog query fail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109928'>NAS-109928</a>] -         Replication failed (ZFS snap) after last upgrade 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109930'>NAS-109930</a>] -         Set graphic console charmap to utf-8 so CLI can be used normally
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109932'>NAS-109932</a>] -         Properly show error messages for invalid client cert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109944'>NAS-109944</a>] -         Allow specifying default identifier field for tables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109947'>NAS-109947</a>] -         TrueNAS Scale 20.02 A1 doesn't recognize LSI 9201-16e even with latest Firmware
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109959'>NAS-109959</a>] -         Fix AD cache fill with alternate character sets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109961'>NAS-109961</a>] -         `reporting.get_data` returns null arrays for data and aggregation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109968'>NAS-109968</a>] -         Allow retrieving parsed image tags for container images
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109974'>NAS-109974</a>] -         Fix entity-empty text color on light themes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109975'>NAS-109975</a>] -         ACME Domain list messed up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109981'>NAS-109981</a>] -         Fix using sql filters in rest api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109983'>NAS-109983</a>] -         Mark zfs-localpv and nvidia images as internal system images
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109984'>NAS-109984</a>] -         Do not traceback when adding misconfigured catalog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109986'>NAS-109986</a>] -         Add endpoint to retrieve gpu pci ids choices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109993'>NAS-109993</a>] -         Fix spacing and border color on dark themes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110009'>NAS-110009</a>] -         use correct logrorate size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110013'>NAS-110013</a>] -         Creating a new Open VPN Client fails with OpenSSL.crypto.Error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110039'>NAS-110039</a>] -         Ignore encoding errors in stdout/stderr
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110044'>NAS-110044</a>] -         null_value in ISCSI extent Device field
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110046'>NAS-110046</a>] -         udev not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110047'>NAS-110047</a>] -         Fix TypeError: sync_interface() missing 1 required positional argumen…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110067'>NAS-110067</a>] -         Normalise docker data-root path
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110071'>NAS-110071</a>] -         SCALE: UI auth_token login handling breaks server (500 Internal Server Error)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110095'>NAS-110095</a>] -         Make sure we correctly retrieve active containers status
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110099'>NAS-110099</a>] -         Make sure required crds are setup before considering k8s node to be ready
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110102'>NAS-110102</a>] -         Fix failing tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110120'>NAS-110120</a>] -         No way to know cloud sync task progress or why it failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110128'>NAS-110128</a>] -         use failover.sendfile in failover.sync_to_peer
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110133'>NAS-110133</a>] -         Do not show a successful status for cloud sync that was not executed …
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110163'>NAS-110163</a>] -         CLONE - Fix TrueNASMOldBIOSVersionAlertSource
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110191'>NAS-110191</a>] -         Retrieve display device id with each display uri
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110192'>NAS-110192</a>] -         Add normalized vm pci id to device.get_gpus
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110251'>NAS-110251</a>] -         Handle case where active_media_subtype can be none
</li>
</ul>

{{< /expand >}}

## 21.02-ALPHA.1

{{< expand "21.02-ALPHA.1" >}}

**February 16, 2021**

iXsystems is pleased to release the next Alpha version of TrueNAS SCALE!
SCALE is the newest member of the TrueNAS family.
When complete, SCALE will have all major TrueNAS CORE storage and sharing features and web interface based on Debian GNU/Linux.
There will also be additional SCALE-specific features that are derived from the application’s Linux base.
The major features of SCALE are represented in the application acronym:

<ul style="list-style: none;">
	<li><b>S</b>caled-Out ZFS</li>
	<li><b>C</b>onverged</li>
	<li><b>A</b>ctive-Active</li>
	<li><b>L</b>inux Containers</li>
	<li><b>E</b>asy to Manage</li>
</ul>

Initial developer’s notes (retired) for TrueNAS SCALE are available in the TrueNAS Documentation Hub.
Note that because SCALE shares a similar user interface as the FreeBSD-based TrueNAS CORE, many of the current documentation articles also apply to SCALE.
SCALE feature-specific articles will be added to the [SCALE section]({{< relref "/SCALE/_index.md" >}}) as the software approaches its first full release.

Code-named Angelfish, TrueNAS SCALE ALPHA follows a *year.month-ALPHA.#* scheme for versioned releases.
Because this is an ALPHA release of the software, not all planned features are present.
The status of major features are listed here, along with the full changelog of bug fixes that are part of the SCALE 21.02-ALPHA.1 release.

## Software Features

### Verified

Verified Features are generally working in SCALE. Minor bugs could be present.

* Pool Management
* SMB Shares
* iSCSI Shares
* NFS Shares
* S3 Shares
* AFP Shares
* AD / LDAP Directory Services
* Online / Offline updating
* Virtual Machines (Using KVM)
* WebDAV
* Monitoring, Alerting and Reporting
* POSIX 1e support
* Boot Environments
* SSH Credentials
* ZFS Encryption
* Cloud Sync
* Replication
* TrueCommand Cloud connections
* [Applications UI]({{< relref "UsingApps.md" >}})

### Provisional

These features have been added, but have known issues or are not fully feature-complete.
Please use only with caution.

* Command Line Interface. To access, log in to the web interface and click **System Settings > Shell**. Enter `cli` to activate the interface and `help` to see a list of options.
* Tasks:
  * Cron
  * Init/Shutdown Scripts
  * S.M.A.R.T. testing
  * Resilver prioritization
  * Periodic Snapshots
  * Rsync
  * Scrub
* Docker Images deployed as Helm Charts with Kubernetes NVIDIA / Intel Quicksync GPU passthrough (CLI)
* Wireguard (CLI)
* Networking and Settings UX Refresh
* OpenVPN Client and Server
* Two-factor authentication
* Certificate Management

### Experimental

These features are still in early development and will be landing in Nightly images of SCALE in the near future. 

* Clustered Datasets API support for TrueCommand
* TrueCommand Clustering UI for SCALE
* NFSv4 ACL support

## 21.02-ALPHA.1 Changelog

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100018'>NAS-100018</a>] -         S.M.A.R.T tests not sticky when disk is replaced
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100207'>NAS-100207</a>] -         In smart tests table, add enable/disabled columns
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107146'>NAS-107146</a>] -         Migrate from 12.x to SCALE (Backend / Framework)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108271'>NAS-108271</a>] -         New alert service: Telegram
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108575'>NAS-108575</a>] -         Allow disabling docker image updates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108688'>NAS-108688</a>] -         Allow access to pod console from UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108689'>NAS-108689</a>] -         Chart release events on chart release resource changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108690'>NAS-108690</a>] -         Dynamically create chart release form in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108691'>NAS-108691</a>] -         Ability to retrieve next unused port in middleware for Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108693'>NAS-108693</a>] -         Have ability to search chart releases in UI and have bulk options
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108842'>NAS-108842</a>] -         SCALE: Allow custom App catalogs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108922'>NAS-108922</a>] -         UI should update chart release status based on chart release events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108991'>NAS-108991</a>] -         Add ability to update container images in use in a chart release
</li>
</ul>

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100562'>NAS-100562</a>] -         Remove custom themes feature
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100629'>NAS-100629</a>] -         The text in the Shell appears to wrap prematurely even on a sufficiently wide display/screen
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102006'>NAS-102006</a>] -         Improve Alert Settings page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104469'>NAS-104469</a>] -         Shell does not select text accurately
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105062'>NAS-105062</a>] -         WebUI forces to choose bridge members upon its definition
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106588'>NAS-106588</a>] -         Can&#39;t log in to GUI with &lt;enter&gt; when credentials are saved
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107898'>NAS-107898</a>] -         Improve display of Service &gt; UPS driver options
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108143'>NAS-108143</a>] -         [SCALE] Removing all NFS exports requires manual restart of NFS service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108154'>NAS-108154</a>] -         Limit number of simultaneous replications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108333'>NAS-108333</a>] -         create ctdb plugin for gluster smb integration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108444'>NAS-108444</a>] -         lagg interface member menu proposes a vlan interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108452'>NAS-108452</a>] -         Restore background cpu dashboard widget updating
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108464'>NAS-108464</a>] -         Dashboard CPU widget does not clear out the old values
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108479'>NAS-108479</a>] -         Mystery Error 3221225867
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108512'>NAS-108512</a>] -         GELI unlock very slow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108519'>NAS-108519</a>] -         Do not re-use IDs for the various assets in the DB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108525'>NAS-108525</a>] -         unable to create a jail that has partly the name of another
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108535'>NAS-108535</a>] -         Use smart.test.disk_choices
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108548'>NAS-108548</a>] -         Creating a passphrase for a dataset in UI accepts different passphrases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108557'>NAS-108557</a>] -         [SCALE] Unable to create a debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108571'>NAS-108571</a>] -         Big samba log files in /var/log/samba4 on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108586'>NAS-108586</a>] -         Can&#39;t remove offline pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108600'>NAS-108600</a>] -         Still no Reporting graphs afer 12.0-U1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108624'>NAS-108624</a>] -         Traceback ISCSIPortalIP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108625'>NAS-108625</a>] -         Unable to update configuration for FTP service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108629'>NAS-108629</a>] -         Bad labels for key in NFS Stats (Bytes) graph
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108639'>NAS-108639</a>] -         Cannot configure MTU &lt; 1492
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108640'>NAS-108640</a>] -         Save configuration exports encryption keys regardless of checkbox
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108648'>NAS-108648</a>] -         SMB Home Share not creating user folder
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108655'>NAS-108655</a>] -         cannot exclude an irelevant dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108657'>NAS-108657</a>] -         Not allowed to set schedule for PUSH replication linked to snapshot task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108660'>NAS-108660</a>] -         SMART test error pre-format is not respected
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108665'>NAS-108665</a>] -         TrueNAS 12.0 U1 email outgoing mail server and port missing 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108666'>NAS-108666</a>] -         netcli operation hangs on uniq
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108675'>NAS-108675</a>] -         Cannot toggle boot flag after pluggin creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108685'>NAS-108685</a>] -         Traceback when trying to export an offline pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108686'>NAS-108686</a>] -         Bug fix while editing plex chart release form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108695'>NAS-108695</a>] -         Hide static IP fields when DHCP is set in launch docker image form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108715'>NAS-108715</a>] -         Reporting graphs aren&#39;t functions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108716'>NAS-108716</a>] -         Inconsistent dialog action button colors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108721'>NAS-108721</a>] -         Entity Table UX Improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108726'>NAS-108726</a>] -         htop -s segfaults
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108737'>NAS-108737</a>] -         TNSCALE - Upgrading via a new ISO wipes the initial image
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108744'>NAS-108744</a>] -         Launch Docker Image buttion brings up wrong menu screen
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108746'>NAS-108746</a>] -         Saving debug fails (two pools)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108749'>NAS-108749</a>] -         HTML in text/plain part of the alert email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108753'>NAS-108753</a>] -         Panic on special_small_blocks &gt; 128KB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108762'>NAS-108762</a>] -         run time error when configuring ip address on vlan1350 interface from webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108776'>NAS-108776</a>] -         Docker application exposes network as mgmt interface
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108777'>NAS-108777</a>] -         replication allows mountroot to be set to /
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108778'>NAS-108778</a>] -         /run/lock is too small in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108786'>NAS-108786</a>] -          12.0-U1 - Interface reports use inconsistent units
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108792'>NAS-108792</a>] -         [SCALE] Fix VNC Input
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108794'>NAS-108794</a>] -         vlan interface creation wizard : &#39;parent interface&#39; dropdown menu proposes physical interfaces that are already members of a lagg
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108796'>NAS-108796</a>] -         SMB Error with push replicaton
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108806'>NAS-108806</a>] -         SSH login accepts password although password login is disabled globally when user home is on encrypted volume
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108809'>NAS-108809</a>] -         Installation script does not remove ZFS headers from partition before creating new partition table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108814'>NAS-108814</a>] -         SMB Service stops responding afer some time. Needs a service restart or system restart to reset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108816'>NAS-108816</a>] -         Missing network interfaces in SCALE 20.12
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108821'>NAS-108821</a>] -         Network config from dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108834'>NAS-108834</a>] -         Pod console connection is killed right after it is connected successfully
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108835'>NAS-108835</a>] -         Group members view navigates to dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108839'>NAS-108839</a>] -         SCALE: Nvidia driver incompatibility in 20.12
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108853'>NAS-108853</a>] -         Missing hover effect on table rows
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108855'>NAS-108855</a>] -         Duplicated enties in the dropdown list of certificates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108871'>NAS-108871</a>] -         Reporting Disks does not show temperature. HDD Standby is already set to always on.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108882'>NAS-108882</a>] -         openebs-zfs-plugin zfs-driver uses wrong lib versions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108883'>NAS-108883</a>] -         Apps page gives Docker Service Error 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108889'>NAS-108889</a>] -         middleware AD health checks can contend with winbindd netlogon connection NT_STATUS_RPC_SEC_PKG_ERROR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108895'>NAS-108895</a>] -         Cannot save debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108906'>NAS-108906</a>] -         Private key should be a mandatory field in the UI when importing CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108907'>NAS-108907</a>] -         Invalid call to disk.query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108909'>NAS-108909</a>] -         Allow unsetting a pool for Applications in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108916'>NAS-108916</a>] -         Change replication task schedule logic
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108920'>NAS-108920</a>] -         Error when trying to send test email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108931'>NAS-108931</a>] -         TrueNAS SCALE fails to boot from USB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108932'>NAS-108932</a>] -         Sending email always causes a broken pipe error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108952'>NAS-108952</a>] -         Storage tree table missing some columns
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108974'>NAS-108974</a>] -         FreeNAS Certified systems show empty space instead of logo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108985'>NAS-108985</a>] -         Huge freenas-debug, preventing debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108986'>NAS-108986</a>] -         SCALE: unable to change Restart Policy for Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109005'>NAS-109005</a>] -         Shell does not display Greek characters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109021'>NAS-109021</a>] -         Dashboard widget template error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109030'>NAS-109030</a>] -         Cannot add iscsi user
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109031'>NAS-109031</a>] -         Default update train is missing  in 12.0 U1.1  
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109033'>NAS-109033</a>] -         Error while importing certificates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109038'>NAS-109038</a>] -         Combobox broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109039'>NAS-109039</a>] -         After Failover during Manual Update from 11.3-U5 to TrueNAS-12.0-INTERNAL-125 HA failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109040'>NAS-109040</a>] -         NTP Server Settings form field size issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109041'>NAS-109041</a>] -         Overlapping icons
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109043'>NAS-109043</a>] -         Clean up svg imports in app component
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109045'>NAS-109045</a>] -         CallError - [EFAULT] Failed to set NT password for XXXXXX: Username not found!
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109050'>NAS-109050</a>] -         Fix the year displayed in Display System Processes and the Shell
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109064'>NAS-109064</a>] -         Allow to not retrieve children of a dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109066'>NAS-109066</a>] -         Switch middleware rsync plugin to &quot;new compression&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109067'>NAS-109067</a>] -         Update image cache after pulling docker image
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109072'>NAS-109072</a>] -         Cannot create second VM on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109074'>NAS-109074</a>] -         Add user form template display error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109076'>NAS-109076</a>] -         UI does not refresh pool status after clicking on refresh
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109079'>NAS-109079</a>] -         Error exporting/disconnecting pools on TrueNAS 12.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109080'>NAS-109080</a>] -         Retrieve chart release schema for installed chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109081'>NAS-109081</a>] -         Optimize retrieval for a single chart release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109082'>NAS-109082</a>] -         exclude &quot;sr&quot; devices on fenced in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109087'>NAS-109087</a>] -         UI dashboard takes very long to show up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109088'>NAS-109088</a>] -         Make GPU label more descriptive
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109089'>NAS-109089</a>] -         Cog icon overused
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109090'>NAS-109090</a>] -         traceback in libsgio for get_rotation_rate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109091'>NAS-109091</a>] -         py-sgio doesn&#39;t propagate exceptions to caller
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109093'>NAS-109093</a>] -         Don&#39;t show clear icon on readonly input fields
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109098'>NAS-109098</a>] -         Minio process does not start with encrypted pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109101'>NAS-109101</a>] -         Fetch datastores connecting to vCenter (6.7U3) does not get remote datastores
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109102'>NAS-109102</a>] -         SCALE TFTP does not affect config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109107'>NAS-109107</a>] -         Build SCALE with Samba 4.14
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109115'>NAS-109115</a>] -         dmidecode error on Disk Testing and Pool Creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109136'>NAS-109136</a>] -         Isolate kubernetes cluster
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109138'>NAS-109138</a>] -         fix up ctdb.shared.volume and gluster.volume/peer CRUD APIs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109142'>NAS-109142</a>] -         SCALE - logging doesn&#39;t persist across middleware restarts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109164'>NAS-109164</a>] -         dont traceback in ctdb.general.healthy
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109170'>NAS-109170</a>] -         start/stop ctdbd service with glusterd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109176'>NAS-109176</a>] -         add ctdb shared vol validation to gluster.volume CRUD API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109185'>NAS-109185</a>] -         no smbusers file can not map accounts to email for microsoft accounts
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109194'>NAS-109194</a>] -         handles k3s and VMs on SCALE HA appropriately
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109204'>NAS-109204</a>] -         traceback in ctdb.public.ips.query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109219'>NAS-109219</a>] -         System not showing alerts for degraded pool, alert email not sent/received
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109228'>NAS-109228</a>] -         Allow running a migration for chart release upgrades
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109230'>NAS-109230</a>] -         zettarepl.datasets_have_encryption
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109231'>NAS-109231</a>] -         Schema changes chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109233'>NAS-109233</a>] -         Fix lack of whitespace in dialog box
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109234'>NAS-109234</a>] -         Fix potential division-by-zero error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109237'>NAS-109237</a>] -         Cannot create ACME Certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109238'>NAS-109238</a>] -         CSS regression on input fields. 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109242'>NAS-109242</a>] -         Fix List() schema with multiple dict &quot;items&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109250'>NAS-109250</a>] -         Fix enclosure.sync_zpool KeyError
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109251'>NAS-109251</a>] -         Fix coroutine never awaited
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109261'>NAS-109261</a>] -         After adding CSR, page needs to be refreshed to see the new CSR
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109262'>NAS-109262</a>] -         Certificate/CSR creation is a job and UI should show errors raised by the job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109267'>NAS-109267</a>] -         After upgrading chart release UI does not show updated version of app
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109268'>NAS-109268</a>] -         Please wait dialog stays after failing to delete a certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109279'>NAS-109279</a>] -         Allow consumer to specify which properties to retrieve for datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109281'>NAS-109281</a>] -         Application names cannot be modified once installed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109285'>NAS-109285</a>] -         Send a changed event after chart release upgrade completes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109286'>NAS-109286</a>] -         Validation error in LibDefaults section for option default_cc_type on Kerberos settings ui page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109291'>NAS-109291</a>] -         Add validation for catalog label
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109292'>NAS-109292</a>] -         Bug fix for chart release name regex
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109304'>NAS-109304</a>] -         zfs.dataset.create set xattr=sa by default like pool.dataset.create
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109318'>NAS-109318</a>] -         TureNAS SCALE: Applications, Error getting pool data after adding new disk
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109321'>NAS-109321</a>] -         Add basic pseudo service for directory services cache
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109327'>NAS-109327</a>] -         Remove temporary wrapper to start kubernetes service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109328'>NAS-109328</a>] -         Register events of services as private which are private themselves
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109329'>NAS-109329</a>] -         Unable to create zvol from UI - TrueNAS Scale Nightly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109336'>NAS-109336</a>] -         Delete snapshots in descendant filesystems as well on chart release upgrade
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109344'>NAS-109344</a>] -         Keep track of catalog repo/branches for installed chart releases
</li>
</ul>

### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-103140'>NAS-103140</a>] -         Don&#39;t encapsulate xterm in a mat-card
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-103316'>NAS-103316</a>] -         System/Reporting should be embedded into ReportsDashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-103438'>NAS-103438</a>] -         Use a better monospaced font in the shell section of webui
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105823'>NAS-105823</a>] -         Move Alert settings to Alert Bar
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107574'>NAS-107574</a>] -         Scale: virtualization - when adding new disk to existing VM, have option to create new zvol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107663'>NAS-107663</a>] -         New Hosts API for iSCSI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108151'>NAS-108151</a>] -         UX improvements for System/General global actions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108324'>NAS-108324</a>] -         Convert Certificate and CA forms to wizards
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108481'>NAS-108481</a>] -         zvol zfs encryption settings missing from UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108495'>NAS-108495</a>] -         Missing ix-auto in -&gt; and + button in Sharing/iSCSI/Initiators/Add on 12.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108604'>NAS-108604</a>] -         Make restarting/reloading locked attachments optional
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108681'>NAS-108681</a>] -         Use id filter for retrieving root dataset information on UI dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108725'>NAS-108725</a>] -         Make first column of table data always sticky
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108779'>NAS-108779</a>] -         Add tooltip for tips on webshell page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108781'>NAS-108781</a>] -         Better UX for entity-wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108782'>NAS-108782</a>] -         Slide out forms should fill viewport height
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108840'>NAS-108840</a>] -         Add session-id filter optimization to smbstatus
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108894'>NAS-108894</a>] -         Display warning if user selects FULL or DEBUG log level for SMB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108918'>NAS-108918</a>] -         Tooltip for ACL in SMB share GUI form is wrong
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108949'>NAS-108949</a>] -         Better flex rules for global actions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108950'>NAS-108950</a>] -         Better text input field UX
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108961'>NAS-108961</a>] -         Unbalanced field layout in Edit Disks form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108968'>NAS-108968</a>] -         Convert services page to entity-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108973'>NAS-108973</a>] -         Wasted space in System/Advanced
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109022'>NAS-109022</a>] -         Properly show if there are no installed apps in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109153'>NAS-109153</a>] -         Implement entity-empty on entity-table
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109154'>NAS-109154</a>] -         Implement Entity-empty on Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109159'>NAS-109159</a>] -         Update rendering for a list
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109172'>NAS-109172</a>] -         System Advanced Dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109236'>NAS-109236</a>] -         Do not render variables which have &quot;hide=True&quot; in schema for Apps
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109240'>NAS-109240</a>] -         Have a spinner while loading chart releases
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109256'>NAS-109256</a>] -         Move Email link to Alerts Menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109257'>NAS-109257</a>] -         Move Guide link to topbar
</li>
</ul>

{{< /expand >}}

## 20.12-ALPHA

{{< expand "20.12-ALPHA" >}}

**December 18, 2020**

iXsystems is pleased to release the next Alpha version of TrueNAS SCALE!
SCALE is the newest member of the TrueNAS family.
When complete, SCALE will have all major TrueNAS CORE storage and sharing features and web interface based on Debian GNU/Linux.
There will also be additional SCALE-specific features that are derived from the application’s Linux base.
The major features of SCALE are represented in the application acronym:

<ul style="list-style: none;">
	<li><b>S</b>caled-Out ZFS</li>
	<li><b>C</b>onverged</li>
	<li><b>A</b>ctive-Active</li>
	<li><b>L</b>inux Containers</li>
	<li><b>E</b>asy to Manage</li>
</ul>

Initial developer’s notes (retired) for TrueNAS SCALE are available on the TrueNAS Documentation Hub.
Note that because SCALE shares a similar user interface as the FreeBSD-based TrueNAS CORE, many of the current documentation articles also apply to SCALE.
SCALE feature-specific articles will be added to the [SCALE section]({{< relref "/SCALE/_index.md" >}}) as the software approaches its first full release.

Code-named Angelfish, TrueNAS SCALE-ALPHA follows a year.month scheme for versioned releases.
Because this is an ALPHA release of the software, not all planned features are present.
The status of major features are listed here, along with the full changelog of bug fixes that are part of the SCALE 20.12-ALPHA release.

## Software Features

### Verified

Verified Features are generally working in SCALE. Minor bugs could be present.

* Pool Management
* SMB Shares
* iSCSI Shares
* NFS Shares
* S3 Shares
* AFP Shares
* AD / LDAP Directory Services
* Online / Offline updating
* Virtual Machines (Using KVM)
* WebDAV
* Monitoring, Alerting and Reporting
* POSIX 1e support
* Boot Environments
* SSH Credentials
* ZFS Encryption
* Cloud Sync
* Replication
* TrueCommand Cloud connections

### Provisional

These features have been added, but have known issues or are not fully feature-complete.
Please use only with caution.

* [Applications UI]({{< relref "UsingApps.md" >}})
* Tasks:
  * Cron
  * Init/Shutdown Scripts
  * S.M.A.R.T. testing
  * Resilver prioritization
  * Periodic Snapshots
  * Rsync
  * Scrub
* Docker Images deployed as Helm Charts with Kubernetes NVIDIA / Intel Quicksync GPU passthrough (CLI)
* Wireguard (CLI)
* Networking and Settings UX Refresh
* OpenVPN Client and Server
* Two-factor authentication
* Certificate Management

### Experimental

These features are still in early development and will be landing in Nightly images of SCALE in the near future. 

* Clustered Datasets API support for TrueCommand
* TrueCommand Clustering UI for SCALE
* NFSv4 ACL support

## Change Log

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100018'>NAS-100018</a>] -         S.M.A.R.T tests not sticky when disk is replaced
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104324'>NAS-104324</a>] -         Platform dependent IPMI plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104374'>NAS-104374</a>] -         Google requiring oauth for sending mail starting June 2020
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105082'>NAS-105082</a>] -         Allow hiding network interfaces from dashboard.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107305'>NAS-107305</a>] -         TrueNAS User Performance Monitoring
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107619'>NAS-107619</a>] -         Tuneables for M-Series Gen3
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107628'>NAS-107628</a>] -         Support IPv6 for HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107864'>NAS-107864</a>] -         GMail OAuth when configuring e-mail
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107923'>NAS-107923</a>] -         TrueCommand Icon: un-grey it
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108039'>NAS-108039</a>] -         Kubernetes Catalog Support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108068'>NAS-108068</a>] -         Add iftop option for SNMP service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108070'>NAS-108070</a>] -         Add properties_override replication option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108074'>NAS-108074</a>] -         Bind services to 0.0.0.0 when removing IP address from interface configuration
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108166'>NAS-108166</a>] -         R-Series support in enclosure API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108271'>NAS-108271</a>] -         New alert service: Telegram
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108322'>NAS-108322</a>] -         Applications UI implementation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108323'>NAS-108323</a>] -         Add cloud credentials pCloud &quot;hostname&quot; field
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108329'>NAS-108329</a>] -         R-Series Dashboard widget product images
</li>
</ul>

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102208'>NAS-102208</a>] -         Disable the ability to create pools, etc on an HA system with mismatched TN versions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105947'>NAS-105947</a>] -         Add regression testing for netwait
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107463'>NAS-107463</a>] -         Allow creating encrypted dataset on receiving side
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107495'>NAS-107495</a>] -         Assign new Extent to existing Target
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107498'>NAS-107498</a>] -         iSCSI filter by FC/iSCSI/BOTH
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107507'>NAS-107507</a>] -         Prompt user to add Kerberos keytab entries as needed in NFS form.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107534'>NAS-107534</a>] -         Create dashboard for Backup Credentials
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107651'>NAS-107651</a>] -         Metadata (Special) Small Block Size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107661'>NAS-107661</a>] -         Rename Initiators in iSCSI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107694'>NAS-107694</a>] -         Expose option to enable / disable TRIM in Advanced Menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107706'>NAS-107706</a>] -         Make a global titlebar component with optional breadcrumbs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107735'>NAS-107735</a>] -         Create Dashboard for Certificates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107751'>NAS-107751</a>] -         Make Save Config easier to find
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107788'>NAS-107788</a>] -         Add extra ZFS ARC stats to reporting.realtime
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107789'>NAS-107789</a>] -         Current bandwidth % per interface on reporting.realtime 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107790'>NAS-107790</a>] -         Add pool.query event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107791'>NAS-107791</a>] -         Add pool.dataset.query event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107793'>NAS-107793</a>] -         Add *.query event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107819'>NAS-107819</a>] -         12 interfaces to SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107823'>NAS-107823</a>] -         Proxy collectd graphite stream
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107829'>NAS-107829</a>] -         Overall system disks stats in reporting.realtime
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107830'>NAS-107830</a>] -         Add call to return non-idle processes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107902'>NAS-107902</a>] -         Turbostat In TrueNAS Scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107905'>NAS-107905</a>] -         When usage collection is disabled - Only report the total capacity
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107929'>NAS-107929</a>] -         zfs/snpashot endpoint only returns &quot;false&quot; on failure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107944'>NAS-107944</a>] -         Use new TrueCommand logo
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107994'>NAS-107994</a>] -         Gluster Config does not persist Upgrades
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108108'>NAS-108108</a>] -         Python with debug and no optimizations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108156'>NAS-108156</a>] -         Redundant forms on Network Page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108173'>NAS-108173</a>] -         Increase vCore limit for KVM under SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108189'>NAS-108189</a>] -         Add HA platform detection for bhyve
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108213'>NAS-108213</a>] -         Iconic template icon does not work on white background
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108348'>NAS-108348</a>] -         Slide out dataset options form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108349'>NAS-108349</a>] -         Slide out zvol create/edit form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108359'>NAS-108359</a>] -         No ix-auto in Test Changes, Revert Changes changes button
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108360'>NAS-108360</a>] -         Fix ix-auto directives on Storage page Global Actions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108391'>NAS-108391</a>] -         Slide out pool import wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108495'>NAS-108495</a>] -         Missing ix-auto in -&gt; and + button in Sharing/iSCSI/Initiators/Add on 12.0
</li>
</ul>

### Bugs

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102006'>NAS-102006</a>] -         Improve Alert Settings page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-104668'>NAS-104668</a>] -         Make SED disks handling platform dependent
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105156'>NAS-105156</a>] -         Upgraded to 11.3, Cloud Sync to B2 rclone failing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106351'>NAS-106351</a>] -         remove code related to hardware older than z-series
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106424'>NAS-106424</a>] -         Add support for Xen/XCP-ng xe-guest-utilities
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107187'>NAS-107187</a>] -         Disks page does not show Pool affiliation in Pool column
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107317'>NAS-107317</a>] -         Replication progress % Incorrect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107318'>NAS-107318</a>] -         replication target as non-root cannot mount
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107354'>NAS-107354</a>] -         Package remote-pdb in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107384'>NAS-107384</a>] -         2FA for SSH plus LDAP ignores 2FA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107419'>NAS-107419</a>] -         Replicated datasets of encrypted pools to another encrypted pool is inaccessible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107527'>NAS-107527</a>] -         allow creation of failover lagg from netcli
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107577'>NAS-107577</a>] -         Tunables regex prevents editing/creation of valid tunables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107590'>NAS-107590</a>] -         mDNS not starting? Server not visible to macOS clients
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107600'>NAS-107600</a>] -         iSCSI target deletion via 12rc1 GUI does not remove connection
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107609'>NAS-107609</a>] -         Alerts for  NFS services could not bind to specific IP addresses, using 0.0.0.0.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107638'>NAS-107638</a>] -         Deleting mountpoint of a jail doesn&#39;t update UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107643'>NAS-107643</a>] -         glusterd service api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107644'>NAS-107644</a>] -         glusterd-events service api
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107646'>NAS-107646</a>] -         GUI shouldn&#39;t allow IPv6 to be attempted on HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107647'>NAS-107647</a>] -         ZFS dataset creation can fail with UTF decode error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107677'>NAS-107677</a>] -         ensure glusterd related services are started after zpool import service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107678'>NAS-107678</a>] -         hide vhid option on SCALE HA webUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107697'>NAS-107697</a>] -         WebUI makes firefox 80.0.1 hang
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107702'>NAS-107702</a>] -         Misleading validation in EDIT IDMAP dialogue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107713'>NAS-107713</a>] -         Saving ACLs aborted on click
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107737'>NAS-107737</a>] -         IP address cannot be modified
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107753'>NAS-107753</a>] -         Ldap Messages for root and operator
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107784'>NAS-107784</a>] -         nfs alias issues on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107800'>NAS-107800</a>] -         SCALE HA webUI side-bar issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107808'>NAS-107808</a>] -         &quot;File ticket&quot; form fields are not aligned
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107809'>NAS-107809</a>] -         Attaching screenshots to &quot;File ticket&quot; form has no visual feedback
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107832'>NAS-107832</a>] -         Network activity does not seem to be behaving properly on dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107840'>NAS-107840</a>] -         Broken ACL editor shown after creating home share
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107845'>NAS-107845</a>] -         fix device.get_disks on SCALE HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107851'>NAS-107851</a>] -         Make dns_domain_name optional in idmap form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107857'>NAS-107857</a>] -         replace lshw in ixdiagnose with alternative
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107860'>NAS-107860</a>] -         replace lshw in device.get_info GPU with alternative
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107873'>NAS-107873</a>] -         SCALE: Adding Static Route does not show up on Summary page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107884'>NAS-107884</a>] -         &quot;Network connectivity will be interrupted.&quot; message is incorrect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107888'>NAS-107888</a>] -         change &quot;FreeNAS&quot; to &quot;TrueNAS&quot; in vmware plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107892'>NAS-107892</a>] -         Cloud sync task &quot;Advance options&quot; should probably be &quot;Advanced options&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107907'>NAS-107907</a>] -         add better validation to update.manual API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107914'>NAS-107914</a>] -         TrueNAS alerted me to a NextCloud update, but the updater says it was already up to date
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107918'>NAS-107918</a>] -         sas2flash segmentation fault
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107927'>NAS-107927</a>] -         NFS cannot bind IP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107928'>NAS-107928</a>] -         CLONE - CPU temperature graph always has a drop to zero at the end
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107933'>NAS-107933</a>] -         Periodic snapshot task calendar is broken
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107948'>NAS-107948</a>] -         [User error] Ability to delete System Dataset is too easy - UI suggestions.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107955'>NAS-107955</a>] -         Internal services classes showing up in API docs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107957'>NAS-107957</a>] -         middlewared crashing too many files no login
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107987'>NAS-107987</a>] -         [SCALE] Fails to change nginx HTTP listen port for WebUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107988'>NAS-107988</a>] -         Can&#39;t delete newly created user on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107992'>NAS-107992</a>] -         proftpd starts in SCALE after pool import
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108005'>NAS-108005</a>] -         Replication Task: divide by zero
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108010'>NAS-108010</a>] -         ntb0 broken on upgrade to 12.0-RELEASE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108020'>NAS-108020</a>] -         iSCSI CHAP passwords incorrect after upgrade to 12.0-RELEASE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108023'>NAS-108023</a>] -         email save throws an error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108024'>NAS-108024</a>] -         Add GUI deprecation warning for samba_schema in LDAP plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108031'>NAS-108031</a>] -         Retry download of update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108047'>NAS-108047</a>] -         make sure HA SCALE accounts for IPv6
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108048'>NAS-108048</a>] -         investigate link-local IPv6 address removal on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108050'>NAS-108050</a>] -         SNMP consuming 100% CPU and becomes unavailable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108056'>NAS-108056</a>] -         Ignore/reset zfs mountpoint property on ZFS replication task
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108059'>NAS-108059</a>] -         Only submit usage stats from the MASTER node if failover licensed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108064'>NAS-108064</a>] -         only ask for subnet mask once on HA systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108065'>NAS-108065</a>] -         change verbiage in network section for HA systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108067'>NAS-108067</a>] -         Kerberos Ticket not refreshed (regression)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108071'>NAS-108071</a>] -         typo in EUI64 ipv6 link-local generation and only generate if one doesn&#39;t exist
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108072'>NAS-108072</a>] -         keepalived.conf indentation issue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108075'>NAS-108075</a>] -         FreeNAS fails to create alert for failed power supply that IPMI does detect as failed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108085'>NAS-108085</a>] -         Pool disk details duplicated on other pool&#39;s frame in dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108087'>NAS-108087</a>] -         Bad GPTID label text
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108089'>NAS-108089</a>] -         CPU widget temperature legend color doesn&#39;t match bar color 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108097'>NAS-108097</a>] -         Time Machine not advertised after unlocking dataset until SMB is manually restarted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108102'>NAS-108102</a>] -         Fix routing from pool manager to storage page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108110'>NAS-108110</a>] -         Exporting pool(s) on TrueNAS 12.0-RELEASE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108117'>NAS-108117</a>] -         Replication task fails when created with a throttle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108120'>NAS-108120</a>] -         API v2 regression broke user creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108124'>NAS-108124</a>] -         Periodic Snapshot Task Creation allows use of inappropriate characters (i.e. forward slash &quot;/&quot;) in snapshot name
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108129'>NAS-108129</a>] -         Truenas SCALE UI broken for VM creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108140'>NAS-108140</a>] -         make sure ix-postinit runs as one of the last services in startup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108141'>NAS-108141</a>] -         [SCALE] Shares cannot support both NFS and SMB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108144'>NAS-108144</a>] -         UPS connection lost after failover
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108155'>NAS-108155</a>] -         Missing global action buttons for network dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108171'>NAS-108171</a>] -         stripe option is deprecated in gluster
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108183'>NAS-108183</a>] -         UPS shutdown leaves passive up on HA system
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108185'>NAS-108185</a>] -         Pull replication fails - ps command has wrong (missing) flags
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108204'>NAS-108204</a>] -         [SCALE] nfsv4 shares do not export properly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108209'>NAS-108209</a>] -         Add delete call to VMWare Snapshot in SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108210'>NAS-108210</a>] -         Remove unneeded first step for Import Pool wizard for SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108220'>NAS-108220</a>] -         Replication failed: cannot send &lt;snapshot name&gt;: encrypted dataset may not be sent with properties without the raw flag
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108222'>NAS-108222</a>] -         pull replication seems ummount replicated dataset
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108223'>NAS-108223</a>] -         hide &quot;.glusterfs&quot; from pool.dataset.query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108235'>NAS-108235</a>] -         sysctl rc script is running twice on boot breaking carp.allow
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108240'>NAS-108240</a>] -         I cannot change the LAGG protocol type in the aggregation setting in WebUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108273'>NAS-108273</a>] -         Traceback printed on VM operations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108278'>NAS-108278</a>] -         add ability to set quota on gluster volumes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108279'>NAS-108279</a>] -         Truenas Scale : UPS monitor password is mandatory but it is not shown and error message is unclear
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108282'>NAS-108282</a>] -         return verbose information from gluster.volume.status by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108286'>NAS-108286</a>] -         Can&#39;t connect to pCloud
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108288'>NAS-108288</a>] -         duplicate shell entries local users
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108292'>NAS-108292</a>] -         SCALE Shows &quot;Unknown CPU&quot;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108294'>NAS-108294</a>] -         HA network validation isn&#39;t working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108302'>NAS-108302</a>] -         Actions button disappeared from the pool status page
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108308'>NAS-108308</a>] -         Cant add google cloud service account
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108313'>NAS-108313</a>] -         failover.control and failover.update are broken on HA systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108330'>NAS-108330</a>] -         Snapshot expirations fail when there are too many of them at once
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108331'>NAS-108331</a>] -         plumb the gluster related config into smb plugin API
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108335'>NAS-108335</a>] -         Remove Mirror is not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108343'>NAS-108343</a>] -         Error when deleting target in use
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108345'>NAS-108345</a>] -         Cron jobs are blocking each other from running
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108351'>NAS-108351</a>] -         Error (traceback) when editing unrelated properties on dataset with certain zstd (zstandard) compression levels
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108353'>NAS-108353</a>] -         Math error in pool creation dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108354'>NAS-108354</a>] -         unable to delete VM due to XML error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108371'>NAS-108371</a>] -         UI says replication failed..but it worked
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108376'>NAS-108376</a>] -         Fix console error for tables
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108396'>NAS-108396</a>] -         Linked release notes are to wrong version (11.3U5 -&gt; 12)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108405'>NAS-108405</a>] -         netatalk is broken on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108413'>NAS-108413</a>] -         Make truenas.set_production a job
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108416'>NAS-108416</a>] -         Convert Pool Status Disk Edit to slide out form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108417'>NAS-108417</a>] -         Make Settings &gt; Change Password into a Dialog
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108423'>NAS-108423</a>] -         Dashboard for CPU &amp; memory do not show values, also reporting is missing
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108473'>NAS-108473</a>] -         &#39;&gt;&#39; not supported between instances of &#39;str&#39; and &#39;Version&#39;
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108475'>NAS-108475</a>] -         CLONE - Error (traceback) when editing unrelated properties on dataset with certain zstd (zstandard) compression levels
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108485'>NAS-108485</a>] -         Repliaction tasks, key-format validation on edit, incorrectly setting all-caps?
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108499'>NAS-108499</a>] -         Remove red border around cron picker
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108504'>NAS-108504</a>] -         Popup on dashboard will not go away
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108520'>NAS-108520</a>] -         high concurrency api requests result in invalid responses
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108529'>NAS-108529</a>] -         [SCALE] Unable to create a debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108539'>NAS-108539</a>] -         Reporting graphs missing / rrdcached errors spamming log
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108553'>NAS-108553</a>] -         Degraded pool alert not received in UI or Email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108560'>NAS-108560</a>] -         Pool status will not update unless system is restarted/system panics
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108562'>NAS-108562</a>] -         Unable to access FTP using &quot;Allow Root Login&quot; option
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108578'>NAS-108578</a>] -         zettarepl failing to pull-replicate a dataset with canmount=noauto (12.0-U1 regression)
</li>
</ul>

{{< /expand >}}

## 20.10-ALPHA

{{< expand "20.10-ALPHA" >}}

**October 16, 2020**

iXsystems is pleased to release the first Alpha version of TrueNAS SCALE!
SCALE is the newest member of the TrueNAS software family.
When complete, SCALE will have all major TrueNAS CORE storage and sharing features and web interface based on Debian GNU/Linux.
There will also be additional SCALE-specific features that are derived from the application’s Linux base.
The major features of SCALE are represented in the application acronym:

<ul style="list-style: none;">
	<li><b>S</b>caled-Out ZFS</li>
	<li><b>C</b>onverged</li>
	<li><b>A</b>ctive-Active</li>
	<li><b>L</b>inux Containers</li>
	<li><b>E</b>asy to Manage</li>
</ul>

Initial developer’s notes for TrueNAS SCALE are available on the TrueNAS Documentation Hub.
(developer's notes are now retired, please see the SCALE documentation content instead.)
Note that because SCALE shares the same UI as the FreeBSD-based TrueNAS CORE, many of the current documentation articles also apply to SCALE.
SCALE feature-specific articles will be added to the [TrueNAS SCALE]({{< relref "/SCALE/_index.md" >}}) page as the software approaches its first full release.

Code-named Angelfish, TrueNAS SCALE-ALPHA will be following a **year.month** scheme for versioned releases.
Because this is an ALPHA release of the software, not all planned features are present.
The status of major features are listed here, along with the full changelog of bug fixes that are part of the SCALE 20.10-ALPHA release.

### Features

#### Verified

Verified Features are generally working in SCALE.
Minor bugs could be present.

* Pool Management
* SMB Shares
* iSCSI Shares
* NFS Shares
* S3 Shares
* AFP Shares
* Online / Offline updating
* Virtual Machines (Using KVM)
* WebDAV
* Monitoring, Alerting and Reporting

#### Provisional

These features have been added, but have known issues or are not fully feature-complete.
Please use only with caution.

* Cloud Sync Tasks
* Docker with Kubernetes (CLI)
* Docker with NVIDIA gpu passthrough flags (CLI)
* AD / LDAP Directory Services
* Wireguard (CLI)
* Networking and Settings UX Refresh

#### Experimental

These features are still in early development and will be landing in Nightly images of SCALE in the near future.

* Applications UI
* Clustered Datasets API support for TrueCommand
* TrueCommand Clustering UI for SCALE
* POSIX 1e / NFSv4 ACL support

### Cautions

As the root user, it is possible to load additional software via the apt package manager commands. This is useful for developers on experimental systems who are trying new features or diagnosing issues. Installing the wrong packages could render a system non-functional and caution should be taken.

Packages downloaded via apt are not persistent. They will not survive an upgrade and may negatively impact normal operation. Users of operational systems should not use the apt command unless advised by the developers. For persistence between upgrades, users should deploy custom packages as containers. 

### Bug Fixes

<body class="ql-editor ql-editor-view" style="font-size:14px;"><html><head></head><body><table width="100%"><thead><tr><th>Key</th><th>Summary</th><th>Component/s</th></tr></thead><tbody><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107933" target="_blank">NAS-107933</a></td><td>Periodic snapshot task calendar is broken</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107931" target="_blank">NAS-107931</a></td><td>Selecting a certificate for LDAP</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107907" target="_blank">NAS-107907</a></td><td>add better validation to update.manual API</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107886" target="_blank">NAS-107886</a></td><td>CPU temperature graph always has a drop to zero at the end</td><td>Reporting</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107879" target="_blank">NAS-107879</a></td><td>Traceback on interface pre sync</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107872" target="_blank">NAS-107872</a></td><td>build syslog-ng with debug symbols</td><td>OS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107859" target="_blank">NAS-107859</a></td><td>SCALE - Networking Changes aren&apos;t fully applied on reboot</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107842" target="_blank">NAS-107842</a></td><td>Failure to approve acme cert</td><td>Certificates</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107837" target="_blank">NAS-107837</a></td><td>Can&apos;t change security setting for NFS share</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107836" target="_blank">NAS-107836</a></td><td>internal interface on SCALE HA are not being configured on boot</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107831" target="_blank">NAS-107831</a></td><td>fix failover on SCALE HA</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107809" target="_blank">NAS-107809</a></td><td>Attaching screenshots to &quot;File ticket&quot; form has no visual feedback</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107802" target="_blank">NAS-107802</a></td><td>traceback in hactl along with flake8 fixes</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107784" target="_blank">NAS-107784</a></td><td>nfs alias issues on SCALE</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107779" target="_blank">NAS-107779</a></td><td>SCALE HA code running on non-enterprise hardware</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107770" target="_blank">NAS-107770</a></td><td>fix failover.vip.check_states logic on SCALE HA</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107764" target="_blank">NAS-107764</a></td><td>iface.up() on SCALE HA internal heartbeat interface</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107763" target="_blank">NAS-107763</a></td><td>Method &apos;force&apos; not found in &apos;failover.fenced&apos;</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107738" target="_blank">NAS-107738</a></td><td>fenced is not panic&apos;ing on SCALE HA</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107736" target="_blank">NAS-107736</a></td><td>reporting.realtime Event: Network rates wrong</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107724" target="_blank">NAS-107724</a></td><td>traceback in vrrp_hook_license_update</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107723" target="_blank">NAS-107723</a></td><td>traceback in failover.sync_from_peer</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107720" target="_blank">NAS-107720</a></td><td>multiple issues with netcli</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107707" target="_blank">NAS-107707</a></td><td>plumb in fenced into failover plugin on SCALE HA</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107704" target="_blank">NAS-107704</a></td><td>add py-sgpersist to scale build</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107703" target="_blank">NAS-107703</a></td><td>add py-fenced to scale build</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107686" target="_blank">NAS-107686</a></td><td>trailing slash breaks NFS permanently?</td><td>NFS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107678" target="_blank">NAS-107678</a></td><td>hide vhid option on SCALE HA webUI</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107674" target="_blank">NAS-107674</a></td><td>middleware, Traceback issue at iddle</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107664" target="_blank">NAS-107664</a></td><td>Update bug renders SCALE non bootable</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107655" target="_blank">NAS-107655</a></td><td>JS console error complaining that model property is missing</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107644" target="_blank">NAS-107644</a></td><td>glusterd-events service api</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107643" target="_blank">NAS-107643</a></td><td>glusterd service api</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107617" target="_blank">NAS-107617</a></td><td>FreeNAS 11.3 upgrade to TrueNAS 12.0RC1 does not migrate user passwords</td><td>Upgrades</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107603" target="_blank">NAS-107603</a></td><td>Replication that worked in 11.3-U4 and 12.0-Beta2 fails in 12.0-RC1</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107587" target="_blank">NAS-107587</a></td><td>SSH Keypair input validation issue Again</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107552" target="_blank">NAS-107552</a></td><td>Timezone mismatch in reporiting graphs</td><td>Reporting</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107545" target="_blank">NAS-107545</a></td><td>CloudSync Dryrun isn&apos;t dry</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107531" target="_blank">NAS-107531</a></td><td>Comment and restrict change of large blocks support in replication</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107529" target="_blank">NAS-107529</a></td><td>Snapshot option missing for Zvol&apos;s in contextual menu on pools UI</td><td>Snapshot, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107526" target="_blank">NAS-107526</a></td><td>Failed Error when clicking Expand Pool</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107516" target="_blank">NAS-107516</a></td><td>S3 Sync Task Part number must be an integer between</td><td>Tasks</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107506" target="_blank">NAS-107506</a></td><td>Additional Domains don&apos;t show up on save</td><td>Middleware, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107502" target="_blank">NAS-107502</a></td><td>NetBIOS Alias value is not saved after Server reboot</td><td>Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107483" target="_blank">NAS-107483</a></td><td>SCALE SMB Shares Unusable</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107479" target="_blank">NAS-107479</a></td><td>SMART Service Fails to Start</td><td>SMART</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107436" target="_blank">NAS-107436</a></td><td>Elements in &quot;Title Bar&quot; no longer Clickable</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107417" target="_blank">NAS-107417</a></td><td>NVME disks are listed twice AMD</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107413" target="_blank">NAS-107413</a></td><td>replication failures</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107411" target="_blank">NAS-107411</a></td><td>No Task Manager Progress is shown</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107409" target="_blank">NAS-107409</a></td><td>nfs shares can be created outside zpool path</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107407" target="_blank">NAS-107407</a></td><td>Default uid for new users may be less than 1000</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107402" target="_blank">NAS-107402</a></td><td>Migration of SMB &quot;show hidden files&quot; option is backwards</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107401" target="_blank">NAS-107401</a></td><td>Disable autocomplete for 2FA code on login page</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107400" target="_blank">NAS-107400</a></td><td>Inconsistency if root pw is required for DL of encryption key</td><td>System</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107387" target="_blank">NAS-107387</a></td><td>traceback in peer and volume gluster plugin</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107361" target="_blank">NAS-107361</a></td><td>Truenas Scale: Empty create smb share</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107354" target="_blank">NAS-107354</a></td><td>Package remote-pdb in SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107353" target="_blank">NAS-107353</a></td><td>Traceback on available memory for VM</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107350" target="_blank">NAS-107350</a></td><td>Can&apos;t import pools from CORE to SCALE </td><td>ZFS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107348" target="_blank">NAS-107348</a></td><td>high cpu usage by middleware...slow performance</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107346" target="_blank">NAS-107346</a></td><td>Problems with listing and deleting jails and plugins</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107332" target="_blank">NAS-107332</a></td><td>Issue with 2FA in TrueNAS Core 12 Beta2</td><td>System</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107328" target="_blank">NAS-107328</a></td><td>ACL editor does not reflect preselected template</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107315" target="_blank">NAS-107315</a></td><td>middlewared memory leak</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107314" target="_blank">NAS-107314</a></td><td>Replicated dataset is not set to read-only</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107302" target="_blank">NAS-107302</a></td><td>Inappropriate message / incorrect handling, when an old config references datasets/vols that no longer exist.</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107273" target="_blank">NAS-107273</a></td><td>tracebacks in smb plugin on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107263" target="_blank">NAS-107263</a></td><td>When running a scrub from the pools manual it shows a GUI bug</td><td>Console</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107260" target="_blank">NAS-107260</a></td><td>Date columns do not sort correctly</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107257" target="_blank">NAS-107257</a></td><td>WebUI Pool Status empty</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107256" target="_blank">NAS-107256</a></td><td>Cluster of service fails and middleware connections fails, 12-beta2</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107248" target="_blank">NAS-107248</a></td><td>Snapshot Extra column &quot;Used&quot;, incorrect sorting</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107238" target="_blank">NAS-107238</a></td><td>Cancel doesn&apos;t work during install of TrueNAS SCALE</td><td>Boot Environments</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107235" target="_blank">NAS-107235</a></td><td>Error when updating a Jail 11.3-RELEASE-p6 to 11.3-RELEASE-p612</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107229" target="_blank">NAS-107229</a></td><td>Virtual Machine Next Button and Breadcrumbs Broken</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107226" target="_blank">NAS-107226</a></td><td>middlewared_truenas/plugins/enclosure_/map.py TypeError line 66</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107217" target="_blank">NAS-107217</a></td><td>Theming issues after merge of WIP</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107213" target="_blank">NAS-107213</a></td><td>SMB Service Save - TypeError occurs</td><td>SMB</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107165" target="_blank">NAS-107165</a></td><td>Cannot add cache disk to existing pool</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107164" target="_blank">NAS-107164</a></td><td>Jails not mounting after update to 12.0BETA2</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107158" target="_blank">NAS-107158</a></td><td>Unable to upload config file in 12.0 BETA2</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107154" target="_blank">NAS-107154</a></td><td>Fix issue with smb share generation</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107148" target="_blank">NAS-107148</a></td><td>Generate a random default serial extent</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107143" target="_blank">NAS-107143</a></td><td>Ensure groupmap entries are properly added / deleted on group.update</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107142" target="_blank">NAS-107142</a></td><td>Add tests for SMB groupmaps</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107141" target="_blank">NAS-107141</a></td><td>remove excess logging info when syncing disks</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107140" target="_blank">NAS-107140</a></td><td>Expand api tests for user</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107135" target="_blank">NAS-107135</a></td><td>SMB status change does not update passdb/groupmap</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107130" target="_blank">NAS-107130</a></td><td>Add test to verify builtin users are not smb users</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107129" target="_blank">NAS-107129</a></td><td>SMART test results doesn&apos;t handle 0 results</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107123" target="_blank">NAS-107123</a></td><td>Add catia mappings for special Apple characters</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107121" target="_blank">NAS-107121</a></td><td>`failover_aliases` and `failover_virtual_aliases` are being overwritten as empty arrays</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107120" target="_blank">NAS-107120</a></td><td>change failover_vhid to type `select` instead of `input`</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107116" target="_blank">NAS-107116</a></td><td>allow editing empty interfaces</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107115" target="_blank">NAS-107115</a></td><td>Newly created builtin users should not default to &apos;smb&apos;</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107112" target="_blank">NAS-107112</a></td><td>Strip newline from plugin-properties</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107107" target="_blank">NAS-107107</a></td><td>Clear any potential stale state after leaving AD domain</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107104" target="_blank">NAS-107104</a></td><td>ACME DNS renewals don&apos;t work</td><td>Certificates</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107102" target="_blank">NAS-107102</a></td><td>Report HA in usage statistics</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107101" target="_blank">NAS-107101</a></td><td>Top bar &quot;resilvering&quot; shows 0% constantly when it&apos;s 60% done.</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107100" target="_blank">NAS-107100</a></td><td>Do not run check_available in a tight loop in case an exception happens</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107099" target="_blank">NAS-107099</a></td><td>Do not display previous replication task status after deleting it and&#x2026;</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107085" target="_blank">NAS-107085</a></td><td>Disable fruit:locking on time machine shares</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107076" target="_blank">NAS-107076</a></td><td>Expand regression tests for user api</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107074" target="_blank">NAS-107074</a></td><td>Permissions are incorrect on home directory move</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107073" target="_blank">NAS-107073</a></td><td>Dashboard interface cards show impossible throughput values</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107069" target="_blank">NAS-107069</a></td><td>Symlink /usr/share/skel to /etc/skel in FreeBSD</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107067" target="_blank">NAS-107067</a></td><td>Fix chown of skel directory contents for new local users</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107060" target="_blank">NAS-107060</a></td><td>NFS statistics GUI are wrong.</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107053" target="_blank">NAS-107053</a></td><td>Pool in dashboard omits special vdevs from count and status</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107052" target="_blank">NAS-107052</a></td><td>Cannot replicate encrypted datasets</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107050" target="_blank">NAS-107050</a></td><td>Jails not auto-started after unlocking encrypted iocage dataset</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107046" target="_blank">NAS-107046</a></td><td>Cannot seem to delete network interfaces</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107035" target="_blank">NAS-107035</a></td><td>Swap size setting not honored on 4k sector disks</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107032" target="_blank">NAS-107032</a></td><td>Unable to upload 8TB file to backblaze.</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107031" target="_blank">NAS-107031</a></td><td>OpenVPN autostart not working</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107029" target="_blank">NAS-107029</a></td><td>Unable to configure UPS on TrueNAS 12</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107027" target="_blank">NAS-107027</a></td><td>Add JRA async DNS patches to samba</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107023" target="_blank">NAS-107023</a></td><td>Expand list of error strings that should trigger an AD rejoin</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107021" target="_blank">NAS-107021</a></td><td>Make failover faster by not doing failover.status_refresh when it&apos;s not necessary</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107013" target="_blank">NAS-107013</a></td><td>Leftover debug message for acltype</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107012" target="_blank">NAS-107012</a></td><td>Omit debug botocore module log</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107011" target="_blank">NAS-107011</a></td><td>Add idmap regression tests for AD environments</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107009" target="_blank">NAS-107009</a></td><td>System generated SSH host key does not persist through reboot</td><td>OS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-107007" target="_blank">NAS-107007</a></td><td>OpenVPN Service : Additional parameter need to be textarea </td><td>Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106999" target="_blank">NAS-106999</a></td><td>Human-readable error for deleting used cloud credential</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106998" target="_blank">NAS-106998</a></td><td>middlewared_truenas/plugins/enclosure.py AttributeError line 342</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106995" target="_blank">NAS-106995</a></td><td>24h clock not shown on dashboard</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106994" target="_blank">NAS-106994</a></td><td>OpenVPN Service : Could not determine IPv4/IPv6 protocol</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106993" target="_blank">NAS-106993</a></td><td>Reassign sys.{stdout,stderr} after log rollover</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106991" target="_blank">NAS-106991</a></td><td>Reduce SMB-related log entries</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106988" target="_blank">NAS-106988</a></td><td>Attempting to export/offline share while in use causes crash/exception</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106986" target="_blank">NAS-106986</a></td><td>Add regression tests for SMB registry configuration</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106984" target="_blank">NAS-106984</a></td><td>&quot;jls&quot; hostname does not reflect modified hostname</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106981" target="_blank">NAS-106981</a></td><td>Changing Default ACL Options resetting user changes</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106978" target="_blank">NAS-106978</a></td><td>Add regression tests for AD machine account keytab generation</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106973" target="_blank">NAS-106973</a></td><td>kbdmap_choices in SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106972" target="_blank">NAS-106972</a></td><td>AFP not running on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106966" target="_blank">NAS-106966</a></td><td>collectd: blank warning emails</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106965" target="_blank">NAS-106965</a></td><td>qBittorrent Plugin Not Installing</td><td>Plugins</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106964" target="_blank">NAS-106964</a></td><td>Overlapping tooltips</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106962" target="_blank">NAS-106962</a></td><td>Update zettarepl port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106961" target="_blank">NAS-106961</a></td><td>Fix bug</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106955" target="_blank">NAS-106955</a></td><td>Clarify reboot instructions in installer</td><td>Installation</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106953" target="_blank">NAS-106953</a></td><td>Improve validation for SMB service and shares</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106948" target="_blank">NAS-106948</a></td><td>Recycle bin versioning not enabled</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106946" target="_blank">NAS-106946</a></td><td>AD faulted, no error</td><td>Directory Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106941" target="_blank">NAS-106941</a></td><td>Incorrect parent check when unlocking encrypted dateset</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106936" target="_blank">NAS-106936</a></td><td>Handle ZoL error messages</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106928" target="_blank">NAS-106928</a></td><td>zettarepl middlewared file descriptor leak</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106923" target="_blank">NAS-106923</a></td><td>traceback in ready_system_sync_keys</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106921" target="_blank">NAS-106921</a></td><td>Expand ACL testing regimen</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106912" target="_blank">NAS-106912</a></td><td>Make sure ix-shutdown is not stopped after middlewared</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106902" target="_blank">NAS-106902</a></td><td>VM libvirt connection improvements</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106901" target="_blank">NAS-106901</a></td><td>Clear out bootready file on boot</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106894" target="_blank">NAS-106894</a></td><td>webUI no longer allows login on SCALE HA</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106893" target="_blank">NAS-106893</a></td><td>run LicenseStatus on ENTERPRISE and SCALE_ENTERPRISE</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106891" target="_blank">NAS-106891</a></td><td>fix LicenseStatus alert on SCALE</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106889" target="_blank">NAS-106889</a></td><td>traceback in failover event plugin</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106875" target="_blank">NAS-106875</a></td><td>Add directory services to usage stats</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106874" target="_blank">NAS-106874</a></td><td>WebDAV service tests failing</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106872" target="_blank">NAS-106872</a></td><td>Update py-libzfs port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106871" target="_blank">NAS-106871</a></td><td>Fix migrations state</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106866" target="_blank">NAS-106866</a></td><td>Proper/better errno for failed authentication</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106864" target="_blank">NAS-106864</a></td><td>SED doesn&apos;t work for nvme </td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106858" target="_blank">NAS-106858</a></td><td>Clarify bootloader options to be more verbose</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106854" target="_blank">NAS-106854</a></td><td>plugin boot checkbox re-enables itself</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106851" target="_blank">NAS-106851</a></td><td>Truenas Scale - Incorrect CPU temperature displayed in Dashboard Widget</td><td>Dashboard, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106850" target="_blank">NAS-106850</a></td><td>Correctly split on cases where there are multiple &apos;=&apos;</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106847" target="_blank">NAS-106847</a></td><td>Detaching device from boot mirror but not physically removing from the system can cause boot loader confusion</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106844" target="_blank">NAS-106844</a></td><td>KMIP is a TrueNAS Enterprise feature</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106842" target="_blank">NAS-106842</a></td><td>Setting IPMI to DHCP should gray-out IP addresses</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106840" target="_blank">NAS-106840</a></td><td>setting invalid VHID value fails silently.</td><td>HA, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106833" target="_blank">NAS-106833</a></td><td>Scale SMB - override build options for statedir and private dir</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106827" target="_blank">NAS-106827</a></td><td>Remove extra debug statements from directory service refresh</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106826" target="_blank">NAS-106826</a></td><td>fix hardware detection for M and X on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106825" target="_blank">NAS-106825</a></td><td>Update zettarepl port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106822" target="_blank">NAS-106822</a></td><td>Use path to determine plugin version</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106821" target="_blank">NAS-106821</a></td><td>Fix handling recoverable errors</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106818" target="_blank">NAS-106818</a></td><td>When replicating without a Periodic Snapshot task, Recursive is not working.</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106812" target="_blank">NAS-106812</a></td><td>TrueNAS CORE 12.0 -- Import of certificates is impossible.</td><td>Certificates, System</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106808" target="_blank">NAS-106808</a></td><td>Ensure monpwd/monuser fields are provided for UPS service</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106807" target="_blank">NAS-106807</a></td><td>Cover rm -rfx usages in scale to use --one-file-system</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106806" target="_blank">NAS-106806</a></td><td>Unknown CARP state None</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106800" target="_blank">NAS-106800</a></td><td>Retrieve plugins version data from packagesite.txz</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106798" target="_blank">NAS-106798</a></td><td>api context /services/iscsi/targettoextent does not allow null value for iscsi_lunid</td><td>API, iSCSI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106797" target="_blank">NAS-106797</a></td><td>Periodic Snapshot Tasks - &quot;Enabled&quot; checkboxes are not unique inputs</td><td>Snapshot, Tasks</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106796" target="_blank">NAS-106796</a></td><td>Unlock encrypted datasets when initialising KMIP keys</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106795" target="_blank">NAS-106795</a></td><td>Modify migration to simplified SMB configuration setup</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106794" target="_blank">NAS-106794</a></td><td>write_if_changed may block the event loop as it does sync file ops</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106789" target="_blank">NAS-106789</a></td><td>Unable to open UI on recent SCALE ISO</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106787" target="_blank">NAS-106787</a></td><td>iSCSI webUI columns COMPLETELY break when edited</td><td>iSCSI, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106783" target="_blank">NAS-106783</a></td><td>Change default hostname to truenas</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106780" target="_blank">NAS-106780</a></td><td>Treat most of the paramiko errors (e.g. SSH banner errors) as recover&#x2026;</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106773" target="_blank">NAS-106773</a></td><td>Host guest configuration for KVM guests</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106770" target="_blank">NAS-106770</a></td><td>iocage upgrade of existing jail not functional</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106768" target="_blank">NAS-106768</a></td><td>fix HA API tests</td><td>API</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106764" target="_blank">NAS-106764</a></td><td>SNMP FREENAS-MIB not working</td><td>Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106763" target="_blank">NAS-106763</a></td><td>New Replication tasks fail on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106751" target="_blank">NAS-106751</a></td><td>Disk power management is FreeBSD specific</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106750" target="_blank">NAS-106750</a></td><td>Traceback syncing routes</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106748" target="_blank">NAS-106748</a></td><td>Traceback on user creation</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106747" target="_blank">NAS-106747</a></td><td>User page doing invalid sharing.smb.query call</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106740" target="_blank">NAS-106740</a></td><td>Error when entering email address in UPS setup.</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106735" target="_blank">NAS-106735</a></td><td>Add support for nested VM&apos;s in SCALE</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106734" target="_blank">NAS-106734</a></td><td>fix SCALE API for configuring network</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106732" target="_blank">NAS-106732</a></td><td>adding or deleting alias on HA systems cause DISAGREE_CARP alert</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106730" target="_blank">NAS-106730</a></td><td>Update Samba to 4.12.5</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106729" target="_blank">NAS-106729</a></td><td>Samba s3:smbd - add acl_brand to struct connection_struct</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106728" target="_blank">NAS-106728</a></td><td>Fixes for pkg in latest 12-stable</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106726" target="_blank">NAS-106726</a></td><td>Donot collect jails/plugins usage in SCALE</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106723" target="_blank">NAS-106723</a></td><td>traceback when configuring an alias on HA systems</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106722" target="_blank">NAS-106722</a></td><td>Update zettarepl port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106721" target="_blank">NAS-106721</a></td><td>deleting interface on HA system does not remove info from standby</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106719" target="_blank">NAS-106719</a></td><td>service middlewared restart leaves orphaned processes behind</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106716" target="_blank">NAS-106716</a></td><td>Update migrate113 port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106714" target="_blank">NAS-106714</a></td><td>critical interfaces are being marked as non-critical</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106713" target="_blank">NAS-106713</a></td><td>Cron job still runs despite being deactivated and then deleted</td><td>Tasks</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106707" target="_blank">NAS-106707</a></td><td>falover -&gt; failover</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106703" target="_blank">NAS-106703</a></td><td>Ensure that permissions for tmp are correct during smb.configure</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106702" target="_blank">NAS-106702</a></td><td>SMB shares mounted in Windows cannot set the sparse flag</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106697" target="_blank">NAS-106697</a></td><td>We&apos;ll have to replicate system dataset if we want full replication</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106694" target="_blank">NAS-106694</a></td><td>Samba:s3:modules:aio_fbsd - remove extra calloc()/free()</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106693" target="_blank">NAS-106693</a></td><td>Only map partitions which have valid partition uuid</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106692" target="_blank">NAS-106692</a></td><td>Fix VM console command</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106691" target="_blank">NAS-106691</a></td><td>Update zettarepl port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106690" target="_blank">NAS-106690</a></td><td>Can&apos;t clear Kerberos Principal from GUI</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106688" target="_blank">NAS-106688</a></td><td>Fix validation check for user quotas</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106683" target="_blank">NAS-106683</a></td><td>Use correct rsync path for SCALE</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106682" target="_blank">NAS-106682</a></td><td>Validation Error on creation of Manual SSH Connection for Replication Task </td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106681" target="_blank">NAS-106681</a></td><td>Fix stdout read</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106673" target="_blank">NAS-106673</a></td><td>Cannot export pool with system dataset on</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106672" target="_blank">NAS-106672</a></td><td>resilver progress not updated</td><td>Dashboard</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106671" target="_blank">NAS-106671</a></td><td>Inconsistency in pool health widgets</td><td>Dashboard</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106665" target="_blank">NAS-106665</a></td><td>Browser cache issues cause tables to malfunction</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106653" target="_blank">NAS-106653</a></td><td>System &#x2192; Advanced lacks syslog options</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106648" target="_blank">NAS-106648</a></td><td>Make registry configuration aware of locked datasets</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106642" target="_blank">NAS-106642</a></td><td>Fix TN HA NFS config validation</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106641" target="_blank">NAS-106641</a></td><td>VM Console should use shell endpoint in middleware</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106640" target="_blank">NAS-106640</a></td><td>Do not update grub on first boot when system is ready</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106639" target="_blank">NAS-106639</a></td><td>Fix traceback in ldap.conf generation script when AD enabled</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106638" target="_blank">NAS-106638</a></td><td>Fix regression in winacl&apos;s chown()</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106634" target="_blank">NAS-106634</a></td><td>Do not check ABI difference on upgrades</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106632" target="_blank">NAS-106632</a></td><td>Unable to list or manage plugins in UI</td><td>Plugins</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106626" target="_blank">NAS-106626</a></td><td>Update zettarepl port</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106625" target="_blank">NAS-106625</a></td><td>Cannot add/apply network interface option</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106620" target="_blank">NAS-106620</a></td><td>Prevent users from setting user / group quota on id 0</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106616" target="_blank">NAS-106616</a></td><td>Delete BE option not visible in SCALE</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106613" target="_blank">NAS-106613</a></td><td>Always add server auth extension to default certificate created</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106612" target="_blank">NAS-106612</a></td><td>CLONE - OpenVPN Service configuration issues</td><td>Certificates, Networking, Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106611" target="_blank">NAS-106611</a></td><td>Don&apos;t log libvirt connection failure if there are no vm&apos;s</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106610" target="_blank">NAS-106610</a></td><td>Move plugins from official plugins list to community plugins</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106599" target="_blank">NAS-106599</a></td><td>Add timeout for ix-etc service</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106598" target="_blank">NAS-106598</a></td><td>iscsi portal IP traceback in webUI</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106589" target="_blank">NAS-106589</a></td><td>fix(midclt): properly handle job call to show progress and not rewind</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106587" target="_blank">NAS-106587</a></td><td>disabling wsdd causes traceback</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106584" target="_blank">NAS-106584</a></td><td>Unable to access serial console for VM&apos;s</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106583" target="_blank">NAS-106583</a></td><td>FreeNAS disks forget their assigned pool</td><td>ZFS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106582" target="_blank">NAS-106582</a></td><td>unable to upgrade from master to internal</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106581" target="_blank">NAS-106581</a></td><td>Traceback in interface.query</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106579" target="_blank">NAS-106579</a></td><td>Remove deprecated AD parameters</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106577" target="_blank">NAS-106577</a></td><td>SMB using LDAP will not start when restoring a configuration on new system</td><td>Directory Services, SMB, System</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106575" target="_blank">NAS-106575</a></td><td>Fix 12 config upload</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106574" target="_blank">NAS-106574</a></td><td>Remove exra wait argument from dhclient start</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106571" target="_blank">NAS-106571</a></td><td>Make sure we move uploaded config to tn db location in scale</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106570" target="_blank">NAS-106570</a></td><td>Error creating user &quot;File not found error&quot; &quot;/usr/share/skel&quot;</td><td>System</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106569" target="_blank">NAS-106569</a></td><td>Static Route API not working</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106568" target="_blank">NAS-106568</a></td><td>Empty attributes in interface.query</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106563" target="_blank">NAS-106563</a></td><td>update-grub error on API tests</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106547" target="_blank">NAS-106547</a></td><td>Changing DHCP to static with BPF enabled doesn&apos;t clear IP config completely.</td><td>Plugins</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106546" target="_blank">NAS-106546</a></td><td>Move radarr/sonarr to community repo</td><td>Plugins</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106545" target="_blank">NAS-106545</a></td><td>All passwords are visible while unlocking datasets</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106541" target="_blank">NAS-106541</a></td><td>Cloud Sync to Backblaze B2 fails</td><td>Tasks</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106538" target="_blank">NAS-106538</a></td><td>Expose method to retrieve list of all systemd units</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106537" target="_blank">NAS-106537</a></td><td>Form submission does not lead back to listing extents</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106535" target="_blank">NAS-106535</a></td><td>Make sure netcli features work in SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106531" target="_blank">NAS-106531</a></td><td>Get rid of swapsize on TrueNAS for data disks</td><td>Middleware, WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106530" target="_blank">NAS-106530</a></td><td>Donot create swap partition for TN enterprise on pool creation</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106528" target="_blank">NAS-106528</a></td><td>Order datasets alphabetically in Storage screen</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106527" target="_blank">NAS-106527</a></td><td>Change wording when we create zfs encrypted pools</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106520" target="_blank">NAS-106520</a></td><td>Fix product type on VM&apos;s</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106518" target="_blank">NAS-106518</a></td><td>Detach option not appearing in pool manager (needed to promote a spare)</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106517" target="_blank">NAS-106517</a></td><td>Replication tasks - entire dataset keeps being resent</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106497" target="_blank">NAS-106497</a></td><td>Recursive Replication via GUI not possible</td><td>Replication</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106486" target="_blank">NAS-106486</a></td><td>Custom update server for SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106483" target="_blank">NAS-106483</a></td><td>Label &quot;Overview&quot; translate does not work in some widgets</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106482" target="_blank">NAS-106482</a></td><td>NVMe reservation in fenced</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106480" target="_blank">NAS-106480</a></td><td>Investigating having zinject in zfs package</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106479" target="_blank">NAS-106479</a></td><td>Query middleware to determine types of tunables to be exposed in UI</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106473" target="_blank">NAS-106473</a></td><td>Unable to use Active Directory Account for new Rsync Module</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106469" target="_blank">NAS-106469</a></td><td>Trivial Screen Display Bug</td><td>Dashboard</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106455" target="_blank">NAS-106455</a></td><td>OpenVPN Service configuration issues</td><td>Certificates, Networking, Services</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106442" target="_blank">NAS-106442</a></td><td>locked dataset exported via nfs</td><td>NFS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106435" target="_blank">NAS-106435</a></td><td>ZFS replicate recursive fails: No such file or directory</td><td>Console, Replication, ZFS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106430" target="_blank">NAS-106430</a></td><td>failover.force_master is freebsd specific</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106417" target="_blank">NAS-106417</a></td><td>status method in failover plugin calls freeBSD specific methods</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106405" target="_blank">NAS-106405</a></td><td>enclosure detection traceback</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106390" target="_blank">NAS-106390</a></td><td>SSH error messages filling up console during ZFS replication</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106381" target="_blank">NAS-106381</a></td><td>get rid of /tmp/failover.json</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106380" target="_blank">NAS-106380</a></td><td>carp related methods in failover plugin are freebsd specific</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106343" target="_blank">NAS-106343</a></td><td>syslog-ng not working on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106342" target="_blank">NAS-106342</a></td><td>netcli doesnt work on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106338" target="_blank">NAS-106338</a></td><td>internal_interfaces method is freeBSD specific</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106333" target="_blank">NAS-106333</a></td><td>sync_internal_ip method is freeBSD/CARP specific</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106325" target="_blank">NAS-106325</a></td><td>generic method for random string generation</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106324" target="_blank">NAS-106324</a></td><td>fix wsclient on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106323" target="_blank">NAS-106323</a></td><td>make hactl work on SCALE</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106181" target="_blank">NAS-106181</a></td><td>avahi-daemon spams logs on TN HA systems</td><td>OS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106177" target="_blank">NAS-106177</a></td><td>Package minio</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106110" target="_blank">NAS-106110</a></td><td>UPS ups is on battery power alerts since upgrade to 11.3</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106087" target="_blank">NAS-106087</a></td><td>Setup iSNS server(s) in the lab</td><td>iSCSI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-106004" target="_blank">NAS-106004</a></td><td>SED disks not unlocking at boot</td><td>WebUI</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-105645" target="_blank">NAS-105645</a></td><td>zfs-stats -a shows unknown oids and divide by 0</td><td>OS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-105511" target="_blank">NAS-105511</a></td><td>vfs.zfs.arc.max at 16GiB if not set manually on 32GiB system, nightly 12.0</td><td>OS</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-105156" target="_blank">NAS-105156</a></td><td>Upgraded to 11.3, Cloud Sync to B2 rclone failing</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-105099" target="_blank">NAS-105099</a></td><td>Periodic Snapshot are missing the lifetime in its name</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-104906" target="_blank">NAS-104906</a></td><td>Rsync tasks view shows incorrect remote path</td><td>Tasks</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-104837" target="_blank">NAS-104837</a></td><td>Investigate usgae of pyudevd to simplify disk retrieval code</td><td></td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-104665" target="_blank">NAS-104665</a></td><td>Investigate automatic builds for TN Scale packages</td><td>Build system</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-104615" target="_blank">NAS-104615</a></td><td>Create a dump on disk for linux</td><td>Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-102808" target="_blank">NAS-102808</a></td><td>Running Cloud Sync tasks keep on running after deletion in GUI</td><td>Cloud Credentials, Middleware</td></tr><tr><td><a href="https://jira.ixsystems.com/browse/NAS-101008" target="_blank">NAS-101008</a></td><td>iSCSI extents on all-flash pool should have option serseq set to &quot;off&quot;</td><td>iSCSI, Middleware</td></tr></tbody></table>


{{< /expand >}}

## Known Issues

<body class="ql-editor ql-editor-view" style="font-size:14px;">
	<html>
    	<body>
        	<table width="100%">
            	<thead><tr><th>Key</th><th>Summary</th><th>Workaround</th></tr></thead>
               	<tbody>
				    <tr><td><a href="https://jira.ixsystems.com/browse/NAS-115238" target="_blank">NAS-115238</a></td><td>Removed drive from pool does not degrade pool status (SCALE).</td><td>Issue is being investigated and a fix provided in a future release.</td></tr>
					<tr><td></td><td>Cosmetic issue with update trains when updating from SCALE 22.02.0-RC.2.</td><td>After updating from 22.02.0-RC.2, the previous update train might show in <b>System Settings > Update</b>. This is a cosmetic issue only and can be ignored.</td></tr>
					<tr><td></td><td>Unable to mount an NFS export after migrating from CORE > SCALE or updating to 22.02.0.</td><td>The <file>/etc/exports</file> file is no longer generated when the NFS configuration contains <i>mapall</i> or <i>maproot</i> entries for unknown users or groups. This can impact users who previously had a mapping group set to <i>wheel</i>, which does not exist in SCALE. If you are unable to mount an NFS export, review your NFS share configuration and change any <i>wheel</i> entries to something specific for your environment or <i>root</i>.</td></tr>
					<tr><td></td><td>ZFS feature flag has been removed.</td><td>See <a href="#zfs-feature-flag-removal">ZFS Feature Flag Removal</a> for more information.</td></tr>
					<tr><td></td><td>SCALE Gluster/Cluster.</td><td>Gluster/Cluster features are still in testing.  Administrators should use caution when deploying and avoid use with critical data.</td></tr>
					<tr><td><a href="https://jira.ixsystems.com/browse/NAS-110263" target="_blank">NAS-110263</a></td><td>AFP sharing is removed from TrueNAS SCALE. The protocol is deprecated and no longer receives development effort or security fixes.</td><td>TrueNAS SCALE automatically migrates any existing AFP shares into an SMB configuration that is preset to function like an AFP share.</td></tr>  
					<tr><td><a href="https://jira.ixsystems.com/browse/NAS-111547" target="_blank">NAS-111547</a></td><td>ZFS shouldn't count vdev IO errors on hotplug removal</td><td>Pool status isn't being updated immediately on disk exchange events.</td></tr>
				</tbody>
        	</table>
    	</body>
	</html>

## ZFS Feature Flag Removal 

### Executive Summary

* ZFS `xattr_compat` feature flag removed

### How to tell if I'm impacted by this change

* Users who created or upgraded a pool using a TrueNAS SCALE nightly build dated between June 29, 2021 and July 15, 2021 are impacted by this change.
* Users who have manually set `xattr_compat=all` on a dataset and written an xattr are impacted by this change.
* If unsure, you can verify a pool's status of the `xattr_compat` feature flag. If the flag is in the active state, you are impacted by this change.
 
![ZFSFeatureFlagRemovalExample](/images/SCALE/ZFSFeatureFlagsRemovalExample5.png "Feature Flag Status") 
 
### How to resolve this if I am impacted

* Any pool that has had the feature active, must be backed up and restored into a pool created on a version of ZFS without the feature. For details on how to perform data protection procedures, please refer to the TrueNAS SCALE [Data Protection]({{< relref "/content/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) documentation.

### Technical details behind the change

See the [ZFS Feature Flags Removal article]({{< relref "SCALEZFSFlagRemoval.md" >}}) for more information.
