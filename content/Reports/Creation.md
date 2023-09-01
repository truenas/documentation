---
title: "Creating a Report"
description: "How to create a custom metrics report in TrueCommand."
weight: 10
aliases:
  - /truecommand/tcgettingstarted/createreport/
  - /truecommand/reports/creation/
---

{{< toc >}}

The **Reports** page customizes system metrics charts for data analysis.

![ReportsList](/images/TrueCommand/2.0/ReportsList.png "Reports List")

## Creating a Report

Click **+ CREATE REPORT** to create a customizable report.
Give the report a name and an optional description.

![ReportsCreate](/images/TrueCommand/2.0/ReportsCreateReportNameDescription.png "Create a new report")

Click **BROWSE WIDGETS** or **WIDGET** to add charts to the report.

![ReportsCreateWidgetsAdd](/images/TrueCommand/2.0/ReportsCreateReportWidgets.png "Adding widgets to a new report")

### Custom Charts

TrueCommand already configures most charts to report specific settings.
To create a custom chart with custom settings, add a **Custom Area Chart**, **Custom Bar Chart**, or **Custom Line Chart**.
Fill in the following options when adding a custom chart:

* General settings: Enter a Title, Subtitle (optional), Axis label (optional), Point size, Line size, Y min (optional), and Y max (optional) for the chart.
  You can set `Stack the values` to bring data points on the chart closer together.
  `Stack the values` is helpful for charts with many different data points at the max Y value.
* Data sources: Add data sources to the chart by expanding a category and selecting which sources you want.
  You can add multiple data sources to one chart.
* Summary: This step shows all chosen values.
  Click **SAVE** to add the custom chart to the report. Click **BACK** to change a setting or data source.

After adding charts to the report, click **SAVE** to make it available for use.

![ReportsCreateReportSave](/images/TrueCommand/2.0/ReportsCreateReportSave.png "Reports Create Report Save")

After creating a report, you can click **GENERATE** to [generate the report]({{< relref "Generation.md" >}}), or you can go back to the reports page and create another.

![ReportsGenerate](/images/TrueCommand/2.0/ReportsGenerate.png "Reports Generate")

## Edit a Report

Open the **Reports** page and click <i class="material-icons" aria-hidden="true" title="edit">edit</i> next to a report name to rename it, add a description, or add/delete a widget.

## Share Report

By default, user-created reports are available only to that user.
To share a report with other users or teams, open the **Reports** page and click the <mat-icon _ngcontent-fxr-c199="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">share</mat-icon> icon for the chart.

![ReportsSharing](/images/TrueCommand/2.0/ReportsShareReport.png "Reports Sharing")

You can share reports with individual users or entire teams.

## Delete a Report

To delete a report click <i class="material-icons" aria-hidden="true" title="Delete">delete</i>. This permanently deletes the report but you can recreate it as needed.
