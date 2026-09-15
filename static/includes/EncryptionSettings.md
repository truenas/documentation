&NewLine;

{{< truetable >}}
| Setting | Description  |
|---------|-------------|
| **Encryption Type** | Sets the type of encryptiuon to Key or Passphrase. **Key** shows key-based encryption settings, a system-generated key field, an option to use a manual entry key, and a key-based encryption algorithms. **Passphrase** shows text fields for manual or copy/paste entry of a passphrase, and passphrase authentication algorithms. |
| **Generate key** | Sets TrueNAS to generate a random encryption key for securing the dataset. Shows when **Encryption Type** is set to **Key**. Clearing this shows the **Key** field that accepts manual or copy/paste entry of an encryption key. <br>Warning! The encryption key is the only means to decrypt the information stored in a key-encrypted dataset. Store encryption keys in a secure location! Creating a new key file invalidates a previously downloaded key file (for this dataset). Delete any previous key file backups and back up the new key file. |
| **Key** | Specifies a manually entered encryption key string to secure the dataset. |
| **Algorithm** | Sets the  encryption algorithm used for encryptiion. Shows a list of mathematical instruction algorithms that determine how plaintext converts into ciphertext for key and passphrase encryption types. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details on each option. |
| **Passphrase** <br>**Confirm Passphrase** | Specifies an alphanumeric string or phrase to secure the dataset. |
| **pbkdf2iters** | Sets the number of password-based key deviation function 2 (PBKDF2) iterations used for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
{{< /truetable >}}
