---
title: "Windows Shares (SMB)"
description: "Configuration tutorials and UI reference for Windows SMB shares in TrueNAS."
geekdocCollapseSection: true
weight: 10
tags:
- smb
- shares
related: false
aliases:
 - /scale/scaletutorials/shares/smb/
 - /scale/scaleuireference/shares/smb/
---


SMB (also known as CIFS) is the native file-sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, Mac OS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. During the SMB session negotiation, a typical SMB client can negotiate the highest supported SMB protocol.
Industry-wide, SMB1 protocol (sometimes referred to as NT1) use is deprecated for security reasons.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

However, most SMB clients support SMB 2 or 3 protocols even when they are not the default.

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network.
TrueNAS disables the NetBIOS name server (nmbd) by default. Enable it on the **Network > Global Settings** screen if this functionality is required.

Mac OS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of an SMB server.
You can disable network discovery by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and is not required to access an SMB server.
{{< /hint >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
