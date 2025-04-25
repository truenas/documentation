---
title: "Article Template"
description: "Provides a sample article template for contributing TrueNAS documentation."
weight: 40
tags:
- contributing
---

This template provides general information on constructing and writing TrueNAS tutorial articles.
It contains a template example article with front matter, styling, and syntax examples.

Refer to the [Style Guide]({{< ref "Style" >}}) for specific text syntax and formatting examples, Markdown and Hugo website enhancements, and content guidelines to follow.

Application tutorials follow a specific format that covers the installation screens and deployment process.
If submitting a tutorial for a community-maintained application article, please use the [application tutorial template]({{< ref "/Contributing/Applications/AppArticleTemplate" >}})

## Front Matter
Every article needs a front-matter section that contains these parameters:
* `title` for the article title.
* `description` that provides a summary of the article content.
  Keep the description to less than 160 characters. The character count includes spaces between alphanumeric and special characters.
* `weight` that orders the article in the table of contents.

Optional front matter parameters are:
* `aliases` where you include links to articles removed from the website that should be directed to this page.
* `tags` where you include a single word or a few word flags for the article content.
  Tags are used internally to pull articles into the **Related Articles** sections at the bottom of articles and externally for search optimization.

## Article Template
Feel free to copy this article template example and rework it when writing your articles for this website.
You can copy the <file>template/</file> directory to provide a starting point for contributing an article or article bundle that includes links to images.
```
---
title: "Example Article"
description: "This is a template for any tutorial article on the Documentation Hub website."
weight: 5
---

This is an introductory paragraph for the article.
It should explain the purpose of the procedure, describe what the feature is or can be used to accomplish, and can include links to other websites about the article subject or that support the procedure the article covers.
The introduction typically includes an explanation of why this procedure is beneficial and/or who is the typical audience for this content.
When the procedure is advanced, users might want some references to other sources that have more details or deeper explanations about what the system is doing.

After introducing the material, describe the process to accomplish the task.
Writing in short, declarative sentences that are structured very simply can help readers avoid confusion.
It also makes translations easier!

## Prerequisites
This section can be titled **Prerequisites**, **Before You Begin**, or **First Steps**.
It should cover actions the reader should or must take before they begin the procedure detailed in the article.

Typical first steps might include configuring data storage, adding certificates, and creating user accounts on the TrueNAS system or remote provider if describing a procedure involving a third party.

## How to Do *X*

Begin outlining the procedure steps.
The first step is typically to log in to the system and go to a location like **System > General**.
Including a screenshot is a good way for the reader to confirm they are in the correct location and to get more context.

![Image Name Text](/images/SCALE/imagename.png "Image Name Text")

{{\< hint type="danger" >}}
Danger, information, and warnings admonition boxes include information about common errors that are made during the procedure.
These admonitions are best placed before listing out any specific changes to make to the system.
This can help prevent mistakes and educate the reader about common troubleshooting steps.
{{\< /hint >}}

The step procedure should not exceed a maximum of 10 steps in an ordered list.
If the procedure exceeds 10 steps, use sub-steps.
A good practice is to organize the procedure into what to do and how to do it steps.
What steps are the primary list items, and the how to do it are the sub-step items.

Enter screen names and fields on screens in **bold** and a variable value in *italics*.

Be precise with buttons or setting names to avoid confusing the reader.

### Entering Commands

Sometimes a user might need to open a shell to enter a command.
To avoid confusing readers, use either the back backtick or HTML <code> and </code> tags for any command name or string.
If the command string includes a variable, use the HTML <code> and <i> open and close tags to show the string properly formatted.
Do not use all caps for a command or variable, or brackets to enclose a variable.
Some CLI and API command syntax might require the square or curly brackets as part of the string and some commands or command values are case sensitive.

Use inline and multi-line code blocks to define exactly what to type and show an example of the output.
Entering `ifconfig` shows more information about the network interfaces:
```
```
root@freenas[~]# ifconfig
em0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> metric 0 mtu 1500
        options=98<VLAN_MTU,VLAN_HWTAGGING,VLAN_HWCSUM>
        ether 00:1b:21:7e:70:ca
        hwaddr 00:1b:21:7e:70:ca
        inet 1.234.56.789 netmask 0xffc11 broadcast 1.234.56.789
        nd6 options=1<PERFORMNUD>
        media: Ethernet autoselect (1000baseT <full-duplex>)
        status: active
```
```

## Final Steps

Make sure to include any final steps the user can take to confirm they executed the procedure correctly.
Be specific!
Using vague terms can mislead or confuse the reader. Do not assume the reader knows what you are talking about. 
Instead, directly state what happens. for example:
"Click *Generate Debug* to compile the system information into a *.tar* file.
A dialog opens to download the file to your local system."

This is a good place to put any troubleshooting tips, in case the user is not seeing the expected result.

If a command or setting should produce a specific result, provide that information.
If the command or setting does not produce the result provide information on what that means and how to correct or resolve the problem.

```
