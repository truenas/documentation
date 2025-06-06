---
title: "Migrating from CORE"
description: "Instructions for migrating from FreeBSD TrueNAS CORE to Linux-based TrueNAS versions."
geekdocCollapseSection: true
weight: 40
aliases:
 - /scale/gettingstarted/migrate/scalezfsflagremoval/
 - /scale/gettingstarted/migrate/componentnaming/
 - /scale/gettingstarted/migrate/migratingfromcore/
 - /scale/gettingstarted/migrate/migrateprep/
tags:
- migrate
related: false
keywords:
- nas system storage
- nas data storage solution
- nas storage software
- enterprise nas solution
- data migration
---

On March 20, 2024, the TrueNAS team [announced](https://www.truenas.com/blog/truenas-core-13-3-plans/) that the FreeBSD-based TrueNAS CORE platform has entered "sustaining engineering phase within the TrueNAS project."

With this transition, TrueNAS 13.0 continues to receive bug fixes related to stability and security.
New feature development and component improvement continues on Linux-based TrueNAS versions.

TrueNAS 13.3-U1.2, released April 29, 2025, is the final release for the TrueNAS CORE 13.3 software train.
We encourage TrueNAS 13.3 users to explore our newest TrueNAS Community Edition (25.04 or later) solutions.
If any security or data integrity issues do arise in 13,3-U1.2, we will notify the Community of these.
The expected resolution will be in the TrueNAS Community Edition.

Users looking for new feature development can sidegrade to the Linux-based TrueNAS platform at any time, preserving data and essential NAS functionality.

{{< include file="/static/includes/MigrateCOREtoSCALE24_04.md" >}}

<div class="noprint">

## Contents

{{< children depth="1" description="true" >}}

</div>
