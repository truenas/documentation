---
title: "Adding a License and Proactive Support"
description: "Provides instructions for TrueNAS Enterprise users to add their system license and set up proactive support."
weight: 25
tags:
 - support
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

## Adding a TrueNAS Enterprise License
For users with a valid TrueNAS license, click **Add License**.
Copy your license into the box and click **Save**.  

![GeneralSettingsSCALESupportLicenseEntry](/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseEntry.png "TrueNAS General Settings Support License Entry")

You are prompted to reload the page for the license to take effect, click **RELOAD NOW**.
Log back into the WebUI where the **End User License Agreement (EULA)** displays. 
Read it thoroughly and completely. 
After you finish, click **I AGREE**.
The system information updates to reflect the licensing specifics for the system.

![GeneralSettingsSCALESupportLicenseComplete](/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseComplete.png "TrueNAS General Settings Support License Entry Complete")

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify TrueNAS Enterprise Support if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [TrueNAS Enterprise Support](https://www.ixsystems.com/support/).

When the system is ready to be in production, update the status by selecting **This is a production system** and then click the **Proceed** button.
This sends an email to TrueNAS Enterprise Support declaring that the system is in production.

While not required for declaring the system is in production, TrueNAS has the option to include an initial debug with the email that can assist support in the future.

## Setting Up Proactive Support
Silver/Gold Coverage Customers can enable TrueNAS Proactive Support.
This feature automatically emails TrueNas Enterprise Support when certain conditions occur in a TrueNAS system.

To configure proactive support, click **Get Support** on the **Support** widget located on the **System > General Settings** screen.
Select **Proactive Support** from the dropdown list.

![GeneralSettingsSCALEProactiveSupport](/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupport.png "TrueNAS General Settings Proactive Support")

Complete all available fields and select **Enable Proactive Support**, then click **Save**.

![GeneralSettingsSCALEProactiveSupportForm](/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupportForm.png "TrueNAS General Settings Proactive Support Form")
