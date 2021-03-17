---
title: "Installing and Accessing TrueCommand"
weight: 2
---

{{< toc >}}

## Installing the TrueCommand Container

TrueCommand is built as a [Docker](https://www.docker.com/) container.
This has the benefit of a smaller footprint and simpler upgrades.
Use the appropriate Operating System [Docker installation instructions](https://docs.docker.com/get-docker/) and install Docker.
Make sure that the Docker service is started.

{{< hint warning >}}
Docker Desktop for Windows uses Hyper-V. This interferes with
other virtualization applications. For example, you cannot use Docker
Desktop and VMware Workstation Player simultaneously.
{{< /hint >}}

Before fetching the TrueCommand docker image, create a local directory for
the image to mount to for storage. This can be done by running
<code>mkdir <i>nameOfDirectory</i></code> where *nameOfDirectory* is the name
of choice for the new directory.

After creating the new directory, fetch and run the TrueCommand Docker image.
This is done in the Command Line Interface (CLI) by typing `docker run \--detach -v "/*hostdirectory*:/data" -p *portnumber*:80 -p *sslport*:443 ixsystems/truecommand:latest`, where *hostdirectory* is a directory on the host machine that is used as the data directory for the Docker container, *portnumber* is the desired port number to access the web interface, and *sslportnumber* is the desired port number to securely access the web interface through SSL.

Do not forget to use [Windows compatible syntax](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats) when specifying paths in the Windows file system.
For example, if the created directory for the TrueCommand image was created in the *Documents* folder in the Windows file system, the docker command would look like `docker run \--detach -v *driveLetter*:\Users\\*username*\\Documents\\*directoryName*`.
In this command, *driveLetter* is the letter associated with the drive that contains the new directory, *username* is the username of the current user, and *directoryName* is the name of the directory created for the TrueCommand image.

Although there are different ways to run a Docker container, using `-v /*hostdirectory*:/data` is required for TrueCommand to function.

{{< hint warning >}}
Do not try to use the same *hostdirectory* for two different containers!
This can result in file conflicts and database corruption.
{{< /hint >}}

To install a container with a previous release of TrueCommand, replace `latest` with the desired TrueCommand version tag.

## Accessing the TrueCommand Web Interface

After fetching the TrueCommand Docker container, enter `docker ps` to see details about running containers.

![DockerContainerList](/images/TrueCommand/DockerContainerList.png "Docker Container List")

Use the port assigned to the container to access the web interface.
The list from `docker ps` contains a *PORTS* column.
Find the port associated with the `ixsystems/truecommand:latest` *IMAGE*.
The *PORTS* entry is listed as `0.0.0.0:port->80/tcp`, `0.0.0.0:sslport->443/tcp` where `port` and `sslport` are the ports specified earlier.

To access the web interface with no encryption, enter `hostsystemIPaddress:port` in a browser address bar, where `hostsystemIPaddress` is the IP address of the host system that is running the TrueCommand Docker container.
To access the web interface with standard SSL encryption, enter `https://hostsystemIPaddress:sslport` in a browser address bar.
If a connection to the web interface cannot be established, add the container ports as an exception to the host system firewall.

### Adding Browser Security Exceptions

TrueCommand uses a [self signed certificate](https://en.wikipedia.org/wiki/Self-signed_certificate) for a secure connection.
Because of this, many Internet browsers can consider the IP address or DNS hostname untrustworthy.
In these cases, the IP address or DNS hostname must be added as an exception to the browser to access the web interface.
The process of adding an exception is shown here for two different browsers, but the procedure is similar for most browsers.

#### Firefox

Click **Advanced** to view information about the error code.

![FirefoxWarning](/images/TrueCommand/1.3/FirefoxWarning.png "Firefox Warning")

Click *Add Exception...*.
Set *Permanently store this exception* to keep the IP address or DNS hostname permanently stored in Firefox.
Click *Confirm Security Exception*.

![FirefoxExceptionAdd](/images/TrueCommand/1.3/FirefoxExceptionAdd.png "Firefox Exception Add")

#### Chrome

Click *Advanced* to view information about the error code.

Click *Proceed to {hostname} (unsafe)*.

![ChromeWarning](/images/TrueCommand/1.3/ChromeWarning.png "Chrome Warning")

## Creating the Administrator Account

When accessing the interface for the first time, or when there aren't any users in the TrueCommand database, you can log in with default credentials but will need to create an administrator account for subsequent logins.

Follow these steps to create a new admin user:

* Log in using the default username (*admin*) and password (*admin*).

![LoginAdmin](/images/TrueCommand/1.3/LoginAdmin.png "Login Admin")

* Enter a username and password.
  Read the Terms of Service, set *I have read and agree to the terms of service*, and click *SIGN UP*.

![LoginSignUp](/images/TrueCommand/1.3/LoginSignUp.png "Creating the Admin Account")


* The default login credentials are disabled and you can now log in to the TrueCommand web interface with the new administrator account credentials.
