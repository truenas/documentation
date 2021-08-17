---
title: "Creating a Report"
weight: 10
aliases:
  - /truecommand/tcgettingstarted/createreport/
  - /truecommand/reports/creation/
---

{{< toc >}}

The **Reports** page customizes system metrics charts for data analysis.

![ReportsList](/images/TrueCommand/2.0/ReportsList.png "Reports List")

## Creating a Report

Click *+ CREATE REPORT* to create a customizable report.
Enter a report name and an optional description for the report.

![ReportsCreate](/images/TrueCommand/2.0/ReportsCreateReportNameDescription.png "Create a new report")

Click *BROWSE WIDGETS* or *WIDGET* to add charts to the report.

![ReportsCreateWidgetsAdd](/images/TrueCommand/2.0/ReportsCreateReportWidgets.png "Adding widgets to a new report")

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

After adding charts to the report, click **SAVE** to make this report available for use.


![ReportsCreateReportSave](/images/TrueCommand/2.0/ReportsCreateReportSave.png "Reports Create Report Save")

After creating a report, you can click **GENERATE** to [generate the report]({{< relref "Generation.md" >}}) or you can go back to the reports page and make create another report.

![ReportsGenerate](/images/TrueCommand/2.0/ReportsGenerate.png "Reports Generate")

## Share Report

By default, the reports created by a user are available only to that user.
To share a report with other users or teams, open the Reports page and click the <mat-icon _ngcontent-fxr-c199="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">share</mat-icon> icon for the chart.

![ReportsSharing](/images/TrueCommand/2.0/ReportsShareReport.png "Reports Sharing")

You can share reports with individual users or entire teams.
