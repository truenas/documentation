---
title: Settings Options
description: "Describes the top-level Settings options in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 2
tags:
- scalesettings
---


{{< toc >}}

The <span class="material-icons">account_circle</span> **Settings** icon button displays a menu of general system settings options. 
The options are **Change Password**, **Two-Factor Authentication**, **API Keys**, **Guide** and **About**.

## Change Password

{{< include file="/static/includes/ChangeLoggedInUserPassword.md" >}}

## Two-Factor Authentication

Click on <span class="iconify" data-icon="mdi:two-factor-authentication"></span> **Two-Factor Authentication** to see the **Two-Factor Authentication** screen.
You can see the current 2FA configuration status, configure 2FA authentication, or show the current 2FA QR code.

## API Keys

Click on <span class="material-icons">laptop</span> **API Keys** to display the **API Keys** screen where you can add new or manage existing API keys on your system.

## Guide

Click on <span class="material-icons">library_books</span> **Guide** to display the TrueNAS Documentation Hub in a new tab.

## About

Click on <span class="iconify" data-icon="ant-design:info-circle-outlined"></span> **About** to display the information window links to the TrueNAS Documentation Hub, TrueNAS Community Forums, FreeNAS Open Source Storage Appliance GitHub repository, and iXsystems home page.

![AboutWindow](/images/SCALE/23.10/AboutWindow.png "About Window")

## Contents

{{< children sort="name" depth="2" description="true" >}}
