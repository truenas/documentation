---
title: "Configuring TrueCommand SAML Service for Active Directory"
description: "This article provides detailed instructions on setting up SAML service in TrueCommand and Active Directory."
weight: 45
tags:
 - tcsaml
---

{{< toc >}}

Security Assertion Markup Language (SAML) is a single sign-on (SSO) standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
Single Sign-on (SSO) works by transferring a known identity for a user to another location that provides services to the user. SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IdP) and Service Provider (SP). Active Directory is an example of an IdP. 

## Activating TrueCommand SAML Service

This article provides instructions for setting up SAML service in TrueCommand and then in Active Directory. 

## Setting up SAML in TrueCommand

1. Log in to your TrueCommand system (i.e., server, container, VM). 
   To access the TrueCommand web interface, enter https://*IP:PORT* where *IP:PORT* is the IP address and port number assigned to your TrueCommand system, into a web browser URL field and then press <kbd>Enter</kbd>. 

2. Go to **Settings > Administration**, then click on **Configure** in the **Configuration** widget. 
   The **Configuration** screen with editable settings displays.

   {{< hint type=tip >}}
   The **SSL Options** on the **Configuration** settings form has **Accept self-signed certificates** selected by default. 
   Keep this setting to be able to use a self-signed certificate. It also helps prevent issues with HTTP versus HTTPS URLs.
   {{< /hint >}}

3. Enter the URL from Active Directory.
   Enter https://*ds.yourcompany.net*/FederationMetadata/2007-06/FederationMetadata.xml in the **SAML Identity Provider URL** field, then click **Save**. 

   ![TC2.2SAMLSettings](/images/SAML/TC2.2SAMLSettings.png "TrueCommand SAML Service Settings")

4. Click **Configure** again, scroll down and select **Start the SAML service**, then click **Save** to start the service.

5. Click **Configure** again, click **DOWNLOAD SERVICE PROVIDER METADATA**. 
   Test the service as described in the detailed steps by entering the metadata file from Active Directory in the **SAML Identity Provider URL field**.

6. Log out of TrueCommand.

## Overview of the SAML Active Directory FS Configuration Process

To configure AD as the IdP, you must create a Relying Party Trust and then modify the properties of that relying party trust. 
After accessing the server hosting AD, you must:

* Create an AD FS Relying Party Trust.

* Download and modify your TrueCommand system certificate. 
  Each TrueCommand has a unique certificate you must use for the configuration to work. 

* Configure the TrueCommand URL in Active Directory as a trusted URL

* Configure the identifiers.

* Modify the Relying Party Trust properties to add and edit endpoints.

* Configure the Claim Issuance Policy to add the incoming and outgoing claim types. 

This process is described in the next section.

## Configuring Active Directory as an Identity Server for SAML Service

1. Log into your Active Directory server as an administrator user (*QE* is the administrator user in this example procedure).

2. Create an AD FS Relying Party Trust. Go to **Tools** and select **AD FS Management**. 

   a. Go to **Trust Relationships > Relying Party Trusts** and then delete any entries found. 
      Each TrueCommand has a unique certificate. To ensure you have the correct TrueCommand certificate, delete existing certificates and then obtain a new one.

   b. Select **Add Relying Party Trust** on the **AD FS** to open the **Add Relying Party Trust Wizard**. Click **Start**.
      
      ![AddRelyingPartyTrustWizardWelcome](/images/SAML/AddRelyingPartyTrustWizardWelcome.png "Add Relying Party Trust Wizard Welcome")

   c. Select **Enter data about the relying party manually**, then click **Next**.
      
      ![WizardSelectEnterDataAboutRelyingPartyManuallyCropped](/images/SAML/WizardSelectEnterDataAboutRelyingPartyManuallyCropped.png "Wizard Select Enter Data About Relying Party Manually")

   d. <a name=rpt-name></a>Enter the name for the Relying Party Trust in the **Display Name** field. The example uses *QE SAML*. 
      QE is the Windows administrator name, and SAML is the service name.
      
      ![WizardTypeDisplayNameCropped](/images/SAML/WizardTypeDisplayNameCropped.png "Wizard Type Display Name")
   
   e. Click **Next** to move on to the **Configure Certificate** window.

3. Modify the TrueCommand Certificate (<file>tc.cer</file>). 

   a. Open PowerShell and type the command `invoke-webRequest -uri http://IP:PORT/saml/metadata -outfile tc.cer`. 
      *IP:PORT* is your TrueCommand system IP address/port number.

      ![TC2.2PowershellInvokeCommand](/images/SAML/TC2.2PowershellInvokeCommand.png "Open Powershell Type Invoke Command")

   b. Edit the certificate. 

      1. Open a File Explorer window and locate the <file>tc.cer</file> file in <file>C:/local data/user/QE</file>.

         ![LocateTcCertificateWithFileExplorer](/images/SAML/LocateTcCertificateWithFileExplorer.png "Locate TC Certificate With File Explorer")
      
      2. Select the <file>tc.cer</file> file, right-click, then select **Open with Notepad**.

      3. Delete everything before the certificate open tag `<x509Certificate>` and the open tag. 
         Delete any URL immediately following the open tag, and everything after the certificate close tag `</x509Certificate>` and the close tag.
         The only thing that remains is the certificate with no tags at the beginning and end of it.
         
         ![OpenTcCertificate](/images/SAML/OpenTcCertificate.png "OpenTcCertificate")
              
      4. Type this string at the beginning of the certificate, exactly as `-----BEGIN CERTIFICATE-----` with five dashes before and after the text with no spaces. 
     
      5. Type this string at the end of the certificate, exactly as `-----END CERTIFICATE-----` with five dashes before and after the text with no spaces. 
  
         ![EditedTcCertificate](/images/SAML/EditedTcCertificate.png "Edited Tc Certificate")
      
      6. Click **Save** (or <kbd>Ctrl-S</kbd>) and then close Notepad, and then Powershell.

   d. Select **Browse** in the **Configure Certificate** Relying Party Trust Wizard window. 
      The **Encryption Certificate** window opens.

      ![WizardConfigureCertificateSelectBrowseCropped](/images/SAML/WizardConfigureCertificateSelectBrowseCropped.png "Wizard Configure Certificate Select Browse")
   
   e. Locate the <file>tc.cer</file> file (<file>C:/local disk/users/QE</file> and then select the <file>tc.cer</file>).
      Click **Open** to view the **Configure Certificate** window and see information about the certificate. 
      Click **Next** to move on to the **Configure URL** window.

4. Configure the URL. In the **Configure URL** window:

   a. Select **Enable support for the SAML 2.0 WebSSO protocol**. 

      ![WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped](/images/SAML/WizardSelectEnableSupportForSAML2_0WebSSOProtocolCropped.png "Wizard Select Enable Support For SAML 2.0 Web SSO Protocol")

   b. Enter the TrueCommand login URL (http://*IP:PORT*/saml/acs) in the **Relying party SAML 2.0 SSO service URL** field. 
      *IP:PORT* is your TrueCommand system IP and port address.

   c. Click **Next** to continue to the **Configure Identifiers** window.

5. Configure the SAML identifiers. 
   
   a. Type **truecommand-saml** into the **Relying party trust identifier** field and click **Add**.
      
      ![WizardConfigureIdentifiersTypeNameCropped](/images/SAML/WizardConfigureIdentifiersTypeNameCropped.png "Wizard Configure Identifiers Type Name")
   
      b. Click **Next** to move on to the **Choose Access Control Party** window. 
    
      c. Click **Next** again to view the **Ready to Add Trust** window, 
         then click **Next** once more and then select **Close**. 
       
      ![WizardClickFinishCropped](/images/SAML/WizardClickFinishCropped.png "Wizard Click Finish")
       

6. Modify the newly-created Relying Party Trust.

   a. Select the new SAML Relying Party Trust. 
      With it highlighted, select **Properties** in the **Actions** menu on the right side of the screen to open the **Properties** window. 

      ![SelectRelyingPartyTrustAndProperties](/images/SAML/SelectRelyingPartyTrustAndProperties.png "Select Relying Party Trust And Properties")
   
   b. Select the **Endpoints** tab, then click **Edit** to open the **Edit Endpoint** window.

   c. Change the **Index** value to **1** and click **OK**. 
      
      ![EditPropertiesEndpointsChangeIndexValueCropped](/images/SAML/EditPropertiesEndpointsChangeIndexValueCropped.png "Edit Properties Endpoints Change Index Value")

   d. Click the **Add SAML** button to open the **Add an Endpoint** window.

   e. Select **SAML Logout** from the **Endpoint Type** dropdown list and then enter the TrueCommand URL (http://*IP:PORT*/saml/slo) in the **Trusted URL** field.
   
      ![TC2.2-EditPropertiesEndpointsEnterTrustedURLSLO](/images/SAML/TC2.2-EditPropertiesEndpointsEnterTrustedURLSLO.png "Enter Trusted URL SLO")
           
   f. Click **OK**, then **Apply**, and then finally **OK**.

7. Configure the Claim Issuance Policy.

   a. Select **Edit Claim Issuance Policy** in the **Actions** menu to open the **Edit Claim Issuance Policy for QE SAML** window. 
      The QE SAML is the name you gave your new SAML Relying Party Trust in the preceding step 2.d.

    ![EditQESAMLClaim IssuancePolicyWindowCropped](/images/SAML/EditQESAMLClaimIssuancePolicyWindowCropped.png "Edit QE SAML Claim Issuance Policy Window")
         
    b. Click **Add Rule** and select **Transform an Incoming Claim**, then click **Next**. 
      
    ![EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped](/images/SAML/EditClaimIssuancePolicyAddRuleTransformAnIncomingClaimCropped.png "Edit Claim Issuance Policy Add Rule Transform An Incoming Claim")
         
    c. Select **Windows account name** in the **Incoming claim type** drop-down menu.
      
    d. Select **Name ID** in the **Outgoing claim type** drop-down menu.
      
    e. Select **Persistent Identifier** in the **Outgoing name ID format** drop-down menu, then click **Finish**.
       
    ![EditClaimIssuancePolicySetPersistentIdentifierCropped](/images/SAML/EditClaimIssuancePolicySetPersistentIdentifierCropped.png "Edit Claim Issuance Policy Set Persistent Identifier")
         
    f. Click **Add Rule** to add a new rule. 
      
    g. Select **Send LDAP Attributes as Claims** (the default choice) and click **Next**. 

    ![EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddRuleSendLDAPAttributesCropped.png "Edit Claim Issuance Policy Add Rule Send LDAP Attributes")
         
    h. Select **Active Directory** as the **Attribute Store**. Type the attributes exactly as below: 
       
    ![EditClaimIssuancePolicyAddLDAPAttributesCropped](/images/SAML/EditClaimIssuancePolicyAddLDAPAttributesCropped.png "Edit Claim Issuance Policy Add LDAP Attributes")

      | Parameter | Value |
      |-----------|-------|
      | E-Mail-Addresses | email |
      | Display-Name | given_name |
      | User-Principal-Name | unique_name |
      | Telephone-Number | telephoneNumber |
      | Title | title |
      
    i. Click **Finish**, then **Apply**, and finally **OK**.

8. Close **Active Directory**.

## Logging into TrueCommand SAML

Go to the TrueCommand login page and click the **SAML Login** option to log in. Enter your Active Directory user login credentials (for example, *username*@ds.*yourcompany*.net).

{{< taglist tag="tcsaml" limit="10" >}}
