&NewLine;

The TrueNAS web interface lets users save debugging information to a text file.

On TrueNAS 13 systems, go to **System > Advanced** and click **SAVE DEBUG**.

{{< trueimage src="/images/CORE/System/GenerateDebugFile.png" alt="Generate Debug Warning" id="Generate Debug Warning" >}}

Click **PROCEED** to generate the debug file (might take a few minutes).
After generating the debug file, TrueNAS prompts you to download it to your local system and saves a copy in <file>/var/tmp/fndebug</file>.

The {{< cli >}}freenas-debug{{< /cli >}} command-line utility collects debugging information.

{{< hint type=warning title="Debug Files Contain Sensitive Information">}}
Debug files contain log files which can include personal information such as usernames, networking configuration, device serial numbers, or other identifying information about your system.
Files uploaded to an issue from the **System > Support** screen using **Attach Debug** or through the Jira [Private File Upload](https://ixsystems.atlassian.net/servicedesk/customer/portal/15/group/37/create/153) service are only visible to the TrueNAS development team.
The [TrueNAS Privacy Policy](https://www.ixsystems.com/privacy-policy/) contains a detailed statement of our commitment to data privacy.

Always store debug files in a secure location.
Please review debugs and redact any sensitive information before sharing with external entities.
Use a file archiver utility, such as 7-zip, to open compressed debug archives and review log contents.
{{< /hint >}}
