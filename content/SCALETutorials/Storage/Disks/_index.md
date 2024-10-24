---
title: "Disks"
description: "Articles with instructions for managing, replacing, and wiping disks."
geekdocCollapseSection: true
weight: 20
tags:
 - disks
 - smart
keywords:
- network attached storage devices
- enterprise data storage solutions
- nas data storage
---

To manage disks, go to **Storage** and click **Disks** on the top right of the screen to display the **Storage Disks** screen.

Select the disk on the list, then select **Edit**.

The **Disks** page lets users edit disks, perform manual tests, and view S.M.A.R.T. test results. Users may also delete obsolete data off an unused disk.

## Performing Manual  S.M.A.R.T. Testing

Select the disk(s) you want to perform a S.M.A.R.T. test on and click **Manual Test**.

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestDialog.png" alt="Manual Test Dialog" id="Manual Test Dialog" >}}

* **Long**  runs SMART Extended Self Test. This scans the entire disk surface and can take many hours on large-volume disks.
* **Short** runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* **Conveyance** runs a SMART Conveyance Self Test.
  This self-test routine is intended to identify damage incurred during transporting of the device.
  This self-test routine requires only minutes to complete.
* **Offline** runs SMART Immediate Offline Test.
  The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log.

Click **Start** to begin the test. Depending on the test type you choose, the test can take some time to complete. TrueNAS generates alerts when tests discover issues.

For information on automated S.M.A.R.T. testing, see the [S.M.A.R.T. tests]({{< relref "/SCALETutorials/DataProtection/SMARTTestsSCALE.md" >}}) article.

### S.M.A.R.T. Test Results

To review test results, expand the disk and click **S.M.A.R.T. Test Results**.

{{< trueimage src="/images/SCALE/DataProtection/SMARTTestResultsofDiskExpanded.png" alt="S.M.A.R.T. Test Results Screen" id="S.M.A.R.T. Test Results Screen" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
