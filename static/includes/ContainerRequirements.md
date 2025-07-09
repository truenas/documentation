Containers are lightweight and share the host kernel, requiring fewer resources than virtual machines.
However, proper resource allocation ensures optimal performance and system stability.

You can leave CPU and memory settings blank to allow containers access to all available host resources, or configure specific limits based on your needs.
Key considerations for container deployment:

* Storage Pool: Containers require a storage pool for volume creation and image storage.
  SSD drives provide optimal performance.

* CPU: No virtualization extensions required.
  Multiple containers run efficiently on fewer resources than equivalent VMs.

* Memory: More efficient than VMs with no guest OS overhead.
  Memory allocated to containers reduces available memory for TrueNAS ZFS caching.
