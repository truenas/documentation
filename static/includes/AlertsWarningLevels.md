&NewLine;

Use the **Set Warning Level** dropdown list to customize alert importance.
Each warning level has an icon and color to express the level of urgency.

To make the system email you when alerts with a specific warning level trigger, set up an email alert service with that warning level.
TrueNAS SCALE sends alert notifications for all warnings matching and above the selected level
For example, a warning level set to **Critical** triggers notifications for **Critical**, **Alert**, and **Emergency** level warnings.

{{< truetable >}}
| Level | Icon | Alert Notification? |
|-------|------|---------------------|
| **INFO** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/Dashboard/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | No |
| **NOTICE** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/Dashboard/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| **WARNING** | ![AlertLevelWarning](/images/SCALE/Dashboard/AlertLevelWarning.png "Alert Levels") | Yes |
| **ERROR** | ![AlertLevelErrorCritical](/images/SCALE/Dashboard/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| **CRITICAL** | ![AlertLevelErrorCritical](/images/SCALE/Dashboard/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| **ALERT** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/Dashboard/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| **EMERGENCY** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/Dashboard/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
{{< /truetable >}}
