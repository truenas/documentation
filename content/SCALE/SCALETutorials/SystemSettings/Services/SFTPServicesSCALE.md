---
title: "SFTP Service"
description: ""
weight: 40
alias: 
tags:
 - scalesftp
 - scalessh
---


{{< toc >}}

The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

{{< expand "SFTP" "v" >}}
SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System Settings > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Set **Allow Password Authentication** and decide if you need **Log in as Root with Password**.
{{< hint warning >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
{{< /hint >}}
Review the remaining options and configure them according to your environment or security needs.

{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}

### SFTP Connections

Open an FTP client (like FileZilla) or command line. 
This article shows using FileZilla as an example.
Using FileZilla, enter *SFTP://'TrueNAS IP'*, *'username'*, *'password'*, and port **22** to connect.

{{< hint warning >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}
{{< /expand >}}


{{< taglist tag="scalesftp" limit="10" >}}