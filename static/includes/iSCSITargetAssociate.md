&NewLine;

The **Associate** dialog shows the target name.

{{< trueimage src="/images/SCALE/Shares/ISCSIExtentAssociateDialog.png" alt="Extent Associate Dialog" id="Extent Associate Dialog" >}}

**LUN ID** accepts a LUN ID between 0 and 1023. TrueNaS requires at least one LUN 0.
Some initiators expect a value between 0 and 256. Leaving this field blank automatically assigns the next available ID.

**Extent** shows a dropdown list of targets to select and associate the extent with.