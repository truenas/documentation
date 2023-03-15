---
title: "TrueNAS CLI Shell"
geekdocCollapseSection: true
description: "This article describes how to access TrueNAS CLI Shell." 
weight: 130
---

{{< toc >}}

The TrueNAS CLI Shell functions like a text-based version of the web UI. Users can enter commands to navigate to different namespaces (i.e. screens) within SCALE and perform actions. 

## Launch the TrueNAS CLI Shell

To open the TrueNAS CLI Shell, go to the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}) and enter `6`.

To close the TrueNAS CLI Shell, enter `quit` or `exit`.

![TrueNASCLIlaunch](/images/SCALE/TrueNASCLIlaunch.png "TrueNAS CLI Shell")

## Basic Functions

### Navigate Namespaces

The CLI attempts to autofill commands. When autofill options appear, use the up and down arrow keys to select them, then press <kbd>space</kbd> to apply them.

To go back one namespace, enter `..`.

## List Options

To list the available options for the current namespace, enter `ls`.

Enter `q` to close the list.

### Show Tooltips

After you navigate to a namespace that has available commands, you can view tooltips for using commands by entering `man [command]`

For example, `account user> man create`

Enter `q` to close the tooltip.

## Article Summaries

{{< children depth="2" description="true" >}}