&NewLine;

{{< hint type=info >}}
When using the file browser in the Add SMB or Edit SMB screens, if the parent dataset selected has an ACL, TrueNAS shows a warning message advising you to strip the ACL from the dataset. 

{{< trueimage src="/images/SCALE/Shares/ShareACLWarningDialog.png" alt="Strip ACL Warning" id="Strip ACL Warning" >}}

Click **Continue** to close the dialog and continue adding the dataset.
Alternatively, close the **Add SMB** screen, go to the **Datasets** screen, select the same dataset, locate the **Permissions** widget, then click **Edit** to open the **Edit ACL** screen.
Click **Strip ACL** on the **Edit ACL** screen. Save the change, then return to the **Shares** screen and open the **Add SMB** screen.

TrueNAaS shows a **Configure ACL** dialog to remind you to edit the ACL if you did not stop to strip the ACL.

{{< trueimage src="/images/SCALE/Shares/SMBShareConfigureACLDialog.png" alt="Configure ACL Dialog" id="Confiure ACL Dialog" >}}

Click **Configure** to open the **Edit ACL** screen, or **No** to close the dialog and do nothing.
{{< /hint >}}