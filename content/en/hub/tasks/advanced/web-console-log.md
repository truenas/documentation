---
title: "Web Console Log"
description: "Web Console Log"
---

## Web Console Log

A web console log can help to diagnose problems with the user interface. This document explains how to save the web console log so it can be submitted for debugging.


Firefox
 

Open the web console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp **Web Developer** ➞ **Web Console** or by pressing Ctrl-Shift-K.

In the upper right, set `Persist Logs`.

Click  <i class="fa fa-ellipsis-h" aria-hidden="true" title="Options"></i>&nbsp Settings. In the `Web Console` section, set `Enable timestamps`. Click the `Console` tab or press Ctrl-Shift-K to switch to the console window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose `Export visible messages to clipboard`.

Open an editor, paste the clipboard, and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i>&nbsp **Web Developer ➞ **Web Console** or by pressing Ctrl-Shift-K.

In the upper right, unset `Persist Logs`.

 

Chrome
 

Open the console by clicking  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp  **More Tools** ➞ **Developer tools** or by pressing Ctrl-Shift-I.

Click  <i class="fa fa-cog" aria-hidden="true" title="settings"></i>&nbsp and set `Preserve log`.

Click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp **Settings** ➞ **Preferences**. In the `Console` section, set `Show timestamps`. Close the Preferences window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose `Save as…` and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-cog" aria-hidden="true" title="settings"></i>&nbsp  **More Tools** ➞ **Developer tools** or by pressing Ctrl-Shift-I. Click <i class="fa fa-cog" aria-hidden="true" title="settings"></i>&nbsp and unset `Preserve log`.
