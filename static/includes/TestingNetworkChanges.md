&NewLine;

### Testing Network Interface Changes

TrueNAS protects your connection to the interface by displaying the **Test Changes** option on the **Network** screen after you make and save changes to the network interface.

TrueNAS shows the unapplied changes widget above the **Interfaces** widget after saving network changes.

Click the **Test Changes** button to test access to the UI after making a change and before making it a permanent change.
This safeguard is intended to prevent changes that can break access to the UI.

**Revert Changes** discards any changes made to the interface within the same 60-second period.

{{< trueimage src="/images/SCALE/Network/TestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

The test timer starts after you click **Save** on the **Add Interface** or **Edit Interface** screens.
After clicking **Test Changes**, wait a few moments to give the interface time to initialize, and then refresh the browser until you see the **Save Changes** button or follow the steps below to test in a new browser tab. Click **Save Changes** to make the changes permanent.

To test the change in a different browser tab:

1. Click **Test Changes**. 

2. (Optional) Click on **60** and enter a new number to change the time allotted to test the network change before changes automatically revert.

3. Immediately open a new browser window. Do not close the existing login session tab.

4. Enter the new IP address in the browser URL field of the new browser window, and press <kbd>Enter</kbd>.
   The TrueNAS login screen displays.

5. Enter your administrator login credentials to access the system.

6. Go to **Network** and click **Save Changes** to make the changes permanent.

If the timer expires before you save the changes, TrueNAS reverts to the settings before you made the change.
Return to the original browser session, to re-enter your interface changes, click **Save**, then repeat the steps above.

If you cannot access the UI, return to the original browser session and click **Revert Changes** on the **Network** screen.
