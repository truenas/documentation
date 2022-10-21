---
title: "Update Docker"
description: "This article describes how to update TrueCommand installed in a Docker container."
weight: 50
tags:
- tcdocker
- tcupdate
---

{{< toc >}}

Updating TrueCommand installed in a Docker container requires stopping the existing container, obtaining the latest software image from the *ixsystems/truecommand* hub, and starting an updated container using the preexisting TrueCommand storage volume.

This article shows how to do this using the command line, but different container management applications can be used to accomplish the same task.
Log in to the Docker host system for the container update process.

> On Linux systems, `docker` commands need to be run as the *root* account. You might need to add `sudo` in front of the example command to run the command as *root*: `sudo docker image pull ixsystems/truecommand`.

To view all active containers, enter `docker ps`:
```
joe@joe-minty:~$ sudo docker ps
[sudo] password for joe:     
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS                   PORTS                           NAMES
d595961d9024        ixsystems/truecommand:latest   "/start.sh"              15 minutes ago      Up 15 minutes            443/tcp, 0.0.0.0:8080->80/tcp   TrueCmd_contained
```
For the rest of the examples in this article, we'll be referring to `TrueCmd_contained` for the container name.
Be sure to replace this with your TrueCommand container name.

You will also need to note the path to the volume that the container uses for your TrueCommand configuration.
You'll need to use this volume when starting the updated Docker container to continue using your existing TrueCommand configuration.

## Back up the Container Volume

Before updating the container, create and store a copy of the container `/data` directory in a separate location.
This can be used to restore the TrueCommand configuration and saved data in the event of an issue appearing during the update process.
In a command line, `cp` the TrueCommand container `/data` directory to a different temporary or storage location:
Example:
```
joe@joe-minty:~$ cp -r /home/joe/Documents/TrueCommandContainer/data /home/joe/temp/
```

If something goes wrong and a new container needs to be created, the empty **/data** directory can be removed from the container and replaced with the previously saved TrueCommand configuration:
```
joe@joe-minty:~$ rm -d /home/joe/Documents/NewTrueCommandContainer/data
joe@joe-minty:~$ cp -r /home/joe/temp/data /home/joe/Documents/NewTrueCommandContainer/
```

## Docker Container Commands

There are a few general Docker commands to remember when interacting with a TrueCommand container:

To start or stop the TrueCommand container, enter `docker start <container name>` or `docker stop <container name>` on the Docker host system. 

To have the container automatically start when the Docker host system boots, ensure that the Docker daemon is configured to run at system boot and add the `--restart` flag to the initial `docker run` command:

```
docker run --name=<the name to call the container> -v=”<local directory>:/data” -p <host port>:80 sslport <host port>:443 --detach --restart ixsystems/truecommand:latest
```

For a full history of every container that the host has run, use `docker ps -a`:

```
joe@joe-minty:~$ sudo docker ps -a
[sudo] password for joe:     
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS                   PORTS                           NAMES
d595961d9024        ixsystems/truecommand:latest   "/start.sh"              15 minutes ago      Up 15 minutes            443/tcp, 0.0.0.0:8080->80/tcp   TrueCmd_contained
214a0275a216        phpmyadmin/phpmyadmin          "/docker-entrypoint.…"   7 weeks ago         Exited (0) 11 days ago                                   phpmyadmin
0a68db912cce        phpwork                "docker-php-entrypoi…"   4 months ago        Exited (0) 11 days ago                                   phpwork_1
d0ae8d0a839f        mysql:5.7                      "docker-entrypoint.s…"   4 months ago        Exited (0) 11 days ago                                   phpwork_mySQL_1
```

## Update Process

To update, download the latest TrueCommand image and remove the existing TrueCommand container.
Then restart the container using the latest TrueCommand image and preexisting TrueCommand storage volume.

To remove the existing container, enter `docker rm TrueCmd_contained`.
Now run `docker image pull ixsystems/truecommand`.
By default, the latest image of TrueCommand is pulled to the Docker host.
Start a new container that uses the new image, but make sure to use the preexisting volume that was being used for the original TrueCommand container: 
```
docker run --name <the name to call the container> -v ”<local host directory>:/data” -p <host port>:80 sslport <host port>:443 --detach ixsystems/truecommand:latest
```
Example without https:
```
sudo docker run --name TrueCmd_contained -v "/home/joe/Documents/TrueCommandContainer:/data" -p 8080:80 -d ixsystems/truecommand:latest
```
When the container is created, Docker will use the image previously downloaded with `docker pull`.
A page refresh might be required to view the changes, but previous settings and systems remain available due to the volume reference.

{{< taglist tag="tcdocker" limit="10" >}}
