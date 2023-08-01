---
---

The TUI allows you to configure command properties and includes information on required properties, defaults, and expected input types (string, boolean, integer, or array).
This can help when entering complex commands with multiple configurable properties.

In the TUI, optional properties are disabled by default, indicated by the `#` symbol.
Required properties are enabled.
Do not disable any properties that are enabled by default.

To configure required properties, enter a value following the provided property.
A space is required between the colon after the property and entered values.

To enable optional properties, remove `#` from the corresponding line.

Some required properties are disabled if they are part of a pair of properties where one or the other is required.
Select one property to enable and enter a value.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The command automatically executes upon exit.
