---
title: "SCLE CLI Introduction"
description: "This article provides information about the SCALE CLI namespace and command syntax, navigating through the CLI, and basic commands."
weight: 10
aliases:
tags:
- scalecli
---

{{< toc >}}


{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## Launching the TrueNAS CLI Shell

You can access the SCALE CLI shell through either the Console setup menu or from the **Shell** screen in the SCALE web UI.

### Entering CLI from Console Setup Menu
To open the TrueNAS CLI shell from the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}), enter `6`.

![CSMCLIlaunch](/images/SCALE/CLI/CSMCLIlaunch.png "TrueNAS CLI Shell from CSM")

To access the TrueNAS CLI when the Linux shell is active, enter `cli`.

### Entering the CLI in SCALE Shell

To access the SCALE CLI from the SCALE web UI, go to **System Settings > Shell**, then enter `cli` at the system prompt and press <kbd>Enter</kbd>.

### Exiting the CLI from SCALE Shell

To exit the SCALE CLI, enter `quit` or `exit`.

## Getting Help

{{< include file="/_includes/SCALECLIGetHelp.md" type="page" >}}

## Accessing Basic Commands
The SCALE CLI includes basic commands available from the CLI prompt or while in any namespace in the CLI.
To access these basic options, enter `?` or `help`, then press <kbd>Enter</kbd>. The list of basic commands displays.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI Shell from CSM")

| Command | Description |
|---------|-------------|
| `..` | Moves up one level. For example, form a namespace like **auth**, enter `..` to return to the CLI prompt. From a child namepsce like **interfaces**, use `..` to return to the **network** parent namespace. |
| `exit` | Leave the SCALE CLI and return to the system prompt. |
| `ls` | Lists the namespaces and commands at the CLI level where you are. For example, at the top level, `ls` displays the main namespaces in the SCALE CLI, or at a namespace level, displays the namespaces or commands for that level. |
| `man` | When in a namespace, displays the help text for the command that follows `man`.  For example, while in the **network** namespace, enter `man create` to see the help text for the `create` command. |
| `menu` | Displays the Console setup menu in the CLI Shell. Type `6` to exit the menu and return to the SCALE CLI prompt. |
| `?` | Diplays the list of basic commmands for the SCALE CLI. |
| `/` | Returns to the main SCALE CLI prompt from any namespace. |
| `.mode` | Gets or sets the output mode. |
| `.stacks` | Enables/disables printing stack traces for errors. |

## Navigating Namespaces
The SCALE CLI provides eleven top level (parent) namespaces that correspond to SCALE UI functions but not all namespaces mirror the counterpart in the UI. 
For example, the **system** name space includes **alerts** and **cretificates** in the CLI but in the UI the counterpart is **System Settings**, and neither **Alerts** or **Cretificates** are not found under **System Settings**. 
Each parent namespace has child namespaces and commands. 

Use the `ls` command to view the list of namespaces or commands.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI Shell from CSM")

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
| **storage** | Provides acces to storage child namespces and commands including **dataset**, **disk**, **enclosure**, **filesystem**, **pool**, **resilver**, **scrub**, **snapshot**, and **vmware**. |
| **system** | Provides access system child namespaces and commands including **acme**, **advanced**, **alert**, **boot**, **bootenv**, **certificate**, **config**, **core**, **failover**, **general**, **keychain_credential**, **kmip**, **mail**, **ntp_server**, **reporting**, **support**, **system_dataset**, **truecommand**, **truenas**, **tunable**, **update**, and **version**. |
| **task** | Provides access to task child namespaces and commands including **cloud_sync**, **cron_job**, **replication**, **rsync**, **smart_test**, and **snapshot**. |

### Navigating Namespaces and Commands

To enter a namespace, begin typing the name. 
The CLI displays an autofill list of namespaces or commands that begins with the letter typed available in that part of the CLI. For example, the autofill list at the main CLI prompt includes only the parent namespaces that begin with the letter typed. 

Use the up and down arrow keys to select an autofill option, then press <kbd>space</kbd> to apply it. 

You can use <kbd>Backspace</kbd> to erase entered text to start over. 
You use the right arrow to move the cursor to the left and back into a command string to change the text or use <kbd>Delete</kbd> to remove anything to the right of the cursor.

You can use the left arrow to move the cursor back to the end of the command string to either continue entering command options, or to press <kbd>Enter</kbd> to apply the command.

To go up one level, enter `..` or `/` to return to the CLI prompt and exit any namespaces.

## Entering Commands 
To enter commands, begin by either entering the namespace and then entering a child namepace before entering the commmand and options, or if you know the full command string you can enter the complete <code><i>parent namespace child namespace command option=value</i></code> string at the top CLI prompt.
You can issue commands from the main level of the CLI by including the namespace in the command string.
For example, enter `network configuration` at the CLI prompt to open the network configuration namespace, then enter `config` to display the current network configuration settings, or you can enter `network configuration config` at the CLI prompt to accomplish the same thing.

### Command Syntax
SCALE CLI command structure varies by namespace. 
The namespaces and commands follow the SCALE API commands, options, and arguments, but the CLI does not use the same delimiters or brackets that enclose strings of multiple options=value pairs. 
Each namespace article includes command syntax examples for each namespace.

Commands can follow the basic `namespace command option=variable` string format with options followed by the `=` delimiter. 
More complex namespaces such as **[network]({{< relref "/Content/SCALE/SCALECLIReference/Network/_index.md" >}})** can include the `=` delimiter and brackets `{}`, `[]` and/or `<>` to enclose strings of option=value pairs when creating interfaces or configuring HA failover settings.

A basic command in the SCALE CLI can begin at the top level prompt or from a namespace. 
For example, from the top-level SCALE CLI prompt you can enter <code>auth api_key create name=<i>testname</i> allowlist=[]</code> where *testname* is the name you assign to the new API key this command creates, and `[]` is a default option. 
For more information on this command see **[auth]({{< relref "/Content/SCALE/SCALECLIReference/Auth/_index.md" >}})** namespace.

To enter a command from within a namespaces (**auth api_key**), enter <code>create name=<i>testname</i> allowlist=[]</code> where *testname* is the name you assign to the new API key this command creates, and `[]` is a default variable you replace with specific values you want to allow this api key.

{{< taglist tag="scalecli" limit="10" title="Related CLI Articles" >}}