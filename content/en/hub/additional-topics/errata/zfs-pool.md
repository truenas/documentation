---
title: "ZFS Pool Corruption Issue"
description: "Notice of a ZFS Pool Corruption Issue"
---

A problem was found in 2018 regarding ACL loss during replication and was filed with [Redmine Ticket #57888](https://redmine.ixsystems.com/issues/57888).  This issue was fixed around 11.1-U8/11.2-U2 with the commit: https://github.com/freenas/os/commit/f1e4c4db88dddaa575066e3f3e7efa849df36efe.

Early in 2020, [Jira ticket NAS-102541](https://jira.ixsystems.com/browse/NAS-102541) was reported.  After a long effort to reproduce it, it was finally found that the previous fix caused another rarer but more serious problem, corrupting pool metadata on receiving side under certain condition.  This would cause a panic when attempting to access the file or scrub the pool.  It was fixed in 11.3-U3 with the commit: https://github.com/freenas/os/commit/9eebe0c015d2c7ec852e1f9269f44fdb80563ed0.
