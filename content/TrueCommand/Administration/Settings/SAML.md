---
title: "Configuring TrueCommand SAML"
geekdocCollapseSection: true
weight: 40
---

{{< toc >}}

This article describes how to configure TrueCommand SAML using either Active Directory (AD) to authenticate users or Google Admin.

Security Assertion Markup Language (SAML) is a single sign-on (SSO) standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
Single Sign-on (SSO) works by transferring a user’s known identity to another location that provides services to the user. SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IdP) and Service Provider (SP). Active Directory is an example of an IdP. 

## Activating TrueCommand SAML Service 

{{< tabs "Methods" >}}
{{< tab "Active Directory" >}}

Log in to your TrueCommand system (i.e., server, container, VM). Go to **Config > Administration** and then click on the **Configuration** tab.

Enter http://ds.*yourcompany.net*/FederationMetadata/2007-06/FederationMetadata.xml in the **SAML Identity Provider URL** field, then click **Save**. The URL is from Active Directory.

Click **Start the SAML service** checkbox and click **Save** to start the service.

Log out of TrueCommand.

## Configuring Active Directory FS for SAML

To configure AD as the IdP, you must create and modify a Relying Party Trust. After accessing the server hosting AD, you must:

* Create an AD FS Relying Party Trust.

* Download and modify your TrueCommand system's certificate. Each TrueCommand has a unique certificate you must use for the configuration to work. 

* Configure the TrueCommand URL in Active Directory as a trusted URL

* Configure the identifiers.

* Modify the Relying Party Trust properties to add and edit endpoints.

* Configure the Claim Issuance Policy to add the incoming and outgoing claim types. 

Each of these top-level steps are described in detail in the example provided below.

## Setting Up TrueCommand and AD SAML Service

This procedure assumes the Windows administrator user is QE. Substitute your system addresses (URLs,IP address, port number, names, etc.) where variables are present.

1. Access theTrue Command web interface via http://IP:PORT where IP:PORT is the IP address and port number assigned to your TrueCommand system. 

2. Go to Config > Administration and select the Configuration tab.

   a. Enter http://ds.yourcompany.net/FederationMetadata/2007-06/FederationMetadata.xml in the SAML Identity Provider URL field, then click Save. The URL is from Active Directory.

   b. Click Start the SAML service checkbox and click **Save** to start the service.

3. Log out of TrueCommand

## Configure your Active Directory Server (Identity Server for SAML service)

1. Log into your Microsoft AD system as the Windows administrator user (e.g. *QE* which is the example name for the administrator user in this example procedure).

2. Create an AD FS Relying Party Trust. Go to Tools and select AD FS Management. 

   a. Go to Trust Relationships > Relying Party Trusts and then delete any entries found. 
      Each TrueCommand has a unique certificate. To be certain you have the correct certificate for your TrueCommand, delete existing certificates and obtain a new one.

   b. Select Add Relying Party Trust on the AD FS menu. The Add Relying Party Trust Wizard displays. Click **Start**.

      ![AddRelyingPartyTrustWizardWelcome](/images/SAML/AddRelyingPartyTrustWizardWelcome.png "Add Relying Party Trust Wizard Welcome")
      

   c. Select Enter data about the relying party manually and then click Next.

      ![WizardSelectEnterDataAboutRelyingPartyManuallyCropped](/images/SAML/WizardSelectEnterDataAboutRelyingPartyManuallyCropped.png "Wizard Select Enter Data About Relying Party Manually Cropped")

   d. Enter the name for the Relying Party Trust in the Display Name field. For this example we use QE SAML as the new Relying Party Trust name. QE is the Windows administrator name and SAML as the service name.
      
      ![WizardTypeDisplayNameCropped](/images/SAML/WizardTypeDisplayNameCropped.png "Wizard Type Display Name Cropped")
   
   e. Click **Next**. The Configure Certificate window displays.

3. Modify the TrueCommand Certificate (tc.cer).

   a. Open PowerShell and type Invoke -webRequest -uri http://IP:PORT/saml/metadata -outfile tc.cer where IP:PORT is your TrueCommand system’s IP address/port number.

      ![OpenPowershellTypeInvokeCommand](/images/SAML/OpenPowershellTypeInvokeCommand.png "Open Powershell Type Invoke Command")

   b. Edit the certificate as follows:

      1. Open a file Explorer window and locate the tc.cer file in c:/local data/user/QE.
    
         ![LocateTcCertificateWithFileExplorer](/images/SAML/LocateTcCertificateWithFileExplorer.png "Locate TC Certificate With File Explorer")
        
      2. Select the tc.cer file, right click and select Open with Notepad.
      3. Delete everything before the <x509Certificate> tag, and everything after the </x509Certificate> tag.

         ![OpenTcCertificate](/images/SAML/OpenTcCertificate.png "OpenTcCertificate")
        
      4. Type the following string exactly as `-----BEGIN CERTIFICATE-----` before the certificate with five dashes before and after..
      5. Type the following string exactly as `-----END CERTIFICATE-----` after the certificate with five dashes before and after.[insert image 08b EditedTcCertificate
      6. Select Save (or Ctrl-S) and then close Notepad.

   c. Close Powershell.
   d. Select Browse on the Configure Certificate window. The Encryption Certificate window opens. 

      ![WizardConfigureCertificateSelectBrowseCropped](/images/SAML/WizardConfigureCertificateSelectBrowseCropped.png "Wizard Configure Certificate Select Browse Cropped")
    
   e. Locate the tc.cer file (c:/local disk/users/QE and then select the tc file. Click Open. The Configure Certificate window displays information about the certificate. Click **Next** and the Configure URL window displays.

4. Configure the URL. On the Configure URL window:

   a. Select Enable support for the SAML 2.0 webSSO protocol. 
        
   ![WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped](/images/SAML/WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped.png "Wizard Select Enable Support For SAML 2.0 Web SSO Protocol Cropped")
        
   b. Type or copy/paste the TrueCommand login URL http://IP:PORT/saml/acs in the Relying party SAML 2.0 SSO service URL field. Where IP:PORT is your TrueCommand system IP and port address.
   c. Click **Next**. The Configure Identifiers window displays.

5. Configure the SAML identifiers.

   a. Type truecommand-sml into the Relying party trust identifier field and click Add.

   ![WizardConfigureIdentifiersTypeNameCropped](/images/SAML/WizardConfigureIdentifiersTypeNameCropped.png "Wizard Configure Identifiers Type Name Cropped")
        
   b. Click **Next**. The Choose Access Control Party window displays. 
   c. Click **Next**. The Ready to Add Trust window displays. Click **Next** and then click **Finish**. 

   ![WizardClickFinishCropped](/images/SAML/WizardClickFinishCropped.png "Wizard Click Finish Cropped")

6. Modify the newly-created Relying Party Trust.

   a. Select the new SAML Relying Party Trust and then select Properties on the Actions menu displayed on the right side of the screen. The Properties window displays. 

   ![SelectRelyingPartyTrustAndProperties](/images/SAML/SelectRelyingPartyTrustAndProperties.png "Select Relying Party Trust And Properties")
        
   b. Select the Endpoints tab and click **Edit**. The Edit Endpoint window displays.
   c. Change the Index value to 1 and click **OK**. 

   ![EditPropertiesEndpointsChangeIndexValueCropped](/images/SAML/EditPropertiesEndpointsChangeIndexValueCropped.png "Edit Properties Endpoints Change Index Value Cropped")
       
   d. Click the **Add SAML** button. The Add Endpoint window displays.
   e. Type or use copy/paste to input the TrueCommand URL http://IP:PORT/saml/slo in the Trusted URL field.

   ![EditPropertiesEndpointsEnterTrustedURLSLOCropped](/images/SAML/EditPropertiesEndpointsEnterTrustedURLSLOCropped.png "Edit Properties Endpoints Enter Trusted URL SLO Cropped")
        
   f. Click **OK**, **Apply**, and then **OK**.

7. Configure the Claim Issuance Policy.

   a. Select *Edit Claim Issuance Policy* on the Actions menu. The Edit Claim Issuance Policy for QE SAML window displays. Note the QE SAML is the name you gave your new SAML Relying Party Trust in the preceding steps.

   ![EditQESAMLClaim IssuancePolicyWindowCropped](/images/SAML/EditQESAMLClaimIssuancePolicyWindowCropped.png "Edit QE SAML Claim Issuance Policy Window Cropped")
        
   b. Click **Add Rule** and select *Transform an Incoming Claim*, and then **click Next**. 

   ![EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped](/images/SAML/EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped.png "Edit Claim Issuance Policy Add Rule Transform An Incoming Claim Cropped")
        
   c. Click the down arrow for the Incoming claim type field and select Windows account type on the list of displayed options.
   d. Click the down arrow for the Outgoing claim type field and select Name ID on the list of displayed options.
   e. Select Persistent Identifier on the Outgoing name ID format list. Click Finish.

   ![EditClaimIssuancePolicySetPersistentIdentifierCropped](/images/SAML/EditClaimIssuancePolicySetPersistentIdentifierCropped.png "Edit Claim Issuance Policy Set Persistent Identifier Cropped")
        
   f. Click **Add Rule** to add a new rule. 
   g. Select Send LDAP Attributes as claims (the default choice) and click Next. 

   ![EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped.png "Edit Claim Issuance Policy Add Rule Send LDAP Attributes Cropped")
        
   h. Select Active Directory as Attribute Store to map attributes. Type the attributes exactly as below: 

   ![EditClaimIssuancePolicyAddLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddLDAPAttributesCropped.png "Edit Claim Issuance Policy Add LDAP Attributes Cropped")

   | Parameter | Value |
   |---|---|
   | E-Mail-Addresses | email |
   | Display-Name | given_name |
   |User-Principal-Name | unique_name |
   | Telephone-Number | telephoneNumber |
   | Title | title |

   i. Click **Finish**, **Apply**, and **OK**.

8. Close Active Directory.

9. Go to the TrueCommand login page and use the **SAML Login**.

{{< /tab >}}
{{< tab "Google Admin" >}}


To configure Google Admin as the IdP, you must:

 • Create a new App for SAML 
 • Configure the SAML app properties to act as the IdP service. 
 • Add the TrueCommand IP and port number as the ACS URL.
 • Configure the SAML app LDAP attributes properties

These top-level steps are described in detail in the example procedure provided below.

## Activating TrueCommand SAML Service for Google Admin

After configuring SAML in Google Admin, log into your TrueCommand system (i.e., server, container, VM). Go to Config > Administration and then click on the Configuration tab. Scroll down to the SAML settings section.

Enter the XML metadata  file from Google Admin in the  SAML Identity Provider Metadata XML Upload field. After uploading, click Save.

Click Start the SAML service checkbox and click Save to start the service.

Log out of TrueCommand.

## Configuring a Google Admin SAML App

1. Open Google Admin and go to Apps > Web and mobile apps

   ![GASelectWebandMobileApps](/images/SAML/GASelectWebandMobileApps.jpg "GA Select Web and Mobile Apps")
    
2. Click Add App and select Add custom SAML app.The Add custom SAML app screen App details screen displays. 

   ![GAClickAddApp](/images/SAML/GAClickAddApp.jpg "GAClickAddApp")
    
3. Configure the SAML app screen settings. 

   ![GAAddCustomSAMLAppDetailsCropped](/images/SAML/GAAddCustomSAMLAppDetailsCropped.jpg "GA Add Custom SAML App Details Cropped")
    
   a. Type any name you want to use in the App Name field. This example uses tcsaml.
   b. Upload any picture or avatar you want to use into the App icon area to identify the app in your google admin account.
   c. Click **CONTINUE.** The Google Identity Provider details screen displays. 

4. Click **CONTINUE**. The Service provider details screen displays.

5. Configure the service provider details. 
    
   ![GAAddCustomSAMLAppAddServiceProviderDetailsCropped](/images/SAML/GAAddCustomSAMLAppAddServiceProviderDetailsCropped.jpg "GA Add Custom SAML App Add Service Provider Details Cropped")
    
   a. Type or copy/paste the TrueCommand login URL http://IP:PORT/saml/acs in the into the ACS Url field. Where IP:PORT is your TrueCommand system IP and port address. 
   b. Type any name you want to use into the Entity ID field. For example, truecommand-saml.
   c. Type the https://IP:PORT/saml/helloURL into the Start URL field. Where IP:PORT is your TrueCommand system IP and port address.
   d. Set Name ID format to PERSISTENT.

   ![GAAddCustomSAMLAppDetailsAddedCropped](/images/SAML/GAAddCustomSAMLAppDetailsAddedCropped.jpg "GA Add Custom SAML App Details Added Cropped")
    
   e. Set Name ID to Basic Information > Primary Email.
   f. Click **CONTINUE**. The Attribute Mapping screen displays.

   ![GAAddCustomSAMLAppAttributeMappingCropped](/images/SAML/GAAddCustomSAMLAppAttributeMappingCropped.jpg "GAA dd Custom SAML App Attribute Mapping Cropped")
    
   g. Enter the Attributes. Select the attribute using the Google Directory attributes dropdown menus and then type the attributes exactly as below into the App attribute fields:

   | Parameter | Value |
   |---|---|
   | E-Mail-Addresses | email |
   | Display-Name | given_name |
   |User-Principal-Name | unique_name |
   | Telephone-Number | telephoneNumber |
   | Title | title |

   h. Click **FINISH**.

6. Verify the information is correct. Select TEST SAML LOGIN in the tcsaml area on the left side of the screen and where tcsaml is the name of the SAML app you set up. The TrueCommand SAML Test screen displays.

   ![GAAddCustomSAMLAppTrueCommandSAMLTestCropped](/images/SAML/GAAddCustomSAMLAppTrueCommandSAMLTestCropped.jpg "GA Add Custom SAML App TrueCommand SAML Test Cropped")
    
7. Download the metadata.

   ![GASAMLAppDownloadMetadataCropped](/images/SAML/GASAMLAppDownloadMetadataCropped.jpg "GA SAML App Download Metadata Cropped")
 
   a. Select **DOWNLOAD METADATA**. The Download Metadata window displays. 
   b. Click **DOWNLOAD METADATA**. When complete click the CLOSE button.

   ![GAAddCustomSAMLAppDownloadMetaDataWindowCropped](/images/SAML/GAAddCustomSAMLAppDownloadMetaDataWindowCropped.jpg "GA Add Custom SAML App Download MetaData Window Cropped")
    
8. Verify user access details. 

   a. Click on **View Details** under User access. The Service status details display. 

   ![GASAMLAppClickViewDetailsCropped](/images/SAML/GASAMLAppClickViewDetailsCropped.jpg "GA SAML App Click View Details Cropped")
        
   b. Select the On for everyone radio button in the Service status area and click SAVE.

   ![GASAMLAppSetServiceStatusOnForEveryoneCropped](/images/SAML/GASAMLAppSetServiceStatusOnForEveryoneCropped.jpg "GA SAML App Set Service Status On For Everyone Cropped")
         
   Note, if you want granular user control use this area to set it.
   
9. Wait up for approximately 10-20 minutes for Google to populate all settings through its servers

## Configuring TrueCommand for SAML Service 

1. Log into TrueCommand as an administrator.
2. Click the wheel icon  <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the top toolbar, select Administration and then the Configuration tab. Scroll down to the SAML settings. 
3. Upload file to True Command using the SAML Identity Provider Metadata XML File Upload box.
4. Save after uploading.
5. Then click the Start the SAML service checkbox to enable the service, and click Save again.
6. Log out of TrueCommand.
7. Log in with the SAML Login.
    
{{< /tab >}}
