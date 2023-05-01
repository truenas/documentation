---
title: "FNC is Changing to Wide Porting"
weight: 20
---

*August 19, 2020*

For many years, FreeNAS Certified (FNC) systems have often been built with multipathing enabled.
This will be changed to wide porting on future builds. Existing systems and users will not be impacted.

[Multipathing](https://www.freebsd.org/cgi/man.cgi?query=gmultipath) is a technique where the same dual port SAS drive can be accessed through two different paths that can include different SAS HBAs and different SAS expanders.
The potential advantage is that a SAS HBA or expander may fail and the system still provides a valid path to the drive.
Within the OS, multipathing requires special on-disk formats and requires the OS to track these paths and try alternate paths when anything goes wrong.
If a drive does not respond to an I/O command, the same command may be tried on the alternate path to the second port of the drive.

Wide porting is a simpler technique that allows a single SAS HBA to connect with multiple ports to the same SAS expander using the same logical address.
This technique provides similar performance to multipathing, but is simpler.
The OS does not require a special on-disk format and there is no attempt to connect to both ports of the same drive.

After reviewing our reliability data, no significant benefit was found to using multipathing within the FNC line of products.
Wide porting performs equally well and, in some specific cases, even better.
If higher availability is needed, a dual controller system like the [M-Series]({{< relref "MSeriesBSG.md" >}}) should be used.

There are several reasons to discontinue the use of multipathing on the FNC line:

* Multipathing adds complexity to simple systems.
  Complexity confuses system admins and can cause human errors.

* Multipathing requires on-disk formatting.
  This complicates these drives and pools being portable to other systems that don’t use multipathing, like the TrueNAS M-Series.

* In rare cases, multipathing can mishandle drive issues.
  When a drive does not respond to an I/O command, the system waits for a timeout then tries the other path.
  If the drive responds on the other path, the system will assume the drive is healthy, but the drive could actually be failing and at least is responding very slowly.

New FNC systems will be shipping with wide porting enabled.
The change to wide porting is a simple cable change on a new system.
On an existing system, we recommend keeping the multipath functional unless it’s time to completely recreate the pool and reformat the drives.

The existing multipathing software within TrueNAS CORE (and FreeBSD) is unchanged and will continue to be supported.

If any existing FNC customers have questions about this issue, please discuss in the [forums](https://www.ixsystems.com/community/) or contact us.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /expand >}}
