Containers share the host kernel and require fewer resources than VMs.
You can leave CPU and memory settings blank to allow containers access to all host resources.

* Storage Pool: Containers require a storage pool for volume creation and image storage.
  SSD drives provide optimal performance.

* CPU: No virtualization extensions required.
  Multiple containers run efficiently on fewer resources than equivalent VMs.

* Memory: More efficient than VMs with no guest OS overhead.
  Memory allocated to containers reduces available memory for TrueNAS ZFS caching.
