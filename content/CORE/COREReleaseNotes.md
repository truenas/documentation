---
title: CORE 13.0 Release Notes
weight: 2
aliases:
  - /releasenotes/core/13.0beta1/
---

{{< toc >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

## CORE Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| 13.0-RC.1 | Code-freeze | 23 February 2022 |
| 13.0-RC.1 | Internal Testing Sprint 1 | 28 February > 04 March 2022 |
| 13.0-RC.1 | Development Resumes | 07 March 2022
| 13.0-RC.1 | Code-freeze | 30 March 2022 |
| 13.0-RC.1 | Internal Testing Sprint 2 | 04 April > 08 April 2022 |
| 13.0-RC.1 | Tag | 11 April 2022 |
| 13.0-RC.1 | Release | 12 April 2022 |
| 13.0-RELEASE | Code-freeze | 20 April 2022 |
| 13.0-RELEASE | Internal Testing Sprints | 25 April > 29 April 2022 |
| 13.0-RELEASE | Tag | 02 May 2022 |
| 13.0-RELEASE | Release | 03 May 2022 |
| 13.0-U1 | Code-freeze | 15 June 2022 |
| 13.0-U1 | Internal Testing Sprints | 20 June > 24 June 2022 |
| 13.0-U1 | Tag | 27 June 2022 |
| 13.0-U1 | Release | 28 June 2022 |
| 13.0-U2 | Code-freeze | Q2 2022 |
| 13.0-U2 | Internal Testing Sprints | Q2 2022 |
| 13.0-U2 | Tag | Q2 2022 |
| 13.0-U2 | Release | Q2 2022 |

## 13.0-RC1

## 13.0-BETA1

{{< expand "13.0-BETA1" >}}
**February 9, 2022**

iXsystems is pleased to announce the release of TrueNAS 13.0-BETA1. This is the first major testing release which kicks-off the TrueNAS 13.0 release cycle.

Highlights of the 13.0-BETA1 release include:

* Updated to OpenZFS 2.1
* Optimizations for large systems with heavy disk usage (<a href="https://jira.ixsystems.com/browse/NAS-111659" target="_blank">NAS-111659</a> / <a href="https://jira.ixsystems.com/browse/NAS-112553" target="_blank">NAS-112553</a>)
* Improved Machine Check Architecture support (<a href="https://jira.ixsystems.com/browse/NAS-113731" target="_blank">NAS-113731</a>)

{{< hint warning >}}
This is a an early release meant for previewing and testing features and is **not recommended for production use.**
{{< /hint >}}

### TrueNAS 13.0-BETA1 Changelog

#### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-103353'>NAS-103353</a>] -         Update dns/inadyn-troglobit to 2.5
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105264'>NAS-105264</a>] -         Create ses device for all ahci
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107326'>NAS-107326</a>] -         Documentation link should point to https://www.truenas.com/docs/
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110202'>NAS-110202</a>] -         OpenZFS: Rebase on zfs-2.1-release
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111179'>NAS-111179</a>] -         improve system.dmidecode_info
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111552'>NAS-111552</a>] -         Add option to control number of iterations of zloop.sh
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111594'>NAS-111594</a>] -         improve wipe_disk/delete_partitions
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111659'>NAS-111659</a>] -         Optimize FreeBSD CPU scheduler for large systems and high IOPS.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111757'>NAS-111757</a>] -         UEFI console refresh while loading modules
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112445'>NAS-112445</a>] -         Reimplement zilstat SNMP MIBs to avoid using DTrace
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112553'>NAS-112553</a>] -         Number of CPU scheduler improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112781'>NAS-112781</a>] -         Create pools with atime disabled by default
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112821'>NAS-112821</a>] -         clean up interface/configure.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113263'>NAS-113263</a>] -         Rebase 12.0 branches on top of 13.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113731'>NAS-113731</a>] -         Improve Machine Check Architecture support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113766'>NAS-113766</a>] -         Remove leading zeroes from kern.msgbuf sysctl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113796'>NAS-113796</a>] -         Update ports tree for core 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113802'>NAS-113802</a>] -         Provide correct file generation number
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113915'>NAS-113915</a>] -         Merge OpenZFS 2.1.2 and a few other commits
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114028'>NAS-114028</a>] -         Add an input field for "tls_server_uri" into in S3 configuration form
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114060'>NAS-114060</a>] -         Increase maximal CTL (iSCSI/FC) I/O size to 8MB
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114137'>NAS-114137</a>] -         Add an input field "console_bindport" into in S3 configuration form
</li>
</ul>
    
#### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112124'>NAS-112124</a>] -         vmd(4) driver for Intel Virtual RAID on CPU
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113982'>NAS-113982</a>] -         cache geom information in middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114103'>NAS-114103</a>] -         Include igc(4) driver for I225 Intel NICs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114229'>NAS-114229</a>] -         add get_sectorsize_with_name to py-bsd
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114241'>NAS-114241</a>] -         Replication configuration
</li>
</ul>
    
#### Bug

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106585'>NAS-106585</a>] -         enclosure descriptor key not being parsed in alert
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106633'>NAS-106633</a>] -         Cron tasks are run on wrong time zone after initial setup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107055'>NAS-107055</a>] -         Forums user reported logs filled with fruit error messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107087'>NAS-107087</a>] -         investigate TCP_KEEPALIVE in middlewared client
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107272'>NAS-107272</a>] -         traceback in generate_ha_syslog method
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107292'>NAS-107292</a>] -         Unable to Delete Expired ACME Certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107316'>NAS-107316</a>] -         UPS Settings Saving Bug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107608'>NAS-107608</a>] -         ACL changes can fail when snapdir is visible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-107884'>NAS-107884</a>] -         &quot;Network connectivity will be interrupted.&quot; message is incorrect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108939'>NAS-108939</a>] -         Dashboard Memory legend changes colour
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-109397'>NAS-109397</a>] -         Failed to connect to RRDCacheD
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110137'>NAS-110137</a>] -         Update ABI metadata for ZFS libraries with send progress reporting patch
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110140'>NAS-110140</a>] -         upgrade to python 3.9 in 12.0-U4
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110596'>NAS-110596</a>] -         net/samba - handle EINTR properly in tevent_kqueue
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110606'>NAS-110606</a>] -         Update zettarepl port
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110631'>NAS-110631</a>] -         Fix building py-netif on FreeBSD 13.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110634'>NAS-110634</a>] -         handle_request_update: Could not read RRD file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110666'>NAS-110666</a>] -         top output in debug doesn't show any processes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110763'>NAS-110763</a>] -         middleware install failure on 13.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110853'>NAS-110853</a>] -         Export keys from dataset does not render json output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111093'>NAS-111093</a>] -         Memory Reporting does not match TOP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111098'>NAS-111098</a>] -         Manual update stuck at 0 percent from core to scale
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111142'>NAS-111142</a>] -         The following system core files were found rrdcached.core
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111249'>NAS-111249</a>] -         net/samba - sync with upstream merge requests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111336'>NAS-111336</a>] -         Bump OpenZFS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111449'>NAS-111449</a>] -         inadyn reports Fatal error in DDNS server response, keeps retrying
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111530'>NAS-111530</a>] -         Bump OpenZFS ports for xattr_compat cleanup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111569'>NAS-111569</a>] -         Upstream D31207
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111667'>NAS-111667</a>] -         fix minor typo in wipe.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111800'>NAS-111800</a>] -         Replication failed: cannot receive resume stream:  space quota exceeded.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111996'>NAS-111996</a>] -         Rebase 12 on 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112025'>NAS-112025</a>] -         Fix PCI bridge window expansion
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112084'>NAS-112084</a>] -         Add accepts to do_ldap_query
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112207'>NAS-112207</a>] -         Fix dataset listing for cases of zvol and unmounted datasets
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112307'>NAS-112307</a>] -         CPU Reports in Dashboard broken, when using a proxy host
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112371'>NAS-112371</a>] -         Misleading and ambiguous description for creating a new pool with encryption
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112408'>NAS-112408</a>] -         Merge OpenZFS 2.1.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112547'>NAS-112547</a>] -         sysctl.filter python module off by one
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112552'>NAS-112552</a>] -         ciss(4): Properly handle data underrun
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112666'>NAS-112666</a>] -         WebUI was all blank except the menu on the left
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112667'>NAS-112667</a>] -         Core was generated by python3.9: middlewared (zettarepl)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112709'>NAS-112709</a>] -         System / Support page broken in 12.0-U6
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112728'>NAS-112728</a>] -         AD/SMB fails after U5.1 -> U6
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112776'>NAS-112776</a>] -         update py-libzfs in 13 to latest commit
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113034'>NAS-113034</a>] -         less verbose about sql related logs in journal_ha
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113036'>NAS-113036</a>] -         Bump OpenZFS ports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113080'>NAS-113080</a>] -         cannot write file to smb share
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113240'>NAS-113240</a>] -         smbd crashes while freeing tree connection if user can't chdir() into connectpath
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113280'>NAS-113280</a>] -         `{"ha_sync": False}` option for queries that should not be synchroniz…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113281'>NAS-113281</a>] -         dont run ssh.save_keys if nothing changed
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113287'>NAS-113287</a>] -         Fix `Attribute` constructor arguments typos and fix the bug that made…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113300'>NAS-113300</a>] -         fix typo for schema kwarg
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113310'>NAS-113310</a>] -         Work around flaky NIS domains
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113351'>NAS-113351</a>] -         After upgrading to TrueNAS U6.1 I am seeing an abnormal log message in 'alerts'
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113409'>NAS-113409</a>] -         iSCSi Initiators not showing any connected after 12.ou5 update
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113460'>NAS-113460</a>] -         Shift order nsswitch generation in LDAP plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113466'>NAS-113466</a>] -         Manage LDAP service state during service start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113479'>NAS-113479</a>] -         Update middleware for Samba 4.15 changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113492'>NAS-113492</a>] -         Plugin install impossible
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113494'>NAS-113494</a>] -         Disk wipe very slow on some disks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113577'>NAS-113577</a>] -         Fix handling of partially replicated snapshots
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113614'>NAS-113614</a>] -         Fix/improve APEI driver for AMD systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113631'>NAS-113631</a>] -         Fix bug in initializing hwm in winbindd_idmap.tdb
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113646'>NAS-113646</a>] -         Unable to see/edit SMB shares in web-GUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113727'>NAS-113727</a>] -         Web gui unresponsive after a few days
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113735'>NAS-113735</a>] -         Update TrueNAS 13 and SCALE to Samba 4.15.3
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113744'>NAS-113744</a>] -         regression in hook_setup_ha on CORE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113760'>NAS-113760</a>] -         Export keys from dataset does not render json output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113776'>NAS-113776</a>] -         /usr/local/etc/rc.d/minio needs to set MINIO_SERVER_URL before launching minio service
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113811'>NAS-113811</a>] -         TrueNAS can offer to use HDDs of one zpool in creating another!
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113814'>NAS-113814</a>] -         Graphs are empty
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113852'>NAS-113852</a>] -         catch up dmi parsing in 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113856'>NAS-113856</a>] -         SQLAlchemy 1.4 does not use `default=` when adding a column through alembic
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113861'>NAS-113861</a>] -         SQLAlchemy 1.4 compatibility
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113868'>NAS-113868</a>] -         Fix SyntaxError: 'await' outside async function
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113875'>NAS-113875</a>] -         EFI frame buffer not detected correctly
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113967'>NAS-113967</a>] -         Update TrueNAS failed 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113984'>NAS-113984</a>] -         Fix zvol open locking for FreeBSD
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114020'>NAS-114020</a>] -         Despite NAS-110600 being marked as resolved, the same bug continues to prevent me from disconnecting two outdated pools.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114027'>NAS-114027</a>] -         Fix TLS certificate issue on Minio web console (cherry-picked from 12.0-stable)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114029'>NAS-114029</a>] -         Print full name of the plugin being initialized
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114042'>NAS-114042</a>] -         net/rsync - roll back to 3.1.3
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114047'>NAS-114047</a>] -         core file found
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114052'>NAS-114052</a>] -         Checkboxes on Alert Services Page have strange behavior
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114076'>NAS-114076</a>] -         Pool shows up as unhealthy when replacing drive in pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114079'>NAS-114079</a>] -         wsdd doesn't start in TN 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114080'>NAS-114080</a>] -         SMB quotas don't work on TN 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114113'>NAS-114113</a>] -         Memory leak in zettarepl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114116'>NAS-114116</a>] -         Make minio console port configurable
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114125'>NAS-114125</a>] -         Memory leak in snmp-agent.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114146'>NAS-114146</a>] -         "Create Pool" dialog improvements
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114171'>NAS-114171</a>] -         Scale and Core: "Serial Shell" French translation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114177'>NAS-114177</a>] -         fix disk.sync with multipath disks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114188'>NAS-114188</a>] -         Use correct parameter for base user quota
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114230'>NAS-114230</a>] -         fix typo in hardware.py
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114231'>NAS-114231</a>] -         fix off by one in Mini XL enclosure mgmt on 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114246'>NAS-114246</a>] -         Empty graphs in Reporting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114310'>NAS-114310</a>] -         Update zettarepl port
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114320'>NAS-114320</a>] -         Fix handling of errors from dmu_write_uio_dbuf() on FreeBSD
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114323'>NAS-114323</a>] -         Memory leak in py-libzfs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114333'>NAS-114333</a>] -         Expand `__[POSTCOMPILE_encrypted_provider_1` into valid SQL syntax
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114335'>NAS-114335</a>] -         Virtual machines do not start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114356'>NAS-114356</a>] -         Make sure we close opened snapshot handle
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114384'>NAS-114384</a>] -         Update to Samba 4.15.4
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114398'>NAS-114398</a>] -         Properly use call_sync in synchronous method
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114427'>NAS-114427</a>] -         Load ctl.ko at boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114457'>NAS-114457</a>] -         Fix edge cases in xattr compat handling
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114468'>NAS-114468</a>] -         CVE-2022-44142 (SMB) - update samba to 4.13.17 (12.0) and 4.15.5 (13.0 and SCALE)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114469'>NAS-114469</a>] -         Fix zvol_cdev_open locking
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114502'>NAS-114502</a>] -         Can't Run VMs on 13.0-BETA.1
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114510'>NAS-114510</a>] -         pylibzfs - add checks for memory allocations
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114513'>NAS-114513</a>] -         Fix 13.0 freenas/webui in nightlies build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114529'>NAS-114529</a>] -         Fix memory leak in py-libzfs iterators
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114578'>NAS-114578</a>] -         smbd.core dump
</li>
</ul>

{{< /expand >}}

## Known Issues

<body class="ql-editor ql-editor-view" style="font-size:14px;">
  <html>
    <body>
      <table width="100%">
        <thead>
          <tr>
            <th>Key</th>
            <th>Summary</th>
            <th>Workaround</th>
          </tr>
        </thead>
        <tbody>
          <tr>
	    <td><a href="https://jira.ixsystems.com/browse/NAS-114160" target="_blank">NAS-114160</a></td>
	    <td>Connection interrupt when managing jails or plugins.</td>
	    <td>This behavior was seen in early testing and is still being investigated. No workaround is necessary as the connection resumes after a brief interruption.</td>
	  </tr>
	  <tr>
	    <td><a href="https://jira.ixsystems.com/browse/NAS-114480" target="_blank">NAS-114480</a></td>
	    <td>Unable to connect to TrueCommand Cloud</td>
	    <td>Avoid connecting 13.0-BETA1 systems to TrueCommand Cloud while this issue is investigated.</td>
	  </tr>
	  <tr>
	    <td><a href="https://jira.ixsystems.com/browse/NAS-114595" target="_blank">NAS-114595</a></td>
	    <td>VNC can't connect to bhyve VMs.</td>
	    <td>Update to 13.0 Nightlies or RC.1 (when released).</td>
	  </tr>
	  <tr>
            <td></td>
            <td>TrueNAS 12 can not replicate to or from TrueNAS 13</td>
            <td>By default, TrueNAS 12 cannot initiate a replication to or from TrueNAS 13 due to an outdated SSH client library.  Allowing replication to or from TrueNAS 13 to TrueNAS 12 requires allowing ssh.rsa algorithms. See <a href="https://www.openssh.com/txt/release-8.2" target="_blank">OpenSSH 8.2 Release</a> for security considerations. Log into the TrueNAS 13 system and go to <b>Services->SSH</b>.  Add the <b>SSH Auxiliary Parameter</b>: <code>PubkeyAcceptedAlgorithms +ssh-rsa</code>.</td>
          </tr>
          <tr>
            <td><a href="https://jira.ixsystems.com/browse/NAS-107151" target="_blank">NAS-107151</a></td>
            <td>Replication fails between legacy TrueNAS 9.10 systems and 13.0-BETA1 systems</td>
            <td>Due to numerous improvements in the replication engine and ZFS, TrueNAS 9.10 systems (or earlier) cannot replicate to or from TrueNAS 13.0-BETA1. Update the legacy TrueNAS system to 11.3 first, then 12.0, and then 13.0-BETA1.</td>
          </tr>
		 </tbody>
      </table>
    </body>
  </html>