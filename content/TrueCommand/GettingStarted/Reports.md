---
title: "Managing Reports"
description: "How to create and view system reports."
tags: ["TrueCommand Users"]
weight: 60
---

{{< toc >}}

The **Reports** page is used to customize charts of system metrics for data analysis.

![ReportsList](/images/TrueCommand/1.3/ReportsList.png "Reports List")

These reports are created by or shared with the current TrueCommand user.
There are default reports that are designed to generate a basic system overview chart.
These show details like network traffic, storage, and memory utilization for the chosen system.

Viewing a report requires that the user has access to the systems that are being analyzed.

## Creating a Report

Click *+ CREATE REPORT* to create a customizable report.
Enter a report name and an optional description for the report.

![ReportsCreate](/images/TrueCommand/1.3/ReportsCreate.png "Create a new report")

Click *BROWSE WIDGETS* or *WIDGET* to add charts to the report.

![ReportsCreateWidgetsAdd](/images/TrueCommand/1.3/ReportsCreateWidgetsAdd.png "Adding widgets to a new report")

### Custom Charts

Most charts are already configured to report certain settings.
To create a custom chart with custom settings, add a *Custom Area Chart*, *Custom Bar Chart*, or *Custom Line Chart*.
Fill in these options when adding a custom chart:

* General settings: Enter a Title, Subtitle (optional), Axis label (optional), Point size, Line size, Y min (optional), and Y max (optional) for the chart.
  `Stack the values` can be set to bring data points on the chart closer together.
  This setting is useful for charts that have many different data points at the max Y value.
* Data sources: Add data sources to the chart by expanding a category and selecting appropriate sources.
  Multiple data sources can be added to one chart.
* Summary: This step shows the all of the chosen values.
  Click *SAVE* to add the custom chart to the report or *BACK* to go back and change a setting or data source.

After adding charts to the report, click *SAVE* to make this report available for use.

After creating a report, click *GENERATE* to generate the report.

![ReportsGenerateSystemSelect](/images/TrueCommand/1.3/ReportsGenerateSystemSelect.png "Selecting System for a report")

Next, add in the range and systems to be included in the report and click *GENERATE*.

![ReportsView](/images/TrueCommand/1.3/ReportsView.png "Reports View")

The report will be generated and displayed.

![Reports Generated](/images/TrueCommand/1.3/ReportsGenerated.png "Reports Generated")

## Share Report

By default, the reports created by a user are available only to that user.
To share a report with other users or teams, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu > **Reports** screen and click *Share*.
Reports can also be shared after generation.

![ReportsSharing](/images/TrueCommand/1.3/ReportsSharing.png "Reports Sharing")

Reports can be shared with individual users or entire teams.
Set either *OWNER* or *SHARED WITH* for the desired user.
Users with the **SHARED WITH** status can view the report, while the **OWNER** status allows that user to edit the report.
Clicking the **OWNER** or **SHARED WITH** text toggles every name in the list.

## Viewing a System Report

Open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu > **Reports** page and click *Generate report* <i class="fa fa-eye" aria-hidden="true" title="eye"></i> on the appropriate report.
Click *GENERATE* to select the systems and time frame for the report.

![ReportsGenerateDates](/images/TrueCommand/1.3/ReportsGenerateDates.png "Report Time Frame")
<br>

![ReportsGenerateDatesSelect](/images/TrueCommand/1.3/ReportsGenerateDatesSelect.png "Select dates for a report")

A non-administrative user must have the appropriate permissions to view data from specific systems.

Clicking *Confirm* shows the saved charts from the report, populated with system data according to the selected amount of time.

![ReportsGenerated](/images/TrueCommand/1.3/ReportsGenerated.png "Report Generated")