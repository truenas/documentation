---
title: Developer’s Notes
description: Running updates about TrueCommand Nightly status and current issues.
tags: [“TrueCommand”]
weight: 30
---

#### Recent Updates
> 02/25/2021 - Initial nightly image release for TrueCommand 2.0

## System Requirements

* Docker Environment (64-bit AMD or Intel system)
* 2GB of RAM (recommended minimum)
* 20GB of disk space (recommended minimum)

## Nightly Docker Images

Nightly images for TrueCommand are built every 24 hours. These images are automatically pushed to the “nightly” tag on DockerHub if they pass the automated QA testing procedure.

Download information:

* [DockerHub] (https://hub.docker.com/r/ixsystems/truecommand)
* [Example in Documentation](https://www.truenas.com/docs/truecommand/installupdate/install/), replace “latest” with “nightly” in the docker pull commands.

## Current Status

The nightly images are always considered a “work-in-progress” toward the next release of TrueCommand. They should be suitable for adventurous users and developers who are not afraid of diagnosing issues and opening up bug reports with the TrueCommand developers.

* Ticket Tracker: [Jira](https://jira.ixsystems.com/projects/TC)

**Current Nightly Version: 2.0-Master**

#### Summary of changes in upcoming version 2.0

Version 2.0 is a complete rewrite of the middleware and database used in TrueCommand, as well as a complete re-integration with the TrueNAS middleware for statistics and analysis. Early tests indicate a sharp improvement in the performance of the system (details below), and some of the new features that this enables in TrueCommand 2.0 are:

* NAS metrics and state updates in realtime - no more 30s delay!
* The “Storage Explorer” interface lets you inspect the datasets and files on your storage pools, while also giving you easy access to creating and managing snapshots, shares, zvols, and more.
* The “ISCSI Manager” is a new dashboard system that lets you view and create ISCSI volumes in bulk across your entire NAS fleet.
* “Cluster Volumes” is a new dashboard system that lets you view and create clustered datasets which span  across multiple TrueNAS SCALE systems in your fleet.
* Marked performance improvements:
  * Docker image ~50% smaller
  * Network bandwidth usage ~40% less
  * CPU usage ~5% lower
  * Database growth rate ~99% lower

Table of features and current status (Timestamp references when the item status was last updated):

| Feature | Status | Timestamp | Description |
|:---:|:---:|:---:|:---:|
|Users | **OK** | 02/26/2021 | Create and manage users and user permissions|
|Teams| **OK** | 02/26/2021 | Create and manage teams of users and permissions|
|Systems| **OK** | 02/26/2021 | Register NAS’s and maintain connections/status info |
|Alert Rules|**OK**|02/26/2021 | Create and manage custom alert rules |
|Alert Notices| **OK** | 02/26/2021|Rolling feed of alerts that have been triggered with comment and resolution systems|
|Alert Services| **Review** | 02/26/2021| Submission of new alert notices to external notification systems (email/pagerduty)|
|Reports|**OK**|02/26/2021| Historical charts of system information |
|Logs|**OK**|02/26/2021| Security logs of changes from users |
|System Administration|**OK**|02/26/2021| Configuration of TrueCommand system (SSL certificates, licensing, AD/LDAP, etc)|
|Dashboard|**In Progress**|02/26/2021|Top-level look at NAS state and information|
|NAS Explorer|**Review**|02/26/2021| Detailed inspection/management of storage on individual NAS’s|
|Cluster Volumes|**In Progress**|02/26/2021|Create and manage clusters of TrueNAS SCALE systems (glusterfs)|
|ISCSI Manager|**Review**|02/26/2021|Create and manage ISCSI volumes in bulk|

#### Migration Notice
Due to the change in database between the 1.x and 2.x versions of TrueCommand, there is an automatic database migration routine that will run the first time you start up the v2.0 image of TrueCommand. 

Information Migrated:

* User accounts
* Teams
* System Registrations
* System Groups
* TrueCommand System Configuration
* NAS configuration backups

Information **NOT** migrated due to drastic changes in how these are performed now.

* Historical metrics from NAS’s
* Alerts (both rules and notices)
* User-defined reports
* Security Logs

***WARNING***: 
If you are using an LDAP-enabled system (non-Cloud) for user logins, please be sure to have your non-LDAP admin user credentials handy before updating. The LDAP integration systems between 1.x and 2.x are different, and while the settings are migrated over as much as possible, you will still want to login and verify that everything is still configured properly.

#### Minimum Supported TrueNAS Versions
Due to the changes in integrating with the TrueNAS middleware, the minimum version for full-support of functionality has changed with TrueCommand 2.0:

* FreeNAS/TrueNAS 11.3 series - No longer supported on self-hosted instances of TC. Does not provide realtime statistics or storage information, but you can still connect to them and use TrueCommand to initiate updates. TrueCommand Cloud has never supported the 11.3 series.
* TrueNAS 12 CORE/Enterprise - Supported after 12.0-U3. 12.0-U2.1 and older are missing some key metrics in the realtime stats (disk/network usage metrics in particular), but work otherwise.
TrueNAS SCALE - Fully Supported

## Detailed look at new features

#### Storage Explorer
Coming soon!

#### ISCSI Dashboard
Coming soon!

#### Cluster Dashboard
Coming soon!
