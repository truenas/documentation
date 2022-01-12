---
title: "Clustering"
weight: 60
geekdocCollapseSection: true
---

TrueCommand 2.1, in conjunction with TrueNAS SCALE, can create clustered volumes that span across multiple volumes. 

There are five volume types:

+ Replicated - Replicated volume creates copies of files across multiple bricks in the volume. Use replicated volumes in environments where high-availability and high-     reliability are critical. 
+ Distributed - Use distributed volumes where scalable storage and redundancy is either not important, or is provided by other hardware or software layers.
+ Dispersed -  In dispersed volume data is broken into fragments, expanded and encoded with redundant data pieces and stored across a set of different bricks.
+ Distributed replicated - Distributed Replicated volume creates distributed copies of multiple bricks in the volume. Use distributed replicated volumes in environments   where high-availability and high-reliability are critical.
+ Distributed dispersed - In distributed dispersed data is distributed and broken into fragments, expanded and encoded with redundant data pieces and stored across a set   of different bricks.


{{< hint danger >}}
Cluster volume management is a BETA feature in TrueCommand 2.0 and 2.1. 
Before using such features, please back up all your data. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint warning >}}
TrueNAS does not support distributed dispersed volumes at this time.
{{< /hint >}} 


![ClusterVolumeDashboard](/images/TrueCommand/2.1/ClusterVolumeDashboard.png "ClusterVolumeDashboard")
