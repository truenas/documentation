---
title: "Configuring Google Admin as SSO for TrueCommand SAML Service"
description: "Provides detailed instructions on setting up Google Admin as SSO for TrueCommand SAML service."
weight: 45
aliases:
tags:
- tcsaml
---

{{< toc >}}

TrueCommand allows identity provider (IDP) SAML SSO configuration as of release 2.3.3.
With IDP-SAML you can configure a service provider such as Google Admin to provide TrueCommand single sign-on (SSO) through the Google Admin dashboard instead of using the TrueCommand SAML sign-in option. 

Security Assertion Markup Language (SAML) is a single sign-on (SSO) standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
Single Sign-on (SSO) works by transferring a known identity for a user to another location that provides services to the user. 
SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IdP) and Service Provider (SP). Google Admin is an example of both an IdP and an SP. 

This article provides instructions for configuring Google Admin as the IDP providing SSO for TrueCommand as a cloud service provider. 
These instructions are similar to configuring Google Admin as just the IdP to TrueCommand but involves different Google Admin settings and screens.

{{< hint type=ok >}}
TrueCommand IDP SAML does not support groups at this time.
{{< /hint >}}
## Activating TrueCommand SAML Service

Use these instructions to set up Google Admin SAML-based SSO for TrueCommand. 
Instructions cover TrueCommand and Google Admin configuration. 

Refer to [Set Up Your Own Custom SAML Application](https://support.google.com/a/answer/6087519?hl=en&ref_topic=7559288) for more information on Google Admin configuration options.

## Overview of the Google Admin IDP SAML SSO Configuration Process

To configure Google Admin as the IdP and to act as the SSO for TrueCommand, you:

1. [Create a new custom application](#configuring-a-custom-saml-application-in-google-admin) for SAML. 
   Configure the SAML app properties to act as the IdP service and serve as single sign-on for TrueCommand.
   Configure the SAML app LDAP attributes properties

2. [Turning On the SAML Service](#turning-on-the-google-saml-app) 
 
3. [Verifying SAML and SSO works](#verify-sso-works). After you configure SAML in Google Admin, you configure and start the TrueCommand SAML service. 

4. [Configure TrueCommand for SAML](#activating-truecommand-saml-service). 

It can take Google up to 24 hours to activate the SAML configuration but can happen more quickly.

## Configuring a Custom SAML Application in Google Admin
Sign into Google Admin as a super administrator, then create the new custom application:

1. Open Google Admin and go to **Apps > Web and mobile apps**.
   
   {{< trueimage src="/images/SAML/GASelectWebandMobileApps.png" alt="GA Select Web and Mobile Apps" id="1 GA Select Web and Mobile Apps" >}}
    
2. Click **Add App**, then select **Add custom SAML app** to open the **App details** screen.

   {{< trueimage src="/images/SAML/GAClickAddApp.png" alt="GA Click Add App" id="2 GA Click Add App" >}}

3. Configure the SAML app details. On the **App Details** screen:
   
   {{< trueimage src="/images/SAML/GAAddCustomSAMLAppDetailsCropped.png" alt="GA Add Custom SAML App Details Cropped" id="3 GA Add Custom SAML App Details Cropped" >}}
   
   a. Enter the name you want to use in **App Name**. This example uses *tcsaml*.
   
   b. Upload a picture or the TrueCommand icon in **App icon**. This identifies the app in your Google Admin account.
   
   c. Click **CONTINUE.** to view the **Google Identity Provider** screen. 

4. Copy or download the setup information you need for TrueCommand and the SSO configuration.

   a. Download the IDP metadata.

   b. Copy the SSO URL and entity ID.

   c. Download the certificate.
   
   d. Click **CONTINUE** to view the **Service Provider details** screen.

5. Configure the service provider details. URLs must start with https://.
   
   {{< trueimage src="/images/SAML/GAAddServiceProviderDetailsCropped.png" alt="GA Add Service Provider Details Cropped" id="4 GA Add Service Provider Details Cropped" >}}
    
   a. Enter the TrueCommand login URL https://*IP:PORT*/saml/acs in **ACS Url**. 
      *IP:PORT* is your TrueCommand system IP and port address.
      This URL is responsible for receiving the SAML response.
   
   b. Enter the name you want into the **Entity ID** field (ex. *truecommand-saml*).
   
   c. (Optional) Enter the https://*IP:PORT*/saml/helloURL into **Start URL**. 
      This is the RelayState parameter in a SAML request and can be a URL to redirect to after authentication.
      *IP:PORT* is your TrueCommand system IP and port address. 

   d. Set **Name ID** format to **PERSISTENT**.
   
   {{< trueimage src="/images/SAML/GAAddCustomSAMLAppAddServiceProviderDetailsCropped.png" alt="GA Add Custom SAML App Details Added Cropped" id="5 GA Add Custom SAML App Details Added Cropped" >}}

   e. Set **Name ID** to **Basic Information > Primary Email**. Multi-value input is not supported by Google Admin.
   
   f. Click **CONTINUE** to view the **Attribute Mapping** screen.
   
   {{< trueimage src="/images/SAML/GAAddCustomSAMLAppAttributeMappingCropped.png" alt="GA App Attribute Mapping Cropped" id="6 GA App Attribute Mapping Cropped" >}}

      Enter the **Attributes**. 
      Select the attribute using the **Google Directory attributes** dropdown menus, then type the attributes exactly as they are in the table below into the **App attributes** fields:
      
	  {{< truetable >}}
      | Parameter | Value |
      |-----------|-------|
      | E-Mail-Addresses | email |
      | Display-Name | given_name |
      | User-Principal-Name | unique_name |
      | Telephone-Number | telephoneNumber |
      | Title | title |
      {{< /truetable >}}
	  
   h. Click **Finish**.

### Turning on the Google SAML App

While logged in as a super administrator, go to **Apps > Web and mobile apps**:

1. Select the new SAML app for TrueCommand.

2. Click **User access**.  Verify user access details. 
   
   a. Click **View Details** to display the **Service status** details.
      
   {{< trueimage src="/images/SAML/GASAMLAppClickViewDetailsCropped.png" alt="GA SAML App Click View Details Cropped" id="7 GA SAML App Click View Details Cropped" >}}
   
   b. Select **ON for everyone** and click **SAVE**.
      
   {{< trueimage src="/images/SAML/GASAMLAppSetServiceStatusOnForEveryoneCropped.png" alt="GA SAML App Set Service Status On For Everyone Cropped" id="8 GA SAML App Set Service Status On For Everyone Cropped" >}}
      
      If you want granular user control, use this area to set it.

      (Optional) Turn a service on or off for an organizational unit, select the organizational unit and change the service status to **On** or **Off**. 
      Set the service for an organizational unit to either inherit or not inherit parent settings. 

      Groups are not supported so you cannot turn on a service for as set of users across or within an organizational unit.

3. Ensure that the email address for the admin user that signs into SAML application matches the email used to sign into the Google domain.
   
4. Click **Save**.
   
   Wait up for approximately 10-20 minutes for Google to populate all settings through its servers

### Verify SSO Works

Go to **Apps > Web and mobile apps**, select the TrueCommand SAML app.

Select **Test SAML Login** on the left side of the screen to open the **TrueCommand SAML Test** screen in a separate tab.

{{< trueimage src="/images/SAML/GAAddCustomSAMLAppTrueCommandSAMLTestCropped.png" alt="GA Add Custom SAML App TrueCommand SAML Test Cropped" id="9 GA Add Custom SAML App TrueCommand SAML Test Cropped" >}}
    
## Configuring and Starting TrueCommand SAML Service

1. Log into TrueCommand as an administrator.

2. Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> button on the top toolbar. 
   Click **Administration** to display the **Administration** screen, then click **Configure** in the **Configuration** widget. 
   The **Configuration** screen with the editable settings displays. Scroll down to **SAML settings**. 

3. Enter the SSO URL and entity ID copied in step 4 in [Configuring a Custome SAML Application in Google Admin](#configuring-a-custom-saml-application-in-google-admin).

4. Enter the Google Admin metadata file into the **SAML Identity Provider Metadata XML Upload** field.

5. Click **Save**.

5. Select **Start the SAML service** to enable the service, and click **Save** again.

6. Log out of TrueCommand UI.

{{< taglist tag="tcsaml" limit="10" title="Related SAML Articles" >}}