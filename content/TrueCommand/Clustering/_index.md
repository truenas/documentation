---
title: "Clustering"
weight: 60
geekdocCollapseSection: true
---

TrueCommand 2.1 in conjuction with TrueNAS SCALE has the ability to create clustered volumes that span across multiple volumes. 

There are five volume types:

+ Replicated
+ Distributed
+ Dispersed
+ Distributed replicated
+ Distributed dispersed


{{< hint danger >}}
Cluster volume management is a BETA feature in TrueCommand 2.0 and 2.1. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint warning >}}
Distributed dispersed volumes are not implemented at this time.
{{< /hint >}} 


![ClusterVolumeDashboard](/images/TrueCommand/2.1/ClusterVolumeDashboard.png "ClusterVolumeDashboard")