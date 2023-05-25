---
title: "DNS"
description: "This article provides information about the network dns namespace in the TrueNAS CLI Shell. Includes command syntax and common commands."
weight: 5
aliases:
draft: false
tags:
- scaleclinetwork
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## DNS Commands

The **dns** namespace has one command that is based on functions found in the SCALE API and web UI. 
It displays the current DNS nameserver IP addresses configured on the system. 

You can enter commands from the main CLI prompt or from a **network** namespace prompt.

### Query Command

The `query` command returns the results of the query-filter and query-option for the **dns** namespace. 

Enter as either a simple command to display the current DNS nameserver IP addresses configured on the system, or enter a command string to customize the output returned. 

{{< expand "Running a DNS Query" "v" >}}
Run a simple `dns` command by pressing <kbd>Enter</kbd> after entering `query`. 
The `dns query` command returns the current DNS nameserver IP addresses configured on the system. 

To enter a string and define additional parameters, enter the `query` command and press <kbd>space</kbd> to see the autofill `namespace` option. 
Press <kbd>space</kbd> again to see additional autofill argument options. 
Entering the string customizes the information the `query` command returns. 

From the CLI prompt, enter:

`network dns query`

Returns the system nameserver IP addresses. 

From the **network** prompt, enter:

`dns query`

{{< expand "Command Example" "v" >}}
```
network dns query
+-------------+
| nameserver  |
+-------------+
| 10.123.0.45 |
| 10.123.0.46 |
| 10.123.45.1 |
+-------------+
{{< /expand >}}
{{< /expand >}}


{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}