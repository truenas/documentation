&NewLine;

{{< hint type="info" title="REST API Deprecation Notice" >}}
The TrueNAS REST API is deprecated in TrueNAS 25.04 and replaced by the [TrueNAS API Client](https://github.com/truenas/api_client).
Full removal of the REST API is planned for a future release.

This new API Client is not the deprecated TrueNAS CLI (midcli).
The API Client is integrated in TrueNAS 25.04 onwards.
It provides the `midclt` command-line tool, and the means to easily communicate with middleware using Python to make calls through the websocket API.

This API client allows for better integration of TrueNAS into third-party solutions.
Use this as a reference for projects that require direct TrueNAS integration.

TrueNAS API documentation remains available in the UI and through the [TrueNAS Documentation Hub]({{< relref "/content/SCALE/api/_index.md" >}}).
{{< /hint >}}
