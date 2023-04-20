---
title: "Using Shell"
description: "This article describes how to use the shell on TrueNAS CORE."
weight: 30
Aliases: /core/administration/shell/
tags:
- coreshell
---

{{< toc >}}


The web interface has a web shell that makes it convenient to run command line tools from the web browser as the root user.

![UIShell](/images/CORE/12.0/UIShell.png "TrueNAS Shell")

The prompt shows that the current user is *root@truenas*, the host name is *truenas*, and the current working directory is **~**, where *root* is the user, *truenas* is the home directory of the logged-in user, and the sysmbol between the square brackets is the working directory.

The default shell for a new installations is zsh. See [Changing the Default Shell]({{< relref "/CORE/CORETutorials/ChangingDefaultShell.md" >}}) for instructions on changing to a different shell.

{{< hint type=note >}}
Not all shell features render correctly in Chrome. Firefox is the recommended browser when using the shell.
{{< /hint >}}

Most FreeBSD command line utilities are available in the Shell, including additional troubleshooting applications for TrueNAS Core and Enterprise.  
For TrueNAS SCALE, most Linux command line utilities are available in the shell.

Shell command history is available for the current session.

See [Shell]({{< relref "/CORE/UIReference/Shell.md" >}}) for information on the shell UI screen.

## Using the Keyboard in Shell

Use the keyboard <kbd>Up</kbd> and <kbd>Down</kbd> arrow keys to scroll through previously entered commands.

After you edit a command press <kbd>Enter</kbd> to re-enter the command.

The keyboard <kbd>Home</kbd>, <kbd>End</kbd>, and <kbd>Delete</kbd> keys are supported.

Using keyboard <kbd>Tab</kbd> completion is also available. 
Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory.

Right-click in the terminal window to display a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations in the shell.

## Clearing Shell or Exiting

Navigating away from the **Shell** screen clears the command history.

Entering the CLI command `exit` leaves the session.

Clicking other web interface menus closes the shell session and stops commands running in the shell.

## Starting a New Session

Click **Reconnect** to start a new session.

## Detaching and Reattaching Shell Sessions

The CLI `tmux` command provides the ability to detach shell sessions and then reattach to them later.
Commands continue to run in a detached session.

{{< taglist tag="coreshell" limit="10" >}}
