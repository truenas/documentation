---
title: "How to Recover from an Invalid Certificate"
---

## DESCRIPTION

After updating to 9.10, the old style of self signed certificates in 9.3 will no longer work. This is due to a minor 9.3 bug that was fixed in the 9.10 update, but can prevent access to the web GUI in some web browsers.

## ISSUE

After updating to 9.10, an invalid certificate error occurs in the web browser, blocking entry to the web GUI. When a certificate is self-signed by an internal CA, it is flagged as invalid or insecure, as web browsers by default only trust certificates that are signed by external CAs like Verisign. To prevent this issue, remove all internal CAs and internal certificates before updating to 9.10. If the update was already performed, the fix is to temporarily disable HTTPS from the *Shell* to make the web GUI accessible.

## FIX

To regain web GUI access to a system containing an invalid certificate, HTTPS must first be disabled from the *Shell* so that the invalid certificate can be removed and replaced using the web GUI. The *Shell* can be accessed from the Console Setup menu which appears at the end of the boot process. If the SSH service has been enabled, it can also be used.

1. Once in the Shell, set the GUI protocol to *HTTP* by entering the following command:
  `sqlite3 /data/freenas-v1.db “update system_settings set stg_guiprotocol = ‘http’;”`
This will configure the FreeNAS system to boot without using a certificate.

2. The next step is to reboot the system. Enter `exit` to leave the Shell, then enter `13` from the menu. Enter `y` to confirm reboot.

3. Log in to the web GUI, ensuring `http://` is at the beginning of the URL.

4. To delete the 9.3 CA and certificates, go to *System > CAs*.

![System CAs](/images/CORE/12.0/SystemCAs.png "System CAs")
<br><br>

4.1 Select the old CA by clicking on it.

![System CA Delete](/images/CORE/12.0/SystemCAsDelete.png "System CA Delete")
<br><br>

4.2 Click **Delete** at the bottom of the screen to remove the internal CA and its certificates.

5. To create the new internal CA, click **Create Internal CA**.

![System CA Create Internal](/images/CORE/12.0/SystemCAsCreateInternal.png "System CA Create Internal")
<br><br>

5.1 From the configuration screen, enter the information for the internal CA.

![System CA Create Internal Options](/images/CORE/12.0/SystemCAsCreateInternalOptions.png "System CA Create Internal Options")
<br><br>

5.2 Click **OK** to save.

6. To create the new self-signed certificate, go to *System > Certificates*.

![System Certificates Create Internal](/images/CORE/12.0/SystemCertificatesCreateInternal.png "System Certificates Create Internal")
<br><br>

6.1 Click **Create Internal Certificate**.

6.2 From the configuration screen, use the *Signing Certificate Authority* drop-down menu to select the new internal CA.

![System Certificates Create Internal Options](/images/CORE/12.0/SystemCertificatesCreateInternalOptions.png "System Certificates Create Internal Options")
<br><br>

6.3 Fill in the fields that apply. The domain name or hostname of the system must be used in the *Common Name* field. Click **OK** to save.

7. To enable HTTPS with the new certificate, go to *System > General*.
8. 
![System General](/images/CORE/12.0/SystemGeneral.png "System General")
<br><br>

7.1 Select **HTTPS** from the *Protocol* drop-down menu.

![System General Set Protocol Certificate](/images/CORE/12.0/SystemGeneralSetProtocolCertificate.png "System General Set Protocol Certificate")
<br><br>

7.2 Select the new certificate from the drop-down menu. Click **Save**.

7.3 Refresh the web browser to ensure HTTPS is enabled.

8. To save the updated 9.10 configuration, go to *System -> General*.

![System General Save Config](/images/CORE/12.0/SystemGeneralSaveConfig.png "System General Save Config")
<br><br>

8.1 Click **Save Config**.
