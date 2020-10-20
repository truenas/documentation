---
title: "freenas/send_method"
menutitle: "send_method"
description: "Call a designated FreeNAS method API"
pre: "<i class='fa fa-terminal'></i> "
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| freenas | send_method | N/A | N/A | N/A | 1 |

#### Description
**This is only available for Websocket connections** 
Call a designated FreeNAS method API.

### Input Arguments
* Required Arguments:
   * "tvid" : (string or array of strings) ID of the system(s) to send the API request to
   * "method" : (string) API method to call (example: "disk.query")
   * "params" : (anything) JSON field that is passed directly to FreeNAS as the method arguments (typically an array of JSON information)

**Notes:** 
 * The "id" field of the API request will be automatically re-used for the designated FreeNAS API call and reply.
 * The return format of FreeNAS API calls vary widely, the only guarantee is that the "id" field of the reply will match that of the request.

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
  "id" : "freenas_api_call_1",
  "namespace" : "freenas",
  "name" : "send_method",
  "args" : {
    "tvid" : "server_id_1",
    "method" : "disk.query",
    "params" : []
  }
}
```

### Reply Example
```
{
  "id": "freenas_api_call_1",
  "msg": "result",
  "result": [
    {
      "acousticlevel": "DISABLED",
      "advpowermgmt": "DISABLED",
      "description": "",
      "enclosure_slot": null,
      "expiretime": null,
      "hddstandby": "ALWAYS ON",
      "identifier": "{serial}30GS10WTT84Z",
      "multipath_member": "",
      "multipath_name": "",
      "name": "ada0",
      "number": 0,
      "passwd": "",
      "serial": "30GS10WTT84Z",
      "size": "30016659456",
      "smartoptions": "",
      "subsystem": "ada",
      "togglesmart": true,
      "transfermode": "Auto"
    },
    {
      "acousticlevel": "DISABLED",
      "advpowermgmt": "DISABLED",
      "description": "",
      "enclosure_slot": null,
      "expiretime": null,
      "hddstandby": "ALWAYS ON",
      "identifier": "{serial}5NH0N524",
      "multipath_member": "",
      "multipath_name": "",
      "name": "ada1",
      "number": 1,
      "passwd": "",
      "serial": "5NH0N524",
      "size": "80026361856",
      "smartoptions": "",
      "subsystem": "ada",
      "togglesmart": true,
      "transfermode": "Auto"
    }
  ]
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item
```
{}
```

#### See Also
* {{< api-link "freenas/available_methods" >}}
