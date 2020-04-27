---
title: "Migrating TrueCommand to Docker Container (Version 1.2 and Newer)"
linkTitle: "Migrating to TrueCommand Docker Container"
description: "How to migrate legacy versions of TrueCommand to the Docker container version introduced in version 1.2"
weight: 2
---

## Summary

## Migrating TrueCommand to the Docker Container Introduced in Version 1.2

Starting in TrueCommand™ 1.2, TrueCommand is built and offered as a Docker container to drastically reduce system overhead and simplify TrueCommand installation <LINK to INSTALL article>.
Migrating data can be done before or after installing the Docker container version of TrueCommand. When migrating data *after* installing TrueCommand 1.2 or newer, be sure to use the system */hostdirectory* you specified during the container installation.

To moved an existing TrueCommand 1.1 or earlier configuration to a Docker container version, follow these migration steps:

1. Identify the local system directory for Docker container data. 
   This directory will contain all the TrueCommand docker container data, including configuration files.
   When TrueCommand 1.2 or newer is already installed, this is the directory you listed during the container install process.
   When a TrueCommand Docker container is not yet installed, create this host directory, then specify it as the container directory during the Docker container installation.

2. In the existing TrueCommand 1.1 or earlier installation, copy any TrueCommand configuration files to the new local system directory using a command like `ssh` or `rsync`.
   The Docker container will read these files and apply the existing configuration to the container.
   The table lists the location and destination for all the different configuration files TrueCommand 1.1 or earlier can create.
   Only files that already exist need to be copied to the new TrueCommand container configuration directory.
    
|        Files from TrueCommand 1.1 and earlier          | Copy destination in local host directory | Description                                                       |
|--------------------------------------------------------|------------------------------------------|-------------------------------------------------------------------|
| `/usr/local/etc/truecommand/server.[crt | key].custom` | localhostdirectory/truecommand/          | Custom SSL certificate or key that was imported into TrueCommand. |
| `/var/nas-db-backup`                                   | localhostdirectory                       | Directory tree of NAS configuration backups.                      |
| `/var/db/.tv_license.sha512`                           | localhostdirectory/                      | License and signature for the license.                            |

3. For the TrueCommand 1.1 `/var/db/ixdb/` database, use `pg_dump ixdb > ixdb.sql` to transform the database into a single *.sql* file.
   Then move `ixdb.sql` to the new local database directory for the TrueCommand Docker container.

notebox here
Make sure to migrate all files to the new host directory before starting the TrueCommand™ docker container.
