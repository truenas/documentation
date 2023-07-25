---
---

The TUI allows you to configure command properties and includes information on required properties, defaults, and expected input types (string, boolean, integer, or array).
This can help when entering complex commands with multiple configurable properties.

For example, enter `account user create --` to open the **user_create** TUI.

[![InteractiveArgumentsEditor](/images/SCALE/CLI/CLIUserCreateInteractiveArgumentsEditor.png "Interactive Arguments Editor")](/images/SCALE/CLI/CLIUserCreateInteractiveArgumentsEditor.png)

In the TUI, optional properties are initially marked as comments with the `#` symbol, indicating that they are not required or configured.
Required properties are not commented (with no `#`).
In the **user_create** example, `username:` and `full_name:` are shown as required fields.

Some required properties are commented (with `#`) if they are part of a pair of properties where one or the other is required.
In the **user_create** example, either of `group:` or `group_create:` and `password:` or `password_disabled:` are required properties.

To provide values for required properties, enter a value following the provided property
A space is required between the colon after the property and entered values.
For example, `username: testuser`.

To provide values for other properties, remove the `#` comment designator from the corresponding line.
For example,
<pre><samp>
    # Integer: If `uid` is not provided it is automatically filled with the next one available.
    # uid:
</samp></pre>
is entered as

<pre><code>
    # Integer: If `uid` is not provided it is automatically filled with the next one available.
    uid: <i>3000</i>
</code></pre>
where *3000* is an available user identification (UID) number.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The command automatically executes upon exit.
