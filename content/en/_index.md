---
title: TrueNAS Documentation Hub
description: "Comprehensive documentation for TrueNAS Community Edition, TrueNAS Enterprise, TrueNAS Connect, and more."
---

{{< blocks/cover color="primary" height="micro" >}}
<div class="row align-items-center">
  <div class="col-lg-6 text-start pe-lg-5">
    <h1 class="cover-heading fw-bold mb-4">Documentation <span class="heading-gradient">Hub</span></h1>
    <p class="lead mt-3">The comprehensive repository for all TrueNAS software and hardware documentation. Find guides, references, and resources for TrueNAS Community Edition, Enterprise, Connect, and all TrueNAS products.</p>
    <div class="mt-4">
      <button class="btn btn-lg btn-primary me-3 mb-4" onclick="window.location.href='/software-status/'">Software Status</button>
      <button class="btn btn-lg btn-primary me-3 mb-4" onclick="openEnhancedSearch()">Keyword Search</button>
      <button class="btn btn-lg btn-secondary me-3 mb-4" onclick="document.getElementById('ai-search-trigger').click()">AI Search</button>
    </div>
  </div>
  <div class="col-lg-6 d-none d-lg-block text-end">
    <img src="/images/truenas-logo-mark.png" alt="TrueNAS Logo" class="img-fluid" style="max-width: 400px;">
  </div>
</div>
{{< /blocks/cover >}}

{{% blocks/section color="light" type="row" %}}
<div class="row justify-content-center g-4">

{{% blocks/feature icon="image:icons/tn-icon-black.png" title="TrueNAS" url="https://www.truenas.com/docs/" %}}
Complete guides, tutorials, and references for TrueNAS Community Edition and Enterprise deployments
{{% /blocks/feature %}}

{{% blocks/feature icon="image:icons/tnc-icon-black.svg" title="TrueNAS Connect" url="https://connect.truenas.com/" %}}
Centralized management for multiple TrueNAS systems with health monitoring and remote installation
{{% /blocks/feature %}}

{{% blocks/feature icon="material:storage" title="Products" url="/hardware/" %}}
TrueNAS hardware specifications, datasheets, and product family documentation
{{% /blocks/feature %}}

</div>
<div class="row justify-content-center g-4">

{{% blocks/feature icon="material:api" title="TrueNAS API" url="https://api.truenas.com/" %}}
TrueNAS Websocket API reference for automation and programmatic control of TrueNAS systems
{{% /blocks/feature %}}

{{% blocks/feature icon="material:apps" title="TrueNAS Apps Market" url="https://apps.truenas.com/" %}}
Extend TrueNAS functionality with containerized applications and services
{{% /blocks/feature %}}

{{% blocks/feature icon="material:shield" title="Security Reports" url="https://security.truenas.com/" %}}
Current security advisories, CVE reports, and vulnerability information
{{% /blocks/feature %}}

</div>

{{% /blocks/section %}}

{{% blocks/section color="white" type="row" %}}
## Additional Resources
{.h2 .text-center .mb-4 }

<div class="row justify-content-center g-4">

{{% blocks/feature icon="material:assessment" title="Software Status" url="/software-status/" %}}
Version recommendations, release schedules, upgrade paths, and download links
{{% /blocks/feature %}}

{{% blocks/feature icon="material:lightbulb" title="Solutions" url="/solutions/" %}}
Implementation guides and best practices for common deployment scenarios
{{% /blocks/feature %}}

{{% blocks/feature icon="material:handshake" title="Contributing" url="/contributing/" %}}
Join the community and contribute to TrueNAS documentation and open source projects
{{% /blocks/feature %}}

{{% blocks/feature icon="material:library_books" title="References" url="/references/" %}}
Technical specifications, glossaries, and supplementary documentation resources
{{% /blocks/feature %}}

</div>

{{% /blocks/section %}}
