---
title: "Alert Services"
description: "This article describes the fields on the Alert Services screen on TrueNAS CORE."
weight: 80
tags:
- corealerts
- coreauthentication
---

![SystemAlertServicesAdd](/images/CORE/12.0/SystemAlertServicesAdd.png "New Alert Service")

{{< include file="content/_includes/SystemAlertServicesAddEditFields.md" type="page" >}}

**Authentication**

{{< expand "AWS" "v" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **AWS Region** | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html). |
| **ARN** | Topic [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) for publishing. Example: `arn:aws:sns:us-west-2:111122223333:MyTopic`. |
| **Key ID** | Access Key ID for the linked AWS account. |
| **Secret Key** | Secret Access Key for the linked AWS account. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Email" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Email Address** | Enter a valid email address to receive alerts from this system. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "InfluxDB" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Host** | Enter the [InfluxDB](https://docs.influxdata.com/influxdb/) hostname. |
| **Username** | Username for this service. |
| **Password** | Enter password. |
| **Database** | Name of the InfluxDB database. |
| **Series** | InfluxDB time series name for collected points. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Mattermost" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Webhook URL** | Enter or paste the [incoming webhook](https://docs.mattermost.com/developer/webhooks-incoming.html) URL associated with this service. |
| **Username** | Mattermost username. |
| **Channel** | Name of the [channel](https://docs.mattermost.com/messaging/managing-channels.html) to receive notifications. This overrides the default channel in the incoming webhook settings. |
| **Icon Url** | Icon file to use as the profile picture for new messages. Example: https://mattermost.org/wp-content/uploads/2016/04/icon.png. Requires configuring Mattermost to [override profile picture icons](https://docs.mattermost.com/configure/configuration-settings.html#enable-integrations-to-override-profile-picture-icons). |
{{< /truetable >}}
{{< /expand >}}

{{< expand "OpsGenie" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **API Key** | Enter or paste the [API key](https://docs.opsgenie.com/v1.0/docs/api-integration). Find the API key by signing into the OpsGenie web interface and going to Integrations/Configured Integrations. Click the desired integration, Settings, and read the API Key field. |
| **API URL** | Leave empty for default OpsGenie API. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "PagerDuty" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Service Key** | Enter or paste the "integration/service" key for this system to access the [PagerDuty API](https://v2.developer.pagerduty.com/v2/docs/events-api). |
| **Client Name** | PagerDuty client name. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Slack" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Webhook URL** | Paste the [incoming webhook](https://api.slack.com/incoming-webhooks) URL associated with this service. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "SNMP Trap" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Hostname** | Hostname or IP address of the system to receive SNMP trap notifications. |
| **Port** | UDP port number on the system receiving SNMP trap notifications. The default is 162. |
| **SNMPv3 Security Model** | Enable the SNMPv3 security model. |
| **SNMP Community** | Network community string. The community string acts like a user ID or password. A user with the correct community string has access to network information. The default is public. For more information, see this helpful [SNMP Community Strings tutorial](https://www.dnsstuff.com/snmp-community-string). |
{{< /truetable >}}
{{< /expand >}}

{{< expand "VictorOps" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **API Key** | Enter or paste the [VictorOps API key](https://help.victorops.com/knowledge-base/api/). |
| **Routing Key** | Enter or paste the [VictorOps routing key](https://portal.victorops.com/public/api-docs.html). |
{{< /truetable >}}
{{< /expand >}}

{{< taglist tag="corealerts" limit="10" >}}
