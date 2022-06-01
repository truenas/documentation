---
title: "Configuring S3"
weight: 100
aliases: /core/services/s3/
---

{{< toc >}}

This tutorial describes how to start a local S3 service on TrueNAS and connect to it from a networked client system with the MinIO Browser, s3cmd, and S3 Browser.

{{< expand "Background" "v" >}}
S3 is an object storage protocol used by many major cloud providers including Amazon Web Services™.
On TrueNAS, the service is another way to store files, you can view with a web browser.
Because S3 is the de facto standard for cloud-based storage, setting up an S3 service allows organizations or online application developers to use TrueNAS to replace or archive expensive cloud storage.
{{< /expand >}}

{{< hint warning >}}
Having large numbers of files (>100K for instance) in a single bucket with no sub-directories can harm performance and cause stability issues.
{{< /hint >}}

## Setting up the S3 service

Go to the **Services** page and find the **S3** on the list.

![ServicesS3Enable](/images/CORE/12.0/ServicesS3Enable.png "Services S3 Enable")

Click the toggle to stop the service if it is running.
Select **Start Automatically** to start the service when TrueNAS boots.

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesS3Options](/images/CORE/12.0/ServicesS3Options.png "S3 Service Options")

See [S3 screen]({{< relref "/CORE/UIReference/Services/S3Screen.md" >}}) for information on settings.

The IP address **0.0.0.0** allows the service to listen on any IPv4 address.
**::** allows the same for any IPv6 address.
Select the TrueNAS IP address to constrain it to a specific network.

Select a clean dataset. 
If there is no dataset, click **CANCEL** and then go to **Storage > Pools** and clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> > **Add Dataset**.
Files are managed by MinIO as objects, and cannot be mixed with other dataset files.

Configure the rest of the options as needed in your environment.
Make sure to start the service after saving any changes.

## Additional Information

[S3 screen]({{< relref "/CORE/UIReference/Services/S3Screen.md" >}}) 

[S3 for MinIO]({{< relref "/CORE/CORETutorials/Services/S3forMinIO.md" >}})
