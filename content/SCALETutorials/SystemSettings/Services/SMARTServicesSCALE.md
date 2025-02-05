---
title: "S.M.A.R.T."
description: "Provides information on S.M.A.R.T. service screen settings."
weight: 40
tags:
 - services
 - smart
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

{{< hint type=note >}}
There is a special consideration when installing TrueNAS in a Virtual Machine (VM), as S.M.A.R.T services monitor actual physical devices, which are abstracted in a VM. After the installation of TrueNAS completes on the VM, go to **System** > **Services** > and click the blue toggle button on the S.M.A.R.T. service to stop the service from running. Clear the **Start Automatically** checkbox so the service does not automatically start when the system reboots.
{{< /hint >}}

Note that the table(s) below can be reorganized by clicking on the column titles. This allows you to reorganize the information in each column by togglnig between a descending and ascending order.

Use the **Services > S.M.A.R.T.** screen to configure when S.M.A.R.T. tests run and when to trigger alert warnings and send emails.

![SMARTSystemServicesStoppedSCALE](/images/SCALE/SystemSettings/SMARTSystemServicesStoppedSCALE.png "Services S.M.A.R.T. Options")

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Configure** icon to open the screen.

![SMARTSystemServicesGeneralOptionsSCALE](/images/SCALE/SystemSettings/SMARTSystemServicesGeneralOptionsSCALE.png "Services S.M.A.R.T. Options")

Enter the time in minutes [smartd](https://www.freebsd.org/cgi/man.cgi?query=smartd&manpath=FreeBSD+11.1-RELEASE+and+Ports) to wake up and check if any tests are configured to run in **Check Interval**.

Select the **Power Mode** from the dropdown list. Choices include **Never**, **Sleep**, **Standby**, and **Idle**. TrueNAS only performs tests when you select **Never**.

Set the temperatures that trigger alerts in **Difference**, **Informational** and **Critical**.

Click **Save** after changing any settings.

Start the service.
