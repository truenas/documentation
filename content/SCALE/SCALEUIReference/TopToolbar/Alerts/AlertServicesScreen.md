---
title: Alert Services Screens
weight: 20
---

{{< toc >}}

The **Alert Services** screen has options to create and edit alert services. 

![AlertServicesScreen](/images/SCALE/22.02/AlertServicesScreen.png "TrueNAS SCALE Alert Services")

Use **Columns** to change the information displayed in the list of alert services. Options are **Unselect All**, **Type**, **Level**, **Enabled** and **Reset to Defaults**.

## Add Alert Service Screen

Use **Add** to create a new alert service using the **Add Alert Service** screen. 

![AddAlertServiceScreen](/images/SCALE/22.02/AddAlertServiceScreen.png "Add Alert Service")

**Name and Type Settings**
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new alert service. |
| **Enabled** | Clear the checkmark to disable this service without deleting it. |
| **Type** | Select an option from the drop down list for an alert service to display options for that service. Options are **AWS SNS**, **E-Mail**, **InfluxDB**, **Mattermost**, **OpsGenie**, **PagerDuty**, **Slack**, **SNMP Trap**, **Telegram** or **VictorOPS**. |
| **Level** | Select the level of severity from the dropdown list. Options are **Info**, **Notice**, **Warning**, **Error**, **Critical**, **Alert** or **Emergency**.|

**Authentication Settings**
| Setting | Description |
|---------|-------------|
| **AWS Region** | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html). |
| **ARN** | Topic [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) for publishing. For example, *arn:aws:sns:us-west-2:111122223333:MyTopic*. |
| **Key ID** | Enter the access key ID for the linked AWS account. |
| **Secret Key** | Secret access key for the linked AWS account. |

Use **SEND TEST ALERT** to generate a test alert to confirm the alert service works correctly.

**Cancel** exist to the **Alert Services** screen without saving.

Use **Save** to add the new service with the settings you specify to the list of alert services.

## Edit Alert Service Screen

Use the **Edit Alert Service** screen to modify settings for a service. Select the <span class="material-icons">more_vert</span> icon for the service, and then click **Edit** to display the **Edit Alert Service** screen.

![AddAlertServiceScreen](/images/SCALE/22.02/AddAlertServiceScreen.png "Edit Alert Service")

**Name and Type Settings**
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new alert service. |
| **Enabled** | Clear the checkmark to disable this service without deleting it. |
| **Type** | Select an option from the drop down list for an alert service to display options for that service. Options are **AWS SNS**, **E-Mail**, **InfluxDB**, **Mattermost**, **OpsGenie**, **PagerDuty**, **Slack**, **SNMP Trap**, **Telegram** or **VictorOPS**. |
| **Level** | Select the level of severity from the dropdown list. Options are **Info**, **Notice**, **Warning**, **Error**, **Critical**, **Alert** or **Emergency**.|

**Authentication Settings**
| Setting | Description |
|---------|-------------|
| **Email Address** | Enter a valid email address to receive alerts from this system. |

Use **SEND TEST ALERT** to generate a test alert to confirm the alert service works correctly.

**Cancel** exist to the **Alert Services** screen without saving.

Use **Save** to keep any changes made.