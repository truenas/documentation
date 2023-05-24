---
title: "S.M.A.R.T. Tests Screens"
description: "This article describes the screens and fields in the TrueNAS SCALE S.M.A.R.T. tests screens."
weight: 60
aliases: /scale/scaleuireference/dataprotection/smarttestsscreensscale/
tags:
- scalesmart
- scaledisks
---

{{< toc >}}


The **Data Protection** screen **S.M.A.R.T. Tests** widget displays the S.M.A.R.T. tests configured on the system and provides access to create or edit S.M.A.R.T. tests.

![DataProtectionSMARTTestsAllSCALE](/images/SCALE/22.12/DataProtectionSMARTTestsAllSCALE.png "Data Protection S.M.A.R.T. Tests")

The **S.M.A.R.T. Tests** widget displays **No S.M.A.R.T. Tests configured** when no tests are configured on the system.

![SmartTestsWidgetNoTests](/images/SCALE/22.12/SmartTestsWidgetNoTests.png "S.M.A.R.T. Tests Widget No Tests")

After adding tests, each becomes a link to open the **[Edit S.M.A.R.T. Tests](#add-and-edit-smart-test-screens)** screen.

![DataProtectionSMARTTestWidgetSCALE](/images/SCALE/22.12/DataProtectionSMARTTestWidgetSCALE.png "S.M.A.R.T. Test Widget with Test")

Click on **S.M.A.R.T. Tests** widget header to open the **S.M.A.R.T. Tests** list screen.

![DataProtectionSMARTTestsListSCALE](/images/SCALE/22.12/DataProtectionSMARTTestsListSCALE.png "S.M.A.R.T. Tests List")

Use **Columns** to display options to customize the information displayed in the list screen. Options are **Unselect All**, **Description**, **Frequency**, **Next Run**, and **Reset to Defaults**.

**Add** opens the **Add S.M.A.R.T. Test** configuration screen.

The <span class="material-icons">more_vert</span> for each test has two options, **Edit** and **Delete**. 
**Edit** opens the **Edit S.M.A.R.T. Test** configuration screen and **Delete** opens a **Delete** confirmation dialog. 
The <span class="material-icons">delete</span> delete icon on the widget also opens the **Delete** dialog for the selected S.M.A.R.T. test. Click **Confirm** to activate **Delete**.

![DeleteSMARTTest](/images/SCALE/22.12/DeleteSMARTTest.png "Delete S.M.A.R.T. Test")

### Add and Edit SMART Test Screens
The **Add S.M.A.R.T. Test** and **Edit S.M.A.R.T. Test** configuration screens displays the same settings.

![DataProtectionAddSMARTTestSCALE](/images/SCALE/22.12/DataProtectionAddSMARTTestSCALE.png "Add S.M.A.R.T. Test")

![DataProtectionEditSMARTTestSCALE](/images/SCALE/22.12/DataProtectionEditSMARTTestSCALE.png "Edit S.M.A.R.T. Test")

{{< include file="content/_includes/TasksSMARTAddFields.md" type="page" >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="content/_includes/SCALEAdvancedScheduler.md" type="page" >}}
{{< /expand >}}

{{< taglist tag="scalesmart" limit="10" >}}
