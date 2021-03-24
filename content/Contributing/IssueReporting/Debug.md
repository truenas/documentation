---
title: "TrueNAS Debug"
weight: 8
---

{{< toc >}}

## Creating a Debug File

{{< include file="static/includes/CreateDebug.md.part" markdown="true" >}}

{{< expand "TrueNAS SCALE" "v" >}}
TrueNAS SCALE has an identical process in **System Settings > Advanced**.
{{< /expand >}}

## Adding a Debug File to a Report

Jira provides a secure area for uploading files with sensitive information, like a system debug.

{{< tabs "Secure Attachments" >}}
{{< tab "New Tickets" >}}
Drag and drop the file into the **Private Attachment** box:

![JiraNASCreateBug](/images/Contribute/JiraNASCreateBug.png "NAS Project Bug Creation Form")

Clicking *browse* opens a local system file browser for selecting the file.

{{< /tab >}}
{{< tab "Existing Tickets" >}}

Open the ticket in your browser and find the **Attachments** section.

![JiraNASBugHighlightPrivateAttachment](/images/Contribute/JiraNASBugHighlightPrivateAttachment.png "Jira Ticket: Private Attachments")

Click the *+* to open a dialog for adding a new file to the secure area.

![JiraNASAttachPrivateDialog](/images/Contribute/JiraNASAttachPrivateDialog.png "Attaching a private file")

Drag and drop the file, add any comments about it, then click *Attach*.
{{< /tab >}}
{{< /tabs >}}

Uploads in the **Private** section are only visible to project developers.
These files are also removed when the ticket is closed.
