&NewLine;

The **Labels Configuration** settings allow users to add metadata to containers using Docker object [labels](https://docs.docker.com/engine/manage-resources/labels/). Labels store key-value metadata to organize and automate Docker resources.

Click **Add** to display label configuration fields.

{{< trueimage src="/images/SCALE/Apps/InstallAppLabels.png" alt="Labels Configuration Settings" id="Labels Configuration Settings" >}}

Use **Key** to define the identifier (e.g., *com.example.owner*). Use **Value** to enter the associated data (e.g., *team-a*).

Select the target container from the **Containers** dropdown. Apps with multiple containers list each container here.

Click **Add** again to configure additional labels.

### Tips for Labels:
- Docker [recommends](https://docs.docker.com/reference/compose-file/services/#labels) using reverse-DNS notation to prevent conflicts with other objects.
- Apply a consistent naming convention, e.g., *com.example.env=production*.
- Group related resources using labels, e.g., *com.example.role=db*.
- Combine labels for more control, e.g., *com.example.env=prod* and *com.example.tier=frontend* for service differentiation.
