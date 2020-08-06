---
title: "The TrueNAS API"
linkTitle: "TrueNAS v2 API Documentation"
description: "Documetnation for the TrueNAS API"
---

The TrueNAS API is provided to be used as an alternate mechanism for remotely controlling a TrueNAS® system.
TrueNAS has both a websocket and RESTful API.

REST provides an easy-to-read, HTTP implementation of functions, known as resources, which are available beneath a specified base URL. Each resource is manipulated using the HTTP methods defined in RFC 2616, such as GET, PUT, POST, or DELETE.

#### REST API Examples

Various examples of the REST API can be found in the Rest API documentation.


#### API Keys

TrueNAS 12.0 and newer have the ability to use API Keys instead of login credentials.  

To create an API key click the <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp Settings menu at the right of the Top Bar and select, **API KEY**.

<img src="/images/tn-12.0-apikeys.PNG">
<br><br>

Click **Add** and enter a name for the API key to be generated, and click **Add** in the popup.  The API Key will be created, click **Copy to Clipboard** to use the API Key locally.


Once an api key has been created, it can be used as a bearer token. Add the following to headers while making a request:

```
{
'Content-Type': 'application/json',
'Authorization': 'Bearer 1-Pe9VwiV5B70yrq8kM8RmtkhDP4dAnFw5VSsFtSfq47WzfpxwYdb8fUKalAWIWtr0'
}
```



