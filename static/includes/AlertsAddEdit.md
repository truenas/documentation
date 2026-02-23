&NewLine;

The **Add Alert Service** and **Edit Alert Service** screens show the same settings.

**Add** opens the **Add Alert Service** screen where you can create a new alert service.

The **Type** settings for **AWS SNS** display by default.
To add an alert service for another option, use the **Type** dropdown list. Only the **Authentication Settings** change for each option.

The **Edit Alert Service** screen settings allow you to modify a service. Select the <span class="material-icons">more_vert</span> icon for the service, and then click **Edit** to display the **Edit Alert Service** screen.

![AddAlertServiceScreen](/images/SCALE/SystemSettings/AddAlertServiceScreen.png "Add Alert Service")

### Name and Type Settings {id="alert_serv_config"}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new alert service. |
| **Enabled** | Clear the checkmark to disable this service without deleting it. |
| **Type** | Select an option from the dropdown list for an alert service to display options for that service. Options are **AWS SNS** which is the default type displayed, **E-Mail**, **InfluxDB**, **Mattermost**, **OpsGenie**, **PagerDuty**, **Slack**, **SNMP Trap**, **Telegram** or **VictorOPS**. |
| **Level** | Select the severity from the dropdown list. Options are **Info**, **Notice**, **Warning**, **Error**, **Critical**, **Alert** or **Emergency**. <br> TrueNAS sends alert notifications for all warnings matching and above the selected level. For example, a warning level set to **Critical** triggers notifications for **Critical**, **Alert**, and **Emergency** level warnings. |
{{< /truetable >}}

Use **SEND TEST ALERT** to generate a test alert to confirm the alert service works.

Click **Cancel** to exit the **Alert Services** screen without saving.

Use **Save** to add the new service with the settings you specify to the list of alert services.
