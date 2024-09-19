&NewLine;

{{< hint type=tip title="Admin Accounts and Sudo Commands" >}}
As a security hardening feature, administrator accounts in Linux-based TrueNAS releases (22.12.0 or newer) cannot by default execute certain root-level commands in a shell or SSH session.
If a user attempts to execute one of these commands without root-level access, TrueNAS returns a `command not found` error.

Administrative users who need to execute root-level commands to complete a task should temporarily enable sudo permissions for that user by going **Credentials** and editing the user or group to enable some or all sudo commands.
For best security, enable only the required commands to perform the task and require password authentication, unless the task or app prevents it.
Disable sudo permissions when the task completes and they are no longer required.
{{< /hint >}}

**Allowed sudo commands**, **Allow all sudo commands**, **Allowed sudo commands with no password** and **Allow all sudo commands with no password** grant limited root-like permissions using the sudo command.
Use **Allowed sudo commands** or **Allowed sudo commands with no password** to list specific sudo commands allowed for group members.
Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example */usr/bin/nano*.
<file>/usr/bin/</file> is the default location for commands.
Press <kbd>Enter</kbd> after each command.

To allow full access to sudo commands, select either **Allow all sudo commands** or **Allow all sudo commands with no password**.
If sudo commands are allowed with password protection, the user is prompted for a password the first time a sudo command is entered, but not again in the same session.
Disable these settings after completing the task to return to a security hardened system.

Do not allow sudo permissions for read-only administrators.
