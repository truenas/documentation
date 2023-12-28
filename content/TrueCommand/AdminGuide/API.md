---
title: "API Interface"
description: "Guide to access the built-in TrueCommand API Interface and link to a static API documentation copy."
weight: "90"
geekdocCollapseSection: true
aliases:
  - /truecommand/tc_api/
  - /truecommand/api/
  - /truecommand/userguide/api/
related: false
---

TrueCommand provides an Application Program Interface (API) screen with links to embedded API documentation, system logs, and a request form for sending and receiving API calls.

{{< trueimage src="/images/TrueCommand/APIInterface.png" alt="APIInterface" id="API Interface Screen" >}}

## API documentation

API documentation built with the TrueCommand version is available from the web interface by opening the admin menu and clicking **API**.
Alternately, copy the TrueCommand web interface URL to a new browser tab and append `/api/swagger`.

A static build of this version's API documentation is also provided [here](/api/tc_rest_api.html).

## System Logs

Click <span class="iconify" data-icon="mdi:file-document-outline"></span> **UI LOG** to open a sidebar that shows messages recorded by the TrueCommand user interface.
Click <span class="iconify" data-icon="mdi:download"></span> to download a local copy of the UI log.

Click <span class="iconify" data-icon="mdi:file-document-outline"></span> **MIDDLEWARE LOG** to open a sidebar that shows informational and alert messages recorded by the TrueCommand middleware.
Click <span class="iconify" data-icon="mdi:download"></span> to download a local copy of the middleware log.

## API Request Form

Interact with the TrueCommand API using this form.
To find the different calls and parameters, refer to the embedded API documentation.

Enter a **Name** in the form.
This must be path to the desired TrueCommand API call.
The form automatically adds a **/** character in front of the entered **Name**.
Example: {{< cli >}}alert-plugin/list {{< /cli >}}

Enter any additional parameters in a standardized JSON format.
This simple example shows deleting an TrueCommand user account:

{{< trueimage src="/images/TrueCommand/APICallUserRemove.png" alt="APICallUserRemove" id="Example API Request to Remove a TrueCommand User" >}}
