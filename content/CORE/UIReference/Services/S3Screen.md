---
title: "S3 Screen"
weight: 100
---

Use the **S3** screen to configure your TrueNAS S3 service.

![ServicesS3Options](/images/CORE/12.0/ServicesS3Options.png "S3 Service Options")

The **SAVE** button activates after entering the required settings.

**CANCEL** closes the **S3** screen without saving changes and displays the **Services** screen.

{{< include file="/content/_includes/ServicesS3Fields.md" type="page" >}}

{{< hint warning >}}
MinIO deprecated Access key and Secret key replacing them respectively with the MINIO_ROOT USER and MINIO_ROOT_PASSWORD arguments and their values. For the ROOT_USER value, use a name up to 20 characters. For the ROOT_PASSWORD, use a string of 8 to 40 randomized characters. MinIO recommends using a long password string of unique random characters.
{{< /hint >}}

## Additional Information

[S3 for MinIO]({{< relref "/CORE/CORETutorials/Services/S3forMinIO.md" >}})

[Configuring S3]({{< relref "/CORE/CORETutorials/Services/ConfiguringS3.md" >}})

