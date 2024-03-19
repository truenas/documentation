---
title: "Installing the TrueCommand Container using Docker on Linux."
description: "Describes the steps to install the TrueCommand container in Docker on Linux."
weight: 40
tags:
- docker
- container
- truecommand
- install
---

## Installing the TrueCommand Container

{{< hint type=note >}}
If you have not installed Docker on your machine, install the [Docker Engine](https://docs.docker.com/engine/install/debian/) and [Docker Desktop](https://docs.docker.com/desktop/linux/), or use [Podman](https://podman.io/).
{{< /hint >}}

To run TrueCommand in Docker on Linux, you must have:
* A 64-bit Linux distro (we recommend Debian) 
* Linux kernel support: 4.x+
* 1 CPU with 2 GiB RAM
* 1 Hard disk with 10 - 50 GiB storage space
* Customer networking settings and internet access

Before fetching the TrueCommand docker image, create a local directory.
Enter <code>mkdir <i>directory</i></code>, where *directory* is the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.

Open a terminal and enter <code>docker run \--detach -v "/<i>hostdir</i>:/data" -p port:<i>80</i> -p ssl:<i>443</i> ghcr.io/ixsystems/truecommand:<i>v3.0.0</i></code>.

Where *hostdir* is a directory on the host machine for Docker container data, *80* is the TrueCommand web interface port number, and *443* is the port number for secure web interface access.

{{< hint type=note >}}
SSL provides extra security in network communications.
{{< /hint >}}

To install the container with an earlier TrueCommand release, replace *v3.0.0* with the desired TrueCommand version tag. 
For example:  
`docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:release-v2.3.3`

To install the container with the nightly TrueCommand release, replace *v3.0.0* with *latest*:
`docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:latest`

{{< hint type=important >}}
Only use the nightly version on test systems.
{{< /hint >}}

Although Docker containers have several run methods, TrueCommand requires a bind mount or docker volume manage to keep the database consistent between runs.
Recreating the database will create a new system ID and invalidate a previously created license.

{{< hint type=important >}}
Do not try to use the same host directory for two different containers!
Doing so results in file conflicts and database corruption.
{{< /hint >}}

## Accessing the TrueCommand Web Interface
After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a PORTS column.
Find the port associated with the `ghcr.io/ixsystems/truecommand` image.
The PORTS entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where *port* and *sslport* are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where *hostsystemIPaddress* is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

Access the container directly via shell with `docker exec -it CONTAINER_ID /bin/bash` to make advanced configuration changes.

{{< expand "The connection cannot be established?" "v" >}}
If you cannot establish a connection to the web interface, add the container ports as an exception to the host system firewall.
{{< /expand >}}

### Adding Browser Exceptions
{{< include file="/static/includes/TCBrowserExceptions.md" >}}
