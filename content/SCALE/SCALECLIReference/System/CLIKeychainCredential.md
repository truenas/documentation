---
title: "Keychain_Credential"
description: "Provides information about the system keychain_credential namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 65
aliases:
draft: false
tags:
- scaleclisystem
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Keychain_Credential Namespace
The **keychain_credential** namespace has x commands, and is based on SSH credential and keypair creation and management functions found in the SCALE API and web UI.
It provides access to backup credential methods through the **keychain_credential** commands.

## Keychain_Credential Commands 
The following **keychain_credential** commands allow you to create new and manage existing SSH credentials and keypairs.

You can enter commands from the main CLI prompt or from the **keychain_credential** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command wip
Use the `create` command to create a keypair or SSH credential. Specify the method as manual or semi_automatic.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has three required properties, `name`, `type`, and `attributes`.
See **Create Properties** below for details.
Enter the property argument using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter `--` after `create` to open the interactive argument editor or enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Use the `system keychain_credential query` command to verify the new item is created.

{{< nest-expand "Create Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. `type` is either `SSH_KEY_PAIR` or `SSH_CREDENTIALS`.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a new name for the keychaing credential. | <code>name="<i>sshCredentialName</i>"</code> |
| `type` | Yes | Enter `SSH_KEY_PAIR` to configure a keypair or `SSH_CREDENTIALS`to configure an SSH connection. | <code>type="<i>SSH_KEY_PAIR</i>"</code> |
| `attribute` | Yes | Attributes change based on the `type` specified. See **SSH_Key_PAIR Attributes Properties** or **SSH_CREDENTIALS Attributes Properties** below for details. | `attributes={}` |
{{< /truetable >}}
{{< /nest-expand >}}

{{< nest-expand "SSH_KEY_PAIR Attributes Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_KEY_PAIR`.
`attribute` is an array object. Enter property arguments inside the curly brackets `{}`, using the `:` to separate double-quoted properties and values.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `public_key` | No | Enter or paste a public key. If omitted, this is automatically derived from private key. Enter the value in double quotes. | <code>public_key=<i>publicKeyString</i></code> | 
| `private_key` | Yes | Enter or paste the private key. Paste either or both public and private keys. If only public key, it is stored alone. If only private key the public key is automatically calculated and entered in the public key field. Enter the value in double quotes. | <code>private_key=<i>privateKeyString</i></code> | 
{{< /truetable >}}
{{< /nest-expand >}}

{{< nest-expand "SSH_CREDENTIAL Attributes Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_CREDENTIALS`.
`attribute` is an array object. Enter property arguments inside the curly brackets `{}`, using the `:` to separate double-quoted properties and values. 
Enter `--` to open and use the interacive argument editor.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `host` | Yes | Enter the remote system host name or IP address. | <code>"host":"<i>remoteIPaddress</i>"</code | 
| `port` | *Yes | Accept the default or enter the port number on the remote system to use for the SSH connection. Default is 22. | <code>"port":"<i>22</i>"</code> | 
|  `username `| Yes | Enter the username on the remote system to log in via SSH. Default is `root`. Username should not begin with a number. | <code>type=<i>PagerDuty</i></code> | 
| `private_key` | Yes |  | <code>"private_key:"<i>privateKey</i>"</code | 
| `remote_host_key` | Yes | Use `remote_ssh_host_key_scan` to discover the remote host key, then copy/paste it as the double-quoted value. | <code>"remote_host_key":"<i>remoteHostKey</i>"</code> | 
| `connect_timeout` | No | Accept the default or enter the time in seconds before the system stops attempting to establish a connection with the remote system. Default is 10. | <code>"connect_timeout":"<i>10</i>"</code> | 
{{< /truetable >}}
{{< /nest-expand >}}

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential create name="<i>New System</i>" type="<i>SSH_CREDENTIAL</i>" attributes={"host":"","port":"22","username":"admin","private_key":"","remote_host_key":"","connect_timeout":"10"}</code>

Where:
* *New Key* is the name given the new keychain credential.
* *SSH_KEY_PAIR* is the type of credential created.
* *privateKeyString* is the private key string.

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential create name="New System" type="SSH_CREDENTIAL" attributes={"host":"","port":"22","username":"admin","private_key":"","remote_host_key":"","connect_timeout":"10"}
```
{{< /nest-expand >}}
{{< /expand >}}

system keychain_credential setup_ssh_connection 

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDlhGVY0gWYVAr+jrJoAxEmGw9nLxCUkhzKnXXHDXh4qQMGgTNS0BzZh1hAMBzU7zu4SPemx9hSFiaXVP+tbTEo3iXGncdlEUglQ0JHZdvT++8JrB/EIRnkAk7kOdFJnfJtTbGqdy/ztC1H5dYeLq40VLvYt8RDO8pHl+xYPNxPy66Hk7stgHsHcZeqCGCwpQw7iN3WvBRKUX1EtR30HooIZ0OVG1tdouY9sMquwcE2YkuOeA5UrdQHKJmsHB41XbksBLMnGt6f/EVfurkhkTscymKG/9bViIkisDBq1YjEXL2jcawSek2QSkUi96dDrTe67fLOF9tI92dRwkkn4WpsMOdpgbO/jdiHI3LUdO7aac3rNPnRTpbxSm8+Ro1CfenBPT7Urv0KjxLpnrru39xo1jrOpkrG5Lna/w2iy5BRwBigAIHFwZM0+aZrNV4yPdqJ4h8J/jbh7X52TuFbpAnayJJcatBNC5sZRNenOccjCLBQIRut/ziuEFVxeZ2BkE8= root@mini-buildd
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHT3ggkhGk9NJnmzz0360CMp8DO0boxasbBjtGE/2ObU0dr8YlU6FZAzUKA6XnSxgSz6zlE9sVGvJmknplzzbS8= root@mini-buildd
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIALv9Pp9q+vpyf8U18ohnlf6jMvKJjmCnlgPBrFrZolD root@mini-buildd

### Delete Command done
The `delete` command removes the keypair or SSH credential matching the ID entered.

Use the `system keychain_credential query` to get ID numbers for keypairs or SSH credentials on the system and to verify the item matching the ID is deleted.
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
{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential delete id=1

```
{{< /nest-expand >}}
{{< /expand >}}

### Generate_SSH_Key_Pair Command done
The `generate_ssh_key_pair` command generates a new private and public key to use when creating SSH keypairs.

Use the output with the `system keychain_credential create` or `system keychain_credential update` command to enter public and private key values.

{{< expand "Using the Generate_SSH_Key_Pair Command" "v" >}}
#### Description
The `Generate_SSH_Key_Pair` does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns new public and private keys.

#### Usage
From the CLI prompt, enter:

`system keychain_credential generate_ssh_key_pair`

{{< nest-expand "Command Example" "v" >}}
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
{{< /nest-expand >}}
{{< /expand >}}

### Get_Instance Command done
The `get_instance` command lists the properties for the keypair or connections ID entered.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential get_instance id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential get_instance 1
+------------+-----------------+
|         id | 1               |
|       name | Test System Key |
|       type | SSH_KEY_PAIR    |
| attributes | <dict>          |
+------------+-----------------+
```
{{< /nest-expand >}}
{{< /expand >}}

### Query Command done
The `query` command lists all keypairs and connections configured on the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.
#### Usage
From the CLI prompt, enter:

`system keychain_credential query`

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential query
+----+-----------------+-----------------+------------+
| id | name            | type            | attributes |
+----+-----------------+-----------------+------------+
| 1  | Test System Key | SSH_KEY_PAIR    | <dict>     |
| 2  | Test System     | SSH_CREDENTIALS | <dict>     |
+----+-----------------+-----------------+------------+
```
{{< /nest-expand >}}
{{< /expand >}}

### Remote_Ssh_Host_Key_Scan Command wip
Use the `remote_ssh_host_key_scan` to discover a remote system host key.

{{< expand "Using the emote_Ssh_Host_Key_Scan Command" "v" >}}
#### Description
The `remote_ssh_host_key_scan` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential remote_ssh_host_key_scan keychain_remote_ssh_host_key_scan={ }</code>

Where *1* is the system-assigned ID for the keychain credential.

{{< expand "Command Example" "v" >}}
```
system keychain_credential remote_ssh_host_key_scan keychain_remote_ssh_host_key_scan={}
```
{{< /expand >}}
{{< /expand >}}

### Remote_Ssh_Semiautomatic_Setup Command wip
Use the `remote_ssh_semiautomatic_setup` to perform a semi-automatice SSH connection setup with another system.

{{< expand "Using the Remote_Ssh_Semiautomatic_Setup Command" "v" >}}
#### Description
The `remote_ssh_semiautomatic_setup` command has one required property argument, `id`.
`id` is the system-assigned identification number for the credential.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with name, type and ID assigned to the keychain credentials.

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential get_instance id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential remote_ssh_semiautomatic_setup keychain_remote_ssh_semiautomatic_setup= {}

```
{{< /nest-expand >}}
{{< /expand >}}

### Setup_Ssh_Connection Command wip
Use the `setup_ssh_connection` to create an SSH connection.

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

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential setup_ssh_connection setup_ssh_connection= {}

```
{{< /nest-expand >}}
{{< /expand >}}

### Update Command wip
Use the `update` command to update properties for the credential matching the ID entered.

Use `system keychain_credential query` to get a list of all credentials on the system and the assigned ID numbers.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has one required property argument, `id`, and two optional properties, `name` and `attributes`.
`id` is the system-assigned identification number for the credential.
See **Update Properties** for details on the other properties.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with the title and unbind method for the entered keychain credential ID.

{{< nest-expand "Update Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. `type` is either `SSH_KEY_PAIR` or `SSH_CREDENTIALS`.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a new name for the credential. | <code>name="<i>AlertTypeName</i>"</code> |
| `type` | Yes | Enter `SSH_KEY_PAIR` to configure a keypair or `SSH_CREDENTIALS`to configure an SSH connection. | <code>name="<i>AlertTypeName</i>"</code> |
| `attribute` | Yes | Attributes change based on `type`. See **SSH_Key_PAIR Attributes Properties** or **SSH_CREDENTIALS Attributes Properties** below for details. | `attributes={}` |
{{< /truetable >}}
{{< /nest-expand >}}

{{< nest-expand "SSH_CREDENTIALS Attributes Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_KEY_PAIR`.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `public_key` | No | Enter or paste a public key. If omitted, this is automatically derived from private key. Enter the value in double quotes. | <code>public_key=<i>publicKeyString</i></code> | 
| `private_key` | Yes | Enter or paste the private key. Paste either or both public and private keys. If only public key, it is stored alone. If only private key the public key is automatically calculated and entered in the public key field. Enter the value in double quotes. | <code>private_key=<i>privateKeyString</i></code> | 
{{< /truetable >}}
{{< /nest-expand >}}

{{< nest-expand "SSH_CREDENTIAL Attributes Properties" "v" >}}
{{< truetable >}}
`attribute` properties change based on the `type`. Use the properties listed below when `type` is `SSH_CREDENTIALS`.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `host` | Yes | Enter the remote system host name or IP address. | <code>type=<i>PagerDuty</i></code> | 
| `port` | Yes | Port number on the remote system to use for the SSH connection. Default is 22. | <code>type=<i>PagerDuty</i></code> | 
|  `username `| Yes | Enter the username on the remote system to log in via SSH. Default is `root`. Username should not begin with a number. | <code>type=<i>PagerDuty</i></code> | 
| `private_key` | Yes |  | <code>type=<i>PagerDuty</i></code> | 
| `remote_host_key` | Yes |  | <code>type=<i>PagerDuty</i></code> | 
| `connect_timeout` | No | Enter the time in seconds before the system stops attempting to establish a connection with the remote system. Default is 10. | <code>type=<i>PagerDuty</i></code> | 
{{< /truetable >}}
{{< /nest-expand >}}

#### Usage
From the CLI prompt, enter:

<code>system keychain_credential used_by id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential used_by id=1
+-----------------------------+---------------+
| title                       | unbind_method |
+-----------------------------+---------------+
| SSH credentials Test System | delete        |
+-----------------------------+---------------+
```
{{< /nest-expand >}}
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

<code>system keychain_credential used_by id=<i>1</i></code>

Where *1* is the system-assigned ID for the keychain credential.

{{< nest-expand "Command Example" "v" >}}
```
system keychain_credential used_by id=1
+-----------------------------+---------------+
| title                       | unbind_method |
+-----------------------------+---------------+
| SSH credentials Test System | delete        |
+-----------------------------+---------------+
```
{{< /nest-expand >}}
{{< /expand >}}

## no section

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}