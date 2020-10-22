---
title: "TrueNAS System Data Collection Statement"
weight:
---

TrueNAS collects non-sensitive system data and relays the data to a collector managed by iXsystems.
This system data collection is enabled by default and can be disabled in the web interface under **System -> General -> Usage collection**.
When disabled, no information about system configuration and usage will be collected.
The system capacity and software version is still collected.

The protocol for system data collection uses the same TCP ports as HTTPS (*443*) and passes through most firewalls as an outgoing web connection.
If a firewall blocks the data collection or the data collection is disabled, there is no adverse impact to the TrueNAS system.

Non-sensitive system data is used to identify the quality and operational trends in the fleet of TrueNAS systems used by the entire community.
The collected data helps iXsystems identify issues, plan for new features, and determine where to invest resources for future software enhancements.

The non-sensitive system data collected is clearly differentiated from sensitive user data that is explicitly not collected by TrueNAS.
This table describes the differences:

<table>
<tbody>
  <tr>
    <td><b>Data Type</b></td>
    <td>Sensitive User Data</td>
    <td>Non-Sensitive System Data</td>
  </tr>
  <tr>
    <td><b>Description</b></td>
    <td>Any data that includes user identity or business information</td>
    <td>Data that only includes information about the TrueNAS system and its operation</td>
  </tr>
  <tr>
    <td><b>Data Collection</b></td>
    <td>No Data Collection</td>
    <td>Collected Daily</td>
  </tr>
  <tr>
    <td><b>Examples</b></td>
    <td>Usernames, passwords, email addresses</td>
    <td>System hardware inventory,  faults, statistics, Pool configuration</td>
  </tr>
  <tr>
    <td></td>
    <td>User-created System and dataset names</td>
    <td>System software versions, firmware versions</td>
  </tr>
  <tr>
  	<td></td>
  	<td>Directory, files names, user data</td>
  	<td>System services and features enabled, Usage and Performance statistics</td>
  </tr>
</tbody>
</table>

