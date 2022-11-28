---
title: "Shell"
description: "This article describes the web interface for the web shell on TrueNAS CORE."
weight: 140
tags:
- coreshell
---

The web interface has a web shell that makes it convenient to run command line tools from the web browser as the root user.

![UIShell](/images/CORE/12.0/UIShell.png "TrueNAS Shell")

The prompt shows that the current user is *root@truenas*, the host name is *truenas*, and the current working directory is **~**, where *root* is the user, *truenas* is the home directory of the logged-in user, and the sysmbol between the square brackets is the working directory.


The **Shell** screen includes three UI elements:
| UI Element | Description |
|------------|-------------|
| **Set font size** slider | Adjusts the size of text displayed in the shell main area. |
| **RESTORE DEFAULT** | Resets the shell font and size. |
| **?** | Displays the shell tooltip with helpful information about the screen. For example, <kbd>CTRL+C</kbd> kills a foreground process. It also lists built-in utilities such as: **Iperf**, **Netperf**, **IOzone**, **arcsat**, **tw_cli**, **MegaCli**, **freenas-debug**, **tmux**, and **Dmidecode**. |

Shell command history is available for the current session.

The default shell for a new installations is zsh. See [Changing the Default Shell]({{< relref "/CORE/CORETutorials/ChangingDefaultShell.md" >}}) for instructions on changing to a different shell.

See [Using Shell]({{< relref "/CORE/CORETutorials/UsingShell.md" >}}) for information on navigating in shell, typing commands, and other general instructions.

{{< taglist tag="coreshell" limit="10" >}}
