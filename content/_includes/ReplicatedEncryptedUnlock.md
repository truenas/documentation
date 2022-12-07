---
---

### Method 1: Construct JSON Manifest.
1. Replicate every encrypted dataset you want to replicate with properties. 

2. Export key for every child dataset that has a unique key. 

3. For each child dataset construct a proper json with poolname/datasetname of the destination system and key from the source system like this: 
   `{"tank/share01": "57112db4be777d93fa7b76138a68b790d46d6858569bf9d13e32eb9fda72146b"}`

5. Save this file with the extension <file>.json<file>. 

6. On the remote system, unlock the dataset(s) using properly constructed <file>json<file> files.

### Method 2: Replicate Encrypted Dataset/zvol Without Properties.
Uncheck properties when replicating so that the destination dataset is not encrypted on the remote side and does not require a key to unlock.
1. Go to **Data Protection** and click **ADD** in the **Replication Tasks** window.

2. Click **Advanced Replication Creation**.

3. Fill out the form as needed and make sure **Include Dataset Properties** is *NOT* checked.

4. Click **Save**.

### Method 3: Replicate Key Encrypted Dataset/zvol.

1. Go to **Datasets** on the system you are replicating from. 
   Select the dataset encrypted with a key, then click **Export Key** on the **ZFS Encryption** widget to export the key for the dataset.

2. Apply the JSON key file or key code to the dataset on the system you replicated the dataset to. 
* Option 1: Download the key file and open it in a text editor. Change the *pool name/dataset* part of the string to the *pool name/dataset* for the receiving system. For example, replicating from *tank1/dataset1* on the replicate-from system to *tank2/dataset2* on the replicate-to system. 
* Option 2: Copy the key code provided in the **Key for *dataset*** window.

3. On the system receiving the replicated pool/dataset, select the receiving dataset and click **Unlock**. 

4. Unlock the dataset. 
   Either clear the **Unlock with Key file** checkbox, paste the key code into the **Dataset Key** field (if there is a space character at the end of the key, delete the space), or select the downloaded Key file that you edited.

5. Click **Save**.

5. Click **Continue**.

