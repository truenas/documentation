&NewLine;

{{< expand "Why should I save the secret seed?" "v" >}}
The secret seed is the key TrueNAS uses to decrypt encrypted fields in the configuration database.
TrueNAS encrypts these fields because they can contain sensitive information such as cryptographic certificates, service passwords, or weak hashing algorithms (for example, the NT hashes of SMB users).

When you restore a configuration file that does not include the secret seed, TrueNAS generates a new seed and cannot read the encrypted fields.
Services that rely on those fields stop working. Examples are SMB access for local user accounts and apps.
Always select the **Export Password Secret Seed** option when you download the system config file.

**What happens if I do not save the secret seed?**

You can still log into the web UI with your existing password.
TrueNAS stores login passwords and API keys as one-way hashes rather than encrypted values, so a missing secret seed does not affect them.

TrueNAS disables SMB authentication for all local user accounts.
To restore SMB access for an account, go to **Credentials > Users**, edit the user, and set a new password.
TrueNAS requires a new password before it re-enables SMB authentication for that account.

TrueNAS deletes some encrypted items entirely, such as cloud credentials, SSH keychain credentials, and Kerberos keytabs.
It empties the values of others, such as SED passwords, certificate private keys, and service passwords.
Reconfigure these settings after you log in.

After you log in, recheck all system settings to verify the configurations are correct.
Then test the system to verify it works as desired.
When the system operates per the desired configuration, download and save the system configuration with the secret seed option selected, and keep it in a secure location.

Always save the secret seed with the system configuration file after you change the system configuration.
This gives you a current backup copy to use if you need it.
{{< /expand >}}
