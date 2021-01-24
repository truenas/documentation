---
title: "Scheduled task timings"
description: "How to specify scheduled times for cron jobs, periodic snapshots, replications, and other repeating tasks."
tags: ["TBA"]
---

A number of TrueNAS functions allow the user to choose a standard schedule for the task to run, or their own custom schedule. 

A custom schedule can be selected by clicking preferred times and days. It is also possible to manually enter values, for more specific requirements. 
Where the Web Interface allows for a custom schedule, it usually uses a similar format to the Unix `cron` command, making scheduling extremely flexible.  
This page describes the format used for custom scheduled tasks. 

Examples of syntax:

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

Note that days can be specified as days of month, or days of week.

With these options, flexible schedules can be created similar to these examples:

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
			<td>Note that this requires two tasks to achieve:<br/>(1) months=*; days=mon-fri; hours=8-18; minutes=0/15<br/>(2) months=*; days=mon-fri; hours=19; minutes=0<br/>We need the second scheduled item, to execute at 19:00, otherwise we would stop at 18:45. Another workaround would be to run until either 18:45 or 19:45 rather than 19:00.</td>
		</tr>
	</tbody>
</table>

See <a href="https://www.freebsd.org/cgi/man.cgi?cron(8)">man cron</a> for more.
