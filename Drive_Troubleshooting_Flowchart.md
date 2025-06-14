---
title: "Drive Troubleshooting Flowchart (Version 4)"
description: "Provides detailed assistance in troubleshooting and diagnosing drive problems, or possible ZFS problem."
weight: 95
---

## Do You Think You Have A Drive Issue?

Use the flowcharts here (presented both step by step and graphically) to help you diagnose your drive related problem(s). You will have a definitive answer much sooner than if you were to ask the forum for help and waiting on a reply, followed by asking questions for more data, running more tests, etc. Save yourself some time and learn a little bit in the process of using these flowcharts.

These are very simple to follow flowcharts to diagnose drive problems/failures. There is a small bit about ZFS problems as many people will say it must be a drive failure prematurely when it is actually a ZFS issue, a very small part of ZFS is included to help out if you fall into this category, however this is not a ZFS troubleshooting guide as ZFS troubleshooting can get quite involved.

## DISCLAIMER / WARNING / DISCLAIMER / WARNING

While the flowcharts themselves are not harmful, misuse of some of the commands provided can cause loss of data.  If you do not know what these commands do, then you should not be using them.  All are safe if used "exactly" as written.  This means that it is up to you to ensure the commands are used correctly.  If you endeavour down this path and are unsure about a command you have several options, Search the internet for `command man` to read up on the command, or ask someone on the forums for some assistance.  The forum members will help as well.  Ensure that if you ask for help, you ask a proper question and provide lots of details.  Do not let anyone may assumptions, it will bite you one day.

## How to use

This is a troubleshooting guide for the most common problems. It is **NOT** a guide to fix every little problem that can arise from a file system issue, this is focused on physical drive issues.  I did include some basic ZFS troubleshooting because many people think these problems are drive failures and this will identify if it is a drive failure or not.  Pay attention to the little things that catch your eye, as said, not everything is in these flowcharts but I tried to include the most common seen problems.  You may end up where the flowchart ends and tells you the problem is more significant and to see additional help, but many times if the drive looks to be failing, you will be told to replace the drive.

**You MUST be a privileged user** such as `root` or you may need to use `sudo`.  If you enter a command and get the response that the command cannot be found, then you do not have the privileges to run that command.

**Refer to Appendix A** for examples of Self-Monitoring, Analysis, and Reporting Technology (SMART) and Field Access Reliability Metrics (FARM) screen outputs. Appendix A also has Amplifying Information for the Chart questions.

**Refer to Appendix B** when an operation is requested, such as reading SMART data or performing a SCRUB, for what the command is and how to use the command.  If you are uncomfortable executing any of the commands, then seek additional help.

**Seagate drives** may (generally do) report Error Rates differently, it looks like a wild rapidly changing number.  Be aware of this for Seagate drives.
Often people see this as an error and jump to an incorrect conclusion, especially when experiencing ZFS errors.  This guide will help reduce going down the wrong path by using a more systematic approach.

**Criteria Used**  Values I used for Good/Bad evaluations are my personal values that I go by, not some industry standard.  Example: “ID5 Reallocated Sector Count < 6” means this is my personal value where I allow up to 5 reallocated sectors but when it becomes greater than 5, I replace the drive to circumvent a complete failure.  Some people may prefer a value of 1 as a failure or maybe they prefer 10 reallocated sectors before calling the drive bad.  Regardless, if the number starts to increase then that is notable and likely to lead to a problem.

There are four flowcharts:

**1. ZFS ERRORS**

**2. CRITICAL DRIVE ERRORS** - This flowchart is for what the author considers critical errors.

**3. NON-CRITICAL DRIVE ERRORS** – This flowchart is for what the author considers are non-critical errors, however that doesn’t mean they are to be ignored and pushed off.  You still need to take action.

**4. SUSPECT FOUL PLAY (ALTERED DRIVE DATA)** – The Seagate Drive Issue Saga (Not only a Seagate issue)


## How do I do something?

  * This set of flowcharts is not designed to take a person with zero experience and not sure about their abilities. It may be step by step however you need to read the flowcharts in advance before performing them.  This will allow you to ask yourself if yo know what is expected of a perticular step.  This also does not tell you how to replace a drive, you need to refer to the TrueNAS User Guide/Docs for that.

  * ANSWER THE QUESTIONS AS WRITTEN.  Do not assume I meant something different or you might go down the wrong path.

  * Use the TrueNAS Guide to perform things like “How to replace a drive”.  It is there and is well written.

  * To check if you have an SMR drive, you need to play Detective on the internet and find out if your drive is SMR or CMR.  If you have SMR, this could be your problem.

  * These flowcharts will not specifically help you put your pool back ONLINE, it could happen though.  It will help with correcting the common ZFS problems seen, which many people attribute to a drive failure.

  * If you need help, post the entire output of `smartctl –x /dev/???` for interpretation.  Do not hold back any data (serial number exception), thinking you know better.  No one likes to ask for data more than once.

  * If you have recommended changes, reach out to me.  I will evaluate it and update if I agree.

**Disclaimer Again:**  All of the commands in these flowcharts are safe “if” you use them as prescribed. If you find yourself not sure what you should do, STOP!  Ask the forum members.  No one wants to see a person lose data.  That could one of us in the future, it certainly was us in the past.  Pain, lots of pain.  Use at your own risk.

# Flowcharts - Graphical or Procedural Steps

At this point you can choose to reference the graphical images of the flowcharts, which may look good to some people, or too busy for others to easily manage.  Or you can use the step by step guide.

  GRAPHICAL - Links
  
   * [ZFS Flowchart Slide 1 - ZFS Errors](/drive_troubleshooting_flowchart_images/ZFS_Slide_1.PNG)
   * [ZFS Flowchart Slide 2 - ZFS Slow Pool](/drive_troubleshooting_flowchart_images/ZFS_Slide_2.PNG)

   * [Critical Drive Errors Slide](/drive_troubleshooting_flowchart_images/Critical_Drive_Errors.PNG)

   * [Non-Critical Drive Errors Slide 1](/drive_troubleshooting_flowchart_images/Non_Critical_Drive_Errors_1.PNG)
   * [Non-Critical Drive Errors Slide 2](/drive_troubleshooting_flowchart_images/Non_Critical_Drive_Errors_2.PNG)

   * [Foul Play (The Seagate Saga)](/drive_troubleshooting_flowchart_images/Foul_Play.PNG)

   * [Appendix A (Sheet 1) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_1.PNG)
   * [Appendix A (Sheet 2) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_2.PNG)
   * [Appendix A (Sheet 3) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_3.PNG)
   * [Appendix A (Sheet 4) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_4.PNG)
   * [Appendix A (Sheet 5) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_5.PNG)
   * [Appendix A (Sheet 6) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_6.PNG)
   * [Appendix A (Sheet 7) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_7.PNG)   
   
   * [Appendix B (Sheet 1) - Commands to help you - Zpool](/drive_troubleshooting_flowchart_images/Appendix_B_1.PNG)
   * [Appendix B (Sheet 2) - Commands to help you - Identify Drive, SMART Interface, SMART DATA](/drive_troubleshooting_flowchart_images/Appendix_B_2.PNG)
   * [Appendix B (Sheet 3) - Commands to help you - FARM Data, SMART Tests](/drive_troubleshooting_flowchart_images/Appendix_B_3.PNG)
   * [Appendix B (Sheet 4) - Commands to help you - NVMe Specific SMART Tests](/drive_troubleshooting_flowchart_images/Appendix_B_4.PNG)

## ZFS Flowchart Step-by-step Procedure
  ### ZFS Errors

  How To Use:
  Read each block carefully and answer each question.  If you need to perform a task such as “Run a Scrub”, refer to Appendix B for the command(s) required to perform the action.
  
  Note: If you get stuck in a loop more than 2 times, exit the loop and seek additional help.  Use your brain, repeating the same operation over and over again without any change is a waste of time.
  

    1. Refer to Appendix B and obtain a zpool status.
        Is your pool state "ONLINE" or "DEGRADED"?
        Yes - goto step 3
        No - goto step 2
    
    2. This flowchart does not assist in getting a ZFS Pool back ONLINE.
       It can be very involved and you should seek additional help.
       With that said, if you feel you do have a drive failure, proceed to step 3
       or Exit this procedure.

    3. Is Repaired Data from the zpool status greater than zero (0)?
        Yes - goto 14
        No - goto 4
    
    4. Do you have Read, Write, or Cksum Errors?
        Yes - goto 5
        No - goto 9

    5. Refer to Appendix B and run a Scrub on the affected pool.

    6. Did the Read, Write, or Cksum Errors increase? Note any corrupt files?
        Yes - goto 7
        No - goto 9

    7. Have you been through this loop more than twice?
        Yes - goto 8
        No - goto 4

    8. You have a serious problem, backup your data and seek additional help.
       Exit this procedure.

    9. Refer to Appendix B and run a Zpool Clear on your pool.
    
    10. Refer to Appendix B and run a Scrub on your pool.
    
    11. Periodically check the status of the scrub using the zpool status command in Appendix B.
        Do you still have errors?
         Yes - goto 7
         No - goto 12

    12. Restore any corrupt files from a backup.

    13. Problem Corrected.
        Exit this procedure.

    14. Record the names of the corrupt files and delete them.
    
    15. Refer to Appendix B and run a Scrub on your pool.
    
    16. Periodically check the status of the scrub using the zpool status command in Appendix B.
        Do you still have Repaired Data errors?
         Yes - goto 14
         No - goto

    17. Have you been through this loop more than twice?
         Yes - goto 18
         No - goto 3

    18. Are the errors associated ONLY with one drive?
         Yes - goto 19
         No - goto 20

    19. Troubleshoot the drive error using the Critical and Non-Critical Flow Charts.
        Exit this procedure.
    
    20. You have a serious problem, backup your data and seek additional help.
        Exit this procedure.
    
  ### ZFS Slow Pool

    1. Is your pool Used Space Over 80%?
        Yes - The pool has limited space to write data and it slows everything down.
              Typically, when it hits 90% full, it slows down considerably.
              Reduce your pool capacity below 80%.
             Exit this procedure.
        No - goto 2

    2. Do you have SMR drives?
        Yes - ZFS does not work well with SMR drives during the write operations.
              Replace with CMR type drives.
              Exit this procedure.
        No - goto 3

    3. Question to ask yourself for when you may have noticed the change in speed:
      * Did you Reboot?
      * Check to see if your NAS is just Busy
      * Check SNAPSHOTS
      * Check SWAP SPACE
      * Seek Additional Help
    
  ### Critical Drive Errors

  **NOTE:**
    NA = Not Applicable
    Media Wear Level –  Can be reported as ‘Wear Level’ or ‘Percent Used’.
    Wear level value typically starts at 100 and decreases, Percent Used value typically starts at 0 and increases.
    Examine the ‘Thresh’, if it is below 50 then a value of 100=new, 0=worn out.
    If ‘Thresh’ is above 50 then 0=new, 100=worn out.
    Refer to Appendix A for amplifying information on SMART attributes and values.
  
    1. Refer to Appendix B and collect SMART data for the suspect drive.
       Can you obtain SMART data from the drive?
        Yes - goto 2
        No - goto 3

    2. Is SMART STATUS – FAIL, Media Error, or Critical Warning?
        Yes - goto 3
        No - goto 4
      
    3. Back up your data, then consider replacing the drive.
       Exit this procedure.
   
    4. Did a SMART Short or Long test fail?
        Yes - goto 5
        No - goto 7

    5. Refer to Appendix B and run a SMART Long Test, wait the amount of time noted in the SMART data before checking the status.
       Refer to Appendix B and collect SMART data for the suspect drive.
       Did it PASS or FAIL?
        Pass - goto 6
        Fail - goto 3

    6. Problem Corrected. Monitor for reoccurrence.
       Another failure means the drive is bad.
       Exit this procedure.

    7. For SSD/NVMe, Is Wear Level value ‘0’ Zero or for HDD is Helium value Low?
        Yes - goto 8
        No or NA - goto 9

    8. You have a serious problem.
       You are looking at needing to replace the drive immediately.
       Exit this procedure.

    9. Is Reallocated Sectors (ID 5) raw < 5?
        Yes - goto 11
        No - goto 10

    10. You likely have a serious problem; this kind of error generally means
        media damage or wear has occurred.  Seek additional help.
        The drive should be replaced.
        Exit this procedure.
    
    11. Run a SMART Long Test.

    12 Did the SMART Long test PASS or FAIL?
        Fail - goto 3
        Pass - goto 13
    
    13. Is Spin Retry Count (ID 10) raw > 0?
         Yes - goto 14
         No - goto 

    14. Does the drive sound like it is spinning up and down?
         Yes - goto 11
         No - goto 15   

    15. This could be a drive or Power Supply failure.
        Check the power before replacing the drive.
        Exit this procedure.

    16. You do Not have a Critical Problem. Refer to Non-Critical Flowchart.
        Exit this procedure.

    17. Current Pending (ID 197) raw > 0 or Uncorrectable Sector (ID 198) raw > 0?
         Yes - goto 18
         No - goto 16

    18. These errors alone are generally not considered “Critical”.
        You do Not have a Critical Problem. Refer to Non-Critical Flowchart.
        Possibly seek additional advice.
        Exit this procedure.
       
  ### Non-Critical Drive Errors

    1. Refer to Appendix B and collect SMART data for the suspect drive.
       Can you obtain SMART data from the drive?
        Yes - goto 18
        No - goto 2

    2. You have a serious problem, seek additional help.
       Exit this procedure.
    
    3. Is UDMA CRC Errors (ID 199) raw increasing?
        Yes - goto 
        No - goto 4

    4. * Are Hardware ECC Recovered or MultiZone Errors increasing and the ONLY errors?
        Yes - goto 5
        No - goto 6

    5. This is not an immediate issue, monitor for increasing counts.
       Hardware ECC Recovered (ID 195) raw count does not indicate a typical drive failure.
       Exit this procedure.

    6. Are there any other errors?
        Yes - goto 
        No - goto 7

    7. Hardware ECC Recovered (ID 195) is the drive hardware automatically correcting
       the data read, as it should.  MultiZone Error (ID 200) sometimes is an indicator
       of a problem, if associated errors exist, otherwise "usually" not an issue.
       Exit this procedure.

    8. Is Current Pending Sectors (ID 197) raw > 5?
        Yes - goto 9
        No - goto 12

    9. Refer to Appendix B and run a SMART Long Test, wait the amount of time noted in the SMART data before checking the status.
       Refer to Appendix B and collect SMART data for the suspect drive.
       Does it pass?
        Yes - goto 10
        No - goto 11
    
    10. This is okay for the drive right now.
        Monitor Current Pending Sectors (ID 197) raw.
        If it continues to increase, replace the drive.
        Seek additional advice if you desire but provide the full SMARTCTL output for evaluation.
        Exit this procedure.

    11. You have a serious drive problem.
        Replace the drive.
        Exit this procedure.

    12. Is ID 1 Raw Read Error rate or ID 7 Seek Error Rate your concern?
         Yes - goto 14
         No - goto 13  

    13. Seek additional advice.
        Ensure you post the complete output of `smartctl –x /dev/xxx` when asking for help.
        Exit this procedure.
    
    14. Do you have a Seagate Drive?
         Yes - goto 15
         No - goto 16 
    
    15. Seagate does things differently.  If you see wildly changing numbers,
        this may be normal for your drive.    
        Take the Number, subtract 4294967295 (FFFFFFFF Hex), if there was a
        whole number remainder then you have a real failure.
         - Goto step 9
    
    16. This indicates a failure of the armature/head mechanism.
        Replace the drive.
        Exit this procedure.

  ### Suspect Foul Play (Altered Drive Data)
  
    With the flood of used Seagate and other brand hard drives in the market in 2024/2025, if you bought a new drive, you should verify that it is actually new.  The steps to do that are here and I Highly Recommend you do this check.  Unfortunately, only Seagate at this time has FARM data so this will not work for other drive manufacturers.

    Western Digital has WDDA however that may not be more than exactly what is in SMART already and is not covered here as it required additional software that is not installed on TrueNAS.

    (Shameless Plug -- Multi-Report V3.15 (and later) has this check built-in.)

    1. Check which version of smartmontools is installed. `smartctl`

    2. Is smartmontools version 7.4 or greater? 
        Yes - goto 4
        No - goto 3

    3. You will need smartmontools 7.4 or later to read the FARM data.
       Exit this procedure.

    4. OBTAIN SMART DRIVE DATA `smartctl –a /dev/driveid`
    
    5. OBTAIN FARM DATA `smartctl –l /dev/driveid` (-l is a lower case L)
    
    6. From both pieces of data, write down the following data:
        a. Serial Number
        b. Power On Hours
        c. Spindle Power On Hours
        d. Head Flight Hours
        e. LBAs Read and Written

    7. Compare the data between the two reports, is there a large discrepancy (note LBAs are apt to have some discrepancy however 100,000 is a good limit to use)? 
        Yes - goto 9
        No - goto 8

    8. You are one of the lucky ones, your drive appears to be valid.
       Exit this procedure.

    9. You Likely have an altered drive.
       If your drive was refurbished/previously used, the data may be correct.
       If in doubt, seek additional help.
       Exit this procedure.    
    
 
    
## Appendix A - How to read SMART Output and Amplifying Information

  * The attribute is defined by its ID number. The human-readable name
    (e.g. “Reallocated Sectors Count” for ID 5) may vary slightly depending
    on the software you use.

  * SATA HDDs, SAS HDDs, SATA SSDs, and NVMe SSDs use significantly different
    sets of attributes.

  * Some attributes are manufacturer-specific.

  * Whatever the format is of the SMART data, it will contain similar values,
    pay attention to what you are reading.  

  * If you have a question about an attribute, Google for “S.M.A.R.T.” and
    the attribute name.

  * SMART Data is not terribly difficult to read and understand. There is SMART
    data illustrating a typical output for a SATA Hard Drive in the Graphical Charts.

  * If you have a question, ask for help deciphering the data.

This is amplifying information to the troubleshooting flowcharts. Read the entire flowchart section before jumping into it. You can wait 5 minutes to read this before you begin troubleshooting.

When reading SMART data, take in all of the data for the line you are reading.  This is the ID, Attribute, VALUE, WORST, THRESH, RAW_VALUE.
When reading SMART values, pay attention to what the flowchart is asking for.

  * The ID/Attribute defines the meaning of what you are examining.
  * VALUE is a Normalized value on the performance of this attribute.
  * WORST is the worst VALUE observed over the life of the drive.
  * THRESH is the lowest acceptable limit for VALUE and WORST. If VALUE or WORST for any attribute are below THRESH, the drive is considered failed. If THRESH is 0, the attribute is not considered life-critical (e.g. Power On Hours Count).
  * RAW_VALUE (raw) is the non-normalized value.  This value is used often for many of the attributes and may not be reflected immediately in the Normalized values. The content of the RAW_VALUE is (in general) vendor-specific.

When evaluating SMART data:
  * Example: ID195 - Hardware ECC Recovered – VALUE=200, WORST=200, THRESH=0, RAW_VALUE=40945360 (data from my drive)

When the VALUE or WORST approaches the THRESH value, this is typically a failing indication.  In this case, the drive is perfectly fine.  However, if VALUE=45 and WORST=(45 or less), AND you have other errors, then this drive should be replaced at an opportune time.  If something looks wrong, ask for help if you need to.  NEVER WAIT UNTIL THE LAST MINUTE!

  * Example: ID1/Raw Read Error Rate – VALUE=076, WORST=064, THRESH=006, RAW_VALUE=40945360 (failure number)?

Error rates change, they go down and they go up.  In this example you can see that the error rate dropped to 064 but is now 076.  Error rates are calculated over a large number of operations.  Seagate drives display these large RAW_VALUE number as this value represents more than a total number of failures.  So if you have a Seagate made drive, do not worry about the "Error Rate" fields without just asking someone.  The flowchart provides the specific math to perform if required.

If you have a question about what you are reading, ask a question.  No one wants you to replace a drive unless it is failing, and does not want you to ignore a drive that is failing.

## LINKS Appendix A slides showing screen examples

   * [Appendix A (Sheet 3) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_3.PNG)
   * [Appendix A (Sheet 4) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_4.PNG)
   * [Appendix A (Sheet 5) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_5.PNG)
   * [Appendix A (Sheet 6) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_6.PNG)
   * [Appendix A (Sheet 7) - How to read a SMART Output and Amplifying Information](/drive_troubleshooting_flowchart_images/Appendix_A_7.PNG)   


## Appendix B - Commands that may be used while troubleshooting
    
Below is a list of common commands for both CORE (FreeBSD) and SCALE (Debian Linux) which help diagnose possible drive issue.  Unless specifically identified as CORE or SCALE, the commands work for both.  These commands are used in the troubleshooting procedures.  The "nvme" specific commands can be dangerous if you do not use the correct values.  For example you could reformat the nvme drive.  Running the commands specified are safe, pay attention to what you are doing. This section has a red warning.
    
FORMAT: Each command will be surrounded by an apostrophe (`), the same way we post commands on the TrueNAS Forum. <font color="blue">Blue Font represents the name of your pool, so replace pool with the name of your pool.</font>  <font color="orange">Orange font indicates your Drive Ident.</font>  <font color="green">Green font is Extra Information.</font>


SAFETY OF COMMANDS: These commands are all safe to use as outlined below.  Some of the commands have do have destructive power, however you would have to significantly deviate from the examples provided.

### ZPOOL COMMANDS
* `zpool status -v`		Provides the pool status for all pools.  
* `zpool scrub pool`	Starts a SCRUB operation on the selected pool.  
* `zpool clear pool `	Clears all Read, Write, and Cksum errors for the designated pool.  


### IDENTIFY DRIVE BY GPTID or DRIVE IDENT
<font color="green">Note: Drives may have multiple partitions so when cross referencing by GPTID, you just need to look for a Drive ID, not the different partitions.  Drive ada0p1 is the same physical drive as ada0p2.
Example “gptid/d0f8a4fe-bf79-11ed-a0df-000c296fd555  N/A  ada0p2”  This is Drive ID ada0 partition 2.</font>

* `lsblk -o +PARTUUID,NAME,LABEL,SERIAL`	[SCALE]: Provides a listing of your disks, partitions, drive ident, and drive serial numbers so you can cross reference all these identifying areas so you replace the correct drive using the serial number.

* `glabel status`	[CORE]: Provides the GPTID and Drive Ident. “nvd0” = “nvme0” To obtain the Drive Serial Number, use the “OBTAIN DRIVE SMART DATA” section to cross reference the DRIVE IDENT to the DRIVE SERIAL NUMBER.

### OBTAIN DRIVE SMART DATA INTERFACE

* `smartctl --scan`	[CORE/SCALE]: Lists the interface types for all available drive.  If running the smartctl commands **below**, there is an error reading the drive, try adding the interface type.

    Format: `smartctl -d interface_type command string`
    Example: `smartctl -d scsi -a /dev/sda`


## OBTAIN DRIVE SMART DATA
* `smartctl -a /dev/sda`	[SCALE]: Provides a BASIC listing of the drive SMART data.  Most diagnosis can be made using this data.  The Orange indicates the Drive Ident.

* `smartctl -a /dev/da0` or `ada0`	[CORE]: Same as above.

 
* `smartctl -x /dev/sda`	[SCALE]: Provides EXTENDED listing of the drive SMART data.

* `smartctl -x /dev/da0` or `ada0`	[CORE]: Same as above.

### OBTAIN DRIVE FARM DATA
* `smartclt -l farm /dev/sda`	[SCALE]: Provides Field Access Reliability Metrics log ‘FARM’. This data can be useful in determining if a drive has had the SMART data reset.

* `smartclt -l farm /dev/da0` or `ada0`	[CORE]: Same as above.


### START/STOP A SMART TEST (HDD/SSD/Most NVMe)
SHORT TEST
* `smartctl -t short /dev/sda`	[SCALE]: Run a “short” SMART test on the drive.

* `smartctl -t short /dev/da0` or `ada0`	[CORE]: Same as above.
 

LONG TEST	
* `smartctl -t long /dev/sda`	[SCALE]: Run a “long” SMART test on the drive.
* `smartctl -t long /dev/da0` or `ada0`	[CORE]: Same as above.


STOP TEST
* `smartctl -X /dev/sda`	[SCALE]: This will abort the current SMART test if one is running.
* `smartctl -X /dev/da0` or `ada0`	[CORE]: Same as above.

### START/STOP a SMART TEST (NVME UNIQUE, IF SMARTCTL DOES NOT WORK)
<font color="red"><b>These commands if misused could be destructive, enter as written, NO TYPO's.</b></font>

In the examples below, the drive is `nvme0`, replace this value for other nvme drives.

SHORT TEST

* `nvme device-self-test /dev/nvme0 -s 1`	[SCALE]: Run a “short” SMART test on the drive.
* `nvmecontrol selftest -c 1 nvme0`	[CORE]: Same as above.

 
LONG TEST
* `nvme device-self-test /dev/nvme0 -s 2`	[SCALE]: Run a “long” SMART test on the drive.
* `nvmecontrol selftest -c 2 nvme0`	[CORE]: Same as above.


STOP SMART TEST
* `nvme device-self-test /dev/nvme0 -s 0xf`	[SCALE]: This will abort the current SMART test if one is running.
* `nvmecontrol selftest -c 0xf nvme0`	[CORE]: Same as above.