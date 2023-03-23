---
---

For best results, we recommend executing this procedure on both controllers at the same time.
You can simultaneously install using two USB flash drives inserted into the USB port for each controller (1 and 2) or by establishing an IPMI connection with each controller in separate browser sessions.

Alternately, install and configure controller 1 while keeping controller 2 powered off.
When controller 1 is completely configured, power on controller 2 to install TrueNAS and reboot the controller.
When controller 2 boots after installing, sync the system configuration from controller 1 to controller 2.