---
title: "Bits or Bytes?"
description: "This article provides information on the computerized storage measurements, bits and bytes, and how these apply in TrueNAS products."
weight: 
aliases:
tags:
- scalestorage
- corestorage
---


{{< toc >}}

Which is it, bit or byte? And what is the difference between a bit or a byte?

Both bit and byte are basic measurements for computerized data but they represent different measurements. 

A *bit* is the smallest unit of measure for computerized storage, and when combined with a time measurement such as seconds, becomes the common basis for determining how fast raw data bits transfer across a network as in bits per second (bps). 
It is the basic unit of measurement for network bandwidth.
A bit is the raw data unit, and is either a zero (0) or one (1). 
A bit is represented in measurements as the lower case *b* as it kilobits (kbs), megabits (Mbs), gigabits (Gbs), etc. 
When discussing the rate of speed as in bits per second (b/s) you see measurements as Kbps for kilobits/second (K), Mbps for megabits/second, Gbps for gigabits/second, etc.

A *byte* is made up of eight bits and is the basic measurement for estimating storage capacity of drives or other storage media. 
When grouped in twos (2s), fours (4s), or eights (8s) they form *words* or groups of bytes, with the machine used determining the grouping size of these words. 
The byte is the most basic unit of measure on a machine (or device such as a hard disk drive). 
Bytes contain 256 permutations of eight binary digits to represent the ASCII characters, such as the letter upper or lower case "A" or an @ or other symbol. 
A byte can represent any number between zero and 255 Think of a byte as representing the characters stored in them.
A byte is represented by the upper case *B* as in kilobytes (KBs), megabytes (MBs), gigabytes (GBs).
A byte is the basic measurement to estimate how long it takes to exchange (store/retrieve) locally-stored information. 
Or for the store/retrieve rate, KBps for kilobytes/second, MBps for megabytes/second, GBps for gigabytes/second, etc.
As a provider of storage, TrueNAS represents storage measures in bytes.

For TrueNAS, which is correct and do they represent the same measurement?

No, it takes eight (8) bits to make a byte, and the bit is used to estimate the speed at which data transmits across a network. 
The network capacity, or bandwidth, determines how fast the raw data bits transmit across it. 
TrueNAS refers to bits when discussing the network transmission speed of data from TrueNAS storage to another system across a network. 
Network provider capacity and other network related devices such as network interface cards (NICs) can either determine or influence the network transmission speeds.

A byte, or eight bits of raw data formed into words to represent characters, is the unit of measure to estimate local storage capacity (such as on a hard drive or other storage device) and measures the rate computerized data is stored or retrieved on a local storage device or system. 
TrueNAS, like other storage providers, uses bytes to quantify the storage capacity it provides based on the system hardware platforms it provides to customers.

Is it *B* or *b*?

Lower case *b* denotes bits. Lower case *b* because a bit is smaller than a byte.

Upper case *B* denotes bytes. Upper case *B* because the byte is larger and it takes eight bits to make a byte.

{{< taglist tag="scalestorage" limit="10" >}}
{{< taglist tag="corestorage" limit="10" title="Related Core Storage Articles" >}}
