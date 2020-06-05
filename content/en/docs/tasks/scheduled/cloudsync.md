---
title: "Transferring Data to the Cloud"
linkTitle: "Cloud Data Transfers"
description: "How to configure Cloud Credentials and Cloud Sync tasks to send or receive data from the Cloud."
---

## Process Summary

* Configuring data synchronization to or from the TrueNAS system with a Cloud Storage Provider.
  * Can involve configuring access to a third party commercial vendor that is not affiliated with iXsystems. iXsystems is not responsible for any additional charges incurred when using Cloud Sync with a third party vendor.
  * Requires configuring a Cloud Service credential, then scheduling an automated task.
* **System > Cloud Credentials**
  * Uses [rclone](https://rclone.org/) to configure access to Cloud Storage Providers.
    * Credentials are encrypted for storage.
    * System configuration backups must include the Password Secret Seed to be able to restore any existing Cloud Credentials.
      * **Security Reminder**: secure and protect any configuration backups that include the Password Secret Seed.
  * Configuring credentials
    * Users must have their account or other system connection details ready when adding credentials for a third party Cloud Storage Provider.
    * Most providers have an Open Authentication portal to **Login to Provider** and automatically configure the Cloud Credentials form.
* **Tasks > Cloud Sync Tasks**
  * Requires an existing Cloud Credential
    * A single Cloud Credential can be used for multiple schedules.
  * Configuring
    * Can Push data from the system to the cloud storage or Pull data from cloud storage to the system.
    * Many options are dependent on what the Cloud Storage Provider supports.
    * Transfer modes
      * Sync: destination files change to match source.
        * Can delete files from the destination. There are exceptions to this:
          * If [rclone sync](https://rclone.org/commands/rclone_sync/) encounters any errors, files are not deleted in the destination. This includes a common error when the Dropbox [copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.
          * Syncing to a [B2 bucket](https://www.backblaze.com/b2/cloud-storage.html) does not delete files from the bucket, even when those files have been deleted locally. Instead, files are tagged with a version number or moved to a hidden state. To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).
          * Files stored in Amazon S3 Glacier or S3 Glacier Deep Archive cannot be deleted by [rclone sync](https://rclone.org/commands/rclone_sync/). These files must first be restored by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).
      * Copy: source files copied to the destination.
        * Files with the same names on the destination are overwritten.
        * Least (potentially) destructive option.
      * Move: source files are copied to the destination, then source files are deleted.
        * Files with the same names on the destination are overwritten.
    * Files and directories can be excluded from the sync.
    * Additional scripting is supported.
    * Limiting bandwidth is supported.
    * Remote encryption is handled by [rclone crypt](https://rclone.org/crypt/).
  * Scheduling the task
    * Preset schedules.
    * Advanced Scheduler
      * Allows typing in cron values.
        * Numbers used for minutes, hours, and days.
        * All possible values: asterisk (*)
        * Time range: hyphenated number values (30-35)
        * List values: comma separated (1,8,13)
        * Step values: slash designated (*/2)
        * Checkbox selections for Months and Days of Week.
          * Days of Week are added to any defined Days.
        * Schedule preview shows current configuration.
  * Active Cloud Syncs
    * In progress Cloud Syncs must complete before another can start.
    * Cloud Sync will run until complete, even after designated ending time.
    * Can be manually interrupted by expanding the task and clicking STOP.
    * Clicking the sync Status shows task logs.

## Sending or Receiving Data from a Cloud Storage Provider

Detailed article goes here.
