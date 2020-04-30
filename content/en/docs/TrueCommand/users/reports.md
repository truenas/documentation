---
title: "System Reporting"
linkTitle: "Reporting"
description: "How to configure system reports in TrueCommand"
---

{{% pageinfo version="TrueCommand 1.2" %}}
{{% /pageinfo %}}

The **Reports** page has a list of reporting configurations that are shared with the current user.
These configurations are used to generate reports for connected systems that the user has permission to access.

<img src="/images/tc-reports.png">
<br><br>

There are default reporting configurations that are designed to generate a basic system overview report.
These show details like network traffic, storage, and memory utilization for the chosen system.

## Create Report Configuration

Click CREATE REPORT to create a customizable report. Enter a report name and an optional description for the report. Click BROWSE WIDGETS or WIDGET to add charts to the report. Most charts are already configured to report certain settings. To create a custom chart with custom settings, add Custom Area Chart, Custom Bar Chart, or Custom Line Chart. Fill in these options when adding a custom chart:

<img src="/images/tc-reports-widgets.png">
<br><br>

    General Settings: Enter a Title, Subtitle (optional), Axis label (optional), Point size, Line size, Y min (optional), and Y max (optional) for the chart. Stack the values can be set to bring data points on the chart closer together. This setting is useful for charts that have many different data points at the max Y value. Click NEXT.
    Data sources: Add data sources to the chart by clicking expand and selecting appropriate sources. Multiple data sources can be added to one chart. Click NEXT.
    Summary: This step shows the values set in General Settings and the data sources selected. Click SAVE to continue. Click BACK to go back and change a setting or data source.

After adding charts to the report, click SAVE to create a report specific to that user.

## Generating a System Report

Go to User Menu ‣ Reports and click show on the appropriate report. Select the systems to be used for the report. Select the time period for the report. 1D generates a report with data going back one day, 1W generates a report with data going back one week, and 1MO generates a report with data going back one month. Click GENERATE to view the report.

<img src="/images/tc-reports-view.png">
<br><br>

## Share Report

Reports can be shared by going to User Menu ‣ Reports and clicking report share on the report to be shared. Reports can also be shared by going to User Menu ‣ Reports ‣ show and clicking SHARE REPORT.

Reports can be shared with individual users or entire teams. Set either OWNER or SHARED WITH for the desired user. Every user can be by clicking OWNER or SHARED WITH. Users with OWNER staus can edit the report. Users with SHARED WITH status can only view the report. Click SAVE to confirm the sharing settings.

<img src="/images/tc-reports-share-users.png">
<br><br>