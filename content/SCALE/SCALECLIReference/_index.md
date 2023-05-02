---
title: "CLI Reference Guide"
geekdocCollapseSection: true
description: "This section documents the namespaces, commands, and options available in the SCALE CLI."
weight: 45
aliases:
 - /scale/scaletutorials/truenasclishell/
---

{{< toc >}}

{{< hint type=tip >}}
The SCALE CLI guide is a work in progress!
New namespace and command documentation is continually added and maintained, so check back here often to see what's new!
{{< /hint >}}

Welcome to the TrueNAS SCALE Command Line Interface (CLI) guide!
The TrueNAS SCALE CLI functions like a text-based version of the web UI.
Users can enter commands to go to different namespaces (i.e. screens) within SCALE and perform actions.

## Launch the TrueNAS CLI Shell

To open the TrueNAS CLI shell, go to the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}) and enter `6`.

To close the TrueNAS CLI shell, enter `quit` or `exit`.

![TrueNASCLIlaunch](/images/SCALE/TrueNASCLIlaunch.png "TrueNAS CLI Shell")

To access the TrueNAS CLI when the Linux shell is active, enter `cli`.

## Basic Functions

### Moving through Namespaces

The CLI attempts to autofill commands.
When autofill options appear, use the up and down arrow keys to select them, then press <kbd>space</kbd> to apply them.

To go back one namespace, enter `..`.

Commands can be entered directly without stopping in a namespace.
For example, entering `network configuration` opens the network configuration namespace and then entering `config` shows the current settings.
Or you can enter `network configuration config` to show the current settings without moving between namespaces.

## List Options

To list the available options for the current namespace, enter `ls`.

Enter `q` to close the list.

### Show Tooltips

After you go to a namespace that has available commands, you can view tooltips for using commands by entering `man [command]`

For example, `account user` then `man create`

Enter `q` to close the tooltip.

## Namespace Documentation

{{< children depth="2" description="true" >}}
