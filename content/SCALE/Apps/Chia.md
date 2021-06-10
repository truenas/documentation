---
title: "Chia App"
weight: 20
---


SCALE includes Chia in it's Official Apps catalog. Chia Blockchain is a new cryptocurrency that uses Proof of Space and Time. Instead of using expensive hardware that consumes exorbitant amounts of electricity to mine cryptos, it leverages existing empty hard disk space on your computer(s) to farm cryptos with minimal resources, such as electricity.

## install the Chia App

Click on the Chia apps **Install** button in the *Avaialable Aplications* list.

![ChiaInstall](/images/SCALE/chia_Install.png "Install Chia")

Name your App. In this example the name is *chia1*. Click the **Next** button.

![ChiaAppName](/images/SCALE/chia_AppName.png "Chia Name")

Leave *Enable Custom Host Path for Chia Configuration Volume* and *Enable Custom Host Path for Chia Plots Volume* unchecked and click the **Next** button.

![ChiaStorage](/images/SCALE/chia_Storage.png "Chia Storage")

Click the **Next** button in the Chia Environment Variables screen. We will be adding one later.

![chiaSkipEnvironmentalVariables](/images/SCALE/chia_SkipEnvironmental_Variables.png "Chia Skip Environmental Variables")

Confirm the otions and click the **Submit** button.

![chiaSubmit](/images/SCALE/chia_Submit.png "Chia Submit")

Continue though the wizard and create the new application. After a minute or two the new chia1 container will be started and listed as “ACTIVE”. At this point we need to click the three-dot menu on the top-right and launch the Shell.

![chiaShell](/images/SCALE/chia_Edit.png "Chia Shell")

Leave the defaults for the pod (There is only one) and use the selected /bin/bash shell.

![chiaChoosePod](/images/SCALE/chia_ChoosePod.png "Chia choose Pod")
  
The first time Chia launches, it will automatically create a new private key set which is for your plotting, as well as wallet. However this will not get preserved across container restarts. To make sure your keys and wallet persist, we need to save the Mnemonic Seed which was magically created and make sure it gets used at each container initialization. To do this, start by displaying the current key information by running the following shell command: 

**/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed**

![chiaMnemonicSeed](/images/SCALE/chia_mnemonicSeed.png "Chia Mnemonic Seed")

You’ll want to make a backup copy of the information provided here for your reference in case you lose the keyfile somewhere along the line. To make sure the same key is used for this container going forward, we will be saving the mnemonic-seed phrase to one of our host volumes on TrueNAS.

Copy and paste the 24 secret words of the mnemonic seed into a new shell command:

**echo "my unique 24 secret words here" > /plots/keyfile**

![chiaAddKeyfile](/images/SCALE/chia_AddKeyfile.png "Chia Add Keyfile")

With this done, exit the shell and go back to the Installed Apps page and click Edit on your Chia container.

Scroll down until you find the Container Environment Variables section and add a new variable as shown below:

* Environment Variable Name: keys
* Environment Variable Value: /plots/keyfile

![chiaAddEV](/images/SCALE/chia_AddEV.png "Chia Add Environment Variables")
  
If you entered the command correctly, you should see some output that looks like the screenshot.
  
Save the change, and the chia container should restart automatically. To confirm your changes have persisted you can log into the containers shell again and run the same “/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed” command to show your keys. If the keys are identical to what you previously recorded, then congratulations you are done! This Chia container will persist across reboots, upgrades and re-deployments.

At this point you are all ready to begin farming Chia. This is a CLI process and beyond the scope of this quick how-to, but I recommend you start by reading up on their [CLI reference materials](https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference), [Quick Start guide](https://github.com/Chia-Network/chia-blockchain/wiki/Quick-Start-Guide) and other [documentation](https://github.com/Chia-Network/chia-blockchain/wiki).
