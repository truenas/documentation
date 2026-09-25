---
title: "S3 Service Screen"
description: "Provides information on the S3 service configuration screen and settings in TrueNAS."
weight: 125
tags:
- services
- s3
- object storage
doctype: reference
---

The **S3** service screen shows settings to configure where the S3 service listens for client requests, the certificate for encrypted connections, and service-wide options that apply to every bucket.

To open the screen, go to **Shares**, click the <span class="material-icons">more_vert</span> icon on the **Object Storage (S3) Buckets** widget, and then select **Config Service**.

{{< trueimage src="/images/SCALE/SystemSettings/S3ConfigServiceWizardPart1.png" alt="S3 Service Screen" id="S3 Service Screen" >}}

Changing the listen addresses, the number of servers, or the region restarts the S3 service.
A restart waits up to 30 seconds for client requests in progress to finish.
Other changes apply without a restart.

**Save** applies the settings.

## Listeners Settings

The **Listeners** settings select the IP addresses and ports the S3 service listens on, and the certificate for listeners that use TLS.

{{< trueimage src="/images/SCALE/SystemSettings/S3AddListenersOptions.png" alt="S3 Listen Address Settings" id="S3 Listen Address Settings" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Listen Addresses** | Click **Add** to add a listen address. Each listen address shows the **Address**, **Port**, and **TLS** settings. Add up to eight listen addresses. Leave empty to listen on every IP address on port 9000 without TLS. Click the <span class="material-icons">close</span> icon to remove a listen address. |
| **Address** | (Required) Select an IP address from the dropdown list. The list shows the static IP addresses on the system, the loopback addresses, and the wildcard addresses *0.0.0.0* and *::* that listen on every IPv4 or IPv6 address. On HA systems, the list shows the virtual IP (VIP) addresses. |
| **Port** | (Required) Enter the TCP port for the listen address. The default is *9000*. Each address and port combination can only be listed once. |
| **TLS** | Select to encrypt connections to this listen address using the certificate selected in **Certificate**. Leave cleared to accept unencrypted connections. A system with more than one network can serve a storage network without TLS and a management network with TLS. |
| **Certificate** | Select the certificate for listen addresses that use TLS. The default, **Use UI certificate**, uses the certificate assigned to the TrueNAS web UI, so a renewal or change of the UI certificate also applies to the S3 service. **Manage Certificates** opens the **Certificates** screen. |
{{< /truetable >}}
{{< /expand >}}

## Other Options Settings

The **Other Options** settings configure service performance, the region name, and logging.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Servers** | (Required) Enter the number of server threads that handle client connections. The default is *1*. Enter a number from 1 to 8 that does not exceed the number of CPUs in the system. Each server uses its own connection pool and buffers, so more servers use more memory. |
| **Region** | Enter the region name the S3 service reports to clients, for example *us-east-1*. Enter up to 63 lowercase letters, numbers, and hyphens. Leave empty to accept any region a client uses. |
| **Log Level** | (Required) Select the least serious type of message the S3 service records in its log. Options are **Error**, **Warning**, **Notice**, **Info**, and **Debug**. The default is **Notice**. **Info** adds one log record for every client request. |
{{< /truetable >}}
{{< /expand >}}

## Protocol-Created Buckets Settings

The **Protocol-Created Buckets** setting allows S3 clients to create buckets.

{{< expand "Click Here for More Information" "v" >}}
{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Managed Root Dataset** | Select the dataset where TrueNAS creates a dataset for each bucket that an S3 client creates. The dataset must already exist. **Create Dataset** opens a dialog to create a dataset under the selected dataset. Leave empty to refuse bucket creation requests from S3 clients. Buckets you add from the **Shares** screen use the **Parent Dataset** you select instead. A client can only create buckets with an access key that has **Manage Buckets** selected. |
{{< /truetable >}}
{{< /expand >}}

## Global Grants Settings

The **Global Grants** setting applies grants to every bucket on the system.

{{< trueimage src="/images/SCALE/SystemSettings/S3ConfigServiceWizardPart2.png" alt="S3 Global Grants and Auditing Settings" id="S3 Global Grants and Auditing Settings" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Global Grants** | Click **Add** to add a grant that applies to every bucket. Each grant shows the **Principal**, **User** or **Group**, and **Access** settings, with the same options as the bucket grants. A **Deny** global grant blocks the principal from every bucket, and overrides any grant on an individual bucket. |
{{< /truetable >}}
{{< /expand >}}

## Auditing Settings

The **Auditing** settings set the default audit behavior for buckets that do not set their own.
S3 auditing is a licensed feature.
The section shows a **Premium** tag when the system license does not include it.

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Default Audit** | (Required) Select which operations to audit on buckets that have **Audit** set to **Use service default**. Options are **Audit all actions**, **Audit nothing**, and **Audit selected actions**. The default is **Audit nothing**. This setting is the only way to audit bucket creation (**CreateBucket**) and bucket list (**ListAllMyBuckets**) requests. |
| **Audited Actions** | Shows when **Default Audit** is **Audit selected actions**. Select one or more S3 operations from the dropdown list. |
| **Default Audit Overflow** | (Required) Select what happens to an audited request when the audit log cannot accept another record. Options are **Drop the record** and **Answer the client with a retryable 503**. The default is **Drop the record**. |
{{< /truetable >}}
{{< /expand >}}
