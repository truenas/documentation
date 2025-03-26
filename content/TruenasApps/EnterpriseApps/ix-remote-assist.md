---
title: "Remote Assist"
description: "Provides general information and use scenarios for the TrueNAS Enterprise Remote Assist app, which allows iXsystems support personnel remote access to TrueNAS Enterprise systems."
weight:
aliases:
 - /truenasapps/enterpriseapps/remoteassist/
tags:
- support
- apps
- enterprise
keywords:
- nas data storage
- software storage solutions
- enterprise data storage
---

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

{{< hint type=important title="TrueNAS Enterprise Use Only" >}}
The Remote Assist app is intended for use by TrueNAS Enterprise customers with active support contracts and TrueNAS Enterprise Support staff only.
TrueNAS community use of Remote assist for any reason is outside of the intended purposes and not supported.
{{< /hint >}}

{{< github-content 
    path="trains/enterprise/ix-remote-assist/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

## App Description

The Remote Assist app allows TrueNAS Enterprise support personnel remote access to customer systems to assist with deploying or troubleshooting an environment.
Remote Assist uses Tailscale to create secure connections between support staff and customers.
Authentication is established with a one-time use authentication key, provided by TrueNAS Enterprise Support and used for the duration of the active deployment or support case.

We recommend that customers create a [restricted admin account]({{< relref "/scale/scaletutorials/credentials/adminroles.md #configuring-administrative-privileges" >}}) and [enable auditing]({{< relref "/scale/scaletutorials/systemsettings/auditingscale.md" >}}) for remote assistance sessions.
This ensures that production passwords are not shared with the TrueNAS team and retains a log of the actions taken by the support personnel during the session.
Support personnel can guide you through configuration.

After the remote assistance session completes, delete the Remote Assist application from the TrueNAS system.
This fully deauthorizes the remote connection.
It cannot be re-established without creating a new authentication key and redeploying Remote Assist at a later date, such as to resolve a future support case.

## Installing Remote Assist

{{< enterprise >}}
Install Remote Assist only if instructed to by TrueNAS Enterprise support staff.
If you have not been instructed to install the app as part of an ongoing support case, contact support before moving forward.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

Go to **Apps**, click on **Discover Apps**, and locate the **Remote Assist** app widget by either scrolling down to it or begin typing the name into the search field.
Select the widget to open the **Remote Assist** information screen.
Click **Install** to open the app installation wizard.

{{< trueimage src="/images/SCALE/Apps/InstallRemoteAssist.png" alt="Install Remote Assist Screen" id="Install Remote Assist Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the label provided by TrueNAS Enterprise Support in **System Identifier**.

Enter the one-time authentication key provided by TrueNAS Enterprise Support in **Auth Key**.

Click **Install**.
