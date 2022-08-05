---
title: "Configuring S.M.A.R.T."
description: "Configurinng Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) on your TrueNAS."
weight: 90
aliases: /core/services/smart/
tags:
- coresmart
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) Self-Monitoring, Analysis and Reporting Technology (SMART) is an industry standard. It performs disk monitoring and testing. Several different kinds of self-tests check disks for problems.

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> in **Services > S.M.A.R.T.** to configure the service.

![ServicesSMARTOptions](/images/CORE/13.0/ServicesSMARTOptions.png "S.M.A.R.T. Options")

**General Options**

| Name | Description |
|------|-------------|
| **Check Interval** | Enter number of minutes to determine how often the smartd daemon monitors for configured tests to be run. |
| **Power Mode** | Select from dropdown list: **Never**, **Sleep**, **Standby** or **Idle**. Tests only run with **Never**. |
| **Difference** | Enter in degrees Celsius. S.M.A.R.T. sends alerts if the temperature of a drive changes by N degrees Celsius since the last report. |
| **Informational** | Enter in degrees Celsius. S.M.A.R.T. sends messages with a log level of LOG_INFO if the temperature exceeds the threshold. |
| **Critical** | Enter in degrees Celsius. S.M.A.R.T. sends messages with a log level of LOG_CRIT if the temperature exceeds the threshold. |

## Service Activation

Click **SAVE** when finished configuring the server or client service.
Start the service by clicking the related toggle in **Services**.
To check the current state of the service, hover over the toggle.

Selecting **Start Automatically** starts the service whenever TrueNAS completes booting. The network and data pools must be running.

{{< taglist tag="coresmart" limit="10" >}}
