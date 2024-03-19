&NewLine;

The interactive argument editor is a text user interface (TUI) that can help enter complex commands with multiple configurable properties.
It shows expected properties, defaults, input types (string, boolean, integer, or array), and can include command instructions or warnings.

Optional properties, indicated by the `#` symbol, are disabled by default.
Required properties are enabled.
Do not disable properties that are enabled by default.

To configure required properties, enter a space after the colon then add the value.

To enable optional properties, delete `#` from the corresponding line.

Some required properties are disabled if they are part of a pair of properties where one or the other is required.
Select one property to enable and enter a value.

Press <kbd>F2</kbd> or click **Save** to save the modified file.

Press <kbd>F10</kbd>, <kbd>Esc</kbd>, or click **Quit** to exit the TUI.
The command automatically executes upon exit.
