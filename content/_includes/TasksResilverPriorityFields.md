**Resilver Priority**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Enabled** | Select to run resilver tasks between the configured times. |
| **Begin** | Choose the hour and minute when a resilver process can run at a higher priority. |
| **End** | Choose the hour and minute after which a resilver process must return to running at a lower priority. A resilver process running after this time will likely take much longer to complete due to running at a lower priority compared to other disk and CPU activities, such as replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, user activity, etc. |
| **Days of the Week** | Select the days to run resilver tasks. |
{{< /truetable >}}
