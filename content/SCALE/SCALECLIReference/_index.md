---
title: "CLI Reference Guide"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI and the basic namespaces and commands accessed from Shell."
weight: 45
aliases:
 - /scale/scaletutorials/truenasclishell/
 - /scale/scaleclireference/service/cliwebdav/
 - /scale/scaleclireference/service/clidyndns/
 - /scale/scaleclireference/service/clirsync/
 - /scale/scaleclireference/service/clirsyncmod/
 - /scale/scaleclireference/service/clis3/
 - /scale/scaleclireference/service/clitftp/
 - /scale/scaleclireference/sharing/cliwebdav/
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" >}}

## Launching the TrueNAS CLI

The SCALE Shell automatically opens in the SCALE CLI if the admin user **Shell** setting on the **Credentials > Local User > Add User** or **Edit User** screen is set to **TrueNAS CLI**.
If set to a different shell option such as bash or zsh, enter `cli` at the prompt on the **shell** screen.

You can also access the TrueNAS CLI through either the Console Setup Menu. 

### Entering the TrueNAS CLI from Console Setup Menu
You can access the Console Setup Menu when you SSH into the TrueNAS system, after you install SCALE from the <file>iso</file>, or from the Shell. 
If you set the admin user **Shell** setting to **TrueNAS Console**, the Shell opens in the console setup menu.

To open the TrueNAS CLI from the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}), enter `6`.

![CSMCLIlaunch](/images/SCALE/CLI/CSMCLIlaunch.png "TrueNAS CLI from CSM")

### Entering the TrueNAS CLI in the Linux Shell
The **Shell** screen opens in the shell option selected in the **Shell** setting on the **Credentials > Local User > Add User** or **Edit User** screen.
If set to zsh, bash, or the other options other than **TrueNAS CLI** or **TrueNAS Console**, the screen opens at a Linux prompt.

To access the TrueNAS CLI from the Linux shell, enter `cli` at the prompt and press <kbd>Enter</kbd>.

![EnterCLIinShell](/images/SCALE/CLI/EnterCLIinShell.png "Enter CLI in Shell") 

### Exiting the TrueNAS CLI from the Linux Shell

To exit the TrueNAS CLI, enter `quit` or `exit`.

## Getting Help

{{< include file="/_includes/CLI/SCALECLIGetHelp.md" >}}

## Accessing Basic Commands
The TrueNAS CLI includes basic commands available from the CLI prompt or while in any namespace in the CLI.
To access these basic options, enter `?` or `help`, then press <kbd>Enter</kbd>. The list of basic commands displays.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI from CSM")

{{< truetable >}}
| Command | Description |
|---------|-------------|
| <code><b>..</b></code> | Moves up one level. For example, from a namespace like **auth**, enter `..` to return to the CLI prompt. From a child namespace like **interfaces**, use `..` to return to the **network** parent namespace. |
| <code><b>exit</b></code> | Leave the TrueNAS CLI and return to the system prompt. |
| <code><b>ls</b></code> | Lists the namespaces and commands from the active CLI level. For example, at the top level, `ls` displays the main namespaces in the TrueNAS CLI, or at a main namespace level, displays the additional namespaces or commands for that level. |
| <code><b>man</b></code> | When in a namespace, displays the help text for the command that follows `man`.  For example, while in the **network** namespace, enter `man create` to see the help text for the `create` command. |
| <code><b>menu</b></code> | Displays the Console setup menu in the TrueNAS CLI. Type `6` to exit the menu and return to the CLI prompt. |
| <code><b>?</b></code> | Displays the list of basic commands for the TrueNAS CLI. |
| <code><b>/</b></code> | Returns to the main TrueNAS CLI prompt from any namespace. |
| <code><b>.mode</b></code> | Gets or sets the output mode. |
| <code><b>.stacks</b></code> | Enables/disables printing stack traces for errors. |
{{< /truetable >}}

## Navigating Namespaces

The TrueNAS CLI provides eleven top level (parent) namespaces that correspond to SCALE UI functions but not all namespaces mirror the UI counterpart.
For example, the **system** name space includes **alerts** and **certificates** in the CLI but in the UI the counterpart is **System Settings**, and neither **Alerts** or **Certificates** are found under **System Settings**.
Each parent namespace has child namespaces and commands.

Use the `ls` command to view the list of namespaces or commands.

![CLIBasicCommands](/images/SCALE/CLI/CLIBasicCommands.png "TrueNAS CLI from CSM")

### Parent and Child Namespaces

{{< truetable >}}
| Namespace | Description |
|-----------|-------------|
| **account** | Provides access to the **user** and **group** namespaces and commands. In the UI these are found on the **[Credentials]({{< relref "/SCALE/SCALEUIReference/Credentials/_index.md" >}}) screen. |
| **app** | Provides access to the **catalog**, **chart_release**, **container**, **docker** and **kubernetes** namespaces and commands. |
| **auth** | Provides access to the authentication **api_key**, **privilege**, **sessions**, and **two_factor** namespaces and commands. |
| **directory_service** | Provides access to directory services **activedirectory**, **idmap**, **kerberos**, and **ldap** namespaces and commands. |
| **filesystem** | Provides access to the **acltemplate** namespace. |
| **network** | Provides access to network **configuration**, **dns**, **interface**, **ipmi**, **route**, and **static_route** namespaces and commands.|
| **service** | Provides access to service **cluster**, **ctdb**, **dyndns**, **ftp**, **gluster**, **ipmi**, **nfs**, **openvpn**, **rsync**, **rsync_mod**, **s3**, **smart**, **smb**, **snmp**, **ssh**, **tftp**, **vm**, and **webdav** namespaces and commands. |
| **sharing** | Provides access to sharing **iscsi**, **nfs**, **smb**, and **webdav** namespaces and commands. |
| **storage** | Provides access to storage **dataset**, **disk**, **enclosure**, **filesystem**, **pool**, **resilver**, **scrub**, **snapshot**, and **vmware** namespaces and commands. |
| **system** | Provides access system **acme**, **advanced**, **alert**, **boot**, **bootenv**, **certificate**, **config**, **core**, **failover**, **general**, **keychain_credential**, **kmip**, **mail**, **ntp_server**, **reporting**, **support**, **system_dataset**, **truecommand**, **truenas**, **tunable**, **update**, and **version** namespaces and commands. |
| **task** | Provides access to task **cloud_sync**, **cron_job**, **replication**, **rsync**, **smart_test**, and **snapshot** namespaces and commands. |
{{< /truetable >}}

### Entering Namespaces and Commands
{{< hint type=info >}}
CLI namespaces and commands are case sensitive. 
Enter commands in lower case unless the CLI autofill indicates otherwise. 
{{< /hint >}}

To enter a namespace or command, begin typing the name. 
The CLI displays an autofill list that begins with the letter typed and is available in that part of the CLI. 
Press the <kbd>down arrow</kbd> to select the name of the command or namespace.
For example, the autofill list at the main CLI prompt includes only the parent namespaces that begin with the letter typed.

![CLIAutofillList](/images/SCALE/CLI/CLIAutofillList.png "CLI Autofill List Example")

To enter a basic command such as checking current configuration settings in a namespace, enter <code><i>namespace childnamespace</i> config</code>. 
The system displays the configured settings for the namespaces preceding the `config` command.

You can enter a namespace, child namespace, command, command properties (options) and arguments (property=value pairs) from the main CLI prompt using autofill options. 
For example, <code><i>parent namespace child namespace command property=value</i></code>.

![EnterFullCommandAtCLIPrompt](/images/SCALE/CLI/EnterFullCommandAtCLIPrompt.png "Enter Command at CLI Prompt")

You can enter a namespace, then enter the child namespace, command, then select the command property to enter the argument (property=value) from the namespace prompt.

![EnterFullCommandAtNamespacePrompt](/images/SCALE/CLI/EnterFullCommandAtNamespacePrompt.png "Enter Command at Namespace Prompt")

A command without properties does not show an autofill list. 
Press <kbd>space</kbd> to see if the command has more properties or wants input, or press <kbd>Enter</kbd> to apply the command.

To go up one namespace or command level, enter `..`.
Enter `/` to return to the main CLI prompt and to exit the namespace(s).

### Using Keyboard Arrow Keys

Use the up or down arrow keys to select an autofill option, then press <kbd>space</kbd> to apply it.

You can use <kbd>Backspace</kbd> to erase entered text to start over.

Use the left arrow to move the cursor to the left in a command string where you change the text or use <kbd>Delete</kbd> to remove anything to the right of the cursor.

Use the right arrow to move the cursor to the right to the end of the command string to either continue entering command options, or to press <kbd>Enter</kbd> to apply the command.

### Command Syntax

TrueNAS CLI command structure varies by namespace. 
CLI commands can include  properties (options) and/or arguments (property=value pairs), and might include flags.

Command properties that require a single value automatically add the `=` delimiter after the property on the autofill list and after reaching the end of the command property inputs.

Some commands allow entering multiple arguments enclosed in curly brackets. These curly brackets could enclose multiple arguments in square brackets separated by a comma and space. 
Argument properties (options) and values might require double quotes around each, and are separated by a colon `:` instead of the equal sign.

Each namespace article includes command syntax examples for each namespace.

### Using the Interactive Arguments Editor

Enter the `--` flag following any CLI command to open the **interactive arguments editor** text-based user interface (TUI).

{{< include file="/_includes/InteractiveArgsEditor.md" >}}

{{< expand "Click for a detailed example" "v" >}}
Enter `account user create --` to open the **user_create** TUI.

[![InteractiveArgumentsEditor](/images/SCALE/CLI/CLIUserCreateInteractiveArgumentsEditor.png "Interactive Arguments Editor")](/images/SCALE/CLI/CLIUserCreateInteractiveArgumentsEditor.png)

Both `username:` and `full_name:` are required and enabled by default.

Either `group:` or `group_create:` and `password:` or `password_disabled:` are also required properties.
You must enable and configure one property for each pair.

All other disabled properties are optional.

To provide values for enabled properties, enter a value following the provided property.
For example, `username: testuser`.

To enable a property, remove `#` from the corresponding line and then enter its value.
For example,
<pre><samp>
    # Integer: If `uid` is not provided it is automatically filled with the next one available.
    # uid:
</samp></pre>
is entered as:
<pre><code>
    # Integer: If `uid` is not provided it is automatically filled with the next one available.
    uid: <i>3000</i>
</code></pre>
Where *3000* is an available user identification (UID) number.

Enter values for all required and any optional properties you want to configure.
**Save** the modified file then **Quit** to exit the TUI and execute the `user_create` command.
{{< /expand >}}

## Namespace Documentation

There are eleven primary or parent namespaces. 
Some of the primary namespaces include commands as well as having child namespaces.
Each child namespaces has commands to perform various actions.

{{< children depth="1" description="true" >}}
