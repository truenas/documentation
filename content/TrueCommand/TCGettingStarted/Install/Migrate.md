---
title: "Migrate Legacy to 1.2+"
description: "Describes how to migrate legacy versions of TrueCommand."
weight: 60
tags:
- tcinstall
- tcdocker
- tcupdate
- scaletoptoolbar
- coretoptoolbar
---

{{< toc >}}

Starting with TrueCommand 1.2, TrueCommand is built and offered as a Docker container to drastically reduce system overhead and simplify TrueCommand updates.
Migrating data can be done before or after installing the Docker container version of TrueCommand. The procedure is similar in both situations, with just a couple extra steps when the Docker container version of TrueCommand is already installed.

## Process Summary

* Preparing an existing container
  * Turn off the container
  * Wipe the container database

* Migrating a previous TrueCommand Configuration
  * Find/Create local system directory to store TrueCommand Docker container data
  * Copy existing TrueCommand configuration files to new directory
  * Transform `ixdb` database into `ixdb.sql` and move *.sql* into container database directory

## Preparing an Existing Container for Migration

{{< hint type=important >}}
Migrating the configuration from a previous version of TrueCommand will overwrite any existing configuration! Migrating the configuration before installing the Docker container is recommended, or as soon as possible after installing to prevent making and then losing any new configuration settings.
{{< /hint >}}

Migrating a previous configuration into an existing TrueCommand Docker container installation requires wiping the existing database from the container and replacing with the `ixdb.sql` database from the previous version of TrueCommand.
Make sure the container is turned off.
Open the directory you specified to use for managing the container and find the `ixdb` directory.
Remove all existing files from this directory.
The container is ready for data migration from the previous version of TrueCommand.

Follow the steps in the next section to transfer the certificate, license, and database files into the existing container configuration directory.

## Migrating a Previous TrueCommand Configuration

To move an existing TrueCommand 1.1 or earlier configuration to a Docker container version, follow these migration steps:

1. Create a local system directory for Docker container data.
   This step is only needed when the Docker container version of TrueCommand is **not** already installed.
   This directory will contain all the TrueCommand docker container data, including configuration files.
   For the rest of these instructions, this directory will be referred to as `localhostdirectory/`.
   When the Docker container is already installed, find the existing `localhostdirectory/` you specified during container installation.

2. Find and copy any existing TrueCommand 1.1 or earlier configuration files to the new `localhostdirectory/`.
   Using a command like `ssh` or `rsync` is recommended.
   The Docker container will read these files and apply the existing configuration to the container when it is installed.
   The table lists the default location and required destination for all the different configuration files TrueCommand 1.1 or earlier can create.
   Only files that already exist need to be copied to the new TrueCommand `localhostdirectory/`.

{{< truetable >}}
| Files from TrueCommand 1.1 and earlier                 | Copy destination in local host directory   | Description                                                       |
|--------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------|
| `/usr/local/etc/truecommand/server.[crt | key].custom` | `localhostdirectory/truecommand/`          | Custom SSL certificate or key that was imported into TrueCommand. |
| `/var/nas-db-backup`                                   | `localhostdirectory/`                      | Directory tree of NAS configuration backups.                      |
| `/var/db/.tv_license.sha512`                           | `localhostdirectory/`                      | License and signature for the license.                            |
{{< /truetable >}}

3. For the TrueCommand 1.1 `/var/db/ixdb/` database, use `pg_dump ixdb > ixdb.sql` to transform the database into a single *.sql* file.
   Then move `ixdb.sql` to the `localhostdirectory/` for the TrueCommand Docker container.

You are now ready to install or start the TrueCommand Docker container. Be sure to specify the `localhostdirectory/` during container installation for TrueCommand to load the migrated data.

{{< taglist tag="tcdocker" limit="10" >}}
