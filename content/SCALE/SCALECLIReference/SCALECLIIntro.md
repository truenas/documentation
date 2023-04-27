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

To close the TrueNAS CLI shell, enter `quit` or `exit`.

![CSMCLIlaunch](/images/SCALE/CLI/CSMCLIlaunch.png "TrueNAS CLI Shell from CSM")

To access the TrueNAS CLI when the Linux shell is active, enter `cli`.

### Entering CLI from SCALE Shell

To access the CLI from the SCALE web UI, log in as admin, go to **System Settings > Shell**, then type `cli` at the system prompt and press <kbd>Enter</kbd>.

## Getting Help

The SCALE CLI includes help text for namespaces and commands through the `man` and the `ls` commands. 
The list command includes the list of namespaces with descriptions. When entered at a child namespace or a command with options, the list option includes help text for commands or options included in the list output.

To show the help text for an individual namespace or command, type <code>man <i>namespacename</i></code> or <code>man <i>commandname</i></code>.


## Accessing Basic Commands
The SCALE CLI includes basic commands available from the main CLI prompt.
To access these basic options, type `?`, then press <kbd>Enter</kbd>. The list of basic commands displays.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI Shell from CSM")

| Command | Description |
|---------|-------------|
| `..` | Moves up one level. For example, form a namespace like **auth**, enter `..` to return to the CLI prompt. From a child namepsce like **interfaces**, use `..` to return to the **network** parent namespace. |
| `exit` | Leave the SCALE CLI and return to the system prompt. |
| `ls` | Lists the namespaces and commands at the CLI level where you are. For example, at the top level, `ls` displays the main namespaces in the SCALE CLI, or at a namespace level, displays the namespaces or commands for that level. |
| `man` | When in a namespace, displays the help text for the command that follows `man`.  For example, when in **network** namespace, enter `man create` to see the help text for that command. |
| `menu` | Displays the Console setup menu in the CLI Shell. Type `6` to exit the menu and return to the SCALE CLI prompt. |
| `?` | Diplays the list of basic commmans for the SCALE CLI. |
| `/` | Returns to the main SCALE CLI prompt from any namespace. |
| `.mode` | Gets or sets the output mode. |
| `.stacks` | Enables/disables printing stack traces for errors. |

## Entering Namespaces
The SCALE CLI provides eleven top-level namespaces that correspond to UI functional areas. 
Under each of these namespaces are additional child namespaces and commands.
Some child namespaces also include child namespaces but most just include commands with or without multiple options.

Use the list command to view the list of namespaces. Type `ls`, then press <kbd>Enter</kbd>.

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

The CLI namespaces organize the commands into different groups that tend to mirror the functional areas the SCALE UI, except for the system namespace that includes functions accessed from the UI top toolbar, and those in the **Credentials** area of the UI.

### Navigating Namespaces

To see a list of namespaces or commands under a namespace, type `ls` and press <kbd>Enter</kbd>. 

To enter a namespace, begin typing the name. 
The CLI displays an autofill list of namespaces or commands that begins with the letter typed. 
Use the up and down arrow keys to select the option, then press <kbd>space</kbd> to apply it. 

To go up one level, enter `..`. 
If in the primary or parent namespace, this reurns to the main CLI level. 
If in a child namespace, type `/`, then press <kbd>Enter</kbd> to return to the main CLI prompt, or use `..` to go up to the parent namespace.

## Command Syntax

You can issue commands from the main level of the CLI by including the namespace in the command string.
For example, entering `network configuration` opens the network configuration namespace and then entering `config` shows the current settings.
Or you can enter `network configuration config` to show the current settings without moving between namespaces.

The SCALE CLI command structure varies by namespace. 
The namespaces and commands follow the SCALE API commands and options, but do not use the same delimiters or brackets that enclose strings of multiple options or arguments, and flags. 
Each namespace article includes delimiter and syntax examples for option=variable pairs

Commands can follow the basic `namespace command option=variable` string format with options followed by the `=` delimiter. 
More complex namespaces such as **[network]({{< relref "/Content/SCALE/SCALECLIReference/Network/_index.md" >}})** can include the `=` delimiter and brackets `{}`, `[]` and/or `<>` to enclose strings of option=value pairs when creating interfaces or configuring HA failover settings.

A basic command in the SCALE CLI can begin at the top level prompt or from a namespace. 
For example, from the top-level SCALE CLI prompt you can enter <code>auth api_key create name=<i>testname</i> allowlist=[]</code> where *testname* is the name you assign to the new API key this command creates, and `[]` is a default option. 
For more information on this command see **[auth]({{< relref "/Content/SCALE/SCALECLIReference/Auth/_index.md" >}})** namespace.

To enter a command from within a namespaces (auth api_key), enter <code>create name=<i>testname</i> allowlist=[]</code> where *testname* is the name you assign to the new API key this command creates, and `[]` is a default option.

Each namespace article includes the command syntax for that namespace.

## List Options

To list the available options for the current namespace, enter `ls`.

Enter `q` to close the list.

### Show Tooltips

After you go to a namespace that has available commands, you can view tooltips for using commands by entering `man [command]`

For example, `account user` then `man create`

Enter `q` to close the tooltip.
