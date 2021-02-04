---
title: "External Systems"
draft: false
pre: "<i class='fas fa-chart-line'></i>	"
geekdocCollapseSection: true
---

## API Class: external
Class of API calls that provide access for external systems to submit information to TrueCommand for storage and/or analysis.

These API calls are **only** available via HTTP requests (PUT or POST) with a valid authorization token that is associated with a specific system. These tokens may be used as the "password" within a basic authentication request (username is ignored by TrueCommand, only the token is used).

## Authentication Token Management References
* {{< api-link "servers/list_tokens" >}}
* {{< api-link "servers/add_tokens" >}}
* {{< api-link "servers/remove_tokens" >}}
