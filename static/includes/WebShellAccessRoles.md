&NewLine;

Accessing a web shell requires the **Web Shell Access** privilege.
Shells for apps, containers, and VMs also require the write role for that resource type.
The **Full Admin** role includes all these write roles.

{{< truetable >}}
| Shell | Required Privilege and Role |
|-------|------------------------------|
| **System > Shell** (host system) | **Web Shell Access** privilege only |
| **VM Serial Shell** | **Web Shell Access** privilege plus the VM write role (`VM_WRITE`) |
| **Container Shell** | **Web Shell Access** privilege plus the container write role (`CONTAINER_WRITE`) |
| **Container Shell** (Apps) | **Web Shell Access** privilege plus the apps write role (`APPS_WRITE`) |
{{< /truetable >}}

When authorized, shell commands run as the root user.
