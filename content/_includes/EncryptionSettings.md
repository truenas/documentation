---
---

| Setting | Description  |
|---------|-------------|
| **Encryption Type** | Select the option for the type of encryption to secure the dataset from the dropdown list. Select **Key** to use key-based encryption and display the **Generate Key** option. Select **Passphrase** to enter a user-defined passphrase to secure the dataset. This displays two additional **Passphrase** fields to enter and confirm the passphrase and the **pbkdf2iters** field. |
| **Generate key** | Selected by default to have the system randomly generate an encryption key for securing this dataset. Clearing the checkbox displays the **Key** field and requires you to enter an encryption key you define. Warning! The encryption key is the only means to decrypt the information stored in this dataset or zvol. Store encryption keys in a secure location! Creating a new key file invalidates any previously downloaded key file for this dataset or zvol. Delete any previous key file backups and back up the new key file. |
| **Key** | Enter or paste a string to use as the encryption key for this dataset or zvol. |
| **Algorithm** | Displays for both key and passphrase encryption types. Select the mathematical instruction set that determines how plaintext converts into ciphertext from the dropdown list of options. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
| **Passphrase** <br>**Confirm Passphrase** | Enter the alpha-numeric string or phrase you want to use to secure the dataset or zvol. |
| **pbkdf2iters** | Enter the number of password-based key deviation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |
