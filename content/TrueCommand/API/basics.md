---
title: "Basic Formatting"
description: "Standard connection information and syntax"
chapter: false
pre: "<i class='fa fa-bookmark'></i>	"
---

There are 4 basic pieces of an API request:

* Namespace: Top-level subsystem to access
* Name: Lower-level subsystem to access
* ID: (Websocket only) Used for correlating a request with a reply (Websocket connections are asynchronous - replies may come back in a different order than they were requested)
* Arguments: JSON Object containing additional information for the request/reply

## HTTP Connections
* Default port number: 5183 (http) or 5185 (https)
* Simple access URL: [system_IP]/api (will automatically use the proper port)
* Supported Verbs: "PUT", "POST", "GET", "HEAD", and "OPTIONS"

Standard Syntax Example:
```
GET [namespace]/[name] [HTTP Version]
Authorization: basic [base-64 encoded "[user]:[pass]"]
{
[Additional JSON Arguments]
}
```

Example of using curl to sent a TCP/REST request:
```
curl -l -g --data '{}' -u "username:password" -X GET http://[IP_ADDRESS]/api/[NAMESPACE]/[NAME]
```

## WebSocket Connections
* Default port number: 5182 (ws) or 5184 (wss)
* Simple access URL: [system_IP]/websocket (will automatically use the proper port)

Standard Syntax Example:
```
{
"namespace" : "[namespace]",
"name" : "[name]",
"id" : "[some_unique_id]",
"args" : [Additional JSON Arguments]
}
```

### Error Detection:
The "name" field in the reply will typically be set to "response" if the API call was successful, or "error" if the API call was rejected for some reason.

* Example Error Reply:

```
{
"namespace":"error",
"name":"error",
"id":"same_id_as_request",
"args": {
  "code":"404",
  "message":"Not Found"
  }
}
```
