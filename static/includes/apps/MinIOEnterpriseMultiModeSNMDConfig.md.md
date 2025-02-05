 &NewLine;

Click **Add** to the right of **Multi Mode (SNMD or MNMD)** to show the field where you enter the storage syntax for the multimode option.
This consists of the system IP address and port in a URL format for the type of cluster you want to create. 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMD.png" alt="Multi Mode SNDN String" id="Multi Mode SNDN String" >}}

Enter **/data{1...4}** in the field if [configuring SNMD]({{< relref "ConfigMinIOEnterpriseSNMD.md" >}}).
Where **/data** represents the dataset name and the curly brackets enclosing **1** and **4** separated by three dots represent the numeric value of the dataset names.