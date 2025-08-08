&NewLine;

The **Associate** button is inactive when the extent is associated with a LUN. Removing the association activates the button. Clicking the button opens the **Associate *target*** dialog. 

{{< trueimage src="/images/SCALE/Shares/ISCSIExtentAssociateDialog.png" alt="Extent Associate Dialog" id="Extent Associate Dialog" >}}

Enter a LUN ID between 0 and 1023 into **LUN ID**. SCALE requires at least one LUN 0.
Some initiators expect a value between 0 and 256. Leaving this field blank automatically assigns the next available ID.

Select the target on the **Extent** dropdown list.