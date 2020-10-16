---
title: "Media and Entertainment"
description: "Discussion of deploying TrueNAS for Media and Entertainment work environments with suggestions for optimizing the system for specific applications."
weight:
tags: ["tuning suggestions"]
---

Developing and delivering media content that reaches audiences whenever and wherever they are has increased in importance and complexity.
In today’s highly connected, entertainment-driven world, media and entertainment (M&E) companies need to stay competitive to succeed.
These organizations need to produce information and entertainment in a variety of different formats to display on mobile devices, desktops, workstations, Blu-ray players, game consoles, set-top boxes, and TVs as well as in digital and analog movie theaters.
Workflows grow in complexity daily and time-to-market windows continue to shrink.
Where and how to store and archive all this content remains top-of-mind. M&E projects run on multiple heterogeneous environments, need an enterprise- grade storage array’s features, and require multiple protocols.

Most M&E production houses purchase data storage based on capacity and performance dictated by the needs of existing applications.
As a result, businesses often end up with multiple classes of application-specific storage or storage silos including SAN, NAS, all-flash arrays, and many forms of direct attached storage (DAS) from a multitude of vendors.

Creative organizations are often forced to over-provision and over-purchase capacity or performance, or use an all-flash array to meet their production needs. This reactive purchasing drives up the cost of media production.
As media files grow, it becomes complex to manage and inefficient to increase the capacity or performance of DAS or consumer-grade NAS, so many turn to cloud storage.
The security risk and expense of cloud storage are a top priority of IT and Media Managers.
These factors and others put intense pressure on your budget and data storage infrastructure to keep up with the demand.

A TrueNAS storage system from iXsystems brings an enterprise-grade storage solution supporting multiple protocols to M&E production houses that is capable and affordable for many M&E applications.
It is designed to enable M&E customers to address media capacity and performance requirements while reducing TCO, consolidating digital assets, accelerating media workflows, and providing the features needed to protect all media assets.
Read more to learn how TrueNAS can be optimized for typical M&E production house usage.

## General Optimizations

<!-- add system config recommendations for anyone using TrueNAS for M&E -->

## Software-specific Tuning

Beyond general optimization for Media and Entertainment workflows are tunings or TrueNAS usage recommendations for a specific application.

### Adobe Premiere®

System size is a primary factor when tuning TrueNAS for Adobe Premiere workflows.
A typical recommendation is to use Mixed RAID (*2+1 RAIDZ*) in most cases with added *Read* and *Write* cache.
The Write cache is optional if the system is only using SMB sharing.

*RAIDZ2* that is 6 or 7 disks wide (Protection-X or Protection) is viable for tier2/nearline/archival storage or if the system has extensive data storage (a few hundred Terabytes or more).
Setting jumbo frames (*MTU: 9000*) on the network, TrueNAS, and client side is also important for large file streams.

4K workflows likely want to have 20 disks or more.
8K can be all-flash demanding, but Premiere has the *proxies* feature which can reduce the performance impact.

It's recommended to use SMB3 sharing on both the TrueNAS and any client systems.

When not using a flash-based system, don't move or copy files or footage while editing in Premiere, as this can cause choppy playback.

Make sure that **Project Locking** is enabled in Premiere for any shared projects.

### Avid® Media Composer™ & Pro Tools™

### Blackmagic DaVinci Resolve

### Grass Valley® EDIUS®

### Blender® 