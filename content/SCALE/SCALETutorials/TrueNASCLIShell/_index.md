---
title: "TrueNAS CLI Shell"
geekdocCollapseSection: true
description: "This article describes how to access TrueNAS CLI Shell." 
weight: 130
---

{{< toc >}}

The TrueNAS CLI Shell functions like a text-based version of the web UI. Users can enter commands to "navigate" to different namespaces (i.e. screens) within SCALE and perform actions. This article covers basic operations like setting up networking, performing updates, and listing storage pools/datasets.

## Launch the TrueNAS CLI Shell

To open the TrueNAS CLI Shell, go to the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}) and enter `6`.

![TrueNASCLIlaunch](/images/SCALE/TrueNASCLIlaunch.png "TrueNAS CLI Shell")

## Basic Functions

To list the available options for the current namespace, enter `ls`.

After you navigate to a namespace that has available commands, you can view tooltips for using commands by entering `man [command]`

For example, `account user> man create`

To go back one namespace, enter `..`.

To close the TrueNAS CLI Shell, enter `quit` or `exit`.

## Article Summaries

{{< children depth="2" description="true" >}}