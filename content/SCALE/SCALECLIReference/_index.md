---
title: "CLI Reference Guide"
geekdocCollapseSection: true
description: "This section introduces the SCALE CLI and the basic namespaces and commands accessed from Shell."
weight: 45
aliases:
 - /scale/scaletutorials/truenasclishell/
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## Launching the TrueNAS CLI Shell

You can access the SCALE CLI shell through either the Console Setup Menu or from the **Shell** screen in the SCALE web UI.

### Entering CLI from Console Setup Menu
To open the TrueNAS CLI shell from the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}), enter `6`.

![CSMCLIlaunch](/images/SCALE/CLI/CSMCLIlaunch.png "TrueNAS CLI Shell from CSM")

To access the TrueNAS CLI when the Linux shell is active, enter `cli`.

### Entering the CLI in SCALE Shell

To access the SCALE CLI from the SCALE web UI, go to **System Settings > Shell**, then enter `cli` at the system prompt and press <kbd>Enter</kbd>.

![EnterCLIinShell](/images/SCALE/CLI/EnterCLIinShell.png "Enter CLI in Shell") 

### Exiting the CLI from SCALE Shell

To exit the SCALE CLI, enter `quit` or `exit`.

## Getting Help

{{< include file="/_includes/SCALECLIGetHelp.md" type="page" >}}

## Accessing Basic Commands
The SCALE CLI includes basic commands available from the CLI prompt or while in any namespace in the CLI.
To access these basic options, enter `?` or `help`, then press <kbd>Enter</kbd>. The list of basic commands displays.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI Shell from CSM")

{{< truetable >}}
| Command | Description |
|---------|-------------|
| <code><b>..</b></code> | Moves up one level. For example, from a namespace like **auth**, enter `..` to return to the CLI prompt. From a child namespace like **interfaces**, use `..` to return to the **network** parent namespace. |
| <code><b>exit</b></code> | Leave the SCALE CLI and return to the system prompt. |
| <code><b>ls</b></code> | Lists the namespaces and commands from the active CLI level. For example, at the top level, `ls` displays the main namespaces in the SCALE CLI, or at a main namespace level, displays the additional namespaces or commands for that level. |
| <code><b>man</b></code> | When in a namespace, displays the help text for the command that follows `man`.  For example, while in the **network** namespace, enter `man create` to see the help text for the `create` command. |
| <code><b>menu</b></code> | Displays the Console setup menu in the CLI Shell. Type `6` to exit the menu and return to the SCALE CLI prompt. |
| <code><b>?</b></code> | Displays the list of basic commands for the SCALE CLI. |
| <code><b>/</b></code> | Returns to the main SCALE CLI prompt from any namespace. |
| <code><b>.mode</b></code> | Gets or sets the output mode. |
| <code><b>.stacks</b></code> | Enables/disables printing stack traces for errors. |
{{< /truetable >}}

## Navigating Namespaces

The SCALE CLI provides eleven top level (parent) namespaces that correspond to SCALE UI functions but not all namespaces mirror the UI counterpart.
For example, the **system** name space includes **alerts** and **certificates** in the CLI but in the UI the counterpart is **System Settings**, and neither **Alerts** or **Certificates** are found under **System Settings**.
Each parent namespace has child namespaces and commands.

Use the `ls` command to view the list of namespaces or commands.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI Shell from CSM")

### Parent and Child Namespaces

{{< truetable >}}
| Namespace | Description |
|-----------|-------------|
| **account** | Provides access to **user** and **group** child namespaces and commands. In the UI these are found on the **[Credentials]({{< relref "/SCALE/SCALEUIReference/Credentials/_index.md" >}}) screen. |
| **app** | Provides access to application child namespaces and commands including **catalog**, **chart_release**, **container**, **docker**, and **kubernetes**. |
| **auth** | Provides access to authentication child namespaces and commands including **api_key**, **privilege**, **sessions**, and **two_factor**. |
| **directory_service** | Provides access to directory services child namespaces and commands including **activedirectory**, **idmap**, **kerberos**, and **ldap**. |
| **filesystem** | Provides access to the **acltemplate** child namespace. |
| **network** | Provides access to network child namespaces and commands including **configuration**, **dns**, **interface**, **ipmi**, **route**, and **static_route**.|
| **service** | Provides access to service chile namespaces and commands including **cluster**, **ctdb**, **dyndns**, **ftp**, **gluster**, **ipmi**, **nfs**, **openvpn**, **rsync**, **rsync_mod**,  **s3**, **smart**, **smb**, **snmp**, **ssh**, **tftp**, **vm**, and **webdav**. |
| **sharing** | Provides access to sharing child namespaces and commands including **iscsi**, **nfs**, **smb**, **webdav**. |
| **storage** | Provides access to storage child namespaces and commands including **dataset**, **disk**, **enclosure**, **filesystem**, **pool**, **resilver**, **scrub**, **snapshot**, and **vmware**. |
| **system** | Provides access system child namespaces and commands including **acme**, **advanced**, **alert**, **boot**, **bootenv**, **certificate**, **config**, **core**, **failover**, **general**, **keychain_credential**, **kmip**, **mail**, **ntp_server**, **reporting**, **support**, **system_dataset**, **truecommand**, **truenas**, **tunable**, **update**, and **version**. |
| **task** | Provides access to task child namespaces and commands including **cloud_sync**, **cron_job**, **replication**, **rsync**, **smart_test**, and **snapshot**. |
{{< /truetable >}}

### Entering Namespaces and Commands
{{< hint type=info >}}
CLI namespaces and commands are case sensitive. 
Enter commands in lower case unless the CLI autofill indicates otherwise. 
{{< /hint >}}

To enter a namespace or command, begin typing the name. 
The CLI displays an autofill list that begins with the letter typed and is available in that part of the CLI.
For example, the autofill list at the main CLI prompt includes only the parent namespaces that begin with the letter typed.

![CLIAutofillList](/images/SCALE/CLI/CLIAutofillList.png "CLI Autofill List Example")

To enter a basic command such as checking current configuration settings in a namespace, enter <code><i>namespace childnamespace</i> config</code>. The system displays the configured settings for the namespaces preceding the `config` command.

You can enter a namespace, child namespace, command, command options and option=value pairs from the main CLI prompt using autofill options. For example, <code><i>parent namespace child namespace command option=value</i></code>.

![EnterFullCommandAtCLIPrompt](/images/SCALE/CLI/EnterFullCommandAtCLIPrompt.png "Enter Command at CLI Prompt")

You can enter a namespace, then enter the child namespace, command, then select the command option to enter the option=value pair from the namespace prompt.

![EnterFullCommandAtNamespacePrompt](/images/SCALE/CLI/EnterFullCommandAtNamespacePrompt.png "Enter Command at Namespace Prompt")

A command without options does not show an autofill list. Press <kbd>space</kbd> to see if the command has more options or wants input, or press <kbd>Enter</kbd> to apply the command.

To go up one namespace or command level, enter `..`.
Enter `/` to return to the CLI prompt.

### Using Keyboard Arrow Keys

Use the up or down arrow keys to select an autofill option, then press <kbd>space</kbd> to apply it.

You can use <kbd>Backspace</kbd> to erase entered text to start over.

Use the left arrow to move the cursor to the left in a command string where you change the text or use <kbd>Delete</kbd> to remove anything to the right of the cursor.

Use the right arrow to move the cursor to the right to the end of the command string to either continue entering command options, or to press <kbd>Enter</kbd> to apply the command.

### Command Syntax

SCALE CLI command structure varies by namespace. 
CLI commands can include arguments, options, and or option=value pairs.

Command options that require a single value automatically add the `=` delimiter after the option on the autofill list and after reaching the end of the command option inputs.
This is an option=value pair.

Some commands allow entering multiple option=value pairs.
These option=value pairs are enclosed in curly brackets, but can also include square or angle brackets enclosed in the curly brackets.

Each namespace article includes command syntax examples for each namespace.

## Namespace Documentation

There are eleven primary or parent namespaces.
Each has additional child namespaces and commands to perform various actions.

{{< children depth="2" description="true" >}}
