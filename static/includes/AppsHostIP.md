&NewLine;

Application host IP port binding is being developed for all applications in the TrueNAS Apps catalog, starting with TrueNAS 25.04.
This feature allows per-app selection of any IP address from the available aliases assigned to an interface to bind the WebUI port to.
It includes port bind mode options to publish the port for external access or expose it for inter-container communication.

A small but growing list of applications currently support this functionality in TrueNAS 24.10 or later.

{{< expand "Applications that currently support host IP port binding" "v" >}}
The following applications currently support host IP port binding. More applications will be added over time.
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
Catalog updates to provide host IP port functionality to these applications will occur on June 1, 2025.
The updated versions of these applications will not function on TrueNAS versions earlier than 25.04.

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

{{< hint type=important title="Deadline for 24.04 to 24.10 App Migrations" >}}
TrueNAS 24.10 introduced a new Docker-based TrueNAS Apps backend and automated migration for Kubernetes-based apps on upgrade.

Due to breaking changes involved in enabling host IP port binding, **June 1, 2025** is the deadline for automatic apps migration on upgrade.
Any users still running TrueNAS Apps on 24.04 after June 1 will have to re-deploy those apps after upgrading to 24.10 or later.
{{< /hint >}}

{{< hint type=important title="End of 24.10 App Updates" >}}
**June 1, 2025** is the cutoff date for app updates on TrueNAS 24.10.
Any users still running TrueNAS Apps on 24.10 after June 1 must update TrueNAS to 25.04 (or later) to update or install new applications.

No further migration is required.
Normal application update and install functionality resumes after updating to the minimum TrueNAS version (25.04) or later.
{{< /hint >}}

**Summary**:
Applications added to the TrueNAS Apps catalog before December 24, 2024, require updates for host IP port binding.
These updates roll out on **June 1, 2025**, and require TrueNAS 25.04 or later.
Migrate from 24.04 to 24.10 before June 1, 2025, to ensure automatic app migration.

24.10 applications will not receive updates after June 1, 2025.
Update to 25.04 before June 1, 2025 to continue receiving regular app maintenance updates.
