&NewLine;

Select **Enabled**, then use the dropdown lists to select a start time in **Begin** and time to finish in **End** to define a priority period for the resilver.
To select the day(s) to run the resilver, use the **Days of the Week** dropdown to select when the task can run with the priority given.

{{< hint type=note >}}
A resilver process running during the time frame defined between the beginning and end times likely runs faster than during times when demand on system resources is higher.
We advise you to avoid putting the system under any intensive activity or heavy loads (replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, etc.) during a resilver process.
{{< /hint >}}
