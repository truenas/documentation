&NewLine;

**Resilver Priority**

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enabled** | Select to run resilver tasks between the configured times. |
| **Begin** | Select the hour and minute when a resilver task can start from the dropdown list. The resilver process can run at a higher priority. |
| **End** | Select the hour and minute when new resilver tasks are not allowed to start. This does not affect active resilver tasks. The resilver process returns to running at a lower priority. A resilver process running after this time can take much longer to complete, and runs at a lower priority compared to other disk and CPU activities, such as replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, user activity, etc. |
| **Days of the Week** | Select the days to run resilver tasks from the dropdown list. Select day(s) when demands on system I/O processing and activity are at a lower level. |
{{< /truetable >}}