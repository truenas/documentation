---
title: "Configuring Cron Jobs"
description: "A how-to for configuring a cron job."
weight: 10
---

TrueNAS allows users to run specific commands or scripts on a regular schedule
using [cron(8)](https://man.openbsd.org/cron.8 "Cron Man Page"). This can be
helpful to run repetitive, mundane tasks.

## Create Cron Job

To create a cron job, go to **Tasks > Cron Jobs** and click *ADD*. An optional
description can be specified to help identify the purpose of the cron job. Next,
enter the exact command to be run, or enter the path to the desired script to be
run. Don't forget to specify the shell type if specifying a path to the script
file. For example, a script written for `sh` should be specified as
`sh /mnt/pool1/helloWorld.sh`. Select a user to run the command or script. The
user must have the necessary permissions to run it. Next, select a schedule
for the script to run on. If a custom schedule is desired, select *Custom* and
fill out the custom scheduler to meet your needs. The custom scheduler can
accept standard [cron input strings](https://www.freebsd.org/cgi/man.cgi?query=crontab&sektion=5)
for the *Minutes*, *Hours*, and *Days*. When *Hide standard output* (stdout) is
unset, any standard output is mailed to the user account used to run the
command. When *Hide Standard Error* (stderr) is unset, any error output is
mailed to the user account used to run the command. This can be useful to help
debug the command or script if an error occurs. Unsetting *Enabled* only keeps
the task from automatically running. You can still save the cron job and run it
manually.

To manage existing cron jobs, go to **Tasks > Cron Jobs**. A task can be ran
immediately, edited, or deleted by clicking <i class="fas fa-chevron-right"></i>
to expand a cron job in the list.