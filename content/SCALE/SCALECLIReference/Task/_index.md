---
title: "Task"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI task namespace, used to access child namespaces and commands including cloud_sync, cron_job, replication, rsync, smart_test, and snapshot." 
weight: 55
draft: false
---

{{< toc >}}


{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/CLI/SCALECLIIntroduction.md" type="page" >}}

## Task Namespace

The **task** namespace has six child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to task configuration methods through the child namespaces and their commands.

You can enter commands from the main CLI prompt or from the **task** namespace prompts.

## Task Namespaces
The following articles provide information on **task** child authentication namespaces:

{{< children depth="2" description="true" >}}
