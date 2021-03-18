---
title: "reports/list_templates"
pre: "<i class='fa fa-book'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Has Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| reports | list_templates | No | No | Yes | 1.1 |

#### Description
This will return all the known report item template objects by the current version of TrueCommand. These can be inserted into the "widgets" object within a report into order to enable that type of item in the report.

For details about the "widgets" object formatting, please look at the [Reporting section]({{< relref "reporting.md" >}}) for details.

### Input Arguments
* Required:
   * none ({})
* Optional:
   * none ({})


### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

```
{
}
```

### Reply Example
```
{
  "namespace" : "reports",
  "name" : "response",
  "id" : "some_id",
  "args" : {
    "result" : "success",
    "templates" : {
      "chart_line" : {
        "id" : "chart_line",
        "internal_type" : "chart:line",
        "custom_settings" : true,
        "name" : "Generic Line Chart",
        "summary" : "Add a chart of data points pointing to custom data",
        "preview_image" : "",
        "data_paths" : [],
        "data" : null,
        "api" : [
          { "fieldname" : "title", "summary" : "Title for the chart", "value" : { "type" : "string" } },
          { "fieldname" : "subtitle", "summary" : "Subtitle for the chart", "value" : { "type" : "string" } },
          { "fieldname" : "axis_label", "summary" : "Label for the Y axis", "value" : { "type" : "string" } },
          { "fieldname" : "point_size", "summary" : "Size of data points (px)", "value" : { "type" : "integer", "default" : 8,  "min" : 0, "max" : 512 } },
          { "fieldname" : "line_size", "summary" : "Width of the line (px)", "value" : { "type" : "integer", "default" : 4, "min" : 1, "max" : 512 } },
          { "fieldname" : "series_color", "summary" : "Color codes for series", "is_array" : true, "value" : { "type" : "string" } },
          { "fieldname" : "y_min", "summary" : "Minimum Y-axis value", "value" : { "type" : "float" } },
          { "fieldname" : "y_max", "summary" : "Maximum Y-axis value", "value" : { "type" : "float" } }
        ],
        "settings" : {}
      },
      "network_chart" : {
        "id" : "network_chart",
        "internal_type" : "chart:line",
        "custom_settings" : false,
        "name" : "Network Traffic Chart",
        "summary" : "Chart of network traffic",
        "preview_image" : "",
        "data_paths" : [
          {"path" : "network%total%KB/s in", "legend" : "Total Download" },
          {"path" : "network%total%KB/s out", "legend" : "Total Upload" }
        ],
        "data" : null,
        "api" : [],
        "settings" : {
          "title" : "Network Traffic",
          "subtitle" : "",
          "axis_label" : "KB/s",
          "point_size" : 0,
          "line_size" : 3,
          "y_min" : 0
        }
      }
    }
  }
}
```
### Log Summary
This API call does not generate a detailed log summary item

### Events
This this API call does not emit any middleware events.

#### See Also
* {{< api-link "reports/add" >}}
* {{< api-link "reports/edit" >}}
* {{< api-link "reports/remove" >}}
