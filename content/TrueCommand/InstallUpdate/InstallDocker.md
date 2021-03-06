---
title: "Docker"
weight: 15
---

{{< toc >}}

TrueCommand is built as a [Docker](https://www.docker.com/) container.
This has the benefit of a smaller footprint and simpler upgrades.
Use the appropriate Operating System [Docker installation instructions](https://docs.docker.com/get-docker/) and install Docker.
Make sure that the Docker service is started.

## Installing the TrueCommand Container

{{< hint warning >}}
Docker Desktop for Windows uses Hyper-V.
This interferes with other virtualization applications.
For example, Docker Desktop and VMware Workstation Player cannot simultaneously run.
{{< /hint >}}

Before fetching the TrueCommand docker image, create a local directory.
Enter `mkdir {DIRECTORY}`, where *{DIRECTORY}* is the new name.

After creating the new directory, fetch and run the TrueCommand Docker image.
Open a Command Line Interface (CLI) and enter `docker run \--detach -v "/{HOSTDIR}:/data" -p {PORT}:80 -p
{SSL}:443 ixsystems/truecommand:latest`.
*{HOSTDIR}* is a directory on the host machine for Docker container data, *{PORT}* is the TrueCommand web interface port number, and *{SSL}* port number for secure web interface access.

To install the container with an earlier TrueCommand release, replace `latest` with the desired TrueCommand version tag:
```
docker run \--detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ixsystems/truecommand:1.3.2
```

{{< hint info >}}
Use [Windows compatible syntax](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats) when specifying paths in the Windows file system.
For example, if the created directory for the TrueCommand image was created in the Windows <file>Documents</file> folder, the `docker` command would be:
`docker run \--detach -v C:\Users\\Example\\Documents\\DockerDir`.
In this command *C* is the drive letter, *Example* is the current user name, and *DockerDir* is the TrueCommand image directory.
{{< /hint >}}

Although there are different ways to run a Docker container, `-v /*hostdirectory*:/data` is required for TrueCommand to function.

{{< hint warning >}}
Do not try to use the same `hostdirectory` for two different containers!
This results in file conflicts and database corruption.
{{< /hint >}}

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Finding the TrueCommand Container")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a *PORTS* column.
Find the port associated with the `ixsystems/truecommand:latest` *IMAGE*.
The *PORTS* entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where `port` and `sslport` are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where `hostsystemIPaddress` is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.

{{< expand "The connection can't be established?" "v" >}}
When a connection to the web interface cannot be established, add the container ports as an exception to the host system firewall.
{{< /expand >}}

### Adding Browser Security Exceptions

TrueCommand uses a [self signed certificate](https://tools.ietf.org/html/rfc8705) for a secure connection.
Because of this, many Internet browsers consider the IP address or DNS hostname untrustworthy.
In these cases, the IP address or DNS hostname must be added as an exception to the browser to access the web interface.
The process of adding an exception is shown here for two different browsers, but the procedure is similar for most browsers.

{{< tabs "Browser Security Exceptions" >}}
{{< tab "Chrome" >}}
Click *Advanced* to view information about the error code.
Click *Proceed to {hostname} (unsafe)*.

![ChromeWarning](/images/TrueCommand/2.0/ChromeWarning.png "Chrome Warning")
{{< /tab >}}
{{< tab "Firefox" >}}
Click *Advanced* to view information about the error code.

![FirefoxWarning](/images/TrueCommand/2.0/FirefoxWarning.png "Firefox Warning")

Click *Add Exception...*.
Set *Permanently store this exception* to keep the IP address or DNS hostname permanently stored in Firefox.
Click *Confirm Security Exception*.

![FirefoxExceptionAdd](/images/TrueCommand/2.0/FirefoxExceptionAdd.png "Adding a security exception")
{{< /tab >}}
{{< /tabs >}}

{{< include file="static/includes/TrueCommandFirstTimeLogin.md.part" markdown="true" >}}
