---
title: "Clustering"
weight: 60
geekdocCollapseSection: true
---

TrueCommand 2.0 in conjuction with TrueNAS SCALE has the ability to create clustered Volumes that span across multiple volumes. 

There are five volume types:

+ Replicated
+ Distributed
+ Dispersed
+ Distributed Replicated
+ Distributed Dispersed


{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint warning >}}
Distributed Dispersed Volumes are not implemented at this time.
{{< /hint >}} 


![ClusterVolumeDashboard](/images/TrueCommand/2.0/ClusterVolumeDashboard.png "ClusterVolumeDashboard")