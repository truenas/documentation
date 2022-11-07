---
title: "Installing the TrueCommand Container using Docker on Linux."
description: "This article describes the steps to install the TrueCommand container in Docker on Linux."
weight: 40
tags:
- tcdocker
- tcinstall
---
{{< toc >}}
## Installing the TrueCommand Container

{{< hint info >}}
If you haven't already installed Docker on your machine, install the [Docker Engine](https://docs.docker.com/engine/install/debian/), then install [Docker Desktop](https://docs.docker.com/desktop/linux/).
{{< /hint >}}

To run TrueCommand in Docker on Linux, you must have:

* A 64-bit Linux distro (we recommend Debian) 
* Linux Kernel Support: 4.x+
* 1 CPU with 2 GiB RAM
* 1 Hard Disk with 10 - 50 GiB storage space
* Customer networking settings and internet access

Before fetching the TrueCommand docker image, create a local directory.
Enter `mkdir directory`, replacing *directory* with the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.

Open a terminal and enter `docker run \--detach -v "/hostdir:/data" -p port:80 -p ssl:443 ixsystems/truecommand:latest`.

*hostdir* is a directory on the host machine for Docker container data, *port* is the TrueCommand web interface port number, and *ssl* is the port number for secure web interface access.

To install the container with an earlier TrueCommand release, replace *latest* with the desired TrueCommand version tag:  
`docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:1.3.2`

To install the container with the nightly TrueCommand release, replace *latest* with *nightly*:  
`docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:nightly`

{{< hint warning >}}
Only use the nightly version on test systems.
{{< /hint >}}

Although Docker containers have several run methods, TrueCommand requires`-v /hostdirectory:/data` to function.

{{< hint warning >}}
Do not try to use the same host directory for two different containers!
Doing so results in file conflicts and database corruption.
{{< /hint >}}

For a list of TrueCommand versions and tags, see the [Truecommand Docker](https://hub.docker.com/r/ixsystems/truecommand/tags) page.

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a PORTS column.
Find the port associated with the `ixsystems/truecommand:latest IMAGE`.
The PORTS entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where *port* and *sslport* are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where *hostsystemIPaddress* is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

{{< expand "The connection can't be established?" "v" >}}
If you cannot establish a connection to the web interface, add the container ports as an exception to the host system firewall.
{{< /expand >}}

### Adding Browser Exceptions
{{< include file="/_includes/TCBrowserExceptions.md" type="page" >}}

{{< taglist tag="tcdocker" limit="10" >}}
