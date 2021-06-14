---
title: "Shell"
geekdocCollapseSection: true
weight: 60
---

The SCALE shell is a convenient means to run command lines tools, configure different system settings, or find log files or debut information.
The shell opens with the root user logged in.

![Shell](/images/SCALE/shell.png "SCALE Shell")

The *Set font size slider* adjusts the size of text displayed in the shell.
Click *RESTORE DEFAULT* to reset the shell font and size.

Shell command history is available for the current session.
Use the <kbd>Up</kbd> and <kbd>Down</kbd> arrow keys to scroll through previously entered commands.
Edit the command if desired, then press <kbd>Enter</kbd> to re-enter the command.
Browsing away from the **Shell** screen clears the command history.

<kbd>Home</kbd>, <kbd>End</kbd>, and <kbd>Delete</kbd> keys are supported.
Tab completion is also available.
Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory.
Right-clicking in the terminal window displays a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations in the shell.

Entering `exit` leaves the session.
Click *Reconnect* to start a new session.

## Default Shell

Clicking other web interface menus closes the shell session and stops commands running in the shell.
[zsh](https://www.zsh.org/) is the default shell, but this is changed by editing the *root* user in **Credentials > Local Users** and choosing a different option in the *Shell* drop down. Most Linux command line utilities are available in the shell.

tmux provides the ability to detach shell sessions and then reattach to them later.
Commands continue to run in a detached session.

## Experimental CLI

Using the experimental SCALE command line interface (CLI) to directly configure different SCALE features.

{{< hint danger >}}
This feature is experimental and still in active development.
No bug reports or feature requests are being accepted at this time.
{{< /hint >}}

To switch to the experimental CLI, enter `cli`.
Basic commands are:

* `..`			- up one level
* `exit`		- exit the CLI
* `ls`			- list the available directories and commands
* `?` or `help` - list the built-in commands

The CLI features an auto-suggest mechanism for commands.
Begin typing a command and the CLI shows a list of all matching commands.

![ScaleCLIAutocomplete](/images/SCALE/ScaleCLIAutocomplete.png "CLI Autocomplete")

The CLI is intended to be an alternative method to configuring TrueNAS features.
Because of the variety of available features and configuration, CLI-specific instructions are included in their respective section of the UI documentation.