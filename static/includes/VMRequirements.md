VMs require dedicated resources and proper planning to avoid impacting host system performance.

* Storage Pool: VMs require a storage pool for zvol creation and disk image storage.
  SSD drives provide optimal performance.

* CPU: VMs require Intel VT-x or AMD-V extensions.
  Users cannot create VMs unless the host system supports these features.
  Enable virtualization in BIOS under Advanced > CPU Configuration if needed.
  More cores improve performance.

* Memory: Memory allocated to VMs reduces memory available for TrueNAS ZFS caching.
  Plan for at least 4GB per VM plus host system requirements.
