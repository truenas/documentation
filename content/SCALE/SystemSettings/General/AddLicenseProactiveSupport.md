---
title: "Adding a License and Proactive Support"
description: "Provides instructions for TrueNAS Enterprise users to add their system license and set up proactive support."
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


As of the TrueNAS 26.0 release, licenses are available to all TrueNAS users and customers. License availability is provided to:
* TrueNAS Enterprise customers - Systems provided by TrueNAS and managed through TrueNAS Support.
* TrueNAS Community users - Systems not provided by TrueNAS, and with licenses obtained through TrueNAS Connect accounts.

TrueNAS Connect obtains a required system fingerprint from a TrueNAS Community system. This fingerprint is used to generate the license.
TrueNAS Commnity versions show the fingerprint option on the **Support** card on the **General Settings** screen.

{{< enterprise >}}
All Enterprise system show the licensed features on the **Support** card on the **General Settings** screen.

Enterprise users with questions or issues should contact TrueNAS Support through the Customer Service Portal.

{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /enterprise >}}

## Adding a TrueNAS Enterprise License

For users with a valid TrueNAS license, click **Add License**.
Copy your license into the box and click **Save**.  

![GeneralSettingsSCALESupportLicenseEntry](/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseEntry.png "TrueNAS General Settings Support License Entry")

You are prompted to reload the page for the license to take effect; click **RELOAD NOW**.
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
