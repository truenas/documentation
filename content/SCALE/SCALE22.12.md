---
title: "SCALE 22.12 Bluefin Release Notes"
aliases:
 - /scale/scalenextversion/
weight: 1000
---

{{< toc >}}

While the current version of TrueNAS SCALE receives maintenance updates, the next major version is in active development.
This article collects various details about this upcoming major version: early release notes, developer notes, and how to help test the in-development version.
This is a work in progress and details are added as development progresses on this SCALE release.

{{< hint warning >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues. We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

{{< hint danger >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

Want to get involved by collaborating on TrueNAS SCALE? Join our [Official Discord Server.](https://discord.com/invite/Q3St5fPETd)

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" type="page" >}}

## SCALE Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
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

## 22.12.0

**December 13, 2022**

TrueNAS SCALE 22.12.0 has been released and includes many new features and improved functionaltiy. SCALE 22.12.0 features include:

* Improvements to rootless login authentication methods that allow you to specify the username to connect to the remote NAS while automatically setting up keychain SSH connections. 
  It makes /home/admin always exist and stores the SSH authorized keys in this directory. It adds API authentication when using Directory Services. This feature is a first step toward improving the local accounts feature and additional improvements are being planned for future SCALE updates.

* Adds a bulk Upgrade operation that updates installed applications that have available updates, adds new apps to the Available Applications catalog, and implements the overlayfs driver for docker which improves performance over the Linux Kubernetes driver. 

HA migration in Bluefin 22.12.0 is not recommended for critical-use Enterprise HA systems yet. Enterprise General Availability (GA) is planned for the 22.12.2 release. HA migrations from CORE are not recommended before Enterprise GA is announced.

## Change Log

## Epic

* [NAS-114687](https://ixsystems.atlassian.net/browse/NAS-114687) WebUI State Management

## New Feature

* [NAS-114369](https://ixsystems.atlassian.net/browse/NAS-114369) Expand statx output on SCALE
* [NAS-114618](https://ixsystems.atlassian.net/browse/NAS-114618) Investigate a clean way to clean aptly snapshots
* [NAS-115008](https://ixsystems.atlassian.net/browse/NAS-115008) Write comprehensive/complete tests for official apps
* [NAS-115804](https://ixsystems.atlassian.net/browse/NAS-115804) Add an application for Home Assistant
* [NAS-115805](https://ixsystems.atlassian.net/browse/NAS-115805) Add an application for Qbittorrent
* [NAS-115806](https://ixsystems.atlassian.net/browse/NAS-115806) Add an application for Pi Hole
* [NAS-115807](https://ixsystems.atlassian.net/browse/NAS-115807) Add an application for syncthing
* [NAS-115808](https://ixsystems.atlassian.net/browse/NAS-115808) Add an application for Photo Prism
* [NAS-115810](https://ixsystems.atlassian.net/browse/NAS-115810) Add an application for diskover-community
* [NAS-116333](https://ixsystems.atlassian.net/browse/NAS-116333) Create Expandable Tree Table Component
* [NAS-116611](https://ixsystems.atlassian.net/browse/NAS-116611) Replacing gluster node API
* [NAS-116803](https://ixsystems.atlassian.net/browse/NAS-116803) Allow building specific packages only with builder
* [NAS-117348](https://ixsystems.atlassian.net/browse/NAS-117348) Make request to \`pool.dataset.details\` on the Datasets Management page
* [NAS-117368](https://ixsystems.atlassian.net/browse/NAS-117368) Add missing attributes to \`pool.dataset.details\` response
* [NAS-117383](https://ixsystems.atlassian.net/browse/NAS-117383) investigate adding io type to VM devices
* [NAS-117405](https://ixsystems.atlassian.net/browse/NAS-117405) Fix IxDynamicFormItemComponent tests
* [NAS-117935](https://ixsystems.atlassian.net/browse/NAS-117935) Rootless login: local authentication and authorization
* [NAS-118581](https://ixsystems.atlassian.net/browse/NAS-118581) Allow creating Storj buckets when creating a cloud sync task
* [NAS-118725](https://ixsystems.atlassian.net/browse/NAS-118725) Allow Syncing Unsafe Content In Cloud Sync Tasks
* [NAS-118773](https://ixsystems.atlassian.net/browse/NAS-118773) Export All Dataset Keys button
* [NAS-118847](https://ixsystems.atlassian.net/browse/NAS-118847) add new failover.disabled.reasons to front-end
* [NAS-118851](https://ixsystems.atlassian.net/browse/NAS-118851) API authentication using Directory Services
* [NAS-118861](https://ixsystems.atlassian.net/browse/NAS-118861) Resurrect Import Disks feature from old storage pages
* [NAS-118901](https://ixsystems.atlassian.net/browse/NAS-118901) Create pool mockups public discussion
* [NAS-118923](https://ixsystems.atlassian.net/browse/NAS-118923) Fix broken k3s build
* [NAS-118955](https://ixsystems.atlassian.net/browse/NAS-118955) DFS Proxy Share Feature
* [NAS-118965](https://ixsystems.atlassian.net/browse/NAS-118965) Document charts and general workflow of how the structure is composed
* [NAS-118966](https://ixsystems.atlassian.net/browse/NAS-118966) Improve investigating retrieving official catalog performance as we add more apps
* [NAS-119071](https://ixsystems.atlassian.net/browse/NAS-119071) Rootless login installer changes
* [NAS-119102](https://ixsystems.atlassian.net/browse/NAS-119102) Allow specifying remote NAS administrator username when setting up an SSH connection using semi-automatic mode
* [NAS-119158](https://ixsystems.atlassian.net/browse/NAS-119158) Branchout / update mirrors for for 22.12 release

## Improvement

* [NAS-109954](https://ixsystems.atlassian.net/browse/NAS-109954) Improve heuristics for vfs\_tmprotect snapshots
* [NAS-111664](https://ixsystems.atlassian.net/browse/NAS-111664) use path\_local key from sharing.smb.query for filesystem calls related to share
* [NAS-111965](https://ixsystems.atlassian.net/browse/NAS-111965) APPS: Add bulk upgrade action
* [NAS-113218](https://ixsystems.atlassian.net/browse/NAS-113218) Enclosure UI stage left Vdev should show name not type
* [NAS-113376](https://ixsystems.atlassian.net/browse/NAS-113376) Default app name to chart name
* [NAS-114204](https://ixsystems.atlassian.net/browse/NAS-114204) Show a warning in the UI for certain VM PCI devices
* [NAS-114413](https://ixsystems.atlassian.net/browse/NAS-114413) Porting angelfish changes to bluefin
* [NAS-114500](https://ixsystems.atlassian.net/browse/NAS-114500) micro optimization in snmp-agent.py get\_Kstat on SCALE
* [NAS-115010](https://ixsystems.atlassian.net/browse/NAS-115010) Disable the docker-compose binary
* [NAS-115057](https://ixsystems.atlassian.net/browse/NAS-115057) Provide indication that SED password was set
* [NAS-115066](https://ixsystems.atlassian.net/browse/NAS-115066) Debug should show if connected to truecommand
* [NAS-115139](https://ixsystems.atlassian.net/browse/NAS-115139) Create and update SCALE-v5.15-stable to latest
* [NAS-115222](https://ixsystems.atlassian.net/browse/NAS-115222) Explicitly ask for user's input on websockify port of display devices
* [NAS-115308](https://ixsystems.atlassian.net/browse/NAS-115308) Update bluefin apt mirrors
* [NAS-115390](https://ixsystems.atlassian.net/browse/NAS-115390) Remove repository logic from repo-mgmt as we don't have any anymore
* [NAS-115402](https://ixsystems.atlassian.net/browse/NAS-115402) Update kubernetes and related dependencies
* [NAS-115407](https://ixsystems.atlassian.net/browse/NAS-115407) Have automatic updates for collabora app
* [NAS-115409](https://ixsystems.atlassian.net/browse/NAS-115409) Improve apt sources generation in builder
* [NAS-115479](https://ixsystems.atlassian.net/browse/NAS-115479) Get usage stats of docker images being used by ix-chart
* [NAS-115554](https://ixsystems.atlassian.net/browse/NAS-115554) Investigate if its safe to use cgroups v2 now
* [NAS-115620](https://ixsystems.atlassian.net/browse/NAS-115620) Use newer nft tables syntax for failover iptables plugin
* [NAS-115630](https://ixsystems.atlassian.net/browse/NAS-115630) Have apt preferences in alphabetical order
* [NAS-115632](https://ixsystems.atlassian.net/browse/NAS-115632) Clustered SMB Shares needs some improvements on the UI
* [NAS-115658](https://ixsystems.atlassian.net/browse/NAS-115658) Allow selectively updating apt mirrors
* [NAS-115673](https://ixsystems.atlassian.net/browse/NAS-115673) Validate catalog apps in parallel
* [NAS-115822](https://ixsystems.atlassian.net/browse/NAS-115822) Investigate removing openjdk from scale
* [NAS-115933](https://ixsystems.atlassian.net/browse/NAS-115933) Allow only publishing snapshots of mirror
* [NAS-115940](https://ixsystems.atlassian.net/browse/NAS-115940) Remove dangling aptly snapshots on each update of mirrors
* [NAS-115963](https://ixsystems.atlassian.net/browse/NAS-115963) Force cleanup in case build epoch changes
* [NAS-115984](https://ixsystems.atlassian.net/browse/NAS-115984) Improve translations in zh-hans.json
* [NAS-116193](https://ixsystems.atlassian.net/browse/NAS-116193) Manage system.info data with NgRx Store
* [NAS-116236](https://ixsystems.atlassian.net/browse/NAS-116236) Improve OpenZFS speculative prefetcher
* [NAS-116508](https://ixsystems.atlassian.net/browse/NAS-116508) Add integration test for running commands as some user
* [NAS-116721](https://ixsystems.atlassian.net/browse/NAS-116721) Allow defining resource limits for apps
* [NAS-116756](https://ixsystems.atlassian.net/browse/NAS-116756) Do not exit on first failure in apps CI
* [NAS-116758](https://ixsystems.atlassian.net/browse/NAS-116758) Add integration tests for authorized networks of targets
* [NAS-116759](https://ixsystems.atlassian.net/browse/NAS-116759) Add keyboard support for ix-tree
* [NAS-117940](https://ixsystems.atlassian.net/browse/NAS-117940) Revert temporary fix for NAS-117908 once glusterfs is fixed for glfs\_open\(\) on dirs
* [NAS-118161](https://ixsystems.atlassian.net/browse/NAS-118161) Improvements for Jobs
* [NAS-118366](https://ixsystems.atlassian.net/browse/NAS-118366) Change font face on headers
* [NAS-118548](https://ixsystems.atlassian.net/browse/NAS-118548) Improvements for Reports Toolbar
* [NAS-118602](https://ixsystems.atlassian.net/browse/NAS-118602) Add ability for users to fix clock on NAS
* [NAS-118612](https://ixsystems.atlassian.net/browse/NAS-118612) Linter for attribute order in html
* [NAS-118661](https://ixsystems.atlassian.net/browse/NAS-118661) Remove any in CloudsyncFormComponent
* [NAS-118669](https://ixsystems.atlassian.net/browse/NAS-118669) Extract dialogs from ChartReleasesComponent into separate components
* [NAS-118683](https://ixsystems.atlassian.net/browse/NAS-118683) Extract some dialogs into separate components
* [NAS-118766](https://ixsystems.atlassian.net/browse/NAS-118766) Update HaStatus interface to hold boolean for status value
* [NAS-118768](https://ixsystems.atlassian.net/browse/NAS-118768) Directive to show UI elements on nightlies only
* [NAS-118777](https://ixsystems.atlassian.net/browse/NAS-118777) Default cloudsync provider name to provider title
* [NAS-118788](https://ixsystems.atlassian.net/browse/NAS-118788) Remove truecommand\_stats source/package as it is no longer used
* [NAS-118801](https://ixsystems.atlassian.net/browse/NAS-118801) Remove usages of any
* [NAS-118811](https://ixsystems.atlassian.net/browse/NAS-118811) remove 3rd party asyncio k8s client \(use upstream proper\)
* [NAS-118817](https://ixsystems.atlassian.net/browse/NAS-118817) Zvol form refactoring
* [NAS-118820](https://ixsystems.atlassian.net/browse/NAS-118820) Move AdminLayoutComponent to the Layouts module
* [NAS-118821](https://ixsystems.atlassian.net/browse/NAS-118821) Enable additional template linter rules
* [NAS-118823](https://ixsystems.atlassian.net/browse/NAS-118823) Refactor Display device code in VmListComponent
* [NAS-118825](https://ixsystems.atlassian.net/browse/NAS-118825) Refactor Create SSH Connection in replication wizard
* [NAS-118846](https://ixsystems.atlassian.net/browse/NAS-118846) Improve diasbled reasons
* [NAS-118899](https://ixsystems.atlassian.net/browse/NAS-118899) Refactor VM Edit form
* [NAS-118900](https://ixsystems.atlassian.net/browse/NAS-118900) Improve return types for appLet directive
* [NAS-118906](https://ixsystems.atlassian.net/browse/NAS-118906) Refactor dialogs in PodShellComponent and PodLogsComponent
* [NAS-118907](https://ixsystems.atlassian.net/browse/NAS-118907) Remove \`regexValidator\`
* [NAS-118910](https://ixsystems.atlassian.net/browse/NAS-118910) add private GlusterBricksService
* [NAS-118913](https://ixsystems.atlassian.net/browse/NAS-118913) NVDIMM DMA support
* [NAS-118931](https://ixsystems.atlassian.net/browse/NAS-118931) update and privatize GlusterRebalance service
* [NAS-118940](https://ixsystems.atlassian.net/browse/NAS-118940) update corssl to 1.1.1s.001
* [NAS-118946](https://ixsystems.atlassian.net/browse/NAS-118946) Update styles on the Alert Panel
* [NAS-118951](https://ixsystems.atlassian.net/browse/NAS-118951) don't SMB\_ASSERT\(\) on mixed case sensitivity settings in vfs\_shadow\_copy\_zfs
* [NAS-118961](https://ixsystems.atlassian.net/browse/NAS-118961) Allow adding more reviewers for app update PRs
* [NAS-118971](https://ixsystems.atlassian.net/browse/NAS-118971) add CtdbRootDirService class
* [NAS-118973](https://ixsystems.atlassian.net/browse/NAS-118973) Split up API test protocols into separate files
* [NAS-118975](https://ixsystems.atlassian.net/browse/NAS-118975) Reduce amount of any
* [NAS-118985](https://ixsystems.atlassian.net/browse/NAS-118985) Update dataset node
* [NAS-118988](https://ixsystems.atlassian.net/browse/NAS-118988) Stop any md mirror which might be present on disk
* [NAS-118990](https://ixsystems.atlassian.net/browse/NAS-118990) add format\_bricks helper function
* [NAS-118994](https://ixsystems.atlassian.net/browse/NAS-118994) Make python-glfs a middleware build dependency
* [NAS-119001](https://ixsystems.atlassian.net/browse/NAS-119001) Preselect first option for rollback
* [NAS-119017](https://ixsystems.atlassian.net/browse/NAS-119017) Add glusterfs filesystem plugin
* [NAS-119026](https://ixsystems.atlassian.net/browse/NAS-119026) Investigate enhancing node configured functionality in k8s lifecycle
* [NAS-119027](https://ixsystems.atlassian.net/browse/NAS-119027) Extract dialog in ManagerComponent
* [NAS-119035](https://ixsystems.atlassian.net/browse/NAS-119035) Enable no-shadow linter rule
* [NAS-119041](https://ixsystems.atlassian.net/browse/NAS-119041) Restore \`vmware\_sync\` functionality from CreateSnapshotDialogComponent
* [NAS-119044](https://ixsystems.atlassian.net/browse/NAS-119044) Add endpoint to check service configuration prior to start
* [NAS-119046](https://ixsystems.atlassian.net/browse/NAS-119046) Remove "Unused Resources" section header on Storage Dashboard
* [NAS-119056](https://ixsystems.atlassian.net/browse/NAS-119056) Refactor truecommand wireguard interface name
* [NAS-119059](https://ixsystems.atlassian.net/browse/NAS-119059) Remove numberValidator
* [NAS-119103](https://ixsystems.atlassian.net/browse/NAS-119103) Highlight degraded vdevs in Devices
* [NAS-119132](https://ixsystems.atlassian.net/browse/NAS-119132) Allow 3rd party catalogs to benefit from catalog sync performance improvements
* [NAS-119136](https://ixsystems.atlassian.net/browse/NAS-119136) Add glusterfs.filesystem tests
* [NAS-119147](https://ixsystems.atlassian.net/browse/NAS-119147) Remove entity-dialog
* [NAS-119168](https://ixsystems.atlassian.net/browse/NAS-119168) Switch codecov github action to use token

## Bug

* [NAS-111547](https://ixsystems.atlassian.net/browse/NAS-111547) ZFS shouldn't count vdev IO errors on hotplug removal
* [NAS-114235](https://ixsystems.atlassian.net/browse/NAS-114235) Need better Linux kernel config procedure
* [NAS-115141](https://ixsystems.atlassian.net/browse/NAS-115141) Core files for the following executables were found: /usr/bin/qemu-system-x86\_64 
* [NAS-115181](https://ixsystems.atlassian.net/browse/NAS-115181) Fix "Start Automatically" checkbox for services table
* [NAS-115186](https://ixsystems.atlassian.net/browse/NAS-115186) Fix close icon on tooltips
* [NAS-115331](https://ixsystems.atlassian.net/browse/NAS-115331) Initramfs modules for NVIDIA driver version 460.91.03 fail to build with 5.15 kernel
* [NAS-115389](https://ixsystems.atlassian.net/browse/NAS-115389) Updating apt mirror uri fails to reflect when updating mirrors
* [NAS-115619](https://ixsystems.atlassian.net/browse/NAS-115619) Don't write to same log file during parallel checkout in builder
* [NAS-115716](https://ixsystems.atlassian.net/browse/NAS-115716) "Import pool" dialog says "No options"
* [NAS-115783](https://ixsystems.atlassian.net/browse/NAS-115783) Generated dhclient.conf files in BlueFIN nightlies are broken
* [NAS-115855](https://ixsystems.atlassian.net/browse/NAS-115855) Incrementals are failing in jenkins
* [NAS-115857](https://ixsystems.atlassian.net/browse/NAS-115857) Investigate scale-pr\* builders as build fails on them
* [NAS-115878](https://ixsystems.atlassian.net/browse/NAS-115878) CI fails when installing charts like collabora sometimes
* [NAS-115904](https://ixsystems.atlassian.net/browse/NAS-115904) Machines do not properly retrieve NFS SPN from Active Directory on join 
* [NAS-115992](https://ixsystems.atlassian.net/browse/NAS-115992) NFSv4  not configured properly when active directory domain name != server subdomain
* [NAS-116159](https://ixsystems.atlassian.net/browse/NAS-116159) Investigate minio cluster failure for customer
* [NAS-116267](https://ixsystems.atlassian.net/browse/NAS-116267) Image having lots of tags can break automated updates
* [NAS-116278](https://ixsystems.atlassian.net/browse/NAS-116278) iSCSI Initiators Group Ignoring Defined "Authorized Networks"
* [NAS-116324](https://ixsystems.atlassian.net/browse/NAS-116324) filesystem.can\_access\_as\_user is broken. May be impacting vm plugin access checks
* [NAS-116701](https://ixsystems.atlassian.net/browse/NAS-116701) VM RAW file support does not work because it configures the domain wrong
* [NAS-117064](https://ixsystems.atlassian.net/browse/NAS-117064) SCALE 22.02.2 Global Configuration Settings Form Does Not Display Current Nameserver or Default Gateway settings
* [NAS-117121](https://ixsystems.atlassian.net/browse/NAS-117121) WebUI shell is not available on slow connections
* [NAS-117312](https://ixsystems.atlassian.net/browse/NAS-117312) Scheduled scrub task does not start on one disk pool
* [NAS-117320](https://ixsystems.atlassian.net/browse/NAS-117320) CLONE - Do not allow immutable fields to be modified in UI - Bluefin
* [NAS-117845](https://ixsystems.atlassian.net/browse/NAS-117845) Scale's UI freezes and becomes unavailable
* [NAS-117939](https://ixsystems.atlassian.net/browse/NAS-117939) Catalog validation fails to setup kubernetes cluster in CI
* [NAS-117990](https://ixsystems.atlassian.net/browse/NAS-117990) Service running toggle state incorrect after canceling
* [NAS-118236](https://ixsystems.atlassian.net/browse/NAS-118236) Trouble expanding pool, error "\[EZFS\_NOCAP\] cannot relabel '/dev/disk/by-partuuid/905647b7-3ca7-11e9-a8f0-8cae4cfe7d0f': unable to read disk capacity"
* [NAS-118492](https://ixsystems.atlassian.net/browse/NAS-118492) Datasets detail cards should realign to fill horizontal space first
* [NAS-118571](https://ixsystems.atlassian.net/browse/NAS-118571) Apps Used port detection, does not read kubernetes services
* [NAS-118611](https://ixsystems.atlassian.net/browse/NAS-118611) SMBD tained
* [NAS-118660](https://ixsystems.atlassian.net/browse/NAS-118660) Cloud sync task "Bandwith Limit" pop-up help text appears to be incorrect
* [NAS-118691](https://ixsystems.atlassian.net/browse/NAS-118691) NoVNC Not working for Some VMS on Scale BlueFin Beta 2
* [NAS-118738](https://ixsystems.atlassian.net/browse/NAS-118738) \[SCALE\]: svclb pods are getting created on kube-system namespace and there are also couple of stuck svclb pods from previous installation
* [NAS-118756](https://ixsystems.atlassian.net/browse/NAS-118756) Deleting a dataset removes snapshot tasks assigned to the parent of a dataset
* [NAS-118759](https://ixsystems.atlassian.net/browse/NAS-118759) \[SCALE\] Failed to start kubernetes cluster for Applications
* [NAS-118765](https://ixsystems.atlassian.net/browse/NAS-118765) SMB Share ACLs do not open/work on TrueNAS Scale 22.12-BETA.2
* [NAS-118803](https://ixsystems.atlassian.net/browse/NAS-118803) VM deletion performs a check on systems virtualization capability
* [NAS-118819](https://ixsystems.atlassian.net/browse/NAS-118819) Apps failing to list any thing, spinning circle, after a reboot
* [NAS-118826](https://ixsystems.atlassian.net/browse/NAS-118826) Investigate \`extra\` in ExportDisconnectModalComponent
* [NAS-118830](https://ixsystems.atlassian.net/browse/NAS-118830) Localhost redirects to remote machine when Api Keys page is reloaded
* [NAS-118845](https://ixsystems.atlassian.net/browse/NAS-118845) failover\_critical as response to failover.disabled.reasons
* [NAS-118856](https://ixsystems.atlassian.net/browse/NAS-118856) SCALE nightlies includes kernel modules for wrong kernel
* [NAS-118859](https://ixsystems.atlassian.net/browse/NAS-118859) add minio/operator app and use logsearchapi entrypoint override
* [NAS-118867](https://ixsystems.atlassian.net/browse/NAS-118867) \[Scale\] Apps does not respect the selected version.
* [NAS-118868](https://ixsystems.atlassian.net/browse/NAS-118868) \[SCALE\] Apps UI goes into a back and forth loop between tabs.
* [NAS-118891](https://ixsystems.atlassian.net/browse/NAS-118891) Used snapshot size not showed on the storage page
* [NAS-118895](https://ixsystems.atlassian.net/browse/NAS-118895) \[Apps\] Installing App without kubernetes objects \(empty\), leads to error and middleware lockup
* [NAS-118897](https://ixsystems.atlassian.net/browse/NAS-118897) Fix invalid token on the Shell page after manual reload
* [NAS-118898](https://ixsystems.atlassian.net/browse/NAS-118898) \[SCALE\] Editing an app does not show the default values for fields under a checkbox \(subsquestions\)
* [NAS-118902](https://ixsystems.atlassian.net/browse/NAS-118902) Minio app update to 2022-10-29\_1.6.59 stuck at “Deploying”. Requires Roll Back to 1.6.58
* [NAS-118905](https://ixsystems.atlassian.net/browse/NAS-118905) Loading indicator is not cleared on error in Permissions card
* [NAS-118915](https://ixsystems.atlassian.net/browse/NAS-118915) Making network changes on separate interface takes down management network
* [NAS-118921](https://ixsystems.atlassian.net/browse/NAS-118921) \[Apps\]  Helm charts are recreated/upgraded on restart before cluster is ready
* [NAS-118922](https://ixsystems.atlassian.net/browse/NAS-118922) Devices Screen Doesn't Update After Replacing a Disk
* [NAS-118938](https://ixsystems.atlassian.net/browse/NAS-118938) Scale UI Shares NFS clicking enabled toggles incorrect share.
* [NAS-118939](https://ixsystems.atlassian.net/browse/NAS-118939) websocket client socket.timeout: timed out 
* [NAS-118941](https://ixsystems.atlassian.net/browse/NAS-118941) \`.system\` dataset is visible in \`pool.dataset.details\`
* [NAS-118969](https://ixsystems.atlassian.net/browse/NAS-118969) fchmod\(\) on dirs via pyglfs doesn't persist
* [NAS-118977](https://ixsystems.atlassian.net/browse/NAS-118977) SCALE scst crash on attaching iscsi zvol
* [NAS-118979](https://ixsystems.atlassian.net/browse/NAS-118979) Trivial: Display / Numerical Issue wth Dashboatrd display of disks in Pool
* [NAS-118983](https://ixsystems.atlassian.net/browse/NAS-118983) cron jobs don't work
* [NAS-118992](https://ixsystems.atlassian.net/browse/NAS-118992) Verify that the update to Syncthing 1.22.0 works out of the box w/latest versions of SCALE
* [NAS-119000](https://ixsystems.atlassian.net/browse/NAS-119000) \[Scale\] Single app won't update, but bulk does. Also with midclt command works.
* [NAS-119006](https://ixsystems.atlassian.net/browse/NAS-119006) Enclosure View Only Updates After Leaving Page
* [NAS-119010](https://ixsystems.atlassian.net/browse/NAS-119010) SCALE drive replacement within a pool produces drive busy error
* [NAS-119011](https://ixsystems.atlassian.net/browse/NAS-119011) iSCSI Wizard Does Not Function Properly
* [NAS-119020](https://ixsystems.atlassian.net/browse/NAS-119020) Loading indication is missing when system dataset is changed
* [NAS-119022](https://ixsystems.atlassian.net/browse/NAS-119022) \[Bluefin RC1\] Sysctl - 'field was not expected' error when trying to disable sysctl
* [NAS-119025](https://ixsystems.atlassian.net/browse/NAS-119025) Errors not shown when ACME certificate is not created
* [NAS-119034](https://ixsystems.atlassian.net/browse/NAS-119034) after 22.12-BETA.2 to RC.1 upgrade, can no longer log into web UI
* [NAS-119037](https://ixsystems.atlassian.net/browse/NAS-119037) Critical alert : Failed to start kubernetes cluster for Applications : \[EFAULT\] Failed to configure PV/PVCs support
* [NAS-119038](https://ixsystems.atlassian.net/browse/NAS-119038) \[Bluefin RC1\] Chart tooltips/descriptions on headers are not rendered in the UI
* [NAS-119039](https://ixsystems.atlassian.net/browse/NAS-119039) \[Bluefin RC1\] Pod Shell/Logs applications link incorrectly goes to dashboard
* [NAS-119043](https://ixsystems.atlassian.net/browse/NAS-119043) Fix and improve config.save and config.upload
* [NAS-119051](https://ixsystems.atlassian.net/browse/NAS-119051) Importing certificate with password may be broken
* [NAS-119052](https://ixsystems.atlassian.net/browse/NAS-119052) Network Card Statistics
* [NAS-119058](https://ixsystems.atlassian.net/browse/NAS-119058) UPS Service \( save Setting is greyed out, when IP or Hostname is set in Field "Port or Hostname"\)
* [NAS-119060](https://ixsystems.atlassian.net/browse/NAS-119060) Installed apps not showing
* [NAS-119062](https://ixsystems.atlassian.net/browse/NAS-119062) Storage screen will not refresh after successful import of a pool
* [NAS-119064](https://ixsystems.atlassian.net/browse/NAS-119064) Can not enter Shell \(CLI\) via web-ui
* [NAS-119079](https://ixsystems.atlassian.net/browse/NAS-119079) Different endpoints disagree on which drives belong to a pool
* [NAS-119082](https://ixsystems.atlassian.net/browse/NAS-119082) Too many Add Zvol buttons
* [NAS-119096](https://ixsystems.atlassian.net/browse/NAS-119096) Certificate set to none is not possible
* [NAS-119098](https://ixsystems.atlassian.net/browse/NAS-119098) Some elements have wrong colors on light themes
* [NAS-119099](https://ixsystems.atlassian.net/browse/NAS-119099) Loading indicator in permissions card appears outside of the card
* [NAS-119116](https://ixsystems.atlassian.net/browse/NAS-119116) VM CPU info is N/A
* [NAS-119121](https://ixsystems.atlassian.net/browse/NAS-119121) Home Assistant from both the official and truecharts catalog will not deploy
* [NAS-119124](https://ixsystems.atlassian.net/browse/NAS-119124) Fix status icons on storage dashboard
* [NAS-119138](https://ixsystems.atlassian.net/browse/NAS-119138) Certificate has no \`digest\_algorithm \` property
* [NAS-119141](https://ixsystems.atlassian.net/browse/NAS-119141) Reduce amount of anys

## 22.12-RC.1

{{< expand "22.12-RC.1" "v" >}}
**November 15, 2022**

TrueNAS SCALE 22.12-RC.1 has been released and includes many new features and improved functionaltiy. SCALE 22.12-RC.1 features include:

* Adds FIPS-validated SSL module (Enterprise Only)
* Adds the R50M to the Enclosure screen
* Adds USB passthrough support and allows users to specify USB vendor/product IDs in the UI
* Adds increased functionality in the new Storage screens that include overprovisioning on zpool creation and the ability to see the full name for datasets with long names
* Adds support for creating S3 buckets in Cloud Sync Backups
* Updates Kubernetes to 1.25 and Samba to 4.17.0.rc5

{{< hint info >}}
SCALE 22.12-RC.1 introduces a change in Applications. Users upgrading to 22.12-RC.1 now use the [Docker overlay2 driver](https://docs.docker.com/storage/storagedriver/overlayfs-driver/) instead of ZFS. This change brings a considerable performance boost to applications but applications installed in 22.12-RC.1 are incompatible with any previous version of SCALE 22.12.
{{< /hint >}}

## 22.12-RC.1 Change Log

### Epic

* [NAS-110327](https://ixsystems.atlassian.net/browse/NAS-110327) WebUI Refactoring
* [NAS-116607](https://ixsystems.atlassian.net/browse/NAS-116607) FIPS Validated SSL Module (Enterprise Only)

### New Feature

* [NAS-109036](https://ixsystems.atlassian.net/browse/NAS-109036) OverlayFS support for docker on zfs
* [NAS-116558](https://ixsystems.atlassian.net/browse/NAS-116558) \`special\_small\_block\_size\` dataset option is inheritable
* [NAS-117028](https://ixsystems.atlassian.net/browse/NAS-117028) Offline/errored out pools on new storage pages
* [NAS-117236](https://ixsystems.atlassian.net/browse/NAS-117236) Check for keyboard support on new storage pages
* [NAS-117302](https://ixsystems.atlassian.net/browse/NAS-117302) Integrate overprovisioning on zpool creation on SCALE
* [NAS-118325](https://ixsystems.atlassian.net/browse/NAS-118325) Add USB passthrough support in the UI
* [NAS-118446](https://ixsystems.atlassian.net/browse/NAS-118446) add MISMATCH\_VERSIONS to webUI
* [NAS-118505](https://ixsystems.atlassian.net/browse/NAS-118505) R50BM needs to be added to webUI codebase
* [NAS-118593](https://ixsystems.atlassian.net/browse/NAS-118593) Update kubernetes to 1.25 and related deps
* [NAS-118642](https://ixsystems.atlassian.net/browse/NAS-118642) Allow users to specify USB vendor/product id in UI
* [NAS-118701](https://ixsystems.atlassian.net/browse/NAS-118701) add new public endpoint to return whether or not truenas is clustered
* [NAS-118749](https://ixsystems.atlassian.net/browse/NAS-118749) Branchout mirrors for RC1
* [NAS-118923](https://ixsystems.atlassian.net/browse/NAS-118923) Fix broken k3s build

### Improvement

* [NAS-111509](https://ixsystems.atlassian.net/browse/NAS-111509) Empty job field on replication task after failover
* [NAS-111781](https://ixsystems.atlassian.net/browse/NAS-111781) VMware snapshot improvements
* [NAS-116286](https://ixsystems.atlassian.net/browse/NAS-116286) Rework ZFS Log Size Limit
* [NAS-116557](https://ixsystems.atlassian.net/browse/NAS-116557) Ensure that users have ability to view full dataset names in storage form in webui
* [NAS-116675](https://ixsystems.atlassian.net/browse/NAS-116675) Add info about RSS support to interfaces API
* [NAS-117837](https://ixsystems.atlassian.net/browse/NAS-117837) disk.get\_unused should maybe include info from ID\_FS\_LABEL in output
* [NAS-117958](https://ixsystems.atlassian.net/browse/NAS-117958) Fix chart colors on different themes
* [NAS-118073](https://ixsystems.atlassian.net/browse/NAS-118073) Update samba to 4.17.0.rc5 in nightlies
* [NAS-118077](https://ixsystems.atlassian.net/browse/NAS-118077) Add python bindings for libwbclient
* [NAS-118088](https://ixsystems.atlassian.net/browse/NAS-118088) Publish unit tests workflow for SCALE master branch
* [NAS-118101](https://ixsystems.atlassian.net/browse/NAS-118101) Function clean up for Datasets module
* [NAS-118134](https://ixsystems.atlassian.net/browse/NAS-118134) Add CTDB mutex helper using libgfapi-python
* [NAS-118176](https://ixsystems.atlassian.net/browse/NAS-118176) Support creating S3 Buckets in CloudSync Backups
* [NAS-118213](https://ixsystems.atlassian.net/browse/NAS-118213) Wireframes: Apps Available and Apps Discovery
* [NAS-118256](https://ixsystems.atlassian.net/browse/NAS-118256) Wireframes: App Install Form
* [NAS-118301](https://ixsystems.atlassian.net/browse/NAS-118301) investigate removing docker on zfs
* [NAS-118335](https://ixsystems.atlassian.net/browse/NAS-118335) Make spinners look the same across the app
* [NAS-118341](https://ixsystems.atlassian.net/browse/NAS-118341) libzfsacl - add function to convert ZFS ACL to string
* [NAS-118387](https://ixsystems.atlassian.net/browse/NAS-118387) USB passthrough should allow USB VID/PID and dynamic location
* [NAS-118390](https://ixsystems.atlassian.net/browse/NAS-118390) Refactor \`UpdateComponent\` to use ix-form
* [NAS-118394](https://ixsystems.atlassian.net/browse/NAS-118394) implement get\_real\_filename\_at\_fn\(\) in vfs\_shadow\_copy\_zfs in Samba 4.17
* [NAS-118408](https://ixsystems.atlassian.net/browse/NAS-118408) Type safety/linter improvements
* [NAS-118411](https://ixsystems.atlassian.net/browse/NAS-118411) Fix swatch colour in space-management-chart
* [NAS-118420](https://ixsystems.atlassian.net/browse/NAS-118420) Extract user/group deletion dialog forms
* [NAS-118432](https://ixsystems.atlassian.net/browse/NAS-118432) Acpidump on scale
* [NAS-118480](https://ixsystems.atlassian.net/browse/NAS-118480) Do not spam daemon logs with kube-router logs
* [NAS-118493](https://ixsystems.atlassian.net/browse/NAS-118493) need integration tests for middleware port validation
* [NAS-118499](https://ixsystems.atlassian.net/browse/NAS-118499) Extract some VM dialogs into separate components
* [NAS-118514](https://ixsystems.atlassian.net/browse/NAS-118514) Remove DocReplaceService
* [NAS-118526](https://ixsystems.atlassian.net/browse/NAS-118526) Partially enable no-restricted-syntax
* [NAS-118543](https://ixsystems.atlassian.net/browse/NAS-118543) Provide better indication when user password is set
* [NAS-118545](https://ixsystems.atlassian.net/browse/NAS-118545) Make Dataset Space Management chart smaller
* [NAS-118612](https://ixsystems.atlassian.net/browse/NAS-118612) Linter for attribute order in html
* [NAS-118662](https://ixsystems.atlassian.net/browse/NAS-118662) Remove \`any\` in chart-form.component
* [NAS-118668](https://ixsystems.atlassian.net/browse/NAS-118668) Remove usages of any
* [NAS-118677](https://ixsystems.atlassian.net/browse/NAS-118677) Implement jest eslint rules
* [NAS-118683](https://ixsystems.atlassian.net/browse/NAS-118683) Extract some dialogs into separate components
* [NAS-118692](https://ixsystems.atlassian.net/browse/NAS-118692) Whitelist Rsync Module in docker host path validations
* [NAS-118699](https://ixsystems.atlassian.net/browse/NAS-118699) Use snack bar to inform users about success actions
* [NAS-118737](https://ixsystems.atlassian.net/browse/NAS-118737) Whitelist cloud sync tasks in docker host path validation
* [NAS-118783](https://ixsystems.atlassian.net/browse/NAS-118783) update SCST with upstream

### Bug

* [NAS-107288](https://ixsystems.atlassian.net/browse/NAS-107288) GUI slow/consuming GBs of RAM with large number of datasets \(10k\)
* [NAS-110305](https://ixsystems.atlassian.net/browse/NAS-110305) report page graphs no scroll back
* [NAS-112088](https://ixsystems.atlassian.net/browse/NAS-112088) Don't do validation on empty textboxes if they are not set required: true.
* [NAS-112650](https://ixsystems.atlassian.net/browse/NAS-112650) Onedrive for Business
* [NAS-114884](https://ixsystems.atlassian.net/browse/NAS-114884) WebUI - displayed reorder & configure buttons on the other pages not dashboard
* [NAS-115225](https://ixsystems.atlassian.net/browse/NAS-115225) "client certificate chain could not be verified with specified root CA."
* [NAS-115869](https://ixsystems.atlassian.net/browse/NAS-115869) NTP service broken when DHCP provides NTP servers.
* [NAS-115943](https://ixsystems.atlassian.net/browse/NAS-115943) 3080 GPU not detected / won't install
* [NAS-116495](https://ixsystems.atlassian.net/browse/NAS-116495) Run blocking calls in threads in sysdataset plugin
* [NAS-116526](https://ixsystems.atlassian.net/browse/NAS-116526) Enabling the wrong PCI Passthrough bricked host SCALE
* [NAS-116537](https://ixsystems.atlassian.net/browse/NAS-116537) Replace disk dialog does not include any identifying information about the disk
* [NAS-116716](https://ixsystems.atlassian.net/browse/NAS-116716) \[SCALE\] OpenEBS failing to start after update
* [NAS-117316](https://ixsystems.atlassian.net/browse/NAS-117316) \[SCALE\] Prevent user from deploying app with port conflicts
* [NAS-117392](https://ixsystems.atlassian.net/browse/NAS-117392) Add clustered time health check
* [NAS-117473](https://ixsystems.atlassian.net/browse/NAS-117473) Scrub causes system to be unresponsive
* [NAS-117935](https://ixsystems.atlassian.net/browse/NAS-117935) Rootless login: local authentication and authorization
* [NAS-117941](https://ixsystems.atlassian.net/browse/NAS-117941) Error when going to datasets after removing all pools
* [NAS-118011](https://ixsystems.atlassian.net/browse/NAS-118011) On TrueNAS SCALE, when performing GPU passthrough with high-memory cards QEMU options are required
* [NAS-118177](https://ixsystems.atlassian.net/browse/NAS-118177) Storj integration doesn't work with existing accounts
* [NAS-118210](https://ixsystems.atlassian.net/browse/NAS-118210) webUI making unnecessary calls on reporting page
* [NAS-118244](https://ixsystems.atlassian.net/browse/NAS-118244) Pool creation silently fails on former MDRAID disks
* [NAS-118255](https://ixsystems.atlassian.net/browse/NAS-118255) Scale UI shows all VMs in stopped state, but they are running
* [NAS-118290](https://ixsystems.atlassian.net/browse/NAS-118290) \[SCALE\] Apps logs, keep repeating every few seconds
* [NAS-118291](https://ixsystems.atlassian.net/browse/NAS-118291) Data Protection - Replication Tasks - Snapshot Retention
* [NAS-118305](https://ixsystems.atlassian.net/browse/NAS-118305) Changing network settings in CLI on initial install
* [NAS-118327](https://ixsystems.atlassian.net/browse/NAS-118327) Restore Angular loading indication
* [NAS-118328](https://ixsystems.atlassian.net/browse/NAS-118328) Kubernetes migration hangs if encryption is turned on
* [NAS-118339](https://ixsystems.atlassian.net/browse/NAS-118339) No Snapshots are shown
* [NAS-118348](https://ixsystems.atlassian.net/browse/NAS-118348) ZFS snapdirs stats are gathered by collectd df plugin
* [NAS-118349](https://ixsystems.atlassian.net/browse/NAS-118349) Fix Datasets table to cut off really long dataset names
* [NAS-118354](https://ixsystems.atlassian.net/browse/NAS-118354) Nextcloud on SCALE crashes when Postgres Backup Volume option is selected
* [NAS-118369](https://ixsystems.atlassian.net/browse/NAS-118369) recycle touch file causes SMB assertion on 4.17.0 release
* [NAS-118375](https://ixsystems.atlassian.net/browse/NAS-118375) UI Breaks on mobile screens if you have dataset details open and you delete the dataset
* [NAS-118381](https://ixsystems.atlassian.net/browse/NAS-118381) test\_create\_schema\_formattion unit test failing
* [NAS-118383](https://ixsystems.atlassian.net/browse/NAS-118383) \[TrueNAS SCALE-22.12-BETA.1\] Config Import not working
* [NAS-118421](https://ixsystems.atlassian.net/browse/NAS-118421) openvpn: Options error: In \[CMD-LINE\]:1: Error opening configuration file: client.conf
* [NAS-118423](https://ixsystems.atlassian.net/browse/NAS-118423) Reporting is broken - Cannot read properties of undefined 
* [NAS-118428](https://ixsystems.atlassian.net/browse/NAS-118428) Add upgrade strategy for storj app
* [NAS-118444](https://ixsystems.atlassian.net/browse/NAS-118444) add MISMATCH\_VERSIONS to failover.disabled.reasons
* [NAS-118447](https://ixsystems.atlassian.net/browse/NAS-118447) During Select an unused disk progress-spinner is not render
* [NAS-118464](https://ixsystems.atlassian.net/browse/NAS-118464) \`Metadata \(Special\) Small Block Size\` on the dataset form has a null default value
* [NAS-118465](https://ixsystems.atlassian.net/browse/NAS-118465) Config upload error message is not displayed
* [NAS-118470](https://ixsystems.atlassian.net/browse/NAS-118470) Multiselect styles are broken
* [NAS-118477](https://ixsystems.atlassian.net/browse/NAS-118477) Cleanup all the cluster things
* [NAS-118478](https://ixsystems.atlassian.net/browse/NAS-118478) fix cluster smb config test
* [NAS-118513](https://ixsystems.atlassian.net/browse/NAS-118513) prevent swap on data drives on ix enterprise hardware
* [NAS-118517](https://ixsystems.atlassian.net/browse/NAS-118517) CalledProcessError dialog appears when I open /ui/storage page
* [NAS-118519](https://ixsystems.atlassian.net/browse/NAS-118519) webUI showing wrong HA status
* [NAS-118520](https://ixsystems.atlassian.net/browse/NAS-118520) WebUI elements missing from System Settings -> General page after migrating from CORE to SCALE
* [NAS-118524](https://ixsystems.atlassian.net/browse/NAS-118524) WebUI: Atime is displayed differently.
* [NAS-118530](https://ixsystems.atlassian.net/browse/NAS-118530) Advanced system settings, a few boxes appear twice
* [NAS-118535](https://ixsystems.atlassian.net/browse/NAS-118535) Apps stopped working
* [NAS-118536](https://ixsystems.atlassian.net/browse/NAS-118536) K3s not starting
* [NAS-118541](https://ixsystems.atlassian.net/browse/NAS-118541) Progress bar overflows jobs dialog
* [NAS-118546](https://ixsystems.atlassian.net/browse/NAS-118546) Disable some cloud sync buckets
* [NAS-118557](https://ixsystems.atlassian.net/browse/NAS-118557) Replication: Only Same as Source and None retention policies can be used with Naming regex
* [NAS-118563](https://ixsystems.atlassian.net/browse/NAS-118563) fix service.restart and journal sync race
* [NAS-118567](https://ixsystems.atlassian.net/browse/NAS-118567) Allow migrating applications when encrypted
* [NAS-118573](https://ixsystems.atlassian.net/browse/NAS-118573) Apps lead to deathlocks due to low inotify.max\_user\_watches
* [NAS-118580](https://ixsystems.atlassian.net/browse/NAS-118580) Remove k8s cronjobs when scaling down apps
* [NAS-118583](https://ixsystems.atlassian.net/browse/NAS-118583) Time Zone is right. System time is not
* [NAS-118586](https://ixsystems.atlassian.net/browse/NAS-118586) Fix VMware snapshot delete test
* [NAS-118594](https://ixsystems.atlassian.net/browse/NAS-118594) Avoid unnecessary avahi reload\_config\(\) calls
* [NAS-118599](https://ixsystems.atlassian.net/browse/NAS-118599) Do not expose MIXED case sensitivity as user choice
* [NAS-118614](https://ixsystems.atlassian.net/browse/NAS-118614) Cloud tasks for Move and Sync transfer mode reverts to Copy
* [NAS-118616](https://ixsystems.atlassian.net/browse/NAS-118616) SMB Share Option Edit FilesystemACL Opens Main Dashboard Not the Edit Filesystem ACL Configuration Form
* [NAS-118624](https://ixsystems.atlassian.net/browse/NAS-118624) Remove unnecessary freebsd rc files in scale
* [NAS-118627](https://ixsystems.atlassian.net/browse/NAS-118627) Employ new method of testing if storj bucket is related to iX as conf…
* [NAS-118628](https://ixsystems.atlassian.net/browse/NAS-118628) Rework UI for replacing an unavailable disk
* [NAS-118635](https://ixsystems.atlassian.net/browse/NAS-118635) \(py-libzfs\) zed core dump after merging zfs-2.1.6 patchset
* [NAS-118695](https://ixsystems.atlassian.net/browse/NAS-118695) \[SCALE\] k3s crash loop
* [NAS-118697](https://ixsystems.atlassian.net/browse/NAS-118697) \(openzfs\) zed core dump after merging zfs-2.1.6 patchset
* [NAS-118765](https://ixsystems.atlassian.net/browse/NAS-118765) SMB Share ACLs do not open/work on TrueNAS Scale 22.12-BETA.2
* [NAS-118782](https://ixsystems.atlassian.net/browse/NAS-118782) Update samba to 4.17.2
* [NAS-118856](https://ixsystems.atlassian.net/browse/NAS-118856) SCALE nightlies includes kernel modules for wrong kernel
* [NAS-118949](https://ixsystems.atlassian.net/browse/NAS-118949) pywbclient - Fix refcounting on PyUidGid class init error path

### Notice

MinIO has removed backwards compatibility with version 2022-10-24_1.6.58.

MinIO fails to deploy if you update your version 2022-10-24_1.6.58 Minio app to 2022-10-29_1.6.59 or later using the TrueNAS web UI. Use the app roll back function and return to 2022-10-24_1.6.58 to make your MinIO app functional again.
See the [MinIO Migration documentation](https://min.io/docs/minio/kubernetes/upstream/operations/install-deploy-manage/migrate-fs-gateway.html#procedure) to manually update your MinIO app to the latest version without losing functionality.
{{< /expand >}}

## 22.12-BETA.2 
{{< expand "22.12-BETA.2" "v" >}}
**October 18, 2022**

TrueNAS SCALE 22.12-BETA.2 has been released and includes many new features and improved functionaltiy. SCALE 22.-BETA.2 features include:

* Removes old Storage pages, renames storage modules, and makes minor improvements to storage pages
* Adds the offical Filecoin application to the Apps catalog

## 22.12-BETA.2 Change Log

### New Feature

* [NAS-118403](https://ixsystems.atlassian.net/browse/NAS-118403) Branchout for BETA2
* [NAS-118325](https://ixsystems.atlassian.net/browse/NAS-118325) Add USB passthrough support in the UI
* [NAS-118303](https://ixsystems.atlassian.net/browse/NAS-118303) Need to add new reasons to FailoverDisabledReason enum in webUI
* [NAS-118270](https://ixsystems.atlassian.net/browse/NAS-118270) Remove old storage pages
* [NAS-118209](https://ixsystems.atlassian.net/browse/NAS-118209) Hold option for snapshots
* [NAS-118147](https://ixsystems.atlassian.net/browse/NAS-118147) Refactor html components, improve readability and restructure Input, Output priorities
* [NAS-118068](https://ixsystems.atlassian.net/browse/NAS-118068) Add R50BM to enclosure mapping code and to keyserver
* [NAS-118050](https://ixsystems.atlassian.net/browse/NAS-118050) Research usage stats for Apps Redesign
* [NAS-118037](https://ixsystems.atlassian.net/browse/NAS-118037) Fix out of bounds text for the Apps page
* [NAS-118036](https://ixsystems.atlassian.net/browse/NAS-118036) Add Ukrainian 🇺🇦 Translations to the APP | 22.12
* [NAS-117938](https://ixsystems.atlassian.net/browse/NAS-117938) Rename storage modules
* [NAS-117867](https://ixsystems.atlassian.net/browse/NAS-117867) Roles card sometimes doesn't match roles cell
* [NAS-117827](https://ixsystems.atlassian.net/browse/NAS-117827) New cloud sync provider: "Storj iX" \(13 and Angelfish\)
* [NAS-117813](https://ixsystems.atlassian.net/browse/NAS-117813) Improve indication for which apps use dataset
* [NAS-117812](https://ixsystems.atlassian.net/browse/NAS-117812) Minor updates to storage pages
* [NAS-117754](https://ixsystems.atlassian.net/browse/NAS-117754) Fix font rendering
* [NAS-117491](https://ixsystems.atlassian.net/browse/NAS-117491) Improve error handling in new storage pages
* [NAS-117474](https://ixsystems.atlassian.net/browse/NAS-117474) Replace sticky search with sticky table headers in Datasets
* [NAS-117427](https://ixsystems.atlassian.net/browse/NAS-117427) Fix out of bounds text for the new disks and datasets page
* [NAS-116194](https://ixsystems.atlassian.net/browse/NAS-116194) Review and break down the tasks required to restructure and refactor the storage page
* [NAS-110516](https://ixsystems.atlassian.net/browse/NAS-110516) Storage → \(cog\) → Snapshots: New column "retention"

### Improvement

* [NAS-118526](https://ixsystems.atlassian.net/browse/NAS-118526) Partially enable no-restricted-syntax
* [NAS-118514](https://ixsystems.atlassian.net/browse/NAS-118514) Remove DocReplaceService
* [NAS-118499](https://ixsystems.atlassian.net/browse/NAS-118499) Extract some VM dialogs into separate components
* [NAS-118480](https://ixsystems.atlassian.net/browse/NAS-118480) Do not spam daemon logs with kube-router logs
* [NAS-118466](https://ixsystems.atlassian.net/browse/NAS-118466) Create RootPath enum with MNT variable to avoid strings '/mnt' in code
* [NAS-118432](https://ixsystems.atlassian.net/browse/NAS-118432) Acpidump on scale
* [NAS-118420](https://ixsystems.atlassian.net/browse/NAS-118420) Extract user/group deletion dialog forms
* [NAS-118412](https://ixsystems.atlassian.net/browse/NAS-118412) Pool process modal width depends on content \[width jumping\]
* [NAS-118411](https://ixsystems.atlassian.net/browse/NAS-118411) Fix swatch colour in space-management-chart
* [NAS-118387](https://ixsystems.atlassian.net/browse/NAS-118387) USB passthrough should allow USB VID/PID and dynamic location
* [NAS-118364](https://ixsystems.atlassian.net/browse/NAS-118364) `make reinstall` of middleware should apply systemd unit changes
* [NAS-118334](https://ixsystems.atlassian.net/browse/NAS-118334) ScreenType across APP => make sure we use `enum` and use in .html instead of just string
* [NAS-118333](https://ixsystems.atlassian.net/browse/NAS-118333) App Icons improvements & text colors near icons
* [NAS-118273](https://ixsystems.atlassian.net/browse/NAS-118273) Refactor some dialog components into separate components
* [NAS-118269](https://ixsystems.atlassian.net/browse/NAS-118269) Improve UI layout on forms, chips
* [NAS-118262](https://ixsystems.atlassian.net/browse/NAS-118262) Improvements for Boot Pool Status page
* [NAS-118216](https://ixsystems.atlassian.net/browse/NAS-118216) Record midclt enclosure.query in debug \(Core/Enterprise/Scale\)
* [NAS-118198](https://ixsystems.atlassian.net/browse/NAS-118198) Tuning to improve Storj / rclone performance
* [NAS-118185](https://ixsystems.atlassian.net/browse/NAS-118185) Reduce number of any's
* [NAS-118151](https://ixsystems.atlassian.net/browse/NAS-118151) Hide Aliases section if DHCP/Autoconfiguration radio box\(es\) is/are checked
* [NAS-118130](https://ixsystems.atlassian.net/browse/NAS-118130) Upgrade rxjs
* [NAS-118101](https://ixsystems.atlassian.net/browse/NAS-118101) Function clean up for Datasets module
* [NAS-118058](https://ixsystems.atlassian.net/browse/NAS-118058) Sync \[visual-ui\] data on the Pool and Storage widgets
* [NAS-118044](https://ixsystems.atlassian.net/browse/NAS-118044) Refactor console message footer
* [NAS-118041](https://ixsystems.atlassian.net/browse/NAS-118041) Do not backup catalogs dataset on kubernetes backup
* [NAS-118039](https://ixsystems.atlassian.net/browse/NAS-118039) Clean up topbar.component
* [NAS-118007](https://ixsystems.atlassian.net/browse/NAS-118007) Remove BaseService
* [NAS-118006](https://ixsystems.atlassian.net/browse/NAS-118006) Refactor ReportsDashboard module
* [NAS-118003](https://ixsystems.atlassian.net/browse/NAS-118003) Refactor Cloud Sync Form to ix-forms
* [NAS-117968](https://ixsystems.atlassian.net/browse/NAS-117968) Add tooltips to status icons on Pools Dashboard
* [NAS-117947](https://ixsystems.atlassian.net/browse/NAS-117947) Add `otp_token` field when creating an SSH connection in semi-automatic mode
* [NAS-117945](https://ixsystems.atlassian.net/browse/NAS-117945) Invert customValidator
* [NAS-117942](https://ixsystems.atlassian.net/browse/NAS-117942) Code cleanup in new Storage module
* [NAS-117937](https://ixsystems.atlassian.net/browse/NAS-117937) Refactor AlertConfigComponent to ix-forms
* [NAS-117932](https://ixsystems.atlassian.net/browse/NAS-117932) Enable more linter rules
* [NAS-117905](https://ixsystems.atlassian.net/browse/NAS-117905) A way to indicate which "unused" disks are part of importable pools
* [NAS-117892](https://ixsystems.atlassian.net/browse/NAS-117892) Bump up starting range for UIDS / GIDS on SCALE and Core
* [NAS-117887](https://ixsystems.atlassian.net/browse/NAS-117887) hactl needs to be improved on SCALE
* [NAS-117874](https://ixsystems.atlassian.net/browse/NAS-117874) Handle incorrectly formatted disks
* [NAS-117870](https://ixsystems.atlassian.net/browse/NAS-117870) Properly handle change of an icon name at `ix-icon`
* [NAS-117859](https://ixsystems.atlassian.net/browse/NAS-117859) Fix sidenav bar overlapping with truenas text at the bottom
* [NAS-117854](https://ixsystems.atlassian.net/browse/NAS-117854) UI should add validate host path attribute in apps settings
* [NAS-117848](https://ixsystems.atlassian.net/browse/NAS-117848) subprocessing 16 times in main event loop on middleware startup
* [NAS-117847](https://ixsystems.atlassian.net/browse/NAS-117847) add endpoint to retrieve VM log files
* [NAS-117846](https://ixsystems.atlassian.net/browse/NAS-117846) Find a better way of handling max concurrent calls errors on storage dashboard
* [NAS-117837](https://ixsystems.atlassian.net/browse/NAS-117837) disk.get\_unused should maybe include info from ID\_FS\_LABEL in output
* [NAS-117836](https://ixsystems.atlassian.net/browse/NAS-117836) Use new method for updating isolating gpu pci ids in UI
* [NAS-117796](https://ixsystems.atlassian.net/browse/NAS-117796) Don't allow unsetting host path validation for enterprise users
* [NAS-117766](https://ixsystems.atlassian.net/browse/NAS-117766) Extract ix-label from ix-form components
* [NAS-117759](https://ixsystems.atlassian.net/browse/NAS-117759) Investigate setting permissions on /data to 0o700
* [NAS-117699](https://ixsystems.atlassian.net/browse/NAS-117699) add tests for copy\_file\_range \(server-side copy\) for NFSv4.2
* [NAS-117618](https://ixsystems.atlassian.net/browse/NAS-117618) Review pickle module usage in middlewared
* [NAS-117614](https://ixsystems.atlassian.net/browse/NAS-117614) middleware files in /var/run should be in dedicated run directory
* [NAS-117445](https://ixsystems.atlassian.net/browse/NAS-117445) Charts MinIO pod does not follow standard min.io folder structure
* [NAS-117372](https://ixsystems.atlassian.net/browse/NAS-117372) Add client side validation for app names
* [NAS-117298](https://ixsystems.atlassian.net/browse/NAS-117298) Expose timemachine\_quota key if users enable time machine on share
* [NAS-117261](https://ixsystems.atlassian.net/browse/NAS-117261) Investigate on reducing usages of IxEntityTreeTable
* [NAS-117134](https://ixsystems.atlassian.net/browse/NAS-117134) Improvement for Bugclerk
* [NAS-115917](https://ixsystems.atlassian.net/browse/NAS-115917) use secrets module instead of random
* [NAS-115636](https://ixsystems.atlassian.net/browse/NAS-115636) Expose Cluster Volume Locations
* [NAS-114416](https://ixsystems.atlassian.net/browse/NAS-114416) Document how to start middleware in debug mode
* [NAS-114415](https://ixsystems.atlassian.net/browse/NAS-114415) Document how to build custom SCALE ISO
* [NAS-112452](https://ixsystems.atlassian.net/browse/NAS-112452) Hold option for snapshots
* [NAS-111781](https://ixsystems.atlassian.net/browse/NAS-111781) VMware snapshot improvements
* [NAS-111464](https://ixsystems.atlassian.net/browse/NAS-111464) Add who field to filesystem.get\_default\_acl
* [NAS-100748](https://ixsystems.atlassian.net/browse/NAS-100748) Remove Internet Explorer support

### Bug

* [NAS-118582](https://ixsystems.atlassian.net/browse/NAS-118582) debug symbols for ZFS userspace tools appear to be missing in SCALE
* [NAS-118576](https://ixsystems.atlassian.net/browse/NAS-118576) Correctly whitelist openvpn.client/server namespace when validating port
* [NAS-118575](https://ixsystems.atlassian.net/browse/NAS-118575) Upgraded catalog item\(s\)
* [NAS-118568](https://ixsystems.atlassian.net/browse/NAS-118568) Avoid spamming log files with docker mounts
* [NAS-118565](https://ixsystems.atlassian.net/browse/NAS-118565) Fix vmware migration
* [NAS-118564](https://ixsystems.atlassian.net/browse/NAS-118564) fix iommu number detection
* [NAS-118558](https://ixsystems.atlassian.net/browse/NAS-118558) Update machinaris from 0.8.3 to 0.8.4
* [NAS-118547](https://ixsystems.atlassian.net/browse/NAS-118547) Fix pihole helm test failing
* [NAS-118512](https://ixsystems.atlassian.net/browse/NAS-118512) Cloud Sync Task can no-longer work for onedrive due to missing parameters for --checkers and --tpslimit
* [NAS-118510](https://ixsystems.atlassian.net/browse/NAS-118510) When staying on one page and want to directly change url by hands \(to view another page\), it redirects to previous page
* [NAS-118508](https://ixsystems.atlassian.net/browse/NAS-118508) Editing stopped app configuration starts the app
* [NAS-118500](https://ixsystems.atlassian.net/browse/NAS-118500) Include avahi-utils in the build
* [NAS-118498](https://ixsystems.atlassian.net/browse/NAS-118498) regression: file name search of samba share from macOS Finder no longer works since Core 12 to 13 upgrade
* [NAS-118496](https://ixsystems.atlassian.net/browse/NAS-118496) Fix docs build
* [NAS-118494](https://ixsystems.atlassian.net/browse/NAS-118494) Document how to fake CPU temperature reporting on a VM
* [NAS-118490](https://ixsystems.atlassian.net/browse/NAS-118490) Extract strings from app routes for translations
* [NAS-118478](https://ixsystems.atlassian.net/browse/NAS-118478) fix cluster smb config test
* [NAS-118476](https://ixsystems.atlassian.net/browse/NAS-118476) Override avahi hostname with hostname\_virtual in HA
* [NAS-118471](https://ixsystems.atlassian.net/browse/NAS-118471) Unexpected directory explorer behaviour in Cloud Sync Task
* [NAS-118469](https://ixsystems.atlassian.net/browse/NAS-118469) call ctdb shared vol methods explicitly
* [NAS-118463](https://ixsystems.atlassian.net/browse/NAS-118463) VMware snapshot tests
* [NAS-118459](https://ixsystems.atlassian.net/browse/NAS-118459) Fix and enhance recycle test
* [NAS-118452](https://ixsystems.atlassian.net/browse/NAS-118452) Add git workflows for upgrade strategy / info linting
* [NAS-118450](https://ixsystems.atlassian.net/browse/NAS-118450) optimize zfs.\{pool/dataset\}.query
* [NAS-118447](https://ixsystems.atlassian.net/browse/NAS-118447) During Select an unused disk progress-spinner is not render
* [NAS-118444](https://ixsystems.atlassian.net/browse/NAS-118444) add MISMATCH\_VERSIONS to failover.disabled.reasons
* [NAS-118429](https://ixsystems.atlassian.net/browse/NAS-118429) properly wait on job in dir services
* [NAS-118428](https://ixsystems.atlassian.net/browse/NAS-118428) Add upgrade strategy for storj app
* [NAS-118424](https://ixsystems.atlassian.net/browse/NAS-118424) Improve test\_420\_smb - use python SMB client
* [NAS-118423](https://ixsystems.atlassian.net/browse/NAS-118423) Reporting is broken - Cannot read properties of undefined
* [NAS-118416](https://ixsystems.atlassian.net/browse/NAS-118416) impose limit on max length of pool name
* [NAS-118415](https://ixsystems.atlassian.net/browse/NAS-118415) Tree select sets undefined to form element if clicked twice
* [NAS-118414](https://ixsystems.atlassian.net/browse/NAS-118414) Warning modal icon bug
* [NAS-118413](https://ixsystems.atlassian.net/browse/NAS-118413) \[SCALE\] openEBS crashing - CoreDNS won't start
* [NAS-118393](https://ixsystems.atlassian.net/browse/NAS-118393) Apps -  'NoneType' object is not subscriptable
* [NAS-118391](https://ixsystems.atlassian.net/browse/NAS-118391) Cannot create VM - NoneType object is not subscriptable
* [NAS-118384](https://ixsystems.atlassian.net/browse/NAS-118384) dont block event loop in ws\_can\_access
* [NAS-118383](https://ixsystems.atlassian.net/browse/NAS-118383) \[TrueNAS SCALE-22.12-BETA.1\] Config Import not working
* [NAS-118381](https://ixsystems.atlassian.net/browse/NAS-118381) test\_create\_schema\_formattion unit test failing
* [NAS-118375](https://ixsystems.atlassian.net/browse/NAS-118375) UI Breaks on mobile screens if you have dataset details open and you delete the dataset
* [NAS-118373](https://ixsystems.atlassian.net/browse/NAS-118373) Fix a few HA issues on SCALE
* [NAS-118372](https://ixsystems.atlassian.net/browse/NAS-118372) Add some more delay to fix k8s logs/exec tests
* [NAS-118362](https://ixsystems.atlassian.net/browse/NAS-118362) drammatically optimize retrieving drive temps
* [NAS-118354](https://ixsystems.atlassian.net/browse/NAS-118354) Nextcloud on SCALE crashes when Postgres Backup Volume option is selected
* [NAS-118353](https://ixsystems.atlassian.net/browse/NAS-118353) Fix loading for mobile screens on the Datasets page
* [NAS-118352](https://ixsystems.atlassian.net/browse/NAS-118352) Incorrect current train
* [NAS-118351](https://ixsystems.atlassian.net/browse/NAS-118351) Disable middleware debug mode being the default
* [NAS-118349](https://ixsystems.atlassian.net/browse/NAS-118349) Fix Datasets table to cut off really long dataset names
* [NAS-118348](https://ixsystems.atlassian.net/browse/NAS-118348) ZFS snapdirs stats are gathered by collectd df plugin
* [NAS-118338](https://ixsystems.atlassian.net/browse/NAS-118338) Avoid logging on FileNotFoundError for sysdataset
* [NAS-118331](https://ixsystems.atlassian.net/browse/NAS-118331) fix interface unit tests
* [NAS-118330](https://ixsystems.atlassian.net/browse/NAS-118330) fix m-series nvme unit test
* [NAS-118329](https://ixsystems.atlassian.net/browse/NAS-118329) fix validation error
* [NAS-118328](https://ixsystems.atlassian.net/browse/NAS-118328) Kubernetes migration hangs if encryption is turned on
* [NAS-118326](https://ixsystems.atlassian.net/browse/NAS-118326) Bring back VMware snapshots page
* [NAS-118324](https://ixsystems.atlassian.net/browse/NAS-118324) Fix build
* [NAS-118305](https://ixsystems.atlassian.net/browse/NAS-118305) Changing network settings in CLI on initial install
* [NAS-118304](https://ixsystems.atlassian.net/browse/NAS-118304) Avoid blocking calls in smb plugin
* [NAS-118302](https://ixsystems.atlassian.net/browse/NAS-118302) netbios\_name\_check\_sid integration test failing on SCALE HA
* [NAS-118297](https://ixsystems.atlassian.net/browse/NAS-118297) Fix keyerror during idmap\_create
* [NAS-118296](https://ixsystems.atlassian.net/browse/NAS-118296) revert 058034a092b8d1d5df55a49c2f0e65dba763e218
* [NAS-118295](https://ixsystems.atlassian.net/browse/NAS-118295) dont run boot\_attach tests on HA VMs
* [NAS-118294](https://ixsystems.atlassian.net/browse/NAS-118294) move test\_008\_hactl to test\_14\_failover\_related
* [NAS-118291](https://ixsystems.atlassian.net/browse/NAS-118291) Data Protection - Replication Tasks - Snapshot Retention
* [NAS-118290](https://ixsystems.atlassian.net/browse/NAS-118290) \[SCALE\] Apps logs, keep repeating every few seconds
* [NAS-118289](https://ixsystems.atlassian.net/browse/NAS-118289) fix copy and paste typo....
* [NAS-118283](https://ixsystems.atlassian.net/browse/NAS-118283) fix failover.disabled.reasons
* [NAS-118282](https://ixsystems.atlassian.net/browse/NAS-118282) Unexpected results when filtering datasets
* [NAS-118278](https://ixsystems.atlassian.net/browse/NAS-118278) GUI element “SSH Public Key” incorrectly named
* [NAS-118267](https://ixsystems.atlassian.net/browse/NAS-118267) Disallow mat-icon selector in styles
* [NAS-118261](https://ixsystems.atlassian.net/browse/NAS-118261) Fix `test__get_smartd_config`
* [NAS-118260](https://ixsystems.atlassian.net/browse/NAS-118260) Keep column in Boot Environments in confusing
* [NAS-118258](https://ixsystems.atlassian.net/browse/NAS-118258) Fix icon color in sidebar
* [NAS-118257](https://ixsystems.atlassian.net/browse/NAS-118257) fix mapping rear NVMe on M50/60 HA systems
* [NAS-118252](https://ixsystems.atlassian.net/browse/NAS-118252) Failed to replace route to service VIP
* [NAS-118250](https://ixsystems.atlassian.net/browse/NAS-118250) SMB2 not working unless SMB1 checked
* [NAS-118249](https://ixsystems.atlassian.net/browse/NAS-118249) dont call pool.query in vmware plugin
* [NAS-118244](https://ixsystems.atlassian.net/browse/NAS-118244) Pool creation silently fails on former MDRAID disks
* [NAS-118243](https://ixsystems.atlassian.net/browse/NAS-118243) `boot.attach`/`boot.replace`/`boot.detach` tests
* [NAS-118242](https://ixsystems.atlassian.net/browse/NAS-118242) `boot.replace` is a job now
* [NAS-118241](https://ixsystems.atlassian.net/browse/NAS-118241) Fix boot device replace
* [NAS-118234](https://ixsystems.atlassian.net/browse/NAS-118234) When uploading a manual update file, an accidental click outside the upload progress window cancels the entire job
* [NAS-118228](https://ixsystems.atlassian.net/browse/NAS-118228) Send correct label when replacing a vdev in the boot pool
* [NAS-118227](https://ixsystems.atlassian.net/browse/NAS-118227) Boot pool vdev replace dialog disk dropdown misses disk size
* [NAS-118222](https://ixsystems.atlassian.net/browse/NAS-118222) Fix keyerror in ACL template domain info lookup
* [NAS-118205](https://ixsystems.atlassian.net/browse/NAS-118205) Fix tests Suites
* [NAS-118200](https://ixsystems.atlassian.net/browse/NAS-118200) Hardcoded alert message with old Jira link
* [NAS-118197](https://ixsystems.atlassian.net/browse/NAS-118197) Fix k3s logs/exec issue
* [NAS-118191](https://ixsystems.atlassian.net/browse/NAS-118191) Initialize csource before zfs\_prop\_get
* [NAS-118184](https://ixsystems.atlassian.net/browse/NAS-118184) Fix link to create a new pool
* [NAS-118178](https://ixsystems.atlassian.net/browse/NAS-118178) fix typo in failover\_/event.py
* [NAS-118177](https://ixsystems.atlassian.net/browse/NAS-118177) Storj integration doesn't work with existing accounts
* [NAS-118171](https://ixsystems.atlassian.net/browse/NAS-118171) rsync task remote path widget offers to select a local path
* [NAS-118169](https://ixsystems.atlassian.net/browse/NAS-118169) When I edit an rsync task that uses SSH connection from keychain "SSH connection" field is empty
* [NAS-118168](https://ixsystems.atlassian.net/browse/NAS-118168) Do not require `remotehost` when rsync task is configured using an SS…
* [NAS-118167](https://ixsystems.atlassian.net/browse/NAS-118167) Dashboard crashing due to `WidgetNetworkComponent` bug
* [NAS-118165](https://ixsystems.atlassian.net/browse/NAS-118165) Wrong width of blocks with charts after expansion the sidenav
* [NAS-118164](https://ixsystems.atlassian.net/browse/NAS-118164) fix AttributeError crash in update.get\_trains
* [NAS-118148](https://ixsystems.atlassian.net/browse/NAS-118148) Translate tooltips in navigation and page title
* [NAS-118146](https://ixsystems.atlassian.net/browse/NAS-118146) freenas\_default expiring alert cannot be removed once the certificate is deleted
* [NAS-118141](https://ixsystems.atlassian.net/browse/NAS-118141) allow easy checking of sha256 checksum
* [NAS-118139](https://ixsystems.atlassian.net/browse/NAS-118139) Catalogs need to be synced after restoring k8s backup
* [NAS-118138](https://ixsystems.atlassian.net/browse/NAS-118138) Fix unused disks issue
* [NAS-118136](https://ixsystems.atlassian.net/browse/NAS-118136) fix crash\(es\) in webui\_auth::addr\_in\_allowlist
* [NAS-118135](https://ixsystems.atlassian.net/browse/NAS-118135) fix crash in nginx.get\_remote\_addr\_port
* [NAS-118131](https://ixsystems.atlassian.net/browse/NAS-118131) fix ctdb shared volume teardown integration test
* [NAS-118123](https://ixsystems.atlassian.net/browse/NAS-118123) Alert in TrueNAS Scale won't go away even after clicking on "dismiss"
* [NAS-118117](https://ixsystems.atlassian.net/browse/NAS-118117) move gluster fuse mounts to root cgroups
* [NAS-118113](https://ixsystems.atlassian.net/browse/NAS-118113) \[SCALE\] WebUI cannot get the properties of the dataset correctly
* [NAS-118111](https://ixsystems.atlassian.net/browse/NAS-118111) Fix undefined name in vm/devices.cdrom.py
* [NAS-118110](https://ixsystems.atlassian.net/browse/NAS-118110) move fenced process to root cgroup
* [NAS-118107](https://ixsystems.atlassian.net/browse/NAS-118107) Application Snapshots are getting high
* [NAS-118104](https://ixsystems.atlassian.net/browse/NAS-118104) Allow to subscribe to events for unauthenticated users
* [NAS-118103](https://ixsystems.atlassian.net/browse/NAS-118103) add connect\_timeout to remote client
* [NAS-118098](https://ixsystems.atlassian.net/browse/NAS-118098) improve failover.disabled.reasons
* [NAS-118097](https://ixsystems.atlassian.net/browse/NAS-118097) Allow non-coroutine to be passed to `register_hook` and executed corr…
* [NAS-118094](https://ixsystems.atlassian.net/browse/NAS-118094) Use libwbclient bindings
* [NAS-118093](https://ixsystems.atlassian.net/browse/NAS-118093) Dont block event look in check\_permission hook
* [NAS-118083](https://ixsystems.atlassian.net/browse/NAS-118083) fix AttributeError crash in ha\_permission hook
* [NAS-118080](https://ixsystems.atlassian.net/browse/NAS-118080) fix scale nightlies build \(update collectd to 5.12.0-11\)
* [NAS-118078](https://ixsystems.atlassian.net/browse/NAS-118078) fix test\_is\_outdated\_alert
* [NAS-118076](https://ixsystems.atlassian.net/browse/NAS-118076) Switch to using vfs\_ixnas for default ACL module
* [NAS-118075](https://ixsystems.atlassian.net/browse/NAS-118075) fix ssl integration test \(typo\)
* [NAS-118074](https://ixsystems.atlassian.net/browse/NAS-118074) \(SCALE\) Plugins HPE MicroServer Gen8 not working with more, than 4 Drives
* [NAS-118072](https://ixsystems.atlassian.net/browse/NAS-118072) Update Dataset Roles
* [NAS-118071](https://ixsystems.atlassian.net/browse/NAS-118071) Fix expand button indentation on datasets tree
* [NAS-118065](https://ixsystems.atlassian.net/browse/NAS-118065) Cannot convert stripe to mirror in UI
* [NAS-118064](https://ixsystems.atlassian.net/browse/NAS-118064) cache failover.hardware.detect
* [NAS-118059](https://ixsystems.atlassian.net/browse/NAS-118059) fix blank graphs when UPSBase plugin crashes
* [NAS-118055](https://ixsystems.atlassian.net/browse/NAS-118055) Add ability to configure environment variables for nextcloud application
* [NAS-118053](https://ixsystems.atlassian.net/browse/NAS-118053) Fix CI runs on master
* [NAS-118048](https://ixsystems.atlassian.net/browse/NAS-118048) remove trailing forward slash in corssl package
* [NAS-118040](https://ixsystems.atlassian.net/browse/NAS-118040) Introduce an internal job for retrieving catalog items
* [NAS-118025](https://ixsystems.atlassian.net/browse/NAS-118025) Bluefin \(22.12\) fails to bring up interface
* [NAS-118019](https://ixsystems.atlassian.net/browse/NAS-118019) Prohibit trailing spaces in ZFS dataset names
* [NAS-118015](https://ixsystems.atlassian.net/browse/NAS-118015) prevent blocking event loop when checking updates
* [NAS-118014](https://ixsystems.atlassian.net/browse/NAS-118014) fix failover.get\_ips
* [NAS-118013](https://ixsystems.atlassian.net/browse/NAS-118013) Improve `core.bulk` documentation
* [NAS-118011](https://ixsystems.atlassian.net/browse/NAS-118011) On TrueNAS SCALE, when performing GPU passthrough with high-memory cards QEMU options are required
* [NAS-118004](https://ixsystems.atlassian.net/browse/NAS-118004) Preserve pool disks for Disk Temperature Reports
* [NAS-117997](https://ixsystems.atlassian.net/browse/NAS-117997) Fix hostname spelling
* [NAS-117996](https://ixsystems.atlassian.net/browse/NAS-117996) Inherit border width for inputs on focus
* [NAS-117991](https://ixsystems.atlassian.net/browse/NAS-117991) Use zfs.pool.query\_imported\_fast in failover.status
* [NAS-117987](https://ixsystems.atlassian.net/browse/NAS-117987) certificate verify failed: self signed certificate in certificate chain
* [NAS-117986](https://ixsystems.atlassian.net/browse/NAS-117986) Number in CPU widget looks weird on Safari
* [NAS-117983](https://ixsystems.atlassian.net/browse/NAS-117983) Clickable logo on mobile screens
* [NAS-117973](https://ixsystems.atlassian.net/browse/NAS-117973) Simplify ixDetailsHeight
* [NAS-117972](https://ixsystems.atlassian.net/browse/NAS-117972) No error message when trying to delete snapshot with hold
* [NAS-117962](https://ixsystems.atlassian.net/browse/NAS-117962) Remove freebsd services
* [NAS-117959](https://ixsystems.atlassian.net/browse/NAS-117959) UI Setting automatically switches to browser language
* [NAS-117953](https://ixsystems.atlassian.net/browse/NAS-117953) \[SCALE\] Arrays are getting removed when editing
* [NAS-117952](https://ixsystems.atlassian.net/browse/NAS-117952) \[Apps\] App logs dropdown, doesn't allow selecting initcontainer
* [NAS-117950](https://ixsystems.atlassian.net/browse/NAS-117950) mask ndctl-monitor.service
* [NAS-117944](https://ixsystems.atlassian.net/browse/NAS-117944) Allow passing OTP token to \`keychaincredential.remote\_ssh\_semiautomat…
* [NAS-117943](https://ixsystems.atlassian.net/browse/NAS-117943) Browser navigation doesn't close slide-in
* [NAS-117933](https://ixsystems.atlassian.net/browse/NAS-117933) remove migrate call in make reinstall\_container
* [NAS-117931](https://ixsystems.atlassian.net/browse/NAS-117931) Using HTTP Basic Auth will bypass 2FA
* [NAS-117927](https://ixsystems.atlassian.net/browse/NAS-117927) Remove dead smartctl code and fix functional tests
* [NAS-117926](https://ixsystems.atlassian.net/browse/NAS-117926) fix test\_mountinfo unit test
* [NAS-117925](https://ixsystems.atlassian.net/browse/NAS-117925) Make container.prune a job
* [NAS-117921](https://ixsystems.atlassian.net/browse/NAS-117921) add `reinstall_container` make argument
* [NAS-117917](https://ixsystems.atlassian.net/browse/NAS-117917) hitting ctrl \+C via OOB managemnt on truenas console menu locks up console
* [NAS-117916](https://ixsystems.atlassian.net/browse/NAS-117916) NFS does not start on boot
* [NAS-117911](https://ixsystems.atlassian.net/browse/NAS-117911) Samba Share ACL resets to Everyone when disabled and re-enabled
* [NAS-117903](https://ixsystems.atlassian.net/browse/NAS-117903) CPU Usage graph key shows incorrect values when zooming
* [NAS-117902](https://ixsystems.atlassian.net/browse/NAS-117902) \[SCALE\]: show\_if '!=' does not work, but '=' does work.
* [NAS-117901](https://ixsystems.atlassian.net/browse/NAS-117901) Optimize Zpool related alerts
* [NAS-117897](https://ixsystems.atlassian.net/browse/NAS-117897) webUI isn't showing what controller the alert was generated on
* [NAS-117895](https://ixsystems.atlassian.net/browse/NAS-117895) CRITICAL ERROR ON UPDATE TrueNAS-22.02.0.1 -> TrueNAS-22.02.3
* [NAS-117890](https://ixsystems.atlassian.net/browse/NAS-117890) Truecharts Applications failing to deploy due to snapshot task on latest bluefin nightly
* [NAS-117872](https://ixsystems.atlassian.net/browse/NAS-117872) License Apps and VMs for Enterprise \(Backend\)
* [NAS-117871](https://ixsystems.atlassian.net/browse/NAS-117871) Hide/Disable Apps and VMs based on License for Enterprise \(UI\)
* [NAS-117857](https://ixsystems.atlassian.net/browse/NAS-117857) WebUI shell breaks on long strings
* [NAS-117853](https://ixsystems.atlassian.net/browse/NAS-117853) UI should not specify path attribute when zvol is being created for disk based vm devices
* [NAS-117843](https://ixsystems.atlassian.net/browse/NAS-117843) cli app container config prune failed
* [NAS-117831](https://ixsystems.atlassian.net/browse/NAS-117831) Update on disk GRUB configuration for serial
* [NAS-117800](https://ixsystems.atlassian.net/browse/NAS-117800) Systemd Services fail
* [NAS-117794](https://ixsystems.atlassian.net/browse/NAS-117794) /etc/resolv.conf in Live ISO's filesystem.squash contains development information
* [NAS-117777](https://ixsystems.atlassian.net/browse/NAS-117777) Unable to join active directory if SMB is not started first
* [NAS-117752](https://ixsystems.atlassian.net/browse/NAS-117752) Unable to boot into previous boot environment
* [NAS-117748](https://ixsystems.atlassian.net/browse/NAS-117748) Application States incorrectly reports available update
* [NAS-117747](https://ixsystems.atlassian.net/browse/NAS-117747) vm.stop services do not stop
* [NAS-117736](https://ixsystems.atlassian.net/browse/NAS-117736) Installed chart in TrueNAS SCALE gives Middleware error
* [NAS-117722](https://ixsystems.atlassian.net/browse/NAS-117722) After migrating Core to Scale, cannot resilver boot mirror
* [NAS-117715](https://ixsystems.atlassian.net/browse/NAS-117715) \[SCALE\] Data Protection pages is broken
* [NAS-117710](https://ixsystems.atlassian.net/browse/NAS-117710) ZFS space efficiency on devices with huge physical blocks
* [NAS-117708](https://ixsystems.atlassian.net/browse/NAS-117708) Wireguard setup stuck in loop if wireguard connection is not established with cloud
* [NAS-117688](https://ixsystems.atlassian.net/browse/NAS-117688) Cannot Edit VMs
* [NAS-117674](https://ixsystems.atlassian.net/browse/NAS-117674) Pool import fails randomly
* [NAS-117658](https://ixsystems.atlassian.net/browse/NAS-117658) TrueNAS-SCALE-22.02.4-MASTER-20220805-041141 can't start VMs after importing old config or upgrading from 22.02.3 or earlier
* [NAS-117653](https://ixsystems.atlassian.net/browse/NAS-117653) GUI allows creation of SMB shares for nonexistent paths
* [NAS-117631](https://ixsystems.atlassian.net/browse/NAS-117631) Retrieve and display metadata for a single snapshot
* [NAS-117599](https://ixsystems.atlassian.net/browse/NAS-117599) Installing netdata gets stuck at 75%
* [NAS-117508](https://ixsystems.atlassian.net/browse/NAS-117508) SCALE ACL inheritance not working when migrated from POSIX to NFSv4
* [NAS-117464](https://ixsystems.atlassian.net/browse/NAS-117464) Network widget does not show active interface
* [NAS-117409](https://ixsystems.atlassian.net/browse/NAS-117409) Unable to isolate GPU or see in apps in SCALE.
* [NAS-117379](https://ixsystems.atlassian.net/browse/NAS-117379) WS-Discovery Name not using specified hostname
* [NAS-117316](https://ixsystems.atlassian.net/browse/NAS-117316) \[SCALE\] Prevent user from deploying app with port conflicts
* [NAS-117230](https://ixsystems.atlassian.net/browse/NAS-117230) A pool scrub shows up twice in task manager
* [NAS-117104](https://ixsystems.atlassian.net/browse/NAS-117104) PiHole Docker Install
* [NAS-116678](https://ixsystems.atlassian.net/browse/NAS-116678) Refuse to download update if insufficient space avail
* [NAS-116539](https://ixsystems.atlassian.net/browse/NAS-116539) TrueNAS CLI does not provide a pager mechanism
* [NAS-116537](https://ixsystems.atlassian.net/browse/NAS-116537) Replace disk dialog does not include any identifying information about the disk
* [NAS-116495](https://ixsystems.atlassian.net/browse/NAS-116495) Run blocking calls in threads in sysdataset plugin
* [NAS-116318](https://ixsystems.atlassian.net/browse/NAS-116318) SQL unique constraint error when incorrectly editing an idmap
* [NAS-115737](https://ixsystems.atlassian.net/browse/NAS-115737) Space in Pool Name / Path to Zlog kills iSCSI
* [NAS-115648](https://ixsystems.atlassian.net/browse/NAS-115648) Low Encryption Performance on Atom Processors
* [NAS-115586](https://ixsystems.atlassian.net/browse/NAS-115586) Enable `pool.replace_disk` tests
* [NAS-115238](https://ixsystems.atlassian.net/browse/NAS-115238) Removed drive from pool does not degrade pool status \(SCALE\)
* [NAS-113889](https://ixsystems.atlassian.net/browse/NAS-113889) Remove Microsoft Account in User
* [NAS-113216](https://ixsystems.atlassian.net/browse/NAS-113216) New dataset does not inherit ACL Type from Pool's root dataset.
* [NAS-112650](https://ixsystems.atlassian.net/browse/NAS-112650) Onedrive for Business
* [NAS-112326](https://ixsystems.atlassian.net/browse/NAS-112326) Deprecate and remove "media" user and group
* [NAS-112088](https://ixsystems.atlassian.net/browse/NAS-112088) Don't do validation on empty textboxes if they are not set required: true.
* [NAS-111962](https://ixsystems.atlassian.net/browse/NAS-111962) "Not an interger" error in Transfers field in Sync Cloud task
* [NAS-110795](https://ixsystems.atlassian.net/browse/NAS-110795) Can't create unencrypted dataset on Encrypted pool
{{< /expand >}}

## 22.12-BETA.1 
{{< expand "22.12-BETA.1" "v">}}
**September 13, 2022**

TrueNAS SCALE 22.12-BETA.1 has been released and includes many new features and improved functionality. SCALE 22.12-Beta.1 features:

* Redesign of Storage web UI including new dashboards for Storage, Pools, Dashboards, Devices and other storage related areas
* Storj iX Cloud Sync backup solution now available.
* Apps improvements including adding Storj to the official catalog and adding a default Apps catalog exclusive for Enterprise customers (SCALE 22.12-Beta.1)
* STIG hardening through limiting web login and API access by restricting access for non-approved IP addresses and ranges. 
  Additional STIG hardening through disabling root login access and tying user to API ACLs (target SCALE 22.12-Beta.2).  
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

## 22.12-BETA.1 Change Log

### Epic

* [NAS-116606](https://ixsystems.atlassian.net/browse/NAS-116606) Storj iXsystems Backup Solution
* [NAS-114484](https://ixsystems.atlassian.net/browse/NAS-114484) Storage Page Redesign
* [NAS-111233](https://ixsystems.atlassian.net/browse/NAS-111233) WebUI Unit Tests
* [NAS-110834](https://ixsystems.atlassian.net/browse/NAS-110834) WebUI Code Cleanup

### New Feature

* [NAS-117909](https://ixsystems.atlassian.net/browse/NAS-117909) Branch out for 22.12 BETA1
* [NAS-117820](https://ixsystems.atlassian.net/browse/NAS-117820) Hide unused resources card
* [NAS-117813](https://ixsystems.atlassian.net/browse/NAS-117813) Improve indication for which apps use dataset
* [NAS-117734](https://ixsystems.atlassian.net/browse/NAS-117734) Handle nulls in disk temperatures
* [NAS-117676](https://ixsystems.atlassian.net/browse/NAS-117676) New cloud sync provider: "Storj iX"
* [NAS-117628](https://ixsystems.atlassian.net/browse/NAS-117628) Dataset quota is not shown
* [NAS-117615](https://ixsystems.atlassian.net/browse/NAS-117615) Hide Add Datasets / Add Zvol buttons on zvols
* [NAS-117573](https://ixsystems.atlassian.net/browse/NAS-117573) Pre-filter data protection items when clicking on Manage links
* [NAS-117572](https://ixsystems.atlassian.net/browse/NAS-117572) Handle empty states better on new storage pages
* [NAS-117566](https://ixsystems.atlassian.net/browse/NAS-117566) Add support for snapdev
* [NAS-117558](https://ixsystems.atlassian.net/browse/NAS-117558) Fix loading progress on storage pages
* [NAS-117520](https://ixsystems.atlassian.net/browse/NAS-117520) Reimplement disk health card
* [NAS-117510](https://ixsystems.atlassian.net/browse/NAS-117510) Extract dashboard pool loading into a separate store
* [NAS-117492](https://ixsystems.atlassian.net/browse/NAS-117492) Adds tests to DatasetDetailsCardComponent
* [NAS-117475](https://ixsystems.atlassian.net/browse/NAS-117475) Group disks in Unassigned disks dialog
* [NAS-117407](https://ixsystems.atlassian.net/browse/NAS-117407) Clean up `pool.dataset.query` calls in the new `Datasets` module
* [NAS-117405](https://ixsystems.atlassian.net/browse/NAS-117405) Fix IxDynamicFormItemComponent tests
* [NAS-117383](https://ixsystems.atlassian.net/browse/NAS-117383) investigate adding io type to VM devices
* [NAS-117368](https://ixsystems.atlassian.net/browse/NAS-117368) Add missing attributes to `pool.dataset.details` response
* [NAS-117365](https://ixsystems.atlassian.net/browse/NAS-117365) Extract device loading into a separate store
* [NAS-117348](https://ixsystems.atlassian.net/browse/NAS-117348) Make request to `pool.dataset.details` on the Datasets Management page
* [NAS-117323](https://ixsystems.atlassian.net/browse/NAS-117323) Implement the click action for "Add vDev" button on the Device Management page
* [NAS-117321](https://ixsystems.atlassian.net/browse/NAS-117321) Adopt new datasets API
* [NAS-117319](https://ixsystems.atlassian.net/browse/NAS-117319) Allow vdevs to be selected in Devices
* [NAS-117317](https://ixsystems.atlassian.net/browse/NAS-117317) Smaller fixes for Storage pages
* [NAS-117302](https://ixsystems.atlassian.net/browse/NAS-117302) Integrate overprovisioning on zpool creation on SCALE
* [NAS-117253](https://ixsystems.atlassian.net/browse/NAS-117253) Add loading indication to storage dashboard
* [NAS-117239](https://ixsystems.atlassian.net/browse/NAS-117239) 2 new endpoints for webUI network changes
* [NAS-117235](https://ixsystems.atlassian.net/browse/NAS-117235) Test new storage pages in different browsers
* [NAS-117216](https://ixsystems.atlassian.net/browse/NAS-117216) Fix card scaling in storage dashboard
* [NAS-117212](https://ixsystems.atlassian.net/browse/NAS-117212) Show auto trim value in ZFS Health Card
* [NAS-117203](https://ixsystems.atlassian.net/browse/NAS-117203) Separate the dataset capacity management form from the dataset edit form
* [NAS-117177](https://ixsystems.atlassian.net/browse/NAS-117177) Finish Space Management Card
* [NAS-117082](https://ixsystems.atlassian.net/browse/NAS-117082) Better loading indication for datasets and devices
* [NAS-117024](https://ixsystems.atlassian.net/browse/NAS-117024) Fix the column layout of details panel for the storage redesign pages
* [NAS-117023](https://ixsystems.atlassian.net/browse/NAS-117023) Investigate the "Mirror XYZ" row on the Devices table
* [NAS-117021](https://ixsystems.atlassian.net/browse/NAS-117021) What should the "Add VDEV" button do on the Device Management page
* [NAS-117019](https://ixsystems.atlassian.net/browse/NAS-117019) Which cards should be removed under certain conditions for the Dataset Management page
* [NAS-117017](https://ixsystems.atlassian.net/browse/NAS-117017) Investigate the conditions for Encryption card on Dataset Management page
* [NAS-117015](https://ixsystems.atlassian.net/browse/NAS-117015) Icon for 'Locked by parent'
* [NAS-116964](https://ixsystems.atlassian.net/browse/NAS-116964) Add URL support to Devices tree view
* [NAS-116916](https://ixsystems.atlassian.net/browse/NAS-116916) Add details to the IxTreeTable on the Devices page
* [NAS-116915](https://ixsystems.atlassian.net/browse/NAS-116915) Add the pool header row on Datasets IxTreeTable
* [NAS-116807](https://ixsystems.atlassian.net/browse/NAS-116807) Synchronize storage design changes
* [NAS-116806](https://ixsystems.atlassian.net/browse/NAS-116806) Design for Dataset Capacity Management
* [NAS-116788](https://ixsystems.atlassian.net/browse/NAS-116788) Create the Dataset Capacity Management Card chart
* [NAS-116715](https://ixsystems.atlassian.net/browse/NAS-116715) Review and fix card sizes for storage redesign pages
* [NAS-116635](https://ixsystems.atlassian.net/browse/NAS-116635) Storj App in Official Catalog
* [NAS-116413](https://ixsystems.atlassian.net/browse/NAS-116413) Device Management Page
* [NAS-116411](https://ixsystems.atlassian.net/browse/NAS-116411) Information for different roles attached to a dataset or child datasets
* [NAS-116410](https://ixsystems.atlassian.net/browse/NAS-116410) The Roles details Card/Widget
* [NAS-116406](https://ixsystems.atlassian.net/browse/NAS-116406) Data Protection Card/Widget
* [NAS-116403](https://ixsystems.atlassian.net/browse/NAS-116403) Dataset Management Page
* [NAS-116397](https://ixsystems.atlassian.net/browse/NAS-116397) Disk Health card
* [NAS-116393](https://ixsystems.atlassian.net/browse/NAS-116393) Pool Topology details widget/card
* [NAS-116391](https://ixsystems.atlassian.net/browse/NAS-116391) Single Pool details component on Pools dashboard
* [NAS-116389](https://ixsystems.atlassian.net/browse/NAS-116389) Create Pools Dashboard
* [NAS-114198](https://ixsystems.atlassian.net/browse/NAS-114198) Advanced boot options for SCALE \(udev rules and kernel parameters\)
* [NAS-111020](https://ixsystems.atlassian.net/browse/NAS-111020) Assigning Host USB device to a Guest VM in SCALE
* [NAS-102765](https://ixsystems.atlassian.net/browse/NAS-102765) Ask for EC2 Instance ID when setting initial root password

### Improvement

* [NAS-117841](https://ixsystems.atlassian.net/browse/NAS-117841) Ban `res` as variable name
* [NAS-117803](https://ixsystems.atlassian.net/browse/NAS-117803) Blank dashboard of the first login
* [NAS-117802](https://ixsystems.atlassian.net/browse/NAS-117802) Use truenas tls endpoint for usage stats
* [NAS-117775](https://ixsystems.atlassian.net/browse/NAS-117775) Update kubernetes related dependencies from upstream
* [NAS-117769](https://ixsystems.atlassian.net/browse/NAS-117769) Add support for multi selection in ix-explorer
* [NAS-117719](https://ixsystems.atlassian.net/browse/NAS-117719) Do not run CI checks when only RE tests were changed
* [NAS-117707](https://ixsystems.atlassian.net/browse/NAS-117707) Merge zfs-2.1.6-staging
* [NAS-117704](https://ixsystems.atlassian.net/browse/NAS-117704) Enforce linting rules in CI
* [NAS-117699](https://ixsystems.atlassian.net/browse/NAS-117699) add tests for copy\_file\_range \(server-side copy\) for NFSv4.2
* [NAS-117696](https://ixsystems.atlassian.net/browse/NAS-117696) Update bluefin nightlies mirrors
* [NAS-117646](https://ixsystems.atlassian.net/browse/NAS-117646) Reduce amount on any's
* [NAS-117634](https://ixsystems.atlassian.net/browse/NAS-117634) Refactor bootenv-status.component
* [NAS-117614](https://ixsystems.atlassian.net/browse/NAS-117614) middleware files in /var/run should be in dedicated run directory
* [NAS-117606](https://ixsystems.atlassian.net/browse/NAS-117606) Refactor Alert Services to ix-forms
* [NAS-117595](https://ixsystems.atlassian.net/browse/NAS-117595) Add webdav shares to the `pool.dataset.details`
* [NAS-117576](https://ixsystems.atlassian.net/browse/NAS-117576) Optimize calls on Storage pages
* [NAS-117574](https://ixsystems.atlassian.net/browse/NAS-117574) Update Roles column on Datasets page
* [NAS-117540](https://ixsystems.atlassian.net/browse/NAS-117540) Select the correct pool on datasets page when clicking on "Manage Datasets" on Pools Dashboard
* [NAS-117539](https://ixsystems.atlassian.net/browse/NAS-117539) Make the first row of table selected state when Datasets page first loads
* [NAS-117528](https://ixsystems.atlassian.net/browse/NAS-117528) ctdb.public.ips.interface\_choices require interfaces with an IP
* [NAS-117445](https://ixsystems.atlassian.net/browse/NAS-117445) Charts MinIO pod does not follow standard min.io folder structure
* [NAS-117401](https://ixsystems.atlassian.net/browse/NAS-117401) In UI allow users to set trust\_guest\_rx\_filters for NIC device in VMs
* [NAS-117398](https://ixsystems.atlassian.net/browse/NAS-117398) Add Storj as Cloud Sync service
* [NAS-117385](https://ixsystems.atlassian.net/browse/NAS-117385) options.only\_cached: Field was not expected when calling disk.temperatures
* [NAS-117372](https://ixsystems.atlassian.net/browse/NAS-117372) Add client side validation for app names
* [NAS-117371](https://ixsystems.atlassian.net/browse/NAS-117371) Make `type` field in pool topology and boot.get\_state similar
* [NAS-117366](https://ixsystems.atlassian.net/browse/NAS-117366) Disable `patch` status check from codecov
* [NAS-117363](https://ixsystems.atlassian.net/browse/NAS-117363) Split Vdev type into separate types
* [NAS-117354](https://ixsystems.atlassian.net/browse/NAS-117354) Change AD cache setting label
* [NAS-117333](https://ixsystems.atlassian.net/browse/NAS-117333) UX: Wrong lock icons on datasets table
* [NAS-117308](https://ixsystems.atlassian.net/browse/NAS-117308) Minor improvements to pool.dataset.details endpoint
* [NAS-117301](https://ixsystems.atlassian.net/browse/NAS-117301) UX Remove redundant close icon on VM>Devices page
* [NAS-117299](https://ixsystems.atlassian.net/browse/NAS-117299) less expensive chart.release.query endpoint
* [NAS-117279](https://ixsystems.atlassian.net/browse/NAS-117279) Please add provisioning info to pool.dataset.query
* [NAS-117269](https://ixsystems.atlassian.net/browse/NAS-117269) failover.disabled\_reasons returns a new NO\_FENCED that webUI needs to account for
* [NAS-117255](https://ixsystems.atlassian.net/browse/NAS-117255) Add units tests for Dataset Capacity Management Card
* [NAS-117233](https://ixsystems.atlassian.net/browse/NAS-117233) New Google Cloud Storage task field: bucket\_policy\_only
* [NAS-117221](https://ixsystems.atlassian.net/browse/NAS-117221) Improvements for custom icons
* [NAS-117215](https://ixsystems.atlassian.net/browse/NAS-117215) IPv6 NDP doesn't work by default on VMs
* [NAS-117198](https://ixsystems.atlassian.net/browse/NAS-117198) Enable linter rule no-trailing-spaces
* [NAS-117172](https://ixsystems.atlassian.net/browse/NAS-117172) webui should use filesystem.acltemplate APIs for presenting templates to users
* [NAS-117119](https://ixsystems.atlassian.net/browse/NAS-117119) Change loading animation in permissions card
* [NAS-117108](https://ixsystems.atlassian.net/browse/NAS-117108) Find a different way of hiding dynamic controls other than disabled
* [NAS-117041](https://ixsystems.atlassian.net/browse/NAS-117041) CLONE - Allow custom Management URLs for Apps
* [NAS-116905](https://ixsystems.atlassian.net/browse/NAS-116905) ZFS scrub performance optimizations
* [NAS-116902](https://ixsystems.atlassian.net/browse/NAS-116902) Expose ZFS dataset case sensitivity setting via sb\_opts
* [NAS-116838](https://ixsystems.atlassian.net/browse/NAS-116838) Add a query-option for pool.dataset.query to join dataset alerts with results
* [NAS-116755](https://ixsystems.atlassian.net/browse/NAS-116755) Reword label for ACL types in SCALE permission editor
* [NAS-116736](https://ixsystems.atlassian.net/browse/NAS-116736) Expand information available in simple dataset handles is libzfs snapshot iterator
* [NAS-116685](https://ixsystems.atlassian.net/browse/NAS-116685) Add file size to manifest.json
* [NAS-116675](https://ixsystems.atlassian.net/browse/NAS-116675) Add info about RSS support to interfaces API
* [NAS-116570](https://ixsystems.atlassian.net/browse/NAS-116570) Refactor CloudCredentialsFormComponent
* [NAS-116482](https://ixsystems.atlassian.net/browse/NAS-116482) Investigate whether to expose zvol snapdev
* [NAS-116375](https://ixsystems.atlassian.net/browse/NAS-116375) Locate source of periodic writes to boot-pool and minimize
* [NAS-116343](https://ixsystems.atlassian.net/browse/NAS-116343) Refactor bootenv-list.component to ix-tables
* [NAS-116138](https://ixsystems.atlassian.net/browse/NAS-116138) Implement validation for Interface name
* [NAS-115959](https://ixsystems.atlassian.net/browse/NAS-115959) User Feedback Service API
* [NAS-115620](https://ixsystems.atlassian.net/browse/NAS-115620) Use newer nft tables syntax for failover iptables plugin
* [NAS-113922](https://ixsystems.atlassian.net/browse/NAS-113922) gluster volume deletion integration tests
* [NAS-113681](https://ixsystems.atlassian.net/browse/NAS-113681) Add support for prefer-as-const for class members
* [NAS-113183](https://ixsystems.atlassian.net/browse/NAS-113183) Add loading state for ix-select/ix-combobox
* [NAS-112616](https://ixsystems.atlassian.net/browse/NAS-112616) Enable prefer-early-return
* [NAS-112047](https://ixsystems.atlassian.net/browse/NAS-112047) Investigate quiescing of VMs and Pods \(PVCs?\) during snapshot
* [NAS-111488](https://ixsystems.atlassian.net/browse/NAS-111488) Implement disk\_resize equivalent in SCALE
* [NAS-111356](https://ixsystems.atlassian.net/browse/NAS-111356) network settings general improvements
* [NAS-108490](https://ixsystems.atlassian.net/browse/NAS-108490) Add nvdimm related management tools

### Bug

* [NAS-118080](https://ixsystems.atlassian.net/browse/NAS-118080) fix scale nightlies build \(update collectd to 5.12.0-11\)
* [NAS-118048](https://ixsystems.atlassian.net/browse/NAS-118048) remove trailing forward slash in corssl package
* [NAS-117992](https://ixsystems.atlassian.net/browse/NAS-117992) VM not created in SCALE 22.12-BETA.1 testing
* [NAS-117987](https://ixsystems.atlassian.net/browse/NAS-117987) certificate verify failed: self signed certificate in certificate chain
* [NAS-117931](https://ixsystems.atlassian.net/browse/NAS-117931) Using HTTP Basic Auth will bypass 2FA
* [NAS-117889](https://ixsystems.atlassian.net/browse/NAS-117889) fix KeyError in pool.dataset.details
* [NAS-117886](https://ixsystems.atlassian.net/browse/NAS-117886) Fix `Manage Datasets` button link on the `Pools Dashboard`
* [NAS-117885](https://ixsystems.atlassian.net/browse/NAS-117885) Shift winbindd\_cache.tdb path in middleware
* [NAS-117877](https://ixsystems.atlassian.net/browse/NAS-117877) Improve KDC detection during domain join
* [NAS-117868](https://ixsystems.atlassian.net/browse/NAS-117868) Do not run post stop actions if VM is suspended
* [NAS-117865](https://ixsystems.atlassian.net/browse/NAS-117865) Fix timeout during idmap updates
* [NAS-117864](https://ixsystems.atlassian.net/browse/NAS-117864) Fix edge case for k8s node ca
* [NAS-117860](https://ixsystems.atlassian.net/browse/NAS-117860) Ensure that we always have a valid krb5.conf during AD start
* [NAS-117858](https://ixsystems.atlassian.net/browse/NAS-117858) relax zfs\_space VFS object validation
* [NAS-117852](https://ixsystems.atlassian.net/browse/NAS-117852) Fix path behaviour when disk type vm device is created
* [NAS-117842](https://ixsystems.atlassian.net/browse/NAS-117842) fix creating/updating bonds
* [NAS-117840](https://ixsystems.atlassian.net/browse/NAS-117840) Remove customized nss-pam-ldap from build
* [NAS-117829](https://ixsystems.atlassian.net/browse/NAS-117829) fix failover.disabled.reasons....again
* [NAS-117825](https://ixsystems.atlassian.net/browse/NAS-117825) Remove python nslcd client
* [NAS-117823](https://ixsystems.atlassian.net/browse/NAS-117823) Restore loading indication on Storage pages
* [NAS-117806](https://ixsystems.atlassian.net/browse/NAS-117806) update network configuration domain to match AD one
* [NAS-117801](https://ixsystems.atlassian.net/browse/NAS-117801) Add some explicit tests for firstboot
* [NAS-117795](https://ixsystems.atlassian.net/browse/NAS-117795) Move replace-disk-dialog to storage2
* [NAS-117789](https://ixsystems.atlassian.net/browse/NAS-117789) Errors in ix-page-title-header on one pages disable header on all pages
* [NAS-117779](https://ixsystems.atlassian.net/browse/NAS-117779) Enforce passwd/group specified reference files
* [NAS-117777](https://ixsystems.atlassian.net/browse/NAS-117777) Unable to join active directory if SMB is not started first
* [NAS-117776](https://ixsystems.atlassian.net/browse/NAS-117776) Clean chroot mounts when making update image
* [NAS-117768](https://ixsystems.atlassian.net/browse/NAS-117768) undefined in filter box on some pages
* [NAS-117762](https://ixsystems.atlassian.net/browse/NAS-117762) Build with BlueFin with Samba 4.17
* [NAS-117761](https://ixsystems.atlassian.net/browse/NAS-117761) fix typo of nft fw rules for SCALE HA
* [NAS-117755](https://ixsystems.atlassian.net/browse/NAS-117755) \* [SCALE\] Downloading Logs from VMs is not working
* [NAS-117749](https://ixsystems.atlassian.net/browse/NAS-117749) Unable to select "category" when submitting a bug report from TrueNAS Scale 22.02.3
* [NAS-117745](https://ixsystems.atlassian.net/browse/NAS-117745) Add AMD NTB driver to the build as a module.
* [NAS-117735](https://ixsystems.atlassian.net/browse/NAS-117735) Only break out of fuse mount loop early on success
* [NAS-117728](https://ixsystems.atlassian.net/browse/NAS-117728) Shift timeouts to a single dict for cluster tests
* [NAS-117727](https://ixsystems.atlassian.net/browse/NAS-117727) NaN in disk.temperature\_agg
* [NAS-117725](https://ixsystems.atlassian.net/browse/NAS-117725) Deleting cluster does not wipe the ctdb\_shared\_vol brick / dataset causing many issues on new create
* [NAS-117723](https://ixsystems.atlassian.net/browse/NAS-117723) FIPS self test failure broke installer
* [NAS-117718](https://ixsystems.atlassian.net/browse/NAS-117718) No pools message flashing when switching to Storage
* [NAS-117716](https://ixsystems.atlassian.net/browse/NAS-117716) Storj tests
* [NAS-117714](https://ixsystems.atlassian.net/browse/NAS-117714) FTP "Certificate" dropdown should be under "Enable TLS" checkbox
* [NAS-117713](https://ixsystems.atlassian.net/browse/NAS-117713) Change how API keys are created
* [NAS-117700](https://ixsystems.atlassian.net/browse/NAS-117700) Dashboard Config settings revert after save
* [NAS-117695](https://ixsystems.atlassian.net/browse/NAS-117695) use asterisk to explicitly indicate full API access
* [NAS-117692](https://ixsystems.atlassian.net/browse/NAS-117692) Explicitly reference min\_memory
* [NAS-117688](https://ixsystems.atlassian.net/browse/NAS-117688) Cannot Edit VMs
* [NAS-117684](https://ixsystems.atlassian.net/browse/NAS-117684) Separately test basic NFS ops for version 3 and version 4
* [NAS-117681](https://ixsystems.atlassian.net/browse/NAS-117681) Remove overlay\_dirs
* [NAS-117680](https://ixsystems.atlassian.net/browse/NAS-117680) Bug with Dataset Icon in Details Panel header
* [NAS-117675](https://ixsystems.atlassian.net/browse/NAS-117675) Add basic tests for ctdb managed services
* [NAS-117673](https://ixsystems.atlassian.net/browse/NAS-117673) enforce minimum zfs passphrase length
* [NAS-117669](https://ixsystems.atlassian.net/browse/NAS-117669) The "snapdev" field is returned in lowercase
* [NAS-117661](https://ixsystems.atlassian.net/browse/NAS-117661) Minor bug fix for vm plugin
* [NAS-117658](https://ixsystems.atlassian.net/browse/NAS-117658) TrueNAS-SCALE-22.02.4-MASTER-20220805-041141 can't start VMs after importing old config or upgrading from 22.02.3 or earlier
* [NAS-117655](https://ixsystems.atlassian.net/browse/NAS-117655) Active Directory gets disabled on reboot
* [NAS-117637](https://ixsystems.atlassian.net/browse/NAS-117637) If middleware\_OVERRIDE is specified, let's also override truenas and truenas\_files
* [NAS-117635](https://ixsystems.atlassian.net/browse/NAS-117635) remove unused startup\_seq file
* [NAS-117630](https://ixsystems.atlassian.net/browse/NAS-117630) Update `test__iscsi_extent__disk_choices`
* [NAS-117627](https://ixsystems.atlassian.net/browse/NAS-117627) `zfs.dataset.query_for_quota_alert` returns only top-level datasets
* [NAS-117625](https://ixsystems.atlassian.net/browse/NAS-117625) Add "run as user" option in ix chart
* [NAS-117624](https://ixsystems.atlassian.net/browse/NAS-117624) No existing ZVOL images detected when creating new VM and trying to import existing zvol. Bluefin 05082022 and 100822
* [NAS-117622](https://ixsystems.atlassian.net/browse/NAS-117622) Add SMB client failover test for cluster
* [NAS-117620](https://ixsystems.atlassian.net/browse/NAS-117620) HA issue on M30 after loading SCALE Bluefin, ntb device problem
* [NAS-117617](https://ixsystems.atlassian.net/browse/NAS-117617) Allow setting snapdev field for filesystems
* [NAS-117616](https://ixsystems.atlassian.net/browse/NAS-117616) Do not try to revoke ACME certificate which has expired
* [NAS-117604](https://ixsystems.atlassian.net/browse/NAS-117604) Node is unable to rejoin cluster after power off/on of 1/4 nodes
* [NAS-117602](https://ixsystems.atlassian.net/browse/NAS-117602) Privilege Management API
* [NAS-117601](https://ixsystems.atlassian.net/browse/NAS-117601) system.general.get\_ui\_urls blocks main event loop
* [NAS-117599](https://ixsystems.atlassian.net/browse/NAS-117599) Installing netdata gets stuck at 75%
* [NAS-117596](https://ixsystems.atlassian.net/browse/NAS-117596) Redirect to Disks Reports with pre-selected disks
* [NAS-117594](https://ixsystems.atlassian.net/browse/NAS-117594) Add Vdev Form raises `Maximum call stack size exceeded`
* [NAS-117592](https://ixsystems.atlassian.net/browse/NAS-117592) 24h clock in tasks
* [NAS-117587](https://ixsystems.atlassian.net/browse/NAS-117587) Fix regression in getgrnam for gid 0
* [NAS-117584](https://ixsystems.atlassian.net/browse/NAS-117584) fix Makefile MWPATH
* [NAS-117575](https://ixsystems.atlassian.net/browse/NAS-117575) Add more properties to dataset details
* [NAS-117562](https://ixsystems.atlassian.net/browse/NAS-117562) Add more dataset details
* [NAS-117560](https://ixsystems.atlassian.net/browse/NAS-117560) Unable to Delete Expired certificates
* [NAS-117557](https://ixsystems.atlassian.net/browse/NAS-117557) Improvements to ctdb.public.ips APIs
* [NAS-117556](https://ixsystems.atlassian.net/browse/NAS-117556) fix IndexError in failover.vip.get\_states
* [NAS-117553](https://ixsystems.atlassian.net/browse/NAS-117553) Require at least one public IP address before joining cluster to AD
* [NAS-117551](https://ixsystems.atlassian.net/browse/NAS-117551) Fix `ftp_server_with_user_account` asset
* [NAS-117544](https://ixsystems.atlassian.net/browse/NAS-117544) NOT FOUND when querying for a list of support categories
* [NAS-117524](https://ixsystems.atlassian.net/browse/NAS-117524) huge optimization to query\_for\_quota\_alert
* [NAS-117519](https://ixsystems.atlassian.net/browse/NAS-117519) Various improvements to builder
* [NAS-117513](https://ixsystems.atlassian.net/browse/NAS-117513) Import ZFS Pools failed
* [NAS-117511](https://ixsystems.atlassian.net/browse/NAS-117511) Remove zpool\_get\_physpath
* [NAS-117509](https://ixsystems.atlassian.net/browse/NAS-117509) Sync colors on cards
* [NAS-117506](https://ixsystems.atlassian.net/browse/NAS-117506) MatchNotFound on pool.query after update
* [NAS-117501](https://ixsystems.atlassian.net/browse/NAS-117501) disk\_resize: Don't trigger udev events for NVMe
* [NAS-117500](https://ixsystems.atlassian.net/browse/NAS-117500) call install-dev-tools before setup\_test.py
* [NAS-117499](https://ixsystems.atlassian.net/browse/NAS-117499) disk.query sometimes doesn't return pool disk if it was just attached
* [NAS-117498](https://ixsystems.atlassian.net/browse/NAS-117498) No Applications after cron job reboot
* [NAS-117495](https://ixsystems.atlassian.net/browse/NAS-117495) fix and improve middlewared Makefile
* [NAS-117479](https://ixsystems.atlassian.net/browse/NAS-117479) Skipping RAW device to be created
* [NAS-117478](https://ixsystems.atlassian.net/browse/NAS-117478) Revert change to SMB etc generation
* [NAS-117476](https://ixsystems.atlassian.net/browse/NAS-117476) bucket\_policy\_only: Field was not expected when expanding folders in Cloudsync task
* [NAS-117472](https://ixsystems.atlassian.net/browse/NAS-117472) minor grammar fix
* [NAS-117471](https://ixsystems.atlassian.net/browse/NAS-117471) Improve AD health checks
* [NAS-117467](https://ixsystems.atlassian.net/browse/NAS-117467) Reuse tdb / ctdb handles
* [NAS-117465](https://ixsystems.atlassian.net/browse/NAS-117465) Fix broken icon links
* [NAS-117459](https://ixsystems.atlassian.net/browse/NAS-117459) Post NAS-113963 - pool can't be locked while system-dataset is present
* [NAS-117451](https://ixsystems.atlassian.net/browse/NAS-117451) Unable to download debug
* [NAS-117449](https://ixsystems.atlassian.net/browse/NAS-117449) credentials.verify doesn't timeout on incorrect SFTP credentials
* [NAS-117443](https://ixsystems.atlassian.net/browse/NAS-117443) Fix clustered SMB service management events
* [NAS-117442](https://ixsystems.atlassian.net/browse/NAS-117442) fix test\_cluster\_path\_snapshot test
* [NAS-117441](https://ixsystems.atlassian.net/browse/NAS-117441) Added better support for python virtual environment
* [NAS-117439](https://ixsystems.atlassian.net/browse/NAS-117439) Misaligned text on Topology Card
* [NAS-117437](https://ixsystems.atlassian.net/browse/NAS-117437) Remove microsoft account option
* [NAS-117436](https://ixsystems.atlassian.net/browse/NAS-117436) stop running file IO in main event loop
* [NAS-117435](https://ixsystems.atlassian.net/browse/NAS-117435) move thick\_provision key to dataset level
* [NAS-117434](https://ixsystems.atlassian.net/browse/NAS-117434) VM Clone does not account for explicit web port
* [NAS-117430](https://ixsystems.atlassian.net/browse/NAS-117430) Simplify/Improve VM devices validation
* [NAS-117428](https://ixsystems.atlassian.net/browse/NAS-117428) Improper regex used on name validation for apps
* [NAS-117426](https://ixsystems.atlassian.net/browse/NAS-117426) Add common method for defining cpu/memory/gpu limitations
* [NAS-117424](https://ixsystems.atlassian.net/browse/NAS-117424) freenas-debug: Restore ZFS kstat capture
* [NAS-117423](https://ixsystems.atlassian.net/browse/NAS-117423) Errors waterfall on new Storage page
* [NAS-117420](https://ixsystems.atlassian.net/browse/NAS-117420) Initialize cluster so that all nodes have all public IPs
* [NAS-117419](https://ixsystems.atlassian.net/browse/NAS-117419) Pull-Replication failed
* [NAS-117418](https://ixsystems.atlassian.net/browse/NAS-117418) Fix iscsi tests
* [NAS-117416](https://ixsystems.atlassian.net/browse/NAS-117416) Plex wont deply \(kubernetes.io/not-ready\)
* [NAS-117409](https://ixsystems.atlassian.net/browse/NAS-117409) Unable to isolate GPU or see in apps in SCALE.
* [NAS-117404](https://ixsystems.atlassian.net/browse/NAS-117404) Remove unused library common charts
* [NAS-117400](https://ixsystems.atlassian.net/browse/NAS-117400) Fix activedirectory join in cluster
* [NAS-117395](https://ixsystems.atlassian.net/browse/NAS-117395) iscsi\_/extents.py blocks main event loop in many places
* [NAS-117391](https://ixsystems.atlassian.net/browse/NAS-117391) Remove redundant dataset.query
* [NAS-117382](https://ixsystems.atlassian.net/browse/NAS-117382) Handle case of non-existent path during smbconf generation
* [NAS-117378](https://ixsystems.atlassian.net/browse/NAS-117378) Bump up timeout values for permissions tests on cluster
* [NAS-117377](https://ixsystems.atlassian.net/browse/NAS-117377) Fix clustered filesystem test
* [NAS-117376](https://ixsystems.atlassian.net/browse/NAS-117376) Remove port from portal configuration in issci
* [NAS-117367](https://ixsystems.atlassian.net/browse/NAS-117367) Ensure that required paths are auto-created for clustered pwenc
* [NAS-117362](https://ixsystems.atlassian.net/browse/NAS-117362) improve ntp alert verbiage
* [NAS-117360](https://ixsystems.atlassian.net/browse/NAS-117360) disk\_resize: Don't wait 15 seconds for SAS flash
* [NAS-117357](https://ixsystems.atlassian.net/browse/NAS-117357) fix typo in disabled\_reasons
* [NAS-117353](https://ixsystems.atlassian.net/browse/NAS-117353) Fix Failover\_disks alert typo
* [NAS-117330](https://ixsystems.atlassian.net/browse/NAS-117330) vfs\_fruit can write invalid timestamp as BTIME to user.DOSATTRIB xattr
* [NAS-117328](https://ixsystems.atlassian.net/browse/NAS-117328) Fixes an empty line in SMB share presets
* [NAS-117327](https://ixsystems.atlassian.net/browse/NAS-117327) NAS-117318: Fixes and empty line in SMB share presets
* [NAS-117322](https://ixsystems.atlassian.net/browse/NAS-117322) Minor improvements to pool.dataset.details
* [NAS-117320](https://ixsystems.atlassian.net/browse/NAS-117320) CLONE - Do not allow immutable fields to be modified in UI - Bluefin
* [NAS-117318](https://ixsystems.atlassian.net/browse/NAS-117318) Empty line in SMB share presets
* [NAS-117313](https://ixsystems.atlassian.net/browse/NAS-117313) Active Directory randomly automatically getting disabled during server reboot
* [NAS-117307](https://ixsystems.atlassian.net/browse/NAS-117307) Invesitgate/fix ix-volumes being migrated on apps migration
* [NAS-117306](https://ixsystems.atlassian.net/browse/NAS-117306) Fix ctdb jobs on pnn 0
* [NAS-117305](https://ixsystems.atlassian.net/browse/NAS-117305) fill in app information in pool.dataset.details
* [NAS-117303](https://ixsystems.atlassian.net/browse/NAS-117303) use ejson in kubernetes backup plugin
* [NAS-117293](https://ixsystems.atlassian.net/browse/NAS-117293) Deprecate legacy behavior to allow empty homes path
* [NAS-117289](https://ixsystems.atlassian.net/browse/NAS-117289) Attempting to delete VM causes system crash
* [NAS-117285](https://ixsystems.atlassian.net/browse/NAS-117285) \[required\] validator from FormsModule conflicts with \* [required\] input ix-\* components
* [NAS-117284](https://ixsystems.atlassian.net/browse/NAS-117284) TrueNAS Scale nightly is trying to update to an older version
* [NAS-117278](https://ixsystems.atlassian.net/browse/NAS-117278) Missing Provisioning Type Field in Space Management Card
* [NAS-117277](https://ixsystems.atlassian.net/browse/NAS-117277) Space Management Card console error
* [NAS-117273](https://ixsystems.atlassian.net/browse/NAS-117273) sedutil-cli fails to identify SAS SED drives on Linux
* [NAS-117264](https://ixsystems.atlassian.net/browse/NAS-117264) Updater size estimates seem quite off
* [NAS-117231](https://ixsystems.atlassian.net/browse/NAS-117231) Add CTDB event integration
* [NAS-117201](https://ixsystems.atlassian.net/browse/NAS-117201) Fix qbittorrent upgrade strategy
* [NAS-117186](https://ixsystems.atlassian.net/browse/NAS-117186) Change ProFTPD TLS Protocol
* [NAS-117175](https://ixsystems.atlassian.net/browse/NAS-117175) unable to flash chelsio cards on SCALE
* [NAS-117166](https://ixsystems.atlassian.net/browse/NAS-117166) Syncthing App will not deploy on TrueNAS SCALE Bluefin nightly
* [NAS-117159](https://ixsystems.atlassian.net/browse/NAS-117159) save/rollback default gateway on interface changes
* [NAS-117158](https://ixsystems.atlassian.net/browse/NAS-117158) Network dashboard widget fails due to permissions after Scale update
* [NAS-117153](https://ixsystems.atlassian.net/browse/NAS-117153) Cloud Sync `create_empty_src_dirs` checkbox
* [NAS-117144](https://ixsystems.atlassian.net/browse/NAS-117144) Swagger documentation line on API Keys screen incorrect if default port has been changed
* [NAS-117125](https://ixsystems.atlassian.net/browse/NAS-117125) middleware worker process core dumped
* [NAS-117118](https://ixsystems.atlassian.net/browse/NAS-117118) Invalid update image file when trying to update nightlies
* [NAS-117109](https://ixsystems.atlassian.net/browse/NAS-117109) Apps: Plex: Plex can't start sometimes "No such file or directory"
* [NAS-117104](https://ixsystems.atlassian.net/browse/NAS-117104) PiHole Docker Install
* [NAS-117101](https://ixsystems.atlassian.net/browse/NAS-117101) Charts MinIO pod cannot connect to itself when hostname is used
* [NAS-117076](https://ixsystems.atlassian.net/browse/NAS-117076) Resource Limits are not applied to pod
* [NAS-117045](https://ixsystems.atlassian.net/browse/NAS-117045) Improve error messaging for 'min\_memory' when creating a VM
* [NAS-117039](https://ixsystems.atlassian.net/browse/NAS-117039) Failed to check for alert ZpoolCapacity
* [NAS-117037](https://ixsystems.atlassian.net/browse/NAS-117037) Python message
* [NAS-116998](https://ixsystems.atlassian.net/browse/NAS-116998) SCALE: Cannot bind second network adapter to new VM
* [NAS-116987](https://ixsystems.atlassian.net/browse/NAS-116987) TrueNAS SCALE webui become very slow
* [NAS-116933](https://ixsystems.atlassian.net/browse/NAS-116933) UI won't allow UPS on ttyS0
* [NAS-116927](https://ixsystems.atlassian.net/browse/NAS-116927) ZFS replication causing unscheduled reboot on destination
* [NAS-116894](https://ixsystems.atlassian.net/browse/NAS-116894) CLONE - \[SCALE\] Application Events is not sorted
* [NAS-116859](https://ixsystems.atlassian.net/browse/NAS-116859) `pool.dataset.summary`
* [NAS-116808](https://ixsystems.atlassian.net/browse/NAS-116808) Improve IPMI password validation
* [NAS-116777](https://ixsystems.atlassian.net/browse/NAS-116777) \[Scale 22.12-master\] Apps won't start
* [NAS-116702](https://ixsystems.atlassian.net/browse/NAS-116702) Trivial \(I think\) Task Manager timing out
* [NAS-116688](https://ixsystems.atlassian.net/browse/NAS-116688) A Start Job is Running for Import ZFS Pools \(xxmin xxs / 15min 11s\)
* [NAS-116674](https://ixsystems.atlassian.net/browse/NAS-116674) \[SCALE\] BlockingIOError: \[Errno 11\] Resource temporarily unavailable
* [NAS-116664](https://ixsystems.atlassian.net/browse/NAS-116664) Stopped Apps/Docker spamming msg on syslog No Destination Avaliable
* [NAS-116662](https://ixsystems.atlassian.net/browse/NAS-116662) Non boot-drive swap space "unclean" and re-constructed every boot
* [NAS-116603](https://ixsystems.atlassian.net/browse/NAS-116603) Exclusive default Apps Catalog for Enterprise
* [NAS-116574](https://ixsystems.atlassian.net/browse/NAS-116574) Apps Node IP Not Matching What is Configured
* [NAS-116513](https://ixsystems.atlassian.net/browse/NAS-116513) pmem on SCALE doesn't report serial information
* [NAS-116483](https://ixsystems.atlassian.net/browse/NAS-116483) Can't add zvol with space in name to VM as disk
* [NAS-116380](https://ixsystems.atlassian.net/browse/NAS-116380) Trivial: On Network, Scale is displaying 2 default Gateways
* [NAS-116295](https://ixsystems.atlassian.net/browse/NAS-116295) Free RAM reported mismatch
* [NAS-116098](https://ixsystems.atlassian.net/browse/NAS-116098) nmbd breaks system dataset migration
* [NAS-116071](https://ixsystems.atlassian.net/browse/NAS-116071) On Angelfish Nightly after pressing Failover at the login it display "Failover is in an error state."
* [NAS-116023](https://ixsystems.atlassian.net/browse/NAS-116023) Boot Issues with TrueNAS-SCALE-22.02.0.1
* [NAS-115994](https://ixsystems.atlassian.net/browse/NAS-115994) Idmap issue with "OWNER RIGHTS" SID
* [NAS-115992](https://ixsystems.atlassian.net/browse/NAS-115992) NFSv4  not configured properly when active directory domain name != server subdomain
* [NAS-115869](https://ixsystems.atlassian.net/browse/NAS-115869) NTP service broken when DHCP provides NTP servers.
* [NAS-115858](https://ixsystems.atlassian.net/browse/NAS-115858) Fix netdata hitting apparmor profile
* [NAS-115235](https://ixsystems.atlassian.net/browse/NAS-115235) Restrict job log dir to root
* [NAS-115058](https://ixsystems.atlassian.net/browse/NAS-115058) Exception disable\_offload\_capabilities when configuring network interface from CLI
* [NAS-114575](https://ixsystems.atlassian.net/browse/NAS-114575) \[SCALE\] When using OneDrive as a Backup the Client sends tens of thousands of DNS Requests
* [NAS-114305](https://ixsystems.atlassian.net/browse/NAS-114305) Network Interfaces - Test/Save Changes bug \(back-end\)
* [NAS-114064](https://ixsystems.atlassian.net/browse/NAS-114064) IPV6 Neighbor Solicitation if started by TrueNas SCALE fails => NO IPV6
* [NAS-113833](https://ixsystems.atlassian.net/browse/NAS-113833) /update/check\_available API call crashes when update-master.ixsystems.com is unavailable
* [NAS-113830](https://ixsystems.atlassian.net/browse/NAS-113830) SCALE: Time Machine does not work for large source on macOS Monterey \(12.0.1 and 12.1\)
* [NAS-113534](https://ixsystems.atlassian.net/browse/NAS-113534) sqlilte error creating link aggregation
* [NAS-113529](https://ixsystems.atlassian.net/browse/NAS-113529) VERIFY\(PageUptodate\(pp\)\) failed
* [NAS-112995](https://ixsystems.atlassian.net/browse/NAS-112995) Alert reads “…replication from scratch…” but entry is called differently in GUI
* [NAS-112877](https://ixsystems.atlassian.net/browse/NAS-112877) Docker networking configuration prevents certain images from working correctly
* [NAS-112277](https://ixsystems.atlassian.net/browse/NAS-112277) /usr/local/bin/zilstat not functional on SCALE
* [NAS-110490](https://ixsystems.atlassian.net/browse/NAS-110490) Scale - NVMe drives in USB case show same Serial Number
* [NAS-103225](https://ixsystems.atlassian.net/browse/NAS-103225) clear Enclosure Status when not OK
{{< /expand >}}

## Known Issues

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-118922" target="_blank">NAS-118922</a> | Device Screen does't update after replacing a disk | When replacing a disk the UI doesn't update to show the replace operation completed and might display an error message. After replacing a disk, return to the Storage Dashboard and then the Devices screen to see the status of the disk replacement as complete. | Targeted 22.12(Bluefin) | 
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119005" target="_blank">NAS-119005</a> | On Enterprise systems, the Open Ticket button doesn't work | On Enterprise systems, when filing a ticket using the Open Ticket button should open an issue reporting screen but it does not. Customers should either contact Support directly or open a ticket directly in Jira. | Targeted 22.12 (Bluefin) |
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119011" target="_blank">NAS-119011</a> | iSCSI wizard does not function properly | The Extent Type device dropdown list is empty and the Portal dropdown list does not include the create new option so users can not select or add a new device, or add a new portal. | Targeted 22.12 (Bluefin) | 
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119008" target="_blank">NAS-119008</a> | On HA systems, the Dashboard Standby controller and status do not update after changing the system dataset. | Issue is related to another UI screen caching issues where the HA Dashboard does not show updated system information. Clear your browser cache to update the UI. | Targeted 22.12 (Bluefin) | 
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119006" target="_blank">NAS-119006</a> | Enclosure view only updates after leaving the page | Related to a known screen caching issue. Either clear your browser cache or change to a different UI screen and return to the Enclosure screen see the updates. | Targeted 22.12.1 (Bluefin) |
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119007" target="_blank">NAS-119007</a> | API call 'pool.dataset.details' responds to an object with a field "snapshot_count = 0" | API call to obtain number of zvol snapshots returns an incorrect value of zero when there are two snapshots. | Targeted 22.12.1 (Bluefin) | 
| 22.12-RC.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-119010" target="_blank">NAS-119010</a> | SCALE drive replacement within a pool produces drive busy error | During HDD testing, replacing a drive in a pool resulted in the Error: [EFAULT] Railed to wipe disk sdb: [Errno 16] Device or resource busy: '/dev/sdb'. Appears to be a ZFS error. | Targeted 22.12(Bluefin) | 
| 22.12-BETA.2 | <a href="https://ixsystems.atlassian.net/browse/NAS-118632" target="_blank">NAS-118632</a> | Traceback received during pool creation | This is an occasional noncritical race condition with the disk temperatures widget during pool creation. The traceback can be acknowledged and ignored; the issue is temporary and does not impact pool creation.. | 22.12-RC.1 |
| 22.12-BETA.2 | <a href="https://ixsystems.atlassian.net/browse/NAS-118616" target="_blank">NAS-118616</a> | SMB Share option Edit Filesystem ACL does not open the filesystem editor screen. | After adding an SMB share, if you select the option to Edit Filesystem ACL, the main Dashboard opens instead of the filesystem ACL editor screen. To workaround this issue, go to the Storage > Dashboard screen, select the dataset for the SMB share, scroll down to the Permissions widget and click Edit. | 22.12-RC.1 |
| 22.12-BETA.2 | <a href="https://ixsystems.atlassian.net/browse/NAS-118614" target="_blank">NAS-118614</a>| Cloud tasks for Move and Sync transfer modes revert to Copy | When creating a cloud sync task where the Transfer Mode is set to either Move or Sync, when the task completes successfully and runs for the first time, the notification to the user states the transfer mode was reset to Copy. | 22.12-RC.1 |
| 22.12-BETA.2 | <a href="https://ixsystems.atlassian.net/browse/NAS-118613" target="_blank">NAS-118613</a> | Cannot mount WebDAV share in Windows when WebDAV service is set to Basic Authentication | If the TrueNAS WebDAV service is set to Basic Authentication, you cannot mount the share in Windows. This is a security protection on the part of Windows as Basic Authentication is considered an insecure way to input passwords. While the Windows Registry can be edited to allow for basic authentication, this is not recommended. It is recommended to access WebDAV shares using a browser with https security enabled or mounting shares with Digest Authentication enabled. | N/A |
| 22.12-BETA.2 | n/a | TrueNAS Bluefin no longer supports MS-DOS based SMB clients. | As of SCALE 22.12, Bluefin, TrueNAS now uses Samba 4.17. Samba 4.16 announced in their release notes that they deprecated and disabled the whole SMB1 protocol as of 4.11. If needed for security purposes or code maintenance they continue to remove older protocol commands and unused dialects or that are replaced in more modern SMB1 version. Refer to [Samba](https://www.samba.org/samba/latest_news.html) release notes for more information. | n/a |
| 22.12-BETA.1  | n/a | Upgrading from 22.02.4 to 22.12-BETA.1 is known to not work. | Workaround is to either upgrade from a version before 22.02.4 or to upgrade to 22.12-BETA.2 when it is [released](#scale-schedule). | 22.12-BETA.2 |
| 22.12-BETA.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-117940" target="_blank">NAS-117940</a> | Implements temporary fix for the return from `glfs_open()` to honor `O_DIRECTORY` flag | Pertains to an internal issue in Samba. This temporary fix reverts after gluserfs is fixed with a permanent solution to this issue. | Targeted 22.12 (Bluefin) |
| 22.12-BETA.1 | <a href="https://ixsystems.atlassian.net/browse/NAS-117974" target="_blank">NAS-117974</a> | Replication Task Wizard Source and Destination fields cut off the path information | The **Source** and **Destination** fields in the **Replication Task Wizard** window are cutoff. UI form issue that positions the paths in the fields such that only part of the value is visible. | Backlog |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118063" target="_blank">NAS-118063</a> | SCALE Cluster growth/resize features | Currently, there is no way to grow or resize an existing cluster without the user destroying their cluster and starting with a new cluster. This issue looks to implement a solution using TrueCommand and TrueNAS API that provides the ability to have shared volumes that do not occupy all nodes in the cluster, add one or more nodes to a cluster without impacting existing shared volumes, "grow" a shared volume, and temporarily remove nodes from a cluster without destroying the cluster. | Targeted Backlog |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118066" target="_blank">NAS-118066</a> | UI is not updating or properly showing snapshots | UI isn't showing dataset snapshots without creating one from Shell, but the UI doesn't display this Shell-created snapshot in Manage Snapshots. | 22.12-BETA.2 |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118054" target="_blank">NAS-118054</a> | Replication Warning: Cannot receive sharesmb property | Replication created sending from an encrypted dataset to a non-encrypted dataset. After running replication the screen displays an orange warning icon. After clicking on the warning the "cannot receive sharesmb property in *tank/repwizrd/*set: pool and dataset must be upgraded to set this property or value." where *tank/repwizrd* is the pool/dataset path.| Targeted 22.12-BETA.2 |
| 22.12-BETA.1 | <a href="xsystems.atlassian.net/browse/NAS-118095" target="_blank">NAS-118095</a> | Core dumps on ctdb at startup | Traceback received that indicates ctdb core-dumps when starting nodes after a fresh install. | Unscheduled |
| 22.02.1 |<a href="https://ixsystems.atlassian.net/browse/NAS-116473" target="_blank">NAS-116473</a> | Large Drive Count Issues | iX is investigating issues with booting SCALE on systems with more than 100 Disks. | 23.10-ALPHA.1 (Cobia) |
| 22.02.0 | <a href="https://jira.ixsystems.com/browse/NAS-115238" target="_blank">NAS-115238</a> | Removed drive from pool does not degrade pool status (SCALE). | Issue is being investigated and a fix provided in a future release | 22.12-BETA.2 |
|  |  | Unable to mount an NFS export after migrating from CORE > SCALE or updating to 22.02.0. | The <file>/etc/exports</file> file is no longer generated when the NFS configuration contains <i>mapall</i> or <i>maproot</i> entries for unknown users or groups. This can impact users who previously had a mapping group set to <i>wheel</i>, which does not exist in SCALE. If you are unable to mount an NFS export, review your NFS share configuration and change any <i>wheel</i> entries to something specific for your environment or <i>root</i>. |  |
|  |  | SCALE Gluster/Cluster. | Gluster/Cluster features are still in testing.  Administrators should use caution when deploying and avoid use with critical data. |  |
|  | <a href="https://jira.ixsystems.com/browse/NAS-110263" target="_blank">NAS-110263</a> | AFP sharing is removed from TrueNAS SCALE. The protocol is deprecated and no longer receives development effort or security fixes. | TrueNAS SCALE automatically migrates any existing AFP shares into an SMB configuration that is preset to function like an AFP share. | 21.06-BETA.1 |
| 21.06-BETA.1 | <a href="https://jira.ixsystems.com/browse/NAS-111547" target="_blank">NAS-111547</a> | ZFS shouldn't count vdev IO errors on hotplug removal | Pool status isn't being updated immediately on disk exchange events. | Targeted 22.12 (Bluefin) |

{{< hint ok >}}
TrueNAS SCALE Bluefin includes Linux Kernel 5.15 which can enable Alderlake GPU acceleration by using the following boot loader tunable and rebooting:

`midclt call system.advanced.update '{"kernel_extra_options": "i915.force_probe=4690" }'`

NOTE: 4690 can be replaced with your specific Alderlake GPU version.
{{< /hint >}}

## OpenZFS Feature Flags

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html).

For more details on zpool.features.7 see [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

| Feature Flag | GUID | Dependencies | Description |
|--------------|------|--------------|-------------|
| blake3 | org.openzfs.blake3 | extensible)dataset | Enables use of the BLAKE3 hash algorithm for checksum and dedup. BLAKE3 is a secure hash algorithm focused on high performance. When enabled, the administrator can turn on the blake3 checksum on any dataset using `zfs set checksum=blake dset` [see zfs-set(8)](https://openzfs.github.io/openzfs-docs/man/8/zfs-set.8.html). |
| head_errlog | com.delphix:head_errlog | n/a | Enables the upgraded version of `errlog`. The error log of each head dataset is stored separately in the zap object and keyed by the head id. Every dataset affected by an error block is listed in the output of `zpool status`. |
| zilsaxattr | org.openzfs:zilsaxattr | extensible_dataset | Enables `xattr-sa` extended attribute logging in the ZIL. If enabled, extended attribute changes from both `xattrdir=dir` and `xattr=sa` are guaranteed to be durable if either `sync=always` is set for the dataset when a change is made or sync(2) is called on the dataset after making changes. |

## Bluefin Unstable Nightly Images (Unstable Branch, developers and brave testers)

{{< hint danger >}}
Nightly builds are considered experimental and highly unstable.
Do not use a nightly build for anything other than testing and development.
{{< /hint >}}

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time.
These images are made publicly available when they pass automated basic usability testing.
This means that during times of heavy development, nightly images might be less frequently available.
Online updates are created every 2 hours and are available in the SCALE UI online updating page.

* [ISO Installation Files](https://download.truenas.com/truenas-scale-bluefin-nightly/ "SCALE Angelfish Nightly .iso files")
* [Manual Update File](https://update.freenas.org/scale/TrueNAS-SCALE-Bluefin-Nightlies/TrueNAS-SCALE-Bluefin-Nightly.update)
