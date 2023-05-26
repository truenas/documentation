---
title: "Network"
geekdocCollapseSection: true
description: "This article introduces the TrueNAS CLI network namespace, used to configure network settings found in the API and web UI." 
weight: 30
draft: false
---

{{< toc >}}



{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## Network Namespace

The **network** namespace has seven child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to network configuration methods through the child namespaces and their command.

You can enter commands from the main CLI prompt or from the **network** namespace prompts.

## Network Child Namespace Contents
The following articles provide information on **network** child authentication namespaces:

{{< children depth="2" description="true" >}}
