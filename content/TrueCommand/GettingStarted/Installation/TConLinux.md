---
title: "Deploying TrueCommand on Linux"
weight: 20
---


{{< toc >}}

A [TrueCommand](https://www.truenas.com/truecommand/) Docker image can be deployed on Linux.
A Linux installation of TrueCommand needs internet access, docker to be installed, and a storage location with at least *20 GiB* of space available for the image.

## Installing the TrueCommand Docker Container

Open the [Docker Hub](https://hub.docker.com) in a browser and search for `ixsystems/truecommand`.

![DockerHubSearchResults](/images/TrueCommand/DockerHubSearchResults.png "Finding the TrueCommand Container")

![DockerHubTrueCommand](/images/TrueCommand/DockerHubTrueCommand.png "TrueCommand Container details")

Verify the pull command required and run it from a command line. Example: `docker pull ixsystems/truecommand:latest`.

## Launching the TrueCommand Docker Container

Determine the ports you will use for the container and select a storage location.  Use the `docker run` command to launch TrueCommand.  In this example, the ports are set to `80` and `443`, and the storage location is set to `/data`

```docker run --detach -v "/data:/data" -p 80:80 -p 443:443 ixsystems/truecommand:latest```

Adjust the port numbers and storage location as needed on your machine.

Once the docker container has launched, open your browser and navigate to the configured port on localhost. 

The TrueCommand login screen will appear and require yout to create the new [Administrator account](/TrueCommand/GettingStarted/CreatingAdminUser/).

If the login screen fails to appear, double-check your system networking settings, open networking ports, and if the ports in the docker run command are already in use by another application.

For more details about TrueCommand, see the [TrueCommand section](/TrueCommand/).

{{< include file="static/includes/AddingBrowserExceptions.md.part" markdown="true" >}}

{{< include file="static/includes/TCSupport.md.part" markdown="true" >}}