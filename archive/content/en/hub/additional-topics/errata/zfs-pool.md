---
title: "ZFS Pool Corruption Issue"
description: "Description of a ZFS pool corruption issue with resolutions."
tags: ["ZFS","errata"]
---

A problem was found in 2018 regarding ACL loss during replication and was filed with [Redmine Ticket 57888](https://redmine.ixsystems.com/issues/57888). This issue was fixed in 11.1-U8/11.2-U2 with this commit: https://github.com/freenas/os/commit/f1e4c4db88dddaa575066e3f3e7efa849df36efe.

Early in 2020, [Jira ticket NAS-102541](https://jira.ixsystems.com/browse/NAS-102541) was reported. After numerous efforts to reproduce the issue, it was determined that the previous fix caused another rarer, but more serious problem. When very specific conditions occurred, pool metadata on the receiving side could become corrupted. This would cause a system panic when attempting to access the file or scrub the pool. This issue was fixed in 11.3-U3 with this commit: https://github.com/freenas/os/commit/9eebe0c015d2c7ec852e1f9269f44fdb80563ed0.
