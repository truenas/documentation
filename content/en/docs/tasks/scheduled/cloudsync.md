---
title: "Cloud Data Transfers"
description: "How to configure Cloud Credentials and Cloud Sync tasks to send or receive data from the Cloud."
---

## Process Summary

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

You can configure TrueNAS to send, receive, or synchronize data with a Cloud Storage provider.
Configuring a Cloud Sync task allows you to transfer data a single time or set up a recurring schedule to periodically transfer data.
This can be an effective method to back up your data to a remote location.

You will need an account with the Cloud Storage provider and a storage location created with the provider, like an Amazon S3 bucket.
Major providers like Amazon S3, Google Cloud, and Microsoft Azure are supported, along with a variety of other vendors.
To see the full list of supported vendors, log in to the TrueNAS UI and go to *System > Cloud Credentials > Add* and open the *Provider* dropdown.

{{\% alert title="Warning" color="warning" %}}
Using the Cloud means that data can go to a third party commercial vendor not directly affiliated with iXsystems.
Please investigate and fully understand that vendor’s pricing policies and services before creating any Cloud Sync task.
iXsystems is not responsible for any charges incurred from the use of third party vendors with the Cloud Sync feature.
{{\% /alert %}}

To start using Cloud storage, save cloud storage provider credentials on the system and create a new *Cloud Sync* task.

## Cloud Storage Credentials

Transferring data from TrueNAS to the Cloud requires saving Cloud Storage Provider credentials on the system.
To maximize security, these credentials are encrypted when saved.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable *Export Password Secret Seed* when generating that configuration backup.

It is recommended to have another browser tab open and logged in to the Cloud Storage Provider account you intend to link to TrueNAS.
Some providers can require additional information that is generated on the storage provider account page.
For example, saving an Amazon S3 credential on TrueNAS could require logging in to the S3 account and generating an access key pair on the *Security Credentials > Access Keys* page.

To save cloud storage provider credentials, go to *System > Cloud Credentials* and click *Add*.

<figure>
  <img src="/images/cloud-credentials-add.png">
  <figcaption>New Cloud Credential</figcaption>
</figure>

Enter a name for the credential and choose a *Provider*.
The rest of the options change according to the chosen *Provider*.
Enter the required *Authentication* strings to enable saving the credential.

Some providers can automatically populate the required *Authentication* strings by logging in to the account.
To automatically configure the credential, click *Login to Provider* and entering your account username and password.

<figure>
  <img src="/images/cloud-credentials-box-login.png">
  <figcaption>Box Authentication Example</figcaption>
</figure>

It is recommended to verify the credential before saving it.