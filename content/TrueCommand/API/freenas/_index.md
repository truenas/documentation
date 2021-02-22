---
title: "FreeNAS management"
draft: false
pre: "<i class='fa fa-terminal'></i> "
geekdocCollapseSection: true
no_list: true
---

## API Class: FreeNAS

API calls which allow the user to interact with FreeNAS systems directly.
The access to this subsystem still respects the user permissions for systems, so a user will only be able to send modification API calls to a FreeNAS system if that user has write permission for that system.
* Note: The API documentation for FreeNAS can be found on any local FreeNAS system: http://[IP_OF_FREENAS]/api/docs
* Note 2: TrueCommand only provides access to the **websocket** API for FreeNAS, not the REST[1.0/2.0] API calls.

## Reference Guide

{{< toc-tree >}}
