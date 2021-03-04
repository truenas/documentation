---
title: "Cron Jobs"
weight: 10
---

{{< toc >}}

TrueNAS allows users to run specific commands or scripts on a regular schedule using [cron(8)](https://man.openbsd.org/cron.8 "Cron Man Page").
This can be helpful to run repetitive tasks.

## Creating a Cron Job

To create a cron job, go to **Tasks > Cron Jobs** and click *ADD*.

![TasksCronJobsAdd](/images/CORE/12.0/TasksCronJobsAdd.png "Creating a new Cron Job")

The *Description* helps identify the cron job purpose.
This is optional.

Next, enter the exact *Command* to run on the *Schedule*.
Alternately, enter the path to a script file to run instead of a specific command.

{{< hint warning >}}
Don't forget to define the shell type when using a path to a script file.
For example, a script written for `sh` must be specified as `sh /mnt/pool1/helloWorld.sh`.
{{< /hint >}}

Select an existing TrueNAS user account to run the command or script.
This user must have the necessary permissions to run the *Command*.

Next, define the *Command* *Schedule*.
Various preset schedules are available, and an advanced scheduler for very specific schedule requirements.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

The remaining options control 
When *Hide standard output* (stdout) is
unset, any standard output is mailed to the user account used to run the
command. When *Hide Standard Error* (stderr) is unset, any error output is
mailed to the user account used to run the command. This can be useful to help
debug the command or script if an error occurs. Unsetting *Enabled* only keeps
the task from automatically running. You can still save the cron job and run it
manually.

## Managing a Cron Job

To see all created cron jobs, go to **Tasks > Cron Jobs**.
Click the <i class="fa fa-chevron-right"></i> next to an entry to see additional options.

![TasksCronJobsOptions](/images/CORE/12.0/TasksCronJobsOptions.png "Options for an existing cron job")

Clicking *Run Now* immediately starts the job *Command*, separately from any *Schedule*.
*Edit* changes any setting available during task creation.
*Delete* removes the cron job from TrueNAS.
The job configuration cannot be restored.
