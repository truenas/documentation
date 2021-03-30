---
title: "data/curve_fit"
pre: "<i class='fas fa-chart-line'></i>	"
draft: false
chapter: false
---

| Namespace | Name | Admin Only | Log Summary | Generates Event | Version Added
|:----------------:|:--------:|:--------:|:--------:|:--------:|:---:|
| data | curve_fit | no | no | no | 1 |

#### Description
Calculate a line or point from real data, and perform interpolations or extrapolations as desired.

### Input Arguments
* Required Arguments: 
   * "x-data" (JsonArray of numbers) : X-axis coordinate points for real data (must be same length as "y-data" list).
   * "y-data" (JsonArray of numbers) : Y-axis coordinate points for real data (must be same length as "x-data" list).
* Optional Arguments (unless specifically listed, only one of these options may be provided at any time):
   * "find-y-for-x" (JsonArray of numbers) : Array of X values in which to report points for the fitted-curve. (Will calculate associated Y values for each point)
      * Default Value: Will automatically return curve points using the same "x-data" coordinate points, but Y values are adjusted to fit the curve.
   * "find-x-for-y" (JsonArray of numbers) : Array of Y values in which to report points for the fitted-curve. (Will calculate associated X values for each point)
      * Default Value: This will replace the "find-y-for-x" default value 
   * "extrapolate-y-for-x" (number) : Extra X coordinate point with which to calculate Y (can be used in conjunction with the "find-x-for-y" optional input).
   * "extrapolate-x-for-y" (number) : Extra Y coordinate point with which to calculate X (can be used in conjunction with the "find-y-for-x" optional input).

### Request Example Arguments
**ARGUMENTS ONLY**: See the {{< api-link "basics" >}} of API requests for additional formatting information.

#### Example 1
```
{
"x-data" : [ 0,1,2,3,4,5,6,7,8],
"y-data" : [0,2,4,6,8,10,12,14,16],
"find-y-for-x" : [ 10, 11, 12],
"extrapolate-x-for-y" : 100
}
```

#### Example 2
```
{
"x-data" : [ 0,1,2,3,4,5,6,7,8],
"y-data" : [0,2,4,6,8,10,12,14,16],
"extrapolate-x-for-y" : 100
}
```

### Reply Example Arguments
#### Example 1
```
"curve_fits" : {
  "x-data" : [10,11,12,50],
  "y-data" : [20,22,24,100]
}
```

#### Example 2
```
"curve_fits" : {
  "x-data" : [0,1,2,3,4,5,6,7,8,50],
  "y-data" : [0,2,4,6,8,10,12,14,16,100]
}
```

### Events
This API call does not emit any middleware events.

### Log Summary
This API call does not generate a detailed log summary item

#### See Also
* {{< api-link "data/retrieve" >}}
