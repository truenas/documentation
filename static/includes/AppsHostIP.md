&NewLine;

Application host IP port binding is being developed for all applications in the TrueNAS Apps catalog.
This feature allows per-app selection of any IP address from the available aliases assigned to an interface to bind the WebUI port to.
It includes port bind mode options to publish the port for external access or expose it for inter-container communication.

A small but growing list of applications currently support this functionality in TrueNAS 24.10 or later.

{{< expand "Applications that currently support host IP port binding" "v" >}}
All applications added to the TrueNAS Apps catalog after December 24, 2024 support host IP port binding. As of May 9, 2025, these applications include:
{{< columns >}}
* ArchiSteamFarm  
* Arti  
* Authelia  
* Authentik  
* Bitcoind  
* Calibre Web  
* Change Detection  
* Channels DVR  
* Cockpit WS  
* Code Server  
* Codegate  
* Concourse  
* ConvertX
* Crafty 4  
* Dozzle

<--->

* Duplicati  
* Electrs  
* Emby  
* ESPHome  
* Flood  
* Forgejo  
* Gitea Act Runner  
* Glances  
* Handbrake Web  
* Heimdall  
* Homearr
* Homebox  
* I2P  
* InfluxDB  
* Invoice Ninja  

<--->

* IT Tools  
* IX Remote Assist  
* Jackett  
* JDownloader2  
* Jelu  
* Karakeep  
* Kasm Workspaces  
* Lyrion Music Server  
* Minecraft Bedrock
* Open Speed Test  
* Outline  
* Playwright  
* Romm  
* Satisfactory Server  
* Scrypted  

<--->

* Spottarr  
* Steam Headless  
* Stirling PDF  
* Terreria  
* Tianji  
* TrueNAS WebUI  
* TVHeadend  
* Umami  
* Unmanic  
* UrBackup  
* Versity Gateway  
* Warracker  
* Windmill  
* Wyze Bridge  
* Zigbee2MQTT  
{{< /columns >}}
All applications added after this date also support this feature.
{{< /expand >}}

However, applications that were in the TrueNAS Apps catalog before implementation of this feature require OS-level changes to enable support.
Catalog updates to provide host IP port functionality to these applications are scheduled for June 1, 2025.
The updated versions of these applications do not function on TrueNAS versions earlier than 25.04.

{{< expand "Applications that do not currently support host IP port binding" "v" >}}

{{< columns >}}
* Actual Budget  
* Adguard Home  
* Asigra DS System  
* Audiobookshelf  
* Autobrr  
* Bazarr  
* Briefkasten  
* Calibre  
* Castopod  
* Chia  
* ClamAV  
* Collabora  
* Dashy  
* DDNS Updater  
* Deluge  
* Diskoverdata  
* Distribution  
* Dockge  
* Drawio  
* Eclipse Mosquitto  
* Elastic Search  
* Emby  
* Filebrowser  
* Filestash  
* Firefly III  
* Flame  
* Flaresolverr  
* FreshRSS  
* Frigate  
* FSCrawler  
* Gaseous Server  
* Gitea

<--->
  
* Grafana  
* Handbrake  
* Home Assistant  
* Homepage  
* Homer  
* Immich  
* Invidious  
* IPFS  
* IX App (Custom App)  
* Jellyfin  
* Jellyseerr  
* Jenkins  
* Joplin  
* Kapowarr  
* Kavita  
* Komga  
* Lidarr  
* Linkding  
* Listmonk  
* Logseq  
* Mealie  
* Metube  
* Minecraft  
* Minecraft Bedrock  
* MineOS  
* Minio  
* Mumble  
* N8N  
* Navidrome  
* NetbootXYZ  
* Netdata  
* Nextcloud  

<--->

* Nginx Proxy Manager  
* Node RED  
* Odoo  
* Ollama  
* Omada Controller  
* Open Speed Test  
* Open WebUI  
* Organizr  
* Outline  
* Overseerr  
* Palworld  
* Paperless NGX  
* Passbolt  
* Penpot  
* PGAdmin  
* Photoprism  
* PiGallery2  
* PiHole  
* Piwigo  
* Planka  
* Plex  
* Portainer  
* Postgres  
* Prometheus  
* Prowlarr  
* Qbittorrent  
* Radarr  
* Readarr  
* Redis  
* Romm  
* Roundcube  
* Rsyncd  

<--->

* Rust Desk  
* Satisfactory Server  
* Sabnzbd  
* Scrutiny  
* SearxNG  
* Scrypted  
* SFTPGo  
* Sonarr  
* Storj  
* Syncthing  
* Tautulli  
* TDarr  
* Terraria  
* TFTPD HPA  
* Tiny Media Manager  
* Transmission  
* TrueNAS WebUI  
* Twofactor Auth  
* Unifi Controller  
* Umami  
* Uptime Kuma  
* UrBackup  
* Vaultwarden  
* Versitygw  
* Vikunja  
* Warracker  
* WebDAV  
* WG Easy  
* Whoogle  
* Windmill  
* Wordpress  
* Wyze Bridge  
* Zigbee2MQTT  
{{< /columns >}}
These applications update to support host IP port binding on June 1, 2025.
{{< /expand >}}

As a result, June 1 is also the cutoff date for two related app behaviors:

* **24.04 to 24.10 App Migrations:**
  TrueNAS 24.10 introduced a new Docker-based TrueNAS Apps backend and automated migration for Kubernetes-based apps on upgrade.

  Due to breaking changes involved in enabling host IP port binding, **June 1, 2025** is the deadline for automatic apps migration on upgrade.
  Any users still running TrueNAS Apps on 24.04 after June 1 must re-deploy those apps after upgrading to 24.10 or later.

**App Updates in 24.10**

  Update to TrueNAS 24.10.2.2 before June 1, 2025 to continue receiving app updates without interruption, including the new IP port binding functionality.
  
  Previously installed apps on TrueNAS 24.10.2.1 (or earlier) do not receive updates after this point.
  Normal application update functionality resumes after TrueNAS updates to 24.10.2.2 or 25.04.

**App Updates in 25.04**

  Users of TrueNAS 25.04 continue receiving app updates without interruption, including the new IP port binding functionality.

  Applications installed on TrueNAS 25.04 before June 1, 2025 automatically update to enable the new functionality.
  No manual management is required.
