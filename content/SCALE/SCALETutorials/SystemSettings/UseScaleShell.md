---
title: "Using Shell"
description: "Provides information on using the TrueNAS shell."
weight: 60
aliases: /scale/scaleuireference/systemsettings/shellscale/
tags:
- shell
keywords:
- enterprise data storage
- nas data storage
---

The TrueNAS **Shell** is convenient for running command line tools, configuring different system settings, or finding log files and debug information.

{{< hint type=warning >}}
Warning! The supported mechanisms for making configuration changes are the TrueNAS WebUI and API exclusively.
All other are not supported and result in undefined behavior that can result in system failure!
{{< /hint >}}

{{< trueimage src="/images/SCALE/CLI/SystemShellSCALE.png" alt="Shell Screen" id="Shell Screen" >}}

The **Set font size** slider adjusts the **Shell** displayed text size.
**Restore Default** resets the font size to default.

The **Shell** stores the command history for the current session.

Leaving the **Shell** screen clears the command history.

Click **Reconnect** to start a new session.

## Navigating In Shell
This section provides keyboard navigation shortcuts you can use in Shell.

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

## Changing the Default Shell

[zsh](https://www.zsh.org/) is the default shell, but you can change this by going to **Credentials > Users**.
Select the admin or other user to expand it.
Click **Edit** to open the **Edit User** screen.
Scroll down to **Shell** and select a different option from the dropdown list.
Options are **nologin**, **TrueNAS CLI**, **TrueNAS Console**, **sh**, **bash**, **rbash**, **dash**, **tmux**, and **zsh**.
Click **Save**.

Admin users can set the Shell to default to the TrueNAS Console by selecting **TrueNAS Console** in **Shell** on the **Edit User** screen.

Clicking other TrueNAS UI menus options closes the shell session and stops commands running in the **Shell** screen.

[Tmux](https://github.com/tmux/tmux/wiki/) allows you to detach sessions in **Shell** and then reattach them later.
Commands continue to run in a detached session.