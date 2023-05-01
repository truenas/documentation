**Scrub Task**

{{< truetable >}}
| Name           | Description |
|----------------|-------------|
| **Pool**           | Choose a pool to scrub. |
| **Threshold days** | Controls the task schedule by setting how many days must pass before a completed scrub can run again. If you schedule a scrub to run daily and set **Threshold days** to 7, the scrub attempts to run daily. If the scrub succeeds, it will check but won't run again until seven days pass. Using a multiple of seven ensures the scrub runs on the same weekday. |
| **Description**    | Describe the scrub task. |
| **Schedule**       | How often to run the scrub task. Choose one of the presets or **Custom** to use the **Advanced Scheduler**. |
| **Enabled**        | Clear to disable the scheduled scrub without deleting it. |
{{< /truetable >}}
