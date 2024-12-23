&NewLine;

The **Labels Configuration** settings allow users to configure Docker object [labels](https://docs.docker.com/engine/manage-resources/labels/) to add metadata to containers.
Docker object labels attach key-value metadata to various Docker objects, such as containers, images, volumes, and networks.
Labels are useful for organization, automation, and providing additional context for Docker resources.
They can store information such as environment details, ownership, service role, or custom tags for automation tools.

Click **Add** to display a set of label configuration fields.

{{< trueimage src="/images/SCALE/Apps/InstallAppLabels.png" alt="Labels Configuration Settings" id="Labels Configuration Settings" >}}

Use **Key** to define the identifier that categorizes and filters resources, for example *com.example.owner*.
Use **Value** to enter the associated data for the container, for example *team-a*.

Select the target container from the **Containers** dropdown list to apply the label(s).
Apps with multiple containers list each container as an option on the dropdown.

Click **Add** again to configure additional labels.

Tips for Labels:

* Docker [recommends](https://docs.docker.com/reference/compose-file/services/#labels) using reverse-DNS notation to prevent conflicts with other objects.
* Use a consistent naming convention for labels applied across all containers, for example, *com.example.owner=team-a*, *com.example.owner=team-b*, *com.example.env=production*, *com.example.env=testing*.
* Use in groupings, for example, when applying configuration changes where labels define or group related database resources (*com.example.role=db*).
* Use reverse-DNS notation to prevent conflicts with other objects, as [recommended by Docker](https://docs.docker.com/reference/compose-file/services/#labels).
* Use a consistent naming convention for labels applied across all containers, for example, *com.example.owner=team-a*, *com.example.owner=team-b*, *com.example.env=production*, *com.example.env=testing*.
* Use in groupings, for example, when applying configuration changes where labels define or group related database resources (*com.example.role=db*).
* Combine labels for more granular control, for example, using *com.example.env=prod* and *com.example.tier=frontend* to distinguish frontend from backend services in production environments.