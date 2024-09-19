&NewLine;

Following the upstream FreeBSD 13.2 end-of-life, announced July 1, 2024, plugins and jails in TrueNAS 13.0 are expected to become nonfunctional and unupgradable.

[TrueNAS Community](https://forums.truenas.com/) members who want to deploy jails in a FreeBSD-based TrueNAS release can update to TrueNAS 13.3.
Virtualization features in 13.3 are untested and provided without support.
Note that breaking upstream changes or end-of-life retirement in the FreeBSD OS or management software, such as pkg or iocage, can occur at any time, resulting in 13.3 jails becoming nonfunctional.

Enterprise users or community users with a critical need to use containers or virtualization solutions in production should migrate to the tested and supported virtualization features available in [TrueNAS SCALE](https://www.truenas.com/download-truenas-scale/).
[TrueNAS Enterprise customers](https://www.truenas.com/truenas-enterprise/) can contact iXsystems to schedule a TrueNAS SCALE deployment.
See [CORE to SCALE Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/) for more information.
