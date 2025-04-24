&NewLine;

{{< expand "Why should I save the secret seed?" "v" >}}
The secret seed is used to decrypt encrypted fields in the TrueNAS configuration database.
Various fields are encrypted because they might contain sensitive information such as cryptographic certificates, passwords (not user login passwords), or weak hashing algorithms (for example, NT hashes of SMB users).

When a config file is restored without the secret seed, encrypted fields are set to empty values. This means various services can break due to the missing information. Examples are SMB via local accounts and apps.
Always select the option to save the secret seed when downloading the system config file!

Note, the secret seed does not store local users passwords in any form, only a hash of the password sufficient for authentication. Hashed passwords are not encrypted.

What happens if I do not save the secret seed?
You might be prompted to enter a default password or reset the password.
The UI should allow users to log into the system with their current password but might be prompted to enter a new password.
Users can connect a keyboard and monitor to the system and enter a new password if they cannot log into the web UI or reset the current password.

Is there a default password for the system?
Enterprise users are issued a password to enter if prompted for such a password after the system resets.
Community users are not issued a default password and the system does not generate a default password for this purpose.
If you cannot log into the UI  with the current administration password, connect a keyboard and monitor to the system server to reset the password.

After logging into the system, recheck all system settings to verify the configurations are correct, and then test to verify the system is working as desired.
When complete and the system is operating per the desired configuration, download and save the system configuration with the secret seed option selected and keep it in a secure location.

It is a best practice to always save the secret seed with the system configuration file after making system configuration changes to have a current backup copy to use should the need arise.
{{< /expand >}}