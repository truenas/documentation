---
title: "Updating a TrueCommand Docker Container"
linkTitle: "Updating: Docker"
description: "How to update TrueCommand within a Docker container."
tags: ["truecommand docker"]
weight: 4
---

Updating TrueCommand installed in a Docker container requires obtaining the latest software image from the ixsystems/truecommand hub.
You can either update the image in the existing TrueCommand container or delete the container entirely and rebuild using the latest TrueCommand image.

Log in to the Docker host system to run all the container upgrade commands.

> On Linux systems, `docker` commands need to be run as the *root* account. You might need to add `sudo` in front of the example command to run the command as *root*: `sudo docker image pull ixsystems/truecommand`.

To identify the TrueCommand container, run `docker ps -a`:

	joe@joe-minty:~$ sudo docker ps -a
	[sudo] password for joe:     
	CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS                   PORTS                           NAMES
	d595961d9024        ixsystems/truecommand:latest   "/start.sh"              15 minutes ago      Up 15 minutes            443/tcp, 0.0.0.0:8080->80/tcp   TrueCmd_contained
	214a0275a216        phpmyadmin/phpmyadmin          "/docker-entrypoint.…"   7 weeks ago         Exited (0) 11 days ago                                   phpmyadmin
	0a68db912cce        phpwork                "docker-php-entrypoi…"   4 months ago        Exited (0) 11 days ago                                   phpwork_1
	d0ae8d0a839f        mysql:5.7                      "docker-entrypoint.s…"   4 months ago        Exited (0) 11 days ago                                   phpwork_mySQL_1

For the rest of the examples in this article, we'll be referring to `TrueCmd_contained` for the container name.
Be sure to replace this with your TrueCommand container name.

## Docker Container Commands

There are a few Docker commands to remember when interacting with a TrueCommand container:

To start or stop the TrueCommand container, enter `docker container start <container name>` or `docker container stop <container name>` on the Docker host system. 

To have the container automatically start when the Docker host system boots, ensure that the Docker daemon is configured to run at system boot and add the `--restart` flag to the initial `docker run` command:

	docker run --name=<the name to call the container> -v=”<local directory>:/data” -p <host port>:80 sslport <host port>:443 --detach --restart ixsystems/truecommand:latest

## Quick Update

Issue the `stop` command to the TrueCommand container and wait for it to fully shut down:

`docker stop TrueCmd_contained`

Update the container with the latest TrueCommand image available from iXsystems:

`docker pull ixsystems/truecommand:latest`

Start the container again to start using the latest release of TrueCommand!

`docker start TrueCmd_contained`

## Rebuilding the Container

You can also update by deleting the existing TrueCommand container, rebuilding it with the latest TrueCommand image, and pointing the existing TrueCommand volume to the rebuilt container.

First, run `docker image pull ixsystems/truecommand`.
By default, the latest image of TrueCommand is pulled to the Docker host.

To remove the existing container, enter `docker rm TrueCmd_contained`.

Now to upgrade.
Recreate a new container from the new image, but use the existing volume assigned to the original TrueCommand container. 

	docker run --name=<the name to call the container> -v=”<local host directory>:/data” -p <host port>:80 sslport <host port>:443 --detach ixsystems/truecommand:latest

Example without https:

	sudo docker run --name=TrueCmd_contained -v "/home/joe/Documents/TrueCommandContainer:/data" -p 8080:80 -d ixsystems/truecommand:latest

When the container is created, Docker will use the image previously downloaded with `docker pull`.
A page refresh might be required to view the changes, but previous settings and systems remain available due to the volume reference.
