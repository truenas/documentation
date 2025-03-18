&NewLine;

TrueNAS applications are available in three catalogs (trains):

<div class="support-cards">
  <div class="support-card enterprise-application">
     <b class="support-title">Enterprise</b>
    <p>Applications validated by TrueNAS Engineering for Enterprise deployment on TrueNAS Enterprise-licensed systems.</p>
    <p>These applications receive either Enterprise Deployment Support or full Enterprise Application Support from the TrueNAS Support team.</p>
  </div>

  <div class="support-card community">
     <b class="support-title">Stable</b>
    <p>Applications tested by the TrueNAS Engineering team and chosen based on their functionality and integration with TrueNAS.</p>
    <p>TrueNAS Engineering can provide software maintenance for these applications, but the TrueNAS Support team does not offer continual support.
    Issues for these applications are <a href="https://github.com/truenas/apps/issues">tracked separately</a> and addressed on a best-effort basis in the <a href="https://forums.truenas.com/">community forums</a> and other user-driven resources.</p>
  </div>

  <div class="support-card community">
     <b class="support-title">Community</b>
    <p>Applications proposed and maintained by the TrueNAS community without official TrueNAS support.</p>
    <p>Issues for these applications are <a href="https://github.com/truenas/apps/issues">tracked separately</a> and addressed on a best-effort basis in the <a href="https://forums.truenas.com/">community forums</a> and other user-driven resources.</p>
  </div>
</div>

Some apps proposed by community members might be adopted as official Stable train apps.

See [App Support Definitions](/truenasapps/#app-support-definitions) for more information on application support levels.

TrueNAS Community Edition systems populate the **Discover** apps screen with the Stable and Community catalogs populate by default.
TrueNAS Enterprise-licensed systems show the Enterprise catalog.

Users can change the apps displayed on the **Discover** screen by adding or removing trains.
To add or remove a train, **Settings** on the **Configuration** dropdown list to open the **Settings** screen.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Settings Screen" id="Settings Screen" >}}

Select the **Preferred Trains** checkbox(es) for the train(s) to include, then click **Save**.

After making a change, go to the **Discover** screen and click on **Refresh Catalog** to pull the catalog from the repository and refresh it in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

To remove a train from the catalog, deselect the checkbox for the train on the **Settings** screen, then click **Save**.
You must have at least one train selected.
