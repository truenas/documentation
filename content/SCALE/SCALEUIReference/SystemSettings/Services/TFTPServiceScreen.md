---
title: "TFTP Services Screen"
description: "This article provides information on the TFTP screen settings."
weight: 65
alias: 
tags:
 - scaletftp
 - scaleftp
---

{{< toc >}}


The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > TFTP** configuration screen.

## TFTP Service
The **TFTPS** screen displays settings that specify the directory location to use for storing files, the connection information, file permissions and any auxiliary parameters you want to use to further customize this service.

![ServicesTFTPSCALE](/images/SCALE/22.02/ServicesTFTPSCALE.png "TFTP Service Options")

### Path Settings

| Settings | Description |
|----------|-------------|
| **Directory** | Enter or click the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span> **/mnt** to browse to an existing directory to used for storage. Some devices can require a specific directory name. Consult the documentation for that device for any name restrictions. |

### Connection Settings

| Settings | Description |
|----------|-------------|
| **Host** | Enter or select the default host name or IP address to use for TFTP transfers from the dropdown list. To use **Shell**, enter an IP address. For example, *192.0.2.1*. |
| **Port** | Enter the UDP port number that listens for TFTP requests. For example, *8050* or in **Shell** `8050`. |
| **Username** | Select the user account to use for TFTP requests from the dropdown list of options that includes but are not limted to **root**, **daemon**, **operator**, **nobody** and all the other usernames on the system. This account must have permission to what you specified in **Directory**. |

### Access Settings

| Settings | Description |
|----------|-------------|
| **File Permissions** | Select **Read**, **Write** and **Execute** permissions for both **User** and **Group** to adjust the file permissions. Select all that apply. |
| **Allow New Files** | Select to allow network devices that need to send files to the system to send files. |

### Other Options Settings

| Settings | Description |
|----------|-------------|
| **Auxiliary Parameters** | Enter any options from [tftpd](https://manpages.debian.org/bullseye/tftpd-hpa/tftpd.8.en.html), one option on each line, to further customize the TFTP service. |

{{< taglist tag="scaletftp" limit="10" >}}