---
title: Alert Services Screens
weight: 20
tags:
- scalealerts
---

{{< toc >}}

The **Alert Services** screen has options to create and edit alert services. 

![AlertServicesScreen](/images/SCALE/22.12/AlertServicesScreen.png "TrueNAS SCALE Alert Services")

Use **Columns** to change the information displayed in the list of alert services. Options are **Unselect All**, **Type**, **Level**, **Enabled** and **Reset to Defaults**.

## Add Alert Service Screen

Use **Add** to create a new alert service using the **Add Alert Service** screen. The **Type** settings for **AWS SNS** display by default. 
To add an alert service for another option, use the **Type** dropdown list. Only the **Authentication Settings** change for each option.

![AddAlertServiceScreen](/images/SCALE/22.12/AddAlertServiceScreen.png "Add Alert Service")

**Name and Type Settings**
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new alert service. |
| **Enabled** | Clear the checkmark to disable this service without deleting it. |
| **Type** | Select an option from the dropdown list for an alert service to display options for that service. Options are **AWS SNS** which is the default type displayed, **E-Mail**, **InfluxDB**, **Mattermost**, **OpsGenie**, **PagerDuty**, **Slack**, **SNMP Trap**, **Telegram** or **VictorOPS**. |
| **Level** | Select the severity from the dropdown list. Options are **Info**, **Notice**, **Warning**, **Error**, **Critical**, **Alert** or **Emergency**. |

Use **SEND TEST ALERT** to generate a test alert to confirm the alert service works.

Click **Cancel** to exit the **Alert Services** screen without saving.

Use **Save** to add the new service with the settings you specify to the list of alert services.


### AWS SNS Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **AWS SNS** from the **Type** dropdown list to display AWS SNS authentication settings. 

![AddAlertServiceScreen](/images/SCALE/22.12/AddAlertServiceScreen.png "Add Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
| **AWS Region** | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html). |
| **ARN** | Topic [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) for publishing. For example, *arn:aws:sns:us-west-2:111122223333:MyTopic*. |
| **Key ID** | Enter the access key ID for the linked AWS account. |
| **Secret Key** | Secret access key for the linked AWS account. |
{{< /expand >}}

### Email Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **Email** from the **Type** dropdown list to display email authentication settings. 

![AddAlertServiceEmailScreen](/images/SCALE/22.12/AddAlertServiceEmailScreen.png "Add Email Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
| **Email Address** | Enter a valid email address to receive alerts from this TrueNAS system. |
{{< /expand >}}

### InfluxDB Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **InfluxDB** from the **Type** dropdown list to display InfluxDB authentication settings.  

![AddAlertServiceInfluxDBScreen](/images/SCALE/22.12/AddAlertServiceInfluxDBScreen.png "Add InfluxDB Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Host** | Enter the [InfluxDB](https://docs.influxdata.com/influxdb/) host name.  |
| **Username** | Enter the user name for this service. |
| **Password** | Enter the password for the user on this service |
| **Database** | Enter the name of the InfluxDB database. |
| **Series** | Enter the InfluxDB time series name for collected points. |
{{< /expand >}}

### MatterMost Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **Mattermost** from the **Type** dropdown list to display Mattermost authentication settings.  

![AddAlertServiceMattermostScreen](/images/SCALE/22.12/AddAlertServiceMattermostScreen.png "Add Mattermost Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Webhoot URL** | Enter or past the [incoming webhook](https://docs.mattermost.com/developer/webhooks-incoming.html) URL assoicated with this service.  |
| **Username** | Enter the Mattermost user name. |
| **Channel** | Enter the name of the [channel](https://docs.mattermost.com/guides/channels.html#work-with-channels) to receive notifications. Entering a channel overrides the default channel in the incoming webhook settings. |
| **Icon URL** | Enter the icon file to use as the profile picture for new messages. For example, *https://mattermost.org/wp-content/uploads/2016/04/icon.png*. Requires configuring Mattermost to [override profile picture icons](https://docs.mattermost.com/configure/configuration-settings.html#enable-integrations-to-override-profile-picture-icons). |
{{< /expand >}}

### OpsGenie Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **OpsGenie** from the **Type** dropdown list to display OpsGenie authentication settings.  

![AddAlertServiceOpsGenieScreen](/images/SCALE/22.12/AddAlertServiceOpsGenieScreen.png "Add OpsGenie Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **API Key** | Enter the [API key](https://docs.opsgenie.com/v1.0/docs/api-integration). Find the API key by signing into the OpsGenie web interface and going to **Integrations/Configured Integrations**. Click the desired integration, **Settings**, and read the **API Key** field. |
| **API URL** | Leave empty for default [(OpsGenie API)](https://docs.opsgenie.com/docs/migration-guide-for-alert-rest-api). |
{{< /expand >}}

### PagerDuty Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **PagerDuty** from the **Type** dropdown list to display PagerDuty authentication settings.  

![AddAlertServicePagerDutyScreen](/images/SCALE/22.12/AddAlertServicePagerDutyScreen.png "Add PagerDuty Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Service Key** | Enter or paste the **integration/service** key for this system to access the [PagerDuty API](https://v2.developer.pagerduty.com/v2/docs/events-api).  |
| **Client Name** |Enter the PagerDuty client name. |
{{< /expand >}}

### Slack Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **Slack** from the **Type** dropdown list to display Slack authentication settings.  

![AddAlertServiceSlackScreen](/images/SCALE/22.12/AddAlertServiceSlackScreen.png "Add Slack Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Webhook URL** | Paste the [incoming webhook](https://api.slack.com/incoming-webhooks) URL assoicated with this service. |
{{< /expand >}}

### SNMP Trap Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **SNMP Trap** from the **Type** dropdown list to display SNMP trap authentication settings.  

![AddAlertServiceSNMPTrapScreen](/images/SCALE/22.12/AddAlertServiceSNMPTrapScreen.png "Add SNMP Trap Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Hostname** | Enter the hostname or IP address of the system to receive SNMP trap notifications. |
| **Port** | Enter the UDP port number on the system receiving SNMP trap notifications. The default is **162**. |
| **SNMPv3 Security Model** | Select to enable the SNMPv3 security model. |
| **SNMP Community** | Enter the network community string. The community string acts like a user ID or password. A user with the correct community string can access network information. The default is **public**. For more information, see [What is an SNMP Community String?](https://community.helpsystems.com/knowledge-base/intermapper/snmp/snmp-community-strings/). |
{{< /expand >}}

### Telegram Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **Telegram** from the **Type** dropdown list to display Telegram authentication settings.  

![AddAlertServiceTelegramScreen](/images/SCALE/22.12/AddAlertServiceTelegramScreen.png "Add Telegram Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **Bot API Token** | Enter the Telegram Bot API Token [How to create a Telegram Bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot). |
| **List of chat IDs** | Enter a list of chat IDs separated by a space ( ), comma (,), or semicolon (;). To find your chat ID, send a message to the bot, group, or channel and visit https://core.telegram.org/bots/api#getting-updates. |
{{< /expand >}}

### VictorOPS Authentication Settings
{{< expand "Click here for more information" "v" >}}
Select **VictorOps** from the **Type** dropdown list to display VictorOps authentication settings.  

![AddAlertServiceVictorOpsScreen](/images/SCALE/22.12/AddAlertServiceVictorOpsScreen.png "Add VictorOps Alert Service")

**Authentication Settings**
| Setting | Description |
|---------|-------------|
|  **API Key** | Enter or paste the [VictorOps API key](https://help.victorops.com/knowledge-base/api/). |
| **Routing Key** | Enter or past the [VictorOps routing key](https://portal.victorops.com/public/api-docs.html). |
{{< /expand >}}

## Edit Alert Service Screen

Use the **Edit Alert Service** screen to modify settings for a service. Select the <span class="material-icons">more_vert</span> icon for the service, and then click **Edit** to display the **Edit Alert Service** screen.

{{< taglist tag="scalealerts" limit="10" >}}
