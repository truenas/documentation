---
title: "Configuring TrueCommand SAML Service for Google Admin"
description: "This article provides detailed instructions on setting up SAML service in TrueCommand and Google Admin."
weight: 40
tags:
 - tcsaml
---

{{< toc >}}

Security Assertion Markup Language (SAML) is a single sign-on (SSO) standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
Single Sign-on (SSO) works by transferring a user’s known identity to another location that provides services to the user. SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IdP) and Service Provider (SP). Google Admin is an example of an IdP. 

## Activating TrueCommand SAML Service

This article provides instructions for setting up SAML service in TrueCommand and then in Google Admin. 

## Overview of the Google Admin and TrueCommand SAML Service Configuration Process

To configure Google Admin as the IdP, you must:

* Create a new App for SAML 
* Configure the SAML app properties to act as the IdP service. 
* Add the TrueCommand IP and port number as the ACS URL.
* Configure the SAML app LDAP attributes properties

After you configure SAML in Google Admin you then configure and start TrueCommand SAML service.

## Configuring a Google Admin SAML App

1. Open Google Admin and go to **Apps > Web and mobile apps**.
   
   ![GASelectWebandMobileApps](/images/SAML/GASelectWebandMobileApps.jpg "GA Select Web and Mobile Apps")
    
2. Click **Add App**, then select **Add custom SAML app** to open the **App details** screen.

   ![GAClickAddApp](/images/SAML/GAClickAddApp.jpg "GAClickAddApp")
    
3. Configure the SAML app details. 
   
   ![GAAddCustomSAMLAppDetailsCropped](/images/SAML/GAAddCustomSAMLAppDetailsCropped.jpg "GA Add Custom SAML App Details Cropped")
   
   a. Type any name you want to use in the **App Name** field. This example uses *tcsaml*.
   
   b. Upload any picture or avatar you want to use into the **App icon** area to identify the app in your Google Admin account.
   
   c. Click **CONTINUE.** to view the **Google Identity Provider** screen. 

   d. Click **CONTINUE** again to view the **Service Provider details** screen.

4. Configure the service provider details. 
   
   ![GAAddCustomSAMLAppAddServiceProviderDetailsCropped](/images/SAML/GAAddCustomSAMLAppAddServiceProviderDetailsCropped.jpg "GA Add Custom SAML App Add Service Provider Details Cropped")
    
   a. Enter the TrueCommand login URL http://*IP:PORT*/saml/acs in the **ACS Url** field. 
      *IP:PORT* is your TrueCommand system IP and port address.
   
   b. Type any name you want into the **Entity ID** field (ex. truecommand-saml).
   
   c. Type the https://*IP:PORT*/saml/helloURL into the **Start URL** field. 
      *IP:PORT* is your TrueCommand system IP and port address. 

   d. Set **Name ID** format to **PERSISTENT**.
   
      ![GAAddCustomSAMLAppDetailsAddedCropped](/images/SAML/GAAddCustomSAMLAppDetailsAddedCropped.jpg "GA Add Custom SAML App Details Added Cropped")

   e. Set **Name ID** to **Basic Information > Primary Email**.
   
   f. Click **CONTINUE** to view the **Attribute Mapping** screen.
   
      ![GAAddCustomSAMLAppAttributeMappingCropped](/images/SAML/GAAddCustomSAMLAppAttributeMappingCropped.jpg "GAA dd Custom SAML App Attribute Mapping Cropped")

   g. Enter the **Attributes**. 
      Select the attribute using the **Google Directory attributes** dropdown menus, then type the attributes exactly as they are in the table below into the **App attributes** fields:
      
      | Parameter | Value |
      |-----------|-------|
      | E-Mail-Addresses | email |
      | Display-Name | given_name |
      | User-Principal-Name | unique_name |
      | Telephone-Number | telephoneNumber |
      | Title | title |
   
   h. Click **FINISH**.

5. Verify the information is correct. 
   Select **TEST SAML LOGIN** in the **tcsaml** area on the left side of the screen to open the **TrueCommand SAML Test** screen.

   ![GAAddCustomSAMLAppTrueCommandSAMLTestCropped](/images/SAML/GAAddCustomSAMLAppTrueCommandSAMLTestCropped.jpg "GA Add Custom SAML App TrueCommand SAML Test Cropped")
    
6. Download the metadata.
   
   ![GASAMLAppDownloadMetadataCropped](/images/SAML/GASAMLAppDownloadMetadataCropped.jpg "GA SAML App Download Metadata Cropped")
   
   a. Select **DOWNLOAD METADATA** to open the **Download Metadata** window. 
   
   b. Click **DOWNLOAD METADATA** again. When complete, click **CLOSE**.
      
      ![GAAddCustomSAMLAppDownloadMetaDataWindowCropped](/images/SAML/GAAddCustomSAMLAppDownloadMetaDataWindowCropped.jpg "GA Add Custom SAML App Download MetaData Window Cropped")

7. Verify user access details. 
   
   a. Click **View Details** under **User access** to display the **Service status** details.
      
      ![GASAMLAppClickViewDetailsCropped](/images/SAML/GASAMLAppClickViewDetailsCropped.jpg "GA SAML App Click View Details Cropped")
   
   b. Select **ON for everyone** and click **SAVE**.
      
      ![GASAMLAppSetServiceStatusOnForEveryoneCropped](/images/SAML/GASAMLAppSetServiceStatusOnForEveryoneCropped.jpg "GA SAML App Set Service Status On For Everyone Cropped")
      
      If you want granular user control, use this area to set it.
   
8. Wait up for approximately 10-20 minutes for Google to populate all settings through its servers

## Configuring and Starting TrueCommand SAML Service

1. Log into TrueCommand as an administrator.

2. Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> button on the top toolbar. 
   Click **Administration**. Click **Configure** in the **Configuration** widget. 
   The **Configuration** screen with the editable settings displays. Scroll down to **SAML settings**. 

3. Enter the Google Admin XML metadata file into the **SAML Identity Provider Metadata XML Upload** field, then click **Save**.

5. Select **Start the SAML service** to enable the service, and click **Save** again.

6. Log out of TrueCommand UI.

7. Login now using the **SAML Login** option.

{{< taglist tag="tcsaml" limit="10" >}}