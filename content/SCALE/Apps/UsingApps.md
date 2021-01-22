---
title: "Using SCALE Apps"
weight: 10
---

Both pre-built official containers and custom application containers can be deployed using the *Apps* page in the Scale web interface.

<img src="/images/ScaleApps.png">
<br><br>

The UI will ask to use a storage pool for Applications.

<img src="/images/ScaleAppsChoosePool.png">
<br><br>

It is recommended to keep the container use case in mind when choosing a pool.
Be sure to select a pool that has enough space for all the application containers you intend to use.
This will create an `ix-applications` dataset on the chosen pool and use this location to store all container-related data.

Additional options for configuring general network interfaces and IP addresses for application containers are in **Apps > Settings > Advanced Settings**.

<img src="/images/ScaleAppsAdvancedSettings.png">
<br><br>

### Official Applications

Official containers are pre-configured to only require a name during deployment.

<img src="/images/ScaleAppsInstallPlex.png">
<br><br>

When the container is deployed and active, a button to open the application web interface becomes available.

<img src="/images/ScaleAppsInstalledPlexActive.png">
<br><br>

Editing a deployed official container allows adjusting the container settings.
Saving any changes will redeploy the container.

### Custom Applications

To deploy a custom application container in the Scale web interface, go to **Apps** and click *Launch Docker Image*.

<img src="/images/ScaleAppsLaunchDockerImage.png">
<br><br>

There a numerous options for custom containers that are broken down into smaller sections.
These options are derived from the [Kubernetes container options](https://kubernetes.io/docs/setup/).

#### Image and Policies

You will need to name the custom application and provide the online storage location (repository) that will be used to download the container.
The remaining options allow setting the image tag, defining when the image is pulled from the remote repository, how the container is updated, and defining when a container will automatically restart.

#### Container Settings

Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image.

You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Some Docker images can require additional environment variables.
Be sure to check the documentation for the image you're trying to deploy and add any required variables here.

#### Networking

To use the system IP address for the container, set *Host Networking*.
The container will not be given a separate IP address and the container port number will be appended to the end of the system IP address.
See the [Docker documentation](https://docs.docker.com/network/host/) for more details.

If needed, additional network interfaces can be created for the container.
Each new interface can be given static IP addresses and routes.

By default, the DNS settings from the host system are used for the container.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.

#### Port Forwarding List

Choose the protocol and enter port numbers for both the container and node.
Multiple port forwards can be defined.
The node port number must be over *9000*.
Make sure no other containers or system services are using the same port number.

#### Host Path Volumes

Scale storage locations can be mounted inside the container.
To mount Scale storage, define the path to the system storage and the container internal path for the system storage location to appear.
You can also mount the storage as read only to prevent the container from being used to change any stored data.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).

#### Volumes

Additional Persistent Volumes (PVs) can be created for storage within the container.
These consume space from the pool that was chosen for Application management.
You will need to name each new dataset and define a path where that dataset appears inside the container.

To view created container datasets, go to **Storage** and expand the pool used for applications.
Expand `/ix-applications/releases/<ContainerName>/volumes/ix-volumes/`.

### Creating the Application Container

Saving the official or custom container will add a new entry to *Installed Applications*.
The container will then enter a deploy status as it fetches the image from the remote repository and configures it.
When deployment is complete, the container moves to an active status and can begin to be used.

<img src="/images/ScaleAppsInstalledPlexActive.png">
<br><br>

### Accessing the Shell in an Active Container

To access the shell in an active container, you will need to first identify the namespace and pod for the container.
In the Scale UI, go to **System Settings > Shell** to begin entering commands:

1. View container namespaces: `k3s kubectl get namespaces`.
2. View pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
3. Access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.

#### Additional Container Commands

* View details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
* Get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.