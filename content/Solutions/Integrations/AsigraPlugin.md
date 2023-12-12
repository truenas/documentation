---
title: "Asigra Plugin"
description: "Guide for using Asigra with TrueNAS CORE."
weight: 10
aliases:
  - /core/solutions/integrations/asigraplugin/
---

[Asigra](https://www.asigra.com/) provides a TrueNAS plugin to simplify cloud storage backups with their service.
The Asigra plugin connects TrueNAS to a third-party service and is subject to licensing.
TrueNAS must have a public static IP address for Asigra services to function.
Please read the [Asigra Software License Agreement](https://www.asigra.com/legal/software-license-agreement) before using this plugin.

Follow the instructions in the CORE plugins section to [install the Asigra plugin]({{< relref "CORE/CORETutorials/JailsPluginsVMs/Plugins/_index.md" >}}).
Asigra also provides this installation guide for the [Asigra Backup Plugin for TrueNAS CORE](https://library.asigra.com/asigra-truenas-backup/guide-asigra-plug-in-for-truenas-core).

To begin using Asigra services after installing the plugin, expand the plugin options and click **Register**.
A new browser tab opens to [register a user with Asigra](https://licenseportal.asigra.com/licenseportal/user-registration.do).

Refer to the Asigra documentation for details about using the Asigra platform:

* [DS-Operator Management Guide](https://s3.amazonaws.com/asigra-documentation/Help/v14.1/DS-System%20Help/index.html): Using the DS-Operator interface to manage the plugin DS-System service.
  Click **Management** in the plugin options to open the DS-Operator interface.
* [DS-Client Installation Guide](https://s3.amazonaws.com/asigra-documentation/Guides/Cloud%20Backup/v14.1/Client_Software_Installation_Guide.pdf): How to install the DS-Client system.
  DS-Client aggregates backup content from endpoints and transmits it to the DS-System service.
* [DS-Client Management Guide](https://s3.amazonaws.com/asigra-documentation/Help/v14.1/DS-Client%20Help/index.html): Managing the DS-Client system after it has been successfully installed at one or more locations.
