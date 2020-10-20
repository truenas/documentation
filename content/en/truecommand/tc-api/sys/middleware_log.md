---
title: "sys/middleware_log"
menutitle: "middleware_log"
description: "Return the middleware log"
pre: "<i class='fa fa-cogs'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys| middleware_log | N/A | N/A | N/A | 1 |

#### Description
Return the contents of the middleware log file (typically used for system debugging).

**NOTE:** The contents of the log file will use the html "<br>" tag for line breaks.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{}
```

### Reply Example
```
{
  "log": "Opening Database...<br>Database Connected<br>Using SSL Library:<br> - Version: \"LibreSSL 2.6.4\"<br>Server Started: \"2018-10-09T14:05:58\"<br> Port: \"5182\"<br> URL: \"ws://127.0.0.1:5182\"<br>Using SSL Library:<br> - Version: \"LibreSSL 2.6.4\"<br>Server Started: \"2018-10-09T14:05:58\"<br> Port: \"5183\"<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>Socket Opened: \"1\" \"2018-10-09T14:08:54\" QHostAddress(\"::ffff:127.0.0.1\")<br>User Login Attempt: \"86652834-a02e-434d-a121-41b55a95771c\" \"test\"  Success: true  IP: \"::ffff:127.0.0.1\"<br>Closing Websocket Connection... QDateTime(2018-10-09 14:08:54.468 UTC Qt::TimeSpec(LocalTime))<br>Socket Closed: \"1\" \"2018-10-09T14:08:54\"<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>Socket Opened: \"1\" \"2018-10-09T14:09:21\" QHostAddress(\"::ffff:127.0.0.1\")<br>User Login Attempt: \"86652834-a02e-434d-a121-41b55a95771c\" \"test\"  Success: true  IP: \"::ffff:127.0.0.1\"<br>Closing Websocket Connection... QDateTime(2018-10-09 14:09:21.226 UTC Qt::TimeSpec(LocalTime))<br>Socket Closed: \"1\" \"2018-10-09T14:09:21\"<br>Socket Opened: \"1\" \"2018-10-09T14:10:15\" QHostAddress(\"::ffff:127.0.0.1\")<br>User Login Attempt: \"86652834-a02e-434d-a121-41b55a95771c\" \"test\"  Success: true  IP: \"::ffff:127.0.0.1\"<br>Closing Websocket Connection... QDateTime(2018-10-09 14:10:15.399 UTC Qt::TimeSpec(LocalTime))<br>Socket Closed: \"1\" \"2018-10-09T14:10:15\"<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>Socket Opened: \"1\" \"2018-10-09T14:15:26\" QHostAddress(\"::ffff:127.0.0.1\")<br>User Login Attempt: \"86652834-a02e-434d-a121-41b55a95771c\" \"test\"  Success: true  IP: \"::ffff:127.0.0.1\"<br>Closing Websocket Connection... QDateTime(2018-10-09 14:15:26.325 UTC Qt::TimeSpec(LocalTime))<br>Socket Closed: \"1\" \"2018-10-09T14:15:26\"<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>System Offline:  \"192.168.200.200\"<br> -- Will attempt to reconnect in 30 seconds<br>Socket Opened: \"1\" \"2018-10-09T14:19:51\" QHostAddress(\"::ffff:192.168.1.104\")<br>User Login Attempt: \"86652834-a02e-434d-a121-41b55a95771c\" \"test\"  Success: true  IP: \"::ffff:192.168.1.104\"<br>"
}
```


### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
* {{< api-link "sys/reboot_time" >}}
* {{< api-link "sys/reboot" >}}
* {{< api-link "sys/updates_available" >}}
* {{< api-link "sys/update_now" >}}
* {{< api-link "sys/update_status" >}}
* {{< api-link "sys/upload_file" >}}
