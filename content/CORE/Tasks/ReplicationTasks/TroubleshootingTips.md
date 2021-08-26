---
title: "Troubleshooting Tips"
weight: 40
---

## Access and Download the Replication Log

To access, and download, the replication task log file go to **Tasks > Replication Tasks**. Click on the *state* of the replication task.

![TasksReplicationTasksState](/images/CORE/12.0/RepTaskErrorCORE.png "Replication Task State")

![TasksReplicationTasksLog](/images/CORE/12.0/RepTaskLogDownloadCORE.png "Replication Task Log")

Click the *DOWNLOAD LOGS* button to download the log file.


## Edit a Replication Task

To edit the replication task go to **Tasks > Replication Tasks**. Click on the *>* to expand the replication task information.Click **EDIT**.

![TasksReplicationTasksEdit](/images/CORE/12.0/RepEditTaskCORE.png "Replication Task Edit")

See [**Replication Advanced Options**]({{< relref "/CORE/Tasks/ReplicationTasks/Advanced.md" >}}) for descriptions of the available fields.


## Setting Up Alert Importance For a Replication Task

To customize the importance/frequency of the alerts if a Replication fails or successeds go to **System** -> **Alert Settings** and Scroll down to the *Tasks* area
Set the Warning Level and how often the alert notification is sent.

![TasksSetReplicationAlert](/images/CORE/12.0/AlertTaskReplication.png "Set Replication Alert")

See [**Alert Settings**]({{< relref "core/system/alert.md" >}}) for descriptions of the available options.


## FAQ

Question: If the internet connection goes down for a period of time, will the replication take up where it left off - including all the intermediate snapshots?
Answer: Yes.

Question: If a site changes a lot of data at one time, and the internet bandwidth is not enough to finish sending the snapshot before the next one begins, will the replication jobs run one after the other and not stomp on each other?
Answer: Yes.
