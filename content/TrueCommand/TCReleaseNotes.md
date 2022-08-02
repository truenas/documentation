---
title: TrueCommand 2.2 Release Notes
weight: 5
aliases:
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
| 2.3.0 | Code-freeze | TBD |
| 2.3.0 | Internal Testing Sprints | TBD |
| 2.3.0 | Tag | TBD |
| 2.3.0 | Release | TBD |

## 2.2

The TrueCommand team is pleased to announce [TrueCommand 2.2](https://www.truenas.com/docs/truecommand/) is now available. 

### 2.2 Changelog

### Improvement

[TC-2221](https://ixsystems.atlassian.net/browse/TC-2221) - Remove "Distributed" volume type </br>
[TC-2203](https://ixsystems.atlassian.net/browse/TC-2203) - make Dispersed the default cluster volume type </br>
[TC-2174](https://ixsystems.atlassian.net/browse/TC-2174) - update UI text for clustering feature </br>
[TC-2173](https://ixsystems.atlassian.net/browse/TC-2173) - UI fixes in add-cluster-volume </br>
[TC-2170](https://ixsystems.atlassian.net/browse/TC-2170) - Show loading spinner in add-cluster-volume </br>
[TC-2165](https://ixsystems.atlassian.net/browse/TC-2165) - add ACL template choices to cluster volume share creation view </br>
[TC-2162](https://ixsystems.atlassian.net/browse/TC-2162) - Remove glusterd from services UI </br>
[TC-2158](https://ixsystems.atlassian.net/browse/TC-2158) - display additional information about cluster volume subvols </br>
[TC-2148](https://ixsystems.atlassian.net/browse/TC-2148) - Restrict number of nodes allowed in Cluster </br>
[TC-2141](https://ixsystems.atlassian.net/browse/TC-2141) - add notice about entering clustered SMB mode </br>
[TC-2131](https://ixsystems.atlassian.net/browse/TC-2131) - Replace rpc/query with proper ping endpoint </br>
[TC-2122](https://ixsystems.atlassian.net/browse/TC-2122) - push release/\* images on PR merge </br>
[TC-2106](https://ixsystems.atlassian.net/browse/TC-2106) - split clustering into two wizards </br>
[TC-2099](https://ixsystems.atlassian.net/browse/TC-2099) - clustered SMB design polish </br>
[TC-2093](https://ixsystems.atlassian.net/browse/TC-2093) - Minor imporvements to MW connection down alert </br>
[TC-2080](https://ixsystems.atlassian.net/browse/TC-2080) - tap into gluster/fuse events to maintain a cluster cache </br>
[TC-2078](https://ixsystems.atlassian.net/browse/TC-2078) - remove code from previous clustering implementation </br>
[TC-2070](https://ixsystems.atlassian.net/browse/TC-2070) - Open File Explorer \(NAS Manager\) not available on connected SCALE systems </br>
[TC-2055](https://ixsystems.atlassian.net/browse/TC-2055) - Unit tests for shared utils </br>
[TC-2039](https://ixsystems.atlassian.net/browse/TC-2039) - endpoints for creating and deleting cluster volumes </br>
[TC-2035](https://ixsystems.atlassian.net/browse/TC-2035) - remove users/get\_data and users/set\_data </br>
[TC-2015](https://ixsystems.atlassian.net/browse/TC-2015) - Unit test for sessions module and its components </br>
[TC-2014](https://ixsystems.atlassian.net/browse/TC-2014) - Remove references to data/curve\_fit API </br>
[TC-2013](https://ixsystems.atlassian.net/browse/TC-2013) - Remove data/curve\_fit </br>
[TC-2010](https://ixsystems.atlassian.net/browse/TC-2010) - Unit test for the nas-users components </br>
[TC-2005](https://ixsystems.atlassian.net/browse/TC-2005) - Unit test for gluster and iscsi components </br>
[TC-2001](https://ixsystems.atlassian.net/browse/TC-2001) - Move functions into utility subpackage </br>
[TC-2000](https://ixsystems.atlassian.net/browse/TC-2000) - Move logger into subpackage </br>
[TC-1994](https://ixsystems.atlassian.net/browse/TC-1994) - Unit tests for hardware and alerts modules and their components </br>
[TC-1991](https://ixsystems.atlassian.net/browse/TC-1991) - Unit test for reporting module and its components </br>
[TC-1986](https://ixsystems.atlassian.net/browse/TC-1986) - Unit test for dashboard page and its components </br>
[TC-1981](https://ixsystems.atlassian.net/browse/TC-1981) - Unit test for the admin page </br>
[TC-1979](https://ixsystems.atlassian.net/browse/TC-1979) - Unit test for LDAP form and its test dialog </br>
[TC-1975](https://ixsystems.atlassian.net/browse/TC-1975) - Create API endpoint for starting the iSCSI service of system </br>
[TC-1974](https://ixsystems.atlassian.net/browse/TC-1974) - Setup unit testing for the UI </br>
[TC-1964](https://ixsystems.atlassian.net/browse/TC-1964) - Add more error checks, especially to JSON Marshal calls </br>
[TC-1960](https://ixsystems.atlassian.net/browse/TC-1960) - Refactor uploaders to use a single drag and drop component </br>
[TC-1959](https://ixsystems.atlassian.net/browse/TC-1959) - Rework NAS routines to handle messages directly as opposed to through a pool </br>
[TC-1958](https://ixsystems.atlassian.net/browse/TC-1958) - Avert potential mutex copying issues detected by govet </br>
[TC-1957](https://ixsystems.atlassian.net/browse/TC-1957) - Run "-race" on MW build and correct possible race conditions </br>
[TC-1956](https://ixsystems.atlassian.net/browse/TC-1956) - Improve LDAP form layout and UX </br>
[TC-1955](https://ixsystems.atlassian.net/browse/TC-1955) - Middleware LDAP test coverage </br>
[TC-1947](https://ixsystems.atlassian.net/browse/TC-1947) - UI Lint - add new eslint rules </br>
[TC-1946](https://ixsystems.atlassian.net/browse/TC-1946) - Break MW file structure into smaller packages </br>
[TC-1942](https://ixsystems.atlassian.net/browse/TC-1942) - Rework WS Management </br>
[TC-1933](https://ixsystems.atlassian.net/browse/TC-1933) - Use Jira ticket ID for docker images on GitHub Packages </br>
[TC-1931](https://ixsystems.atlassian.net/browse/TC-1931) - Disable PR merge until tests pass </br>
[TC-1929](https://ixsystems.atlassian.net/browse/TC-1929) - Tests: register all NASes at the beginning of the run </br>
[TC-1928](https://ixsystems.atlassian.net/browse/TC-1928) - Replace all directives and components prefix to `tc` </br>
[TC-1925](https://ixsystems.atlassian.net/browse/TC-1925) - Show tooltip for the disabled bricks in the Create Cluster Volume. </br>
[TC-1924](https://ixsystems.atlassian.net/browse/TC-1924) - Adjust log rotation to use max size </br>
[TC-1923](https://ixsystems.atlassian.net/browse/TC-1923) - Configure linting for the UI </br>
[TC-1920](https://ixsystems.atlassian.net/browse/TC-1920) - Make the UI dependencies version fixed. </br>
[TC-1918](https://ixsystems.atlassian.net/browse/TC-1918) - Middleware logging improvements </br>
[TC-1917](https://ixsystems.atlassian.net/browse/TC-1917) - Split chart generation to avoid frontend configuration in Middleware </br>
[TC-1915](https://ixsystems.atlassian.net/browse/TC-1915) - Move tests to readonly config file </br>
[TC-1914](https://ixsystems.atlassian.net/browse/TC-1914) - Add support for YAML configs </br>
[TC-1909](https://ixsystems.atlassian.net/browse/TC-1909) - Use events to get update on jobs </br>
[TC-1899](https://ixsystems.atlassian.net/browse/TC-1899) - Build TrueCommand on github PRs </br>
[TC-1897](https://ixsystems.atlassian.net/browse/TC-1897) - Redo init routines to avoid loops and encourage concurrency </br>
[TC-1896](https://ixsystems.atlassian.net/browse/TC-1896) - Move middleware-start to Middleware as bootstrap </br>
[TC-1889](https://ixsystems.atlassian.net/browse/TC-1889) - Fully lint Middleware and corresponding utilities </br>
[TC-1888](https://ixsystems.atlassian.net/browse/TC-1888) - Update UI dependencies </br>
[TC-1887](https://ixsystems.atlassian.net/browse/TC-1887) - Update Middleware dependencies </br>
[TC-1886](https://ixsystems.atlassian.net/browse/TC-1886) - Move wg-mgr to middleware </br>
[TC-1884](https://ixsystems.atlassian.net/browse/TC-1884) - Safety belt for Clustering feature </br>
[TC-1882](https://ixsystems.atlassian.net/browse/TC-1882) - Unify regular and SaaS build </br>
[TC-1878](https://ixsystems.atlassian.net/browse/TC-1878) - Add Experimental flags to Users/Groups\+SAML </br>
[TC-1874](https://ixsystems.atlassian.net/browse/TC-1874) - Functional tests for iscsivolumes/\* endpoints </br>
[TC-1873](https://ixsystems.atlassian.net/browse/TC-1873) - Functional tests for utilities/\* endpoints </br>
[TC-1872](https://ixsystems.atlassian.net/browse/TC-1872) - Functional tests for cluster.cluster\_\* MW endpoints </br>
[TC-1869](https://ixsystems.atlassian.net/browse/TC-1869) - Add a Confirmation screen when the cluster is successfully deleted </br>
[TC-1860](https://ixsystems.atlassian.net/browse/TC-1860) - Automated testing infrastructure </br>
[TC-1841](https://ixsystems.atlassian.net/browse/TC-1841) - Convert LogEntry to use unix for its timestamp </br>
[TC-1712](https://ixsystems.atlassian.net/browse/TC-1712) - Check iSCSI service status when creating a share </br>
[TC-1654](https://ixsystems.atlassian.net/browse/TC-1654) - Edit groups window does not have parity with System Edit Window </br>
[TC-1593](https://ixsystems.atlassian.net/browse/TC-1593) - Swap io/ioutil to other packages once 1.16 is widely adopted </br>
[TC-1461](https://ixsystems.atlassian.net/browse/TC-1461) - Admin menus have wasted space requiring scrolling </br>

### New Feature

[TC-2092](https://ixsystems.atlassian.net/browse/TC-2092) - add nas/smb\_presets API </br>
[TC-2084](https://ixsystems.atlassian.net/browse/TC-2084) - cluster/share\_\* endpoints for managing cluster volume shares </br>
[TC-2065](https://ixsystems.atlassian.net/browse/TC-2065) - automated tests for cluster/create and cluster/delete </br>
[TC-2062](https://ixsystems.atlassian.net/browse/TC-2062) - endpoint for deleting clusters </br>
[TC-2060](https://ixsystems.atlassian.net/browse/TC-2060) - endpoint for listing clusters </br>
[TC-2059](https://ixsystems.atlassian.net/browse/TC-2059) - add endpoint to configure cluster for smb sharing </br>
[TC-2057](https://ixsystems.atlassian.net/browse/TC-2057) - add cluster/public\_interface endpoint for UI </br>
[TC-2030](https://ixsystems.atlassian.net/browse/TC-2030) - Add MW support for interface.choices and gluster.peer.ips\_available </br>
[TC-2025](https://ixsystems.atlassian.net/browse/TC-2025) - Refactor audit logs to use sqlite for backend datastore </br>
[TC-2024](https://ixsystems.atlassian.net/browse/TC-2024) - Refactor notice management to use sqlite for backend datastore </br>
[TC-2023](https://ixsystems.atlassian.net/browse/TC-2023) - Write NAS stats to rrd </br>
[TC-2022](https://ixsystems.atlassian.net/browse/TC-2022) - Add logic for initializing rrds on startup </br>
[TC-2021](https://ixsystems.atlassian.net/browse/TC-2021) - Add migration logic for notices and audit logs </br>
[TC-2020](https://ixsystems.atlassian.net/browse/TC-2020) - Implement sqlite subpackage </br>
[TC-2019](https://ixsystems.atlassian.net/browse/TC-2019) - Implement rrd subpackage </br>
[TC-2018](https://ixsystems.atlassian.net/browse/TC-2018) - Add sqlite and rrdtool to docker images </br>
[TC-2017](https://ixsystems.atlassian.net/browse/TC-2017) - Shore up functional tests for audit logs </br>
[TC-2016](https://ixsystems.atlassian.net/browse/TC-2016) - Shore up functional tests for alert notices </br>
[TC-1995](https://ixsystems.atlassian.net/browse/TC-1995) - Design SMB Clustering Screens </br>
[TC-1984](https://ixsystems.atlassian.net/browse/TC-1984) - Validate uploaded certificates </br>
[TC-1978](https://ixsystems.atlassian.net/browse/TC-1978) - Sync system time via NTP with Chrony </br>
[TC-1922](https://ixsystems.atlassian.net/browse/TC-1922) - Add unit tests command to TC </br>
[TC-1898](https://ixsystems.atlassian.net/browse/TC-1898) - Create influx stress test </br>
[TC-1808](https://ixsystems.atlassian.net/browse/TC-1808) - endpoint for creating clusters </br>
[TC-1668](https://ixsystems.atlassian.net/browse/TC-1668) - Return to new User after creating a new team from the User Screen </br>

### Epic

[TC-1999](https://ixsystems.atlassian.net/browse/TC-1999) - Refactor MW dependencies into subpackages </br>
[TC-1890](https://ixsystems.atlassian.net/browse/TC-1890) - Refactor middleware </br>
[TC-1859](https://ixsystems.atlassian.net/browse/TC-1859) - Functional MW API tests </br>
[TC-1814](https://ixsystems.atlassian.net/browse/TC-1814) - Clustered SMB Support </br>

### Bug

[TC-2160](https://ixsystems.atlassian.net/browse/TC-2160) - Change email field back to optional in user-edit page </br>
[TC-2086](https://ixsystems.atlassian.net/browse/TC-2086) - Gross error when clicking on encrypted directory in file manager </br>
[TC-2081](https://ixsystems.atlassian.net/browse/TC-2081) - Absurdly high stats break data bars on dash/server page </br>
[TC-2075](https://ixsystems.atlassian.net/browse/TC-2075) - Attempting to delete file in filemanager on NAS Pool </br>
[TC-2074](https://ixsystems.atlassian.net/browse/TC-2074) - Emails On TrueCommand Cloud Are Not Going Through </br>
[TC-2073](https://ixsystems.atlassian.net/browse/TC-2073) - TrueCommand Invalid Queue Length API Error </br>
[TC-2063](https://ixsystems.atlassian.net/browse/TC-2063) - API call to import TLS cert fails with \{"error":"invalid character '\\n' in string literal"\} </br>
[TC-2058](https://ixsystems.atlassian.net/browse/TC-2058) - iSCSI manager does not create volume after completing </br>
[TC-2033](https://ixsystems.atlassian.net/browse/TC-2033) - Add System Button Screen Dimming Does Not Go Away </br>
[TC-1992](https://ixsystems.atlassian.net/browse/TC-1992) - Close down file watcher on shutdown </br>
[TC-1990](https://ixsystems.atlassian.net/browse/TC-1990) - Trouble With Deleting Alerts </br>
[TC-1988](https://ixsystems.atlassian.net/browse/TC-1988) - Do not fail deployment if Influx already setup </br>
[TC-1987](https://ixsystems.atlassian.net/browse/TC-1987) - IPv6 support for TC on-prem </br>
[TC-1985](https://ixsystems.atlassian.net/browse/TC-1985) - Handle instance where filewatcher util can fail on initialization </br>
[TC-1983](https://ixsystems.atlassian.net/browse/TC-1983) - Middleware API crash when i try verify email of my profile in truecommand docker version </br>
[TC-1982](https://ixsystems.atlassian.net/browse/TC-1982) - Cluster Volume not showing in UI </br>
[TC-1969](https://ixsystems.atlassian.net/browse/TC-1969) - Apply formatter for all html and ts files </br>
[TC-1967](https://ixsystems.atlassian.net/browse/TC-1967) - Deleting Certificate Authorities not working </br>
[TC-1966](https://ixsystems.atlassian.net/browse/TC-1966) - Removing Cluster Volume Hangs </br>
[TC-1952](https://ixsystems.atlassian.net/browse/TC-1952) - TrueCommand Cloud Customers Can Reach The Alert Services Page </br>
[TC-1948](https://ixsystems.atlassian.net/browse/TC-1948) - Removal of team in edit-user page is not working </br>
[TC-1943](https://ixsystems.atlassian.net/browse/TC-1943) - TrueCommand Certificate Issues </br>
[TC-1941](https://ixsystems.atlassian.net/browse/TC-1941) - Unable to open TrueNAS proxy interface on cloud </br>
[TC-1939](https://ixsystems.atlassian.net/browse/TC-1939) - Filewatcher does not readd deleted files </br>
[TC-1934](https://ixsystems.atlassian.net/browse/TC-1934) - Mailserver Test Button Lacks Meaningful Output </br>
[TC-1930](https://ixsystems.atlassian.net/browse/TC-1930) - Upgrade from TrueCommand 1.3 to 2.0/2.1 Breaks LDAP </br>
[TC-1921](https://ixsystems.atlassian.net/browse/TC-1921) - Imported Certificates Are Not Showing In The WebUI </br>
[TC-1919](https://ixsystems.atlassian.net/browse/TC-1919) - When creating a replicated volume , the option to specify the replica count doesn't come up </br>
[TC-1913](https://ixsystems.atlassian.net/browse/TC-1913) - TrueCommand does not start when pointed to a custom certificate </br>
[TC-1911](https://ixsystems.atlassian.net/browse/TC-1911) - Mismatch between ignore\_alerts in MW and UI </br>
[TC-1908](https://ixsystems.atlassian.net/browse/TC-1908) - Not deleting or reusing TSP </br>
[TC-1906](https://ixsystems.atlassian.net/browse/TC-1906) - Reset PW from Login Emailed Credentials not Recognized </br>
[TC-1881](https://ixsystems.atlassian.net/browse/TC-1881) - Alerts count on the System Dashcard are going up and they are now too big for the alert bubble </br>
[TC-1846](https://ixsystems.atlassian.net/browse/TC-1846) - Better handling of dropped connection to middleware </br>

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

## Known Issues

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| | | | | |

