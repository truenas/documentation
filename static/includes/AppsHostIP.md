&NewLine;

Application host IP port binding is being developed for all applications in the TrueNAS Apps catalog, starting with TrueNAS 25.04.
This feature allows per-app selection of any IP address from the available aliases assigned to an interface to bind the WebUI port to.
It includes port bind mode options to publish the port for external access or expose it for inter-container communication.

A small but growing list of applications currently support this functionality in TrueNAS 24.10 or later.

{{< expand "Applications that currently support host IP port binding" "v" >}}
The following applications currently support host IP port binding.
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

However, applications that were in the TrueNAS Apps catalog before implementation of this feature require OS-level changes to enable support.
Catalog updates to provide host IP port functionality to these applications are scheduled for June 1, 2025.
The updated versions of these applications do not function on TrueNAS versions earlier than 25.04.

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

As a result, June 1 is also the cutoff date for two related app behaviors:

* **24.04 to 24.10 App Migrations:**
  TrueNAS 24.10 introduced a new Docker-based TrueNAS Apps backend and automated migration for Kubernetes-based apps on upgrade.

  Due to breaking changes involved in enabling host IP port binding, **June 1, 2025** is the deadline for automatic apps migration on upgrade.
  Any users still running TrueNAS Apps on 24.04 after June 1 must re-deploy those apps after upgrading to 24.10 or later.

**App Updates in 24.10**

  Update to TrueNAS 24.04.2.2 before June 1, 2025 to continue receiving app updates without interruption, including the new IP port binding functionality.
  
  Previously installed apps on TrueNAS 24.10.2.1 (or earlier) do not receive updates after this point.
  Normal application update functionality resumes after TrueNAS updates to 24.10.2.2 or 25.04.

**App Updates in 25.04**

  Users of TrueNAS 25.04 continue receiving app updates without interruption, including the new IP port binding functionality.

  Applications installed on TrueNAS 25.04 before June 1, 2025 automatically update to enable the new functionality.
  No manual management is required.
