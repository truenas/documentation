---
title: "Using Shell"
description: "This article provides information on using SCALE **Shell**."
weight: 60
alias: /scale/scaleuireference/systemsettings/shellscale/
tags:
 - scaleshell
---

The SCALE **Shell** is convenient for running command lines tools, configuring different system settings, or finding log files and debug information.
The **Shell** screen opens with the root user logged in.

{{< hint danger >}}
Warning! The supported mechanisms for making configuration changes are the TrueNAS WebUI, CLI, and API exclusively. 
All other are not supported and result in undefined behavior that can result in system failure! 
{{< /hint >}}

![SystemShellSCALE](/images/SCALE/22.02/SystemShellSCALE.png "SCALE Shell")

The **Set font size** slider adjusts the **Shell** displayed text size.
**Restore Default** resets the font size to default.

The **Shell** stores the command history for the current session.

Leaving the **Shell** screen clears the command history.

Click **Reconnect** to start a new session.
## Navigating In Shell
This section provides keyboard navigation shortcuts you can uses in Shell.
{{< expand "Click Here for More Information" "v" >}}
| Action | Keyboard/ <br>Command | Description |
|--------|----------|-------------|
| Scroll up | Up arrow <span class="material-icons">expand_less</span> | Scroll up through previous commands. |
| Scroll down | Down arrow <span class="material-icons">expand_more</span> | Scroll down through following commands. |
| Re-enter command | <kbd>Enter</kbd> | After entering a command, press <kbd>Enter</kbd> to re-enter the command. |
|  | <kbd>Home</kbd> | Moves the cursor to the top of the screen entries and results. |
|  | <kbd>End</kbd> | Moves the cursor to the bottom of the screen command entries and results. |
|  | <kbd>Delete</kbd> | Deletes what you highlight. |
|  | <kbd>Tab</kbd> | Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory. |
| right-click |  | Right-clicking in the terminal window displays a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations. |
|  | `exit` | Entering `exit` leaves the session. |
|  | <kbd>Ctrl+Insert</kbd> | Enter <kbd>Ctrl+Insert</kbd> to copy highlighted text in Shell. |
|  | <kbd>Shift+Insert</kbd> | Enter <kbd>Shift+Insert</kbd> to paste copied text in Shell. |
|  | <kbd>Ctrl+c</kbd> | Enter <kbd>Ctrl+c</kbd> to kill a process running in Shell. For example, the `ping` command. |
{{< /expand >}}
## Changing the Default Shell

Clicking other web interface menus closes the shell session and stops commands running in the **Shell** screen.

[zsh](https://www.zsh.org/) is the default **Shell**, but you can change this by editing the **root** user. 
Go to **Credentials > Local Users** and expand the **root** user.
Click **Edit** to open the **Edit User** screen.
Scroll down to **Shell** and select a different option from the dropdown list. Most Linux command-line utilities are available in the **Shell**. 
Click **Save**.

[Tmux](https://github.com/tmux/tmux/wiki/) allows you to detach  sessions in **Shell** and then reattach them later.
Commands continue to run in a detached session.

## Experimental CLI

The experimental SCALE command-line interface (CLI) lets you directly configure SCALE features.

{{< hint danger >}}
SCALE CLI is experimental and still in active development.
We are not accepting bug reports or feature requests at this time.
{{< /hint >}}

To switch to the experimental CLI, enter `cli`.
{{< expand "Basic commands" "v" >}}

| Command | Description |
|---------|-------------|
| `..` | up one level |
| `exit` | exit the CLI |
| `ls` | list the available directories and commands |
| `?` or `help` | list the built-in commands |
{{< /expand >}}
The CLI features an auto-suggest mechanism for commands.
When you begin typing a command, the CLI shows a list of all matching commands.

![ScaleCLIAutocomplete](/images/SCALE/ScaleCLIAutocomplete.png "CLI Autocomplete")

We intend the CLI to be an alternative method for configuring TrueNAS features.
Because of the variety of available features and configurations, we include CLI-specific instructions in their respective UI documentation sections.

{{< taglist tag="scaleshell" limit="10" >}}