---
title: "Markdown Template for New Articles"
linkTitle: "Article Template"
description: "An Example of the Article Template for Documentation usage."
tags: ["example","documentation"]
weight: 4
---

Every article needs a "front matter" section that contains the article title and a numeric "weight" that orders the article in the table of contents.
You can also include a shortened title for the table contents.

The rest of this article contains an example article with front matter, styling, and syntax examples.
Please feel free to copy this example and rework it when writing your own articles for this website.
The `template/` directory can also be copied to provide a starting point for contributing an article bundle that has additional images.
You can refer to the [Style Guide](style.md) for specific text syntax and formatting examples.

```
---
title: "Example Article"
linkTitle: "Example"
weight: 5
---

This is an introductory paragraph for the article.
It should explain the purpose of the procedure and link to or outline any procedures that must be done before the tasks in the article can be accomplished.
The introduction typically includes an explanation of why this procedure is beneficial and/or who is the typical audience for this content.
When the procedure is advanced, users might want some references to other sources that have more details or deeper explanations about what the system is doing.

After introducing the material, describe the process to accomplish the task.
Writing in short, declarative sentences that are structured very simply can help readers avoid confusion.
It also makes translations easier!

## How to Do X

The first step is typically to log in to the system and go to a location like *System > General*.
Including a screenshot is a good way for the reader to confirm they're in the correct location and get more context.

{{\< imgproc example-image Fit "960x695" />}}

{{\% alert title="Warning" color="warning" %}}
Warnings about common errors that are made during the procedure are best placed before listing out any specific changes to make to the system.
This can help prevent mistakes and educate the reader about common troubleshooting steps.
{{\% /alert %}}

Now find the settings to change or button to click to move forward in the procedure.
Button or setting names need to be precise to avoid confusing the reader.
UI labels are typically *emphasized*.

### More Information From the Shell

Sometimes a user will need to open the *Shell* and enter a command.
Use inline and multi-line code-blocks to define exactly what to type and show an example of the output.
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

Make sure to include any final steps the user can take to confirm the procedure was done correctly.
Be specific!
Using vague terms can be misleading and result in confusion.
Instead, directly say what happens:
"Clicking *Generate Debug* compiles system information into a *.tar* file.
A dialog opens to download the file to your local system."

This is also a good place to put any troubleshooting tips, in case the user isn't seeing the expected result.
```
