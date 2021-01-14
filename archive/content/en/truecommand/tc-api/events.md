---
title: "Event Formatting"
description: "Description of the events subsystem for websocket connections"
chapter: false
pre: "<i class='fa fa-bookmark'></i>	"
---

## Event Messages
For websocket connections, spontaneous events will be periodically sent to clients which announce changes which happen within the middleware itself. These events will always have the following form:
```
{
"namespace" : "event",
"name" : "api_class_or_subsystem",
"id" : "",
"args" : {}
}
```
Where the contents of the arguments object is determined by the type of event (the "name" field). See the documentation on the individual API calls for details on the events that each call may generate or be impacted by.

* Example event message from the creation of a new user account:

```
{
"namespace" : "event",
"name" : "users/add",
"id" : "",
"args" : {}
}
```
