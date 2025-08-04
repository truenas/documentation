&NewLine;

{{< truetable >}}
| Setting | Description  |
|---------|-------------|
| **Encryption Type** | Shows two encryption type options: <br><li>**Key** -  Shows key-based encryption settings. Shows a system-generated key field, an option to use a manual entry key, and key-based encryption algorithms. <br><li>**Passphrase** - Shows text fields for manual or copy/paste entry of a passphrase, and passphrase authentication algorithms. |
| **Generate key** | Shows when **Encryption Type** is set to **Key**. Selected by default and sets TrueNAS to generate a random encryption key for securing the dataset. Clearing the checkbox shows the **Key** field that accepts manual or copy/paste entry of an encryption key. <br>Warning! The encryption key is the only means to decrypt the information stored in a key-encrypted dataset. Store encryption keys in a secure location! CCreating a new key file invalidates a previously downloaded key file (for this dataset). Delete any previous key file backups and back up the new key file. |
| **Key** | Text entry field that accepts manual or copy/paste entry of an encryption key string to secure the dataset. |
| **Algorithm** | Shows a dropdown list of mathematical instruction algorithms that determine how plaintext converts into ciphertext for key and passphrase encryption types. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details on each option. |
| **Passphrase** <br>**Confirm Passphrase** | Text entry fields that accept manual or copy/paste entry of an alphanumeric string or phrase to secure the dataset. |
| **pbkdf2iters** | Sets the number of password-based key deviation function 2 (PBKDF2) iterations used for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
{{< /truetable >}}