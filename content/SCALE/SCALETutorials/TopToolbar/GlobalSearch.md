---
title: "Using UI Global Search"
description: "This tutorial shows how to use the Global Search feature to explore the TrueNAS SCALE UI and documentation."
weight: 10
tags:
---
 
TrueNAS SCALE 24.10 (Electric Eel) introduces global search function that allows users to quickly access screens and management functions across the TrueNAS UI.
Global search also allows users to redirect queries to the TrueNAS Documentation Hub to retrieve relevant documentation.

{{< trueimage src="/images/SCALE/Dashboard/TopToolbar.png" alt="TrueNAS SCALE Top Toolbar" id="TrueNAS SCALE Top Toolbar" >}}

## Searching UI Fields

Click the **Search UI** bar or type <kbd>Ctrl + /</kbd> to select the UI global search.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchSelected.png" alt="Search UI Bar" id="Search UI Bar" >}}

### Entering a Query

Enter a keyword to search for elements within the TrueNAS UI.
For example, enter *SMB* to search for results relating to SMB shares and the SMB service.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchQuery.png" alt="UI Global Search Query" id="UI Global Search Query" >}}

Global search returns UI screens, widgets, and button names matching the entered query.
Click **View More** to view additional results, if needed.

### Navigating Results

Select a screen result under **UI** to go to the matching screen within the TrueNAS UI.
For example, select **Shares <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> SMB** to go to the [**SMB**]({{< relref "SMBSharesScreens.md" >}}) screen.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchResult.png" alt="Global Search Result - Screen" id="Global Search Result - Screen" >}}

Select a widget or button result to go to the screen containing the element.
For example, select **Shares <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> SMB <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> SMB Status <i class="material-icons" aria-hidden="true" title="Arrow Right">arrow_right_alt</i> Notifications** to go to the **Notifications** tab on the [**SMB Status**]({{< relref "SMBSharesScreens.md#smb-status-screens" >}}) screen.

{{< trueimage src="/images/SCALE/Dashboard/GlobalSearchElementResult.png" alt="Global Search Result - Element" id="Global Search Result - Element" >}}

TrueNAS SCALE highlights the selected element for visibility.

## Searching Documentation

Click **Search Documentation for <<*query*>>** to redirect the query to the TrueNAS Documentation Hub.
