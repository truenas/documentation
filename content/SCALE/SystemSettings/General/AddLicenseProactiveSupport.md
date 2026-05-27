---
title: "Adding a License and Proactive Support"
description: "Provides instructions for TrueNAS users on how to obtain a system fingerprint, obtain and add a system license, and set up proactive support."
weight: 20
aliases:
 - /scale/scaletutorials/systemsettings/general/addlicenseproactivesupport/
tags:
 - support
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
doctype: tutorial
---


As of the TrueNAS 26.0 release, licenses are available to all TrueNAS users and customers. License availability fits into three groups:
* TrueNAS Enterprise customers - Systems provided by TrueNAS and managed through TrueNAS Support.
* TrueNAS Commercial users - Systems not provided by TrueNAS, and with licenses issued through TrueNAS Support.
* TrueNAS Community users - Systems not provided by TrueNAS, and with licenses obtained through TrueNAS Connect accounts.

A system fingerprint, obtained through the TrueNAS UI, is required for a license.

## Obtaining a TrueNAS System Fingerprint

The TrueNAS UI provides a fingerprint function to obtain the system information required to acquire a TrueNAS license for features available to TrueNAS Enterprise and Commercial users.

To access your system fingerprint, go to **System > General Settings** and click on the **System Fingerprint** view option on the **Support** card.

Enterprise and Commercial users should contact TrueNAS Support for more information on the licensing process and with any additional questions.

{{< include file="/static/includes/iXsystemsSupportContact.md" >}}

After TrueNAS Support provides the license, add it to your TrueNAS system as described in [Adding A TrueNAS Enterprise License](#adding-a-truenas-enterprise-license).

Community users with TrueNAS Connect accounts can acquire the system fingerprint as part of the license enrollment process. 

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

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [TrueNAS Enterprise Support](https://www.ixsystems.com/support/).

When the system is ready to be in production, update the status by selecting **This is a production system** and then click the **Proceed** button.
This sends an email to iXsystems declaring that the system is in production.

While not required for declaring the system is in production, TrueNAS has the option to include an initial debug with the email that can assist support in the future.

## Setting Up Proactive Support

Silver/Gold Coverage Customers can enable iXsystems Proactive Support.
This feature automatically emails iXsystems when certain conditions occur in a TrueNAS system.

To configure proactive support, click **Get Support** on the **Support** widget located on the **System > General Settings** screen.
Select **Proactive Support** from the dropdown list.

![GeneralSettingsSCALEProactiveSupport](/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupport.png "TrueNAS General Settings Proactive Support")

Complete all available fields and select **Enable iXsystems Proactive Support**, then click **Save**.

![GeneralSettingsSCALEProactiveSupportForm](/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupportForm.png "TrueNAS General Settings Proactive Support Form")
