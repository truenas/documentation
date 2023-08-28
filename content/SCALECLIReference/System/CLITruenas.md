---
title: "Truenas"
description: "Introduces the TrueNAS CLI truenas namespace that configures TrueNAS Enterprise related settings found in the API and web UI."
weight: 105
aliases:
draft: false
tags:
- scaleclisystem
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}
{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## TrueNAS Namespace

The **truenas** namespace has 5 commands, and is based on TrueNAS Enterprise functions found in the SCALE API and web UI.
It provides access to Enterprise customer management methods through the **truenas** namespace commands.

## TrueNAS Commands

The following **truenas** namespace commands allow you to accept the TrueNAS EULA, modify Enterprise customer information, and control system production status.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Accept_eula Command

The `accept_eula` command records agreement with the [TrueNAS SCALE End User License Agreement]({{< relref "/gettingstarted/useragreements/scaleeula.md" >}}).

{{< expand "Accepting the EULA" "v" >}}

#### Description

`accept_eula` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

`system truenas accept_eula`

{{< expand "Command Example" "v" >}}

```
system truenas accept_eula

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
