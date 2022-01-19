---
title: "Configuring TrueCommand SAML"
geekdocCollapseSection: true
weight: 40
---

{{< toc >}}

Security Assertion Markup Language (SAML) is a single sign-on (SSO) standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
Single Sign-on (SSO) works by transferring a user’s known identity to another location that provides services to the user. SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IdP) and Service Provider (SP). Active Directory is an example of an IdP. 

## Activating TrueCommand SAML Service

{{< tabs "Methods" >}}
{{< tab "Active Directory" >}}

Log in to your TrueCommand system (i.e., server, container, VM). Go to **Config > Administration**, then click on the **Configuration** tab.

Enter *http://ds.yourcompany.net/FederationMetadata/2007-06/FederationMetadata.xml* in the **SAML Identity Provider URL** field, then click **Save**. The URL is from Active Directory.

Click the **Start the SAML service** checkbox, then click **Save** to start the service.

Log out of TrueCommand.

## Configuring Active Directory FS for SAML

To configure AD as the IdP, you must create and modify a Relying Party Trust. After accessing the server hosting AD, you must:

* Create an AD FS Relying Party Trust.

* Download and modify your TrueCommand system certificate. Each TrueCommand has a unique certificate you must use for the configuration to work. 

* Configure the TrueCommand URL in Active Directory as a trusted URL

* Configure the identifiers.

* Modify the Relying Party Trust properties to add and edit endpoints.

* Configure the Claim Issuance Policy to add the incoming and outgoing claim types. 

The example below describes each top-level step in detail.

## Setting Up TrueCommand and AD SAML Service

This procedure assumes the Windows administrator user is QE. Substitute your system addresses (URLs, IP address, port number, names, etc.) where variables are present.

1. Access the TrueCommand web interface via *http://IP:PORT* where *IP:PORT* is the IP address and port number assigned to your TrueCommand system. 

2. Go to Config > Administration and select the Configuration tab.

   a. Enter *http://ds.yourcompany.net/FederationMetadata/2007-06/FederationMetadata.xml* in the SAML Identity Provider URL field, then click Save. The URL is from Active Directory.

   b. Click the **Start the SAML service** checkbox, then click **Save** to start the service.

3. Log out of TrueCommand

## Configure your Active Directory Server (Identity Server for SAML service)

1. Log into your Microsoft AD system as the Windows administrator user (*QE* is the administrator user in this example procedure).

2. Create an AD FS Relying Party Trust. Go to **Tools** and select **AD FS Management**. 

   a. Go to **Trust Relationships > Relying Party Trusts** and then delete any entries found. 
      Each TrueCommand has a unique certificate. To ensure you have the correct TrueCommand certificate, delete existing certificates and obtain a new one.

   b. Select **Add Relying Party Trust** on the **AD FS** to open the **Add Relying Party Trust Wizard**. Click **Start**.

      ![AddRelyingPartyTrustWizardWelcome](/images/SAML/AddRelyingPartyTrustWizardWelcome.png "Add Relying Party Trust Wizard Welcome")

   c. Select **Enter data about the relying party manually**, then click **Next**.

      ![WizardSelectEnterDataAboutRelyingPartyManuallyCropped](/images/SAML/WizardSelectEnterDataAboutRelyingPartyManuallyCropped.png "Wizard Select Enter Data About Relying Party Manually Cropped")

   d. Enter the name for the Relying Party Trust in the **Display Name** field. For this example, we use *QE SAML*. QE is the Windows administrator name, and SAML is the service name.
      
      ![WizardTypeDisplayNameCropped](/images/SAML/WizardTypeDisplayNameCropped.png "Wizard Type Display Name Cropped")
   
   e. Click **Next** to move on to the **Configure Certificate** window.

3. Modify the TrueCommand Certificate (<file>tc.cer</file>).

   a. Open PowerShell and type `Invoke -webRequest -uri http://IP:PORT/saml/metadata -outfile tc.cer` where *IP:PORT* is your TrueCommand system IP address/port number.

      ![OpenPowershellTypeInvokeCommand](/images/SAML/OpenPowershellTypeInvokeCommand.png "Open Powershell Type Invoke Command")

   b. Edit the certificate as follows:

      i. Open a **File Explorer** window and locate the <file>tc.cer</file> file in **C:/local data/user/QE**.
    
         ![LocateTcCertificateWithFileExplorer](/images/SAML/LocateTcCertificateWithFileExplorer.png "Locate TC Certificate With File Explorer")
        
      ii. Select the <file>tc.cer</file> file, right-click, then select **Open with Notepad**.
      iii. Delete everything before the `<x509Certificate>` tag, and everything after the `</x509Certificate>` tag.

         ![OpenTcCertificate](/images/SAML/OpenTcCertificate.png "OpenTcCertificate")
        
      iv. Type the following string exactly as `-----BEGIN CERTIFICATE-----` before the certificate with five dashes before and after.
      v. Type the following string exactly as `-----END CERTIFICATE-----` after the certificate with five dashes before and after.
      
         ![EditedTcCertificate](/images/SAML/EditedTcCertificate.png "Edited Tc Certificate")
      
      vi. Click **Save** (or <kbd>Ctrl-S</kbd>) and then close **Notepad**.

   c. Close Powershell.

   d. Select Browse on the Configure Certificate window. The Encryption Certificate window opens. 

      ![WizardConfigureCertificateSelectBrowseCropped](/images/SAML/WizardConfigureCertificateSelectBrowseCropped.png "Wizard Configure Certificate Select Browse Cropped")
    
   e. Locate the <file>tc.cer</file> file (**C:/local disk/users/QE** and then select the <file>tc.cer</file>. Click **Open** to view the **Configure Certificate** window and see information about the certificate. Click **Next** to move on to the **Configure URL** window.

4. Configure the URL. In the **Configure URL** window:

   a. Select **Enable support for the SAML 2.0 WebSSO protocol**. 
        
   ![WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped](/images/SAML/WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped.png "Wizard Select Enable Support For SAML 2.0 Web SSO Protocol Cropped")
        
   b. Type or copy/paste the TrueCommand login URL (*http://IP:PORT/saml/acs*) in the **Relying party SAML 2.0 SSO service URL** field. *IP:PORT* is your TrueCommand system IP and port address.

   c. Click **Next** to continue to the **Configure Identifiers** window.

5. Configure the SAML identifiers.

   a. Type *truecommand-sml* into the **Relying party trust identifier** field and click **Add**.

   ![WizardConfigureIdentifiersTypeNameCropped](/images/SAML/WizardConfigureIdentifiersTypeNameCropped.png "Wizard Configure Identifiers Type Name Cropped")
        
   b. Click **Next** to move on to the **Choose Access Control Party** window. 

   c. Click **Next** again to view the **Ready to Add Trust** window, then click **Next** once more and select **Close**. 

   ![WizardClickFinishCropped](/images/SAML/WizardClickFinishCropped.png "Wizard Click Finish Cropped")

6. Modify the newly-created Relying Party Trust.

   a. Select the new SAML Relying Party Trust and then select **Properties** in the **Actions** menu to open the **Properties** window. 

   ![SelectRelyingPartyTrustAndProperties](/images/SAML/SelectRelyingPartyTrustAndProperties.png "Select Relying Party Trust And Properties")
        
   b. Select the **Endpoints** tab, then click **Edit** to open the **Edit Endpoint** window.

   c. Change the **Index** value to *1* and click **OK**. 

   ![EditPropertiesEndpointsChangeIndexValueCropped](/images/SAML/EditPropertiesEndpointsChangeIndexValueCropped.png "Edit Properties Endpoints Change Index Value Cropped")
       
   d. Click the **Add SAML** button to open the **Add an Endpoint** window.

   e. Type or copy/paste the TrueCommand URL *http://IP:PORT/saml/slo* in the **Trusted URL** field.

   ![EditPropertiesEndpointsEnterTrustedURLSLOCropped](/images/SAML/EditPropertiesEndpointsEnterTrustedURLSLOCropped.png "Edit Properties Endpoints Enter Trusted URL SLO Cropped")
        
   f. Click **OK**, **Apply**, and then **OK**.

7. Configure the Claim Issuance Policy.

   a. Select **Edit Claim Issuance Policy** in the **Actions** menu to open the **Edit Claim Issuance Policy for QE SAML** window. The QE SAML is the name you gave your new SAML Relying Party Trust in the preceding steps.

   ![EditQESAMLClaim IssuancePolicyWindowCropped](/images/SAML/EditQESAMLClaimIssuancePolicyWindowCropped.png "Edit QE SAML Claim Issuance Policy Window Cropped")
        
   b. Click **Add Rule** and select **Transform an Incoming Claim**, then click **Next**. 

   ![EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped](/images/SAML/EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped.png "Edit Claim Issuance Policy Add Rule Transform An Incoming Claim Cropped")
        
   c. Select **Windows accoiunt name** in the **Incoming claim type** drop-down menu.

   d. Select **Name ID** in the **Outgoing claim type** drop-down menu.

   e. Select **Persistent Identifier** in the **Outgoing name ID format** drop-down menu, then click **Finish**.

   ![EditClaimIssuancePolicySetPersistentIdentifierCropped](/images/SAML/EditClaimIssuancePolicySetPersistentIdentifierCropped.png "Edit Claim Issuance Policy Set Persistent Identifier Cropped")
        
   f. Click **Add Rule** to add a new rule. 
   g. Select **Send LDAP Attributes as Claims** (the default choice) and click **Next**. 

   ![EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped.png "Edit Claim Issuance Policy Add Rule Send LDAP Attributes Cropped")
        
   h. Select **Active Directory** as the **Attribute Store**. Type the attributes exactly as below: 

   ![EditClaimIssuancePolicyAddLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddLDAPAttributesCropped.png "Edit Claim Issuance Policy Add LDAP Attributes Cropped")

   | Parameter | Value |
   |-----------|-------|
   | E-Mail-Addresses | email |
   | Display-Name | given_name |
   |User-Principal-Name | unique_name |
   | Telephone-Number | telephoneNumber |
   | Title | title |

   i. Click **Finish**, **Apply**, and **OK**.

8. Close **Active Directory**.

9. Go to the TrueCommand login page and use the SAML Login.
{{< /tab >}}
{{< tab "Google Admin" >}}
To configure Google Admin as the IdP, you must:

* Create a new App for SAML 
* Configure the SAML app properties to act as the IdP service. 
* Add the TrueCommand IP and port number as the ACS URL.
* Configure the SAML app LDAP attributes properties

The example procedure below describes these top-level steps in detail. 

## Activating TrueCommand SAML Service for Google Admin

After configuring SAML in Google Admin, log into your TrueCommand system (i.e., server, container, VM). Go to **Config > Administration**, then click the **Configuration** tab. Scroll down to the **SAML settings** section.

Enter the XML metadata file from Google Admin into the **SAML Identity Provider Metadata XML Upload** field, then click **Save**.

Click the **Start the SAML service** checkbox, then click **Save** to start the service.

Log out of TrueCommand.

## Configuring a Google Admin SAML App

1. Open Google Admin and go to **Apps > Web and mobile apps**

   ![GASelectWebandMobileApps](/images/SAML/GASelectWebandMobileApps.jpg "GA Select Web and Mobile Apps")
    
2. Click **Add App**, then select **Add custom SAML app**.

   ![GAClickAddApp](/images/SAML/GAClickAddApp.jpg "GAClickAddApp")
    
3. Configure the SAML app screen settings. 

   ![GAAddCustomSAMLAppDetailsCropped](/images/SAML/GAAddCustomSAMLAppDetailsCropped.jpg "GA Add Custom SAML App Details Cropped")
    
   a. Type any name you want to use in the **App Name** field. This example uses *tcsaml*.
   b. Upload any picture or avatar you want to use into the **App icon** area to identify the app in your Google Admin account.
   c. Click **CONTINUE.** to view the **Google Identity Provider** screen. 

4. Click **CONTINUE** to view the **Service Provider** details screen.

5. Configure the service provider details. 
    
   ![GAAddCustomSAMLAppAddServiceProviderDetailsCropped](/images/SAML/GAAddCustomSAMLAppAddServiceProviderDetailsCropped.jpg "GA Add Custom SAML App Add Service Provider Details Cropped")
    
   a. Type or copy/paste the TrueCommand login URL *http://IP:PORT/saml/acs* into the **ACS Url** field. *IP:PORT* is your TrueCommand system IP and port address. 
   b. Type any name you want into the **Entity ID** field (ex. truecommand-saml).
   c. Type the *https://IP:PORT/saml/helloURL* into the **Start URL** field. *IP:PORT* is your TrueCommand system IP and port address. 
   d. Set **Name ID** format to **PERSISTENT**.

   ![GAAddCustomSAMLAppDetailsAddedCropped](/images/SAML/GAAddCustomSAMLAppDetailsAddedCropped.jpg "GA Add Custom SAML App Details Added Cropped")
    
   e. Set Name ID to **Basic Information > Primary Email**.
   f. Click **CONTINUE** to view the **Attribute Mapping** screen.

   ![GAAddCustomSAMLAppAttributeMappingCropped](/images/SAML/GAAddCustomSAMLAppAttributeMappingCropped.jpg "GAA dd Custom SAML App Attribute Mapping Cropped")
    
   g. Enter the Attributes. Select the attribute using the **Google Directory attributes** drop-down menus and then type the attributes exactly as below into the **App attributes** fields:

   | Parameter | Value |
   |---|---|
   | E-Mail-Addresses | email |
   | Display-Name | given_name |
   | User-Principal-Name | unique_name |
   | Telephone-Number | telephoneNumber |
   | Title | title |

   h. Click **FINISH**.

6. Verify the information is correct. Select **TEST SAML LOGIN** in the **tcsaml** area on the left side of the screen to open the **TrueCommand SAML Test** screen.

   ![GAAddCustomSAMLAppTrueCommandSAMLTestCropped](/images/SAML/GAAddCustomSAMLAppTrueCommandSAMLTestCropped.jpg "GA Add Custom SAML App TrueCommand SAML Test Cropped")
    
7. Download the metadata.

   ![GASAMLAppDownloadMetadataCropped](/images/SAML/GASAMLAppDownloadMetadataCropped.jpg "GA SAML App Download Metadata Cropped")
 
   a. Select **DOWNLOAD METADATA** to open the **Download Metadata** window. 
   b. Click **DOWNLOAD METADATA** again. When complete, click **CLOSE**.

   ![GAAddCustomSAMLAppDownloadMetaDataWindowCropped](/images/SAML/GAAddCustomSAMLAppDownloadMetaDataWindowCropped.jpg "GA Add Custom SAML App Download MetaData Window Cropped")
    
8. Verify user access details. 

   a. Click **View Details** under **User access** to display the **Service status** details.

   ![GASAMLAppClickViewDetailsCropped](/images/SAML/GASAMLAppClickViewDetailsCropped.jpg "GA SAML App Click View Details Cropped")
        
   b. Select **ON for everyone** and click **SAVE**.

   ![GASAMLAppSetServiceStatusOnForEveryoneCropped](/images/SAML/GASAMLAppSetServiceStatusOnForEveryoneCropped.jpg "GA SAML App Set Service Status On For Everyone Cropped")
         
   If you want granular user control, use this area to set it.
   
9. Wait up for approximately 10-20 minutes for Google to populate all settings through its servers

## Configuring TrueCommand for SAML Service

1. Log into TrueCommand as an administrator.
2. Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> button on the top toolbar. Click **Administration**, then select the **Configuration** tab. Scroll down to **SAML settings**. 
3. Upload the file to True Command using the **SAML Identity Provider Metadata XML File Upload** box, then click **Save**.
5. Click the **Start the SAML service** checkbox to enable the service, and click **Save** again.
6. Log out of TrueCommand.
7. Login with the SAML Login.
{{< /tab >}}