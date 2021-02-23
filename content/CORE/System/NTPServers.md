---
title: "NTP Servers"
weight: 20
---

[Network Time Protocol (NTP)](https://datatracker.ietf.org/wg/ntp/about/) servers sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers.
TrueNAS supports adding custom NTP servers.

## Adding a Custom NTP Server

Go to **System > NTP Servers** to view, edit, or remove NTP Servers:

![SystemNTPServers](/images/CORE/12.0/SystemNTPServers.png "System NTP Servers")

Several default servers are listed.
To register a new server, click *ADD*.

![System NTP Servers Add](/images/CORE/12.0/SystemNTPServersAdd.png "System NTP Servers Add")

| Setting  | Value    | Description                                                                                                                                      |
|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Address  | string   | Enter the hostname or IP address of the NTP server.                                                                                              |
| Burst    | checkbox | Recommended when Max. Poll is greater than 10. Only use on personal servers. Do not use with a public NTP server.                                |
| IBurst   | checkbox | Speed up the initial synchronization, taking seconds rather than minutes.                                                                        |
| Prefer   | checkbox | This option is only recommended for highly accurate NTP servers, such as those with time monitoring hardware.                                    |
| Min Poll | integer  | The minimum polling interval, in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is 6, minimum value is 4.        |
| Max Poll | integer  | The maximum polling interval, in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is 10, maximum value is 17. |
| Force    | checkbox | Force the addition of the NTP server, even if it is currently unreachable.                                                                       |
