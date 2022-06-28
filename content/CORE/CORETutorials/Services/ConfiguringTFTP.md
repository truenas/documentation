---
title: "Configuring TFTP"
description: "Setting up TFTP"
weight: 140
tags:
- coreftp
- coretftp
- coresftp
---


## Setting Up TFTP

The Trivial File Transfer Protocol (TFTP) is a light-weight version of FTP typically used to transfer configuration or boot files between machines, such as routers, in a local environment.
TFTP provides an extremely limited set of commands and provides no authentication.

When the TrueNAS system is only storing images and configuration files for network devices, configure and start the TFTP service.
Starting the TFTP service opens UDP port **69**.

![ServicesTFTPOptions](/images/CORE/12.0/ServicesTFTPOptions.png "TFTP Service Options")

{{< taglist tag="coretftp" limit="10" title="Related TFTP and SFTP Articles" >}}

