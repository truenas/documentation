&NewLine;

Download [rclone](https://rclone.org/downloads/) for your OS and open it in a command line utility. The example photos in this article use Powershell in Windows OS.

Enter `rclone config`, then enter `n` to create a new remote.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIrcloneConfig.png" alt="New Remote" id="New Remote" >}}

Enter a name for the new remote, then enter the number from the list corresponding to Google Photos.

Enter the client id and secret you saved when you created the Google Photos API credentials, then enter `false` to keep the Google Photos backend read-only.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIrcloneConfig2.png" alt="rclone Options" id="rclone Options" >}}

Do not edit the advanced config. When prompted about automatically authenticating rclone with the remote, enter `y`.

A browser window opens to authorize rclone access. Click **Allow**.

In the command line, enter `y` when prompted about media item resolution to complete the configuration.

Copy and save the type, client_id, client_secret, and token, then enter `y` to keep the new remote.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIrcloneConfig3.png" alt="rclone Configuration Complete" id="rclone Configuration Complete" >}}
