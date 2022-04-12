---
title: "Documentation Hub"
geekdocCollapseSection: true
---

# TrueNAS: Open Storage

TrueNAS is the world's most popular Open Source storage operating system and is the most efficient solution for managing and sharing data over a network. It is the simplest way to create a safe, secure, centralized, and easily accessible place for your data. TrueNAS Open Storage provides unified ZFS-based storage for file, block, object, and application data.

Whether you're looking to protect and share your company data or your family photos, [**TrueNAS CORE**]({{< relref "/CORE/_index.md" >}}) provides a secure, centralized, and easily accessible place for your data.
When combined with our high-availability hardware and [**TrueCommand**]({{< relref "/TrueCommand/_index.md" >}}) single interface management solution, TrueNAS Enterprise ensures that your data is always safe, secure, and available. Later, [**TrueNAS SCALE**]({{< relref "/SCALE/_index.md" >}}) will evolve NAS functionality even further with container support, dual active system configurations, and hyper-converged architecture.

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
Documentation articles follow the latest supported software releases, with previous version documentation available from the [Docs Archive]({{< relref "Archive.md" >}}):

| Software | Current Documented Version |
|----------|-------------------------------|
| TrueNAS CORE & Enterprise | 13.0 |
| TrueNAS SCALE | 22.02 Angelfish |
| TrueCommand | 2.1 |
  
The navigation pane to the left has topics that you can expand to find the specific knowledge you're looking for.
You can also use the search bar above the navigation pane if you know specific keywords for what you're looking for.   

We encourage all users to provide feedback about the Documentation Hub and TrueNAS by [**Reporting Issues**]({{< relref "/Contributing/IssueReporting/_index.md" >}}) or suggesting [**updates**]({{< relref "ContentUpdate.md" >}}) and [**new articles**]({{< relref "/Contributing/Documentation/NewArticles/_index.md" >}}).  
  
Can't find what you're looking for? Just want to be part of the TrueNAS community? Join our [**Community Forums**](https://www.truenas.com/community/) or the [**TrueNAS subreddit**](https://www.reddit.com/r/truenas/).

## What's New on the Documentation Hub?

The Documentation Hub has had some changes for the CORE 13.0 release!

### Software Release Notes Rework

As part of unifying content, release notes for the different software applications are now available with the related documentation:
* CORE: https://www.truenas.com/docs/core/corereleasenotes/
* SCALE: https://www.truenas.com/docs/scale/scalereleasenotes/
* TrueCommand: https://www.truenas.com/docs/truecommand/tcreleasenotes/

These locations now contain all the release notes for each release of the current Major Version the live Documentation Hub is tracking.
Release notes and notices that are relevent to previous major versions are available in the [Documentation Archive](/archive) alongside static copies of that version's documentation.

Each new unified release notes article for CORE, SCALE, and TrueCommand also contains the development roadmap for each major version.
The current minor release notes are placed at the top of the article and previous minor release notes placed behind an expandable element, so alleviate vertical scrolling.

### Topical Organization for Software Documentation

To better provide purposeful and direct documentation, content is reorganized into three primary subsections:
* **Getting Started Guide** ([CORE](/core/gettingstarted/), [SCALE](/scale/gettingstarted/)): this guide provides background information about the software and provides step-by-step instructions for installing and some initial configuration of the software.
* **Configuration Tutorials** ([CORE](/core/coretutorials/), [SCALE](/scale/scaletutorials/)): content in this section is written for accomplishing some specific task in the software.
  Tutorials range from simple procedures to complicated use-cases.
* **UI Reference Guide** ([CORE](/core/uireference/), [SCALE](/scale/scaleuireference/)): This is a descriptive guide of the various menus and options you will encounter when using the software.
  The structure of this section *parallels* the layout of the TrueNAS web interface.

Each top-level section of CORE and SCALE documentation also has a **Download or Print** option.
This combines all the individual articles in that section into a single document format that can be downloaded as a PDF, physically printed, or saved as HTML.
  
