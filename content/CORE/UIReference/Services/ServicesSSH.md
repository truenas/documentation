---
title: "SSH Screen"
description: "Use the SSH screen to configure Secure Socket Shell (SSH) on your TrueNAS."
weight: 130
tags:
- coreftp
- coretftp
- coresftp
- coressh
---

Secure Socket Shell (SSH) is a network communication protocol. It provides encryption to secure data. Use the SSH services screen to configure SSH File Transfer Protocol (SFTP). SFTP is available by enabling SSH remote access to the TrueNAS system. 

{{< hint warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Enable SSH only when there is a need for external connections.
{{< /hint>}}

![SSHBasicOptionsScreen](/images/CORE/13.0/SSHBasicOptionsScreen.png "SSH Basic Options")

{{< include file="content/_includes/ServicesSSHFields.md" markdown="true" >}}

**ADVANCED OPTIONS** displays additional configuration fields to set up SSH for specific uses cases. 

![SSHAdvancedOptionsScreen](/images/CORE/13.0/SSHAdvancedOptionsScreen.png "SSH Advanced Options")

{{< include file="content/_includes/ServicesSSHAdvancedFields.md" markdown="true" >}}

{{< taglist tag="coressh" limit="10" >}}
