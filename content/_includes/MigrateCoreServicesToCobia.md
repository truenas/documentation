&NewLine;

{{< hint type=important title="SCALE Service Deprecations and Removals" >}}
SCALE **22.12 (Bluefin) deprecates** and **23.10 (Cobia) removes** the built-in DDNS, OpenVPN server and client, rsync, S3, and TFTP services.
The WebDAV service and share feature are also deprecated in Bluefin and removed in Cobia.
New applications are available in Bluefin to serve as replacements for the functions these services provided.

To migrate from CORE to SCALE, first upgrade to and migrate from the latest CORE release to the latest release of SCALE 22.12 (Bluefin).
While running SCALE Bluefin, take the necessary steps to transition from these deprecated services to the applications that replace them, then upgrade to SCALE 23.10 (Cobia) or later.
See [SCALE Bluefin Deprecated Services](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/) for more information.
{{< /hint >}}
