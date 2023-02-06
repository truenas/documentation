---
title: TrueCommand 2.3.1 Release Notes
weight: 5
aliases:
  - /truecommand/tcreleasenotes/2.2
  - /releasenotes/truecommand/2.1.1/
  - /releasenotes/truecommand/2.1/
---

{{< toc >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

## TrueCommand Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| 2.3.2 | Code-freeze | 22 February 2023 |
| 2.3.2 | Internal Testing Sprints | 27 February 2023 - 3 March 2023 |
| 2.3.2 | Tag | 6 March 2023 |
| 2.3.2 | Release | 7 March 2023 |

## 2.3.1

February 7, 2023

iXsystems is please to release TrueCommand 2.3.1!
This release is a maintenance release that fixes issues identified in the 2.3.0 release and adds a few new improvements. Changes include:

* Refresh option no longer logs users out of TrueCommand
* Unlimited disk count license no longer enforced
* Upgrade available indication added to system dashboard cards
* Port option added to the Servers Add screen
* Code field now sends SMTP Configuration Validation 

### 2.3.1 Change Log

### Improvement

* [TC-2399](https://ixsystems.atlassian.net/browse/TC-2399) Use \`code\` field from alert plugin test/send
* [TC-2511](https://ixsystems.atlassian.net/browse/TC-2511) Add an upgrade available indication to the system Dashcards
* [TC-2529](https://ixsystems.atlassian.net/browse/TC-2529) Unlimited disk count - do not enforce license
* [TC-2555](https://ixsystems.atlassian.net/browse/TC-2555) Add port field to servers/add API

### Bug

* [TC-2547](https://ixsystems.atlassian.net/browse/TC-2547) Hitting refresh for a few times will log out the user
* [TC-2553](https://ixsystems.atlassian.net/browse/TC-2553) Disable strict SNI host matching in Caddyfile
* [TC-2559](https://ixsystems.atlassian.net/browse/TC-2559) Panic when adding certificate
* [TC-2560](https://ixsystems.atlassian.net/browse/TC-2560) fix marshaling error for cpu temperature stats

## 2.3
{{< expand "2.3.0" "v" >}}

**January 25, 2023**

iXsystems is pleased to release TrueCommand 2.3.0!
This release of TrueCommand includes a new cluster details panel, and makes improvements in several areas including:

* Allows adding the IP or host name validators when creating a new system
* Allows adding custom NetBIOS name when configuring Active Directory on clustering
* Adds Google authentication support for two-factor authenication (2fa)
* Improves email connection testing and adds explicit SMTP errors
* Improves logging and alerts in middleware and the UI

This release also fixes issues found with team avatars, adding systems to TrueCommand, Certificate Authorities (CAs) in TrueCommand, and with downloading the service provider metadata in SAML administration.

## 2.3.0 Change Log

### New Features

* [TC-2239](https://ixsystems.atlassian.net/browse/TC-2239) cluster details panel

### Epics

* [TC-1891](https://ixsystems.atlassian.net/browse/TC-1891) Refactor UI
* [TC-2302](https://ixsystems.atlassian.net/browse/TC-2302) Unit tests improvements and coverage
* [TC-2305](https://ixsystems.atlassian.net/browse/TC-2305) Middleware Logging Improvements

### Improvements

* [TC-1932](https://ixsystems.atlassian.net/browse/TC-1932) Show explicit SMTP errors and employ better UX for testing email connections
* [TC-2107](https://ixsystems.atlassian.net/browse/TC-2107) Merge realtime-chart and dash-system-status
* [TC-2112](https://ixsystems.atlassian.net/browse/TC-2112) add IP or hostname validator in creating new system
* [TC-2251](https://ixsystems.atlassian.net/browse/TC-2251) Allow custom NetBIOS name when configuring AD on Clustering
* [TC-2311](https://ixsystems.atlassian.net/browse/TC-2311) Add colored logging support
* [TC-2387](https://ixsystems.atlassian.net/browse/TC-2387) Add Google Auth support for 2FA
* [TC-2394](https://ixsystems.atlassian.net/browse/TC-2394) Deprecate nas/send\_method APIs related to iSCSI, network and others
* [TC-2457](https://ixsystems.atlassian.net/browse/TC-2457) drop in GORM/dependencies and migrate cluster\_tsp table
* [TC-2458](https://ixsystems.atlassian.net/browse/TC-2458) migrate alert\_rules table to GORM
* [TC-2462](https://ixsystems.atlassian.net/browse/TC-2462) migrate logs and ui\_logs tables to GORM
* [TC-2476](https://ixsystems.atlassian.net/browse/TC-2476) Show expiration warning dialog once a day
* [TC-2484](https://ixsystems.atlassian.net/browse/TC-2484) Changed randomization from internal util to gofakeit
* [TC-2486](https://ixsystems.atlassian.net/browse/TC-2486) Add shares data in \`cluster/list\`
* [TC-2489](https://ixsystems.atlassian.net/browse/TC-2489) Add the Gin module and start a separate server with it having Caddy on the top
* [TC-2503](https://ixsystems.atlassian.net/browse/TC-2503) fix nil user error on signup
* [TC-2506](https://ixsystems.atlassian.net/browse/TC-2506) Incorrect display of storage stats in dash-card
* [TC-2512](https://ixsystems.atlassian.net/browse/TC-2512) remove extra newlines from MW log download
* [TC-2534](https://ixsystems.atlassian.net/browse/TC-2534) Handle CORS for all TCP API endpoints

### Bugs

* [TC-2438](https://ixsystems.atlassian.net/browse/TC-2438) No team avatars on user page
* [TC-2454](https://ixsystems.atlassian.net/browse/TC-2454)  \`Download Service Provider Metadata\` is not working In Admin SAML
* [TC-2477](https://ixsystems.atlassian.net/browse/TC-2477) CA not sticking when set via TrueCommand
* [TC-2483](https://ixsystems.atlassian.net/browse/TC-2483) Unable to add system to TrueCommand - support case
* [TC-2514](https://ixsystems.atlassian.net/browse/TC-2514) Incorrect stats and chart labels in cluster-card
* [TC-2519](https://ixsystems.atlassian.net/browse/TC-2519) Fix cluster/list response when one of the systems is offline
* [TC-2527](https://ixsystems.atlassian.net/browse/TC-2527) Fix undefined license console error
* [TC-2532](https://ixsystems.atlassian.net/browse/TC-2532) SAML user creation fails

{{< /expand>}}
## 2.2.2
{{< expand "2.2.2" "v" >}}

**October 18, 2022**

iXsystems is pleased to release TrueCommand 2.2.2!
This is a maintenance release of TrueCommand 2.2 that includes some improvements for charts and a variety of bugfixes for licensing, LDAP, reporting, connections, and alerting.

### Improvement

* [TC-2357](https://ixsystems.atlassian.net/browse/TC-2357) Report charts x-axis datapoint sometimes display overlapping labels
* [TC-2274](https://ixsystems.atlassian.net/browse/TC-2274) API endpoint for downloading config backup
* [TC-2215](https://ixsystems.atlassian.net/browse/TC-2215) Change build type from build to runtime

### Bug

* [TC-2325](https://ixsystems.atlassian.net/browse/TC-2325) Disabled importing licenses on Cloud
* [TC-2297](https://ixsystems.atlassian.net/browse/TC-2297) Available servers do not appear in header
* [TC-2294](https://ixsystems.atlassian.net/browse/TC-2294) Unlimited License
* [TC-2293](https://ixsystems.atlassian.net/browse/TC-2293) Proxy NAS interface via ssl redirects to TC
* [TC-2289](https://ixsystems.atlassian.net/browse/TC-2289) LDAP Failing to Connect
* [TC-2288](https://ixsystems.atlassian.net/browse/TC-2288) TrueCommand Drive Count Issue
* [TC-2287](https://ixsystems.atlassian.net/browse/TC-2287) Mismatched internal and NAS alert priority breaks user notices
* [TC-2286](https://ixsystems.atlassian.net/browse/TC-2286) Panic on LDAP user creation
* [TC-2275](https://ixsystems.atlassian.net/browse/TC-2275) Wireguard configuration not applied in TC container
* [TC-2273](https://ixsystems.atlassian.net/browse/TC-2273) Can't Access System Card \(And backed up config files\) when system is offline
* [TC-2268](https://ixsystems.atlassian.net/browse/TC-2268) Health Indicator on Cluster UI widget not responsive
* [TC-2257](https://ixsystems.atlassian.net/browse/TC-2257) Issue Loading Reporting and Cluster UI Pages
{{< /expand >}}

## 2.2.1

{{< expand "2.2.1" "v" >}}

**August 12, 2022**

This is a minor release designed to address some additional cluster issues found between TrueCommand 2.2 and SCALE 22.02.3.

### Improvement

* [TC-2254](https://ixsystems.atlassian.net/browse/TC-2254) Fix middleware logs to be one per line
* [TC-2248](https://ixsystems.atlassian.net/browse/TC-2248) ctdb.public.ips.create is a job and GlusterSMBConfig atomicity

### Bug

* [TC-2261](https://ixsystems.atlassian.net/browse/TC-2261) Build/publish tags
* [TC-2259](https://ixsystems.atlassian.net/browse/TC-2259) Use cluster name for netbios
* [TC-2253](https://ixsystems.atlassian.net/browse/TC-2253) TC wizard does not create A records in active directory when 22.02.3 is used
* [TC-2247](https://ixsystems.atlassian.net/browse/TC-2247) Generated hostname is longer than 15 charcters preventing clustering setup
* [TC-2245](https://ixsystems.atlassian.net/browse/TC-2245) RRDcached sockets timeout on read, fork, and fail to reconnect
* [TC-2207](https://ixsystems.atlassian.net/browse/TC-2207) 2FA window pops back up after successful login with Auth code

{{< /expand >}}

## 2.2
{{< expand "2.2" "v" >}}

**August 02, 2022**

The TrueCommand team is pleased to announce [TrueCommand 2.2](https://www.truenas.com/docs/truecommand/) is now available!

{{< hint warning >}}
Users with TrueCommand deployed in a Docker-style container are advised to back up their TrueCommand `<container>/data` volume before attempting an upgrade to version 2.2.
See [Back up the Container Volume]({{< relref "UpdateDocker.md" >}}) for specific examples.
{{< /hint >}}

### 2.2 Changelog

### Improvement

* [TC-2221](https://ixsystems.atlassian.net/browse/TC-2221) - Remove "Distributed" volume type
* [TC-2203](https://ixsystems.atlassian.net/browse/TC-2203) - make Dispersed the default cluster volume type
* [TC-2174](https://ixsystems.atlassian.net/browse/TC-2174) - update UI text for clustering feature
* [TC-2173](https://ixsystems.atlassian.net/browse/TC-2173) - UI fixes in add-cluster-volume
* [TC-2170](https://ixsystems.atlassian.net/browse/TC-2170) - Show loading spinner in add-cluster-volume
* [TC-2165](https://ixsystems.atlassian.net/browse/TC-2165) - add ACL template choices to cluster volume share creation view
* [TC-2162](https://ixsystems.atlassian.net/browse/TC-2162) - Remove glusterd from services UI
* [TC-2158](https://ixsystems.atlassian.net/browse/TC-2158) - display additional information about cluster volume subvols
* [TC-2148](https://ixsystems.atlassian.net/browse/TC-2148) - Restrict number of nodes allowed in Cluster
* [TC-2141](https://ixsystems.atlassian.net/browse/TC-2141) - add notice about entering clustered SMB mode
* [TC-2131](https://ixsystems.atlassian.net/browse/TC-2131) - Replace rpc/query with proper ping endpoint
* [TC-2122](https://ixsystems.atlassian.net/browse/TC-2122) - push release/\* images on PR merge
* [TC-2106](https://ixsystems.atlassian.net/browse/TC-2106) - split clustering into two wizards
* [TC-2099](https://ixsystems.atlassian.net/browse/TC-2099) - clustered SMB design polish
* [TC-2093](https://ixsystems.atlassian.net/browse/TC-2093) - Minor imporvements to MW connection down alert
* [TC-2080](https://ixsystems.atlassian.net/browse/TC-2080) - tap into gluster/fuse events to maintain a cluster cache
* [TC-2078](https://ixsystems.atlassian.net/browse/TC-2078) - remove code from previous clustering implementation
* [TC-2070](https://ixsystems.atlassian.net/browse/TC-2070) - Open File Explorer \(NAS Manager\) not available on connected SCALE systems
* [TC-2055](https://ixsystems.atlassian.net/browse/TC-2055) - Unit tests for shared utils
* [TC-2039](https://ixsystems.atlassian.net/browse/TC-2039) - endpoints for creating and deleting cluster volumes
* [TC-2035](https://ixsystems.atlassian.net/browse/TC-2035) - remove users/get\_data and users/set\_data
* [TC-2015](https://ixsystems.atlassian.net/browse/TC-2015) - Unit test for sessions module and its components
* [TC-2014](https://ixsystems.atlassian.net/browse/TC-2014) - Remove references to data/curve\_fit API
* [TC-2013](https://ixsystems.atlassian.net/browse/TC-2013) - Remove data/curve\_fit
* [TC-2010](https://ixsystems.atlassian.net/browse/TC-2010) - Unit test for the nas-users components
* [TC-2005](https://ixsystems.atlassian.net/browse/TC-2005) - Unit test for gluster and iscsi components
* [TC-2001](https://ixsystems.atlassian.net/browse/TC-2001) - Move functions into utility subpackage
* [TC-2000](https://ixsystems.atlassian.net/browse/TC-2000) - Move logger into subpackage
* [TC-1994](https://ixsystems.atlassian.net/browse/TC-1994) - Unit tests for hardware and alerts modules and their components
* [TC-1991](https://ixsystems.atlassian.net/browse/TC-1991) - Unit test for reporting module and its components
* [TC-1986](https://ixsystems.atlassian.net/browse/TC-1986) - Unit test for dashboard page and its components
* [TC-1981](https://ixsystems.atlassian.net/browse/TC-1981) - Unit test for the admin page
* [TC-1979](https://ixsystems.atlassian.net/browse/TC-1979) - Unit test for LDAP form and its test dialog
* [TC-1975](https://ixsystems.atlassian.net/browse/TC-1975) - Create API endpoint for starting the iSCSI service of system
* [TC-1974](https://ixsystems.atlassian.net/browse/TC-1974) - Setup unit testing for the UI
* [TC-1964](https://ixsystems.atlassian.net/browse/TC-1964) - Add more error checks, especially to JSON Marshal calls
* [TC-1960](https://ixsystems.atlassian.net/browse/TC-1960) - Refactor uploaders to use a single drag and drop component
* [TC-1959](https://ixsystems.atlassian.net/browse/TC-1959) - Rework NAS routines to handle messages directly as opposed to through a pool
* [TC-1958](https://ixsystems.atlassian.net/browse/TC-1958) - Avert potential mutex copying issues detected by govet
* [TC-1957](https://ixsystems.atlassian.net/browse/TC-1957) - Run "-race" on MW build and correct possible race conditions
* [TC-1956](https://ixsystems.atlassian.net/browse/TC-1956) - Improve LDAP form layout and UX
* [TC-1955](https://ixsystems.atlassian.net/browse/TC-1955) - Middleware LDAP test coverage
* [TC-1947](https://ixsystems.atlassian.net/browse/TC-1947) - UI Lint - add new eslint rules
* [TC-1946](https://ixsystems.atlassian.net/browse/TC-1946) - Break MW file structure into smaller packages
* [TC-1942](https://ixsystems.atlassian.net/browse/TC-1942) - Rework WS Management
* [TC-1933](https://ixsystems.atlassian.net/browse/TC-1933) - Use Jira ticket ID for docker images on GitHub Packages
* [TC-1931](https://ixsystems.atlassian.net/browse/TC-1931) - Disable PR merge until tests pass
* [TC-1929](https://ixsystems.atlassian.net/browse/TC-1929) - Tests: register all NASes at the beginning of the run
* [TC-1928](https://ixsystems.atlassian.net/browse/TC-1928) - Replace all directives and components prefix to `tc`
* [TC-1925](https://ixsystems.atlassian.net/browse/TC-1925) - Show tooltip for the disabled bricks in the Create Cluster Volume.
* [TC-1924](https://ixsystems.atlassian.net/browse/TC-1924) - Adjust log rotation to use max size
* [TC-1923](https://ixsystems.atlassian.net/browse/TC-1923) - Configure linting for the UI
* [TC-1920](https://ixsystems.atlassian.net/browse/TC-1920) - Make the UI dependencies version fixed.
* [TC-1918](https://ixsystems.atlassian.net/browse/TC-1918) - Middleware logging improvements
* [TC-1917](https://ixsystems.atlassian.net/browse/TC-1917) - Split chart generation to avoid frontend configuration in Middleware
* [TC-1915](https://ixsystems.atlassian.net/browse/TC-1915) - Move tests to readonly config file
* [TC-1914](https://ixsystems.atlassian.net/browse/TC-1914) - Add support for YAML configs
* [TC-1909](https://ixsystems.atlassian.net/browse/TC-1909) - Use events to get update on jobs
* [TC-1899](https://ixsystems.atlassian.net/browse/TC-1899) - Build TrueCommand on github PRs
* [TC-1897](https://ixsystems.atlassian.net/browse/TC-1897) - Redo init routines to avoid loops and encourage concurrency
* [TC-1896](https://ixsystems.atlassian.net/browse/TC-1896) - Move middleware-start to Middleware as bootstrap
* [TC-1889](https://ixsystems.atlassian.net/browse/TC-1889) - Fully lint Middleware and corresponding utilities
* [TC-1888](https://ixsystems.atlassian.net/browse/TC-1888) - Update UI dependencies
* [TC-1887](https://ixsystems.atlassian.net/browse/TC-1887) - Update Middleware dependencies
* [TC-1886](https://ixsystems.atlassian.net/browse/TC-1886) - Move wg-mgr to middleware
* [TC-1884](https://ixsystems.atlassian.net/browse/TC-1884) - Safety belt for Clustering feature
* [TC-1882](https://ixsystems.atlassian.net/browse/TC-1882) - Unify regular and SaaS build
* [TC-1878](https://ixsystems.atlassian.net/browse/TC-1878) - Add Experimental flags to Users/Groups\+SAML
* [TC-1874](https://ixsystems.atlassian.net/browse/TC-1874) - Functional tests for iscsivolumes/\* endpoints
* [TC-1873](https://ixsystems.atlassian.net/browse/TC-1873) - Functional tests for utilities/\* endpoints
* [TC-1872](https://ixsystems.atlassian.net/browse/TC-1872) - Functional tests for cluster.cluster\_\* MW endpoints
* [TC-1869](https://ixsystems.atlassian.net/browse/TC-1869) - Add a Confirmation screen when the cluster is successfully deleted
* [TC-1860](https://ixsystems.atlassian.net/browse/TC-1860) - Automated testing infrastructure
* [TC-1841](https://ixsystems.atlassian.net/browse/TC-1841) - Convert LogEntry to use unix for its timestamp
* [TC-1712](https://ixsystems.atlassian.net/browse/TC-1712) - Check iSCSI service status when creating a share
* [TC-1654](https://ixsystems.atlassian.net/browse/TC-1654) - Edit groups window does not have parity with System Edit Window
* [TC-1593](https://ixsystems.atlassian.net/browse/TC-1593) - Swap io/ioutil to other packages once 1.16 is widely adopted
* [TC-1461](https://ixsystems.atlassian.net/browse/TC-1461) - Admin menus have wasted space requiring scrolling

### New Feature

* [TC-2092](https://ixsystems.atlassian.net/browse/TC-2092) - add nas/smb\_presets API
* [TC-2084](https://ixsystems.atlassian.net/browse/TC-2084) - cluster/share\_\* endpoints for managing cluster volume shares
* [TC-2065](https://ixsystems.atlassian.net/browse/TC-2065) - automated tests for cluster/create and cluster/delete
* [TC-2062](https://ixsystems.atlassian.net/browse/TC-2062) - endpoint for deleting clusters
* [TC-2060](https://ixsystems.atlassian.net/browse/TC-2060) - endpoint for listing clusters
* [TC-2059](https://ixsystems.atlassian.net/browse/TC-2059) - add endpoint to configure cluster for smb sharing
* [TC-2057](https://ixsystems.atlassian.net/browse/TC-2057) - add cluster/public\_interface endpoint for UI
* [TC-2030](https://ixsystems.atlassian.net/browse/TC-2030) - Add MW support for interface.choices and gluster.peer.ips\_available
* [TC-2025](https://ixsystems.atlassian.net/browse/TC-2025) - Refactor audit logs to use sqlite for backend datastore
* [TC-2024](https://ixsystems.atlassian.net/browse/TC-2024) - Refactor notice management to use sqlite for backend datastore
* [TC-2023](https://ixsystems.atlassian.net/browse/TC-2023) - Write NAS stats to rrd
* [TC-2022](https://ixsystems.atlassian.net/browse/TC-2022) - Add logic for initializing rrds on startup
* [TC-2021](https://ixsystems.atlassian.net/browse/TC-2021) - Add migration logic for notices and audit logs
* [TC-2020](https://ixsystems.atlassian.net/browse/TC-2020) - Implement sqlite subpackage
* [TC-2019](https://ixsystems.atlassian.net/browse/TC-2019) - Implement rrd subpackage
* [TC-2018](https://ixsystems.atlassian.net/browse/TC-2018) - Add sqlite and rrdtool to docker images
* [TC-2017](https://ixsystems.atlassian.net/browse/TC-2017) - Shore up functional tests for audit logs
* [TC-2016](https://ixsystems.atlassian.net/browse/TC-2016) - Shore up functional tests for alert notices
* [TC-1995](https://ixsystems.atlassian.net/browse/TC-1995) - Design SMB Clustering Screens
* [TC-1984](https://ixsystems.atlassian.net/browse/TC-1984) - Validate uploaded certificates
* [TC-1978](https://ixsystems.atlassian.net/browse/TC-1978) - Sync system time via NTP with Chrony
* [TC-1922](https://ixsystems.atlassian.net/browse/TC-1922) - Add unit tests command to TC
* [TC-1898](https://ixsystems.atlassian.net/browse/TC-1898) - Create influx stress test
* [TC-1808](https://ixsystems.atlassian.net/browse/TC-1808) - endpoint for creating clusters
* [TC-1668](https://ixsystems.atlassian.net/browse/TC-1668) - Return to new User after creating a new team from the User Screen

### Epic

* [TC-1999](https://ixsystems.atlassian.net/browse/TC-1999) - Refactor MW dependencies into subpackages
* [TC-1890](https://ixsystems.atlassian.net/browse/TC-1890) - Refactor middleware
* [TC-1859](https://ixsystems.atlassian.net/browse/TC-1859) - Functional MW API tests
* [TC-1814](https://ixsystems.atlassian.net/browse/TC-1814) - Clustered SMB Support

### Bug

* [TC-2160](https://ixsystems.atlassian.net/browse/TC-2160) - Change email field back to optional in user-edit page
* [TC-2086](https://ixsystems.atlassian.net/browse/TC-2086) - Gross error when clicking on encrypted directory in file manager
* [TC-2081](https://ixsystems.atlassian.net/browse/TC-2081) - Absurdly high stats break data bars on dash/server page
* [TC-2075](https://ixsystems.atlassian.net/browse/TC-2075) - Attempting to delete file in filemanager on NAS Pool
* [TC-2074](https://ixsystems.atlassian.net/browse/TC-2074) - Emails On TrueCommand Cloud Are Not Going Through
* [TC-2073](https://ixsystems.atlassian.net/browse/TC-2073) - TrueCommand Invalid Queue Length API Error
* [TC-2063](https://ixsystems.atlassian.net/browse/TC-2063) - API call to import TLS cert fails with \{"error":"invalid character '\\n' in string literal"\}
* [TC-2058](https://ixsystems.atlassian.net/browse/TC-2058) - iSCSI manager does not create volume after completing
* [TC-2033](https://ixsystems.atlassian.net/browse/TC-2033) - Add System Button Screen Dimming Does Not Go Away
* [TC-1992](https://ixsystems.atlassian.net/browse/TC-1992) - Close down file watcher on shutdown
* [TC-1990](https://ixsystems.atlassian.net/browse/TC-1990) - Trouble With Deleting Alerts
* [TC-1988](https://ixsystems.atlassian.net/browse/TC-1988) - Do not fail deployment if Influx already setup
* [TC-1987](https://ixsystems.atlassian.net/browse/TC-1987) - IPv6 support for TC on-prem
* [TC-1985](https://ixsystems.atlassian.net/browse/TC-1985) - Handle instance where filewatcher util can fail on initialization
* [TC-1983](https://ixsystems.atlassian.net/browse/TC-1983) - Middleware API crash when i try verify email of my profile in truecommand docker version
* [TC-1982](https://ixsystems.atlassian.net/browse/TC-1982) - Cluster Volume not showing in UI
* [TC-1969](https://ixsystems.atlassian.net/browse/TC-1969) - Apply formatter for all html and ts files
* [TC-1967](https://ixsystems.atlassian.net/browse/TC-1967) - Deleting Certificate Authorities not working
* [TC-1966](https://ixsystems.atlassian.net/browse/TC-1966) - Removing Cluster Volume Hangs
* [TC-1952](https://ixsystems.atlassian.net/browse/TC-1952) - TrueCommand Cloud Customers Can Reach The Alert Services Page
* [TC-1948](https://ixsystems.atlassian.net/browse/TC-1948) - Removal of team in edit-user page is not working
* [TC-1943](https://ixsystems.atlassian.net/browse/TC-1943) - TrueCommand Certificate Issues
* [TC-1941](https://ixsystems.atlassian.net/browse/TC-1941) - Unable to open TrueNAS proxy interface on cloud
* [TC-1939](https://ixsystems.atlassian.net/browse/TC-1939) - Filewatcher does not readd deleted files
* [TC-1934](https://ixsystems.atlassian.net/browse/TC-1934) - Mailserver Test Button Lacks Meaningful Output
* [TC-1930](https://ixsystems.atlassian.net/browse/TC-1930) - Upgrade from TrueCommand 1.3 to 2.0/2.1 Breaks LDAP
* [TC-1921](https://ixsystems.atlassian.net/browse/TC-1921) - Imported Certificates Are Not Showing In The WebUI
* [TC-1919](https://ixsystems.atlassian.net/browse/TC-1919) - When creating a replicated volume , the option to specify the replica count doesn't come up
* [TC-1913](https://ixsystems.atlassian.net/browse/TC-1913) - TrueCommand does not start when pointed to a custom certificate
* [TC-1911](https://ixsystems.atlassian.net/browse/TC-1911) - Mismatch between ignore\_alerts in MW and UI
* [TC-1908](https://ixsystems.atlassian.net/browse/TC-1908) - Not deleting or reusing TSP
* [TC-1906](https://ixsystems.atlassian.net/browse/TC-1906) - Reset PW from Login Emailed Credentials not Recognized
* [TC-1881](https://ixsystems.atlassian.net/browse/TC-1881) - Alerts count on the System Dashcard are going up and they are now too big for the alert bubble
* [TC-1846](https://ixsystems.atlassian.net/browse/TC-1846) - Better handling of dropped connection to middleware

{{< /expand >}}

## 2.1.1

{{< expand "2.1.1" >}}

**March 29, 2022**

The TrueCommand team is pleased to announce [TrueCommand 2.1.1](https://www.truenas.com/docs/truecommand/) is now available. 

### 2.1.1 Changelog

#### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1924'>TC-1924</a>] -         Adjust log rotation to use max size
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1968'>TC-1968</a>] -         Add build/deploy github workflow to release/2.1
</li>
</ul>

#### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1913'>TC-1913</a>] -         TrueCommand does not start when pointed to a custom certificate
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1921'>TC-1921</a>] -         Imported Certificates Are Not Showing In The WebUI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1934'>TC-1934</a>] -         Mailserver Test Button Lacks Meaningful Output
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1937'>TC-1937</a>] -         Docker Does Not Start Again After Import Certificates
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1941'>TC-1941</a>] -         Unable to open TrueNAS proxy interface on cloud
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1948'>TC-1948</a>] -         Removal of team in edit-user page is not working
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1966'>TC-1966</a>] -         Removing Cluster Volume Hangs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1967'>TC-1967</a>] -         Deleting Certificate Authorities not working 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1982'>TC-1982</a>] -         Cluster Volume not showing in UI
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1983'>TC-1983</a>] -         Middleware API crash when I try verify email of my profile in truecommand docker version 
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1985'>TC-1985</a>] -         Handle instance where filewatcher util can fail on initialization
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1988'>TC-1988</a>] -         Do not fail deployment if Influx already setup
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1990'>TC-1990</a>] -         Trouble With Deleting Alerts
</li>
</ul>

{{< /expand >}}

## 2.1

{{< expand "2.1" >}}

**January 4, 2022**

The TrueCommand team is pleased to announce [TrueCommand 2.1](https://www.truenas.com/docs/truecommand/) is now available. 

TrueCommand 2.1 is the single pane of glass for:

* **TrueNAS CORE**: Manage systems on standard servers, Minis, or even AWS.
* **TrueNAS Enterprise**: Manage X-Series and M-Series systems with High Availability.
* **TrueNAS SCALE**: Manage a group of systems running a TrueNAS SCALE cluster. 

### 2.1 Changelog

#### New Feature

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1184'>TC-1184</a>] -         Add two-factor authentication support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1581'>TC-1581</a>] -         Have TC auto-generate and use an auth token after initial NAS connect
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1711'>TC-1711</a>] -         NAS user management
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1757'>TC-1757</a>] -         Add SAML SSO support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1774'>TC-1774</a>] -         Add ability to manage NAS users/groups for shares.
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1823'>TC-1823</a>] -         Add ability to reset user passwords from login page
</li>
</ul>

#### Improvement

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1468'>TC-1468</a>] -         EULA needs to identify GPL components
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1489'>TC-1489</a>] -         Question about the Dashboard System Options Menu
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1603'>TC-1603</a>] -         Update selenium tests
</li>
  <li>[<a href='https://jira.ixsystems.com/browse/TC-1655'>TC-1655</a>] -       Include <b>Group</b> or <b>All</b> option for system selection for reports
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1663'>TC-1663</a>] -         Add email verification to user email
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1772'>TC-1772</a>] -         Multiple time formats in use
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1789'>TC-1789</a>] -         Alerts for failed/suspicious login activity on a NAS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1806'>TC-1806</a>] -         Remove PostgreSQL and migration routine.
</li>
  <li>[<a href='https://jira.ixsystems.com/browse/TC-1811'>TC-1811</a>] -       Add <b>Test</b> button for LDAP settings
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1813'>TC-1813</a>] -         Rewrite shell scripts to go binaries
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1816'>TC-1816</a>] -         Unique name for the TC instance when it registers a token on the NAS
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1820'>TC-1820</a>] -         Unix permissions widget
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1821'>TC-1821</a>] -         Remove ng2-validation dependency
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1834'>TC-1834</a>] -         Add verbose logging and log level config
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1835'>TC-1835</a>] -         Update SMR disk model scanning
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1844'>TC-1844</a>] -         Prune dead code
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1850'>TC-1850</a>] -         Add warning to Cluster feature
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1857'>TC-1857</a>] -         Delete Dataset shouldn't be an option for datasets with children
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1865'>TC-1865</a>] -         Bugclerk for TrueCommand team
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1869'>TC-1869</a>] -         Add a Confirmation screen when the cluster is successfully deleted
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1876'>TC-1876</a>] -         Disable adding/replacing/removing peers/bricks
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1878'>TC-1878</a>] -         Add Experimental flags to Users/Groups+SAML
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1884'>TC-1884</a>] -         Safety belt for Clustering feature
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1893'>TC-1893</a>] -         Add memory health check
</li>
</ul>

#### Epic

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1800'>TC-1800</a>] -         Enhanced Authentication Support
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1815'>TC-1815</a>] -         SMB User Management
</li>
</ul>

#### Bug Fixes

<ul>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1761'>TC-1761</a>] -         Used space on system tiles reported as a whole number
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1768'>TC-1768</a>] -         Storage Navigator and Datasets card issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1783'>TC-1783</a>] -         SMR Alerts: Disk/Model desync from NAS?
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1784'>TC-1784</a>] -         Share Count Numbers always 0
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1812'>TC-1812</a>] -         DNS lookup failure
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1826'>TC-1826</a>] -         Alert rules not staying paused
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1829'>TC-1829</a>] -         Network speed reporting issues
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1833'>TC-1833</a>] -         Clumsy resolving long alert messages
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1839'>TC-1839</a>] -         NAS API Error - Can't view Storage
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1851'>TC-1851</a>] -         Include the User's name and UID in the logs
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1856'>TC-1856</a>] -         Cluster creation - API error
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1908'>TC-1908</a>] -         Not deleting or reusing TSP
</li>
<li>[<a href='https://jira.ixsystems.com/browse/TC-1911'>TC-1911</a>] -         Mismatch between ignore_alerts in MW and UI
</li>
</ul>

{{< /expand >}}


## Known Issues

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| TC 2.3.0 | <a href="https://ixsystems.atlassian.net/browse/TC-2533" target="_blank">TC-2533</a> | Hook in new servers/limit event sent when license limit is exceeded | This event replaces an error on servers/add, which instead sends max_disks and license_count if the license is executed, but not error. Any time a check fails the servers/limit event is sent as well, for asynchronous occurrences. | Targeted 2.3.2 |
| TC 2.3.0 | <a href="https://ixsystems.atlassian.net/browse/TC-2528" target="_blank">TC-2528</a> | Cannot enable team alert creation | Enabling team alert creation on new teams does not stick as the only way to submit is to update the name, which resets the checkbox after the team object is reloaded. | Unknonwn |
| TC 2.3.0 | <a href="https://ixsystems.atlassian.net/browse/TC-2524" target="_blank">TC-2524</a> | Notices WebSocket test results are unstable | Most tests pass but some are failing but never on the same test. Possible middleware issue. | Targeted 2.3.2 |
| TC 2.3.0 | <a href="https://ixsystems.atlassian.net/browse/TC-2508" target="_blank">TC-2508</a> | Teams, systems and groups missing in User after migration from 2.2.2 to 2.3.0 | After migrating from 2.2.2. to 2.3.0, users no longer had Teams, Systems or system Groups assigned. The Teams are and system groups are listed in the Systems/System Groups and Teams areas but no longer assigned under the User. | Fixed in 2.3.0 |
|TC 2.2.2 | <a href="https://ixsystems.atlassian.net/browse/TC-2339" target="_blank">TC-2339</a> | Dashboard System card values for SCALE 22.12 do not populate. | The TrueCommand Dashboard System card values for SCALE 22.12 Bluefin are missing. | Fixed in 2.2.3 |

## To Download this Release

Login to the [TrueCommand Account Portal](https://portal.ixsystems.com) for downloads, documentation links, and licensing options.
For storage clusters with more than 50 disks, the account portal also offers a *free 60-day trial license with unlimited disks*.

#### Minimum Supported TrueNAS Versions

Due to the changes in integrating with the TrueNAS middleware, the minimum version for full-support of functionality has changed with TrueCommand 2.1:

* FreeNAS/TrueNAS 11.3 series - No longer supported. Does not provide realtime statistics or storage information, but you can still connect to them and use TrueCommand to initiate updates.
* TrueNAS 12 CORE/Enterprise - Supported after 12.0-U3. 12.0-U2.1 and older are missing some key metrics in the realtime stats (disk/network usage metrics in particular), but work otherwise.
* TrueNAS SCALE 21.03+ - Fully Supported (SCALE-20.12+ is supported excluding cluster functionality)
 
## To Update to this Release

{{< hint info >}}
**Prior To Updating**
 
As a best practice, TrueCommand admins should backup their instance's data directory before deploying TrueCommand updates. If issues arise after updating, admins can simply pull the previous TC docker image and redeploy with their previous data directory. 
{{< /hint >}}

{{< hint warning >}}
**Important Note for Upgrading from v1.3**
 
Updating from TrueCommand v1.3 to v2.0 or higher involves a database migration process. This preserves all configuration data, but does not preserve old performance statistics.
Additionally, it is not possible to roll back to TrueCommand v1.3 from v2.1. Please use caution when upgrading production TrueCommand systems. If necessary, run TrueCommand 1.3 and TrueCommand 2.1 in parallel for a transition period. Simply use the "ixsystems/truecommand:1.3.2" docker image to continue using that specific version of TrueCommand.
{{< /hint >}}
 
**Docker:** Re-run `docker pull ixsystems/truecommand` to fetch the latest version of TrueCommand, and then restart your docker instance.

**VM Image:** Either reboot the VM or run `systemctl restart truecommand.service`.
This will automatically fetch and start the latest Docker image of TrueCommand within your VM.

