---
title: "Configuring the Chia App"
description: "This article provides basic installation instruction for the Chia application using both the TrueNAS webUI and CLI commands."
weight: 30
alias: /scale/scaleuireference/apps/chia/
tags: 
 - scaleapps
 - scalechia
---

{{< toc >}}

SCALE includes Chia in its Official Apps catalog. Chia Blockchain is a new cryptocurrency that uses Proof of Space and Time. Instead of using expensive hardware that consumes exorbitant amounts of electricity to mine cryptos, it leverages existing empty hard disk space on your computer(s) to farm cryptos with minimal resources, such as electricity.

## Install the Chia App

Click on the Chia app **Install** button in the **Available Applications** list.

![AvailableApplicationsChia](/images/SCALE/22.02/AvailableApplicationsChia.png "Available Applications Chia Widget")

Name your App and click **Next**. In this example, the name is *chia1*.

![AppsInstallChiaEnterName](/images/SCALE/22.02/AppsInstallChiaEnterName.png "Chia Name")

Leave **Enable Custom Host Path for Chia Configuration Volume** and **Enable Custom Host Path for Chia Plots Volume** unchecked and click **Next**.

![ChiaStorage](/images/SCALE/chia_Storage.png "Chia Storage")

Click **Next** in the Chia Environment Variables screen. You add one later.

![AppsInstallChiaSkipEnvironmentVariables](/images/SCALE/22.02/AppsInstallChiaSkipEnvironmentVariables.png "Chia Skip Environmental Variables")

Confirm the options and click **Submit**.

![AppsInstallChiaConfirmOptions](/images/SCALE/22.02/AppsInstallChiaConfirmOptions.png "Chia Save")

Continue through the wizard and create the new application. After a minute or two the new Chia container starts and shows ACTIVE status. Click the three-dot menu on the top-right and launch the Shell.

![AppsInstallChiaSelectShell](/images/SCALE/22.02/AppsInstallChiaSelectShell.png "Chia Shell")

Leave the defaults for the pod (there is only one) and use the selected /bin/bash shell.

![AppsInstallChiaChoosePod](/images/SCALE/22.02/AppsInstallChiaChoosePod.png "Chia choose Pod")
  
The first time Chia launches, it automatically creates a new private key set (for plotting purposes) and wallet. However, the private key set is not preserved across container restarts. To make sure your keys and wallet persist, save the Mnemonic Seed that was created and make sure it gets used at each container initialization. To do this, start by displaying the current key information by running the following shell command: 

`/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed`

![chiaMnemonicSeed](/images/SCALE/chia_mnemonicSeed.png "Chia Mnemonic Seed")

We suggest you make a backup copy of the information provided here for your reference in case you lose the keyfile. To make sure the same key is used for this container going forward, you save the mnemonic-seed phrase to one of your host volumes on TrueNAS.

Copy and paste the 24 secret words of the mnemonic seed into a new shell command:

`echo "my unique 24 secret words here" > /plots/keyfile`

![chiaAddKeyfile](/images/SCALE/chia_AddKeyfile.png "Chia Add Keyfile")

Now exit the shell and go back to the **Installed Apps** page. Click **Edit** on your Chia container.

Scroll down until you find the **Container Environment Variables** section and add a new variable as shown below:

* Environment Variable Name: keys
* Environment Variable Value: /plots/keyfile

![AppsInstallChiaEditEnvironmentVariable](/images/SCALE/22.02/AppsInstallChiaEditEnvironmentVariable.png "Chia Add Environment Variables")
  
If you entered the command correctly, you should see some output that looks like the screenshot.
  
Save the change, and the chia container should restart automatically. To confirm your changes have persisted you can log into the containers shell again and run the same `/chia-blockchain/venv/bin/chia keys show --show-mnemonic-seed` command to show your keys. If the keys are identical to what you previously recorded, then you are done! This Chia container persists across reboots, upgrades, and re-deployments.

At this point, you are ready to begin farming Chia. This is a CLI process and beyond the scope of this quick how-to, but we recommend you start by reading up on their [CLI reference materials](https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference), [Quick Start guide](https://github.com/Chia-Network/chia-blockchain/wiki/Quick-Start-Guide) and other [documentation](https://github.com/Chia-Network/chia-blockchain/wiki).

{{< taglist tag="scalechia" limit="10" >}}
{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}