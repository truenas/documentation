---
title: "Migrating from TFTP Service to TFTPD-HPA App"
description: "This article provides instructions for users migrating from the SCALE TFTP service to the new tftpd-hpa application." 
weight: 66
aliases:
tags:
- scaletftp
---


{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

This article provides instructions on how to move from using the deprecated TFTP service to the new tftpd-hpa application. 
This application is a lightweight tftp-server container TrueNAS SCALE uses as a replacement for the SCALE service. 
It is not intended to be used as a standalone container.

## Migrating## Before You Begin
Before you configure the new ddns-updater application:

* Disable the TFTP service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your TFTP service settings and note all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

## Migrating from TrueNAS TFTP Service


After disabling the TFTP service, install the tftpd-hpa application. Go to **Apps** click on **Available Applications** and locate the **tftpd-hpa** application widget.

{{< trueimage src="/images/SCALE/22.12/tftpd-hpaAppWidget.png" alt="tftpd-hpa Application Widget" id="1 tftpd-hpa Application Widget" >}} add image

Click **Install** to open the **tftpd-hpa** configuration wizard.


{{< taglist tag="scaletftp" limit="10" title="Related TFTP Articles" >}}