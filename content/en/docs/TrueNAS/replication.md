---
title: "Replicating Snapshots"
linkTitle: "Replicating Snapshots"
description: "How to back up dataset snapshots to another system"
---

# Process Summary

* Replication
  * Copies ZFS dataset snapshots between storage pools
    * Can be done locally or between two different systems
    * Uses the snapshot creation date that is in the snapshot name to organize replicated snapshots.
      * Make sure snapshot names have the correct creation dates.
    * Replications run in parallel as long as they don’t conflict.
    * The task could ask to destroy snapshots in the destination when those snapshots are unrelated to the replicated snapshots. Make sure any needed snapshots are backed up in a different location.
    * Replications running for the first time can take a long time to complete.
      * Subsequent replications are much faster as only the differences are sent.
* Replication Prerequisites
  * Periodic Snapshot Task
    * Tasks > Periodic Snapshot Tasks
      * Select the dataset to snapshot and schedule when the task will run.
      * Customized snapshot Naming Schema can be defined.
  * SSH Connection
    * System > SSH Connections and System > SSH Keypairs
      * Semi-Auto Setup
        * Only possible with FreeNAS or TrueNAS systems
        * Requires the remote system have SSH root access enabled in Services > SSH.
        * Enter hostname or IP address of the remote FreeNAS or TrueNAS system.
          * A valid URL scheme is required.
        * Enter login credentials for the remote system.
        * Choose an existing SSH Keypair or generate a new keypair for this connection.
          * Keypair is named the same as the Connection.
        * Clicking Save automatically connects to the remote FreeNAS/TrueNAS and configures the SSH keys.
     * Manual Setup
       * Requires manually copying a local system public SSH key over to a remote system.
       * Go to System > SSH Keypairs and create a new keypair.
       * Highlight the entire Public Key text and copy it to the clipboard or paste the text into a temporary file.
       * Log in to the remote system and follow the procedure recommended by that system’s software documentation to add the Public Key.
         * FreeNAS/TrueNAS:
           * Go to Accounts > Users and edit the root account.
           * Paste the Public Key text into the SSH Public Key box and click Save.
       * Local system
         * Go to System > SSH Connections
           * Setup Method = Manual
           * Enter the hostname or IP address of the remote system that has the public SSH key.
           * Private Key: Select the Keypair that was used to copy the SSH key to the remote system.
           * Click Discover Remote Host Key to initiate connection and add that key to the form.
           * Cipher and Timeout are customizable to your use case.
* Replication Wizard
  * Can load previously saved replication configurations.
  * Define what is being replicated and where.
    * TrueNAS does not support both the Source and Destination being on remote systems. One side must be local.
    * Multiple Sources can be defined, but only one Destination path
    * SSH Connection is required for remote system connection
      * Can be created directly in the wizard.
      * SSH Keypair can be automatically generated in the wizard too.
    * Snapshots
      * Source datasets on the local system show the number of snapshots to replicate
        * When no snapshots exist, TrueNAS automatically attempts to create snapshots of the Sources before replication.
        * To define specifically created snapshots for replication, set Replicate Custom Snapshots and define the snapshot Naming Schema
      * Source datasets on a remote system identify snapshots to replicate by entering a snapshot Naming Schema
      * Setting Recursive includes snapshots of child datasets of the selected Sources.
    * Security
      * Remote replication authenticates with SSH, but data encryption can be enabled or disabled
        * Enabling encryption protects the data.
        * Disabling encryption maximises speed. WARNING: this leaves data unprotected and is only recommended within secure networks.
    * Naming
      * Automatically generated from Source and Destination
      * User can overwrite
    * Scheduling
      * Pre-defined schedule
      * Custom Scheduler
      * Run Once: no schedule created, the replication task must be manually started by the user each time they want it to run.
* Advanced Replication
  * Required to create a replication task using the legacy (11.2 and earlier) engine.
  * Can require pre configured SSH Connections and Periodic Snapshot Tasks.
  * Many additional fine-tuning options for the task
    * Data stream config, logging verbosity, automatic retries, many additional scheduling options.
    * Define the snapshot retention policy for snapshots stored in the Destination.
  * Same options as editing an existing replication task.

# Replicating Snapshots

Detailed article goes here.