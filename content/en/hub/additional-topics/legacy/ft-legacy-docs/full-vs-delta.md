---
title: "Updating using Full Package vs Delta Package"
description: "Updating using Full Package vs Delta Package"
---


## Update Using a Full Package Instead of the Default Delta Package

**Description**

The FreeNAS and TrueNAS updater defaults to delta packages for updates. During an update, only files that have changed in the base operating system since the previous update are downloaded.
Delta update packages are generally preferred over full update packages, providing a faster update and taking less bandwidth. By contrast, a full update package downloads all of the files included in the base system, even if those files have not changed.
While the full package might require more time to install, there are some rare cases where it is necessary, such as when a patch has been applied as a temporary fix to a local system. A patch is a piece of software that is used to fix a bug within the main codebase. While software patches are often used to fix bugs, they can also repair security issues or add new features.

**ISSUE**

Delta packages do not consider temporary or testing patches on the client system. With delta updates, the updater cannot return the system to a standard configuration by overwriting local changes. To remove local customizations, add a flag to the updater command to instead download and apply the full update package.

**FIX**

Click the Shell icon in the menu tree of the web interface.

<img src="/images/TN_shell_view.png">
<br><br>

Enter this command in the Shell console:

`freenas-update -C /tmp/update-$$ –no-delta –reboot update`

The updater will now download the full package, which contains all of the files from the latest software release. Once the the full package downloads, the system will reboot with the standard configuration.








