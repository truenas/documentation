---
title: "The GUI Shell"
description: "Using the GUI Shell in TrueNAS."
weight: 50
---

The web interface has a web shell that makes it convenient to run command line tools from the web browser as the root user.

<img src="/images/TN-GuiShell.png">
<br><br>

The prompt shows that the current user is `root`, the hostname is `freenas`, and the current working directory is `~`, the home directory of the logged-in user.

The default shell for a new installations is `zsh`.
The default shell can be changed in **Accounts > Users**.
Click the three dot menu (Options) and **Edit** for the root user.
Choose the desired shell from the *Shell* drop-down and click **SAVE**.

The *Set font size* slider adjusts the size of text displayed in the Shell. Click **RESTORE DEFAULT** to reset the shell font and size.

Shell command history is available for the current session.
Use the up and down arrow keys to scroll through previously entered commands.
Edit the command if desired, then press <kbd>Enter</kbd> to re-enter the command.
Navigating away from the **Shell** screen clears the command history.

<kbd>Home</kbd>, <kbd>End</kbd>, and <kbd>Delete</kbd> keys are supported. Tab completion is also available. Type a few letters and press <kbd>Tab</kbd> to complete a command name or filename in the current directory. Right-clicking in the terminal window displays a reminder about using <kbd>Command+c</kbd> and <kbd>Command+v</kbd> or <kbd>Ctrl+Insert</kbd> and <kbd>Shift+Insert</kbd> for copy and paste operations in the shell.

Entering `exit` leaves the session.
Click **Reconnect** to start a new session.

Clicking other web interface menus closes the shell session and stops commands running in the shell. `tmux` provides the ability to detach shell sessions and then reattach to them later. Commands continue to run in a detached session.

{{% alert title="Recommended Browser" color="info" %}}
Not all shell features render correctly in Chrome. Firefox is the recommended browser when using the shell.
{{% /alert %}}

Most FreeBSD command line utilities are available in the Shell, including additional troubleshooting applications for TrueNAS Core and Enterprise.  
For TrueNAS Scale, most Linux command line utilities are available in the shell.
