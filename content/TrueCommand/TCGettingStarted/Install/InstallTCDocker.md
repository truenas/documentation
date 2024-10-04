---
title: "Installing the TrueCommand Container using Docker on Linux."
description: "Describes the steps to install the TrueCommand container in Docker on Linux."
weight: 40
tags:
- docker
- container
- truecommand
- install
- update
aliases:
- /truecommand/tcgettingstarted/install/updatedocker/
---


## Installing the TrueCommand Container

### Requirements

Install the [Docker Engine](https://docs.docker.com/engine/install/debian/) and [Docker Desktop](https://docs.docker.com/desktop/linux/), or use [Podman](https://podman.io/).

To run TrueCommand in Docker on Linux, you must have:
* A 64-bit Linux distro (Debian recommended) 
* Linux kernel support: 4.x+
* 1 CPU with 2 GiB RAM
* 1 Hard disk with 10 - 50 GiB storage space
* Customer networking settings and internet access

### Fetch and Deploy the Container Image

Before fetching the TrueCommand container image, create a local directory to store TrueCommand container data.

{{< hint type=important >}}
Do not try to use the same host directory for two different containers!
Doing so results in file conflicts and database corruption.
{{< /hint >}}

Enter <code>mkdir <i>directory</i></code>, where *directory* is the new name. For example, <code>/opt/truecommand-data</code> or <code>~/.config/truecommand-data</code>.

After creating the new directory, fetch and run the TrueCommand image.

Open a terminal and enter {{< cli >}}docker run --detach --name <i>container name, optional</i> -v "<i>hostdir</i>:/data" -p <i>port</i>:80 <i>sslport</i>:443 ghcr.io/ixsystems/truecommand:<i>v3.0.2</i>{{< /cli >}}.

Where:
* *hostdir* is a directory on the host machine for Docker container data
* *port* is the TrueCommand HTTP web interface port
* *sslport* is the HTTPS port for secure web interface access.

To install the container with an earlier TrueCommand release, replace *v3.0.2* with the desired TrueCommand version tag.
For example:
`docker run --detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:v2.3.3`

To preview the latest features in a non-production experimental environment, install the container with the latest TrueCommand development build:
`docker run --detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:latest`

{{< hint type=important >}}
If the image is unavailable, ensure `ghcr.io` is not blocked by an internal firewall.
Alternatively, you can pull the image from docker hub at <code>ixsystems/truecommand:<i>3.0.2</i></code>
{{< /hint >}}

Although Docker containers have several run methods, TrueCommand requires a bind mount or docker volume manage to keep the database consistent between runs.
Recreating the database creates a new system ID and invalidates a previously created license.

## Accessing the TrueCommand Web Interface
After fetching the TrueCommand Docker container, enter {{< cli >}}docker ps{{< /cli >}} to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from {{< cli >}}docker ps{{< /cli >}} contains a PORTS column.
Find the port associated with the `ixsystems/truecommand` image.
The PORTS entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where *port* and *sslport* are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where *hostsystemIPaddress* is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

Access the container directly via shell with `docker exec -it CONTAINER_ID /bin/bash` to make advanced configuration changes.

{{< expand "The connection cannot be established?" "v" >}}
If you cannot establish a connection to the web interface, add the container ports as an exception to the host system firewall.
{{< /expand >}}

### Adding Browser Exceptions
{{< include file="/static/includes/TCBrowserExceptions.md" >}}

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

## Update Process
To update the docker container, download the latest TrueCommand image and remove the existing TrueCommand container.
Then restart the container using the latest TrueCommand image and existing TrueCommand storage volume.

To remove the existing container, enter `docker rm TrueCmd_contained`.

Start a new container that uses the new image, but make sure to use the existing volume used for the original TrueCommand container.
For example: 
<code>
docker run --detach --name <i>container name, optional</i> -v "<i>hostdir</i>:/data" -p <i>port</i>:80 sslport <i>sslpot</i>:443 ghcr.io/ixsystems/truecommand:<i>v3.0.2</i>
</code>

### Database Migration

Database migration will be performed automatically if updating from 2.3.0, 2.3.1, 2.3.2, or 2.3.3 to any 3.0.x version. Previous versions will need to migrate to the next minor version for migration routines, i.e 2.1.x->2.2.2 and 2.2.2->2.3.3.

## Obtaining a License

TrueCommand is limited to managing a total of 50 disks across systems.
You can download a 60-day unlimited trial license from <a>https://portal.ixsystems.com</a>, provided a TrueCommand container is already running to supply the system ID, available on the **Administration** page.
Purchase additional one-year licenses from the Portal from 100 to 1000 disks.
Other terms and disk counts are by request at <a>https://portal.ixsystems.com/portal/login/index.php?type=quote#email-request</a>.
Licenses can be sent by support if purchased outside the portal, as long as a TrueCommand container is created to provide a system ID.
