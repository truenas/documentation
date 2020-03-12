---
title: "Alerts"
linkTitle: "Alerts"
description: "How to configure the Alert system in TrueNAS"
---

# Process Summary

* Alerts
  * Preconfigured messages that display when system conditions require attention.
    * Conditions are written to system RAM, then flushed to the SQLite database before publication to the UI.
    * “Bell” icon, upper right
    * Shell: midclt call alert.list
  * Four primary kinds of alerts
    * Notification
    * Warning
    * Critical
    * One-shot Critical
      * Cannot be automatically dismissed; must be removed by the user.
* Changing Alert Settings
  * **System > Alert Settings**
    * Warning Level
      * User customized: options are a descending scale of severity
      * Alerts marked as “Critical” also email their message to the address defined in the root account settings.
    * Frequency
      * When the alert message is published in the UI
        * IMMEDIATELY
        * HOURLY
        * DAILY
        * NEVER
        * If the system condition that caused the alert remains, the alert is published to the UI according to the chosen Frequency. Set Frequency to NEVER to disable publishing that message to the UI.
        * For example, dismissing a “Certificate Expiring” alert without resolving the expiration date issue will result in the UI immediately republishing the same alert.
* Configuring Alert Services
  * Additional services that can broadcast system alert messages beyond the system UI.
  *  These alert services might use a third party commercial vendor not directly affiliated with iXsystems. Please investigate and fully understand that vendor’s pricing policies and services before using their alert service. iXsystems is not responsible for any charges incurred from the use of third party vendors with the Alert Services feature.
  * Two default services: Email and SNMP Trap
  * Users configure the service according to their network infrastructure and service account details
  * Choose the Alert Level that will trigger a message to the configured service.

# TrueNAS Alerts

Detailed article goes here.
