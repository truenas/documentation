---
title: "Advanced Scheduler"
description: "Configuring a custom schedule for a task."
---

TrueNAS has a variety of options for scheduling tasks.
Typical choices are often suggested, but an advanced scheduler provides an increased level of control to fine-tune and visualize exactly when a task will run.
To open the advanced scheduler, open a scheduling related field and click **Custom**.

<img src="/images/TN-12.0-custom-scheduler.png">

## Creating a Custom Schedule

Choosing a preset schedule fills in the rest of the fields.
To customize a schedule, enter [crontab](https://www.freebsd.org/cgi/man.cgi?crontab(5)) values for the `Minutes/Hours/Days`.

These fields accept standard [cron](https://www.freebsd.org/cgi/man.cgi?query=cron) values.
The simplest option is to enter a single number in the field.
The task runs when the time value matches that number.
For example, entering `10` means that the job runs when the time is ten minutes past the hour.

An asterisk (`*`) means “match all values”.

Specific time ranges are set by entering hyphenated number values.
For example, entering `30-35` in the `Minutes` field sets the task to run at minutes 30, 31, 32, 33, 34, and 35.

Lists of values can also be entered.
Enter individual values separated by a comma (`,`).
For example, entering `1,14` in the `Hours` field means the task runs at 1:00 AM (0100) and 2:00 PM (1400).

A slash (`/`) designates a step value.
For example, while entering `*` in `Days` means the task runs every day of the month, `*/2` means the task runs every other day.

Combining all the above examples together creates a schedule running a task each minute from 1:30-1:35 AM and 2:30-2:35 PM every other day.

There is an option to select which `Months` the task will run.
Leaving each month unset is the same as selecting every month.

The `Days of Week` schedules the task to run on specific days.
This is in addition to any listed *Days*.
For example, entering `1` in Days and setting `Wed` for `Days of Week` creates a schedule that starts a task on the first day of the month **and** every Wednesday of the month.

The `Schedule Preview` shows when the current schedule settings will cause the task to run.
