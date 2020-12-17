---
title: "Time Formatting"
chapter: false
pre: "<i class='fa fa-bookmark'></i>	"
description: "Formatting for using time-based access for API calls"
---

## Input Time Codes
* Typical name for arguments that use this format: "time_start", "time_end"

Some API calls may take relative time codes as inputs. The format for these types of time codes are `"[number][unit]"`, with the following units that are supported:

* "m" : Minutes
* "h" : Hours
* "d" : Days
* "M" : Months
* "y" : Years

A timecode can also be supplied in the time_t (unix time code) format by not placing any units on the end of the input field.

Examples:

* 1 day relative time: "1d"
* 38 minutes relative time: "38m"
* Exact time_t code: "1531226292"

## Output Time Codes
There are two primary time codes that are used when information gets returned from the middleware:

1. Unix Time Code (time_t)
   * This is a time stamp corresponding to the number of seconds since the epoch (also called "POSIX time" or "Unix time"). "Epoch" is a standard point of reference for computer times which corresponds to midnight of January 1st, 1970, UTC.
   * Example: "1540831626" corresponds to a date/time of "Mon Oct 29 16:47:06 UTC 2018"
2. Database Time Format
   * `YYYY-MM-DDThh:mm:ssZ` Where "T" is the delimiter between the date and the time, and the optional "Z" on the end indicates UTC time.
   * This is a standardized date/time format used by many databases.
   * **NOTE:** All times returned are in UTC time (whether the "Z" is on the end of the time code or not).
   * Example: "2001-01-01T01:01:01Z" corresponds to January 1st, 2001 at 1:01 AM and 1 second, UTC
