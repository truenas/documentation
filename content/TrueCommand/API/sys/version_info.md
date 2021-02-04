---
title: "sys/version_info"
pre: "<i class='fa fa-cogs'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| sys | version_info | no | no | no | 1.3 |

#### Description
Return general information about the current system version and other versions.

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
  "version_info" : {
    "current_version" : "1.2.2",
    "updates_available" : false,
    "versions" : [
      { "version" : "1.2.2", "latest" : true, "date" : "2020-03-11", "notes" : "Patch fix 2:  More CA and DB restore fixes", "url" : "https://www.ixsystems.com/blog/library/truecommand-1-2-2/" },
      { "version" : "1.2.1", "latest" : false, "date" : "2020-02-25", "notes" : "Patch fix for CA certificate handling", "url" : "https://www.ixsystems.com/blog/library/truecommand-1-2-1/" },
      { "version" : "1.2", "latest" : false, "date" : "2020-02-18", "notes" : "First docker release of TrueCommand", "url" : "https://www.ixsystems.com/blog/library/truecommand-1-2/" }
    ]
  }
}
```

### Events
This API call does not emit any middleware events.

### Log Summary

#### See Also
* {{< api-link "sys/info" >}}
* {{< api-link "sys/middleware_log" >}}
