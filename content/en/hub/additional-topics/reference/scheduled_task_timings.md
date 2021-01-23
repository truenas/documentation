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

See <a href="https://www.freebsd.org/cgi/man.cgi?cron(8)">man cron</a> for more.
