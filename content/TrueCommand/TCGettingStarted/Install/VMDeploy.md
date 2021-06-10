---
title: "VM Deployment"
weight: 10
---

{{< toc >}}

Deploying TrueCommand on a virtual machine (VM) requires different methods depending on what operating system you intend to use. 

You can find VM images and setup instructions on our [TrueCommand-install](https://github.com/ixsystems/truecommand-install) GitHub repository.

## Linux

{{< tabs "Deploy TrueCommand on a Linux VM" >}}
{{< tab "Debian" >}}

If you don't already have it, you can download the VM image [here](https://www.debian.org/CD/http-ftp/).

{{< hint info >}}
Ensure you have the "wget" utility installed first: `apt-get install wget`
{{< /hint >}}

Run this command (as root) from a system terminal:  
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/debian/setup.sh -O - | bash`
{{< /tab >}}
{{< tab "Alpine" >}}

If you don't already have it, you can download the VM image [here](https://alpinelinux.org/downloads/).

{{< hint info >}}
Ensure you have the "wget" utility installed first: `apk add wget`.   
Ensure that you have the "community" package repository enabled:
* Edit the */etc/apk/repositories* file as root and uncomment the community repository line.
* Run `apk update` to refresh the list of available packages.
{{< /hint >}}

Run this command (as root) from a system terminal:   
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/alpine/setup.sh -O - | sh`
{{< /tab >}}
{{< tab "Void" >}}

If you don't already have it, you can download the VM image [here](https://voidlinux.org/download/).

{{< hint info >}}
Ensure you have the "wget" utility installed first: `xbps-install -y wget`
{{< /hint >}}

Run this command (as root) from a system terminal:   
`wget https://raw.githubusercontent.com/iXsystems/truecommand-install/main/void/setup.sh -O - | bash`
{{< /tab >}}
{{< /tabs >}}

## Windows

If you don't already have it, you can download the VM image [here](https://www.microsoft.com/en-us/software-download/windows10).

1. On your Windows platform (VM or Bare-Metal) install [Docker for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/).
2. Open Windows PowerShell (**Start > Windows Power Shell > Windows Power Shell**)
3. Run the following command inside powershell to start TrueCommand:   
`docker run --pull=always --restart unless-stopped --detach -v "[hostdirectory]:/data" -p [portnumber]:80 -p [sslportnumber]:443 ixsystems/truecommand`

{{< hint info >}}
Replace *[hostdirectory]* with a path to where you want TrueCommand to store its local database. Replace *[portnumber]* and *[sslportnumber]* with the ports you wish to expose for TC access.
{{< /hint >}}

If the command was successful, you should be able to access TrueCommand on *http://localhost:80*.
