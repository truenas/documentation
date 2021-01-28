---
title: "API V2.0"
description: "Documentation for the TrueNAS 11.3 and later Application Programming Interface (API)."
---

The TrueNAS API is an alternate mechanism for remotely controlling a TrueNAS system.
TrueNAS has both a RESTful and Websocket API.

## Creating API Keys

*TrueNAS 12.0 and later* has the ability to use API keys instead of login credentials.  

To create an API key, open the web interface <i class="fas fa-cog" aria-hidden="true" title="Settings"></i> (Settings) menu and click **API KEY**.

<img src="/images/APIKeys4.png">


Click **Add**, enter a new key name, and click **Add** again to confirm.
<img src="/images/APIKeys2.png">
<br><br>

Immediately after the API key is created, you can use the key locally by clicking **Copy to Clipboard**.
<img src="/images/APIKeys3.png">
<br><br>
The API key can *only* be copied immediately after creation.
When the initial creation window is closed, the API key cannot be copied again.

Multiple API keys can be created. 

When an API key has been created, it can be used as a bearer token.
Add the following to the headers when making a request:

```
{
'Content-Type': 'application/json',
'Authorization': 'Bearer 1-Pe9VwiV5B70yrq8kM8RmtkhDP4dAnFw5VSsFtSfq47WzfpxwYdb8fUKalAWIWtr0'
}
```

## RESTful API

REST provides an easy-to-read, HTTP implementation of functions, known as resources, which are available beneath a specified base URL. Each resource is manipulated using the HTTP methods defined in [RFC 2616](https://tools.ietf.org/html/rfc2616), such as GET, PUT, POST, or DELETE.

---
