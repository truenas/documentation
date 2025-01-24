&NewLine;

Enter <b>https://<i>10.123.12.100</i>{0...3}:30000/data{1...4}</b> in the field if [configuring MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}}).
The last number in the final octet of the IP address number is the first number in the **{0...3}** string.
Separate the numbers in the curly brackets with three dots.

If your sequential IP addresses are not using 100 - 103, for example *10.123.123.125* through *128*, then enter them as <b>https://<i>10.123.123.12</i>{5...8}:30000/data{1...4}</b>.

If the IP addresses assigned to the four systems are not sequentially numbered, assign sequentially numbered host names.
For example, <b>minio1.<i>mycompany.com</i></b> through <b>minio4.<i>mycompany.com</i></b>.
Enter <b>https://minio{1...4}.<i>mycompany.com</i>:30000/data{1...4}</b> in the **Multi Mode (SNMD or MNMD)** field.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MNMD String" id="Multi Mode MNDN String" >}}