---
title: "Keychain_Credential"
description: "Provides information about the system keychain_credential namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 65
aliases:
draft: false
tags:
- credentials
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Keychain_Credential Namespace
The **keychain_credential** namespace has nine commands and is based on SSH credential and keypair creation and management functions found in the SCALE API and web UI.
It provides access to backup credential methods through the **keychain_credential** commands.

## Keychain_Credential Commands 
The following **keychain_credential** commands allow you to create new and manage existing SSH credentials and keypairs.

You can enter commands from the main CLI prompt or from the **keychain_credential** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command 
Use the `create` command to create a keypair or SSH credential. This command is very complex. Use the UI or the interactive argument editor to create a new keypair or SSH connection.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out this content until we can get a working array object syntax
{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has three required properties, `name`, `type`, and `attributes`.
See **Create Properties** below for details.
Enter the property argument using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter `--` after `create` to open the interactive argument editor or enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Use the `system keychain_credential query` command to verify the new item is created.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. `type` is either `SSH_KEY_PAIR` or `SSH_CREDENTIALS`.
Enter `--` to open and use the interactive argument editor.
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a new name for the keychain credential. | <code>name="<i>sshCredentialName</i>"</code> |
| `type` | Yes | Enter `SSH_KEY_PAIR` to configure a keypair or `SSH_CREDENTIALS`to configure an SSH connection. | <code>type="<i>SSH_KEY_PAIR</i>"</code> |
| `attribute` | Yes | Attributes change based on the `type` specified. See **SSH_Key_PAIR Attributes Properties** or **SSH_CREDENTIALS Attributes Properties** below for details. | `attributes={}` |
{{< /truetable >}}
{{< /expand >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_KEY_PAIR`.
{{< expand "SSH_KEY_PAIR Attributes Properties" "v" >}}
{{< truetable >}}

`attribute` is an array object. Enter property arguments inside the curly brackets `{}`, using the `:` to separate double-quoted properties and values.
Enter `--` to open and use the interactive argument editor.
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `public_key` | No | Enter or paste a public key. If omitted, this is automatically derived from the private key. Enter the value in double quotes. | <code>public_key=<i>publicKeyString</i></code> | 
| `private_key` | Yes | Enter or paste the private key. Paste either or both public and private keys. If only the public key, it is stored alone. If only the private key, the public key is automatically calculated and entered in the public key field. Enter the value in double quotes. | <code>private_key=<i>privateKeyString</i></code> | 
{{< /truetable >}}
{{< /expand >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_CREDENTIALS`.
{{< expand "SSH_CREDENTIAL Attributes Properties" "v" >}}
{{< truetable >}}
`attribute` is an array object. Enter property arguments inside the curly brackets `{}`, using the `:` to separate double-quoted properties and values. 
Enter `--` to open and use the interactive argument editor.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `host` | Yes | Enter the remote system host name or IP address. | <code>"host":"<i>remoteIPaddress</i>"</code | 
| `port` | *Yes | Accept the default or enter the port number on the remote system to use for the SSH connection. The default is 22. | <code>"port":"<i>22</i>"</code> | 
|  `username `| Yes | Enter the username on the remote system to log in via SSH. The default is `root`. The username should not begin with a number. | <code>type=<i>PagerDuty</i></code> | 
| `private_key` | Yes | Create the `private_key` by performing a semi-automatic SSH connection setup on another TrueNAS system. This creates an `SSH_CREDENTIALS` credential with a specified `name`. Use this and that TrueNAS system `url` and a temporary auth `token`. Other Choose a saved SSH Keypair or select Generate New to create a new keypair and use it for this connection.| <code>"private_key:"<i>privateKey</i>"</code | 
| `remote_host_key` | Yes | Use `remote_ssh_host_key_scan` to discover the remote host key, then copy/paste it as the double-quoted value. | <code>"remote_host_key":"<i>remoteHostKey</i>"</code> | 
| `connect_timeout` | No | Accept the default or enter the time in seconds before the system stops attempting to establish a connection with the remote system. The default is 10. | <code>"connect_timeout":"<i>10</i>"</code> | 
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential create name="<i>New System</i>" type="<i>SSH_CREDENTIAL</i>" attributes={"host":"","port":"22","username":"admin","private_key":"","remote_host_key":"","connect_timeout":"10"}</code>

Where:
* *New Key* is the name given to the new keychain credential.
* *SSH_KEY_PAIR* is the type of credential created.
* *privateKeyString* is the private key string.

{{< expand "Command Example" "v" >}}
```
system keychain_credential create name="New System" type="SSH_CREDENTIAL" attributes={"host":"","port":"22","username":"admin","private_key":"","remote_host_key":"","connect_timeout":"10"}
```
{{< /expand >}}
{{< /expand >}} -->

### Delete Command 
The `delete` command removes the keypair or SSH credential matching the ID entered.

Use the `system keychain_credential query` to obtain ID numbers for keypairs or SSH credentials on the system and to verify the command is successful.
{{< expand "Using the Delete Command" "v" >}}
#### Description
The `Delete` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. 

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential delete id=<i>1</i></code>

Where *1* is the system-assigned ID for the keypair or SSH credential.
{{< expand "Command Example" "v" >}}
```
system keychain_credential delete id=1

```
{{< /expand >}}
{{< /expand >}}

### Generate_SSH_Key_Pair Command 
The `generate_ssh_key_pair` command generates a new private and public key to use when creating SSH keypairs.

Use the UI to download public and private key values.
{{< expand "Using the Generate_SSH_Key_Pair Command" "v" >}}
#### Description
The `Generate_SSH_Key_Pair` does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns new public and private keys.

#### Usage
From the CLI prompt, enter:

`system keychain_credential generate_ssh_key_pair`

{{< expand "Command Example" "v" >}}
```
system keychain_credential generate_ssh_key_pair
+-------------+------------------------------------------------------------------+
| private_key | -----BEGIN OPENSSH PRIVATE KEY-----                              |
|             | b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAA... |
|             | NhAAAAAwEAAQAAAYEAvU17miIIqegbLN/11hfoldXfJb5Mjdq/F8EmHRaQJsd... |
|             | hQh5zLAq6uixDv1dBdFMtLMyG9H2fYzT/y0ZpLY2qbfnAZjexb7idh52ohvV/... |
|             | eK3NHbEbeZ92+YQQCYMK1z39h1AUN0Smhbd0YV2vnFX+w2CFpSndFohpBCVL1... |
|             | AbSxmj55uGN1w3JdQ0z3BZMah7RtcCzu6VYfgCBhIC0Myw74iudp0DkP3uBrk... |
|             | wIP/z86uLqrY0ZjzRZJQLlHt1pNsgTZU4p8GrsCr5m0qt2Obsl97puJ1D3Bby... |
|             | TjzNQb048SkU/xsFSmdpG3QJFDqNBCpIzgyfFDYalKAc+YgwQ5BoFQMesuMaU... |
|             | tVeEVEE7FJGG66Qo/byeW4Z9RNC6+iYbhAbWlPzj/ofvBdscEIdJ/9oBnKcAQ... |
|             | 7HafLUoRKVtwF70XSNGwvWDTh/HQX6hGQqfUh65XAAAFiCiaL8Aomi/AAAAAB... |
|             | EAAAGBAL1Ne5oiCKnoGyzf9dYX6JXV3yW+TI3avxfBJh0WkCbHZRQ6J+h3BoU... |
|             | sQ79XQXRTLSzMhvR9n2M0/8tGaS2Nqm35wGY3sW+4nYedqIb1f290POR0/Hni... |
|             | dvmEEAmDCtc9/YdQFDdEpoW3dGFdr5xV/sNghaUp3RaIaQQlS9bT3geN8CIgG... |
|             | dcNyXUNM9wWTGoe0bXAs7ulWH4AgYSAtDMsO+IrnadA5D97ga5Nryu69p7KMC... |
|             | 2NGY80WSUC5R7daTbIE2VOKfBq7Aq+ZtKrdjm7Jfe6bidQ9wW8pbyCo8VqVk4... |
|             | FP8bBUpnaRt0CRQ6jQQqSM4MnxQ2GpSgHPmIMEOQaBUDHrLjGlJYEEME7bSrV... |
|             | huukKP28nluGfUTQuvomG4QG1pT84/6H7wXbHBCHSf/aAZynAEGni0DZiwV+x... |
|             | cBe9F0jRsL1g04fx0F+oRkKn1IeuVwAAAAMBAAEAAAGAIYlpFODjrQowSk5xF... |
|             | G3CUiQIyq2UF/vcNdRanh1GoN/tbDPNzqcl9pah9/OC5pNXxQCFBip9QsugZ4... |
|             | YsGM8faD005JUSXiTt5CduxGYqxVFxLcnzJqRgJQtG9hBvqrtSP5cpxbLVV4o... |
|             | vO5MLvsQLo5DIJdk7K3DP45fVQRgIXls5rrQV91v7bU/F+L9AkWpdV7hIfz1n... |
|             | iZng4WbnAZsiWydiF494aWhEnXji3uwNRekTEgWbZnsgex8Rj7nqa+f6+oGhO... |
|             | WLNQPo//IypZx6oyN4vKAf8FydpWyxAof+DquOCklom0kGDFq6vxWKcnKefi6... |
|             | 82OmEo/DX+FVTAiSyrQMJZSuiZaBjEm9UbC+YyffcHpJ+J6bCPPSHTVBG0lwG... |
|             | QCYZoAgDbHkxEec33zn2JooctV1BRbyrtu6rwYWdY8tpYcxvQ7+uU1RBU0ft2... |
|             | wQDkPWXMh+TVjLS8prnpjut6FDnWU3+XaP2GjVvre+03TfPUWO6t540Y0E3hC... |
|             | CQ2gXLcjC1uPdmD18opRO6WIzYB1DzTdrvtvnliIjWpgeo9nLaMmLAiUby/6l... |
|             | TXjtm9eDE18NGoXDjYc5NFIg5cWoeWB5hrbCnuoZogDkr2FQ5LGG8KboMqi2w... |
|             | SkK047qjBF54v56cdwBen3yGhXLzkkSPQPBhTd4wTZz+H9oekAAADBAPFCCYR... |
|             | dzstfWP6htlhklD4wUMox2ODMgGRT0PoM3x2f3StzjfKUY/xboKXz6IgAz09H... |
|             | vDEH31INV+/LOCIqyoqm5/bMZr3zQhjTDrNeZKmuWIFJ5UA5xXRHiOS8hOQbM... |
|             | jfEY7OpLIf4T55x7+y1/gUUBtqicB3eyvxQxS74XfDxw7l0hMJDXLXHcvD+Ok... |
|             | Ag/Csze1IGN69cmNm6T/+26RE6tFPGGwAAAMEAyN63dyOpth1F0XODFqJ5sXt... |
|             | GWIir/0XecQedi3g7stAd50JK5Z9z0DsetnfWbldz9tVgy4g+LSa/p2vy7JkG... |
|             | ftixJIG32awsKx9zVV9vMR1yEZeLgNxf436yqTtEEU+Zj2zaefbaIkavb6cDV... |
|             | a+wDVYV1pTG464Iqr0Xl35bZEQeV5W9YeNN+Gg5c3ULkopMW+4F1gNs4pY9Rn... |
|             | pVUVMxmcKFrKx1AAAADHJvb3RAdHJ1ZW5hcwECAwQFBg==                   |
|             | -----END OPENSSH PRIVATE KEY-----                                |
|             |                                                                  |
|  public_key | ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC9TXuaIgip6Bss3/XWF+iV1... |
|             |                                                                  |
+-------------+------------------------------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command 
The `get_instance` command lists the properties for the keypair or SSH connection ID entered.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type, and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential get_instance id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< expand "Command Example" "v" >}}
```
system keychain_credential get_instance 1
+------------+-----------------+
|         id | 1               |
|       name | Test System Key |
|       type | SSH_KEY_PAIR    |
| attributes | <dict>          |
+------------+-----------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command 
The `query` command lists all keypairs and connections configured on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

`system keychain_credential query`

{{< expand "Command Example" "v" >}}
```
system keychain_credential query
+----+-----------------+-----------------+------------+
| id | name            | type            | attributes |
+----+-----------------+-----------------+------------+
| 1  | Test System Key | SSH_KEY_PAIR    | <dict>     |
| 2  | Test System     | SSH_CREDENTIALS | <dict>     |
+----+-----------------+-----------------+------------+
```
{{< /expand >}}
{{< /expand >}}

### Remote_Ssh_Host_Key_Scan Command 
Use the `remote_ssh_host_key_scan` to discover a remote system host key.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out this content until we can get a working array object syntax
Log into the remote system, go to **Credentials > Backup Credentials**, edit the SSH Connection, and click **Discover Remote Host Key** to obtain the key. 
{{< expand "Using the emote_Ssh_Host_Key_Scan Command" "v" >}}
#### Description
The `remote_ssh_host_key_scan` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential remote_ssh_host_key_scan keychain_remote_ssh_host_key_scan={"host":"<i>a.b.c.d</i>","port":"<i>22</i>"}</code>

Where:
* *a.b.c.d* is the remote host IP address.
* *22* is the port number (default is 22).

{{< expand "Command Example" "v" >}}
```
system keychain_credential remote_ssh_host_key_scan keychain_remote_ssh_host_key_scan={"host":"10.234.12.252","port":"22"}
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC2rKQswJZygqJ8eeg9ufhi8...
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzd...
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDVIAJk2Y168rAeve4fdL+5B+...
```
{{< /expand >}}
{{< /expand >}} -->

### Remote_Ssh_Semiautomatic_Setup Command 
Use the `remote_ssh_semiautomatic_setup` to perform a semi-automatic SSH connection setup with another system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out this content until we can get a working array object syntax
{{< expand "Using the Remote_Ssh_Semiautomatic_Setup Command" "v" >}}
#### Description
The `remote_ssh_semiautomatic_setup` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:"_attrs_order_":[

<code>system keychain_credential remote_ssh_semiautomatic_setup keychain_remote_ssh_semiautomatic_setup={"name":"grem1newkey", "url":"http://10.234.12.254/", "token":"remoteHostKeyToken", "admin_username":"admin", "password":"adminPassword", "username":"admin", "private_key":"2"}</code>

Where:
* *grem1newkey* is the name given to the SSH credential on the remote TrueNAS system.
* *http://10.234.12.254/* is the URL for the remote TrueNAS system.
* *remoteHostKeyToken* is the remote host key (token)
* *admin* is the administrator username for the remote system.
* *adminPassword* is the password for the remote system admin user.
* *2* is the system-assigned ID number for the SSH connection, found on the remote TrueNAS system.

{{< expand "Command Example" "v" >}}
```
system keychain_credential remote_ssh_semiautomatic_setup keychain_remote_ssh_semiautomatic_setup= {}

```
{{< /expand >}}
{{< /expand >}} -->

### Setup_Ssh_Connection Command 
Use the `setup_ssh_connection` to create an SSH connection. 

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out this content until we can get a working array object syntax
Use the interactive argument editor or the UI to create a new SSH Connection.
{{< expand "Using the Setup_Ssh_Connection Command" "v" >}}
#### Description
The `setup_ssh_connection` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential get_instance id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< expand "Command Example" "v" >}}
```
system keychain_credential setup_ssh_connection setup_ssh_connection={"private_key":"","connection_name":"","setup_type":"",[semi_automatic_setup={"url":"","token":"","admin_username":"","password":""}],"manual_setup":""}

```
{{< /expand >}}
{{< /expand >}} -->

### Update Command 
Use the `update` command to update properties for the credential matching the ID entered.

Use `system keychain_credential query` to get a list of all credentials on the system and the assigned ID numbers.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has one required property argument, `id`, and two optional properties, `name` and `attributes`.
`id` is the system-assigned identification number for the credential.
See **Update Properties** for details on the other properties.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. `type` is either `SSH_KEY_PAIR` or `SSH_CREDENTIALS`.
Enter the property argument using the `=` delimiter to separate property and value.
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a new name for the credential. | <code>name="<i>CredentialName</i>"</code> |
| `attribute` | Yes | Attributes change based on `type`. See **SSH_Key_PAIR Attributes Properties** or **SSH_CREDENTIALS Attributes Properties** below for details. | `attributes={}` |
{{< /truetable >}}
{{< /expand >}}
Use the properties listed below when `type` is `SSH_KEY_PAIR`.
{{< expand "SSH_KEY_PAIR Attributes Properties" "v" >}}
{{< truetable >}}
Enter `attribute` property arguments inside the curly brackets `{}`, with double-quoted property and value separated by the `:` delimiter.
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `public_key` | No | Enter or paste a public key. If omitted, this is automatically derived from private key. Enter the value in double quotes. | <code>public_key=<i>publicKeyString</i></code> | 
| `private_key` | Yes | Enter or paste the private key. Paste either or both public and private keys. If only public key, it is stored alone. If only private key the public key is automatically calculated and entered in the public key field. Enter the value in double quotes. | <code>private_key=<i>privateKeyString</i></code> | 
{{< /truetable >}}
{{< /expand >}}
Use the properties listed below when `type` is `SSH_CREDENTIALS`.
{{< expand "SSH_CREDENTIAL Attributes Properties" "v" >}}
{{< truetable >}}
Enter `attribute` property arguments inside the curly brackets `{}`, with double-quoted property and value separated by the `:` delimiter.
The `private_key` and `remote_host_key` properties are work in progress properties.
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `host` | Enter the remote system host name or IP address. | <code>"host":"<i>a.b.c.d</i>"</code> | 
| `port` | Port number on the remote system to use for the SSH connection or use the default is 22. | <code>"port":"<i>22</i>"</code> | 
|  `username `| Enter the username on the remote system to log in via SSH. Default is `root`. Username should not begin with a number. | <code>"username":"<i>adminUserName</i>"</code> | 
| `connect_timeout` | Enter the time in seconds before the system stops attempting to establish a connection with the remote system. Default is 10. | <code>"connect_timeout":"<i>10</i>"</code> | 
<!-- commenting out until values is verified and tested working, create does not work.
| `private_key` | Enter the system-assigned ID for the keychain credential, found in the `system keychain_credential query` command output. | <code>"private_key":"<i>2</i>"</code> | 
| `remote_host_key` | Paste the remote host key in as the value. Go to **Credentials > Backup Credentials** and click **Discover Host Key** option on the **Edit SSH Connection** screen to copy the host key.  | <code>"remote_host_key":"<i>remoteHostKey</i>"</code> | 
-->
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential update id=<i>1</i> name="<i>newCredentialName</i>"</code>

Where:
* *1* is the system-assigned ID for the keychain credential.
* *newCredentialName* is a new name for the credential (keypair or SSH connection).

{{< expand "Command Example" "v" >}}
```
system keychain_credential update id=5 name="Grem1 Key"
```
{{< /expand >}}
{{< /expand >}}

### Used_By Command done
The `used_by` command lists the objects using this credential for the ID entered. For example, a replication task to a remote system. 

{{< expand "Using the Used_By Command" "v" >}}
#### Description
The `used_by` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with the title and unbind method for the entered keychain credential ID.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential used_by id=<i>5</i></code>

Where *5* is the system-assigned ID for the keychain credential.

{{< expand "Command Example" "v" >}}
```
system keychain_credential used_by id=5
+-----------------------------------------------------------+---------------+
| title                                                     | unbind_method |
+-----------------------------------------------------------+---------------+
| SSH credentials grem1                                     | delete        |
| Replication task tank/reptests - MyPool/DataPool1/reptest | disable       |
+-----------------------------------------------------------+---------------+
```
{{< /expand >}}
{{< /expand >}}
