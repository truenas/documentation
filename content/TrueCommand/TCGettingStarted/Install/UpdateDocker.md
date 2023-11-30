---
title: "Update Docker"
description: "Describes how to update TrueCommand installed in a Docker container."
weight: 50
tags:
- docker
- update
---

Updating TrueCommand installed in a Docker container requires stopping the existing container, obtaining the latest software image from the **ixsystems/truecommand** hub, and then starting an updated container using the existing TrueCommand storage volume.

This article provides command line instructions on how to do, but you can use different container management applications to accomplish the same task.

Log into the Docker host system for the container update process.

On Linux systems, you must run `docker` commands as the **root** account. 
You might need to add `sudo` to the front of the example command to run the command as root. Enter:

`sudo docker image pull ixsystems/truecommand`

To view all active containers, enter `docker ps`.
```
joe@joe-minty:~$ sudo docker ps
[sudo] password for joe:     
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS                   PORTS                           NAMES
d595961d9024        ixsystems/truecommand:latest   "/start.sh"              15 minutes ago      Up 15 minutes            443/tcp, 0.0.0.0:8080->80/tcp   TrueCmd_contained
```
For the rest of the examples in this article, we use `TrueCmd_contained` for the container name.
Replace this with your TrueCommand container name.

You also need to note the path to the volume that the container uses for your TrueCommand configuration.
You need to use this volume when starting the updated Docker container to continue using your existing TrueCommand configuration.

## Back Up the Container Volume

Before updating the container, create and store a copy of the container `/data` directory in a separate location.
You can use this to restore the TrueCommand configuration and saved data in the event of an issue appearing during the update process.
In a command line, `cp` the TrueCommand container `/data` directory to a different temporary or storage location:
For example:
```
joe@joe-minty:~$ cp -r /home/joe/Documents/TrueCommandContainer/data /home/joe/temp/
```

If something goes wrong and you need to create a new container, you can remove the empty **/data** directory from the container and replace it with the previously saved TrueCommand configuration. 
For example:
```
joe@joe-minty:~$ rm -d /home/joe/Documents/NewTrueCommandContainer/data
joe@joe-minty:~$ cp -r /home/joe/temp/data /home/joe/Documents/NewTrueCommandContainer/
```

## Docker Container Commands
There are a few general Docker commands to remember when interacting with a TrueCommand container:

To start or stop the TrueCommand container, enter `docker start <container name>` or `docker stop <container name>` on the Docker host system. 

To have the container automatically start when the Docker host system boots, ensure that the Docker daemon is configured to run at system boot and add the `--restart` flag to the initial `docker run` command.
For example:
<code>
docker run --name=<i>the name to call the container</i>> -v="<i>local directory</i>>:/data" -p <host port>:80 sslport <host port>:443 --detach --restart ixsystems/truecommand:latest
</code>

For a full history of every container that the host has run, use `docker ps -a`. For example:
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
To update the docker container, download the latest TrueCommand image and remove the existing TrueCommand container.
Then restart the container using the latest TrueCommand image and existing TrueCommand storage volume.

To remove the existing container, enter `docker rm TrueCmd_contained`.
Next, run `docker image pull ixsystems/truecommand`.

By default, this pulls the latest image of TrueCommand to the Docker host.
Start a new container that uses the new image, but make sure to use the existing volume used for the original TrueCommand container.
For example: 
<code>
docker run --name <i>the name to call the container</i>> -v "<i>local host directory</i>:/data" -p <host port>:80 sslport <host port>:443 --detach ixsystems/truecommand:latest
</code>

Example without https:
```
sudo docker run --name TrueCmd_contained -v "/home/joe/Documents/TrueCommandContainer:/data" -p 8080:80 -d ixsystems/truecommand:latest
```
After creating the container, Docker uses the image previously downloaded with `docker pull`.
You might need to refresh the screen to view the changes, but previous settings and systems remain available due to the volume reference.
