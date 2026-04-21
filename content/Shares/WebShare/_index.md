---
title: "WebShare"
description: "Tutorials to configure WebShare, a web-based file sharing feature in TrueNAS."
geekdocCollapseSection: true
weight: 60
tags:
- webshare
- shares
related: false
---

WebShare provides web-based file access to authorized users through a browser interface.
Unlike SMB or NFS shares that require mounting on client systems, WebShare allows users to browse, upload, download, and search files directly from a web browser.

{{< hint type=note >}}
WebShare requires TrueNAS Connect to be configured and active.
{{< /hint >}}

The **WebShare** widget displays **Open WebShare** and **Add** buttons, and a <span class="material-icons">more_vert</span> icon for accessing service options.
Each configured WebShare displays as a row showing the share name, path, and action icons to open the share in a new browser tab, edit the share, or delete the share.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
