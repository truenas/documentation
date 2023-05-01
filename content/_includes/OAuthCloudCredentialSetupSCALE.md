---
---

After logging into the provider with the OAuth credentials, the provider provides the access token.
Google Drive and pCloud use one more setting to authenticate credentials.

1. Enter the name and select the cloud storage provider from the **Provider** dropdown list.

2. Enter the provider account email in **OAuth Client ID** and the password for that user account in **OAuth Client Secret**.

3. Click **Log In To Provider**. The **Authentication** window opens. Click **Proceed** to open the OAuth credential account sign in window.

   Yandex displays a cookies message you must accept before you can enter credentials.

   Enter the provider account user name and password to verify the credentials.

4. (Optional) Enter the value for any additional authentication method. 
   For pCloud, enter the pCloud host name for the host you connect to in **Hostname**. 
   For Google Drive when connecting to **Team Drive**, enter the Google Drive top-level folder ID.

5. Enter the access token from the provider if not populated by the provider after OAuth authentication. Obtaining the access token varies by provider.
   
   {{< truetable >}}
   | Provider | Access Token |
   |----------|--------------|
   | Box | For more information the user access token for Box [click here](https://developer.box.com/). An [access token](https://developer.box.com/reference/) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |
   | Dropbox | Create an access [token](https://dropbox.tech/developers/generate-an-access-token-for-your-own-account) from the [Dropbox account](https://www.dropbox.com/). |
   | Google Drive | The authentication process creates the token for [Google Drive](https://developers.google.com/drive/api/v3/about-auth) and populates the **Access Token** field automatically. Access tokens expire periodically, so you must refresh them. |
   | Google Photo | Does not use an access token. |
   | pCloud | Create the pCloud access token [here](https://docs.pcloud.com/methods/intro/authentication.html). These tokens can expire and require an extension. |
   | Yandex | Create the Yandex access token [here](https://yandex.com/dev/direct/doc/dg-v4/concepts/auth-token.html). |
   {{< /truetable >}}
   
6. Click **Verify Credentials** to make sure you can connect with the entered credentials.

7. Click **Save**.