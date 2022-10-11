---
title: "System Dataset Pool Screens"
description: "This article provides information on the advanced system setting **System Dataset Pool** widget and configuration screen settings."
weight: 40
aliases:
tags:
 - scalesettings
 - scalepools
 - scaledatasets
---


The **System > Advanced** screen includes configuration settings for setting up or changing the system dataset pool.

## System Dataset Pool Widget
**System Dataset Pool** widget displays the pool configured as the system dataset pool. The widget allows users to select the storage pool they want to hold the system dataset. 
The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata, such as the user and group cache and share level permissions.

![AdvancedSystemDatasetPoolWidget](/images/SCALE/22.02/AdvancedSystemDatasetPoolWidget.png "SCALE Advanced System Dataset Pool Widget") 

**Configure** opens the **System Dataset Pool** configuration screen.

### System Dataset Pool Configuration Screen
If the system has one pool, TrueNAS configures that pool as the system dataset pool. If your system has more than one pool, you can select the system dataset pool from the dropdown list of available pools. Users can move the system dataset to unencrypted pools or encrypted pools without passphrases.

![SystemDatasetPoolConfigScreen](/images/SCALE/22.02/SystemDatasetPoolConfigScreen.png "SCALE Advanced Settings System Dataset Pool Screen") 

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type aftwerward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}