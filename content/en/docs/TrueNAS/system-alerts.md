---
title: "Configuring System Alerts"
linkTitle: "Configuring System Alerts"
description: "A how-to guide on how to configure basic system alerts"
---

TrueNAS provides the benefit of customizing alerts and alert services.

## Alert Services

testing relative paths
To add additional alert services, go to **System > Alert Services > ADD**.
Enter a name for the alert service and select the type. Next, decide on the
severity of the alert and select an alert *Level* from the drop-down. Finally,
enter the authentication information for the desired alert service type. One
nicety available is that a test alert can be sent before adding the alert
service. After all information has been filled out correctly, click
*SEND TEST ALERT* to ensure the alert service is working properly.

## Alert Settings

To modify alerts that TrueNAS provides, go to **System > Alert Settings**.
Each alert warning level and frequency can be changed. The warning level
represents the severity of the alert when it occurs. The frequency of the alert
is how often the alert appears after the alert has been triggered.

The alerts are grouped into sections based on the alert type. For example,
alerts that are related to pools appear in the alert section *Storage*.

