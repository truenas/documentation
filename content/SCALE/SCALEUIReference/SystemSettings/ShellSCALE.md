---
title: "Shell"
geekdocCollapseSection: true
weight: 60
---

The SCALE **Shell** is convenient for running command lines tools, configuring different system settings, or finding log files and debug information.
The **Shell** screen opens with the root user logged in.

{{< hint danger >}}
**Warning: the supported mechanisms for making configuration changes are the TrueNAS WebUI, CLI, and API exclusively. ALL OTHERS ARE NOT SUPPORTED AND WILL RESULT IN UNDEFINED BEHAVIOR AND MAY RESULT IN SYSTEM FAILURE.**
{{< /hint >}}

![Shell](/images/SCALE/shell.png "SCALE Shell")

The **Set font size** slider adjusts the **Shell** displayed text size.
Click *RESTORE DEFAULT* to reset the **Shell** font size.

The **Shell** stores the command history for the current session.
Use the keyboard up and down arrow keys to scroll through previously entered commands.
Edit the command if desired, then press <kbd>Enter</kbd> to re-enter the command.
Leaving the **Shell** screen clears the command history.

The **Shell* supports the <kbd>Home</kbd>, <kbd>End</kbd>, and <kbd>Delete</kbd> keys, as well as <kbd>Tab</kbd> completion.
Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory.
Right-clicking in the terminal window displays a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations in the **Shell**.

Entering `exit` leaves the session.
Click **Reconnect** to start a new session.

## Default Shell

Clicking other web interface menus closes the shell session and stops commands running in the **Shell** screen.
[zsh](https://www.zsh.org/) is the default **Shell**, but you can change this by editing the *root* user in **Credentials > Local Users** and choosing a different option in the *Shell* drop-down. Most Linux command-line utilities are available in the **Shell**.

[Tmux](https://github.com/tmux/tmux/wiki/) allows you to detach  sessions in **Shell** and then reattach them later.
Commands continue to run in a detached session.

## Experimental CLI

The experimental SCALE command-line interface (CLI) lets you directly configure SCALE features.

{{< hint danger >}}
SCALE CLI is experimental and still in active development.
We are not accepting bug reports or feature requests at this time.
{{< /hint >}}

To switch to the experimental CLI, enter `cli`.
Basic commands are:

* `..`			- up one level
* `exit`		- exit the CLI
* `ls`			- list the available directories and commands
* `?` or `help` - list the built-in commands

The CLI features an auto-suggest mechanism for commands.
When you begin typing a command, the CLI shows a list of all matching commands.

![ScaleCLIAutocomplete](/images/SCALE/ScaleCLIAutocomplete.png "CLI Autocomplete")

We intend the CLI to be an alternative method for configuring TrueNAS features.
Because of the variety of available features and configurations, we include CLI-specific instructions in their respective UI documentation sections.
