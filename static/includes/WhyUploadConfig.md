&NewLine;

{{< expand "Do I need to upload a config file?" "v" >}}
Uploading a config file after a TrueNAS migration or fresh install makes it easy to migrate most system settings with one click.  
However, you can choose to manually recreate the previous configuration if desired or if some part of the previous configuration causes conflicts with a later TrueNAS version.

If you choose to manually recreate settings, carefully document your original configuration and ensure each setting is recreated exactly.
For example, re-creating a user account named *bob* after migration does not restore that user's access to existing datasets unless the new account uses the same UID or you manually update the dataset ACLs to grant access.  
{{< /expand >}}
