---
---

TrueCommand uses a [self signed certificate](https://tools.ietf.org/html/rfc8705) for a secure connection.
Because of this, many Internet browsers consider the IP address or DNS host name untrustworthy.
In these cases, you must add the IP address or DNS host name as an exception to the browser to access the web interface.
Adding an exception is shown here for two different browsers, but the procedure is similar for most browsers.

### Browser Security Exceptions
{{< expand "Chrome" "v" >}}
Click **Advanced** to view information about the error code.
Click **Proceed to hostname (unsafe)**.

![ChromeWarning](/images/TrueCommand/2.0/ChromeWarning.png "Chrome Warning")
{{< /expand >}}
{{< expand "Firefox" "v" >}}
Click **Advanced** to view information about the error code.

![FirefoxWarning](/images/TrueCommand/2.0/FirefoxWarning.png "Firefox Warning")

Click **Add Exception**.
Set **Permanently store this exception** to permanently store the IP address or DNS host name in Firefox.
Click **Confirm Security Exception**.

![FirefoxExceptionAdd](/images/TrueCommand/2.0/FirefoxExceptionAdd.png "Adding a security exception")
{{< /expand >}}