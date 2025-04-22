&NewLine;

Application host IP port binding is being developed for all applications in the TrueNAS Apps catalog.
This feature allows per-app selection of any IP address from the available aliases assigned to an interface to bind the WebUI port to.
It includes port bind mode options to publish the port for external access or expose it for inter-container communication.

A small but growing list of applications currently support this functionality in TrueNAS 24.10 or later.

However, applications that were in the TrueNAS Apps catalog before implementation of this feature require OS-level changes to enable support.
Catalog updates to provide host IP port functionality to these applications are scheduled for June 1, 2025.

{{< expand "Applications that currently support host IP port binding" "v" >}}
These applications currently support host IP port binding.
{{< columns >}}
* calibre-web  
* esphome  
* handbrake-web  
* homearr  
* invoiceninja  
* it-tools  
* jelu  
* lyrion-music-server  
* minecraft-bedrock  

<--->

* romm  
* satisfactory-server  
* steam-headless  
* terreria  
* tianji  
* umami  
* urbackup  
* zigbee2mqtt  
* emby  
{{< /columns >}}
All future applications, as well as those added to the TrueNAS Apps catalog after December 24, 2024, support this feature.
{{< /expand >}}
{{< expand "Applications that do not currently support host IP port binding" "v" >}}

{{< columns >}}
* actual-budget  
* adguard-home  
* audiobookshelf  
* autobrr  
* bazarr  
* briefkasten  
* calibre  
* castopod  
* chia  
* clamav  
* dashy  
* ddns-updater  
* deluge  
* distribution  
* dockge  
* drawio  
* eclipse-mosquitto  
* filebrowser  
* filestash  
* firefly-iii  
* flame  
* flaresolverr  
* freshrss  
* frigate  
* fscrawler  
* gaseous-server  
* gitea  
* grafana  
* handbrake  
  
<--->  

* homepage  
* homer  
* immich  
* invidious  
* ipfs  
* jellyfin  
* jellyseerr  
* jenkins  
* joplin  
* kapowarr  
* kavita  
* komga  
* lidarr  
* linkding  
* listmonk  
* logseq  
* mealie  
* metube  
* minecraft  
* mineos  
* mumble  
* n8n  
* navidrome  
* netbootxyz  
* nginx-proxy-manager  
* node-red  
* odoo  
* ollama  
* omada-controller

<--->  

* open-webui  
* organizr  
* overseerr  
* palworld  
* paperless-ngx  
* passbolt  
* penpot  
* pgadmin  
* pigallery2  
* piwigo  
* planka  
* portainer  
* postgres  
* prowlarr  
* qbittorrent  
* radarr  
* readarr  
* redis  
* roundcube  
* rsyncd  
* rust-desk  
* sabnzbd  
* scrutiny  
* searxng  
* sftpgo  
* sonarr  
* tautulli  
* tdarr  
* terraria

<--->  

* tftpd-hpa  
* tiny-media-manager  
* transmission  
* twofactor-auth  
* unifi-controller  
* uptime-kuma  
* vaultwarden  
* vikunja  
* webdav  
* whoogle  
* wordpress  
* asigra-ds-system  
* syncthing  
* collabora  
* diskoverdata  
* elastic-search  
* emby  
* home-assistant  
* ix-app (Custom App)
* minio  
* netdata  
* nextcloud  
* photoprism  
* pihole  
* plex  
* prometheus  
* storj  
* wg-easy
{{< /columns >}}

{{< /expand >}}

**App Migration from 24.04 to 24.10**

  TrueNAS 24.10 introduced a new Docker-based TrueNAS Apps backend and automated migration for Kubernetes-based apps on upgrade.

  Due to breaking changes involved in enabling host IP port binding, **June 1, 2025** is the deadline for automatic apps migration on upgrade.
  Any users still running TrueNAS Apps on 24.04 after June 1 must re-deploy those apps after upgrading to 24.10 or later.

**App Updates in 24.10**

  The cutoff date for simple app updates on TrueNAS 24.10 is **June 1, 2025**.
  Previously installed versions of these apps on TrueNAS 24.10 do not automatically update after this point.
  
  Any users with TrueNAS Apps deployed on 24.10 after June 1 must manually redeploy apps to the new IP port binding version at that time by uninstalling and then reinstalling the application.
  Ensure app user data is stored in persistent locations and note configuration settings before uninstalling existing applications to allow for easy redeployment.
  No further migration is required.
  Normal application update functionality resumes after manual redeployment of these apps.

**App Migration from 24.10 to 25.04**

  Update to TrueNAS 25.04 before June 1, 2025 to continue receiving app updates without interruption, including the new IP port binding functionality.

  Users who remain on 24.10 after June 1 can either manually redeploy affected applications in that version or update to 25.04 to resume app updates.

**25.04 App Updates**

  Applications installed on TrueNAS 25.04 before June 1, 2025 automatically update to enable the new functionality.
  No manual management is required.
