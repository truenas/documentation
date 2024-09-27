&NewLine;

{{< hint type=important title="Deprecation Notice" >}}
Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS 13.0 and removed in TrueNAS 22.12 and newer versions.
Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.

{{< enterprise >}}
Beginning in CORE 13.0-U6, Enterprise customers with the S3 service running or enabled are prevented from upgrading to the next major version.

Please contact iX Support to review options for migrating to a TrueNAS release that has Minio applications available.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /enterprise >}}

{{< /hint >}}
