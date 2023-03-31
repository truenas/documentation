---
title: "Controller or Node?"
description: "This article defines nodes and controllers, and explains how these apply to TrueNAS storage arrays and clusters."
weight: 
aliases:
tags:
- scaleclustering
---


## Controller or Node?

The terms controller and node have different meanings when used in reference to TrueNAS storage arrays and their configuration scenarios.

In general, a *node* runs the services or back end applications that access data on shared external disks but it is not the brains of the operation. 
In networking, a node can refer to a client, server, or peers. 
TrueNAS uses node to refer to an individual TrueNAS storage array (system) when it is a member of a cluster of systems, configured and managed through TrueCommand.

A *controller*, or the brains of the system, is the major controlling element in a TrueNAS storage array. 
It manages, controls, directs, or regulates behaviors of other devices like in a storage array system. 
You might hear it referred to as the head unit in the the physical system hardware. 
TrueNAS uses controller to refer to the control unit in our physical platforms, and in TrueNAS Enterprise High Availability (HA) systems that have two controllers, a primary and standby controller. These are not nodes, they are controllers.