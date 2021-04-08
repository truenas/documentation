---
title: "Adding Users"
weight: 50
---

{{< toc >}}

TrueCommand has a robust user management system designed to allow TrueCommand administrators to personalize the TrueCommand experience for each user account.
You can create user accounts in the TrueCommand interface. Alternatively, LDAP can automatically create new user accounts when someone logs into TrueCommand with their LDAP credentials.

User accounts also organize into "Teams" for simultaneous management of large numbers or related user accounts.

## Adding Local User Accounts

{{< include file="static/includes/TrueCommand/2.0/AddingLocalUserAccounts.md.part" markdown="true" >}}

## Using LDAP to Add User Accounts

{{< include file="static/includes/TrueCommandLDAP.md.part" markdown="true" >}}

## Configuring User Accounts

{{< include file="static/includes/TrueCommand/2.0/ConfiguringlUserAccounts.md.part" markdown="true" >}}

### User Details

{{< include file="static/includes/TrueCommand/2.0/UserDetailsAccounts.md.part" markdown="true" >}}

### Joined Teams

{{< include file="static/includes/TrueCommand/2.0/JoinedTeams.md.part" markdown="true" >}}

### System Permissions

{{< include file="static/includes/TrueCommand/2.0/UsersSystemPermissions.md.part" markdown="true" >}}

## Resetting a User Password from the Command Line

The Docker version of TrueCommand allows you to reset user passwords from the command line.
Open the shell on the system running the TrueCommand Container and use the following command, replacing the values in brackets with their appropriate values. 

```
docker exec -it [docker instance ID] resetpw [username]
```

## Deleting User Accounts

{{< include file="static/includes/TrueCommand/2.0/DeletingUserAccounts.md.part" markdown="true" >}}



