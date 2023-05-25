---
title: "Using Shell"
description: "This article provides information on using SCALE Shell."
weight: 60
alias: /scale/scaleuireference/systemsettings/shellscale/
tags:
- scaleshell
- scaleusers
---

The SCALE **Shell** is convenient for running command lines tools, configuring different system settings, or finding log files and debug information.
When **Shell** setting is **TrueNAS CLI** screen opens in the SCALE CLI.

If logged in as the root user, the **Shell** screen opens at the root prompt. To enter the SCALE CLI, enter `cli` at the root prompt. 
See [SCALE CLI Reference Guide]({{< relref "/SCALE/SCALECLIReference/_index.md" >}}) for more information on using the SCALE CLI.

{{< hint type=warning >}}
Warning! The supported mechanisms for making configuration changes are the TrueNAS WebUI, CLI, and API exclusively. 
All other are not supported and result in undefined behavior that can result in system failure! 
{{< /hint >}}

{{< trueimage src="/images/SCALE/22.12/SystemShellSCALE.png" alt="Shell Screen" id="1 Shell Screen" >}}

The **Set font size** slider adjusts the **Shell** displayed text size.
**Restore Default** resets the font size to default.

The **Shell** stores the command history for the current session.

Leaving the **Shell** screen clears the command history.

Click **Reconnect** to start a new session.

## Navigating In Shell
This section provides keyboard navigation shortcuts you can uses in Shell.
{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Action | Keyboard/Command | Description |
|--------|------------------|-------------|
| Scroll up | Up arrow <span class="material-icons">expand_less</span> | Scroll up through previous commands. |
| Scroll down | Down arrow <span class="material-icons">expand_more</span> | Scroll down through following commands. |
| Re-enter command | <kbd>Enter</kbd> | After entering a command, press <kbd>Enter</kbd> to re-enter the command. |
| Top of screen | <kbd>Home</kbd> | Moves the cursor to the top of the screen entries and results. |
| Bottom of screen | <kbd>End</kbd> | Moves the cursor to the bottom of the screen command entries and results. |
| Delete | <kbd>Delete</kbd> | Deletes what you highlight. |
| Auto-fill text | <kbd>Tab</kbd> | Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory. |
| right-click |  | Right-clicking in the terminal window displays a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations. |
| Exit to root prompt | `exit` | Entering `exit` leaves the session. |
| Copy text | <kbd>Ctrl+Insert</kbd> | Enter <kbd>Ctrl+Insert</kbd> to copy highlighted text in Shell. |
| Paste text | <kbd>Shift+Insert</kbd> | Enter <kbd>Shift+Insert</kbd> to paste copied text in Shell. |
| Kill running process | <kbd>Ctrl+c</kbd> | Enter <kbd>Ctrl+c</kbd> to kill a process running in Shell. For example, the `ping` command. |
{{< /truetable >}}
{{< /expand >}}

## Changing the Default Shell
Admin users can set the Shell to default to the SCALE CLI by selecting **TrueNAS CLI** in **Shell** on the **Edit User** screen. 
To change the Shell to default to the Console Setup Menu, select **TrueNAS Console** in **Shell** on the **Edit User** screen.

Clicking other SCALE UI menus options closes the shell session and stops commands running in the **Shell** screen.

[zsh](https://www.zsh.org/) is the default shell, but you can change this by going to **Credentials > Local Users**. 
Select the admin or other user to expand it. 
Click **Edit** to open the **Edit User** screen.
Scroll down to **Shell** and select a different option from the dropdown list. Most Linux command-line utilities are available in the **Shell**. 
Click **Save**.

[Tmux](https://github.com/tmux/tmux/wiki/) allows you to detach  sessions in **Shell** and then reattach them later.
Commands continue to run in a detached session.

## SCALE CLI

The new SCALE command-line interface (CLI) lets you directly configure SCALE features using namespaces and commands based on the SCALE API.

{{< hint type=warning >}}
SCALE CLI is still in active development.
We are not accepting bug reports or feature requests at this time.
{{< /hint >}}

See [SCALE CLI Reference Guide]({{< relref "/SCALE/SCALECLIReference/_index.md" >}}) for more information on using the SCALE CLI.

We intend the CLI to be an alternative method for configuring TrueNAS features.
Because of the variety of available features and configurations, we include CLI-specific instructions in their respective UI documentation sections.

{{< taglist tag="scaleshell" limit="10" >}}
{{< taglist tag="scalecli" limit="10" title="Related SCALE CLI Articles" >}}