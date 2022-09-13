---
title: "SCALE 22.12 Bluefin"
aliases:
 - /scale/scalenextversion/
weight: 1000
---

{{< toc >}}

While the current version of TrueNAS SCALE receives maintenance updates, the next major version is in active development.
This article collects various details about this upcoming major version: early release notes, developer notes, and how to help test the in-development version.
This is a work in progress and details are added as development progresses on this SCALE release.

{{< hint danger >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

Want to get involved in helping to collaborate on TrueNAS SCALE? Join our [Official Discord Server.](https://discord.com/invite/Q3St5fPETd)

## System Requirements

* Any x86_64 compatible (Intel or AMD) processor
* 8GB of RAM (More is better)
* 20GB Boot Device

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" type="page" >}}

## SCALE Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| SCALE 22.12.BETA.1 | Code-freeze | 24 August 2022 |
| SCALE 22.12.BETA.1 | Internal Testing Sprints | 29 August 2022 - 09 September 2022 |
| SCALE 22.12.BETA.1 | Tag | 12 September 2022 |
| SCALE 22.12.BETA.1 | Release | 13 September 2022 |
| SCALE 22.12.BETA.2 | Code-freeze | 28 September 2022 |
| SCALE 22.12.BETA.2 | Internal Testing Sprints | 03 October 2022 - 14 October 2022 |
| SCALE 22.12.BETA.2 | Tag | 17 October 2022 |
| SCALE 22.12.BETA.2 | Release | 18 October 2022 |
| SCALE 22.12.RC.1 | Code-freeze | 26 October 2022 |
| SCALE 22.12.RC.1 | Internal Testing Sprints | 31 October 2022 - 11 November 2022 |
| SCALE 22.12.RC.1 | Tag | 14 November 2022 |
| SCALE 22.12.RC.1 | Release | 15 November 2022 |
| SCALE 22.12.0 | Code-freeze | 23 November 2022 |
| SCALE 22.12.0 | Internal Testing Sprints | 24 November 2022 - 09 December 2022 |
| SCALE 22.12.0 | Tag | 12 December 2022 |
| SCALE 22.12.0 | Release | 13 December 2022 |
| SCALE 22.12.1 | Code-freeze | 18 January 2023 |
| SCALE 22.12.1 | Internal Testing Sprints | 19 January 2023 - 03 February 2023 |
| SCALE 22.12.1 | Tag | 06 February 2023 |
| SCALE 22.12.1 | Release | 07 February 2023 |

## Obtaining the Release

To download an <file>.iso</file> file for installing SCALE Bluefin, go to https://www.truenas.com/truenas-scale/ and click **Download**.
Manual update files are also available at this location.

To upgrade an existing SCALE install, log in to your SCALE web interface and go to **System Settings > Update**.

{{< hint warning >}}
SCALE is developed as an appliance that uses specific Linux packages with each release. Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.
{{< /hint >}}

## 22.12-BETA.1 

**September 13, 2022**

TrueNAS SCALE 22.12-BETA.1 has been released and includes many new features and improved functionality. SCALE 22.12-Beta.1 features:

* STIG hardening through limiting web login and API access by restricting access for non-approved IP addresses and ranges. 
  Additional STIG hardining through disabling root login access and tying user to API ACLs (target SCALE 22.12-Beta.2).  
* Storj iX Cloud Sync backup solution now available.
* Apps improvments including adding Storj to the official catalog and adding a default Apps catalog exclusive for Enterprise customers (SCALE 22.12-Beta.1)
* Redesign of Storage web UI inclduing new dashboards for Storage, Pools, Dashboards, Devices and other storage related areas
* Enclosure management for all iXsystems platforms 
* Improved clustering over the Angelfish clustered SMB (aka Windows storage).

Additional feature in future Bluefin releases:
* Applications improvements include:
  * Add bulk upgrade action for selected apps (target SCALE 22.12-RC.1)
  * Add new Apps widget (target SCALE 22.12-RC.1)
  * Add a better Apps directory (target SCALE 22.12-RC.1)
  * Improve and simplify the app installation process (22.12-RC.1) 
* FIPS validated SSL Module for SCALE Enterprise (target SCALE 22.12-RC.1)
* Replacing gluster node API (target SCALE 22.12-RC.1)
* FIPS 140-3 Level 1 Compliant Crypto Module for Enterprise Only using CorSSL module as a replacement for OpenSSL (target SCALE 22.12-RC.1)
* Add disk count scalability that includes improved boot time (targe SCALE 22.12-RC.1)
* Replacing nodes (target SCALE 22.12-RC.1)
* High-Availability Active/Standby (target SCALE 22.12 release)
* Improved TrueNAS feedback system (target SCALE 22.12 release)
* Support for Enterprise and Pro license keys (target SCALE 22.12 release)

With these new features, the first release (“Bluefish”) of TrueNAS SCALE is feature complete and scheduled to go through the RC and RELEASE process in Q4 of 2022.

## 22.12-BETA.1 Change Log

### Epic

[NAS-116606](https://ixsystems.atlassian.net/browse/NAS-116606) Storj iXsystems Backup Solution
[NAS-114524](https://ixsystems.atlassian.net/browse/NAS-114524) Limiting Web Login and API access for security hardening
[NAS-114484](https://ixsystems.atlassian.net/browse/NAS-114484) Storage Page Redesign
[NAS-111233](https://ixsystems.atlassian.net/browse/NAS-111233) WebUI Unit Tests
[NAS-110834](https://ixsystems.atlassian.net/browse/NAS-110834) WebUI Code Cleanup

### Improvement

[NAS-117841](https://ixsystems.atlassian.net/browse/NAS-117841) Ban `res` as variable name
[NAS-117803](https://ixsystems.atlassian.net/browse/NAS-117803) Blank dashboard of the first login
[NAS-117802](https://ixsystems.atlassian.net/browse/NAS-117802) Use truenas tls endpoint for usage stats
[NAS-117775](https://ixsystems.atlassian.net/browse/NAS-117775) Update kubernetes related dependencies from upstream
[NAS-117769](https://ixsystems.atlassian.net/browse/NAS-117769) Add support for multi selection in ix-explorer
[NAS-117719](https://ixsystems.atlassian.net/browse/NAS-117719) Do not run CI checks when only RE tests were changed
[NAS-117707](https://ixsystems.atlassian.net/browse/NAS-117707) Merge zfs-2.1.6-staging
[NAS-117704](https://ixsystems.atlassian.net/browse/NAS-117704) Enforce linting rules in CI
[NAS-117699](https://ixsystems.atlassian.net/browse/NAS-117699) add tests for copy\_file\_range \(server-side copy\) for NFSv4.2
[NAS-117696](https://ixsystems.atlassian.net/browse/NAS-117696) Update bluefin nightlies mirrors
[NAS-117646](https://ixsystems.atlassian.net/browse/NAS-117646) Reduce amount on any's
[NAS-117634](https://ixsystems.atlassian.net/browse/NAS-117634) Refactor bootenv-status.component
[NAS-117618](https://ixsystems.atlassian.net/browse/NAS-117618) Review pickle module usage in middlewared
[NAS-117614](https://ixsystems.atlassian.net/browse/NAS-117614) middleware files in /var/run should be in dedicated run directory
[NAS-117606](https://ixsystems.atlassian.net/browse/NAS-117606) Refactor Alert Services to ix-forms
[NAS-117595](https://ixsystems.atlassian.net/browse/NAS-117595) Add webdav shares to the `pool.dataset.details`
[NAS-117576](https://ixsystems.atlassian.net/browse/NAS-117576) Optimize calls on Storage pages
[NAS-117574](https://ixsystems.atlassian.net/browse/NAS-117574) Update Roles column on Datasets page
[NAS-117540](https://ixsystems.atlassian.net/browse/NAS-117540) Select the correct pool on datasets page when clicking on "Manage Datasets" on Pools Dashboard
[NAS-117539](https://ixsystems.atlassian.net/browse/NAS-117539) Make the first row of table selected state when Datasets page first loads
[NAS-117528](https://ixsystems.atlassian.net/browse/NAS-117528) ctdb.public.ips.interface\_choices require interfaces with an IP
[NAS-117445](https://ixsystems.atlassian.net/browse/NAS-117445) Charts MinIO pod does not follow standard min.io folder structure
[NAS-117401](https://ixsystems.atlassian.net/browse/NAS-117401) In UI allow users to set trust\_guest\_rx\_filters for NIC device in VMs
[NAS-117398](https://ixsystems.atlassian.net/browse/NAS-117398) Add Storj as Cloud Sync service
[NAS-117385](https://ixsystems.atlassian.net/browse/NAS-117385) options.only\_cached: Field was not expected when calling disk.temperatures
[NAS-117372](https://ixsystems.atlassian.net/browse/NAS-117372) Add client side validation for app names
[NAS-117371](https://ixsystems.atlassian.net/browse/NAS-117371) Make `type` field in pool topology and boot.get\_state similar
[NAS-117366](https://ixsystems.atlassian.net/browse/NAS-117366) Disable `patch` status check from codecov
[NAS-117363](https://ixsystems.atlassian.net/browse/NAS-117363) Split Vdev type into separate types
[NAS-117354](https://ixsystems.atlassian.net/browse/NAS-117354) Change AD cache setting label
[NAS-117333](https://ixsystems.atlassian.net/browse/NAS-117333) UX: Wrong lock icons on datasets table
[NAS-117308](https://ixsystems.atlassian.net/browse/NAS-117308) Minor improvements to pool.dataset.details endpoint
[NAS-117301](https://ixsystems.atlassian.net/browse/NAS-117301) UX Remove redundant close icon on VM>Devices page
[NAS-117299](https://ixsystems.atlassian.net/browse/NAS-117299) less expensive chart.release.query endpoint
[NAS-117279](https://ixsystems.atlassian.net/browse/NAS-117279) Please add provisioning info to pool.dataset.query
[NAS-117269](https://ixsystems.atlassian.net/browse/NAS-117269) failover.disabled\_reasons returns a new NO\_FENCED that webUI needs to account for
[NAS-117255](https://ixsystems.atlassian.net/browse/NAS-117255) Add units tests for Dataset Capacity Management Card
[NAS-117233](https://ixsystems.atlassian.net/browse/NAS-117233) New Google Cloud Storage task field: bucket\_policy\_only
[NAS-117221](https://ixsystems.atlassian.net/browse/NAS-117221) Improvements for custom icons
[NAS-117215](https://ixsystems.atlassian.net/browse/NAS-117215) IPv6 NDP doesn't work by default on VMs
[NAS-117198](https://ixsystems.atlassian.net/browse/NAS-117198) Enable linter rule no-trailing-spaces
[NAS-117172](https://ixsystems.atlassian.net/browse/NAS-117172) webui should use filesystem.acltemplate APIs for presenting templates to users
[NAS-117119](https://ixsystems.atlassian.net/browse/NAS-117119) Change loading animation in permissions card
[NAS-117108](https://ixsystems.atlassian.net/browse/NAS-117108) Find a different way of hiding dynamic controls other than disabled
[NAS-117041](https://ixsystems.atlassian.net/browse/NAS-117041) CLONE - Allow custom Management URLs for Apps
[NAS-116905](https://ixsystems.atlassian.net/browse/NAS-116905) ZFS scrub performance optimizations
[NAS-116902](https://ixsystems.atlassian.net/browse/NAS-116902) Expose ZFS dataset case sensitivity setting via sb\_opts
[NAS-116838](https://ixsystems.atlassian.net/browse/NAS-116838) Add a query-option for pool.dataset.query to join dataset alerts with results
[NAS-116755](https://ixsystems.atlassian.net/browse/NAS-116755) Reword label for ACL types in SCALE permission editor
[NAS-116736](https://ixsystems.atlassian.net/browse/NAS-116736) Expand information available in simple dataset handles is libzfs snapshot iterator
[NAS-116685](https://ixsystems.atlassian.net/browse/NAS-116685) Add file size to manifest.json
[NAS-116675](https://ixsystems.atlassian.net/browse/NAS-116675) Add info about RSS support to interfaces API
[NAS-116570](https://ixsystems.atlassian.net/browse/NAS-116570) Refactor CloudCredentialsFormComponent
[NAS-116482](https://ixsystems.atlassian.net/browse/NAS-116482) Investigate whether to expose zvol snapdev
[NAS-116375](https://ixsystems.atlassian.net/browse/NAS-116375) Locate source of periodic writes to boot-pool and minimize
[NAS-116343](https://ixsystems.atlassian.net/browse/NAS-116343) Refactor bootenv-list.component to ix-tables
[NAS-116138](https://ixsystems.atlassian.net/browse/NAS-116138) Implement validation for Interface name
[NAS-115959](https://ixsystems.atlassian.net/browse/NAS-115959) User Feedback Service API
[NAS-115620](https://ixsystems.atlassian.net/browse/NAS-115620) Use newer nft tables syntax for failover iptables plugin
[NAS-113922](https://ixsystems.atlassian.net/browse/NAS-113922) gluster volume deletion integration tests
[NAS-113681](https://ixsystems.atlassian.net/browse/NAS-113681) Add support for prefer-as-const for class members
[NAS-113183](https://ixsystems.atlassian.net/browse/NAS-113183) Add loading state for ix-select/ix-combobox
[NAS-112616](https://ixsystems.atlassian.net/browse/NAS-112616) Enable prefer-early-return
[NAS-112047](https://ixsystems.atlassian.net/browse/NAS-112047) Investigate quiescing of VMs and Pods \(PVCs?\) during snapshot
[NAS-111488](https://ixsystems.atlassian.net/browse/NAS-111488) Implement disk\_resize equivalent in SCALE
[NAS-111356](https://ixsystems.atlassian.net/browse/NAS-111356) network settings general improvements
[NAS-108490](https://ixsystems.atlassian.net/browse/NAS-108490) Add nvdimm related management tools

### Bug

[NAS-118080](https://ixsystems.atlassian.net/browse/NAS-118080) fix scale nightlies build \(update collectd to 5.12.0-11\)
[NAS-118048](https://ixsystems.atlassian.net/browse/NAS-118048) remove trailing forward slash in corssl package
[NAS-117992](https://ixsystems.atlassian.net/browse/NAS-117992) VM not created in SCALE 22.12-BETA.1 testing
[NAS-117987](https://ixsystems.atlassian.net/browse/NAS-117987) certificate verify failed: self signed certificate in certificate chain
[NAS-117931](https://ixsystems.atlassian.net/browse/NAS-117931) Using HTTP Basic Auth will bypass 2FA
[NAS-117889](https://ixsystems.atlassian.net/browse/NAS-117889) fix KeyError in pool.dataset.details
[NAS-117886](https://ixsystems.atlassian.net/browse/NAS-117886) Fix `Manage Datasets` button link on the `Pools Dashboard`
[NAS-117885](https://ixsystems.atlassian.net/browse/NAS-117885) Shift winbindd\_cache.tdb path in middleware
[NAS-117877](https://ixsystems.atlassian.net/browse/NAS-117877) Improve KDC detection during domain join
[NAS-117868](https://ixsystems.atlassian.net/browse/NAS-117868) Do not run post stop actions if VM is suspended
[NAS-117865](https://ixsystems.atlassian.net/browse/NAS-117865) Fix timeout during idmap updates
[NAS-117864](https://ixsystems.atlassian.net/browse/NAS-117864) Fix edge case for k8s node ca
[NAS-117860](https://ixsystems.atlassian.net/browse/NAS-117860) Ensure that we always have a valid krb5.conf during AD start
[NAS-117858](https://ixsystems.atlassian.net/browse/NAS-117858) relax zfs\_space VFS object validation
[NAS-117852](https://ixsystems.atlassian.net/browse/NAS-117852) Fix path behaviour when disk type vm device is created
[NAS-117842](https://ixsystems.atlassian.net/browse/NAS-117842) fix creating/updating bonds
[NAS-117840](https://ixsystems.atlassian.net/browse/NAS-117840) Remove customized nss-pam-ldap from build
[NAS-117829](https://ixsystems.atlassian.net/browse/NAS-117829) fix failover.disabled.reasons....again
[NAS-117825](https://ixsystems.atlassian.net/browse/NAS-117825) Remove python nslcd client
[NAS-117823](https://ixsystems.atlassian.net/browse/NAS-117823) Restore loading indication on Storage pages
[NAS-117806](https://ixsystems.atlassian.net/browse/NAS-117806) update network configuration domain to match AD one
[NAS-117801](https://ixsystems.atlassian.net/browse/NAS-117801) Add some explicit tests for firstboot
[NAS-117795](https://ixsystems.atlassian.net/browse/NAS-117795) Move replace-disk-dialog to storage2
[NAS-117789](https://ixsystems.atlassian.net/browse/NAS-117789) Errors in ix-page-title-header on one pages disable header on all pages
[NAS-117779](https://ixsystems.atlassian.net/browse/NAS-117779) Enforce passwd/group specified reference files
[NAS-117777](https://ixsystems.atlassian.net/browse/NAS-117777) Unable to join active directory if SMB is not started first
[NAS-117776](https://ixsystems.atlassian.net/browse/NAS-117776) Clean chroot mounts when making update image
[NAS-117768](https://ixsystems.atlassian.net/browse/NAS-117768) undefined in filter box on some pages
[NAS-117762](https://ixsystems.atlassian.net/browse/NAS-117762) Build with BlueFin with Samba 4.17
[NAS-117761](https://ixsystems.atlassian.net/browse/NAS-117761) fix typo of nft fw rules for SCALE HA
[NAS-117755](https://ixsystems.atlassian.net/browse/NAS-117755) \[SCALE\] Downloading Logs from VMs is not working
[NAS-117749](https://ixsystems.atlassian.net/browse/NAS-117749) Unable to select "category" when submitting a bug report from TrueNAS Scale 22.02.3
[NAS-117745](https://ixsystems.atlassian.net/browse/NAS-117745) Add AMD NTB driver to the build as a module.
[NAS-117735](https://ixsystems.atlassian.net/browse/NAS-117735) Only break out of fuse mount loop early on success
[NAS-117728](https://ixsystems.atlassian.net/browse/NAS-117728) Shift timeouts to a single dict for cluster tests
[NAS-117727](https://ixsystems.atlassian.net/browse/NAS-117727) NaN in disk.temperature\_agg
[NAS-117725](https://ixsystems.atlassian.net/browse/NAS-117725) Deleting cluster does not wipe the ctdb\_shared\_vol brick / dataset causing many issues on new create
[NAS-117723](https://ixsystems.atlassian.net/browse/NAS-117723) FIPS self test failure broke installer
[NAS-117718](https://ixsystems.atlassian.net/browse/NAS-117718) No pools message flashing when switching to Storage
[NAS-117716](https://ixsystems.atlassian.net/browse/NAS-117716) Storj tests
[NAS-117714](https://ixsystems.atlassian.net/browse/NAS-117714) FTP "Certificate" dropdown should be under "Enable TLS" checkbox
[NAS-117713](https://ixsystems.atlassian.net/browse/NAS-117713) Change how API keys are created
[NAS-117700](https://ixsystems.atlassian.net/browse/NAS-117700) Dashboard Config settings revert after save
[NAS-117695](https://ixsystems.atlassian.net/browse/NAS-117695) use asterisk to explicitly indicate full API access
[NAS-117692](https://ixsystems.atlassian.net/browse/NAS-117692) Explicitly reference min\_memory
[NAS-117688](https://ixsystems.atlassian.net/browse/NAS-117688) Cannot Edit VMs
[NAS-117684](https://ixsystems.atlassian.net/browse/NAS-117684) Separately test basic NFS ops for version 3 and version 4
[NAS-117681](https://ixsystems.atlassian.net/browse/NAS-117681) Remove overlay\_dirs
[NAS-117680](https://ixsystems.atlassian.net/browse/NAS-117680) Bug with Dataset Icon in Details Panel header
[NAS-117675](https://ixsystems.atlassian.net/browse/NAS-117675) Add basic tests for ctdb managed services
[NAS-117673](https://ixsystems.atlassian.net/browse/NAS-117673) enforce minimum zfs passphrase length
[NAS-117669](https://ixsystems.atlassian.net/browse/NAS-117669) The "snapdev" field is returned in lowercase
[NAS-117661](https://ixsystems.atlassian.net/browse/NAS-117661) Minor bug fix for vm plugin
[NAS-117658](https://ixsystems.atlassian.net/browse/NAS-117658) TrueNAS-SCALE-22.02.4-MASTER-20220805-041141 can't start VMs after importing old config or upgrading from 22.02.3 or earlier
[NAS-117655](https://ixsystems.atlassian.net/browse/NAS-117655) Active Directory gets disabled on reboot
[NAS-117637](https://ixsystems.atlassian.net/browse/NAS-117637) If middleware\_OVERRIDE is specified, let's also override truenas and truenas\_files
[NAS-117635](https://ixsystems.atlassian.net/browse/NAS-117635) remove unused startup\_seq file
[NAS-117630](https://ixsystems.atlassian.net/browse/NAS-117630) Update `test__iscsi_extent__disk_choices`
[NAS-117627](https://ixsystems.atlassian.net/browse/NAS-117627) `zfs.dataset.query_for_quota_alert` returns only top-level datasets
[NAS-117625](https://ixsystems.atlassian.net/browse/NAS-117625) Add "run as user" option in ix chart
[NAS-117624](https://ixsystems.atlassian.net/browse/NAS-117624) No existing ZVOL images detected when creating new VM and trying to import existing zvol. Bluefin 05082022 and 100822
[NAS-117622](https://ixsystems.atlassian.net/browse/NAS-117622) Add SMB client failover test for cluster
[NAS-117620](https://ixsystems.atlassian.net/browse/NAS-117620) HA issue on M30 after loading SCALE Bluefin, ntb device problem
[NAS-117617](https://ixsystems.atlassian.net/browse/NAS-117617) Allow setting snapdev field for filesystems
[NAS-117616](https://ixsystems.atlassian.net/browse/NAS-117616) Do not try to revoke ACME certificate which has expired
[NAS-117604](https://ixsystems.atlassian.net/browse/NAS-117604) Node is unable to rejoin cluster after power off/on of 1/4 nodes
[NAS-117602](https://ixsystems.atlassian.net/browse/NAS-117602) Privilege Management API
[NAS-117601](https://ixsystems.atlassian.net/browse/NAS-117601) system.general.get\_ui\_urls blocks main event loop
[NAS-117599](https://ixsystems.atlassian.net/browse/NAS-117599) Installing netdata gets stuck at 75%
[NAS-117596](https://ixsystems.atlassian.net/browse/NAS-117596) Redirect to Disks Reports with pre-selected disks
[NAS-117594](https://ixsystems.atlassian.net/browse/NAS-117594) Add Vdev Form raises `Maximum call stack size exceeded`
[NAS-117592](https://ixsystems.atlassian.net/browse/NAS-117592) 24h clock in tasks
[NAS-117587](https://ixsystems.atlassian.net/browse/NAS-117587) Fix regression in getgrnam for gid 0
[NAS-117584](https://ixsystems.atlassian.net/browse/NAS-117584) fix Makefile MWPATH
[NAS-117575](https://ixsystems.atlassian.net/browse/NAS-117575) Add more properties to dataset details
[NAS-117562](https://ixsystems.atlassian.net/browse/NAS-117562) Add more dataset details
[NAS-117560](https://ixsystems.atlassian.net/browse/NAS-117560) Unable to Delete Expired certificates
[NAS-117557](https://ixsystems.atlassian.net/browse/NAS-117557) Improvements to ctdb.public.ips APIs
[NAS-117556](https://ixsystems.atlassian.net/browse/NAS-117556) fix IndexError in failover.vip.get\_states
[NAS-117553](https://ixsystems.atlassian.net/browse/NAS-117553) Require at least one public IP address before joining cluster to AD
[NAS-117551](https://ixsystems.atlassian.net/browse/NAS-117551) Fix `ftp_server_with_user_account` asset
[NAS-117544](https://ixsystems.atlassian.net/browse/NAS-117544) NOT FOUND when querying for a list of support categories
[NAS-117524](https://ixsystems.atlassian.net/browse/NAS-117524) huge optimization to query\_for\_quota\_alert
[NAS-117519](https://ixsystems.atlassian.net/browse/NAS-117519) Various improvements to builder
[NAS-117513](https://ixsystems.atlassian.net/browse/NAS-117513) Import ZFS Pools failed
[NAS-117511](https://ixsystems.atlassian.net/browse/NAS-117511) Remove zpool\_get\_physpath
[NAS-117509](https://ixsystems.atlassian.net/browse/NAS-117509) Sync colors on cards
[NAS-117506](https://ixsystems.atlassian.net/browse/NAS-117506) MatchNotFound on pool.query after update
[NAS-117501](https://ixsystems.atlassian.net/browse/NAS-117501) disk\_resize: Don't trigger udev events for NVMe
[NAS-117500](https://ixsystems.atlassian.net/browse/NAS-117500) call install-dev-tools before setup\_test.py
[NAS-117499](https://ixsystems.atlassian.net/browse/NAS-117499) disk.query sometimes doesn't return pool disk if it was just attached
[NAS-117498](https://ixsystems.atlassian.net/browse/NAS-117498) No Applications after cron job reboot
[NAS-117495](https://ixsystems.atlassian.net/browse/NAS-117495) fix and improve middlewared Makefile
[NAS-117479](https://ixsystems.atlassian.net/browse/NAS-117479) Skipping RAW device to be created
[NAS-117478](https://ixsystems.atlassian.net/browse/NAS-117478) Revert change to SMB etc generation
[NAS-117476](https://ixsystems.atlassian.net/browse/NAS-117476) bucket\_policy\_only: Field was not expected when expanding folders in Cloudsync task
[NAS-117472](https://ixsystems.atlassian.net/browse/NAS-117472) minor grammar fix
[NAS-117471](https://ixsystems.atlassian.net/browse/NAS-117471) Improve AD health checks
[NAS-117467](https://ixsystems.atlassian.net/browse/NAS-117467) Reuse tdb / ctdb handles
[NAS-117465](https://ixsystems.atlassian.net/browse/NAS-117465) Fix broken icon links
[NAS-117459](https://ixsystems.atlassian.net/browse/NAS-117459) Post NAS-113963 - pool can't be locked while system-dataset is present
[NAS-117451](https://ixsystems.atlassian.net/browse/NAS-117451) Unable to download debug
[NAS-117449](https://ixsystems.atlassian.net/browse/NAS-117449) credentials.verify doesn't timeout on incorrect SFTP credentials
[NAS-117443](https://ixsystems.atlassian.net/browse/NAS-117443) Fix clustered SMB service management events
[NAS-117442](https://ixsystems.atlassian.net/browse/NAS-117442) fix test\_cluster\_path\_snapshot test
[NAS-117441](https://ixsystems.atlassian.net/browse/NAS-117441) Added better support for python virtual environment
[NAS-117439](https://ixsystems.atlassian.net/browse/NAS-117439) Misaligned text on Topology Card
[NAS-117437](https://ixsystems.atlassian.net/browse/NAS-117437) Remove microsoft account option
[NAS-117436](https://ixsystems.atlassian.net/browse/NAS-117436) stop running file IO in main event loop
[NAS-117435](https://ixsystems.atlassian.net/browse/NAS-117435) move thick\_provision key to dataset level
[NAS-117434](https://ixsystems.atlassian.net/browse/NAS-117434) VM Clone does not account for explicit web port
[NAS-117430](https://ixsystems.atlassian.net/browse/NAS-117430) Simplify/Improve VM devices validation
[NAS-117428](https://ixsystems.atlassian.net/browse/NAS-117428) Improper regex used on name validation for apps
[NAS-117426](https://ixsystems.atlassian.net/browse/NAS-117426) Add common method for defining cpu/memory/gpu limitations
[NAS-117424](https://ixsystems.atlassian.net/browse/NAS-117424) freenas-debug: Restore ZFS kstat capture
[NAS-117423](https://ixsystems.atlassian.net/browse/NAS-117423) Errors waterfall on new Storage page
[NAS-117420](https://ixsystems.atlassian.net/browse/NAS-117420) Initialize cluster so that all nodes have all public IPs
[NAS-117419](https://ixsystems.atlassian.net/browse/NAS-117419) Pull-Replication failed
[NAS-117418](https://ixsystems.atlassian.net/browse/NAS-117418) Fix iscsi tests
[NAS-117416](https://ixsystems.atlassian.net/browse/NAS-117416) Plex wont deply \(kubernetes.io/not-ready\)
[NAS-117409](https://ixsystems.atlassian.net/browse/NAS-117409) Unable to isolate GPU or see in apps in SCALE.
[NAS-117404](https://ixsystems.atlassian.net/browse/NAS-117404) Remove unused library common charts
[NAS-117400](https://ixsystems.atlassian.net/browse/NAS-117400) Fix activedirectory join in cluster
[NAS-117395](https://ixsystems.atlassian.net/browse/NAS-117395) iscsi\_/extents.py blocks main event loop in many places
[NAS-117391](https://ixsystems.atlassian.net/browse/NAS-117391) Remove redundant dataset.query
[NAS-117382](https://ixsystems.atlassian.net/browse/NAS-117382) Handle case of non-existent path during smbconf generation
[NAS-117378](https://ixsystems.atlassian.net/browse/NAS-117378) Bump up timeout values for permissions tests on cluster
[NAS-117377](https://ixsystems.atlassian.net/browse/NAS-117377) Fix clustered filesystem test
[NAS-117376](https://ixsystems.atlassian.net/browse/NAS-117376) Remove port from portal configuration in issci
[NAS-117367](https://ixsystems.atlassian.net/browse/NAS-117367) Ensure that required paths are auto-created for clustered pwenc
[NAS-117362](https://ixsystems.atlassian.net/browse/NAS-117362) improve ntp alert verbiage
[NAS-117360](https://ixsystems.atlassian.net/browse/NAS-117360) disk\_resize: Don't wait 15 seconds for SAS flash
[NAS-117357](https://ixsystems.atlassian.net/browse/NAS-117357) fix typo in disabled\_reasons
[NAS-117353](https://ixsystems.atlassian.net/browse/NAS-117353) Fix Failover\_disks alert typo
[NAS-117330](https://ixsystems.atlassian.net/browse/NAS-117330) vfs\_fruit can write invalid timestamp as BTIME to user.DOSATTRIB xattr
[NAS-117328](https://ixsystems.atlassian.net/browse/NAS-117328) Fixes an empty line in SMB share presets
[NAS-117327](https://ixsystems.atlassian.net/browse/NAS-117327) NAS-117318: Fixes and empty line in SMB share presets
[NAS-117322](https://ixsystems.atlassian.net/browse/NAS-117322) Minor improvements to pool.dataset.details
[NAS-117320](https://ixsystems.atlassian.net/browse/NAS-117320) CLONE - Do not allow immutable fields to be modified in UI - Bluefin
[NAS-117318](https://ixsystems.atlassian.net/browse/NAS-117318) Empty line in SMB share presets
[NAS-117313](https://ixsystems.atlassian.net/browse/NAS-117313) Active Directory randomly automatically getting disabled during server reboot
[NAS-117307](https://ixsystems.atlassian.net/browse/NAS-117307) Invesitgate/fix ix-volumes being migrated on apps migration
[NAS-117306](https://ixsystems.atlassian.net/browse/NAS-117306) Fix ctdb jobs on pnn 0
[NAS-117305](https://ixsystems.atlassian.net/browse/NAS-117305) fill in app information in pool.dataset.details
[NAS-117303](https://ixsystems.atlassian.net/browse/NAS-117303) use ejson in kubernetes backup plugin
[NAS-117293](https://ixsystems.atlassian.net/browse/NAS-117293) Deprecate legacy behavior to allow empty homes path
[NAS-117289](https://ixsystems.atlassian.net/browse/NAS-117289) Attempting to delete VM causes system crash
[NAS-117285](https://ixsystems.atlassian.net/browse/NAS-117285) \[required\] validator from FormsModule conflicts with \[required\] input ix-\* components
[NAS-117284](https://ixsystems.atlassian.net/browse/NAS-117284) TrueNAS Scale nightly is trying to update to an older version
[NAS-117278](https://ixsystems.atlassian.net/browse/NAS-117278) Missing Provisioning Type Field in Space Management Card
[NAS-117277](https://ixsystems.atlassian.net/browse/NAS-117277) Space Management Card console error
[NAS-117273](https://ixsystems.atlassian.net/browse/NAS-117273) sedutil-cli fails to identify SAS SED drives on Linux
[NAS-117264](https://ixsystems.atlassian.net/browse/NAS-117264) Updater size estimates seem quite off
[NAS-117231](https://ixsystems.atlassian.net/browse/NAS-117231) Add CTDB event integration
[NAS-117201](https://ixsystems.atlassian.net/browse/NAS-117201) Fix qbittorrent upgrade strategy
[NAS-117186](https://ixsystems.atlassian.net/browse/NAS-117186) Change ProFTPD TLS Protocol
[NAS-117175](https://ixsystems.atlassian.net/browse/NAS-117175) unable to flash chelsio cards on SCALE
[NAS-117166](https://ixsystems.atlassian.net/browse/NAS-117166) Syncthing App will not deploy on TrueNAS SCALE Bluefin nightly
[NAS-117159](https://ixsystems.atlassian.net/browse/NAS-117159) save/rollback default gateway on interface changes
[NAS-117158](https://ixsystems.atlassian.net/browse/NAS-117158) Network dashboard widget fails due to permissions after Scale update
[NAS-117153](https://ixsystems.atlassian.net/browse/NAS-117153) Cloud Sync `create_empty_src_dirs` checkbox
[NAS-117144](https://ixsystems.atlassian.net/browse/NAS-117144) Swagger documentation line on API Keys screen incorrect if default port has been changed
[NAS-117125](https://ixsystems.atlassian.net/browse/NAS-117125) middleware worker process core dumped
[NAS-117118](https://ixsystems.atlassian.net/browse/NAS-117118) Invalid update image file when trying to update nightlies
[NAS-117109](https://ixsystems.atlassian.net/browse/NAS-117109) Apps: Plex: Plex can't start sometimes "No such file or directory"
[NAS-117104](https://ixsystems.atlassian.net/browse/NAS-117104) PiHole Docker Install
[NAS-117101](https://ixsystems.atlassian.net/browse/NAS-117101) Charts MinIO pod cannot connect to itself when hostname is used
[NAS-117076](https://ixsystems.atlassian.net/browse/NAS-117076) Resource Limits are not applied to pod
[NAS-117045](https://ixsystems.atlassian.net/browse/NAS-117045) Improve error messaging for 'min\_memory' when creating a VM
[NAS-117039](https://ixsystems.atlassian.net/browse/NAS-117039) Failed to check for alert ZpoolCapacity
[NAS-117037](https://ixsystems.atlassian.net/browse/NAS-117037) Python message
[NAS-116998](https://ixsystems.atlassian.net/browse/NAS-116998) SCALE: Cannot bind second network adapter to new VM
[NAS-116987](https://ixsystems.atlassian.net/browse/NAS-116987) TrueNAS SCALE webui become very slow
[NAS-116933](https://ixsystems.atlassian.net/browse/NAS-116933) UI won't allow UPS on ttyS0
[NAS-116927](https://ixsystems.atlassian.net/browse/NAS-116927) ZFS replication causing unscheduled reboot on destination
[NAS-116894](https://ixsystems.atlassian.net/browse/NAS-116894) CLONE - \[SCALE\] Application Events is not sorted
[NAS-116859](https://ixsystems.atlassian.net/browse/NAS-116859) `pool.dataset.summary`
[NAS-116808](https://ixsystems.atlassian.net/browse/NAS-116808) Improve IPMI password validation
[NAS-116777](https://ixsystems.atlassian.net/browse/NAS-116777) \[Scale 22.12-master\] Apps won't start
[NAS-116702](https://ixsystems.atlassian.net/browse/NAS-116702) Trivial \(I think\) Task Manager timing out
[NAS-116688](https://ixsystems.atlassian.net/browse/NAS-116688) A Start Job is Running for Import ZFS Pools \(xxmin xxs / 15min 11s\)
[NAS-116674](https://ixsystems.atlassian.net/browse/NAS-116674) \[SCALE\] BlockingIOError: \[Errno 11\] Resource temporarily unavailable
[NAS-116664](https://ixsystems.atlassian.net/browse/NAS-116664) Stopped Apps/Docker spamming msg on syslog No Destination Avaliable
[NAS-116662](https://ixsystems.atlassian.net/browse/NAS-116662) Non boot-drive swap space "unclean" and re-constructed every boot
[NAS-116603](https://ixsystems.atlassian.net/browse/NAS-116603) Exclusive default Apps Catalog for Enterprise
[NAS-116574](https://ixsystems.atlassian.net/browse/NAS-116574) Apps Node IP Not Matching What is Configured
[NAS-116513](https://ixsystems.atlassian.net/browse/NAS-116513) pmem on SCALE doesn't report serial information
[NAS-116483](https://ixsystems.atlassian.net/browse/NAS-116483) Can't add zvol with space in name to VM as disk
[NAS-116380](https://ixsystems.atlassian.net/browse/NAS-116380) Trivial: On Network, Scale is displaying 2 default Gateways
[NAS-116295](https://ixsystems.atlassian.net/browse/NAS-116295) Free RAM reported mismatch
[NAS-116098](https://ixsystems.atlassian.net/browse/NAS-116098) nmbd breaks system dataset migration
[NAS-116071](https://ixsystems.atlassian.net/browse/NAS-116071) On Angelfish Nightly after pressing Failover at the login it display "Failover is in an error state."
[NAS-116023](https://ixsystems.atlassian.net/browse/NAS-116023) Boot Issues with TrueNAS-SCALE-22.02.0.1
[NAS-115994](https://ixsystems.atlassian.net/browse/NAS-115994) Idmap issue with "OWNER RIGHTS" SID
[NAS-115992](https://ixsystems.atlassian.net/browse/NAS-115992) NFSv4  not configured properly when active directory domain name != server subdomain
[NAS-115869](https://ixsystems.atlassian.net/browse/NAS-115869) NTP service broken when DHCP provides NTP servers.
[NAS-115858](https://ixsystems.atlassian.net/browse/NAS-115858) Fix netdata hitting apparmor profile
[NAS-115235](https://ixsystems.atlassian.net/browse/NAS-115235) Restrict job log dir to root
[NAS-115058](https://ixsystems.atlassian.net/browse/NAS-115058) Exception disable\_offload\_capabilities when configuring network interface from CLI
[NAS-114575](https://ixsystems.atlassian.net/browse/NAS-114575) \[SCALE\] When using OneDrive as a Backup the Client sends tens of thousands of DNS Requests
[NAS-114305](https://ixsystems.atlassian.net/browse/NAS-114305) Network Interfaces - Test/Save Changes bug \(back-end\)
[NAS-114064](https://ixsystems.atlassian.net/browse/NAS-114064) IPV6 Neighbor Solicitation if started by TrueNas SCALE fails => NO IPV6
[NAS-113833](https://ixsystems.atlassian.net/browse/NAS-113833) /update/check\_available API call crashes when update-master.ixsystems.com is unavailable
[NAS-113830](https://ixsystems.atlassian.net/browse/NAS-113830) SCALE: Time Machine does not work for large source on macOS Monterey \(12.0.1 and 12.1\)
[NAS-113534](https://ixsystems.atlassian.net/browse/NAS-113534) sqlilte error creating link aggregation
[NAS-113529](https://ixsystems.atlassian.net/browse/NAS-113529) VERIFY\(PageUptodate\(pp\)\) failed
[NAS-112995](https://ixsystems.atlassian.net/browse/NAS-112995) Alert reads “…replication from scratch…” but entry is called differently in GUI
[NAS-112877](https://ixsystems.atlassian.net/browse/NAS-112877) Docker networking configuration prevents certain images from working correctly
[NAS-112277](https://ixsystems.atlassian.net/browse/NAS-112277) /usr/local/bin/zilstat not functional on SCALE
[NAS-110490](https://ixsystems.atlassian.net/browse/NAS-110490) Scale - NVMe drives in USB case show same Serial Number
[NAS-103225](https://ixsystems.atlassian.net/browse/NAS-103225) clear Enclosure Status when not OK

### New Feature

[NAS-117909](https://ixsystems.atlassian.net/browse/NAS-117909) Branch out for 22.12 BETA1
[NAS-117820](https://ixsystems.atlassian.net/browse/NAS-117820) Hide unused resources card
[NAS-117813](https://ixsystems.atlassian.net/browse/NAS-117813) Improve indication for which apps use dataset
[NAS-117734](https://ixsystems.atlassian.net/browse/NAS-117734) Handle nulls in disk temperatures
[NAS-117676](https://ixsystems.atlassian.net/browse/NAS-117676) New cloud sync provider: "Storj iX"
[NAS-117628](https://ixsystems.atlassian.net/browse/NAS-117628) Dataset quota is not shown
[NAS-117615](https://ixsystems.atlassian.net/browse/NAS-117615) Hide Add Datasets / Add Zvol buttons on zvols
[NAS-117573](https://ixsystems.atlassian.net/browse/NAS-117573) Pre-filter data protection items when clicking on Manage links
[NAS-117572](https://ixsystems.atlassian.net/browse/NAS-117572) Handle empty states better on new storage pages
[NAS-117566](https://ixsystems.atlassian.net/browse/NAS-117566) Add support for snapdev
[NAS-117558](https://ixsystems.atlassian.net/browse/NAS-117558) Fix loading progress on storage pages
[NAS-117520](https://ixsystems.atlassian.net/browse/NAS-117520) Reimplement disk health card
[NAS-117510](https://ixsystems.atlassian.net/browse/NAS-117510) Extract dashboard pool loading into a separate store
[NAS-117492](https://ixsystems.atlassian.net/browse/NAS-117492) Adds tests to DatasetDetailsCardComponent
[NAS-117475](https://ixsystems.atlassian.net/browse/NAS-117475) Group disks in Unassigned disks dialog
[NAS-117407](https://ixsystems.atlassian.net/browse/NAS-117407) Clean up `pool.dataset.query` calls in the new `Datasets` module
[NAS-117405](https://ixsystems.atlassian.net/browse/NAS-117405) Fix IxDynamicFormItemComponent tests
[NAS-117383](https://ixsystems.atlassian.net/browse/NAS-117383) investigate adding io type to VM devices
[NAS-117368](https://ixsystems.atlassian.net/browse/NAS-117368) Add missing attributes to `pool.dataset.details` response
[NAS-117365](https://ixsystems.atlassian.net/browse/NAS-117365) Extract device loading into a separate store
[NAS-117348](https://ixsystems.atlassian.net/browse/NAS-117348) Make request to `pool.dataset.details` on the Datasets Management page
[NAS-117323](https://ixsystems.atlassian.net/browse/NAS-117323) Implement the click action for "Add vDev" button on the Device Management page
[NAS-117321](https://ixsystems.atlassian.net/browse/NAS-117321) Adopt new datasets API
[NAS-117319](https://ixsystems.atlassian.net/browse/NAS-117319) Allow vdevs to be selected in Devices
[NAS-117317](https://ixsystems.atlassian.net/browse/NAS-117317) Smaller fixes for Storage pages
[NAS-117302](https://ixsystems.atlassian.net/browse/NAS-117302) Integrate overprovisioning on zpool creation on SCALE
[NAS-117253](https://ixsystems.atlassian.net/browse/NAS-117253) Add loading indication to storage dashboard
[NAS-117239](https://ixsystems.atlassian.net/browse/NAS-117239) 2 new endpoints for webUI network changes
[NAS-117235](https://ixsystems.atlassian.net/browse/NAS-117235) Test new storage pages in different browsers
[NAS-117216](https://ixsystems.atlassian.net/browse/NAS-117216) Fix card scaling in storage dashboard
[NAS-117212](https://ixsystems.atlassian.net/browse/NAS-117212) Show auto trim value in ZFS Health Card
[NAS-117203](https://ixsystems.atlassian.net/browse/NAS-117203) Separate the dataset capacity management form from the dataset edit form
[NAS-117177](https://ixsystems.atlassian.net/browse/NAS-117177) Finish Space Management Card
[NAS-117082](https://ixsystems.atlassian.net/browse/NAS-117082) Better loading indication for datasets and devices
[NAS-117024](https://ixsystems.atlassian.net/browse/NAS-117024) Fix the column layout of details panel for the storage redesign pages
[NAS-117023](https://ixsystems.atlassian.net/browse/NAS-117023) Investigate the "Mirror XYZ" row on the Devices table
[NAS-117021](https://ixsystems.atlassian.net/browse/NAS-117021) What should the "Add VDEV" button do on the Device Management page
[NAS-117019](https://ixsystems.atlassian.net/browse/NAS-117019) Which cards should be removed under certain conditions for the Dataset Management page
[NAS-117017](https://ixsystems.atlassian.net/browse/NAS-117017) Investigate the conditions for Encryption card on Dataset Management page
[NAS-117015](https://ixsystems.atlassian.net/browse/NAS-117015) Icon for 'Locked by parent'
[NAS-116964](https://ixsystems.atlassian.net/browse/NAS-116964) Add URL support to Devices tree view
[NAS-116916](https://ixsystems.atlassian.net/browse/NAS-116916) Add details to the IxTreeTable on the Devices page
[NAS-116915](https://ixsystems.atlassian.net/browse/NAS-116915) Add the pool header row on Datasets IxTreeTable
[NAS-116807](https://ixsystems.atlassian.net/browse/NAS-116807) Synchronize storage design changes
[NAS-116806](https://ixsystems.atlassian.net/browse/NAS-116806) Design for Dataset Capacity Management
[NAS-116788](https://ixsystems.atlassian.net/browse/NAS-116788) Create the Dataset Capacity Management Card chart
[NAS-116715](https://ixsystems.atlassian.net/browse/NAS-116715) Review and fix card sizes for storage redesign pages
[NAS-116635](https://ixsystems.atlassian.net/browse/NAS-116635) Storj App in Official Catalog
[NAS-116413](https://ixsystems.atlassian.net/browse/NAS-116413) Device Management Page
[NAS-116411](https://ixsystems.atlassian.net/browse/NAS-116411) Information for different roles attached to a dataset or child datasets
[NAS-116410](https://ixsystems.atlassian.net/browse/NAS-116410) The Roles details Card/Widget
[NAS-116406](https://ixsystems.atlassian.net/browse/NAS-116406) Data Protection Card/Widget
[NAS-116403](https://ixsystems.atlassian.net/browse/NAS-116403) Dataset Management Page
[NAS-116397](https://ixsystems.atlassian.net/browse/NAS-116397) Disk Health card
[NAS-116393](https://ixsystems.atlassian.net/browse/NAS-116393) Pool Topology details widget/card
[NAS-116391](https://ixsystems.atlassian.net/browse/NAS-116391) Single Pool details component on Pools dashboard
[NAS-116389](https://ixsystems.atlassian.net/browse/NAS-116389) Create Pools Dashboard
[NAS-114198](https://ixsystems.atlassian.net/browse/NAS-114198) Advanced boot options for SCALE \(udev rules and kernel parameters\)
[NAS-111020](https://ixsystems.atlassian.net/browse/NAS-111020) Assigning Host USB device to a Guest VM in SCALE
[NAS-102765](https://ixsystems.atlassian.net/browse/NAS-102765) Ask for EC2 Instance ID when setting initial root password## Known Issues


## Known Issues

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| 22.12-BETA.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-117940" target="_blank">NAS-117940</a> | Implements temporary fix for the return from `glfs_open()` to honor `O_DIRECTORY` flag | Pertains to an internal issue in Samba. After gluserfs is fixed with a permanent solution to this issue happens, this temporary fix will be reverted. | Targeted 22.12 |
| 22.12-BETA.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-117974" target="_blank">NAS-117974</a> | Replication Task Wizard Source and Destination fields cut off the path information | The **Source** and **Destination** fields in the **Replication Task Wizard** window are cutoff. UI form issue that positions the paths in the fields such that ony part of the value is visible. | Backlog |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118063" target="_blank">NAS-118063</a> | SCALE Cluder growth/resize features | Currently, there is no way to grow or resize an existing cluser without the user destroying their cluster and starting with a new cluster. This issue looks to implement a solution using TrueCommand and TrueNAS API that provides the ability to have shared volumes that do not occupy all nodes in the cluster, add one or more nodes to a cluster without impacting existing shared volumes, "grow" a shared volume, and temporarily remove nodes from a cluster without destroying the cluster. | Targeted Backlog |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118066" target="_blank">NAS-118066</a> | UI is not updating or properly showing snapshots | UI isn't showing dataset snapshots without creating one from Shell, but the UI doesn't display this Shell-created snapshot in Manage Snapshots. | Targeted 22.12-BETA.2 |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118054" target="_blank">NAS-118054</a> | Replication Warning: Cannot receive sharesmb property | Replication created sending from an ecrypted dataset to a non-encrypted dataset. After running replication the screen displays an orange warning icon. After clicking on the warning the "cannot receive sharesmb property in *tank/repwizrd/*set: pool and dataset must be upgraded to set this property or value." where *tank/repwizrd* is the pool/dataset path.| Targeted 22.12-BETA.2 |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118095" target="_blank">NAS-118095</a> | Core dumps on ctdb at startup | Traceback received that indicates ctdb core-dumps when starting nodes after a fresh install. | Unscheduled |
| 22.02.3 | <a href="https://ixsystems.atlassian.net/browse/NAS-117581" target="_blank">NAS-117581</a> | Launch Docker Image button is disabled. | On the <b>Apps</b> page, select the <b>Available Applications</b> tab before trying to click the button. | 22.02.3.1 |
| 22.02.1 |<a href="https://ixsystems.atlassian.net/browse/NAS-116473" target="_blank">NAS-116473</a> | Large Drive Count Issues | iX is investigating isuses with booting SCALE on systems with more than 100 Disks. | 22.12-RC.1 |
| 22.02.0 | <a href="https://jira.ixsystems.com/browse/NAS-115238" target="_blank">NAS-115238</a> | Removed drive from pool does not degrade pool status (SCALE). | Issue is being investigated and a fix provided in a future release | Targeted 22.02.4 |
| 22.02.0-RC.2 |  | Cosmetic issue with update trains when updating from SCALE 22.02.0-RC.2. | After updating from 22.02.0-RC.2, the previous update train might show in <b>System Settings > Update</b>. This is a cosmetic issue only and can be ignored. |  |
|  |  | Unable to mount an NFS export after migrating from CORE > SCALE or updating to 22.02.0. | The <file>/etc/exports</file> file is no longer generated when the NFS configuration contains <i>mapall</i> or <i>maproot</i> entries for unknown users or groups. This can impact users who previously had a mapping group set to <i>wheel</i>, which does not exist in SCALE. If you are unable to mount an NFS export, review your NFS share configuration and change any <i>wheel</i> entries to something specific for your environment or <i>root</i>. |  |
|  |  | SCALE Gluster/Cluster. | Gluster/Cluster features are still in testing.  Administrators should use caution when deploying and avoid use with critical data. |  |
|  | <a href="https://jira.ixsystems.com/browse/NAS-110263" target="_blank">NAS-110263</a> | AFP sharing is removed from TrueNAS SCALE. The protocol is deprecated and no longer receives development effort or security fixes. | TrueNAS SCALE automatically migrates any existing AFP shares into an SMB configuration that is preset to function like an AFP share. | 21.06-BETA.1 |
| 21.06-BETA.1 | <a href="https://jira.ixsystems.com/browse/NAS-111547" target="_blank">NAS-111547</a> | ZFS shouldn't count vdev IO errors on hotplug removal | Pool status isn't being updated immediately on disk exchange events. | Targeted 22.12 |

## OpenZFS Feature Flags
For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html).

For more details on zpool.features.7 see [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

| Feature Flag | GUID | Dependencies | Description |
|--------------|------|--------------|-------------|
| blake3 | org.openzfs.blake3 | extensible)dataset | Enables use of the BLAKE3 hash algorithmfor checksum and dedup. BLAKE3 is a secure hash algorithm focused on high performance. When enabled, the adminstrator can turn on the blake3 checksum on any dataset using `zfs set checksum=blake dset` [see zfs-set(8)](https://openzfs.github.io/openzfs-docs/man/8/zfs-set.8.html). |
| head_errlog | com.delphix:head_errlog | n/a | Enables the upgraded version of `errlog`. The error log of each head dataset is stored separately in the zap object and keyed by the head id. Every dataset affected by an error block is listed in the output of `zpool status`. |
| zilsaxattr | org.openzfs:zilsaxattr | extensible_dataset | Enables `xattr-sa` extended attribute logging in the ZIL. If enabled, extended attribute changes from both `xattrdir=dir` and `xattr=sa` are guaranteed to be durable if either `sync=always` is set for the dataset when a change is made or sync(2) is called on the dataset after making changes. |



### Alderlake GPU Support

TrueNAS SCALE Bluefin include Linux Kernel 5.15 which can enable Alderlake GPU acceleration by using the following boot loader tunable and rebooting:

`midclt call system.advanced.update '{"kernel_extra_options": "i915.force_probe=4690" }'`

NOTE: 4690 can be replaced with your specific Alderlake GPU version.


### Alderlake GPU Support

TrueNAS SCALE Bluefin include Linux Kernel 5.15 which can enable Alderlake GPU acceleration by using the following boot loader tunable and rebooting:

`midclt call system.advanced.update '{"kernel_extra_options": "i915.force_probe=4690" }'`

NOTE: 4690 can be replaced with your specific Alderlake GPU version.