---
---

{{< tabs "Unlocking Methods" >}}
{{< tab "Method 1: Construct JSON Manifest" >}}
1. Replicate every encrypted dataset you want to replicate with properties. 
2. Export key for every child dataset that has a unique key. 
3. For each child dataset construct a proper json with poolname/datasetname of the destination system and key from the source system like this: 
   `{"tank/share01": "57112db4be777d93fa7b76138a68b790d46d6858569bf9d13e32eb9fda72146b"}`
5. Save this file with the extension <file>.json<file>. 
6. On the remote system, unlock the dataset(s) using properly constructed <file>json<file> files.
{{< /tab >}}
{{< tab "Method 2: Replicate Encrypted Dataset/zvol Without Properties" >}}
Uncheck properties when replicating so that the destination dataset will not be encrypted on the remote side and will not require a key to unlock.
1. Go to **Data Protection** and click *ADD* in the *Replication Tasks* window.
2. Click *Advanced Replication Creation*.
3. Fill out the form as needed and make sure *Include Dataset Properties* is **NOT** checked.
4. Click *Save*.
{{< /tab >}}
{{< tab "Method 3: Replicate Encrypted Dataset/zvol in the UI" >}}
Check **Full Filesystem Replication** so that the destination dataset will use the exported Encryption key from the source pool/dataset to unlock.
1. Go to *Storage -> pool/root dataset*. Click Options and select **Exort Key**.
2. Download the key, open the text file, and copy the Key code.
3. Go to **Data Protection** and click *ADD* in the *Replication Tasks* window.
4. Click *Advanced Replication Creation*.
5. Fill out the form as needed and make sure *Full Filesystem Replication* is checked.
6. Click *Save*.
7. On the receiving pool/dataset:
  * Click the options next to tank/reptest and select Unlock.
  * Unset Unlock with Key file.
  * Paste the Key Code into Dataset Key. (if there is a space character at the end of the key - delete the space)
  * Click Save.
  * Click Continue.
{{< /tab >}}
{{< /tabs >}}
