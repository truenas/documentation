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
{{< tab "Method 3: Replicate Key Encrypted Dataset/zvol" >}}
1. Go to **Storage -> pool/root dataset** on the replication system. Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>  and select **Export Key**.
2. Either download the Key file, open the file, and change the poolname/dataset to the recieving poolname/dataset or copy the Key code provided in the Key window.
3. On the receiving pool/dataset: Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>  next to pool/dataset and select *Unlock*.
4. There are two ways to unlock the dataset. Either Unset Unlock with Key file. Paste the Key Code into Dataset Key field. (if there is a space character at the end of the key - delete the space.) or Select the Key file that was downloaded and edited.
5. Click *Save*.
5. Click *Continue*.
{{< /tab >}}
{{< /tabs >}}
