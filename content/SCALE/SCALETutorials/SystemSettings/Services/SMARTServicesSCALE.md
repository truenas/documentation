---
title: "Configuring S.M.A.R.T. Service"
description: "This article provides information on S.M.A.R.T. service screen settings."
weight: 40
aliases: /scale/scaleuireference/dataprotection/smartservicesscreen/
tags:
 - scalesmarttests
 - scaleservices
 - scalesmart
---

{{< toc >}}

Use the **Services > S.M.A.R.T.** screen to configure when S.M.A.R.T. tests run and when to trigger alert warnings and send emails.

![SMARTSystemServicesStoppedSCALE](/images/SCALE/22.12/SMARTSystemServicesStoppedSCALE.png "Services S.M.A.R.T. Options")

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Configure** icon to open the screen.

![SMARTSystemServicesGeneralOptionsSCALE](/images/SCALE/22.12/SMARTSystemServicesGeneralOptionsSCALE.png "Services S.M.A.R.T. Options")

Enter the time in minutes [smartd](https://www.freebsd.org/cgi/man.cgi?query=smartd&manpath=FreeBSD+11.1-RELEASE+and+Ports) to wake up and check if any tests are configured to run in **Check Interval**.

Select the **Power Mode** from the dropdown list. Choices include **Never**, **Sleep**, **Standby**, and **Idle**. TrueNAS only performs tests when you select **Never**.

Set the temperatures that trigger alerts in **Difference**, **Informational** and **Critical**.

Click **Save** after changing any settings.

Start the service.

{{< taglist tag="scalesmart" limit="10" >}}
