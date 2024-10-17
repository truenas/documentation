&NewLine;

{{< hint type="info" title="REST API Deprecation Notice" >}}
The TrueNAS REST API is being deprecated in Release 25.04 and replaced by the [TrueNAS API Client](https://github.com/truenas/api_client) and [TrueNAS Golang API Client](https://github.com/truenas/api_client_golang).

These new API Clients are not the deprecated TrueNAS CLI.
The API Client come pre-installed in TrueNAS.
It provides the `midclt` command-line tool, and the means to easily communicate with middleware using Python to make calls through the websocket API.
The Golang API Client parallels the Python TrueNAS API client. Both API clients allow for better integration of TrueNAS into third-party solutions.
Use these new API clients as a reference for projects that require direct TrueNAS integration.

TrueNAS API documentation remains available in the UI and through the [TrueNAS Documentation Hub]({{< relref "/content/SCALE/api/_index.md" >}}).
{{< /hint >}}