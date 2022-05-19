---
title: "Configuring S.M.A.R.T."
weight: 90
aliases: /core/services/smart/
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) (Self-Monitoring, Analysis and Reporting Technology) is an industry standard for disk monitoring and testing.
Disks can be monitored for problems using several different kinds of self-tests.

Go to the **Services** page and find the **S.M.A.R.T.** entry.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesSMARTOptions](/images/CORE/12.0/ServicesSMARTOptions.png "S.M.A.R.T. Options")

Define a number of minutes for smartd to wake up and check for configured to run in **Check Interval** and select a **Power Mode** (tests only run with *Never*).

Define the **Difference** in degrees of Celsius. S.M.A.R.T. sends alerts if the temperature of a drive changes by N degrees Celsius since the last report.

Define the **Threshold** in degrees of Celsius. S.M.A.R.T. sends messages with a log level of LOG_INFO if the temperature exceeds the threshold.

Define the **Threshold** in degrees of Celsius. S.M.A.R.T. will message with a log level of LOG_CRIT if the temperature exceeds

## Service Activation

When finished configuring the server or client service, click **SAVE**.
Start the service by clicking the related toggle in **Services**.
To check the current state of the service, hover over the toggle.

Setting **Start Automatically** starts the service whenever TrueNAS completes booting and the network and data pools are running.