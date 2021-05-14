---
title: "Clustering"
weight: 60
geekdocCollapseSection: true
---

TrueCommand 2.0 in conjuction with TrueNAS SCALE has the ability to create clustered Volumes that span across multiple volumes. 

There are five volume types:

+ [Replicated]({{< relref "ReplicatedCluster.md" >}})
+ [Distributed]({{< relref "DistributedCluster.md" >}})
+ [Dispersed]({{< relref "DispersedCluster.md" >}})
+ [Distributed Replicated]({{< relref "DistributedReplicatedCluster.md" >}})
+ [Distributed Dispersed]({{< relref "DistributedDispersedCluster.md" >}})

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint info >}}
Gluster requires TrueNAS systems to have a static IP.  TrueNAS with DHCP enabled can not be part of a Cluster Volume.
{{< /hint >}}

{{< hint warning >}}
Distributed Dispersed Volumes are not implemented at this time.
{{< /hint >}} 


![ClusterVolumeDashboard](/images/TrueCommand/2.0/ClusterVolumeDashboard.png "ClusterVolumeDashboard")