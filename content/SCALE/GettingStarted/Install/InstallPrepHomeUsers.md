---
title: "Preparing for Scale UI Configuration (Home Users)"
description: "This article provides information home users need to complete the SCALE configuration using the SCALE UI."
weight: 7
aliases:
tags:
- scaleinstall
- scalemigrate
---

{{< toc >}}


SCALE users installing and configuring SCALE on their home server should follow the instructions in this article to prepare for their SCALE system deployment.

Support options available to assist you include the TrueNAS community forums, blog, Discord, and tutorials documented in the TrueNAS Documentation Hub.

Home users obtaining network equipment and Internet service access from either an Internet or cable service provider, can contact those support departments for assistance with SMTP and some network configuration addresses such as default gateways or DNS name server addresses.

### Network Access
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
Home users obtaining network equipment and Internet service access from either an Internet or cable service provider, can contact the provider support departments for assistance with network addresses.
For SCALE support or assistance refer to the TrueNAS community forums, blog, or the Discord, or the tutorials included in the TrueNAS Documentation Hub.

### SMTP Access
Simple Mail Transfer Protocol (SMTP) service or servers allow for the transfer of electronic mail across an Internet connection. 
TrueNAS uses either SMTP to send mail from SCALE to either the administrator or designated individual email addresses for system alert notifications. 
Contact your Internet or cable service provider to obtain the SMTP addresses to allow TrueNAS to send emails from your network.


{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}