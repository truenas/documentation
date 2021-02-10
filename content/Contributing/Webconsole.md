---
title: "Web Console Log"
description: "Web Console Log"
---

## Web Console Log

A web console log can help to diagnose problems with the user interface. This document explains how to save the web console log so it can be submitted for debugging.

 
### Firefox
 

Open the web console by clicking  <i class="fa fa-bars" aria-hidden="true" title="Menu"></i>&nbsp; **(Menu) > Web Developer > Web Console** or by pressing Ctrl-Shift-K.

In the upper right, set Persist Logs.
Click <i class="fa fa-bars" aria-hidden="true" title="More"></i>&nbsp; (More) > Settings. In the Web Console section, set **Enable timestamps**. 
Click the Console tab or press Ctrl-Shift-K to switch to the console window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose **Export visible messages to clipboard**.

Open an editor, paste the clipboard, and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i>&nbsp; **(Menu) > Web Developer > Web Console** or by pressing Ctrl-Shift-K.

In the upper right, unset **Persist Logs**.

 

### Chrome

Open the console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > More Tools > Developer tools** or by pressing Ctrl-Shift-I.

Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings) and set **Preserve log**.

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > Settings >> Preferences**. In the Console section, set **Show timestamps**. Close the Preferences window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose **Save as…** and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > More Tools > Developer tools** or by pressing Ctrl-Shift-I. Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings) and unset **Preserve log**.

 

### Attach Console Log to Ticket
 

Go to the [iXsystems Bug Tracker](https://jira.ixsystems.com). Locate an existing ticket or create a new one reporting the problem. Attach the console log file to the ticket by dragging it to the Document Vault.
