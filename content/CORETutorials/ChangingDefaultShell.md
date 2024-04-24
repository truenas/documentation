---
title: "Changing the Default Shell"
description: "Describes how to change the default shell on TrueNAS CORE."
weight: 30
tags:
- shell
- users
---

The default shell for an account is the environment that user accesses in a local or SSH session.
The default shell for a new installation is `zsh`.

You can change the default shell in **Accounts > Users**.
1. Click <i class="fa fa-chevron-right" aria-hidden="true"></i> for the root user and click **Edit**. 

   ![AccountsUsersEditRootShell](/images/CORE/Accounts/AccountsUsersEditRootShell.png "Shell Options")

2. Choose the desired shell from the **Shell** dropdown list and click **SAVE**.
   **Shell** options are:

   {{< include file="archive/COREshellOptions.md" >}}
