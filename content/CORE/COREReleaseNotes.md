---
title: 13.0 Release Notes
weight: 2
aliases:
  - /releasenotes/core/13.0beta1/
  - /releasenotes/core/13.0rc1/
  - /releasenotes/core/
---

{{< toc >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

## Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| 13.0-U1 | Code-freeze | 15 June 2022 |
| 13.0-U1 | Internal Testing Sprints | 20 June > 24 June 2022 |
| 13.0-U1 | Tag | 05 July 2022 |
| 13.0-U1 | Release | 05 July 2022 |
| 13.0-U2 | Code-freeze | 24 August 2022 |
| 13.0-U2 | Internal Testing Sprints | 25 August - 02 September 2022 |
| 13.0-U2 | Tag | 05 September 2022 |
| 13.0-U2 | Release | 06 September 2022 |

## 13.0-U1 

**July 5, 2022**

iXsystems is pleased to announce the release of TrueNAS 13.0-U1.

## TrueNAS 13.0-U1 Changelog

### Improvement

* [NAS-116743](https://ixsystems.atlassian.net/browse/NAS-116743) - Optimize backward overlapping memmove\(\) </br>
* [NAS-116648](https://ixsystems.atlassian.net/browse/NAS-116648) - Show explicit warning before allowing selecting SCALE train </br>
* [NAS-116647](https://ixsystems.atlassian.net/browse/NAS-116647) - Enable back SCALE trains for migration </br>
* [NAS-116203](https://ixsystems.atlassian.net/browse/NAS-116203) - TrueNAS Capacity Monitoring via Proactive Support </br>
* [NAS-116126](https://ixsystems.atlassian.net/browse/NAS-116126) - optimize reporting\_db alert </br>
* [NAS-116053](https://ixsystems.atlassian.net/browse/NAS-116053) - cache truenas.get\_chassis\_hardware results </br>
* [NAS-116049](https://ixsystems.atlassian.net/browse/NAS-116049) - cache dmidecode -t0 data in dmidecode plugin </br>
* [NAS-115740](https://ixsystems.atlassian.net/browse/NAS-115740) - Azure Custom Endpoint </br>
* [NAS-115713](https://ixsystems.atlassian.net/browse/NAS-115713) - new api endpoint to be used for recordsize choices for webUI </br>

### Bug

* [NAS-116986](https://ixsystems.atlassian.net/browse/NAS-116986) - Update m\_series\_nvdimm\_firmware\_freebsd.py </br>
* [NAS-116967](https://ixsystems.atlassian.net/browse/NAS-116967) - add enterprise upgrade safeguard </br>
* [NAS-116904](https://ixsystems.atlassian.net/browse/NAS-116904) - rate limit disk.temperatures endpoint </br>
* [NAS-116903](https://ixsystems.atlassian.net/browse/NAS-116903) - Update FreeBSD release version to 13.1 </br>
* [NAS-116887](https://ixsystems.atlassian.net/browse/NAS-116887) - afp core </br>
* [NAS-116850](https://ixsystems.atlassian.net/browse/NAS-116850) - zfs.pool\_events hook traceback </br>
* [NAS-116739](https://ixsystems.atlassian.net/browse/NAS-116739) - sysutils/openzfs\*: Bump to nearly zfs-2.1.5 </br>
* [NAS-116735](https://ixsystems.atlassian.net/browse/NAS-116735) - net/samba - fix map\_modify behavior </br>
* [NAS-116728](https://ixsystems.atlassian.net/browse/NAS-116728) - Unable to backup Lightroom Classic Catalog directly to mapped drive on Truenas Scale </br>
* [NAS-116714](https://ixsystems.atlassian.net/browse/NAS-116714) - net/samba - re-sync with stable/angelfish </br>
* [NAS-116667](https://ixsystems.atlassian.net/browse/NAS-116667) - Upgrade to 13.0-RELEASE fails to detect data drives </br>
* [NAS-116654](https://ixsystems.atlassian.net/browse/NAS-116654) - Update fenced to not hold read mode on geom device for NVMe drives </br>
* [NAS-116643](https://ixsystems.atlassian.net/browse/NAS-116643) - Unable to expand pool </br>
* [NAS-116626](https://ixsystems.atlassian.net/browse/NAS-116626) - fix AttributeError crash in disk.sync\_all </br>
* [NAS-116623](https://ixsystems.atlassian.net/browse/NAS-116623) - Pool upgrade error is not displayed </br>
* [NAS-116585](https://ixsystems.atlassian.net/browse/NAS-116585) - Incorrect Sort by Date </br>
* [NAS-116531](https://ixsystems.atlassian.net/browse/NAS-116531) - Fix AD debug script </br>
* [NAS-116520](https://ixsystems.atlassian.net/browse/NAS-116520) - Allow setting gid 0 on new groups </br>
* [NAS-116500](https://ixsystems.atlassian.net/browse/NAS-116500) - Remove widelinks from list of sample aux params for CI </br>
* [NAS-116486](https://ixsystems.atlassian.net/browse/NAS-116486) - Simplify process of adding NFS SPNs </br>
* [NAS-116461](https://ixsystems.atlassian.net/browse/NAS-116461) - Unsetting "UPS - No Communication Warning Time" gives error </br>
* [NAS-116420](https://ixsystems.atlassian.net/browse/NAS-116420) - Deselecting all Metrics in Disk Reporting freezes page. </br>
* [NAS-116374](https://ixsystems.atlassian.net/browse/NAS-116374) - Fail to create manual ssh connection </br>
* [NAS-116366](https://ixsystems.atlassian.net/browse/NAS-116366) - Load vendor's Realtek NIC driver for RTL8125 support </br>
* [NAS-116365](https://ixsystems.atlassian.net/browse/NAS-116365) - Exception while calling periodic task \(smb.sharesec.synchronize\_acls\) </br>
* [NAS-116361](https://ixsystems.atlassian.net/browse/NAS-116361) - minor improvement in disk.sync\_all </br>
* [NAS-116325](https://ixsystems.atlassian.net/browse/NAS-116325) - zfs: Make libspl getmntent and getmntany thread-safe for FreeBSD </br>
* [NAS-116310](https://ixsystems.atlassian.net/browse/NAS-116310) - Remove automatic quota on TM preset </br>
* [NAS-116283](https://ixsystems.atlassian.net/browse/NAS-116283) - fix pool.is\_upgraded\_by\_name </br>
* [NAS-116275](https://ixsystems.atlassian.net/browse/NAS-116275) - Remove osc plugin from boot\_/format.py </br>
* [NAS-116266](https://ixsystems.atlassian.net/browse/NAS-116266) - Disable vfs\_shadow\_copy\_zfs if snapdir is visible </br>
* [NAS-116220](https://ixsystems.atlassian.net/browse/NAS-116220) - Cannot update dataset options in UI </br>
* [NAS-116217](https://ixsystems.atlassian.net/browse/NAS-116217) - Replacing a disk in TrueNAS Core 13.0 fails with a JavaScript error </br>
* [NAS-116208](https://ixsystems.atlassian.net/browse/NAS-116208) - i225 FW1.79 support issues in Core and Scale, fixes in Freebsd 14 and Ubuntu 22.05 </br>
* [NAS-116178](https://ixsystems.atlassian.net/browse/NAS-116178) - login.conf and motd need updating to FreeBSD 13 </br>
* [NAS-116142](https://ixsystems.atlassian.net/browse/NAS-116142) - Truenas 13 error upgrading pool xyz </br>
* [NAS-116070](https://ixsystems.atlassian.net/browse/NAS-116070) - SSH login failures notifications </br>
* [NAS-116066](https://ixsystems.atlassian.net/browse/NAS-116066) - fix IoThreadPoolExecutor </br>
* [NAS-116063](https://ixsystems.atlassian.net/browse/NAS-116063) - optimize system\_is\_enterprise\_ix\_hardware calls </br>
* [NAS-116029](https://ixsystems.atlassian.net/browse/NAS-116029) - smb.sharesec.query returns list index out of range </br>
* [NAS-116015](https://ixsystems.atlassian.net/browse/NAS-116015) - bhyve VirtIO driver incompatibility: Windows 10 21H2 cannot be freshly installed in a bhyve VM using VirtIO drivers on TrueNAS 13.0 RC1.</br>
* [NAS-115884](https://ixsystems.atlassian.net/browse/NAS-115884) - Unable to perform cut operation inside SMB share </br>
* [NAS-115875](https://ixsystems.atlassian.net/browse/NAS-115875) - 13 RC1 reports a collectd error in boot </br>
* [NAS-115834](https://ixsystems.atlassian.net/browse/NAS-115834) - disk.swaps\_configure is being called 3 times on pool.do\_update </br>
* [NAS-115826](https://ixsystems.atlassian.net/browse/NAS-115826) - hook\_sync\_geli is unnecessary </br>
* [NAS-115825](https://ixsystems.atlassian.net/browse/NAS-115825) - disk.sync\_all takes ~6-12mins to run on ~1.2k \+ HDD system </br>
* [NAS-115823](https://ixsystems.atlassian.net/browse/NAS-115823) - disk.synz\_zfs\_guid is being called, minimally 4 times on pool.do\_update </br>
* [NAS-115771](https://ixsystems.atlassian.net/browse/NAS-115771) - Add oneshot alert for deprecated services that are running </br>
* [NAS-114926](https://ixsystems.atlassian.net/browse/NAS-114926) - collect.d is consuming all RAM </br>
* [NAS-114924](https://ixsystems.atlassian.net/browse/NAS-114924) - Import CSR errors out on passphrase </br>
* [NAS-114798](https://ixsystems.atlassian.net/browse/NAS-114798) - NIS alert after OS upgrade to 12.0 U7 </br>
* [NAS-113750](https://ixsystems.atlassian.net/browse/NAS-113750) - isp  driver changes to role 2 initiator after update </br>
* [NAS-113514](https://ixsystems.atlassian.net/browse/NAS-113514) - Core files found </br>
* [NAS-113513](https://ixsystems.atlassian.net/browse/NAS-113513) - Files Copied to SMB Shares Have File Modified Time Adjusted </br>
* [NAS-113441](https://ixsystems.atlassian.net/browse/NAS-113441) - Replication with dedicated user broken TrueNAS Core -> TrueNAS Scale /usr/sbin is not in PATH </br>
* [NAS-113393](https://ixsystems.atlassian.net/browse/NAS-113393) - crash during snapshot enumeration in zfs\_fsrvp - regression in port to samba 4.13 </br>
* [NAS-113359](https://ixsystems.atlassian.net/browse/NAS-113359) - Minio service deletes bucket metadata on startup </br>
* [NAS-113336](https://ixsystems.atlassian.net/browse/NAS-113336) - Samba Panic after update to TrueNAS-12.0-U6.1 </br>
* [NAS-112344](https://ixsystems.atlassian.net/browse/NAS-112344) - SSH alert scraping matches a .fail tld </br>
* [NAS-112049](https://ixsystems.atlassian.net/browse/NAS-112049) - Properly initialize service announcements on boot </br>
* [NAS-109751](https://ixsystems.atlassian.net/browse/NAS-109751) - regression: folders with / \(slash\) in name appear empty over SMB shares </br>

### Security 

[13.0-U1 Security Report](https://security.truenas.com/articles/2022-07-05-Security-Report-13-0-U1/)

## 13.0-RELEASE

{{< expand "13.0-RELEASE" >}}

**May 10, 2022**

iXsystems is pleased to announce the release of TrueNAS 13.0-RELEASE.

## TrueNAS 13.0-RELEASE Changelog

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102782'>NAS-102782</a>] -         Allow Default or Previous ZVol Location in VM wizard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105814'>NAS-105814</a>] -         Dashboard grouping for Credentials section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105815'>NAS-105815</a>] -         Dashboard grouping for Storage section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105816'>NAS-105816</a>] -         Improvements to main dashboard
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105817'>NAS-105817</a>] -         Dashboard grouping for Data protection section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105818'>NAS-105818</a>] -         Dashboard grouping for Network section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105819'>NAS-105819</a>] -         Dashboard grouping for Applications section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105820'>NAS-105820</a>] -         Dashboard grouping for Shares section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105821'>NAS-105821</a>] -         Dashboard grouping for System settings section
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105822'>NAS-105822</a>] -         Dashboard grouping for Reporting
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-105868'>NAS-105868</a>] -         CPU dash widget, temperature colors
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-110523'>NAS-110523</a>] -         When ZFS dedup is enabled on a pool, use SHA512 as the checksum algorithm
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111124'>NAS-111124</a>] -         cache static info and optimize system.info on TN CORE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111972'>NAS-111972</a>] -         enclosure rewrite on CORE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111974'>NAS-111974</a>] -         get/set SES cython module for CORE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113285'>NAS-113285</a>] -         Use O_EMPTY_PATH when converting pathref FSP to IO FSP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115640'>NAS-115640</a>] -         Use NDFREE_PNBUF if available on FreeBSD
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115700'>NAS-115700</a>] -         Add "zpool list -v" output to debug
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115720'>NAS-115720</a>] -         Azure Custom Endpoint
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115743'>NAS-115743</a>] -         Move plugins using 12.2-RELEASE to consume 12.3-RELEASE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115880'>NAS-115880</a>] -         update intel-pcm port fbsd 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115928'>NAS-115928</a>] -         bsd.geom eating too much memory for no benefit
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115931'>NAS-115931</a>] -         use defaultdict in geom.cache plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115970'>NAS-115970</a>] -         fix restart_services method in pool.py
</li>
</ul>

### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-100422'>NAS-100422</a>] -         rsync task on a single file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102185'>NAS-102185</a>] -         Add ability to view that VM's logs to UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113617'>NAS-113617</a>] -         Update iconik plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114888'>NAS-114888</a>] -         Update Asigra plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115502'>NAS-115502</a>] -         Help Widget for TrueNAS dashboard in CORE
</li>
</ul>

### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-102089'>NAS-102089</a>] -         Improvements to Account pages
</li>
</ul>

### Bug

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-106381'>NAS-106381</a>] -         get rid of /tmp/failover.json
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108666'>NAS-108666</a>] -         netcli operation hangs on uniq
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-108777'>NAS-108777</a>] -         replication allows mountroot to be set to /
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112460'>NAS-112460</a>] -         fix memory leak in py-bsd/enclosure.pyx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112465'>NAS-112465</a>] -         fix edge-case memory leak in py-bsd/enclosures.pyx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-112480'>NAS-112480</a>] -         failover.internal_interface.detect broken on 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113211'>NAS-113211</a>] -         Merge FreeBSD and Linux samba repos
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113284'>NAS-113284</a>] -         Samba CVE-2021-20316. Symlink race error can allow metadata read and modify outside of the exported share.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113368'>NAS-113368</a>] -         Jail stopped working after upgrade to 12.0-U6.1 with utf-8 decoding error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114261'>NAS-114261</a>] -         Fix KeyError for edge case where backup of domain secrets is incomplete
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114370'>NAS-114370</a>] -         MacOS SMB clients may behave badly on inode reuse
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114380'>NAS-114380</a>] -         ctl collectd plugin has static sized arrays based on CTL_MAX_PORTS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114778'>NAS-114778</a>] -         atime not handled properly in SMB transfers
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114952'>NAS-114952</a>] -         WS-Discovery not working after reboot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114960'>NAS-114960</a>] -         Long SMART Extended Self Test stuck at 90% for more than 48 hours
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114986'>NAS-114986</a>] -         Replication fails with: can't compare offset-naive and offset-aware datetimes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114987'>NAS-114987</a>] -         Can not create pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115011'>NAS-115011</a>] -         13.0 beta 1: Configuration file format is too old
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115110'>NAS-115110</a>] -         Webui userquotas / groupquotas improperly requires users to exist on server in order to remove a quota in bulk change tool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115426'>NAS-115426</a>] -         Active Directory doesn't allow saving or warn when NetBIOS name > 15 characters
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115511'>NAS-115511</a>] -         SMB GUI for Recycle Bin Advising Bad Config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115514'>NAS-115514</a>] -         Incorrect Units used in Network Repoting (Octets vs Mb)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115607'>NAS-115607</a>] -         Kernel panics on I/O to spun down disks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115633'>NAS-115633</a>] -         Network graph: incorrect legend units
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115639'>NAS-115639</a>] -         scale - zfs recordsize artificially capped at 1M. Should be tunable to 16M
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115663'>NAS-115663</a>] -         in Sharing / SMB / Edit Share ACL, first entry cannot be deleted even if multiple present
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115790'>NAS-115790</a>] -         Backport FreeBSD VOP error code fixes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115847'>NAS-115847</a>] -         Community plugins may fail due to 12.2-RELEASE EOL
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115863'>NAS-115863</a>] -         13.0-RC1 did not attach my geli data drives
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115865'>NAS-115865</a>] -         `middleware.block_hooks`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115881'>NAS-115881</a>] -         fix recordsize schema
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115913'>NAS-115913</a>] -         Secure temporary dir with `generate_ssh_key_pair`
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115915'>NAS-115915</a>] -         Reduce the vulnerability to timing attacks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115938'>NAS-115938</a>] -         Tryinto replicate ix-systems
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115947'>NAS-115947</a>] -         Ignore I101 in flake8 linter
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115952'>NAS-115952</a>] -         Update samba to 4.15.7
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115956'>NAS-115956</a>] -         SMBD Core Dump after transfer of huge data volume (time machine backup 800GB)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115964'>NAS-115964</a>] -         Fix integration tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115969'>NAS-115969</a>] -         Permit case-insensitive renames in Samba 4.15
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115977'>NAS-115977</a>] -         Add `ReplicationContext.remove_dataset` so we don't forget to update …
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116024'>NAS-116024</a>] -         net/netatalk3 - enable debugging
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116028'>NAS-116028</a>] -         Netatalk asserts on symlink reads due to uninitialized adouble metadata
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-116089'>NAS-116089</a>] -         import by name on failover event
</li>
</ul>

{{< /expand >}}

## 13.0-RC1

{{< expand "13.0-RC1" >}}
**April 19, 2022**

iXsystems is pleased to announce the release of TrueNAS 13.0-RC1.

{{< hint warning >}}
This is a an early release meant for previewing and testing features and is **not recommended for production use.**
{{< /hint >}}

### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111551'>NAS-111551</a>] -         Slight optimization possible in fsavl_create 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114372'>NAS-114372</a>] -         Reduce shutdown/reboot time
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114412'>NAS-114412</a>] -         Add "yellow" pool status
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114564'>NAS-114564</a>] -         Increase default number of NFS servers in TrueNAS 13 and SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114628'>NAS-114628</a>] -         multipath.query needs to use geom.cache plugin on 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114629'>NAS-114629</a>] -         DeviceService needs to use geom.cache plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114773'>NAS-114773</a>] -         Make xattr_compat a tunable, zfs_xattr_compat
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114779'>NAS-114779</a>] -         simplify device_* related plugins
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114783'>NAS-114783</a>] -         cache camcontrol_list in geom.cache plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114966'>NAS-114966</a>] -         Reduce context switches during GEOM taste
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114968'>NAS-114968</a>] -         Optimize write protection MODE SENSE in da(4).
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114970'>NAS-114970</a>] -         optimize overprovisioning logic when creating zpool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114992'>NAS-114992</a>] -         gpart add and gpart bootcode generate xml
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115236'>NAS-115236</a>] -         Merge zfs-2.1.3
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115362'>NAS-115362</a>] -         Include ZFS upstream fixes for 13.0-RC1
</li>
</ul>
    
### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114275'>NAS-114275</a>] -         Replication: Provide understanding for the scope of the "Encryption" options usage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114714'>NAS-114714</a>] -         cache get_storage_devices_topology in geom.cache plugin
</li>
</ul>

### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113981'>NAS-113981</a>] -         make middlewared scale on large systems
</li>
</ul>
    
### Bug

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111109'>NAS-111109</a>] -         Changing Network settings disconnects Jails and VMs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111550'>NAS-111550</a>] -         holds nvlist leaked in zfs send
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-111553'>NAS-111553</a>] -         Incorrect libzfs vdev path handling
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113231'>NAS-113231</a>] -         Pool import slow after large amount of data written
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113781'>NAS-113781</a>] -         TrueNAS Scale - iftop is taking huge CPU load 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-113904'>NAS-113904</a>] -         WebUI - Services / UPS / Settings: Save button remains disabled after setting changes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114176'>NAS-114176</a>] -         Cloud Sync Fail with snapshots enabled and existing Zvol
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114349'>NAS-114349</a>] -         The following system core files were found: zfs.core
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114533'>NAS-114533</a>] -         Replication no longer works on nightly build
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114536'>NAS-114536</a>] -         truecommand.poll_api_for_status jobs can queue up
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114555'>NAS-114555</a>] -         Ensure that zpool handles are freed in iterator
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114594'>NAS-114594</a>] -         After update to 12.0-U8 S3 fails to start
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114616'>NAS-114616</a>] -         Packets length validation in CTL HA
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114623'>NAS-114623</a>] -         fix get_smartd_schedule_pieces
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114627'>NAS-114627</a>] -         cache multipath disks in geom plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114676'>NAS-114676</a>] -         Dry run action fails in Cloud Sync Task edit mode
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114682'>NAS-114682</a>] -         Unable to select 0 in special vdev for metadata size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114718'>NAS-114718</a>] -         WebUI menu not working consistently
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114724'>NAS-114724</a>] -         Minio Service does not start from UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114748'>NAS-114748</a>] -         vmstat json output format has been changed in TrueNAS 13.0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114750'>NAS-114750</a>] -         S3 Service "TLS Server URI" is wrong/misleading. It should be "TLS Server Hostname"
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114761'>NAS-114761</a>] -         Incorrect wildcard certificate parsing during creation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114780'>NAS-114780</a>] -         update geom.cache on devd events
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114794'>NAS-114794</a>] -         Replication failed, None Command failed with code 1..
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114808'>NAS-114808</a>] -         fix acltype logic in sysdataset plugin
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114871'>NAS-114871</a>] -         net/samba - make socket listen backlog configurable on FreeBSD
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114895'>NAS-114895</a>] -         Fix enclosure alert 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114898'>NAS-114898</a>] -         Fix `hold_pending_snapshots` feature allowing for incremental base to…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114899'>NAS-114899</a>] -         Fix unit tests
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114904'>NAS-114904</a>] -         Improve `zfs.snapshot.query` `{"count": True}` performance.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114922'>NAS-114922</a>] -         FusionIO Card (PCI Passthru to underlying VM) Blocks Automatic Update in Web GUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114945'>NAS-114945</a>] -         Expand warning for shell modifications
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114978'>NAS-114978</a>] -         Default to enabling SA-based xattrs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114986'>NAS-114986</a>] -         Replication fails with: can't compare offset-naive and offset-aware datetimes
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114995'>NAS-114995</a>] -         snmp-agent.service: Main process exited
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-114998'>NAS-114998</a>] -         net/samba - fix zfs_space related crash
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115024'>NAS-115024</a>] -         VSS integration is broken in nightlies
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115027'>NAS-115027</a>] -         Local User creation taking over 4-5 minutes to Save
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115053'>NAS-115053</a>] -         TrueNAS-13.0-BETA1 does not report hostname to DHCP server at boot
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115059'>NAS-115059</a>] -         Optimize SMB passdb sync
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115071'>NAS-115071</a>] -         Improve user.query and group.query performance
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115113'>NAS-115113</a>] -         Fix validation for raw uids / gids in pool.dataset.set_quota
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115136'>NAS-115136</a>] -         Update deprecated package ng2-validation
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115140'>NAS-115140</a>] -         Convert webdav etc group to use render_ctx
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115188'>NAS-115188</a>] -         invalidate geom cache on failover event (13)
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115198'>NAS-115198</a>] -         Reuse fd in etc file generation and run unlink in thread
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115203'>NAS-115203</a>] -         Improve permissions handling in temporary keytab files
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115205'>NAS-115205</a>] -         fix number_of_disks logging logic
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115215'>NAS-115215</a>] -         Remove pwd and grp lookups from minio etc file
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115217'>NAS-115217</a>] -         Expand Pool gives traceback if there's a pmem  devicein the pool
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115234'>NAS-115234</a>] -         import zpools by guid on failover event
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115240'>NAS-115240</a>] -         Job leak in middlewared
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115247'>NAS-115247</a>] -         Fix checking if public and private key match on SCALE
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115273'>NAS-115273</a>] -         Employ `flake8-import-order` to ensure correct import orders accordin…
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115277'>NAS-115277</a>] -         Fix `replication.list_datasets` crashing when `SSH+NETCAT` transport is used
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115290'>NAS-115290</a>] -         Bug fix for attaching disk
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115352'>NAS-115352</a>] -         Memory leak in zettarepl
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115408'>NAS-115408</a>] -         Add option to enable shares on pool import
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115422'>NAS-115422</a>] -         fix typo in disk_/sync.py causing KeyError
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115432'>NAS-115432</a>] -         net.inet.tcp.recvbuf_inc was removed in 13
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115523'>NAS-115523</a>] -         fix disk.get_part_xml
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115524'>NAS-115524</a>] -         fix disk.list_partitions and disk.gptid_from_part
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115532'>NAS-115532</a>] -         net/netatalk3 - fix multiple CVEs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115575'>NAS-115575</a>] -         fix graphics/drm-fbsd13-kmod
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115580'>NAS-115580</a>] -         Fix AD join failure messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/NAS-115604'>NAS-115604</a>] -         connecting to TC is broken on 13 (potentially stable/master too)
</li>
</ul>

{{< /expand >}}

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

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| 13.0-Release | [NAS-116493](https://jira.ixsystems.com/browse/NAS-116493) | Nextcloud (official) plugin does not install . |  | 13.0-U2 (targeted) |
| 13.0-Release | [NAS-116217](https://jira.ixsystems.com/browse/NAS-116217) | Disk replacement fails with JavaScript error. | Use the CLI to manually replace the disk: [CLI method](#cli-disk-replacements). | 13.0-U1 |
| 13.0-Release | [NAS-116262](https://jira.ixsystems.com/browse/NAS-116262) | NFS nconnect feature not stable on 13.0 | During multi-client usage with the client-side nconnect option used, the NFS server becomes unstable. This feature has been verified to work on SCALE, but resolution ETA is unknown for 13.0. | SCALE |
| 13.0-Release, 12.0-U8.1 | [NAS-116160](https://jira.ixsystems.com/browse/NAS-116160) | Netatalk 3.1.13 introduced an edge-case bug where AFP metadata could be stripped unexpectedly on file read | Deployments that rely on AFP sharing should avoid upgrading to 13.0 until the 13.0-U1 release. Snapshot any AFP-shared datasets before attempting to upgrade to a 13.0 release. | 13.0-U1 |
| 13.0-Release | [NAS-116090](https://jira.ixsystems.com/browse/NAS-116090) | Mini 3.0 E+ View Enclosure showing populated drive bay as empty. | The enclosure view for all Mini 3.0 platforms will show the top bay as unpopulated even when a drive is inserted. | 13.0-U1 |
| 13.0-Release | [NAS-116185](https://jira.ixsystems.com/browse/NAS-116185) | 13.0 Train shows Community Release Only - Not Enterprise Supported. | While core users can use this train to upgrade from the UI this release is not suitable for enterprise customers, and no support will be provided for enterprise customers.  This notice will be removed in a future release.  | 13.0-U2 release (targeted) |
| 13.0-BETA1 | [NAS-114160](https://jira.ixsystems.com/browse/NAS-114160) | Connection interrupt when managing jails or plugins. | This behavior was seen in early testing and is still being investigated. No workaround is necessary as the connection resumes after a brief interruption. | 13.1-ALPHA1 (targeted) |
| 13.0-BETA1 | [NAS-114595](https://jira.ixsystems.com/browse/NAS-114595) | VNC can't connect to bhyve VMs. | Update to 13.0 Nightlies or 13.0-U1 (when available). | 13.0-U1 |
| 12.0-U8.1 and 13.0-BETA1 | [NAS-115838](https://jira.ixsystems.com/browse/NAS-115838) | Plugin install failures due to end of life (EoL) 12.2 FreeBSD release. | Resolved separately from TrueNAS releases on April 19, 2022. |
| 13.0-BETA1 | [NAS-114480](https://jira.ixsystems.com/browse/NAS-114480) | Unable to connect to TrueCommand Cloud. | Avoid connecting 13.0-BETA1 systems to TrueCommand Cloud while this issue is investigated. | 13.0-RC1 |
| N/A | N/A | TrueNAS 12 cannot replicate to or from TrueNAS 13 | By default, TrueNAS 12 cannot initiate a replication to or from TrueNAS 13 due to an outdated SSH client library. Allowing replication to or from TrueNAS 13 to TrueNAS 12 requires allowing ssh.rsa algorithms. See [OpenSSH 8.2 Release](https://www.openssh.com/txt/release-8.2) for security considerations. Log into the TrueNAS 13 system and go to **Services->SSH**. Add the **SSH Auxiliary Parameter**: `PubkeyAcceptedAlgorithms +ssh-rsa`. | N/A |
| 12.0-BETA2 | [NAS-107151](https://jira.ixsystems.com/browse/NAS-107151) | Replication fails between legacy TrueNAS 9.10 systems and 13.0-BETA1 systems. | Due to numerous improvements in the replication engine and ZFS, TrueNAS 9.10 systems (or earlier) cannot replicate to or from TrueNAS 13.0-BETA1. Update the legacy TrueNAS system to 11.3 first, then 12.0, and then 13.0. | N/A |


## CLI Disk Replacements

{{< hint warning >}}
These instructions apply to systems installed with 13.0-Release only.

CLI commands are meant for advanced users and, when improperly applied, can result in serious system instability or production down scenarios.
Please use CLI commands carefully and **always back up critical data** before attempting this kind of procedure.
{{< /hint >}}

1. On a system with 13.0-RELEASE installed, access the TrueNAS shell either by logging in to the web interface and clicking **Shell** or accessing the CLI remotely using [SSH]({{< relref "ConfiguringSSH.md" >}}).
   Type in the commands formatted in these code blocks and replace any `<text>` strings with data unique to your system.
2. Find the pool and disk to replace:
   - `zpool list` shows the name of the pools on the system.
   - `zpool status <pool name>` shows the specific pool and disk state for the pool. Replace *<pool name>* with the name of your specific pool.
   - copy or note the `gptid/####` identifier for the disk to replace.
   - Example:
     ```
	  root@examplemini[~]# zpool list
	  NAME	SIZE	ALLOC	FREE	CKPOINT	EXPANDSZ	FRAG	CAP	DEDUP	HEALTH
	  tank	2.72T	444K	2.72T	      -	       -	  0%	 0%	1.00x	ONLINE
	  root@examplemini[~]# zpool status tank
	    pool: tank
	   state: ONLINE
	  config:
	  
		NAME											STATE	READ	WRITE	CKS
	 UM
		tank											ONLINE	   0	    0
	 0
		  mirror-0										ONLINE	   0	    0
	 0
			gptid/c7a10e6d-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	 0
			gptid/c7acbd9e-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	 0
	
	 errors: No known data errors
     ```
3. `curl -s https://raw.githubusercontent.com/truenas/gist/main/replace_disk.py -o replace_disk.py` downloads the disk replacement tool.
4. `python3 replace_disk.py <pool_name> <gptid/####> <ada#>` replaces the named disk in the pool with the designated spare. Replace *<pool_name>* with the name of the pool with the disk to be replaced, *<gptid/####>* with the disk identifier noted above in step 2, and *<ada#>* with the name of the unused disk to use as the replacement.
   Example:
   ```
   root@examplemini[~]# python3 replace_disk.py tank gptid/c7acbd9e-ca3d-11ec-8ec6-d05099c356a4 ada3
   Replace initiated.
   root@examplemini[~]#zpool status tank
   	    pool: tank
	   state: ONLINE
	    scan: resilvered 13.0M in 00:00:01 with 0 errors on Thu May 19 14:12:21 2022
	  config:
	  
		NAME											STATE	READ	WRITE	CKS
	UM
		tank											ONLINE	   0	    0
	0
		  mirror-0										ONLINE	   0	    0
	0
			gptid/c7a10e6d-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	0
			gptid/5e10e97f-d7b8-11ec-889a-d05099c356a4					ONLINE	   0	    0
	0
	
	errors: No known data errors
	root@examplemini[~]#
   ```
