---
title: "Documentation Hub"
geekdocCollapseSection: true
---

This is a paragrph of empty text
it has speling and grammar errors it is intended as an example.

This is another paragraph of empty text for multi-line changes.
Lorum ipsum...


# TrueNAS: Open Storage

{{< hint info >}}
There are some [updates](#whats-new-on-the-documentation-hub) to the Docs Hub!
{{< /hint >}}

TrueNAS is the world's most popular Open Source storage operating system and is the most efficient solution for managing and sharing data over a network.
It is the simplest way to create a safe, secure, centralized, and easily accessible place for your data.
TrueNAS Open Storage provides unified ZFS-based storage for file, block, object, and application data.

Whether you're looking to protect and share your company data or your family photos, [**TrueNAS CORE**]({{< relref "/CORE/_index.md" >}}) provides a secure, centralized, and easily accessible place for your data.
When combined with our high-availability hardware and [**TrueCommand**]({{< relref "/TrueCommand/_index.md" >}}) single interface management solution, TrueNAS Enterprise ensures that your data is always safe, secure, and available.
[**TrueNAS SCALE**]({{< relref "/SCALE/_index.md" >}}) evolves NAS functionality even further with container support, dual active system configurations, and hyper-converged architecture.

## First Steps

<div style="float: left;margin-right: 1rem;">

![DooderRocket](/images/DooderRocket.jpg "Blast Off!")

</div>

**Ready to get started? Click your platform below to begin setting up your system.**

{{< columns >}}
![](/favicon/TN-favicon-32x32.png) [**TrueNAS CORE and Enterprise**]({{< relref "/CORE/GettingStarted/Install.md" >}})<br>

![](/favicon/TNScale-favicon-32x32.png) [**TrueNAS SCALE**]({{< relref "/SCALE/GettingStarted/_index.md" >}})
<--->
![](/favicon/TC-favicon-32x32.png) [**TrueCommand**]({{< relref "/TrueCommand/TCGettingStarted/_index.md" >}})<br>

![](/favicon/iXfavicon-32x32.png) [**TrueNAS Hardware**]({{< relref "/Hardware/_index.md" >}})
{{< /columns >}}

## Using the Documentation Hub

<div style="float: left;margin-right: 1rem;">

![DooderLaptop](/images/DooderLaptop.jpg "Let's Go!")

</div>

The Documentation Hub has all of the information you need to set up and manage your TrueNAS system.
Documentation articles follow the latest supported software releases, with previous version documentation available in the [Docs Archive]({{< relref "Archive.md" >}}):

| Software | Current Documented Version | Previous Major Version |
|----------|----------------------------|------------------------|
| TrueNAS CORE & Enterprise | 13.0 | [12.0](https://www.truenas.com/docs/files/CORE12.0Docs.pdf) ([Release Notes]({{< relref "Archive.md#truenas-unified" >}})) |
| TrueNAS SCALE | 22.02 Angelfish | N/A |
| TrueCommand | 2.2 | [2.1](https://www.truenas.com/docs/files/TC2.1Docs.pdf)  |

{{< hint ok >}}
Preview builds of the draft SCALE Bluefin documentation are available [here](https://truenas-blufin-beta-docs.netlify.app/)!
{{< /hint >}}

The navigation pane to the left is sorted into several topics that you can expand to find the specific knowledge you're looking for:

* **[TrueNAS CORE and Enterprise]({{< ref "/core/" >}})** contains content specific to the FreeBSD-based CORE software.
  This includes a **Getting Started Guide**, **Configuration Tutorials**, and reference documentation for the **UI** and **API**.
* **[TrueNAS SCALE]({{< ref "/scale/" >}})** contains content specific to the Linux-based SCALE software.
  This includes a **Getting Started Guide**, **Configuration Tutorials**, and reference documentation for the **UI** and **API**.
* **[TrueNAS Upgrades]({{< ref "/truenasupgrades/" >}})** documents current upgrade information for both CORE and SCALE, including the active update trains and developer images for upcoming versions.
* **[Solutions]({{< ref "/solutions/" >}})** provides version-agnostic background information and tutorials about general system use cases or integrations with other vendor solutions.
* **[TrueCommand]({{< ref "/truecommand/" >}})** contains content specific to the latest support release of TrueCommand.
  This includes installation instructions, reference information about each section of the TrueCommand web interface, and tutorials for specific use-cases.
* **[TrueNAS Systems]({{< ref "/hardware/" >}})** has content specific to the various hardware platforms that iXsystems builds and sells specifically for use with TrueNAS.
* **[Contributing]({{< ref "/contributing/" >}})** provides guidance for those seeking to contribute to the open-source projects.
* **[References]({{< ref "/references/" >}})** provides general background knowledge about concepts and terms and some of the underlying technologies that are used in TrueNAS.

The **More** menu in the lower-left side of the screen has links to security notices, archived documentation, and the GitHub source repository for this website.
An RSS feed is also available here.

You can also use the search bar above the navigation pane if you know specific keywords for what you're looking for.

Contributors welcome! Anyone can contribute new content or feedback about the Documentation Hub and TrueNAS by [**Reporting Issues**]({{< relref "/Contributing/IssueReporting/_index.md" >}}) or suggesting [**updates**]({{< relref "ContentUpdate.md" >}}) and [**new articles**]({{< relref "/Contributing/Documentation/NewArticles/_index.md" >}}).  

Can't find what you're looking for? Just want to be part of the TrueNAS community? Join our [**Community Forums**](https://www.truenas.com/community/) or the [**TrueNAS subreddit**](https://www.reddit.com/r/truenas/).

## What's New on the Documentation Hub?

{{< include file="/_includes/WhatsNew.md" type="page" >}}
