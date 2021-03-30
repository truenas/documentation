---
title: "Reporting Formats"
description: "Basic information about reports and the types of widgets available."
chapter: false
pre: "<i class='fa fa-bookmark'></i>	"
---

The reports objects used by all of the "reports/\*" API calls include a generic "widgets" object which defines all the various appearance-related options and charting selections for a report. This document details all the various formatting options for that widgets object which are supported by the TrueCommand middleware. Everything outside the scope of this format is simply ignored by the middleware.

## The "widgets" object and item placement
The top-level of the "widgets" object contains the information necessary for creating the layout of the items on the screen. The screen is divided into a grid of equally-sized quadrants, with the "column_count" field determining the number of columns to divide the screen into, and the length of the "items" array determining placement of the items. The row number is automatically determined (items / columns) and the page will become scrollable as needed to fit all of the items.

The items are placed into the grid starting with the top-left corner, so a column count of 2 with an item length of 3 will result in a 2x2 grid with the top row filled in and the left-most grid of the second row also populated.

Top-level object format example:
```
"widgets" : {
  "column_count" : 2,
  "items" : [
    {<Widget1>},
    {<Widget2>},
    {<Widget3>}
  ]
}
```

Visual Representation:

|  |  |
|:--:|:--:|
| Widget1 | Widget 2 |
| Widget3 | -empty- |

It is also possible insert gaps or arrange the items on the page by inserting "null" values into the items array for every blank grid point on the page.

Example 2:
```
"widgets" : {
  "column_count" : 2,
  "items" : [
    {<Widget1>},
    null,
    {<Widget2>},
    null,
    {<Widget3>}
  ]
}
```

Visual Representation:

|  |  |
|:--:|:--:|
| Widget1 | -empty- |
| Widget2 | -empty- |
| Widget3 | -empty- |

Visual Representation if the column count is changed to 3:

|  |  | |
|:--:|:--:|:--:|
| Widget1 | -empty- | Widget2 |
| -empty- | Widget3 | -empty- |

## Types of widgets
All widget options **must** contain a field called "type" which is set to one of the following options:

* "chart" : A graphical chart of information
* "list" : An auto-generated list of information
* "text" : Simple text which should be shown. Supports some basic rules for inserting information such as timestamps automatically.

Details for these types of widgets are included below

### Chart Widgets

#### Line Charts

#### Bar Charts

#### Area Charts

#### Donut Charts

#### Pie Charts

### List Widgets

### Text Widgets
