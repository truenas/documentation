---
title: "Web Console Log"
weight: 10
---

A web console log can help to diagnose problems with the user interface.
This document explains how to save the web console log from different browsers.
The log can then be added to a TrueNAS issue for debugging.

{{< tabs "SaveConsoleLog" >}}
{{< tab "Firefox" >}}
## Firefox

Open the web console by clicking  <i class="fa fa-bars" aria-hidden="true" title="Menu"></i>&nbsp; **(Menu) > Web Developer > Web Console** or by pressing <kbd>Ctrl-Shift-K</kbd>.

In the upper right, set *Persist Logs*.
Click <i class="fa fa-bars" aria-hidden="true" title="More"></i>&nbsp; (More) > Settings. In the Web Console section, set **Enable timestamps**. 

For versions *78* and later, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings) in the **Web Console** area and set *Enable timestamps* and *Persist Logs*.
Click the *Console* tab or press <kbd>Ctrl-Shift-K</kbd> to switch to the console window.

Leave the console open and perform the action that encounters problems.
Right-click in the console window and select *Export visible messages to clipboard*.
Open an editor, paste the clipboard contents, and save to a new <file>console.log</file> file.

After saving the file, go back to the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i>&nbsp; **(Menu) > Web Developer > Web Console** or by pressing <kbd>Ctrl-Shift-K</kbd>.
Find and unset *Persist Logs*.
{{< /tab >}}
{{< tab "Chrome" >}}
## Chrome

Open the console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > More Tools > Developer tools** or by pressing <kbd>Ctrl-Shift-I</kbd>.

Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings) and set *Preserve log*.

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > Settings > Preferences**. In the **Console** section, set *Show timestamps*. Close the **Preferences** window.

Leave the console open and perform the action that encounters problems.
Right-click in the console window. Choose *Save as…* and save to a file called <file>console.log</file>.

After saving the file, go back to the console with <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **(Options) > More Tools > Developer tools** or by pressing <kbd>Ctrl-Shift-I</kbd>. Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>&nbsp; (Settings) and unset *Preserve log*.
{{< /tab >}}
{{< /tabs >}}

## Attaching a Console Log File to a Report

Go to the [iXsystems Bug Tracker](https://jira.ixsystems.com). Locate an existing ticket or create a new one reporting the problem.
Attach the console log file to the ticket by dragging it to the **Document Vault**.
