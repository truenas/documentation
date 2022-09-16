---
title: "TFTP Services Screen"
description: ""
weight: 65
alias: 
tags:
 - scale
---

{{< toc >}}


The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

## TFTP Service
The Trivial File Transfer Protocol (TFTP) is a lightweight version of FTP typically used to transfer configuration or boot files between machines, such as routers, in a local environment.
TFTP provides a limited set of commands and provides no authentication.

If TrueNAS is only storing images and configuration files for network devices, configure and start the TFTP service.
Starting the TFTP service opens UDP port **69**.

![ServicesTFTPSCALE](/images/SCALE/22.02/ServicesTFTPSCALE.png "TFTP Service Options")

{{< include file="static/includes/Reference/ServicesTFTPFields.md.part" markdown="true" >}}


{{< taglist tag="scale" limit="10" >}}