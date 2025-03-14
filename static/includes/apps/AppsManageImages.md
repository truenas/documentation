&NewLine;

While on the **Installed** application screen, click **Configuration** > **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new ones from this screen.

To download a custom image, click **Pull Image**, then enter a valid path and tag to the image.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

Enter the path using the format *registry*/*repository*/*image* to identify the specific image.
The default **latest** tag downloads the most recent image version.

When downloading a private image, enter user account credentials that allow access to the private registry.

To delete images, click **<span class="iconify" data-icon="mdi:garbage">Delete</span> Delete** in an image row or the **Batch Operations** section.
The Delete dialog lists the selected image(s) for deletion.

{{< trueimage src="/images/SCALE/Apps/DeleteImage.png" alt="Delete Image" id="Delete Image" >}}

An image cannot be deleted if it is associated with a running container.
Select **Confirm**, then click **Delete**.

{{< expand "What if I delete an image from a stopped app?" "v" >}}
If an image is deleted from a stopped app that is still installed, TrueNAS automatically pulls it again when the app starts.
{{< /expand >}}

**Force** allows deletion when an image has multiple tags or when a stopped container prevents its removal.
Use **Force** with caution, as it can break dependencies or leave images without defined tags.
