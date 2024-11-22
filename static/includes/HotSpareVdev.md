&NewLine;

A **Hot Spare** vdev sets up drives as reserved to prevent larger pool and data loss scenarios
TrueNAS automatically inserts an available hot spare into a **Data** vdev when an active drive fails.
The pool resilvers once the hot spare is activated.

Click **Detach** to remove the failed drive from the pool
The activated hot spare is promoted to a full data vdev member and is no longer available as a hot spare.
After physically replacing the failed disc, create a new hot spare vdev to reserve the replacement disc.

Alternately, after physically replacing the failed disc, click **Replace** on the failed drive to activate the new drive
The hot spare reverts to an inactive state and is available again as a hot spare.
We do not recommend this method, because it requires a second resilver for the new drive.
