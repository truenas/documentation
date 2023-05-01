---
title: "Auth"
geekdocCollapseSection: true
description: "This article introduces authentication functions in the SCALE CLI." 
weight: 15
draft: true
---

{{< toc >}}


{{< hint type=tip >}}
The SCALE CLI guide is a work in progress!
New namespace and command documentation is continually added and maintained, so check back here often to see what is new!
{{< /hint >}}

The **Auth** namespace provides access to authentication methods, organized into four child namespaces and commands based on functions found in the SCALE API documentation and web UI.

## Auth Commands
The **auth** namespace includes five commands that verify usernames and passwords, generate authentication tokens, return information about the current logged-in user, and whether two-factor authentication for the user login is required.

You can enter commands from the main cli prompt or from the **auth** namespace prompt.
### Check_User Command

The **check_user** and **check_password** commands verify the logged-in credentials. 

{{< expand "Verify Username and Password" "v" >}}
The `check_user` command has two required options, `username` and `password` that must be included in the command string. 

From the CLI prompt, enter:

<code>auth check_user username=<i>name</i> password=<i>password</i></code>

From the **auth** prompt, enter:

<code>check_user username=<i>name</i> password=<i>password</i></code>

Command returns **true** if the values entered for the username and password are correct.
{{< /expand >}}

### Check_Password Command

The **check_password** and **check_user** commands verify the logged-in user credentials.

{{< expand "Verify Username and Password" "v" >}}
The `check_user` command has two required options, `username` and `password` that must be included in the command string. 

From the CLI prompt, enter:

<code>auth check_password username=<i>name</i> password=<i>password</i></code>

From the **auth** prompt, enter:

<code>check_password username=<i>name</i> password=<i>password</i></code>

Command returns **true** if the values entered for the username and password are correct.
{{< /expand >}}
### Generate_Token Command
The **generate_token** command generates an authentication token to use for access. The setting determines when the current session expires.
{{< expand "Generate Access Token" "v" >}}
The `generate_token` command has two required options, `username` and `password` that must be included in the command string. 

{{< /expand >}}
### Me Command


{{< expand "Generate Access Token" "v" >}}
The `me` command   that must be included in the command string. 

{{< /expand >}}
### Two-Factor_Auth Command


{{< expand "Verify Two Factor Authentication Setting" "v" >}}
The `two-factor_Auth` command   options,  that must be included in the command string. 

{{< /expand >}}

## Auth Namespace Articles

{{< children depth="2" description="true" >}}
