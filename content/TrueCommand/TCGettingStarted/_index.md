---
title: "Getting Started"
description: "Deployment requirements and installation steps for TrueCommand."
weight: 10
geekdocCollapseSection: true
related: false
cascade:
  - _target:
    book: "TrueCmdGSG"
---

Thank you for trying TrueCommand!
This Guide walks you through the initial installation and set up of TrueCommand.

## Deployment Requirements

Deploying a TrueCommand container requires these minimum specifications:

* Docker Environment (64-bit AMD or Intel system)
* 2GB of RAM (recommended minimum)
* 20GB of disk space (recommended minimum)

Deploying TrueCommand Cloud requires:

* WireGuard for secure VPN access to the TrueCommand instance.
* An [iXsystems Portal](https://portal.ixsystems.com/) account.
* A valid credit card when purchasing a TrueCommand license.

## Minimum Supported TrueNAS Versions for System Connections

Due to the changes in integrating with the TrueNAS middleware, the minimum version for full-support of functionality has changed with TrueCommand 2.0:

* FreeNAS/TrueNAS 11.3 series - No longer supported. 
  Does not provide realtime statistics or storage information, but you can still connect to them and use TrueCommand to initiate updates.

* TrueNAS 12 CORE/Enterprise - Supported after 12.0-U3. 12.0-U2.1 and older are missing some key metrics in the realtime stats (disk/network usage metrics in particular), but work otherwise.

  We recommend upgrading to the latest publicly available release of CORE to migrate from deprecated services and features and access improvements in the CORE platform.

* TrueNAS SCALE 21.03+ - Fully Supported (SCALE-20.12+ is supported excluding cluster functionality). We recommend upgrading to the lastest publicly available release of SCALE.

  Due to changes in supported services and features, upgrade to Bluefin (22.12.4 latest release) to migrate from deprecated services, then upgrade to Cobia (23.10.0).

## Migration Notice

{{< hint type=important >}}
Due to the change in database between the 1.x and 2.x versions of TrueCommand, there is an automatic database migration routine that runs the first time you start up the v2.0 image of TrueCommand.

Information Migrated:
* User accounts
* Teams
* System Registrations
* System Groups
* TrueCommand System Configuration
* NAS configuration backups

Information *not* migrated due to drastic changes in how these are performed now:
* Historical metrics from NAS systems
* Alerts (both rules and notices)
* User-defined reports
* Security Logs

When you are using an LDAP-enabled system for user logins, have your non-LDAP admin user credentials at hand before updating.
The LDAP integration systems between 1.x and 2.x are different, and you need to login to verify that everything is still configured properly after the migration.
{{< /hint >}}

## Getting Started Articles

{{< children description="true" depth="2" >}}
