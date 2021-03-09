---
title: "NTP Servers"
description: "Managing NTP Servers"
tags: ["ntp"]
---

Network Time Protocol (NTP) servers are used to sync the local system time with an accurate reference.
By default, several entries for NTP servers are created for new installations, but you can connect with custom NTP servers as needed.

## NTP Server

Go to **System > NTP Servers** to view, edit, or remove NTP Servers.

<img src="/images/TN12.0-NTP1.png">
<br><br>

## NTP Server Options

<img src="/images/TN12.0-NTP2.png">
<br><br>

| Setting  | Value    | Description                                                                                                                                      |
|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Address  | string   | Enter the hostname or IP address of the NTP server.                                                                                              |
| Burst    | checkbox | Recommended when Max. Poll is greater than 10. Only use on personal servers. Do not use with a public NTP server.                                |
| IBurst   | checkbox | Speed up the initial synchronization, taking seconds rather than minutes.                                                                        |
| Prefer   | checkbox | This option is only recommended for highly accurate NTP servers, such as those with time monitoring hardware.                                    |
| Min Poll | integer  | The minimum polling interval, in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is 6, minimum value is 4.        |
| Max Poll | integer  | The maximum polling interval, in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is 10, maximum value is 17. |
| Force    | checkbox | Force the addition of the NTP server, even if it is currently unreachable.                                                                       |

## Editing a NTP Server

Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and select **Edit**.
Edit as needed and click **Save**.

## Deleting a NTP Server

Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and select **Delete**.
