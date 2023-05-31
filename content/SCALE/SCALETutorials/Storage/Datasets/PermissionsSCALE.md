---
title: "Setting Up Permissions"
description: "Provides instructions on viewing and editing ACL permissions, using the ACL editor screens, and general information on ACLs."
weight: 55
aliases:
 - /scale/scaleuireference/storage/pools/permissionsscale
 - /scale/scaletutorials/storage/pools/permissionsscale
tags:
 - scaleacls
 - scaledatasets
 - scalepools
 - scalestorage
---

{{< toc >}}

TrueNAS SCALE provides basic permissions settings and an Access Control List (ACL) editor to define dataset permissions.
ACL permissions control the actions users can perform on dataset contents.

{{< hint type=note >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset and applied to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.
{{< /hint >}}
## ACL Types in SCALE

TrueNAS SCALE offers two ACL types: POSIX (the SCALE default) and NFSv4. 
For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "ACLPrimer.md" >}}).

## Viewing Permissions

Basic ACL permissions are viewable and configurable in the **Datasets** screen. Select a dataset to view its permissions in the **Permissions** widget.

![ViewRootDatasetPermissionsWidget](/images/SCALE/22.12/ViewRootDatasetPermissionsWidget.png "View Root Dataset Permissions")

## Editing ACL Permissions

{{< hint type=tip >}}
You can view permissions for any dataset, but the edit option only displays on the **Permissions** widget for non-root datasets.

Configuring advanced permissions overrides basic permissions configured on the add and edit dataset screens.
{{< /hint >}}

Select a non-root dataset, then click **Edit** in the **Permissions** widget.

![ViewDatasetPermissionsWidget](/images/SCALE/22.12/ViewDatasetPermissionsWidget.png "View Child Dataset Permissions")

![EditPermissionsUnixPermissionsEditor](/images/SCALE/22.12/EditPermissionsUnixPermissionsEditor.png "Edit Permissions Unix Permissions Editor")

Enter or select the user from the dropdown list, set the read/write/execute permissions.
The options include users created manually or imported from a directory service. Enable **Apply User** to confirm changes. 
To prevent errors, TrueNAS only submits changes when selected.

{{< hint type=important >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results in lost access to the path.
{{< /hint >}}

Next, enter or select the group from the dropdown list, set the read/write/execute permissions.
The options include groups created manually or imported from a directory service. Enable **Apply Group** to confirm changes. 
To prevent errors, TrueNAS only submits changes when selected.

If you want to apply these settings to all child datasets, select **Apply permissions recursively**. 

Click **Save** if you do not want to use an ACL preset.

### Configuring an ACL Preset (NFSv4 ACL)
{{< hint type=important >}}
Warning: Changing the ACL type affects how TrueNAS writes and reads on-disk ZFS ACL.

When the ACL type changes from POSIX to NFSv4, internal ZFS ACLs do not migrate by default, and access ACLs encoded in posix1e extended attributes convert to native ZFS ACLs. 

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to posix1e extended attributes, but ZFS will use the native ACL for access checks.    

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.   

Setting new ACLs recursively is destructive. We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}

An ACL preset loads NFS4 pre-configured permissions to match general permissions situations.

From the **Unix Permissions Editor** configuration screen, click **Set ACL** to configure advanced NFS4 permissions. The If you want to use an ACL preset, click **Set ACL**. The **Edit ACL** screen displays with the **Select a preset ACL** dialog as the first step.

Click the **Select a present ACL** radio button to use a pre-configured set of permissions, and then select the preset you want to use from the **Default ACL Options** dropdown list, or click **Create a custom ACL** to configure your own set of permissions. 
Click **Continue**.

![NFS4SelectAPresetACLWindow](/images/SCALE/22.12/NFS4SelectAPresetACLWindow.png "NFS4 Select a preset ACL")

Each default preset loads different permissions to the **Edit ACL** screen. The **Create a custom preset** option opens the **Edit ACL** screen with no default permission settings.

![CreateCustomACL](/images/SCALE/22.12/CreateCustomACL.png "Edit ACL Create Custom")

First, select or type the user name in **Owner**. The owner controls which TrueNAS user and group has full control of the dataset.

Next, select or type the group name in **Owner Group**.

Select the **Who** ACE value from the dropdown list and then select the **Permissions**. 
If you select **User** or **Group**, choose a name from the **User** or **Group** field. 
See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html).
Whatever you select in **Who** highlights the **Access Control List** entry on the left side of the screen.

Select **Flags** to specify how this ACE applies to newly created directories and files within the dataset. 
Basic flags enable or disable ACE inheritance. 
Advanced flags allow further control of how the ACE applies to files and directories in the dataset. 

If you want to apply this preset to all child datasets select **Apply permissions recursively**.

To add another item to your ACL, click **Add Item**. To display the ACL presets window, click **Use Preset**.

Click **Save Access Control List** when you finish configuring settings for the user or group in the **Who** field.

{{< expand "ACL Details from Shell" "v" >}}
To view ACL information from the console, go to **System Settings > Shell** and enter:

```shell
getfacl /mnt/path/to/dataset
```
{{< /expand >}}

{{< taglist tag="scaleacls" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}