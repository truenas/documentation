---
title: "Using the Advanced Scheduler"
weight: 95
---

![Tasks Advanced Scheduler](/images/CORE/12.0/TasksAdvancedScheduler.png "Tasks Advanced Scheduler")

Choosing a **Presets** option automatically populates all fields.

To customize a schedule, enter [crontab](https://www.freebsd.org/cgi/man.cgi?crontab(5)) values for the **Minutes**/**Hours**/**Days**.

The simplest option is to enter a single number in the field.
The task runs when the time value matches that number.
Entering *10* runs the task when the time is ten minutes past the hour.

An asterisk (_*_) matches all values.

Set specific time ranges by entering hyphenated number values.
Entering *30-35* in the **Minutes** field runs the task at minutes 30, 31, 32, 33, 34, and 35.

You can list individual values separated by a comma (*,*).
Entering *1,14* in the **Hours** field runs the task at 1:00 AM (0100) and 2:00 PM (1400).

A slash (*/*) designates a step value.
Entering _*_ in **Days** runs the task every day of the month, while _*/2_ runs it every other day.

Combining all the above examples creates a schedule running a task each minute from 1:30-1:35 AM and 2:30-2:35 PM every other day.

There is an option to select which **Months** the task runs.
Leaving each month unset is the same as selecting every month.

The **Days of Week** schedules the task to run on specific days plus any listed days.
Entering *1* in **Days** and setting *Wed* for **Days of Week** creates a schedule that starts a task on the first day of the month *and* every Wednesday of the month.

The **Schedule Preview** displays when the current settings mean the task runs.

{{< expand "Examples of CRON syntax" "v" >}}
<table>
	<thead>
		<tr>
			<th>Syntax</th>
			<th>Meaning</th>
			<th>Examples</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> * </td>
			<td>Every item.</td>
			<td>* (minutes) = every minute of the hour.<br/>* (days) = every day.</td>
		</tr>
		<tr>
			<td> */N </td>
			<td>Every N<sup>th</sup> item.</td>
			<td>*/15 (minutes) = every 15th minute of the hour (every quarter hour).<br/>*/3 (days) = every 3rd day.<br/>*/3 (months) = every 3rd month.</td>
		</tr>
		<tr>
			<td>Comma and hyphen/dash</td>
			<td>Each stated item (comma)<br/>Each item in a range (hyphen/dash).</td>
			<td>1,31 (minutes) = on the 1st and 31st minute of the hour.<br/>1-3,31 (minutes) = on the 1st to 3rd minutes inclusive, and the  31st minute, of the hour.<br/>mon-fri (days) = every Monday to Friday inclusive (every weekday).<br/>mar,jun,sep,dec (months) = every March, June, September, December.</td>
		</tr>
	</tbody>
</table>

You can specify days as days of the month or days of the week.

With these options, you can create flexible schedules similar to these examples:

<table>
	<thead>
		<tr>
			<th>Desired schedule</th>
			<th>Values to enter</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>3 times a day (at midnight, 08:00 and 16:00)</td>
			<td>months=*; days=*; hours=0/8 or 0,8,16; minutes=0<br/>(Meaning: every day of every month, when hours=0/8/16 and minutes=0)</td>
		</tr>
		<tr>
			<td>Every Monday, Wednesday and Friday, at 8.30 pm</td>
			<td>months=*; days=mon,wed,fri; hours=20; minutes=30</td>
		</tr>
		<tr>
			<td>1st and 15th day of the month, during October to June, at 00:01 am</td>
			<td>months=oct-dec,jan-jun; days=1,15; hours=0; minutes=1</td>
		</tr>
		<tr>
			<td>Every 15 minutes during the working week, which is 8am - 7pm (08:00 - 19:00) Monday to Friday</td>
			<td>Note that this requires two tasks to achieve:<br/>(1) months=*; days=mon-fri; hours=8-18; minutes=*/15<br/>(2) months=*; days=mon-fri; hours=19; minutes=0<br/>We need the second scheduled item, to execute at 19:00, otherwise we would stop at 18:45. Another workaround is to stop at 18:45 or 19:45 rather than 19:00.</td>
		</tr>
	</tbody>
</table>
{{< /expand >}}