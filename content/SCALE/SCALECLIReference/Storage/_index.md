---
title: "Storage"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI storage namespace and provides access to  child namespaces and commands including dataset, disk, enclosure, filesystem, pool, resilver, scrub, snapshot, and vmware." 
weight: 45
draft: false
---

{{< toc >}}


{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/CLI/SCALECLIIntroduction.md" type="page" >}}

## Storage Namespace

The **storage** namespace has nine child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to storage configuration methods through the child namespaces and their commands.

You can enter commands from the main CLI prompt or from the **storage** namespace prompts.

## Storage Namespaces
The following articles provide information on **storage** child namespaces:

{{< children depth="2" description="true" >}}
