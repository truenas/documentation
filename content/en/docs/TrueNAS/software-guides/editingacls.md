---
title: "Managing Access Control Lists"
linkTitle: "Managing Access Control Lists"
description: "How to open an Access Control List (ACL) and add or remove Access Control Entries (ACEs)"
---

# Process Summary

* Access Control List (ACL) Management
  * Account permissions associated with a dataset
  * Applied to directories or files within that dataset.
  * Allows or restricts user actions taken on dataset contents.
* New datasets/files/directories (**Storage > Pools**)
  * ACL for a new file or directory is typically inherited from the parent.
  * SMB optimized datasets can restrict how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs.
    * Passthrough only updates ACL entries that are related to the file or directory mode.
    * Restricted does not allow chmod to make changes to files or directories with a non-trivial ACL.
      * ACL is trivial if it can be fully expressed as a file mode without losing any access rules.
      * Best suited for SMB sharing.
      * Can require additional tuning. Example: configuring rsync with a Restricted dataset could require adding *--no-perms* as an Extra Option for the task.
    * See [ZFS](https://www.freebsd.org/cgi/man.cgi?query=zfs) *aclmode* property
* Moving a file typically preserves the ACL
  * Activating the SMB winmsa module changes this behavior to have the file inherit its ACL from the destination directory.
* Modifying an ACL
  * Add or remove Access Control Entries (ACEs)
    * One ACE is required in an ACL
  * **Storage > Pools > Pool Options > Edit ACL**
    * Root dataset ACLs cannot be edited.
    * Permissions editor is disabled when the dataset has a complex ACL.
    * Choose the User and Group that own the dataset.
      * Requires that the User and Group have been created (**Accounts > Users** or **Accounts > Groups**).
    * Choose a Default ACL Option to apply various industry-standard ACLs to the dataset.
    * Adding an ACL item (ACE) allows configuring a specific permission (or restriction)
      * Basic permissions are pre-defined groupings of advanced permissions
      * Advanced permissions are granular and must be carefully chosen to create the desired permission functionality
    * You can also define how the ACE is applied to child directories/files/datasets with Inheritance Flags.

# Managing ACLs

Detailed article goes here.