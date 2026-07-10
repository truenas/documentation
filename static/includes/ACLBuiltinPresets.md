&NewLine;

TrueNAS built-in presets automatically include entries for the `builtin_users` and `builtin_administrators` groups.
If the system is joined to Active Directory, entries for domain users and domain admins are also added.
After selecting a preset, these entries appear in the ACL editor.
TrueNAS allows removing any unwanted entries before saving changes to the ACL.

This automatic expansion applies only to the built-in presets shipped with TrueNAS and does not apply to user-created presets.