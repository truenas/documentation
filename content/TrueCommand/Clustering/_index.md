---
title: "Clustering"
weight: 60
geekdocCollapseSection: true
---

TrueCommand 2.1, in conjunction with TrueNAS SCALE, can create clustered volumes that span across multiple volumes. 

There are five volume types:

+ Replicated
+ Distributed
+ Dispersed
+ Distributed replicated
+ Distributed dispersed


{{< hint danger >}}
Cluster volume management is a BETA feature in TrueCommand 2.0 and 2.1. 
Before using such features, please back up all your data. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint warning >}}
TrueNAS does not support distributed dispersed volumes at this time.
{{< /hint >}} 


![ClusterVolumeDashboard](/images/TrueCommand/2.1/ClusterVolumeDashboard.png "ClusterVolumeDashboard")
