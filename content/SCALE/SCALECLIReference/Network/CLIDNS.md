---
title: "DNS"
description: "This article provides information about the SCALE CLI network dns namespace and command syntax, and includes common commands."
weight: 5
aliases:
draft: false
tags:
- scaleclinetwork
---

{{< toc >}}


{{< hint type=tip >}}
The SCALE CLI guide is a work in progress!
New namespace and command documentation is continually added and maintained, so check back here often to see what is new!
{{< /hint >}}

## DNS Commands

The **dns** namespace has one command, `query`, that displays the current DNS nameserver IP addresses configured on the system. 
Enter as either a simple command to display the current DNS nameserver IP addresses configured on the system, or enter as a command string to customize the output of the command. 

### Query Command

The `query` command returns the results of the query-filter and query-option for the **dns** namespace. 


{{< expand "Running a DNS Query" "v" >}}
Run a simple `dns` command by pressing <kbd>Enter</kbd> after entering `query`. 
The `dns query` command returns the current DNS nameserver IP addresses configured on the system. 

To enter a string and define additional parameters, enter the `query` command and press <kbd>space</kbd> to see the autofill `namespace` option. 
Press <kbd>space</kbd> again to see additional autofill argument options. 
Entering the string customize the information the `query` command returns. 

From the CLI prompt, enter:

`network dns query`

Returns the system nameserver IP addresses. 

From the **network** prompt, enter:

`dns query`
{{< /expand >}}


{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}